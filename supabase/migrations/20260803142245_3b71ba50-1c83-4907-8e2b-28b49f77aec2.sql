-- === 1. Move policy helpers out of the API-exposed schema ===
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO anon, authenticated, service_role;

ALTER FUNCTION public.is_quiz_owner(uuid) SET SCHEMA private;
ALTER FUNCTION public.room_is_live(uuid) SET SCHEMA private;
ALTER FUNCTION public.room_owner(uuid) SET SCHEMA private;
ALTER FUNCTION public.quiz_has_live_room(uuid) SET SCHEMA private;

GRANT EXECUTE ON FUNCTION private.is_quiz_owner(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_is_live(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_owner(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.quiz_has_live_room(uuid) TO anon, authenticated;

-- === 2. New columns ===
ALTER TABLE public.rooms ADD COLUMN IF NOT EXISTS team_count integer NOT NULL DEFAULT 0;
ALTER TABLE public.players ADD COLUMN IF NOT EXISTS team_index integer;
ALTER TABLE public.players ADD COLUMN IF NOT EXISTS used_double boolean NOT NULL DEFAULT false;
ALTER TABLE public.players ADD COLUMN IF NOT EXISTS used_fifty boolean NOT NULL DEFAULT false;
ALTER TABLE public.players ADD COLUMN IF NOT EXISTS fifty_question_id uuid;
ALTER TABLE public.players ADD COLUMN IF NOT EXISTS fifty_hidden integer[];
ALTER TABLE public.answers ADD COLUMN IF NOT EXISTS streak_bonus integer NOT NULL DEFAULT 0;
ALTER TABLE public.answers ADD COLUMN IF NOT EXISTS powerup text;

-- === 3. Helpers referencing the moved functions ===
CREATE OR REPLACE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND private.room_is_live(r.id)
  ORDER BY q.order_index;
$$;

DROP FUNCTION IF EXISTS public.room_players(uuid, uuid);
CREATE FUNCTION public.room_players(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, nickname text, avatar_color text, joined_at timestamptz,
              team_index integer, used_double boolean, used_fifty boolean,
              fifty_question_id uuid, fifty_hidden integer[])
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
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
$$;

DROP FUNCTION IF EXISTS public.room_answers(uuid, uuid);
CREATE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, question_id uuid, player_id uuid, choice_index integer,
              answered_at timestamptz, is_correct boolean, points_awarded integer,
              streak_bonus integer, powerup text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT a.id, a.room_id, a.question_id, a.player_id,
         CASE WHEN a.player_id = p_player_id THEN a.choice_index ELSE -1 END,
         a.answered_at, a.is_correct, a.points_awarded, a.streak_bonus,
         CASE WHEN a.player_id = p_player_id THEN a.powerup ELSE NULL END
  FROM public.answers a
  WHERE a.room_id = p_room_id
    AND private.room_is_live(p_room_id)
    AND EXISTS (SELECT 1 FROM public.players me WHERE me.id = p_player_id AND me.room_id = p_room_id);
$$;

-- === 4. Join with balanced team assignment ===
DROP FUNCTION IF EXISTS public.join_room(text, text, text);
CREATE FUNCTION public.join_room(p_code text, p_nickname text, p_avatar_color text DEFAULT '#a855f7'::text)
RETURNS public.players LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
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
$$;

-- === 5. Scoring with streak bonus + double-points power-up ===
DROP FUNCTION IF EXISTS public.submit_answer(uuid, uuid, integer);
CREATE FUNCTION public.submit_answer(p_player_id uuid, p_question_id uuid, p_choice integer, p_powerup text DEFAULT NULL)
RETURNS public.answers LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
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

    -- Consecutive correct answers immediately before this question.
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
$$;

-- === 6. 50:50 power-up ===
CREATE OR REPLACE FUNCTION public.use_fifty_fifty(p_player_id uuid, p_question_id uuid)
RETURNS integer[] LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
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
$$;

-- === 7. Execute grants: only the intended game RPCs ===
REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.use_fifty_fifty(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_players(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_answers(uuid, uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated;