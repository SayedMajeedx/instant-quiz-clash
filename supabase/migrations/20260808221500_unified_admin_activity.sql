-- Align activity reporting with actual room launches rather than only archived results.
CREATE OR REPLACE FUNCTION public.admin_activity_summary()
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
    'users', (SELECT count(*) FROM auth.users),
    'game_sessions', (
      SELECT count(*) FROM (
        SELECT r.id::text AS event_id FROM public.rooms r WHERE r.started_at IS NOT NULL
        UNION
        SELECT COALESCE(g.room_id::text, g.id::text) FROM public.game_results g
      ) sessions
    ),
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

REVOKE ALL ON FUNCTION public.admin_activity_summary() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_activity_summary() TO authenticated;
