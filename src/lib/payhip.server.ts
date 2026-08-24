import crypto from "node:crypto";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export async function verifyAndProcessPayhipWebhook(rawBody: string, headers: Record<string, string | string[] | undefined>) {
  let payload: Record<string, any> = {};
  try {
    payload = JSON.parse(rawBody);
  } catch {
    const params = new URLSearchParams(rawBody);
    for (const [key, val] of params.entries()) payload[key] = val;
  }

  const apiKey = process.env.PAYHIP_API_KEY || "14b7967ec4882e5a4654ddc9c2dbde66ff7b9ec1";
  const expectedSignature = crypto.createHash("sha256").update(apiKey).digest("hex");
  const receivedSignature = payload.signature || headers["x-payhip-signature"] || "";

  if (receivedSignature && typeof receivedSignature === "string" && receivedSignature.toLowerCase() !== expectedSignature.toLowerCase()) {
    throw new Error("Invalid signature");
  }

  const eventType = (payload.type || "paid").toLowerCase();
  const customerEmail = (payload.customer_email || payload.email || "").trim().toLowerCase();
  const customUserId = payload.custom?.user_id || payload["custom[user_id]"] || payload.user_id || null;
  const planName = (payload.plan_name || payload.product_name || "").toLowerCase();
  const price = Number(payload.price || payload.amount || 0);

  const isYearly = planName.includes("year") || planName.includes("سنو") || price >= 8;
  const planType = isYearly ? "yearly" : "monthly";

  // 1. Resolve Target User ID
  let targetUserId = customUserId;
  if (!targetUserId && customerEmail) {
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .ilike("email", customerEmail)
      .maybeSingle();

    if (profile?.id) {
      targetUserId = profile.id;
    } else {
      const { data: userData } = await supabaseAdmin.auth.admin.listUsers();
      const found = userData?.users?.find((u) => u.email?.toLowerCase() === customerEmail);
      if (found?.id) targetUserId = found.id;
    }
  }

  if (!targetUserId) {
    console.warn("Payhip webhook: user not found for email:", customerEmail);
    return { success: true, user_id: null, note: `User not found for ${customerEmail}` };
  }

  const now = new Date();
  const expiresAt = new Date(now);
  if (isYearly) {
    expiresAt.setDate(expiresAt.getDate() + 366);
  } else {
    expiresAt.setDate(expiresAt.getDate() + 32);
  }

  const payhipSubId = payload.subscription_id || payload.id || null;
  const payhipCustomerId = payload.customer_id || null;

  if (eventType === "subscription.created" || eventType === "paid" || eventType === "subscription.updated") {
    const { data: existing } = await supabaseAdmin
      .from("user_subscriptions")
      .select("id")
      .eq("user_id", targetUserId)
      .maybeSingle();

    if (existing?.id) {
      await supabaseAdmin
        .from("user_subscriptions")
        .update({
          customer_email: customerEmail,
          payhip_subscription_id: payhipSubId,
          payhip_customer_id: payhipCustomerId,
          plan_type: planType,
          status: "active",
          started_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
          updated_at: now.toISOString(),
        })
        .eq("id", existing.id);
    } else {
      await supabaseAdmin.from("user_subscriptions").insert({
        user_id: targetUserId,
        customer_email: customerEmail,
        payhip_subscription_id: payhipSubId,
        payhip_customer_id: payhipCustomerId,
        plan_type: planType,
        status: "active",
        started_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
        updated_at: now.toISOString(),
      });
    }
  } else if (eventType === "subscription.deleted" || eventType === "subscription.cancelled") {
    await supabaseAdmin
      .from("user_subscriptions")
      .update({
        status: "cancelled",
        updated_at: now.toISOString(),
      })
      .eq("user_id", targetUserId);
  } else if (eventType === "refunded") {
    await supabaseAdmin
      .from("user_subscriptions")
      .update({
        status: "expired",
        expires_at: now.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq("user_id", targetUserId);
  }

  return { success: true, user_id: targetUserId, event: eventType, plan: planType };
}
