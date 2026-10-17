import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatedBg } from "@/components/quiz/AnimatedBg";
import { LanguageToggle } from "@/components/quiz/LanguageToggle";
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
      icon: "⏳",
      title: isAr ? "جارٍ تأكيد اشتراكك..." : "Confirming your subscription...",
      body: isAr ? "لحظات من فضلك." : "This only takes a moment.",
    },
    active: {
      icon: "🎉",
      title: isAr ? "أهلاً بك في QuizClash Pro!" : "Welcome to QuizClash Pro!",
      body: isAr ? "استضافة غير محدودة مفعّلة الآن." : "Unlimited hosting is now active.",
    },
    processing: {
      icon: "🕐",
      title: isAr ? "الدفع قيد المعالجة" : "Payment is processing",
      body: isAr
        ? "سيتم تفعيل اشتراكك تلقائياً خلال دقائق عند تأكيد PayPal للدفع."
        : "Your subscription will activate automatically within a few minutes, once PayPal confirms the payment.",
    },
    failed: {
      icon: "⚠️",
      title: isAr ? "لم نتمكن من العثور على الاشتراك" : "We couldn't find that subscription",
      body: isAr
        ? "إذا تم خصم المبلغ، سيتم تفعيل اشتراكك تلقائياً. وإلا يمكنك المحاولة مرة أخرى."
        : "If you were charged, your subscription will activate automatically. Otherwise, please try again.",
    },
  }[state];

  return (
    <main className="relative grid min-h-screen place-items-center px-5" dir={isAr ? "rtl" : "ltr"}>
      <AnimatedBg />
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-end">
          <LanguageToggle />
        </div>
        <div className="rounded-3xl border border-border bg-surface-gradient p-8 text-center shadow-glow">
          <p className="font-display text-5xl">{copy.icon}</p>
          <h1 className="mt-3 font-display text-3xl text-gradient">{copy.title}</h1>
          <p className="mt-3 text-muted-foreground">{copy.body}</p>
          {state !== "checking" && (
            <Link
              to="/host"
              className="press mt-6 inline-block rounded-2xl bg-gradient-hero px-6 py-3 font-display text-primary-foreground shadow-chunky"
            >
              {isAr ? "استضف لعبة" : "Host a game"}
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
