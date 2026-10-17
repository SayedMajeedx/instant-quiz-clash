// Signed-in subscription actions, called from the app with the user's session:
//   { action: "create", plan: "monthly" | "yearly", origin }  -> { approveUrl }
//   { action: "confirm", subscriptionId }                      -> current access
//   { action: "cancel" }                                       -> current access
// The user id always comes from the verified session, never from the body.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import type { SupabaseClient, User } from "npm:@supabase/supabase-js@2.45.4";
import {
  adminClient,
  corsHeaders,
  getSubscription,
  HttpError,
  json,
  paypalRequest,
  planIdFor,
  syncSubscription,
  type PayPalSubscription,
  type PlanType,
  type SyncedSubscription,
} from "../_shared/paypal.ts";

type Body = { action?: unknown; plan?: unknown; origin?: unknown; subscriptionId?: unknown };

const SUBSCRIPTION_ID_RE = /^I-[A-Z0-9]{6,40}$/;

function checkoutOrigin(origin: unknown): string {
  if (typeof origin !== "string") throw new HttpError(400, "Missing origin");
  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    throw new HttpError(400, "Invalid origin");
  }

  const allowed = (Deno.env.get("APP_ALLOWED_ORIGINS") ?? "")
    .split(",")
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter(Boolean);
  const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  const ok = allowed.length > 0 ? allowed.includes(url.origin) : url.protocol === "https:" || isLocal;
  if (!ok) throw new HttpError(400, "Origin not allowed");
  return url.origin;
}

function accessResponse(row: SyncedSubscription | null, paypalStatus: string) {
  return {
    paypalStatus,
    status: row?.status ?? null,
    plan: row?.plan_type ?? null,
    expiresAt: row?.expires_at ?? null,
  };
}

async function hasActiveSubscription(admin: SupabaseClient, userId: string): Promise<boolean> {
  const { data, error } = await admin
    .from("user_subscriptions")
    .select("id")
    .eq("user_id", userId)
    .eq("status", "active")
    .or(`expires_at.is.null,expires_at.gt.${new Date().toISOString()}`)
    .limit(1);
  if (error) throw error;
  return (data ?? []).length > 0;
}

async function createCheckout(admin: SupabaseClient, user: User, body: Body) {
  const plan: PlanType | null =
    body.plan === "monthly" || body.plan === "yearly" ? body.plan : null;
  if (!plan) throw new HttpError(400, "Unknown plan");
  const origin = checkoutOrigin(body.origin);

  if (await hasActiveSubscription(admin, user.id)) return { alreadySubscribed: true };

  const subscription = await paypalRequest<PayPalSubscription>("/v1/billing/subscriptions", {
    method: "POST",
    headers: { "PayPal-Request-Id": crypto.randomUUID(), Prefer: "return=representation" },
    body: JSON.stringify({
      plan_id: planIdFor(plan),
      custom_id: user.id,
      application_context: {
        brand_name: "QuizClash",
        user_action: "SUBSCRIBE_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: `${origin}/subscription/return`,
        cancel_url: `${origin}/host?checkout=cancelled`,
      },
    }),
  });

  const approveUrl = subscription.links?.find((link) => link.rel === "approve")?.href;
  if (!approveUrl) throw new Error(`PayPal returned no approval link for ${subscription.id}`);

  // Recorded as pending; it grants nothing until PayPal reports it ACTIVE.
  await syncSubscription(admin, subscription);
  return { approveUrl, subscriptionId: subscription.id };
}

async function confirmCheckout(admin: SupabaseClient, user: User, body: Body) {
  const id = typeof body.subscriptionId === "string" ? body.subscriptionId : "";
  if (!SUBSCRIPTION_ID_RE.test(id)) throw new HttpError(400, "Invalid subscription id");

  const subscription = await getSubscription(id);
  if (subscription.custom_id !== user.id) throw new HttpError(403, "Subscription belongs to another account");

  return accessResponse(await syncSubscription(admin, subscription), subscription.status);
}

async function cancelSubscription(admin: SupabaseClient, user: User) {
  const { data, error } = await admin
    .from("user_subscriptions")
    .select("provider_subscription_id")
    .eq("user_id", user.id)
    .eq("provider", "paypal")
    .eq("status", "active")
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  const id = data?.provider_subscription_id as string | undefined;
  if (!id) throw new HttpError(404, "No active PayPal subscription");

  await paypalRequest(`/v1/billing/subscriptions/${encodeURIComponent(id)}/cancel`, {
    method: "POST",
    body: JSON.stringify({ reason: "Cancelled by the subscriber in QuizClash" }),
  });
  const subscription = await getSubscription(id);
  return accessResponse(await syncSubscription(admin, subscription), subscription.status);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const admin = adminClient();
    const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data, error } = await admin.auth.getUser(token);
    if (error || !data.user) return json({ error: "Sign in required" }, 401);

    const body = (await req.json().catch(() => ({}))) as Body;
    switch (body.action) {
      case "create":
        return json(await createCheckout(admin, data.user, body));
      case "confirm":
        return json(await confirmCheckout(admin, data.user, body));
      case "cancel":
        return json(await cancelSubscription(admin, data.user));
      default:
        return json({ error: "Unknown action" }, 400);
    }
  } catch (err) {
    if (err instanceof HttpError) return json({ error: err.message }, err.status);
    console.error("paypal-subscription failed:", err);
    return json({ error: "Payment provider request failed" }, 502);
  }
});
