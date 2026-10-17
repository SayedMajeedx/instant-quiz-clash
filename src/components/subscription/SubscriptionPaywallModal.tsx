import { useState } from "react";
import { toast } from "sonner";
import { Check, Crown, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { startPayPalCheckout, type PaidPlan } from "@/lib/paypal";
import { PLAN_PRICES } from "@/lib/pricing";
import { cn } from "@/lib/utils";

interface SubscriptionPaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reason?: string;
}

/**
 * Upgrade to Pro. Says only what Pro really changes: free accounts host one game a day,
 * Pro hosts as many as they like. Players never pay either way.
 */
export function SubscriptionPaywallModal({ open, onOpenChange, reason }: SubscriptionPaywallModalProps) {
  const { lang } = useI18n();
  const [selectedPlan, setSelectedPlan] = useState<PaidPlan>("yearly");
  const [pending, setPending] = useState(false);

  const isAr = lang === "ar";
  const price = (plan: PaidPlan) => `${PLAN_PRICES[plan].symbol}${PLAN_PRICES[plan].amount}`;

  async function handleCheckout() {
    if (pending) return;
    setPending(true);
    try {
      const result = await startPayPalCheckout(selectedPlan);
      if ("alreadySubscribed" in result) {
        setPending(false);
        toast.success(isAr ? "اشتراكك فعّال بالفعل." : "You already have an active subscription.");
        onOpenChange(false);
        return;
      }
      // Full-page redirect (the button stays busy): PayPal sends the user back to /subscription/return.
      window.location.assign(result.approveUrl);
    } catch (err) {
      setPending(false);
      console.error("PayPal checkout failed:", err);
      toast.error(isAr ? "تعذر بدء الدفع عبر PayPal. حاول مرة أخرى." : "Could not start PayPal checkout. Please try again.");
    }
  }

  const plans: { id: PaidPlan; name: string; per: string; note: string | null }[] = [
    {
      id: "yearly",
      name: isAr ? "سنوي" : "Yearly",
      per: isAr ? "في السنة" : "per year",
      note: isAr ? "شهران مجاناً مقارنة بالشهري" : "Two months free compared with monthly",
    },
    { id: "monthly", name: isAr ? "شهري" : "Monthly", per: isAr ? "في الشهر" : "per month", note: null },
  ];

  const perks = isAr
    ? ["استضف عدداً غير محدود من الألعاب كل يوم", "اللاعبون ينضمون مجاناً دائماً", "ألغِ متى شئت، ويبقى Pro حتى نهاية الفترة المدفوعة"]
    : ["Host as many games as you like, every day", "Players always join for free", "Cancel any time and keep Pro until the paid period ends"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border-0 bg-card p-6 sm:rounded-3xl sm:p-8">
        <DialogHeader className="space-y-2 text-start sm:text-start">
          <span className="grid size-12 place-items-center rounded-xl bg-sun text-on-sun">
            <Crown className="size-6" aria-hidden />
          </span>
          <DialogTitle className="pt-2 font-display text-3xl">QuizClash Pro</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {reason === "daily_limit_reached"
              ? isAr
                ? "استخدمت لعبتك المجانية لهذا اليوم. مع Pro تستضيف ما تشاء من الألعاب."
                : "You've used today's free game. With Pro you can host as many games as you like."
              : isAr
                ? "الخطة المجانية تتيح لعبة واحدة يومياً. مع Pro تستضيف ما تشاء."
                : "The free plan hosts one game a day. Pro hosts as many as you like."}
          </DialogDescription>
        </DialogHeader>

        <ul className="space-y-2">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5">
              <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden />
              <span>{perk}</span>
            </li>
          ))}
        </ul>

        <div role="radiogroup" aria-label={isAr ? "اختر الخطة" : "Choose a plan"} className="grid gap-3 sm:grid-cols-2">
          {plans.map((plan) => {
            const active = selectedPlan === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedPlan(plan.id)}
                className={cn(
                  "press rounded-2xl bg-background p-4 text-start ring-2 transition-[box-shadow] duration-150",
                  active ? "ring-sun" : "ring-border",
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="font-semibold">{plan.name}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-5 place-items-center rounded-full border-2 transition-colors duration-150",
                      active ? "border-sun bg-sun text-on-sun" : "border-border",
                    )}
                  >
                    {active ? <Check className="size-3" strokeWidth={3.5} /> : null}
                  </span>
                </span>
                <span className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl tabular-nums" dir="ltr">
                    {price(plan.id)}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.per}</span>
                </span>
                {plan.note ? <span className="mt-1 block text-sm font-semibold text-sun">{plan.note}</span> : null}
              </button>
            );
          })}
        </div>

        <button type="button" onClick={() => void handleCheckout()} disabled={pending} className="ledge ledge-yellow w-full disabled:opacity-70">
          <span className="ledge-face h-14 font-display text-xl">
            {pending ? <Loader2 className="size-5 animate-spin" aria-hidden /> : null}
            {isAr ? `اشترك بـ ${price(selectedPlan)} عبر PayPal` : `Subscribe for ${price(selectedPlan)} with PayPal`}
          </span>
        </button>

        <p className="text-center text-sm text-muted-foreground">
          {isAr
            ? "الدفع عبر PayPal. اللعبة المجانية تتجدد كل يوم (بتوقيت UTC)."
            : "Payment is handled by PayPal. The free game renews every day (UTC)."}
        </p>
      </DialogContent>
    </Dialog>
  );
}
