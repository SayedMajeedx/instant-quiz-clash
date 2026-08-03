-- 1. Move privileged implementations into the non-exposed `private` schema.

CREATE OR REPLACE FUNCTION private.join_room(p_code text, p_nickname text, p_avatar_color text DEFAULT '#a855f7'::text)
RETURNS public.players LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  v_room public.rooms;
  v_nick text := btrim(p_nickname);
  v_try text;
  v_color text := COALESCE(NULLIF(btrim(p_avatar_color), ''), '#a855f7');
  v_player public.players;
  v_team integer := NULL;
  i int := 0;
BEGIN
  IF v_color !~ '^#[0-9a-fA-F]{6}$' THEN v_color := '#a855f7'; END IF;
  IF length(v_nick) < 2 OR length(v_nick) > 18 THEN RAISE EXCEPTION 'invalid nickname'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE code = upper(btrim(p_code));
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.status = 'ended' THEN RAISE EXCEPTION 'room ended'; END IF;
  IF (SELECT count(*) FROM public.players WHERE room_id = v_room.id) >= 200 THEN
    RAISE EXCEPTION 'room full';
  END IF;

  IF v_room.team_count > 1 THEN
    SELECT t.idx INTO v_team
    FROM generate_series(0, v_room.team_count - 1) AS t(idx)
    ORDER BY (SELECT count(*) FROM public.players p WHERE p.room_id = v_room.id AND p.team_index = t.idx), t.idx
    LIMIT 1;
  END IF;

  v_try := v_nick;
  WHILE i < 8 LOOP
    IF NOT EXISTS (SELECT 1 FROM public.players WHERE room_id = v_room.id AND nickname = v_try) THEN
      INSERT INTO public.players (room_id, nickname, avatar_color, team_index)
      VALUES (v_room.id, v_try, v_color, v_team)
      RETURNING * INTO v_player;
      RETURN v_player;
    END IF;
    i := i + 1;
    v_try := left(v_nick, 16) || (i + 1)::text;
  END LOOP;
  RAISE EXCEPTION 'could not join';
END;
$function$;

CREATE OR REPLACE FUNCTION private.submit_answer(p_player_id uuid, p_question_id uuid, p_choice integer, p_powerup text DEFAULT NULL::text)
RETURNS public.answers LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  v_player public.players;
  v_room public.rooms;
  v_question public.questions;
  v_start_ms numeric := 0;
  v_elapsed numeric;
  v_ms_used numeric;
  v_limit numeric;
  v_correct boolean;
  v_points integer := 0;
  v_bonus integer := 0;
  v_streak integer := 0;
  v_powerup text := NULLIF(btrim(COALESCE(p_powerup, '')), '');
  v_answer public.answers;
  q record;
BEGIN
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id;
  IF v_player.id IS NULL THEN RAISE EXCEPTION 'unknown player'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.id IS NULL OR v_room.status = 'ended' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;
  IF p_choice < 0 OR p_choice > 3 THEN RAISE EXCEPTION 'invalid choice'; END IF;

  IF EXISTS (SELECT 1 FROM public.answers WHERE player_id = p_player_id AND question_id = p_question_id) THEN
    RAISE EXCEPTION 'already answered';
  END IF;

  IF v_powerup IS NOT NULL AND v_powerup <> 'double' THEN RAISE EXCEPTION 'unknown powerup'; END IF;
  IF v_powerup = 'double' AND v_player.used_double THEN v_powerup := NULL; END IF;

  FOR q IN SELECT time_limit_seconds, order_index FROM public.questions
           WHERE quiz_id = v_room.quiz_id AND order_index < v_question.order_index LOOP
    v_start_ms := v_start_ms + greatest(1, q.time_limit_seconds) * 1000 + 4500 + 5500;
  END LOOP;

  v_elapsed := EXTRACT(EPOCH FROM (now() - v_room.started_at)) * 1000;
  v_ms_used := v_elapsed - v_start_ms;
  v_limit := greatest(1, v_question.time_limit_seconds) * 1000;
  IF v_ms_used < 0 OR v_ms_used > v_limit + 1500 THEN RAISE EXCEPTION 'question not active'; END IF;
  v_ms_used := least(v_limit, greatest(0, v_ms_used));

  v_correct := (p_choice = v_question.correct_index);
  IF v_correct THEN
    v_points := round((1000 - 700 * (v_ms_used / v_limit)) / 10) * 10;

    FOR q IN SELECT qq.id FROM public.questions qq
             WHERE qq.quiz_id = v_room.quiz_id AND qq.order_index < v_question.order_index
             ORDER BY qq.order_index DESC LOOP
      IF EXISTS (SELECT 1 FROM public.answers a
                 WHERE a.player_id = p_player_id AND a.question_id = q.id AND a.is_correct) THEN
        v_streak := v_streak + 1;
      ELSE
        EXIT;
      END IF;
    END LOOP;
    v_bonus := least(v_streak, 4) * 100;
    v_points := v_points + v_bonus;
  END IF;

  IF v_powerup = 'double' THEN
    v_points := v_points * 2;
    UPDATE public.players SET used_double = true WHERE id = p_player_id;
  END IF;

  INSERT INTO public.answers (room_id, question_id, player_id, choice_index, is_correct, points_awarded, streak_bonus, powerup)
  VALUES (v_room.id, v_question.id, v_player.id, p_choice, v_correct, v_points, v_bonus, v_powerup)
  RETURNING * INTO v_answer;
  RETURN v_answer;
