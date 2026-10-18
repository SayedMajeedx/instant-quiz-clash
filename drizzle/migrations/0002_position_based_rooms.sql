-- =========================================================================
-- Fix rooms stalling partway through a quiz, and keep games moving when the
-- host's screen stops driving them.
--
-- * Screens count questions by position (0, 1, 2, ...), but the gameplay RPCs
--   compared rooms.cursor_index with questions.order_index. Quizzes that lost
--   questions (e.g. through duplicate review) have gaps in order_index, so
--   from the first gap on every answer was rejected as "question not active"
--   and reveals went to the wrong question. The RPCs now use positions, and
--   existing order_index values are renumbered.
-- * rooms.board_ms stores the host's scoreboard duration, so players' phones
--   count down the same time as the host screen.
-- * tick_room lets the host or any player in the room move the game on, but
--   only once the current stage is over by the database clock (time is up,
--   everyone answered, or the reveal / scoreboard has run its course in auto
--   pacing). A host tab that is backgrounded, asleep or offline no longer
--   freezes the room for everyone.
-- * Anonymous clients can no longer read correct answers or explanations
--   straight from the questions table.
-- =========================================================================

-- 1. Contiguous order_index ------------------------------------------------
UPDATE public.questions AS q
SET order_index = s.pos
FROM (
  SELECT id, (row_number() OVER (PARTITION BY quiz_id ORDER BY order_index, id) - 1)::int AS pos
  FROM public.questions
) AS s
WHERE s.id = q.id
  AND q.order_index IS DISTINCT FROM s.pos;

-- Position of each question within its quiz, matching how screens order them.
CREATE OR REPLACE FUNCTION private.quiz_positions(p_quiz_id uuid)
RETURNS TABLE(question_id uuid, pos integer)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT q.id, (row_number() OVER (ORDER BY q.order_index, q.id) - 1)::int
  FROM public.questions AS q
  WHERE q.quiz_id = p_quiz_id;
$$;

REVOKE ALL ON FUNCTION private.quiz_positions(uuid) FROM PUBLIC, anon, authenticated;

-- 2. Scoreboard duration -----------------------------------------------------
ALTER TABLE public.rooms ADD COLUMN IF NOT EXISTS board_ms integer NOT NULL DEFAULT 5000;
ALTER TABLE public.rooms DROP CONSTRAINT IF EXISTS rooms_board_ms_range;
ALTER TABLE public.rooms
  ADD CONSTRAINT rooms_board_ms_range CHECK (board_ms BETWEEN 1000 AND 60000);

GRANT UPDATE (advance_mode, team_count, team_mode, team_names, team_colors, board_ms)
  ON TABLE public.rooms TO authenticated;

-- 3. Position-based gameplay RPCs -------------------------------------------
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
  subcategory text,
  source_category text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index,
         q.image_url, q.question_type, q.subcategory, q.source_category
  FROM public.questions AS q
  JOIN public.rooms AS r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id
  ORDER BY q.order_index, q.id;
$$;

CREATE OR REPLACE FUNCTION public.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer, explanation text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT q.id, q.correct_index, q.explanation
  FROM public.rooms AS r
  CROSS JOIN LATERAL private.quiz_positions(r.quiz_id) AS p
  JOIN public.questions AS q ON q.id = p.question_id
  WHERE r.id = p_room_id
    AND r.started_at IS NOT NULL
    AND (
      r.status = 'ended'
      OR p.pos < r.cursor_index
      OR (p.pos = r.cursor_index AND r.cursor_phase IN ('reveal', 'board'))
    )
  ORDER BY p.pos;
$$;

