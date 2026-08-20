-- Security Advisors Hardening: Profiles RLS & Admin RPC permissions

-- 1. Remove insecure permissive profile policies
DROP POLICY IF EXISTS "Permissive profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update profiles role" ON public.profiles;

-- 2. Restrict Quiz Admin functions to authenticated/service_role only
REVOKE ALL ON FUNCTION public.get_all_admin_quizzes() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_all_admin_quizzes() TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean, jsonb) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean, jsonb) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) TO authenticated, service_role;

-- 3. Ensure rooms, players, answers policies exist
DROP POLICY IF EXISTS "rooms_public_all" ON public.rooms;
CREATE POLICY "rooms_public_all" ON public.rooms FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "players_public_all" ON public.players;
CREATE POLICY "players_public_all" ON public.players FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "answers_public_all" ON public.answers;
CREATE POLICY "answers_public_all" ON public.answers FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
