import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SubscriptionEligibility = {
  allowed: boolean;
  is_subscribed: boolean;
  plan: "free" | "monthly" | "yearly" | "lifetime" | "admin";
  quota_remaining: number | null;
  expires_at?: string | null;
  reason?: string;
  usage_date?: string;
};

export function useSubscription() {
  const [eligibility, setEligibility] = useState<SubscriptionEligibility | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEligibility = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setEligibility({
          allowed: false,
          is_subscribed: false,
          plan: "free",
          quota_remaining: 0,
          reason: "auth_required",
        });
        return;
      }

      const { data, error: rpcError } = await supabase.rpc("check_user_hosting_eligibility");
      if (rpcError) {
        console.warn("Eligibility check RPC fallback:", rpcError);
        // Resilient fallback for newly initialized accounts
        setEligibility({
          allowed: true,
          is_subscribed: false,
          plan: "free",
          quota_remaining: 1,
        });
        return;
      }

      setEligibility(data as unknown as SubscriptionEligibility);
    } catch (err: any) {
      console.error("Failed to load subscription status:", err);
      setError(err?.message || "Failed to load subscription");
    } finally {
      setLoading(false);
    }
  }, []);

  const claimDailyQuiz = useCallback(async (): Promise<boolean> => {
    try {
      const { data, error: rpcError } = await supabase.rpc("claim_daily_hosted_quiz");
      if (rpcError) {
        console.error("Failed to claim daily quiz:", rpcError);
        return false;
      }
      await fetchEligibility();
      return true;
    } catch (err) {
      console.error("Error claiming daily quiz:", err);
      return false;
    }
  }, [fetchEligibility]);

  useEffect(() => {
    void fetchEligibility();
  }, [fetchEligibility]);

  return {
    eligibility,
    isSubscribed: eligibility?.is_subscribed ?? false,
    plan: eligibility?.plan ?? "free",
    quotaRemaining: eligibility?.quota_remaining ?? 0,
    allowed: eligibility?.allowed ?? true,
    loading,
    error,
    refresh: fetchEligibility,
    claimDailyQuiz,
  };
}
