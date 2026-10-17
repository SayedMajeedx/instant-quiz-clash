-- =========================================================================
-- Restore game security.
--
-- * Rooms get an explicit host (rooms.host_id). Only the host can read the
--   room's tables, configure it, start it, advance it or end it.
-- * Players act through RPCs with a per-player session token returned by
--   join_room, so knowing another player's id is no longer enough to answer,
--   use power-ups or leave as them.
-- * Players never receive correct answers or explanations before the reveal,
--   or other players' choices.
-- * Creating a room consumes the daily free quota in the database (see
--   20261017100000_paypal_subscriptions.sql), for direct inserts and for
--   create_custom_quiz_room alike.
-- * Replaces the allow-all policies recreated by
--   20260820223000_security_advisors_hardening.sql.
-- =========================================================================

CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO anon, authenticated;

-- 1. Explicit room host ----------------------------------------------------
ALTER TABLE public.rooms
  ADD COLUMN IF NOT EXISTS host_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

UPDATE public.rooms AS r
SET host_id = q.user_id
FROM public.quizzes AS q
WHERE q.id = r.quiz_id
  AND r.host_id IS NULL
  AND EXISTS (SELECT 1 FROM auth.users AS u WHERE u.id = q.user_id);

ALTER TABLE public.rooms ALTER COLUMN host_id SET DEFAULT auth.uid();
CREATE INDEX IF NOT EXISTS rooms_host_id_idx ON public.rooms(host_id);

CREATE OR REPLACE FUNCTION private.is_room_host(p_room_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT auth.uid() IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.rooms AS r WHERE r.id = p_room_id AND r.host_id = auth.uid()
  );
$$;

