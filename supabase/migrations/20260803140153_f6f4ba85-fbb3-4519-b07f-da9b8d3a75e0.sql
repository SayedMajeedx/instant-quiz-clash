-- Helpers -------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.is_quiz_owner(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.quizzes q WHERE q.id = p_quiz_id AND q.user_id = auth.uid());
$$;

CREATE OR REPLACE FUNCTION public.quiz_has_live_room(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.quiz_id = p_quiz_id AND r.created_at > now() - interval '12 hours'
  );
$$;

CREATE OR REPLACE FUNCTION public.room_is_live(p_room_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.id = p_room_id AND r.created_at > now() - interval '12 hours'
  );
$$;

CREATE OR REPLACE FUNCTION public.room_owner(p_room_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r JOIN public.quizzes q ON q.id = r.quiz_id
    WHERE r.id = p_room_id AND q.user_id = auth.uid()
  );
$$;

-- Rooms ---------------------------------------------------------------
DROP POLICY IF EXISTS rooms_public_select ON public.rooms;
CREATE POLICY rooms_live_select ON public.rooms FOR SELECT TO anon, authenticated
USING (created_at > now() - interval '12 hours' OR public.is_quiz_owner(quiz_id));

-- Quizzes -------------------------------------------------------------
DROP POLICY IF EXISTS quizzes_public_select ON public.quizzes;
CREATE POLICY quizzes_owner_or_live_select ON public.quizzes FOR SELECT TO anon, authenticated
USING (auth.uid() = user_id OR public.quiz_has_live_room(id));

-- Questions -----------------------------------------------------------
DROP POLICY IF EXISTS questions_public_select ON public.questions;
CREATE POLICY questions_owner_select ON public.questions FOR SELECT TO authenticated
USING (public.is_quiz_owner(quiz_id));

CREATE OR REPLACE VIEW public.questions_public AS
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index, q.created_at
  FROM public.questions q
  WHERE public.quiz_has_live_room(q.quiz_id);

GRANT SELECT ON public.questions_public TO anon, authenticated;

-- Players -------------------------------------------------------------
DROP POLICY IF EXISTS players_public_all ON public.players;
CREATE POLICY players_live_select ON public.players FOR SELECT TO anon, authenticated
USING (public.room_is_live(room_id) OR public.room_owner(room_id));
CREATE POLICY players_owner_delete ON public.players FOR DELETE TO authenticated
USING (public.room_owner(room_id));

-- Answers -------------------------------------------------------------
DROP POLICY IF EXISTS answers_public_all ON public.answers;
CREATE POLICY answers_live_select ON public.answers FOR SELECT TO anon, authenticated
USING (public.room_is_live(room_id) OR public.room_owner(room_id));

-- Join a room ---------------------------------------------------------
CREATE OR REPLACE FUNCTION public.join_room(p_code text, p_nickname text, p_avatar_color text DEFAULT '#a855f7')
RETURNS public.players LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_room public.rooms;
  v_nick text := btrim(p_nickname);
  v_try text;
  v_color text := COALESCE(NULLIF(btrim(p_avatar_color), ''), '#a855f7');
  v_player public.players;
  i int := 0;
BEGIN
  IF v_color !~ '^#[0-9a-fA-F]{6}$' THEN v_color := '#a855f7'; END IF;
  IF length(v_nick) < 2 OR length(v_nick) > 18 THEN
    RAISE EXCEPTION 'invalid nickname';
  END IF;

  SELECT * INTO v_room FROM public.rooms WHERE code = upper(btrim(p_code));
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.status = 'ended' THEN RAISE EXCEPTION 'room ended'; END IF;
  IF (SELECT count(*) FROM public.players WHERE room_id = v_room.id) >= 200 THEN
    RAISE EXCEPTION 'room full';
  END IF;

  v_try := v_nick;
  WHILE i < 8 LOOP
    IF NOT EXISTS (SELECT 1 FROM public.players WHERE room_id = v_room.id AND nickname = v_try) THEN
      INSERT INTO public.players (room_id, nickname, avatar_color)
      VALUES (v_room.id, v_try, v_color)
      RETURNING * INTO v_player;
      RETURN v_player;
    END IF;
    i := i + 1;
    v_try := left(v_nick, 16) || (i + 1)::text;
  END LOOP;
  RAISE EXCEPTION 'could not join';
END;
$$;

REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM public;
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;

-- Submit an answer (graded server-side) --------------------------------
CREATE OR REPLACE FUNCTION public.submit_answer(p_player_id uuid, p_question_id uuid, p_choice integer)
RETURNS public.answers LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
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

  -- Question start offset: prior questions each take limit + 4.5s reveal + 5.5s board.
  FOR q IN SELECT time_limit_seconds, order_index FROM public.questions
           WHERE quiz_id = v_room.quiz_id AND order_index < v_question.order_index LOOP
    v_start_ms := v_start_ms + greatest(1, q.time_limit_seconds) * 1000 + 4500 + 5500;
  END LOOP;

  v_elapsed := EXTRACT(EPOCH FROM (now() - v_room.started_at)) * 1000;
  v_ms_used := v_elapsed - v_start_ms;
  v_limit := greatest(1, v_question.time_limit_seconds) * 1000;
  IF v_ms_used < 0 OR v_ms_used > v_limit + 1500 THEN
    RAISE EXCEPTION 'question not active';
  END IF;
  v_ms_used := least(v_limit, greatest(0, v_ms_used));

  v_correct := (p_choice = v_question.correct_index);
  IF v_correct THEN
    v_points := round((1000 - 700 * (v_ms_used / v_limit)) / 10) * 10;
  END IF;

  INSERT INTO public.answers (room_id, question_id, player_id, choice_index, is_correct, points_awarded)
  VALUES (v_room.id, v_question.id, v_player.id, p_choice, v_correct, v_points)
  RETURNING * INTO v_answer;
  RETURN v_answer;
END;
$$;

REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer) FROM public;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer) TO anon, authenticated;

-- Reveal correct answers only after the question window closed ---------
CREATE OR REPLACE FUNCTION public.room_reveals(p_room_id uuid)
RETURNS TABLE (question_id uuid, correct_index integer)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
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
$$;

REVOKE ALL ON FUNCTION public.room_reveals(uuid) FROM public;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated;