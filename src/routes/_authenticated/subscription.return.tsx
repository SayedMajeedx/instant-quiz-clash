import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertTriangle, Clock, Crown, Loader2 } from "lucide-react";
import { AppHeader } from "@/components/quiz/AppHeader";
import { useI18n } from "@/lib/i18n";
import { confirmPayPalSubscription } from "@/lib/paypal";

// PayPal can take a few seconds to move an approved subscription to ACTIVE.
const CONFIRM_ATTEMPTS = 6;
const CONFIRM_DELAY_MS = 2500;

export const Route = createFileRoute("/_authenticated/subscription/return")({
  validateSearch: (search: Record<string, unknown>): { subscription_id?: string } =>
    typeof search["subscription_id"] === "string"
      ? { subscription_id: search["subscription_id"] }
      : {},
  head: () => ({ meta: [{ title: "QuizClash Pro" }] }),
  component: SubscriptionReturn,
});

type State = "checking" | "active" | "processing" | "failed";

function SubscriptionReturn() {
  const { subscription_id: subscriptionId } = Route.useSearch();
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const [state, setState] = useState<State>(subscriptionId ? "checking" : "failed");

  useEffect(() => {
    if (!subscriptionId) return;
    let cancelled = false;

    async function confirm() {
      for (let attempt = 1; attempt <= CONFIRM_ATTEMPTS && !cancelled; attempt += 1) {
        try {
          const access = await confirmPayPalSubscription(subscriptionId!);
          if (access.status === "active") {
            if (!cancelled) setState("active");
            return;
          }
          if (access.status !== "pending") break;
        } catch (err) {
          console.error("Could not confirm PayPal subscription:", err);
          break;
        }
        await new Promise((resolve) => window.setTimeout(resolve, CONFIRM_DELAY_MS));
      }
      // Still pending, or the check failed: the webhook will finish activation.
      if (!cancelled) setState((current) => (current === "checking" ? "processing" : current));
    }

    void confirm();
    return () => {
      cancelled = true;
    };
  }, [subscriptionId]);

  const copy = {
    checking: {
      Icon: Loader2,
      tone: "bg-secondary text-foreground",
      title: isAr ? "جارٍ تأكيد اشتراكك..." : "Confirming your subscription...",
      body: isAr ? "لحظات من فضلك." : "This only takes a moment.",
    },
    active: {
      Icon: Crown,
      tone: "bg-sun text-on-sun",
      title: isAr ? "أهلاً بك في QuizClash Pro!" : "Welcome to QuizClash Pro!",
      body: isAr ? "استضافة غير محدودة مفعّلة الآن." : "Unlimited hosting is now active.",
    },
    processing: {
      Icon: Clock,
      tone: "bg-answer-2 text-white",
      title: isAr ? "الدفع قيد المعالجة" : "Payment is processing",
      body: isAr
        ? "سيتم تفعيل اشتراكك تلقائياً خلال دقائق عند تأكيد PayPal للدفع."
        : "Your subscription will activate automatically within a few minutes, once PayPal confirms the payment.",
    },
    failed: {
      Icon: AlertTriangle,
      tone: "bg-answer-1 text-white",
      title: isAr ? "لم نتمكن من العثور على الاشتراك" : "We couldn't find that subscription",
      body: isAr
        ? "إذا تم خصم المبلغ، سيتم تفعيل اشتراكك تلقائياً. وإلا يمكنك المحاولة مرة أخرى."
        : "If you were charged, your subscription will activate automatically. Otherwise, please try again.",
    },
  }[state];

  const Icon = copy.Icon;

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="grid flex-1 place-items-center px-5 pb-16">
        <div role="status" aria-live="polite" className="w-full max-w-md rounded-3xl bg-card p-8 text-center">
          <span className={`mx-auto grid size-14 place-items-center rounded-2xl ${copy.tone}`}>
            <Icon className={state === "checking" ? "size-7 animate-spin" : "size-7"} aria-hidden />
          </span>
          <h1 key={state} className="mt-5 animate-rise font-display text-3xl">
            {copy.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{copy.body}</p>
          {state !== "checking" ? (
            <Link to="/host" className="ledge ledge-green mt-7 w-full">
              <span className="ledge-face h-14 font-display text-xl">{isAr ? "استضف لعبة" : "Host a game"}</span>
            </Link>
          ) : null}
        </div>
      </main>
    </div>
  );
}
