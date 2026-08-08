-- Close role-escalation paths and legacy privileged RPC exposure.

-- Remove legacy allow-all policies that were recreated by an old setup script.
DROP POLICY IF EXISTS "Permissive categories" ON public.categories;
DROP POLICY IF EXISTS "Permissive subcategories" ON public.subcategories;
DROP POLICY IF EXISTS "Permissive quizzes" ON public.quizzes;
DROP POLICY IF EXISTS "Permissive questions" ON public.questions;
DROP POLICY IF EXISTS "quizzes_public_all" ON public.quizzes;
DROP POLICY IF EXISTS "questions_public_all" ON public.questions;
DROP POLICY IF EXISTS "quizzes_public_select" ON public.quizzes;
DROP POLICY IF EXISTS "questions_public_select" ON public.questions;

-- Keep catalog reads public, but never expose private/generated quiz rows.
DROP POLICY IF EXISTS quizzes_public_catalog_select ON public.quizzes;
CREATE POLICY quizzes_public_catalog_select ON public.quizzes
  FOR SELECT TO anon, authenticated
  USING (is_public IS TRUE AND COALESCE(quiz_kind, 'standard') = 'standard');

DROP POLICY IF EXISTS questions_public_catalog_select ON public.questions;
CREATE POLICY questions_public_catalog_select ON public.questions
  FOR SELECT TO anon, authenticated
  USING (EXISTS (
    SELECT 1 FROM public.quizzes q
    WHERE q.id = quiz_id
      AND q.is_public IS TRUE
      AND COALESCE(q.quiz_kind, 'standard') = 'standard'
  ));

-- Explicit authenticated owner/admin paths preserve quiz creation, cloning and editing.
DROP POLICY IF EXISTS quizzes_owner_catalog_select ON public.quizzes;
CREATE POLICY quizzes_owner_catalog_select ON public.quizzes
  FOR SELECT TO authenticated USING (user_id = auth.uid());
DROP POLICY IF EXISTS quizzes_owner_catalog_insert ON public.quizzes;
CREATE POLICY quizzes_owner_catalog_insert ON public.quizzes
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS quizzes_owner_catalog_update ON public.quizzes;
CREATE POLICY quizzes_owner_catalog_update ON public.quizzes
  FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS quizzes_owner_catalog_delete ON public.quizzes;
CREATE POLICY quizzes_owner_catalog_delete ON public.quizzes
  FOR DELETE TO authenticated USING (user_id = auth.uid());
