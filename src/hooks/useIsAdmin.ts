import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    async function check() {
      try {
        const { data: authData } = await supabase.auth.getUser();
        if (!authData.user) {
          if (mounted) {
            setIsAdmin(false);
            setLoading(false);
          }
          return;
        }

        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", authData.user.id)
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
    check();
    return () => {
      mounted = false;
    };
  }, []);

  return { isAdmin, loading };
}
