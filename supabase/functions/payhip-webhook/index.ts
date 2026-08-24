import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function calculateSha256(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const rawBody = await req.text();
    let payload: Record<string, any> = {};

    try {
      payload = JSON.parse(rawBody);
    } catch {
      // Fallback for form-urlencoded
      const params = new URLSearchParams(rawBody);
      for (const [key, val] of params.entries()) {
        payload[key] = val;
      }
    }

    const apiKey = Deno.env.get("PAYHIP_API_KEY") || "14b7967ec4882e5a4654ddc9c2dbde66ff7b9ec1";
    const expectedSignature = await calculateSha256(apiKey);
    const receivedSignature = payload.signature || req.headers.get("x-payhip-signature") || "";

    if (receivedSignature && receivedSignature.toLowerCase() !== expectedSignature.toLowerCase()) {
      console.warn("Payhip signature mismatch:", { received: receivedSignature, expected: expectedSignature });
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const eventType = (payload.type || "paid").toLowerCase();
    const customerEmail = (payload.customer_email || payload.email || "").trim().toLowerCase();
    const customUserId = payload.custom?.user_id || payload["custom[user_id]"] || payload.user_id || null;
    const planName = (payload.plan_name || payload.product_name || "").toLowerCase();
    const price = Number(payload.price || payload.amount || 0);

    const isYearly = planName.includes("year") || planName.includes("سنو") || price >= 8;
    const planType = isYearly ? "yearly" : "monthly";

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // 1. Resolve Target User ID
    let targetUserId = customUserId;
    if (!targetUserId && customerEmail) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .ilike("email", customerEmail)
        .maybeSingle();

      if (profile?.id) {
        targetUserId = profile.id;
      } else {
        // Look up in auth.users
        const { data: userData } = await supabase.auth.admin.listUsers();
        const found = userData?.users?.find((u) => u.email?.toLowerCase() === customerEmail);
        if (found?.id) targetUserId = found.id;
      }
    }

    if (!targetUserId) {
      console.warn("Could not find user for Payhip customer email:", customerEmail);
      // Return 200 so Payhip doesn't retry unnecessarily
      return new Response(
        JSON.stringify({ received: true, note: "User not found yet for email: " + customerEmail }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const now = new Date();
    const expiresAt = new Date(now);
    if (isYearly) {
      expiresAt.setDate(expiresAt.getDate() + 366); // 1 year + 1 day grace
    } else {
      expiresAt.setDate(expiresAt.getDate() + 32); // 1 month + 2 days grace
    }

    const payhipSubId = payload.subscription_id || payload.id || null;
    const payhipCustomerId = payload.customer_id || null;

    if (eventType === "subscription.created" || eventType === "paid" || eventType === "subscription.updated") {
      // Check existing active subscription
      const { data: existing } = await supabase
        .from("user_subscriptions")
        .select("id")
        .eq("user_id", targetUserId)
        .maybeSingle();

      if (existing?.id) {
        await supabase
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
        await supabase.from("user_subscriptions").insert({
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

      console.log(`Successfully activated ${planType} subscription for user ${targetUserId} (${customerEmail})`);
    } else if (eventType === "subscription.deleted" || eventType === "subscription.cancelled") {
      await supabase
        .from("user_subscriptions")
        .update({
          status: "cancelled",
          updated_at: now.toISOString(),
        })
        .eq("user_id", targetUserId);

      console.log(`Cancelled subscription for user ${targetUserId}`);
    } else if (eventType === "refunded") {
      await supabase
        .from("user_subscriptions")
        .update({
          status: "expired",
          expires_at: now.toISOString(),
          updated_at: now.toISOString(),
        })
        .eq("user_id", targetUserId);

      console.log(`Expired refunded subscription for user ${targetUserId}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        user_id: targetUserId,
        event: eventType,
        plan: planType,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err: any) {
    console.error("Payhip webhook error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