DROP POLICY IF EXISTS quizzes_profile_admin_all ON public.quizzes;
CREATE POLICY quizzes_profile_admin_all ON public.quizzes
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS questions_owner_catalog_select ON public.questions;
CREATE POLICY questions_owner_catalog_select ON public.questions
  FOR SELECT TO authenticated USING (EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_id AND q.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS questions_owner_catalog_insert ON public.questions;
CREATE POLICY questions_owner_catalog_insert ON public.questions
  FOR INSERT TO authenticated WITH CHECK (EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_id AND q.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS questions_owner_catalog_update ON public.questions;
CREATE POLICY questions_owner_catalog_update ON public.questions
  FOR UPDATE TO authenticated USING (EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_id AND q.user_id = auth.uid()
  )) WITH CHECK (EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_id AND q.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS questions_owner_catalog_delete ON public.questions;
CREATE POLICY questions_owner_catalog_delete ON public.questions
  FOR DELETE TO authenticated USING (EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_id AND q.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS questions_profile_admin_all ON public.questions;
CREATE POLICY questions_profile_admin_all ON public.questions
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS categories_profile_admin_all ON public.categories;
CREATE POLICY categories_profile_admin_all ON public.categories
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS subcategories_profile_admin_all ON public.subcategories;
CREATE POLICY subcategories_profile_admin_all ON public.subcategories
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Ordinary users may read their profile and edit only the harmless display name.
-- Admin role changes must go through admin_set_user_role(), which performs its own check.
REVOKE INSERT, UPDATE ON TABLE public.profiles FROM authenticated;
GRANT UPDATE (display_name) ON TABLE public.profiles TO authenticated;

CREATE OR REPLACE FUNCTION public.prevent_profile_role_escalation()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF COALESCE(NEW.role, 'user') <> 'user'
       AND auth.role() <> 'service_role'
       AND NOT public.is_admin() THEN
      RAISE EXCEPTION 'Role assignment requires admin access' USING ERRCODE = '42501';
    END IF;
  ELSIF NEW.role IS DISTINCT FROM OLD.role
        AND auth.role() <> 'service_role'
        AND NOT public.is_admin() THEN
    RAISE EXCEPTION 'Role changes require admin access' USING ERRCODE = '42501';
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.prevent_profile_role_escalation() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS protect_profile_role ON public.profiles;
CREATE TRIGGER protect_profile_role
BEFORE INSERT OR UPDATE OF role ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.prevent_profile_role_escalation();

-- Anonymous callers never need to discover admin status.
REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated, service_role;

-- Replace the legacy elevated upsert with an explicitly authorized version.
CREATE OR REPLACE FUNCTION public.upsert_admin_quiz_by_id_or_title(
  p_quiz_id uuid DEFAULT NULL,
  p_title text DEFAULT NULL,
  p_category text DEFAULT 'عام',
  p_subcategory text DEFAULT '',
  p_difficulty text DEFAULT 'standard',
  p_language text DEFAULT 'ar',
  p_is_public boolean DEFAULT true
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_target_id uuid;
BEGIN
  IF auth.role() <> 'service_role' AND NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  IF p_quiz_id IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE id = p_quiz_id LIMIT 1;
  END IF;
  IF v_target_id IS NULL AND NULLIF(btrim(p_title), '') IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE title = p_title LIMIT 1;
  END IF;

  IF v_target_id IS NOT NULL THEN
    UPDATE public.quizzes
    SET title = COALESCE(NULLIF(btrim(p_title), ''), title),
        category = COALESCE(p_category, category),
        subcategory = COALESCE(p_subcategory, subcategory),
        quiz_difficulty = COALESCE(p_difficulty, quiz_difficulty),
        language = COALESCE(p_language, language),
        is_public = COALESCE(p_is_public, is_public)
    WHERE id = v_target_id;
    RETURN v_target_id;
  END IF;

  IF NULLIF(btrim(p_title), '') IS NULL THEN
    RETURN NULL;
  END IF;

  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'An authenticated owner is required when creating a quiz' USING ERRCODE = '23502';
  END IF;

  INSERT INTO public.quizzes
    (id, title, user_id, category, subcategory, quiz_difficulty, language, is_public)
  VALUES
    (COALESCE(p_quiz_id, gen_random_uuid()), p_title, auth.uid(),
     COALESCE(p_category, 'عام'), COALESCE(p_subcategory, ''),
     COALESCE(p_difficulty, 'standard'), COALESCE(p_language, 'ar'),
     COALESCE(p_is_public, true))
  RETURNING id INTO v_target_id;

  RETURN v_target_id;
END;
$$;

REVOKE ALL ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean)
  TO authenticated, service_role;

-- Retire exposure from obsolete privileged overloads if they still exist.
REVOKE ALL ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean)
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean) TO service_role;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text) TO service_role;

-- Schema cache reload is maintenance-only and must never be callable by clients.
REVOKE ALL ON FUNCTION public.reload_schema_cache() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reload_schema_cache() TO service_role;

-- The public catalog needs deletion tombstones, but not an elevated function.
DROP POLICY IF EXISTS admin_deleted_quizzes_catalog_select ON public.admin_deleted_quizzes;
CREATE POLICY admin_deleted_quizzes_catalog_select ON public.admin_deleted_quizzes
  FOR SELECT TO anon, authenticated USING (true);
REVOKE SELECT ON TABLE public.admin_deleted_quizzes FROM anon, authenticated;
GRANT SELECT (library_id, title, deleted_at) ON TABLE public.admin_deleted_quizzes TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.get_catalog_deleted_quizzes()
RETURNS TABLE (library_id text, title text, deleted_at timestamptz)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public, pg_temp
AS $$
  SELECT deleted.library_id, deleted.title, deleted.deleted_at
  FROM public.admin_deleted_quizzes AS deleted
  ORDER BY deleted.deleted_at DESC;
$$;
REVOKE ALL ON FUNCTION public.get_catalog_deleted_quizzes() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_catalog_deleted_quizzes() TO anon, authenticated, service_role;

NOTIFY pgrst, 'reload schema';
