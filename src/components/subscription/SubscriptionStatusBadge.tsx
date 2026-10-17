import { useState } from "react";
import { toast } from "sonner";
import { Crown, ShieldCheck } from "lucide-react";
import { ConfirmDialog } from "@/components/quiz/ConfirmDialog";
import { useSubscription } from "@/hooks/useSubscription";
import { useI18n } from "@/lib/i18n";
import { cancelPayPalSubscription } from "@/lib/paypal";
import { cn } from "@/lib/utils";

interface SubscriptionStatusBadgeProps {
  onOpenUpgrade?: () => void;
  className?: string;
}

const chip = "inline-flex h-9 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold";

/** The host's plan at a glance: Pro, admin, or how today's free game stands. */
export function SubscriptionStatusBadge({ onOpenUpgrade, className = "" }: SubscriptionStatusBadgeProps) {
  const { eligibility, isSubscribed, plan, quotaRemaining, loading, refresh } = useSubscription();
  const { lang } = useI18n();
  const [cancelling, setCancelling] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const isAr = lang === "ar";

  if (loading) {
    return <span className={cn(chip, "w-28 animate-pulse bg-secondary", className)} aria-hidden />;
  }

  if (plan === "admin") {
    return (
      <span className={cn(chip, "bg-secondary", className)}>
        <ShieldCheck className="size-4 text-sun" aria-hidden />
        {isAr ? "مسؤول" : "Admin"}
      </span>
    );
  }

  if (isSubscribed) {
    const until = eligibility?.expires_at
      ? new Date(eligibility.expires_at).toLocaleDateString(isAr ? "ar" : "en")
      : null;
    const cancelled = eligibility?.status === "cancelled";
    const canCancel = !cancelled && eligibility?.provider === "paypal";

    async function cancel() {
      setCancelling(true);
      try {
        await cancelPayPalSubscription();
        toast.success(isAr ? "تم إلغاء التجديد التلقائي." : "Auto-renewal cancelled.");
        await refresh();
      } catch (err) {
        console.error("Failed to cancel subscription:", err);
        toast.error(isAr ? "تعذر إلغاء الاشتراك." : "Could not cancel the subscription.");
      } finally {
        setCancelling(false);
      }
    }

    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <span className={cn(chip, "bg-sun text-on-sun")}>
          <Crown className="size-4" aria-hidden />
          {cancelled && until ? (isAr ? `برو حتى ${until}` : `Pro until ${until}`) : "Pro"}
        </span>
        {canCancel ? (
          <button
            type="button"
            onClick={() => setConfirmOpen(true)}
            disabled={cancelling}
            className="text-sm text-muted-foreground underline-offset-2 hover:text-foreground hover:underline disabled:opacity-50"
          >
            {isAr ? "إلغاء الاشتراك" : "Cancel plan"}
          </button>
        ) : null}
        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title={isAr ? "إلغاء التجديد التلقائي؟" : "Cancel auto-renewal?"}
          body={
            isAr
              ? "يبقى اشتراكك فعّالاً حتى نهاية الفترة المدفوعة، ثم تعود للخطة المجانية."
              : "You keep Pro until the end of the paid period, then return to the free plan."
          }
          confirmLabel={isAr ? "إلغاء التجديد" : "Cancel renewal"}
          onConfirm={() => void cancel()}
        />
      </span>
    );
  }

  const hasQuota = quotaRemaining > 0;

  return (
    <button
      type="button"
      onClick={onOpenUpgrade}
      className={cn(chip, "press bg-secondary transition-colors duration-150 hover:bg-border", className)}
    >
      <span aria-hidden className={cn("size-2.5 rounded-full", hasQuota ? "bg-lime" : "bg-answer-1")} />
      {hasQuota
        ? isAr
          ? "لعبة مجانية متبقية اليوم"
          : "1 free game left today"
        : isAr
          ? "استخدمت لعبة اليوم · ترقية"
          : "Today's free game used · Upgrade"}
    </button>
  );
}