REVOKE ALL ON FUNCTION private.is_room_host(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION private.is_room_host(uuid) TO authenticated;

-- New rooms always belong to the caller, start in the lobby, and consume
-- the daily quota. A failed insert (e.g. a duplicate code) rolls the quota
-- back with it.
CREATE OR REPLACE FUNCTION private.rooms_before_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF auth.uid() IS NOT NULL THEN
    NEW.host_id := auth.uid();
  ELSIF COALESCE(auth.role(), 'service_role') <> 'service_role' THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;

  NEW.status := 'lobby';
  NEW.cursor_index := 0;
  NEW.cursor_phase := 'question';
  NEW.started_at := NULL;
  NEW.phase_started_at := NULL;

  IF NEW.host_id IS NOT NULL THEN
    PERFORM private.consume_hosting_quota(NEW.host_id);
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.rooms_before_insert() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS rooms_before_insert ON public.rooms;
CREATE TRIGGER rooms_before_insert
BEFORE INSERT ON public.rooms
FOR EACH ROW EXECUTE FUNCTION private.rooms_before_insert();

-- 2. Player session tokens -------------------------------------------------
-- Lives in the private schema, which PostgREST does not expose, and is never
-- granted to client roles. Players that joined before this migration have no
-- token and need to rejoin.
CREATE TABLE IF NOT EXISTS private.player_tokens (
  player_id uuid PRIMARY KEY REFERENCES public.players(id) ON DELETE CASCADE,
  token uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON TABLE private.player_tokens FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION private.authed_player(p_player_id uuid, p_token uuid)
RETURNS public.players
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_player public.players;
BEGIN
  SELECT p.* INTO v_player
  FROM public.players AS p
  JOIN private.player_tokens AS t ON t.player_id = p.id
  WHERE p.id = p_player_id AND t.token = p_token;

  IF v_player.id IS NULL THEN
    RAISE EXCEPTION 'unknown player' USING ERRCODE = '42501';
  END IF;
  RETURN v_player;
END;
$$;

REVOKE ALL ON FUNCTION private.authed_player(uuid, uuid) FROM PUBLIC, anon, authenticated;

-- 3. Table access: hosts read their own rooms; nobody writes game state ----
-- directly except through the RPCs below.
DO $$
DECLARE
  p record;
BEGIN
  FOR p IN
    SELECT policyname, tablename FROM pg_policies
    WHERE schemaname = 'public' AND tablename IN ('rooms', 'players', 'answers')
  LOOP
    EXECUTE format('DROP POLICY %I ON public.%I', p.policyname, p.tablename);
  END LOOP;
END;
$$;

ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.rooms FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.players FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.answers FROM PUBLIC, anon, authenticated;

GRANT SELECT, INSERT, DELETE ON TABLE public.rooms TO authenticated;
-- Room configuration only; status and cursor change through the RPCs.
GRANT UPDATE (advance_mode, team_count, team_mode, team_names, team_colors)
  ON TABLE public.rooms TO authenticated;
GRANT SELECT, DELETE ON TABLE public.players TO authenticated;
GRANT SELECT ON TABLE public.answers TO authenticated;
GRANT ALL ON TABLE public.rooms TO service_role;
GRANT ALL ON TABLE public.players TO service_role;
GRANT ALL ON TABLE public.answers TO service_role;

CREATE POLICY rooms_host_select ON public.rooms
  FOR SELECT TO authenticated USING (host_id = auth.uid() OR public.is_admin());
CREATE POLICY rooms_host_insert ON public.rooms
  FOR INSERT TO authenticated
  WITH CHECK (
    host_id = auth.uid()
    AND EXISTS (SELECT 1 FROM public.quizzes AS q WHERE q.id = quiz_id AND q.user_id = auth.uid())
  );
CREATE POLICY rooms_host_update ON public.rooms
  FOR UPDATE TO authenticated
  USING (host_id = auth.uid())
  WITH CHECK (host_id = auth.uid());
CREATE POLICY rooms_host_delete ON public.rooms
  FOR DELETE TO authenticated USING (host_id = auth.uid());

CREATE POLICY players_host_select ON public.players
  FOR SELECT TO authenticated USING (private.is_room_host(room_id));
CREATE POLICY players_host_delete ON public.players
  FOR DELETE TO authenticated USING (private.is_room_host(room_id));

CREATE POLICY answers_host_select ON public.answers
  FOR SELECT TO authenticated USING (private.is_room_host(room_id));

CREATE TABLE IF NOT EXISTS public.room_join_rate_windows (
  room_id uuid NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  window_start timestamptz NOT NULL,
  attempts integer NOT NULL DEFAULT 1,
  PRIMARY KEY (room_id, window_start)
);
ALTER TABLE public.room_join_rate_windows ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.room_join_rate_windows FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.room_join_rate_windows TO service_role;

-- 4. Replace the gameplay RPCs --------------------------------------------
DROP FUNCTION IF EXISTS public.get_room_by_code(text);
DROP FUNCTION IF EXISTS public.room_questions(uuid);
DROP FUNCTION IF EXISTS public.room_reveals(uuid);
DROP FUNCTION IF EXISTS public.room_players(uuid, uuid);
DROP FUNCTION IF EXISTS public.room_players(uuid, uuid, uuid);
DROP FUNCTION IF EXISTS public.room_answers(uuid, uuid);
DROP FUNCTION IF EXISTS public.room_answers(uuid, uuid, uuid);
DROP FUNCTION IF EXISTS public.join_room(text, text, text);
DROP FUNCTION IF EXISTS public.leave_room(uuid, uuid);
DROP FUNCTION IF EXISTS public.submit_answer(uuid, uuid, integer, text);
DROP FUNCTION IF EXISTS public.submit_answer(uuid, uuid, uuid, integer, text);
DROP FUNCTION IF EXISTS public.use_fifty_fifty(uuid, uuid);
DROP FUNCTION IF EXISTS public.use_fifty_fifty(uuid, uuid, uuid);
DROP FUNCTION IF EXISTS public.set_player_team(uuid, integer);
DROP FUNCTION IF EXISTS public.start_room(uuid);
DROP FUNCTION IF EXISTS public.start_room_v2(uuid);
DROP FUNCTION IF EXISTS public.advance_room(uuid, integer, text);
DROP FUNCTION IF EXISTS public.archive_room(uuid);

-- Exact-code lookup for joining and polling. Rooms cannot be listed.
CREATE FUNCTION public.get_room_by_code(p_code text)
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

-- Questions without answers or explanations.
CREATE FUNCTION public.room_questions(p_room_id uuid)
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
  ORDER BY q.order_index;
$$;

-- Correct answers and explanations, only once each question is revealed.
CREATE FUNCTION public.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer, explanation text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT q.id, q.correct_index, q.explanation
  FROM public.rooms AS r
  JOIN public.questions AS q ON q.quiz_id = r.quiz_id
  WHERE r.id = p_room_id
    AND r.started_at IS NOT NULL
    AND (
      r.status = 'ended'
      OR q.order_index < r.cursor_index
      OR (q.order_index = r.cursor_index AND r.cursor_phase IN ('reveal', 'board'))
    )
  ORDER BY q.order_index;
$$;

-- The lobby / leaderboard as one player sees it: other players' power-up
-- state stays hidden.
CREATE FUNCTION public.room_players(p_room_id uuid, p_player_id uuid, p_token uuid)
RETURNS TABLE(
  id uuid,
  room_id uuid,
  nickname text,
  avatar_color text,
  joined_at timestamptz,
  team_index integer,
  used_double boolean,
  used_fifty boolean,
  fifty_question_id uuid,
  fifty_hidden integer[]
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
#variable_conflict use_column
DECLARE
  v_me public.players;
BEGIN
  v_me := private.authed_player(p_player_id, p_token);
  IF v_me.room_id <> p_room_id THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  SELECT p.id, p.room_id, p.nickname, p.avatar_color, p.joined_at, p.team_index,
         CASE WHEN p.id = v_me.id THEN p.used_double ELSE false END,
         CASE WHEN p.id = v_me.id THEN p.used_fifty ELSE false END,
         CASE WHEN p.id = v_me.id THEN p.fifty_question_id ELSE NULL END,
         CASE WHEN p.id = v_me.id THEN p.fifty_hidden ELSE NULL END
  FROM public.players AS p
  WHERE p.room_id = p_room_id
  ORDER BY p.joined_at;
END;
$$;

-- Answers as one player sees them: other players' choices are always hidden,
-- and their results on the open question stay hidden until the reveal.
CREATE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid, p_token uuid)
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
  JOIN public.questions AS q ON q.id = a.question_id
  CROSS JOIN LATERAL (
    SELECT (v_room.status = 'active'
            AND v_room.cursor_phase = 'question'
            AND q.order_index = v_room.cursor_index) AS open
  ) AS s
  WHERE a.room_id = p_room_id;
END;
$$;

-- Join by code. Returns the player row plus the session token the player
-- must send with every later call.
CREATE FUNCTION public.join_room(
  p_code text,
  p_nickname text,
  p_avatar_color text DEFAULT '#a855f7'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_nick text := btrim(COALESCE(p_nickname, ''));
  v_try text;
  v_color text := COALESCE(NULLIF(btrim(p_avatar_color), ''), '#a855f7');
  v_player public.players;
  v_team integer := NULL;
  v_attempts integer;
  v_token uuid;
  i integer := 0;
BEGIN
  IF v_color !~ '^#[0-9a-fA-F]{6}$' THEN v_color := '#a855f7'; END IF;
  IF length(v_nick) < 2 OR length(v_nick) > 18 THEN RAISE EXCEPTION 'invalid nickname'; END IF;

  -- Locking the room serialises joins, so team balancing and nickname
  -- de-duplication cannot race.
  SELECT * INTO v_room FROM public.rooms WHERE code = upper(btrim(p_code)) FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.status = 'ended' THEN RAISE EXCEPTION 'room ended'; END IF;

  INSERT INTO public.room_join_rate_windows (room_id, window_start, attempts)
  VALUES (v_room.id, date_trunc('minute', now()), 1)
  ON CONFLICT (room_id, window_start)
  DO UPDATE SET attempts = public.room_join_rate_windows.attempts + 1
  RETURNING attempts INTO v_attempts;
  IF v_attempts > 60 THEN
    RAISE EXCEPTION 'too many join attempts' USING ERRCODE = 'P0001';
  END IF;
  DELETE FROM public.room_join_rate_windows WHERE window_start < now() - interval '1 day';

  IF (SELECT count(*) FROM public.players WHERE room_id = v_room.id) >= 200 THEN
    RAISE EXCEPTION 'room full';
  END IF;

  IF v_room.team_count > 1 AND v_room.team_mode = 'auto' THEN
    SELECT t.idx INTO v_team
    FROM generate_series(0, v_room.team_count - 1) AS t(idx)
    ORDER BY (SELECT count(*) FROM public.players AS p
              WHERE p.room_id = v_room.id AND p.team_index = t.idx), t.idx
    LIMIT 1;
  END IF;

  v_try := v_nick;
  WHILE i < 8 LOOP
    IF NOT EXISTS (SELECT 1 FROM public.players WHERE room_id = v_room.id AND nickname = v_try) THEN
      INSERT INTO public.players (room_id, nickname, avatar_color, team_index)
      VALUES (v_room.id, v_try, v_color, v_team)
      RETURNING * INTO v_player;

      INSERT INTO private.player_tokens (player_id) VALUES (v_player.id)
      RETURNING token INTO v_token;

      RETURN to_jsonb(v_player) || jsonb_build_object('session_token', v_token);
    END IF;
    i := i + 1;
    v_try := left(v_nick, 16) || (i + 1)::text;
  END LOOP;
  RAISE EXCEPTION 'could not join';
END;
$$;

CREATE FUNCTION public.leave_room(p_player_id uuid, p_token uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_me public.players;
BEGIN
  v_me := private.authed_player(p_player_id, p_token);
  DELETE FROM public.players WHERE id = v_me.id;
  RETURN true;
END;
$$;

CREATE FUNCTION public.submit_answer(
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

  IF v_room.cursor_phase <> 'question' OR v_question.order_index <> v_room.cursor_index THEN
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

    FOR q IN SELECT qq.id FROM public.questions AS qq
             WHERE qq.quiz_id = v_room.quiz_id AND qq.order_index < v_question.order_index
             ORDER BY qq.order_index DESC LOOP
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

CREATE FUNCTION public.use_fifty_fifty(p_player_id uuid, p_token uuid, p_question_id uuid)
RETURNS integer[]
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_player public.players;
  v_room public.rooms;
  v_question public.questions;
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
  IF v_room.cursor_phase <> 'question' OR v_question.order_index <> v_room.cursor_index THEN
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

CREATE FUNCTION public.set_player_team(p_player_id uuid, p_team_index integer)
RETURNS public.players
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_player public.players;
  v_room public.rooms;
BEGIN
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id;
  IF v_player.id IS NULL THEN RAISE EXCEPTION 'unknown player'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.host_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;
  IF p_team_index IS NOT NULL
     AND (p_team_index < 0 OR p_team_index >= greatest(1, v_room.team_count)) THEN
    RAISE EXCEPTION 'invalid team';
  END IF;

  UPDATE public.players SET team_index = p_team_index
  WHERE id = p_player_id RETURNING * INTO v_player;
  RETURN v_player;
END;
$$;

CREATE FUNCTION public.start_room_v2(p_room_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_starts_at timestamptz := now() + interval '3 seconds';
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.host_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;
  -- A second click while the countdown runs is a no-op.
  IF v_room.status = 'active' THEN RETURN to_jsonb(v_room); END IF;
  IF v_room.status <> 'lobby' THEN RAISE EXCEPTION 'room already finished'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.questions WHERE quiz_id = v_room.quiz_id) THEN
    RAISE EXCEPTION 'quiz has no questions';
  END IF;

  UPDATE public.rooms
  SET status = 'active',
      cursor_index = 0,
      cursor_phase = 'question',
      started_at = v_starts_at,
      phase_started_at = v_starts_at
  WHERE id = p_room_id
  RETURNING * INTO v_room;

  RETURN to_jsonb(v_room);
END;
$$;

CREATE FUNCTION public.advance_room(p_room_id uuid, p_expect_index integer, p_expect_phase text)
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
  IF v_room.host_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;

  -- Idempotent: a second tab advancing the same stage is a no-op.
  IF v_room.status <> 'active'
     OR v_room.cursor_index <> p_expect_index
     OR v_room.cursor_phase <> p_expect_phase THEN
    RETURN v_room;
  END IF;

  SELECT count(*) INTO v_total FROM public.questions WHERE quiz_id = v_room.quiz_id;

  IF v_room.cursor_phase = 'question' THEN
    UPDATE public.rooms SET cursor_phase = 'reveal', phase_started_at = now()
    WHERE id = p_room_id RETURNING * INTO v_room;
  ELSIF v_room.cursor_index >= v_total - 1 THEN
    UPDATE public.rooms SET status = 'ended', phase_started_at = now()
    WHERE id = p_room_id RETURNING * INTO v_room;
  ELSIF v_room.cursor_phase = 'reveal' THEN
    UPDATE public.rooms SET cursor_phase = 'board', phase_started_at = now()
    WHERE id = p_room_id RETURNING * INTO v_room;
  ELSE
    UPDATE public.rooms
    SET cursor_index = v_room.cursor_index + 1, cursor_phase = 'question', phase_started_at = now()
    WHERE id = p_room_id RETURNING * INTO v_room;
  END IF;

  RETURN v_room;
END;
$$;

-- Ends the room (if it is not over yet) and records the final standings
-- once, so game history survives room cleanup. Returns the game_results id,
-- or NULL for a room that never started.
CREATE FUNCTION public.archive_room(p_room_id uuid)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_quiz public.quizzes;
  v_game_id uuid;
  v_questions integer;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  IF v_room.host_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'forbidden' USING ERRCODE = '42501';
  END IF;

  IF v_room.status <> 'ended' THEN
    UPDATE public.rooms SET status = 'ended', phase_started_at = now()
    WHERE id = p_room_id RETURNING * INTO v_room;
  END IF;

  IF v_room.started_at IS NULL THEN RETURN NULL; END IF;

  SELECT id INTO v_game_id FROM public.game_results WHERE room_id = p_room_id;
  IF v_game_id IS NOT NULL THEN RETURN v_game_id; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_room.quiz_id;
  SELECT count(*) INTO v_questions FROM public.questions WHERE quiz_id = v_room.quiz_id;

  INSERT INTO public.game_results
    (host_id, quiz_id, room_id, quiz_title, room_code, team_count, question_count, player_count, played_at)
  VALUES (
    v_room.host_id, v_room.quiz_id, v_room.id, COALESCE(v_quiz.title, 'Untitled quiz'),
    v_room.code, v_room.team_count, v_questions,
    (SELECT count(*) FROM public.players WHERE room_id = v_room.id),
    COALESCE(v_room.started_at, v_room.created_at)
  )
  RETURNING id INTO v_game_id;

  -- Fair ranking: score, then correctness, then participation, then
  -- cumulative response speed (as in 20260812110000_fair_rankings.sql).
  INSERT INTO public.game_player_results
    (game_id, nickname, avatar_color, team_index, rank, score, correct_count, answered_count, best_streak)
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
    FROM public.players AS p
    LEFT JOIN public.answers AS a ON a.player_id = p.id
    WHERE p.room_id = v_room.id
    GROUP BY p.id, p.nickname, p.avatar_color, p.team_index
  ) AS s;

  RETURN v_game_id;
END;
$$;

-- 5. Function privileges. Functions get EXECUTE for PUBLIC by default, and
-- Supabase's default privileges add anon/authenticated, so start from zero.
REVOKE ALL ON FUNCTION public.get_room_by_code(text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_reveals(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_players(uuid, uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_answers(uuid, uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.leave_room(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, uuid, integer, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.use_fifty_fifty(uuid, uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_player_team(uuid, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.start_room_v2(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.advance_room(uuid, integer, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.archive_room(uuid) FROM PUBLIC, anon, authenticated;

-- Players are anonymous.
GRANT EXECUTE ON FUNCTION public.get_room_by_code(text) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid, uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid, uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.leave_room(uuid, uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, uuid, integer, text) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid, uuid) TO anon, authenticated, service_role;

-- Hosts are signed in; each function also checks rooms.host_id.
GRANT EXECUTE ON FUNCTION public.set_player_team(uuid, integer) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.start_room_v2(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.advance_room(uuid, integer, text) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO authenticated, service_role;

NOTIFY pgrst, 'reload schema';
