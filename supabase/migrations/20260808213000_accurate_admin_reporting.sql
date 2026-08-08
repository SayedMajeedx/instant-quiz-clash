-- Accurate, admin-only reporting sourced from Auth and recorded game activity.
CREATE OR REPLACE FUNCTION public.admin_reporting_snapshot()
RETURNS jsonb
LANGUAGE plpgsql
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
    'quizzes', (SELECT count(*) FROM public.quizzes),
    'questions', (SELECT count(*) FROM public.questions),
    'users', (SELECT count(*) FROM auth.users),
    'game_sessions', (SELECT count(*) FROM public.game_results),
    'top_quizzes', COALESCE((
      SELECT jsonb_agg(to_jsonb(r) ORDER BY r.play_count DESC, r.last_played_at DESC)
      FROM (
        SELECT
          COALESCE(g.quiz_id::text, g.quiz_title) AS id,
          g.quiz_title AS title,
          COALESCE(max(q.category), 'عام') AS category,
          count(*)::integer AS play_count,
          max(g.played_at) AS last_played_at
        FROM public.game_results g
        LEFT JOIN public.quizzes q ON q.id = g.quiz_id
        GROUP BY COALESCE(g.quiz_id::text, g.quiz_title), g.quiz_title
        ORDER BY count(*) DESC, max(g.played_at) DESC
        LIMIT 5
      ) r
    ), '[]'::jsonb),
    'hardest_questions', COALESCE((
      SELECT jsonb_agg(to_jsonb(r) ORDER BY r.failure_rate DESC, r.total_attempts DESC)
      FROM (
        SELECT
          q.id::text AS id,
          q.question_text,
          COALESCE(z.category, 'عام') AS category,
          count(a.id)::integer AS total_attempts,
          count(a.id) FILTER (WHERE NOT a.is_correct)::integer AS wrong_attempts,
          round(100.0 * count(a.id) FILTER (WHERE NOT a.is_correct) / NULLIF(count(a.id), 0))::integer AS failure_rate
        FROM public.answers a
        JOIN public.questions q ON q.id = a.question_id
        LEFT JOIN public.quizzes z ON z.id = q.quiz_id
        GROUP BY q.id, q.question_text, z.category
        HAVING count(a.id) > 0
        ORDER BY failure_rate DESC, count(a.id) DESC
        LIMIT 5
      ) r
    ), '[]'::jsonb)
  ) INTO v_result;

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_reporting_snapshot() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_reporting_snapshot() TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_user_directory()
RETURNS TABLE (
  id uuid,
  email text,
  display_name text,
  role text,
  created_at timestamptz,
  last_sign_in_at timestamptz,
  total_games_hosted bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, pg_temp
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  SELECT
    u.id,
    u.email::text,
    COALESCE(NULLIF(p.display_name, ''), u.raw_user_meta_data->>'display_name', u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1), 'مستخدم')::text,
    CASE WHEN p.role = 'admin' THEN 'admin' ELSE 'user' END::text,
    u.created_at,
    u.last_sign_in_at,
    count(g.id)::bigint
  FROM auth.users u
  LEFT JOIN public.profiles p ON p.id = u.id
  LEFT JOIN public.game_results g ON g.host_id = u.id
  GROUP BY u.id, u.email, u.raw_user_meta_data, u.created_at, u.last_sign_in_at, p.display_name, p.role
  ORDER BY u.created_at DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_user_directory() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_user_directory() TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_set_user_role(p_user_id uuid, p_role text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, pg_temp
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;
  IF p_role NOT IN ('admin', 'user') THEN
    RAISE EXCEPTION 'Invalid role' USING ERRCODE = '22023';
  END IF;
  IF p_user_id = auth.uid() AND p_role <> 'admin' THEN
    RAISE EXCEPTION 'You cannot remove your own admin access' USING ERRCODE = '42501';
  END IF;

  INSERT INTO public.profiles (id, display_name, role)
  SELECT u.id, COALESCE(u.raw_user_meta_data->>'display_name', u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1), 'مستخدم'), p_role
  FROM auth.users u WHERE u.id = p_user_id
  ON CONFLICT (id) DO UPDATE SET role = EXCLUDED.role;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_set_user_role(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) TO authenticated;
