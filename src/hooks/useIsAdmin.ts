import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    async function checkUser(user: any) {
      if (!user) {
        if (mounted) {
          setIsAdmin(false);
          setLoading(false);
        }
        return;
      }

      try {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .maybeSingle();

        const role = (profile as any)?.role;
        const adminState = role === "admin" || role === "super_admin" || role === "owner";
        if (mounted) {
          setIsAdmin(adminState);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    }

    // Initial check
    supabase.auth.getUser().then(({ data }) => {
      checkUser(data.user);
    });

    // Listen to auth state changes (e.g. login with Google redirect completion)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      checkUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { isAdmin, loading };
}
