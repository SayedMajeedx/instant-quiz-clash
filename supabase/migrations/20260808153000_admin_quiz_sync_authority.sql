-- Make Supabase authoritative for deleted admin quizzes. The client must not
-- silently restore bundled quizzes if deletion-state synchronization fails.
CREATE OR REPLACE FUNCTION public.get_admin_deleted_quizzes()
RETURNS TABLE (library_id text, title text, deleted_at timestamptz)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  SELECT deleted.library_id, deleted.title, deleted.deleted_at
  FROM public.admin_deleted_quizzes AS deleted
  ORDER BY deleted.deleted_at DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.get_admin_deleted_quizzes() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_admin_deleted_quizzes() TO authenticated, service_role;
NOTIFY pgrst, 'reload schema';