END;
$function$;

CREATE OR REPLACE FUNCTION private.use_fifty_fifty(p_player_id uuid, p_question_id uuid)
RETURNS integer[] LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  v_player public.players;
  v_room public.rooms;
  v_question public.questions;
  v_hidden integer[];
BEGIN
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id;
  IF v_player.id IS NULL THEN RAISE EXCEPTION 'unknown player'; END IF;

  IF v_player.fifty_question_id = p_question_id THEN RETURN v_player.fifty_hidden; END IF;
  IF v_player.used_fifty THEN RAISE EXCEPTION 'powerup already used'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.id IS NULL OR v_room.status = 'ended' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;
  IF EXISTS (SELECT 1 FROM public.answers WHERE player_id = p_player_id AND question_id = p_question_id) THEN
    RAISE EXCEPTION 'already answered';
  END IF;

  SELECT array_agg(i) INTO v_hidden FROM (
    SELECT i FROM generate_series(0, 3) AS g(i)
    WHERE i <> v_question.correct_index
    ORDER BY random() LIMIT 2
  ) s;

  UPDATE public.players
  SET used_fifty = true, fifty_question_id = p_question_id, fifty_hidden = v_hidden
  WHERE id = p_player_id;

  RETURN v_hidden;
END;
$function$;

CREATE OR REPLACE FUNCTION private.room_players(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, nickname text, avatar_color text, joined_at timestamp with time zone, team_index integer, used_double boolean, used_fifty boolean, fifty_question_id uuid, fifty_hidden integer[])
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  SELECT p.id, p.room_id, p.nickname, p.avatar_color, p.joined_at, p.team_index,
         CASE WHEN p.id = p_player_id THEN p.used_double ELSE false END,
         CASE WHEN p.id = p_player_id THEN p.used_fifty ELSE false END,
         CASE WHEN p.id = p_player_id THEN p.fifty_question_id ELSE NULL END,
         CASE WHEN p.id = p_player_id THEN p.fifty_hidden ELSE NULL END
  FROM public.players p
  WHERE p.room_id = p_room_id
    AND private.room_is_live(p_room_id)
    AND EXISTS (SELECT 1 FROM public.players me WHERE me.id = p_player_id AND me.room_id = p_room_id)
  ORDER BY p.joined_at;
$function$;

