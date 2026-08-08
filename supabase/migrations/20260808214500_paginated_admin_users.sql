-- Paginated Auth directory with a durable hosted-room count.
CREATE OR REPLACE FUNCTION public.admin_user_directory_page(
  p_page integer DEFAULT 1,
  p_page_size integer DEFAULT 10,
  p_search text DEFAULT '',
  p_role text DEFAULT 'all'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, pg_temp
AS $$
DECLARE
  v_page integer := greatest(COALESCE(p_page, 1), 1);
  v_size integer := least(greatest(COALESCE(p_page_size, 10), 1), 50);
  v_search text := lower(btrim(COALESCE(p_search, '')));
  v_result jsonb;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  WITH directory AS (
    SELECT
      u.id,
      u.email::text AS email,
      COALESCE(NULLIF(p.display_name, ''), u.raw_user_meta_data->>'display_name', u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1), 'مستخدم')::text AS display_name,
      CASE WHEN p.role = 'admin' THEN 'admin' ELSE 'user' END::text AS role,
      u.created_at,
      u.last_sign_in_at,
      COALESCE(hosted.total, 0)::bigint AS total_games_hosted
    FROM auth.users u
    LEFT JOIN public.profiles p ON p.id = u.id
    LEFT JOIN LATERAL (
      SELECT count(*) AS total
      FROM (
        -- Every room created from a quiz owned by this account is a hosted game.
        SELECT r.id::text AS event_id
        FROM public.rooms r
        JOIN public.quizzes q ON q.id = r.quiz_id
        WHERE q.user_id = u.id
        UNION
        -- Preserve historical completed games whose room or quiz was later removed.
        SELECT COALESCE(g.room_id::text, g.id::text)
        FROM public.game_results g
        WHERE g.host_id = u.id
      ) events
    ) hosted ON true
  ), filtered AS (
    SELECT * FROM directory
    WHERE (p_role = 'all' OR role = p_role)
      AND (v_search = '' OR lower(display_name) LIKE '%' || v_search || '%' OR lower(COALESCE(email, '')) LIKE '%' || v_search || '%')
  )
  SELECT jsonb_build_object(
    'items', COALESCE((SELECT jsonb_agg(to_jsonb(row_data) ORDER BY row_data.created_at DESC)
      FROM (SELECT * FROM filtered ORDER BY created_at DESC OFFSET (v_page - 1) * v_size LIMIT v_size) row_data), '[]'::jsonb),
    'filtered_total', (SELECT count(*) FROM filtered),
    'total_users', (SELECT count(*) FROM directory),
    'total_admins', (SELECT count(*) FROM directory WHERE role = 'admin')
  ) INTO v_result;

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_user_directory_page(integer, integer, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_user_directory_page(integer, integer, text, text) TO authenticated;
