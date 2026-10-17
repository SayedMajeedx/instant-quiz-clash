import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, Zap, Lock, Crown } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { useI18n } from "@/lib/i18n";
import { cancelPayPalSubscription } from "@/lib/paypal";
import { Badge } from "@/components/ui/badge";

interface SubscriptionStatusBadgeProps {
  onOpenUpgrade?: () => void;
  className?: string;
}

export function SubscriptionStatusBadge({ onOpenUpgrade, className = "" }: SubscriptionStatusBadgeProps) {
  const { eligibility, isSubscribed, plan, quotaRemaining, loading, refresh } = useSubscription();
  const { lang } = useI18n();
  const [cancelling, setCancelling] = useState(false);
  const isAr = lang === "ar";

  if (loading) {
    return (
      <Badge variant="outline" className={`animate-pulse border-border/40 text-xs ${className}`}>
        ...
      </Badge>
    );
  }

  if (plan === "admin") {
    return (
      <Badge className={`bg-amber-500/20 text-amber-300 border-amber-500/40 gap-1.5 py-1 px-2.5 font-medium ${className}`}>
        <Crown className="w-3.5 h-3.5 text-amber-400" />
        {isAr ? "مسؤول" : "Admin"}
      </Badge>
    );
  }

  if (isSubscribed) {
    const until = eligibility?.expires_at
      ? new Date(eligibility.expires_at).toLocaleDateString(isAr ? "ar" : "en")
      : null;
    const cancelled = eligibility?.status === "cancelled";
    const canCancel = !cancelled && eligibility?.provider === "paypal";

    async function cancel() {
      const confirmed = window.confirm(
        isAr
          ? "إلغاء التجديد التلقائي؟ يبقى اشتراكك فعّالاً حتى نهاية الفترة المدفوعة."
          : "Cancel auto-renewal? You keep Pro until the end of the paid period.",
      );
      if (!confirmed) return;
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
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 gap-1.5 py-1 px-2.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          {cancelled && until
            ? isAr
              ? `برو حتى ${until}`
              : `Pro until ${until}`
            : isAr
              ? "مشترك برو ✦ غير محدود"
              : "Pro ✦ Unlimited"}
        </Badge>
        {canCancel && (
          <button
            type="button"
            onClick={() => void cancel()}
            disabled={cancelling}
            className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline disabled:opacity-50"
          >
            {isAr ? "إلغاء الاشتراك" : "Cancel"}
          </button>
        )}
      </span>
    );
  }

  const hasQuota = quotaRemaining > 0;

  return (
    <Badge
      variant="outline"
      onClick={onOpenUpgrade}
      className={`cursor-pointer transition-all hover:scale-105 gap-1.5 py-1 px-2.5 font-medium ${
        hasQuota
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
          : "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20"
      } ${className}`}
    >
      {hasQuota ? (
        <>
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          {isAr ? "1 كويز مجاني متبقي اليوم" : "1 Free Quiz Remaining Today"}
        </>
      ) : (
        <>
          <Lock className="w-3.5 h-3.5 text-red-400" />
          {isAr ? "نفد رصيد اليوم · ترقية لـ Pro" : "Daily Limit Used · Upgrade"}
        </>
      )}
    </Badge>
  );
}
