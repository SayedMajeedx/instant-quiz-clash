import { supabase } from "@/integrations/supabase/client";

export type PaidPlan = "monthly" | "yearly";

export type SubscriptionAccess = {
  paypalStatus: string;
  status: string | null;
  plan: PaidPlan | null;
  expiresAt: string | null;
};

type CheckoutResult = { approveUrl: string; subscriptionId: string } | { alreadySubscribed: true };

async function callPayPal<T>(body: Record<string, unknown>): Promise<T> {
  // invoke() attaches the signed-in user's session; the function derives the
  // user from it and never trusts ids in the body.
  const { data, error } = await supabase.functions.invoke("paypal-subscription", { body });
  if (error) {
    const context = (error as { context?: Response }).context;
    const detail = context ? await context.json().catch(() => null) : null;
    throw new Error(detail?.error ?? error.message);
  }
  return data as T;
}

/** Creates a PayPal subscription and returns where to send the user to approve it. */
export function startPayPalCheckout(plan: PaidPlan): Promise<CheckoutResult> {
  return callPayPal<CheckoutResult>({ action: "create", plan, origin: window.location.origin });
}

/** Called on return from PayPal; reads the subscription back from PayPal. */
export function confirmPayPalSubscription(subscriptionId: string): Promise<SubscriptionAccess> {
  return callPayPal<SubscriptionAccess>({ action: "confirm", subscriptionId });
}

/** Stops renewals. Access continues until the end of the paid period. */
export function cancelPayPalSubscription(): Promise<SubscriptionAccess> {
  return callPayPal<SubscriptionAccess>({ action: "cancel" });
}
