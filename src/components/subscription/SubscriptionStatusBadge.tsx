import { Sparkles, Zap, Lock, Crown } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";

interface SubscriptionStatusBadgeProps {
  onOpenUpgrade?: () => void;
  className?: string;
}

export function SubscriptionStatusBadge({ onOpenUpgrade, className = "" }: SubscriptionStatusBadgeProps) {
  const { isSubscribed, plan, quotaRemaining, loading } = useSubscription();
  const { lang } = useI18n();

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
        {lang === "ar" ? "مسؤول" : "Admin"}
      </Badge>
    );
  }

  if (isSubscribed) {
    return (
      <Badge className={`bg-purple-500/20 text-purple-300 border-purple-500/40 gap-1.5 py-1 px-2.5 font-medium ${className}`}>
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        {lang === "ar" ? "مشترك برو ✦ غير محدود" : "Pro ✦ Unlimited"}
      </Badge>
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
          {lang === "ar" ? "1 كويز مجاني متبقي اليوم" : "1 Free Quiz Remaining Today"}
        </>
      ) : (
        <>
          <Lock className="w-3.5 h-3.5 text-red-400" />
          {lang === "ar" ? "نفد رصيد اليوم · ترقية لـ Pro" : "Daily Limit Used · Upgrade"}
        </>
      )}
    </Badge>
  );
}
