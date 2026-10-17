// Shared PayPal Subscriptions helpers for the paypal-* edge functions.
//
// Required secrets (Supabase → Edge Functions → Secrets):
//   PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET   REST app credentials
//   PAYPAL_ENV                               "live" or "sandbox" (default "sandbox")
//   PAYPAL_PLAN_ID_MONTHLY, PAYPAL_PLAN_ID_YEARLY
//   PAYPAL_WEBHOOK_ID                        id of the webhook pointing at paypal-webhook
// Optional:
//   APP_ALLOWED_ORIGINS                      comma-separated origins PayPal may return to
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2.45.4";

export type PlanType = "monthly" | "yearly";

export type PayPalSubscription = {
  id: string;
  status: "APPROVAL_PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED" | "EXPIRED";
  plan_id: string;
  custom_id?: string;
  start_time?: string;
  subscriber?: { email_address?: string; payer_id?: string };
  billing_info?: {
    next_billing_time?: string;
    last_payment?: { time?: string };
  };
  links?: { href: string; rel: string; method?: string }[];
};

export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function requireEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required secret ${name}`);
  return value;
}

export function adminClient(): SupabaseClient {
  return createClient(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function paypalBaseUrl(): string {
  return Deno.env.get("PAYPAL_ENV") === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

let cachedToken: { value: string; expiresAt: number } | null = null;

async function accessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

  const credentials = btoa(`${requireEnv("PAYPAL_CLIENT_ID")}:${requireEnv("PAYPAL_CLIENT_SECRET")}`);
  const response = await fetch(`${paypalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!response.ok) throw new Error(`PayPal authentication failed (${response.status})`);

  const body = (await response.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: body.access_token, expiresAt: Date.now() + body.expires_in * 1000 };
  return cachedToken.value;
}

export async function paypalRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${paypalBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init.headers,
    },
  });
  const text = await response.text();
  if (!response.ok) {
    // PayPal error bodies carry a debug_id that support can trace.
    throw new Error(`PayPal ${init.method ?? "GET"} ${path} failed (${response.status}): ${text}`);
  }
  return (text ? JSON.parse(text) : undefined) as T;
}

export function planIdFor(plan: PlanType): string {
  return requireEnv(plan === "yearly" ? "PAYPAL_PLAN_ID_YEARLY" : "PAYPAL_PLAN_ID_MONTHLY");
}

function planTypeFor(planId: string): PlanType | null {
  if (planId === Deno.env.get("PAYPAL_PLAN_ID_MONTHLY")) return "monthly";
  if (planId === Deno.env.get("PAYPAL_PLAN_ID_YEARLY")) return "yearly";
  return null;
}

export function getSubscription(id: string): Promise<PayPalSubscription> {
  return paypalRequest<PayPalSubscription>(`/v1/billing/subscriptions/${encodeURIComponent(id)}`);
}

/** Verifies a webhook delivery with PayPal. Unsigned or forged events fail. */
export async function verifyWebhookSignature(headers: Headers, event: unknown): Promise<boolean> {
  const authAlgo = headers.get("paypal-auth-algo");
  const certUrl = headers.get("paypal-cert-url");
  const transmissionId = headers.get("paypal-transmission-id");
  const transmissionSig = headers.get("paypal-transmission-sig");
  const transmissionTime = headers.get("paypal-transmission-time");
  if (!authAlgo || !certUrl || !transmissionId || !transmissionSig || !transmissionTime) return false;

  const result = await paypalRequest<{ verification_status: string }>(
    "/v1/notifications/verify-webhook-signature",
    {
      method: "POST",
      body: JSON.stringify({
        auth_algo: authAlgo,
        cert_url: certUrl,
        transmission_id: transmissionId,
        transmission_sig: transmissionSig,
        transmission_time: transmissionTime,
        webhook_id: requireEnv("PAYPAL_WEBHOOK_ID"),
        webhook_event: event,
      }),
    },
  );
  return result.verification_status === "SUCCESS";
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// PayPal retries failed renewals for a few days before suspending.
const RENEWAL_GRACE_MS = 3 * 24 * 60 * 60 * 1000;

function addPeriod(from: Date, plan: PlanType): Date {
  const date = new Date(from);
  if (plan === "yearly") date.setUTCFullYear(date.getUTCFullYear() + 1);
  else date.setUTCMonth(date.getUTCMonth() + 1);
  return date;
}

function paidThrough(subscription: PayPalSubscription, plan: PlanType): Date | null {
  const lastPayment = subscription.billing_info?.last_payment?.time;
  return lastPayment ? addPeriod(new Date(lastPayment), plan) : null;
}

function accessFor(
  subscription: PayPalSubscription,
  plan: PlanType,
  now: Date,
): { status: string; expiresAt: Date | null } {
  switch (subscription.status) {
    case "ACTIVE": {
      const next = subscription.billing_info?.next_billing_time;
      const renewsAt = next
        ? new Date(next)
        : (paidThrough(subscription, plan) ?? addPeriod(now, plan));
      return { status: "active", expiresAt: new Date(renewsAt.getTime() + RENEWAL_GRACE_MS) };
    }
    case "CANCELLED":
      // Cancelling stops renewals; access lasts until the paid period ends.
      return { status: "cancelled", expiresAt: paidThrough(subscription, plan) ?? now };
    case "SUSPENDED":
      return { status: "past_due", expiresAt: now };
    case "EXPIRED":
      return { status: "expired", expiresAt: now };
    default:
      // APPROVAL_PENDING / APPROVED: not paid yet, grants nothing.
      return { status: "pending", expiresAt: null };
  }
}

export type SyncedSubscription = {
  user_id: string;
  plan_type: PlanType;
  status: string;
  expires_at: string | null;
};

/**
 * Writes PayPal's view of a subscription to user_subscriptions. Always pass
 * a subscription fetched from the PayPal API, never one taken from a request
 * body. `revoked` ends access immediately (refunds and reversals).
 */
export async function syncSubscription(
  admin: SupabaseClient,
  subscription: PayPalSubscription,
  { revoked = false }: { revoked?: boolean } = {},
): Promise<SyncedSubscription | null> {
  const userId = subscription.custom_id ?? "";
  if (!UUID_RE.test(userId)) {
    console.warn("PayPal subscription without a QuizClash user id:", subscription.id);
    return null;
  }
  const plan = planTypeFor(subscription.plan_id);
  if (!plan) {
    console.warn("PayPal subscription for an unknown plan:", subscription.id, subscription.plan_id);
    return null;
  }

  const now = new Date();
  const access = revoked ? { status: "expired", expiresAt: now } : accessFor(subscription, plan, now);

  const { data, error } = await admin
    .from("user_subscriptions")
    .upsert(
      {
        user_id: userId,
        provider: "paypal",
        provider_subscription_id: subscription.id,
        provider_plan_id: subscription.plan_id,
        provider_status: subscription.status,
        customer_email: subscription.subscriber?.email_address ?? null,
        plan_type: plan,
        status: access.status,
        expires_at: access.expiresAt?.toISOString() ?? null,
        started_at: subscription.start_time ?? now.toISOString(),
        updated_at: now.toISOString(),
      },
      { onConflict: "provider,provider_subscription_id" },
    )
    .select("user_id, plan_type, status, expires_at")
    .single();

  if (error) {
    // The account was deleted after subscribing: nothing to grant.
    if (error.code === "23503") {
      console.warn("PayPal subscription for a deleted user:", subscription.id);
      return null;
    }
    throw error;
  }
  return data as SyncedSubscription;
}
