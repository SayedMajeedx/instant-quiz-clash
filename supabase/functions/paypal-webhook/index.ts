// PayPal webhook receiver. Every delivery is verified with PayPal before it
// is used, and the subscription is then re-read from the PayPal API, so the
// event body itself is never trusted.
//
// Subscribe the webhook (PayPal developer dashboard) to:
//   BILLING.SUBSCRIPTION.ACTIVATED, .UPDATED, .RE-ACTIVATED, .CANCELLED,
//   .SUSPENDED, .EXPIRED, .PAYMENT.FAILED,
//   PAYMENT.SALE.COMPLETED, PAYMENT.SALE.REFUNDED, PAYMENT.SALE.REVERSED
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import {
  adminClient,
  getSubscription,
  json,
  paypalRequest,
  syncSubscription,
  verifyWebhookSignature,
} from "../_shared/paypal.ts";

type WebhookEvent = {
  id?: string;
  event_type?: string;
  resource?: { id?: string; billing_agreement_id?: string; sale_id?: string };
};

async function subscriptionIdFor(event: WebhookEvent): Promise<string | null> {
  const type = event.event_type ?? "";
  const resource = event.resource ?? {};

  if (type.startsWith("BILLING.SUBSCRIPTION.")) return resource.id ?? null;
  if (resource.billing_agreement_id) return resource.billing_agreement_id;
  // Refund resources point at the sale, which points at the subscription.
  if (type === "PAYMENT.SALE.REFUNDED" && resource.sale_id) {
    const sale = await paypalRequest<{ billing_agreement_id?: string }>(
      `/v1/payments/sale/${encodeURIComponent(resource.sale_id)}`,
    );
    return sale.billing_agreement_id ?? null;
  }
  return null;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let event: WebhookEvent;
  try {
    event = JSON.parse(await req.text());
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  try {
    if (!(await verifyWebhookSignature(req.headers, event))) {
      console.warn("Rejected PayPal webhook with an invalid signature:", event.id);
      return json({ error: "Invalid signature" }, 400);
    }

    const subscriptionId = await subscriptionIdFor(event);
    if (!subscriptionId) return json({ received: true, ignored: event.event_type });

    const type = event.event_type ?? "";
    const revoked = type === "PAYMENT.SALE.REFUNDED" || type === "PAYMENT.SALE.REVERSED";
    const subscription = await getSubscription(subscriptionId);
    const row = await syncSubscription(adminClient(), subscription, { revoked });

    return json({ received: true, status: row?.status ?? null });
  } catch (err) {
    // A 5xx makes PayPal retry the delivery.
    console.error("PayPal webhook failed:", event.event_type, event.id, err);
    return json({ error: "Webhook processing failed" }, 500);
  }
});
