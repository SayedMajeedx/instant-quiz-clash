CREATE TABLE IF NOT EXISTS public.admin_deleted_quizzes (
  library_id text PRIMARY KEY,
  title text NOT NULL,
  deleted_at timestamptz NOT NULL DEFAULT now(),
  deleted_by uuid DEFAULT auth.uid()
);

ALTER TABLE public.admin_deleted_quizzes ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.admin_deleted_quizzes TO authenticated;
GRANT ALL ON public.admin_deleted_quizzes TO service_role;

DROP POLICY IF EXISTS "admin_deleted_quizzes_admin_select" ON public.admin_deleted_quizzes;
CREATE POLICY "admin_deleted_quizzes_admin_select"
  ON public.admin_deleted_quizzes FOR SELECT TO authenticated
  USING (public.is_admin());

CREATE OR REPLACE FUNCTION public.delete_admin_quizzes(
  p_quiz_ids uuid[] DEFAULT ARRAY[]::uuid[],
  p_library_ids text[] DEFAULT ARRAY[]::text[],
  p_titles text[] DEFAULT ARRAY[]::text[]
) RETURNS integer
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp
AS $$
DECLARE v_requested integer;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;
  v_requested := cardinality(p_library_ids);
  IF v_requested = 0 OR v_requested <> cardinality(p_titles) THEN
    RAISE EXCEPTION 'Quiz identifiers and titles must have matching non-zero lengths';
  END IF;

  INSERT INTO public.admin_deleted_quizzes (library_id, title, deleted_by)
  SELECT ids.library_id, titles.title, auth.uid()
  FROM unnest(p_library_ids) WITH ORDINALITY AS ids(library_id, n)
  JOIN unnest(p_titles) WITH ORDINALITY AS titles(title, n) USING (n)
  ON CONFLICT (library_id) DO UPDATE
    SET title = EXCLUDED.title, deleted_at = now(), deleted_by = auth.uid();

  DELETE FROM public.quizzes
  WHERE id = ANY(p_quiz_ids) OR title = ANY(p_titles);
  RETURN v_requested;
END;
$$;

REVOKE ALL ON FUNCTION public.delete_admin_quizzes(uuid[], text[], text[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.delete_admin_quizzes(uuid[], text[], text[]) TO authenticated, service_role;
NOTIFY pgrst, 'reload schema';
