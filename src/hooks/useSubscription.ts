import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SubscriptionEligibility = {
  allowed: boolean;
  is_subscribed: boolean;
  plan: "free" | "monthly" | "yearly" | "lifetime" | "custom" | "admin";
  quota_remaining: number | null;
  status?: "active" | "cancelled";
  provider?: "paypal" | "payhip" | "manual";
  expires_at?: string | null;
  reason?: string;
  usage_date?: string;
};

/** Room creation fails with this when a free host has used today's quiz. */
export function isDailyLimitError(error: { message?: string } | null | undefined): boolean {
  return Boolean(error?.message?.includes("daily_limit_reached"));
}

// Every mounted useSubscription() refetches when any of them refreshes, so
// the badge updates after a room is created elsewhere on the page.
const listeners = new Set<() => Promise<void>>();

/**
 * Display-only view of the hosting quota. The database enforces it when a
 * room is created, so a failed lookup here only affects what the UI shows.
 */
export function useSubscription() {
  const [eligibility, setEligibility] = useState<SubscriptionEligibility | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEligibility = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const {
        data: { user },
      } = await supabase.auth.getUser();
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
      if (rpcError) throw rpcError;
      setEligibility(data as unknown as SubscriptionEligibility);
    } catch (err) {
      console.error("Failed to load subscription status:", err);
      setError(err instanceof Error ? err.message : "Failed to load subscription");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchEligibility();
    const listener = () => fetchEligibility();
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [fetchEligibility]);

  const refresh = useCallback(async () => {
    await Promise.all([...listeners].map((listener) => listener()));
  }, []);

  return {
    eligibility,
    isSubscribed: eligibility?.is_subscribed ?? false,
    plan: eligibility?.plan ?? "free",
    quotaRemaining: eligibility?.quota_remaining ?? 0,
    allowed: eligibility?.allowed ?? true,
    loading,
    error,
    refresh,
  };
}
