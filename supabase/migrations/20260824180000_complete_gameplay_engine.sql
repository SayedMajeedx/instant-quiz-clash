-- =========================================================================
-- Complete QuizClash Game Engine Migration
-- Deploys all missing RPCs and removes legacy author-only blocks
-- =========================================================================

-- 1. Exact-code lookup for joining & polling
CREATE OR REPLACE FUNCTION public.get_room_by_code(p_code text)
RETURNS SETOF public.rooms
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT r.*
  FROM public.rooms AS r
  WHERE r.code = upper(btrim(p_code))
    AND length(btrim(p_code)) = 6
  LIMIT 1;
$$;
GRANT EXECUTE ON FUNCTION public.get_room_by_code(text) TO anon, authenticated, service_role;

-- 2. Room questions lookup
CREATE OR REPLACE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer,
  image_url text,
  question_type text,
  explanation text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index, q.image_url, q.question_type, q.explanation
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id
  ORDER BY q.order_index;
$$;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated, service_role;

-- 3. Room reveals lookup
CREATE OR REPLACE FUNCTION public.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  q record;
  v_idx integer := 0;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id;
  IF v_room.id IS NULL OR v_room.started_at IS NULL THEN RETURN; END IF;

  FOR q IN SELECT id, correct_index FROM public.questions
           WHERE quiz_id = v_room.quiz_id ORDER BY order_index LOOP
    IF v_room.status = 'ended'
       OR v_idx < v_room.cursor_index
       OR (v_idx = v_room.cursor_index AND v_room.cursor_phase IN ('reveal','board')) THEN
      question_id := q.id;
      correct_index := q.correct_index;
      RETURN NEXT;
    END IF;
    v_idx := v_idx + 1;
  END LOOP;
END;
$$;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated, service_role;

-- 4. Room players lookup
CREATE OR REPLACE FUNCTION public.room_players(p_room_id uuid, p_player_id uuid DEFAULT NULL)
RETURNS SETOF public.players
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT * FROM public.players
  WHERE room_id = p_room_id
  ORDER BY joined_at;
$$;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated, service_role;

-- 5. Room answers lookup
CREATE OR REPLACE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid DEFAULT NULL)
RETURNS SETOF public.answers
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT * FROM public.answers
  WHERE room_id = p_room_id;
$$;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated, service_role;

-- 6. Join room RPC
CREATE OR REPLACE FUNCTION public.join_room(
  p_code text,
  p_nickname text,
  p_avatar_color text DEFAULT '#a855f7'
)
RETURNS public.players
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
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

  IF v_room.team_count > 1 AND v_room.team_mode = 'auto' THEN
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
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated, service_role;

-- 7. Start room v2 RPC
CREATE OR REPLACE FUNCTION public.start_room_v2(p_room_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_starts_at timestamptz := now() + interval '3 seconds';
BEGIN
  UPDATE public.rooms
  SET status = 'active',
      cursor_index = 0,
      cursor_phase = 'question',
      started_at = v_starts_at,
      phase_started_at = v_starts_at
  WHERE id = p_room_id
  RETURNING * INTO v_room;

  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  RETURN to_jsonb(v_room);
END;
$$;
GRANT EXECUTE ON FUNCTION public.start_room_v2(uuid) TO anon, authenticated, service_role;

-- 8. Advance room RPC
CREATE OR REPLACE FUNCTION public.advance_room(p_room_id uuid, p_expect_index integer, p_expect_phase text)
RETURNS public.rooms
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_total integer;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;

  IF v_room.status <> 'active'
     OR v_room.cursor_index <> p_expect_index
     OR v_room.cursor_phase <> p_expect_phase THEN
    RETURN v_room;
  END IF;

  SELECT count(*) INTO v_total FROM public.questions WHERE quiz_id = v_room.quiz_id;

  IF v_room.cursor_phase = 'question' THEN
    UPDATE public.rooms SET cursor_phase = 'reveal', phase_started_at = now()
      WHERE id = p_room_id RETURNING * INTO v_room;
  ELSIF v_room.cursor_phase = 'reveal' THEN
    IF v_room.cursor_index >= v_total - 1 THEN
      UPDATE public.rooms SET status = 'ended', phase_started_at = now()
        WHERE id = p_room_id RETURNING * INTO v_room;
    ELSE
      UPDATE public.rooms SET cursor_phase = 'board', phase_started_at = now()
        WHERE id = p_room_id RETURNING * INTO v_room;
    END IF;
  ELSE
    UPDATE public.rooms
      SET cursor_index = v_room.cursor_index + 1, cursor_phase = 'question', phase_started_at = now()
      WHERE id = p_room_id RETURNING * INTO v_room;
  END IF;

  RETURN v_room;
END;
$$;
GRANT EXECUTE ON FUNCTION public.advance_room(uuid, integer, text) TO anon, authenticated, service_role;

-- 9. Fifty Fifty powerup RPC
CREATE OR REPLACE FUNCTION public.use_fifty_fifty(p_player_id uuid, p_question_id uuid)
RETURNS integer[]
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
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
  IF v_room.id IS NULL OR v_room.status <> 'active' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;
  IF v_question.question_type = 'boolean' THEN RAISE EXCEPTION 'not available'; END IF;
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
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid) TO anon, authenticated, service_role;

-- 10. Archive room RPC
CREATE OR REPLACE FUNCTION public.archive_room(p_room_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  UPDATE public.rooms SET status = 'ended' WHERE id = p_room_id;
  RETURN true;
END;
$$;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO anon, authenticated, service_role;
