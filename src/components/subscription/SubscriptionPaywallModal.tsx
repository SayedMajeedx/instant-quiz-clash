import { useState, useEffect } from "react";
import { Check, Sparkles, Zap, ShieldCheck, Crown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";

interface SubscriptionPaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reason?: string;
}

// Configurable Payhip Product Links (connected to actual Payhip membership products)
export const PAYHIP_CONFIG = {
  monthlyProductUrl: "https://payhip.com/order?link=hP2Fr&pricing_plan=xABmKPdKW1",
  yearlyProductUrl: "https://payhip.com/order?link=hP2Fr&pricing_plan=lNzM4b8gW7",
};

export function SubscriptionPaywallModal({
  open,
  onOpenChange,
  reason,
}: SubscriptionPaywallModalProps) {
  const { lang } = useI18n();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || "");
        setUserId(user.id);
      }
    }
    if (open) void loadUser();
  }, [open]);

  // Load Payhip.js script for seamless in-app overlay checkout
  useEffect(() => {
    if (typeof window === "undefined") return;
    const existing = document.getElementById("payhip-js");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "payhip-js";
      script.src = "https://payhip.com/payhip.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  function handleCheckout(plan: "monthly" | "yearly") {
    setLoading(true);
    const baseUrl =
      plan === "yearly"
        ? PAYHIP_CONFIG.yearlyProductUrl
        : PAYHIP_CONFIG.monthlyProductUrl;

    const url = new URL(baseUrl);
    if (userEmail) url.searchParams.set("email", userEmail);
    if (userId) url.searchParams.set("custom[user_id]", userId);

    // If Payhip overlay is available, trigger it, otherwise open secure checkout
    if (typeof window !== "undefined" && (window as any).Payhip?.openModal) {
      try {
        (window as any).Payhip.openModal(url.toString());
        setLoading(false);
        return;
      } catch {
        // fallback
      }
    }

    window.open(url.toString(), "_blank", "noopener,noreferrer");
    setLoading(false);
  }

  const isAr = lang === "ar";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-purple-500/30 bg-background/95 backdrop-blur-xl p-6 md:p-8">
        <DialogHeader className="text-center sm:text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/25">
            <Sparkles className="h-6 w-6" />
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-display">
            {isAr ? "ترقية حسابك إلى QuizClash Pro 🚀" : "Upgrade to QuizClash Pro 🚀"}
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            {reason === "daily_limit_reached"
              ? isAr
                ? "لقد استهلكت كويز اليوم المجاني! اشترك الآن واستمتع باستضافة غير محدودة للألعاب طوال اليوم."
                : "You have used your 1 free quiz for today! Upgrade now for unlimited game hosting."
              : isAr
                ? "اختر الباقة المناسبة لك للاستمتاع باستضافة وتحديات غير محدودة بدون قيود."
                : "Choose the plan that suits you for unlimited hosting and challenges."}
          </DialogDescription>
        </DialogHeader>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Monthly Plan */}
          <div
            onClick={() => setSelectedPlan("monthly")}
            className={`cursor-pointer relative rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between ${
              selectedPlan === "monthly"
                ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                : "border-border/60 bg-card/50 hover:border-purple-500/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-lg">
                  {isAr ? "الباقة الشهرية" : "Monthly Pro"}
                </span>
                <Badge variant="outline" className="text-xs">
                  {isAr ? "تجديد شهري" : "Billed Monthly"}
                </Badge>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                  1.200
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {isAr ? "د.ب / شهرياً" : "BHD / month"}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-xs md:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isAr ? "استضافة كويزات غير محدودة يومياً" : "Unlimited hosted quizzes daily"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isAr ? "جميع أنماط اللعب والفرق وقوى 50:50" : "All game modes, teams & power-ups"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isAr ? "إمكانية الإلغاء في أي وقت" : "Cancel anytime with 1-click"}</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleCheckout("monthly");
              }}
              variant={selectedPlan === "monthly" ? "default" : "outline"}
              className="mt-6 w-full rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold"
            >
              {isAr ? "اشترك شهرياً (1.2 د.ب)" : "Subscribe Monthly (1.2 BHD)"}
            </Button>
          </div>

          {/* Yearly Plan (Best Value) */}
          <div
            onClick={() => setSelectedPlan("yearly")}
            className={`cursor-pointer relative rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between ${
              selectedPlan === "yearly"
                ? "border-amber-500/80 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/40"
                : "border-border/60 bg-card/50 hover:border-amber-500/40"
            }`}
          >
            <div className="absolute -top-3 right-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-xs shadow-sm">
                <Crown className="w-3 h-3 mr-1 inline" />
                {isAr ? "الأفضل قيمة · وفّر شهرين!" : "Best Value · Save 2 Months!"}
              </Badge>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-lg">
                  {isAr ? "الباقة السنوية" : "Yearly Pro"}
                </span>
                <Badge variant="outline" className="text-xs border-amber-500/40 text-amber-300">
                  {isAr ? "دفعة واحدة" : "1 Year Pass"}
                </Badge>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                  10.000
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {isAr ? "د.ب / سنوياً" : "BHD / year"}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-xs md:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-foreground">{isAr ? "سنة كاملة من اللعب غير المحدود" : "Full year of unlimited games"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{isAr ? "توفير شهرين مجاناً مقارنة بالشهري" : "2 months FREE compared to monthly"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{isAr ? "أولوية في ميزات الذكاء الاصطناعي والمكتبة" : "Priority access to AI & library tools"}</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleCheckout("yearly");
              }}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold shadow-md shadow-amber-500/20"
            >
              {isAr ? "احصل على العرض السنوي (10 د.ب)" : "Get Yearly Pass (10 BHD)"}
            </Button>
          </div>
        </div>

        {/* Free Plan / Security Guarantee Note */}
        <div className="mt-6 rounded-xl bg-muted/40 p-3.5 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0" />
          <span>
            {isAr
              ? "دفع آمن 100% عبر Payhip · يتجدد الكويز المجاني تلقائياً كل 24 ساعة لجميع الحسابات."
              : "100% Secure payment powered by Payhip · Free quiz resets automatically every 24 hours."}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