CREATE OR REPLACE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid, p_token uuid)
RETURNS TABLE(
  id uuid,
  room_id uuid,
  question_id uuid,
  player_id uuid,
  choice_index integer,
  answered_at timestamptz,
  is_correct boolean,
  points_awarded integer,
  streak_bonus integer,
  powerup text
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
#variable_conflict use_column
DECLARE
  v_me public.players;
  v_room public.rooms;
BEGIN
  v_me := private.authed_player(p_player_id, p_token);
  IF v_me.room_id <> p_room_id THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;
  SELECT * INTO v_room FROM public.rooms AS r WHERE r.id = p_room_id;

  RETURN QUERY
  SELECT a.id, a.room_id, a.question_id, a.player_id,
         CASE WHEN a.player_id = v_me.id THEN a.choice_index ELSE -1 END,
         a.answered_at,
         CASE WHEN a.player_id = v_me.id OR NOT s.open THEN a.is_correct ELSE false END,
         CASE WHEN a.player_id = v_me.id OR NOT s.open THEN a.points_awarded ELSE 0 END,
         CASE WHEN a.player_id = v_me.id OR NOT s.open THEN a.streak_bonus ELSE 0 END,
         CASE WHEN a.player_id = v_me.id THEN a.powerup ELSE NULL END
  FROM public.answers AS a
  LEFT JOIN private.quiz_positions(v_room.quiz_id) AS p ON p.question_id = a.question_id
  CROSS JOIN LATERAL (
    SELECT (v_room.status = 'active'
            AND v_room.cursor_phase = 'question'
            AND p.pos IS NOT DISTINCT FROM v_room.cursor_index) AS open
  ) AS s
  WHERE a.room_id = p_room_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_answer(
  p_player_id uuid,
  p_token uuid,
  p_question_id uuid,
  p_choice integer,
  p_powerup text DEFAULT NULL
)
RETURNS public.answers
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_player public.players;
  v_room public.rooms;
  v_question public.questions;
  v_pos integer;
  v_ms_used numeric;
  v_limit numeric;
  v_choices integer;
  v_correct boolean;
  v_points integer := 0;
  v_bonus integer := 0;
  v_streak integer := 0;
  v_powerup text := NULLIF(btrim(COALESCE(p_powerup, '')), '');
  v_answer public.answers;
  q record;
BEGIN
  PERFORM private.authed_player(p_player_id, p_token);
  -- Serialise this player's submissions (double taps, retries).
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id FOR UPDATE;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.id IS NULL OR v_room.status <> 'active' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions
  WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;

  -- Idempotent: a retried submission returns the stored answer.
  SELECT * INTO v_answer FROM public.answers
  WHERE player_id = p_player_id AND question_id = p_question_id;
  IF v_answer.id IS NOT NULL THEN RETURN v_answer; END IF;

  SELECT p.pos INTO v_pos FROM private.quiz_positions(v_room.quiz_id) AS p
  WHERE p.question_id = v_question.id;
  IF v_room.cursor_phase <> 'question' OR v_pos IS DISTINCT FROM v_room.cursor_index THEN
    RAISE EXCEPTION 'question not active';
  END IF;

  v_choices := CASE WHEN v_question.question_type = 'boolean' THEN 2 ELSE 4 END;
  IF p_choice IS NULL OR p_choice < 0 OR p_choice >= v_choices THEN
    RAISE EXCEPTION 'invalid choice';
  END IF;

  IF v_powerup IS NOT NULL AND v_powerup <> 'double' THEN RAISE EXCEPTION 'unknown powerup'; END IF;
  IF v_powerup = 'double' AND v_player.used_double THEN v_powerup := NULL; END IF;

  v_limit := greatest(1, v_question.time_limit_seconds) * 1000;
  v_ms_used := EXTRACT(EPOCH FROM (now() - COALESCE(v_room.phase_started_at, v_room.started_at))) * 1000;
  -- Allow for network latency, but not for answering after the clock ran out
  -- while the host's screen is slow to advance.
  IF v_ms_used > v_limit + 3000 THEN RAISE EXCEPTION 'question not active'; END IF;
  v_ms_used := least(v_limit, greatest(0, v_ms_used));

  v_correct := (p_choice = v_question.correct_index);
  IF v_correct THEN
    v_points := round((1000 - 700 * (v_ms_used / v_limit)) / 10) * 10;

    FOR q IN SELECT p.question_id AS id FROM private.quiz_positions(v_room.quiz_id) AS p
             WHERE p.pos < v_pos
             ORDER BY p.pos DESC LOOP
      IF EXISTS (SELECT 1 FROM public.answers AS a
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

  INSERT INTO public.answers
    (room_id, question_id, player_id, choice_index, is_correct, points_awarded, streak_bonus, powerup)
  VALUES
    (v_room.id, v_question.id, v_player.id, p_choice, v_correct, v_points, v_bonus, v_powerup)
  RETURNING * INTO v_answer;
  RETURN v_answer;
END;
$$;

CREATE OR REPLACE FUNCTION public.use_fifty_fifty(p_player_id uuid, p_token uuid, p_question_id uuid)
RETURNS integer[]
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_player public.players;
  v_room public.rooms;
  v_question public.questions;
  v_pos integer;
  v_last integer;
  v_hidden integer[];
BEGIN
  PERFORM private.authed_player(p_player_id, p_token);
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id FOR UPDATE;

  IF v_player.fifty_question_id = p_question_id THEN RETURN v_player.fifty_hidden; END IF;
  IF v_player.used_fifty THEN RAISE EXCEPTION 'powerup already used'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.id IS NULL OR v_room.status <> 'active' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions
  WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;
  -- Only on the open question: otherwise it would leak future answers.
  SELECT p.pos INTO v_pos FROM private.quiz_positions(v_room.quiz_id) AS p
  WHERE p.question_id = v_question.id;
  IF v_room.cursor_phase <> 'question' OR v_pos IS DISTINCT FROM v_room.cursor_index THEN
    RAISE EXCEPTION 'question not active';
  END IF;
  IF v_question.question_type = 'boolean' THEN RAISE EXCEPTION 'not available'; END IF;
  IF EXISTS (SELECT 1 FROM public.answers WHERE player_id = p_player_id AND question_id = p_question_id) THEN
    RAISE EXCEPTION 'already answered';
  END IF;

  v_last := least(3, jsonb_array_length(v_question.options) - 1);
  IF v_last < 2 THEN RAISE EXCEPTION 'not available'; END IF;

  SELECT array_agg(i) INTO v_hidden FROM (
    SELECT i FROM generate_series(0, v_last) AS g(i)
    WHERE i <> v_question.correct_index
    ORDER BY random()
    LIMIT 2
  ) AS s;

  UPDATE public.players
  SET used_fifty = true, fifty_question_id = p_question_id, fifty_hidden = v_hidden
  WHERE id = p_player_id;

  RETURN v_hidden;
END;
$$;

-- 4. Shared stage transition ------------------------------------------------
-- Moves a locked room one stage on: question -> reveal -> board -> next
-- question, ending after the last reveal.
CREATE OR REPLACE FUNCTION private.step_room(p_room public.rooms)
RETURNS public.rooms
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_total integer;
BEGIN
  SELECT count(*) INTO v_total FROM public.questions WHERE quiz_id = p_room.quiz_id;

  IF p_room.cursor_phase = 'question' THEN
    UPDATE public.rooms SET cursor_phase = 'reveal', phase_started_at = now()
    WHERE id = p_room.id RETURNING * INTO v_room;
  ELSIF p_room.cursor_index >= v_total - 1 THEN
    UPDATE public.rooms SET status = 'ended', phase_started_at = now()
    WHERE id = p_room.id RETURNING * INTO v_room;
  ELSIF p_room.cursor_phase = 'reveal' THEN
    UPDATE public.rooms SET cursor_phase = 'board', phase_started_at = now()
    WHERE id = p_room.id RETURNING * INTO v_room;
  ELSE
    UPDATE public.rooms
    SET cursor_index = p_room.cursor_index + 1, cursor_phase = 'question', phase_started_at = now()
    WHERE id = p_room.id RETURNING * INTO v_room;
  END IF;

  RETURN v_room;
END;
$$;

REVOKE ALL ON FUNCTION private.step_room(public.rooms) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.advance_room(p_room_id uuid, p_expect_index integer, p_expect_phase text)
RETURNS public.rooms
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.host_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;

  -- Idempotent: a second tab advancing the same stage is a no-op.
  IF v_room.status <> 'active'
     OR v_room.cursor_index <> p_expect_index
     OR v_room.cursor_phase <> p_expect_phase THEN
    RETURN v_room;
  END IF;

  RETURN private.step_room(v_room);
END;
$$;

-- 5. Server-paced fallback ----------------------------------------------------
-- True when the room's current stage is over by the database clock. The
-- reveal length matches the host screen's fixed 2.5 seconds.
CREATE OR REPLACE FUNCTION private.room_stage_due(p_room public.rooms)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_elapsed numeric;
  v_question public.questions;
BEGIN
  IF p_room.status <> 'active' OR p_room.started_at IS NULL THEN RETURN false; END IF;
  v_elapsed := EXTRACT(EPOCH FROM (now() - COALESCE(p_room.phase_started_at, p_room.started_at))) * 1000;
  -- Still counting down to the first question.
  IF v_elapsed < 0 THEN RETURN false; END IF;

  IF p_room.cursor_phase = 'question' THEN
    SELECT q.* INTO v_question
    FROM public.questions AS q
    WHERE q.quiz_id = p_room.quiz_id
    ORDER BY q.order_index, q.id
    OFFSET p_room.cursor_index
    LIMIT 1;
    IF v_question.id IS NULL THEN RETURN true; END IF;
    IF v_elapsed >= greatest(1, v_question.time_limit_seconds) * 1000 THEN RETURN true; END IF;
    -- Everyone still in the room has answered.
    RETURN EXISTS (SELECT 1 FROM public.players AS p WHERE p.room_id = p_room.id)
      AND NOT EXISTS (
        SELECT 1 FROM public.players AS p
        WHERE p.room_id = p_room.id
          AND NOT EXISTS (
            SELECT 1 FROM public.answers AS a
            WHERE a.player_id = p.id AND a.question_id = v_question.id
          )
      );
  END IF;

  -- With manual pacing the host moves on from the reveal and the scoreboard.
  IF p_room.advance_mode = 'manual' THEN RETURN false; END IF;
  IF p_room.cursor_phase = 'reveal' THEN RETURN v_elapsed >= 2500; END IF;
  RETURN v_elapsed >= COALESCE(p_room.board_ms, 5000);
END;
$$;

REVOKE ALL ON FUNCTION private.room_stage_due(public.rooms) FROM PUBLIC, anon, authenticated;

-- Moves the room on if, and only if, the expected stage is over. Callable by
-- the host or by a player of the room with their session token; calling it
-- early is a harmless no-op that returns the room as it is.
CREATE OR REPLACE FUNCTION public.tick_room(
  p_room_id uuid,
  p_expect_index integer,
  p_expect_phase text,
  p_player_id uuid DEFAULT NULL,
  p_token uuid DEFAULT NULL
)
RETURNS public.rooms
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_me public.players;
  v_room public.rooms;
BEGIN
  IF p_player_id IS NOT NULL THEN
    v_me := private.authed_player(p_player_id, p_token);
    IF v_me.room_id <> p_room_id THEN
      RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
    END IF;
  ELSIF NOT private.is_room_host(p_room_id) THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;

  -- Check without the lock first, so early ticks from many phones don't
  -- queue on the room row.
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.status <> 'active'
     OR v_room.cursor_index <> p_expect_index
     OR v_room.cursor_phase <> p_expect_phase
     OR NOT private.room_stage_due(v_room) THEN
    RETURN v_room;
  END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.status <> 'active'
     OR v_room.cursor_index <> p_expect_index
     OR v_room.cursor_phase <> p_expect_phase
     OR NOT private.room_stage_due(v_room) THEN
    RETURN v_room;
  END IF;

  RETURN private.step_room(v_room);
END;
$$;

REVOKE ALL ON FUNCTION public.tick_room(uuid, integer, text, uuid, uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.tick_room(uuid, integer, text, uuid, uuid)
  TO anon, authenticated, service_role;

-- 6. Keep answers out of anonymous table reads --------------------------------
-- The public catalog only needs question text and options; players get
-- answers from room_reveals once each question is revealed.
REVOKE SELECT ON TABLE public.questions FROM anon;
GRANT SELECT (
  id, quiz_id, question_text, options, time_limit_seconds, order_index, created_at,
  image_url, question_type, difficulty, subcategory, tags, source, source_category,
  source_question_id, external_id, is_verified, version
) ON TABLE public.questions TO anon;

NOTIFY pgrst, 'reload schema';