CREATE OR REPLACE FUNCTION private.room_answers(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, question_id uuid, player_id uuid, choice_index integer, answered_at timestamp with time zone, is_correct boolean, points_awarded integer, streak_bonus integer, powerup text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  SELECT a.id, a.room_id, a.question_id, a.player_id,
         CASE WHEN a.player_id = p_player_id THEN a.choice_index ELSE -1 END,
         a.answered_at, a.is_correct, a.points_awarded, a.streak_bonus,
         CASE WHEN a.player_id = p_player_id THEN a.powerup ELSE NULL END
  FROM public.answers a
  WHERE a.room_id = p_room_id
    AND private.room_is_live(p_room_id)
    AND EXISTS (SELECT 1 FROM public.players me WHERE me.id = p_player_id AND me.room_id = p_room_id);
$function$;

CREATE OR REPLACE FUNCTION private.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND private.room_is_live(r.id)
  ORDER BY q.order_index;
$function$;

CREATE OR REPLACE FUNCTION private.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  v_room public.rooms;
  v_elapsed numeric;
  v_cursor numeric := 0;
  q record;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id;
  IF v_room.id IS NULL OR v_room.started_at IS NULL THEN RETURN; END IF;
  v_elapsed := EXTRACT(EPOCH FROM (now() - v_room.started_at)) * 1000;

  FOR q IN SELECT id, correct_index, time_limit_seconds FROM public.questions
           WHERE quiz_id = v_room.quiz_id ORDER BY order_index LOOP
    v_cursor := v_cursor + greatest(1, q.time_limit_seconds) * 1000;
    IF v_elapsed >= v_cursor OR v_room.status = 'ended' THEN
      question_id := q.id;
      correct_index := q.correct_index;
      RETURN NEXT;
    END IF;
    v_cursor := v_cursor + 4500 + 5500;
  END LOOP;
END;
$function$;

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
         row_number() OVER (ORDER BY s.score DESC, s.nickname)::int,
         s.score, s.correct_count, s.answered_count, s.best_streak
  FROM (
    SELECT p.nickname, p.avatar_color, p.team_index,
           COALESCE(sum(a.points_awarded), 0)::int AS score,
           COALESCE(count(a.id) FILTER (WHERE a.is_correct), 0)::int AS correct_count,
           COALESCE(count(a.id), 0)::int AS answered_count,
           COALESCE(max(a.streak_bonus) / 100 + 1, 0)::int AS best_streak
    FROM public.players p
    LEFT JOIN public.answers a ON a.player_id = p.id
    WHERE p.room_id = v_room.id
    GROUP BY p.id, p.nickname, p.avatar_color, p.team_index
  ) s;

  RETURN v_game_id;
END;
$function$;

-- 2. Replace the exposed public functions with SECURITY INVOKER wrappers.

DROP FUNCTION IF EXISTS public.join_room(text, text, text);
DROP FUNCTION IF EXISTS public.submit_answer(uuid, uuid, integer, text);
DROP FUNCTION IF EXISTS public.use_fifty_fifty(uuid, uuid);
DROP FUNCTION IF EXISTS public.room_players(uuid, uuid);
DROP FUNCTION IF EXISTS public.room_answers(uuid, uuid);
DROP FUNCTION IF EXISTS public.room_questions(uuid);
DROP FUNCTION IF EXISTS public.room_reveals(uuid);
DROP FUNCTION IF EXISTS public.archive_room(uuid);

CREATE FUNCTION public.join_room(p_code text, p_nickname text, p_avatar_color text DEFAULT '#a855f7'::text)
RETURNS public.players LANGUAGE sql SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT private.join_room(p_code, p_nickname, p_avatar_color);
$$;

CREATE FUNCTION public.submit_answer(p_player_id uuid, p_question_id uuid, p_choice integer, p_powerup text DEFAULT NULL::text)
RETURNS public.answers LANGUAGE sql SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT private.submit_answer(p_player_id, p_question_id, p_choice, p_powerup);
$$;

CREATE FUNCTION public.use_fifty_fifty(p_player_id uuid, p_question_id uuid)
RETURNS integer[] LANGUAGE sql SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT private.use_fifty_fifty(p_player_id, p_question_id);
$$;

CREATE FUNCTION public.room_players(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, nickname text, avatar_color text, joined_at timestamp with time zone, team_index integer, used_double boolean, used_fifty boolean, fifty_question_id uuid, fifty_hidden integer[])
LANGUAGE sql STABLE SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT * FROM private.room_players(p_room_id, p_player_id);
$$;

CREATE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, question_id uuid, player_id uuid, choice_index integer, answered_at timestamp with time zone, is_correct boolean, points_awarded integer, streak_bonus integer, powerup text)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT * FROM private.room_answers(p_room_id, p_player_id);
$$;

CREATE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT * FROM private.room_questions(p_room_id);
$$;

CREATE FUNCTION public.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT * FROM private.room_reveals(p_room_id);
$$;

CREATE FUNCTION public.archive_room(p_room_id uuid)
RETURNS uuid LANGUAGE sql SECURITY INVOKER SET search_path TO 'public' AS $$
  SELECT private.archive_room(p_room_id);
$$;

-- 3. Least-privilege grants.

REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.use_fifty_fifty(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_players(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_answers(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_reveals(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.archive_room(uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO authenticated;

REVOKE ALL ON FUNCTION private.join_room(text, text, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.submit_answer(uuid, uuid, integer, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.use_fifty_fifty(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_players(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_answers(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_questions(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_reveals(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.archive_room(uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION private.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.submit_answer(uuid, uuid, integer, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.use_fifty_fifty(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_answers(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_questions(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_reveals(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.archive_room(uuid) TO authenticated;