-- One authoritative source for the four admin overview counters.
CREATE OR REPLACE FUNCTION public.admin_catalog_counts()
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, auth, pg_temp
AS $$
DECLARE
  v_result jsonb;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  SELECT jsonb_build_object(
    'quizzes', (
      SELECT count(*)
      FROM public.quizzes q
      WHERE COALESCE(q.quiz_kind, 'standard') <> 'custom_generated'
    ),
    'questions', (
      SELECT count(*)
      FROM public.questions question
      JOIN public.quizzes quiz ON quiz.id = question.quiz_id
      WHERE COALESCE(quiz.quiz_kind, 'standard') <> 'custom_generated'
    ),
    'categories', (
      SELECT count(DISTINCT lower(btrim(q.category)))
      FROM public.quizzes q
      WHERE COALESCE(q.quiz_kind, 'standard') <> 'custom_generated'
        AND NULLIF(btrim(q.category), '') IS NOT NULL
    ),
    'users', (SELECT count(*) FROM auth.users)
  ) INTO v_result;

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_catalog_counts() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_catalog_counts() TO authenticated;
