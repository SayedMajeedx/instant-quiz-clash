-- 1) Remove the permissive public read policy on admin_deleted_quizzes
DROP POLICY IF EXISTS "admin_deleted_quizzes_catalog_select" ON public.admin_deleted_quizzes;
REVOKE SELECT ON public.admin_deleted_quizzes FROM anon;

-- 2) Expose only the non-sensitive catalog columns through a definer function
CREATE OR REPLACE FUNCTION public.get_catalog_deleted_quizzes()
RETURNS TABLE(library_id text, title text, deleted_at timestamp with time zone)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public', 'pg_temp'
AS $$
  SELECT d.library_id, d.title, d.deleted_at
  FROM public.admin_deleted_quizzes AS d
  ORDER BY d.deleted_at DESC;
$$;

REVOKE ALL ON FUNCTION public.get_catalog_deleted_quizzes() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_catalog_deleted_quizzes() TO anon, authenticated, service_role;

-- 3) Admin-only SECURITY DEFINER functions must not be callable by anonymous visitors
REVOKE EXECUTE ON FUNCTION public.admin_activity_summary() FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_catalog_counts() FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_reporting_snapshot() FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_user_directory() FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_user_directory_page(integer, integer, text, text) FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.delete_admin_quizzes(uuid[], text[], text[]) FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.get_admin_deleted_quizzes() FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) FROM anon, PUBLIC;

-- 4) Quiz generation requires an authenticated account; drop anonymous execute
REVOKE EXECUTE ON FUNCTION public.create_custom_quiz_room(jsonb, text, integer, text) FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.generate_custom_quiz_room(text[], text[], integer, text, text, integer, text) FROM anon, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.custom_quiz_pool_size(text[], text[], text) FROM anon, PUBLIC;

-- 5) Ensure admin routines remain callable by signed-in admins (checked inside each function)
GRANT EXECUTE ON FUNCTION public.admin_activity_summary() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_catalog_counts() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_reporting_snapshot() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_user_directory() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_user_directory_page(integer, integer, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.delete_admin_quizzes(uuid[], text[], text[]) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_admin_deleted_quizzes() TO authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.create_custom_quiz_room(jsonb, text, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.generate_custom_quiz_room(text[], text[], integer, text, text, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.custom_quiz_pool_size(text[], text[], text) TO authenticated;