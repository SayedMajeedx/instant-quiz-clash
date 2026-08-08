-- Public catalog reads are separate from admin management. Everyone may read
-- public quizzes and the minimal tombstones needed to prevent bundled quizzes
-- from reappearing; writes remain protected by the existing admin policies.
CREATE OR REPLACE FUNCTION public.get_catalog_deleted_quizzes()
RETURNS TABLE (library_id text, title text, deleted_at timestamptz)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT deleted.library_id, deleted.title, deleted.deleted_at
  FROM public.admin_deleted_quizzes AS deleted
  ORDER BY deleted.deleted_at DESC;
$$;

REVOKE ALL ON FUNCTION public.get_catalog_deleted_quizzes() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_catalog_deleted_quizzes() TO anon, authenticated, service_role;

GRANT SELECT ON public.quizzes, public.questions TO anon, authenticated;

DROP POLICY IF EXISTS quizzes_public_catalog_select ON public.quizzes;
CREATE POLICY quizzes_public_catalog_select ON public.quizzes
  FOR SELECT TO anon, authenticated
  USING (is_public IS TRUE);

DROP POLICY IF EXISTS questions_public_catalog_select ON public.questions;
CREATE POLICY questions_public_catalog_select ON public.questions
  FOR SELECT TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.quizzes AS quiz
      WHERE quiz.id = questions.quiz_id
        AND quiz.is_public IS TRUE
    )
  );

NOTIFY pgrst, 'reload schema';
