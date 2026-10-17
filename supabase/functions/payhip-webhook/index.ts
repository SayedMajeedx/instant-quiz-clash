// Retired: payments moved to PayPal (see paypal-webhook). This stub replaces
// the old handler, which accepted unsigned requests, so redeploying it closes
// that hole. Delete the deployed function once nothing points at it.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(() =>
  new Response(JSON.stringify({ error: "This endpoint has been retired" }), {
    status: 410,
    headers: { "Content-Type": "application/json" },
  }),
);
