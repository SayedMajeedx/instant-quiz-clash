-- Fair ranking: score, then correctness, then participation, then cumulative
-- response speed. Team averages are calculated in the application display.
CREATE OR REPLACE FUNCTION private.archive_room(p_room_id uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  v_room public.rooms;
  v_quiz public.quizzes;
  v_game_id uuid;
  v_questions integer;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_room.quiz_id;
  IF v_quiz.id IS NULL OR v_quiz.user_id <> auth.uid() THEN RAISE EXCEPTION 'forbidden'; END IF;

  SELECT id INTO v_game_id FROM public.game_results WHERE room_id = p_room_id;
  IF v_game_id IS NOT NULL THEN RETURN v_game_id; END IF;

  SELECT count(*) INTO v_questions FROM public.questions WHERE quiz_id = v_room.quiz_id;

  INSERT INTO public.game_results (host_id, quiz_id, room_id, quiz_title, room_code, team_count, question_count, player_count, played_at)
  VALUES (
    v_quiz.user_id, v_room.quiz_id, v_room.id, v_quiz.title, v_room.code, v_room.team_count, v_questions,
    (SELECT count(*) FROM public.players WHERE room_id = v_room.id),
    COALESCE(v_room.started_at, v_room.created_at)
  )
  RETURNING id INTO v_game_id;

  INSERT INTO public.game_player_results (game_id, nickname, avatar_color, team_index, rank, score, correct_count, answered_count, best_streak)
  SELECT v_game_id, s.nickname, s.avatar_color, s.team_index,
         row_number() OVER (
           ORDER BY s.score DESC, s.correct_count DESC, s.answered_count DESC,
                    s.response_order ASC, s.player_id ASC
         )::int,
         s.score, s.correct_count, s.answered_count, s.best_streak
  FROM (
    SELECT p.id AS player_id, p.nickname, p.avatar_color, p.team_index,
           COALESCE(sum(a.points_awarded), 0)::int AS score,
           COALESCE(count(a.id) FILTER (WHERE a.is_correct), 0)::int AS correct_count,
           COALESCE(count(a.id), 0)::int AS answered_count,
           COALESCE(sum(EXTRACT(EPOCH FROM a.answered_at)), 0) AS response_order,
           COALESCE(max(a.streak_bonus) / 100 + 1, 0)::int AS best_streak
    FROM public.players p
    LEFT JOIN public.answers a ON a.player_id = p.id
    WHERE p.room_id = v_room.id
    GROUP BY p.id, p.nickname, p.avatar_color, p.team_index
  ) s;

  RETURN v_game_id;
END;
$function$;

REVOKE ALL ON FUNCTION private.archive_room(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.archive_room(uuid) TO authenticated;
