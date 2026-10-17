/**
 * Displayed plan prices. What PayPal actually charges is set by the PayPal plans
 * (PAYPAL_PLAN_ID_MONTHLY / PAYPAL_PLAN_ID_YEARLY); keep these in sync with them.
 */
export const PLAN_PRICES = {
  monthly: { amount: "3", short: "3", currency: { ar: "دولار", en: "USD" }, symbol: "$" },
  yearly: { amount: "30", short: "30", currency: { ar: "دولار", en: "USD" }, symbol: "$" },
};

/** Hosted games a free account can start per UTC day (enforced in the database). */
export const FREE_GAMES_PER_DAY = 1;
