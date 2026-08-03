-- 1. Schema -------------------------------------------------------------
ALTER TABLE public.rooms
  ADD COLUMN IF NOT EXISTS advance_mode text NOT NULL DEFAULT 'auto',
  ADD COLUMN IF NOT EXISTS team_mode text NOT NULL DEFAULT 'auto',
  ADD COLUMN IF NOT EXISTS cursor_index integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS cursor_phase text NOT NULL DEFAULT 'question',
  ADD COLUMN IF NOT EXISTS phase_started_at timestamptz;

ALTER TABLE public.rooms DROP CONSTRAINT IF EXISTS rooms_advance_mode_check;
ALTER TABLE public.rooms ADD CONSTRAINT rooms_advance_mode_check CHECK (advance_mode IN ('auto','manual'));
ALTER TABLE public.rooms DROP CONSTRAINT IF EXISTS rooms_team_mode_check;
ALTER TABLE public.rooms ADD CONSTRAINT rooms_team_mode_check CHECK (team_mode IN ('auto','manual'));
ALTER TABLE public.rooms DROP CONSTRAINT IF EXISTS rooms_cursor_phase_check;
ALTER TABLE public.rooms ADD CONSTRAINT rooms_cursor_phase_check CHECK (cursor_phase IN ('question','reveal','board'));

ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS image_url text,
  ADD COLUMN IF NOT EXISTS question_type text NOT NULL DEFAULT 'multi';
ALTER TABLE public.questions DROP CONSTRAINT IF EXISTS questions_question_type_check;
ALTER TABLE public.questions ADD CONSTRAINT questions_question_type_check CHECK (question_type IN ('multi','boolean'));

-- 2. Question lookup now carries image + type ----------------------------
DROP FUNCTION IF EXISTS public.room_questions(uuid);
DROP FUNCTION IF EXISTS private.room_questions(uuid);

CREATE FUNCTION private.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer, image_url text, question_type text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index, q.image_url, q.question_type
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND private.room_is_live(r.id)
  ORDER BY q.order_index;
$$;

CREATE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer, image_url text, question_type text)
LANGUAGE sql STABLE SET search_path TO 'public'
AS $$ SELECT * FROM private.room_questions(p_room_id); $$;

REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;

-- 3. Reveals follow the room cursor --------------------------------------
CREATE OR REPLACE FUNCTION private.room_reveals(p_room_id uuid)
RETURNS TABLE(question_id uuid, correct_index integer)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public'
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

-- 4. Scoring against the current cursor question -------------------------
CREATE OR REPLACE FUNCTION private.submit_answer(p_player_id uuid, p_question_id uuid, p_choice integer, p_powerup text DEFAULT NULL::text)
RETURNS public.answers
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
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
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id;
  IF v_player.id IS NULL THEN RAISE EXCEPTION 'unknown player'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF v_room.id IS NULL OR v_room.status <> 'active' OR v_room.started_at IS NULL THEN
    RAISE EXCEPTION 'room not active';
  END IF;

  SELECT * INTO v_question FROM public.questions WHERE id = p_question_id AND quiz_id = v_room.quiz_id;
  IF v_question.id IS NULL THEN RAISE EXCEPTION 'unknown question'; END IF;

  IF v_room.cursor_phase <> 'question' OR v_question.order_index <> v_room.cursor_index THEN
    RAISE EXCEPTION 'question not active';
  END IF;

  v_choices := CASE WHEN v_question.question_type = 'boolean' THEN 2 ELSE 4 END;
  IF p_choice < 0 OR p_choice >= v_choices THEN RAISE EXCEPTION 'invalid choice'; END IF;

  IF EXISTS (SELECT 1 FROM public.answers WHERE player_id = p_player_id AND question_id = p_question_id) THEN
    RAISE EXCEPTION 'already answered';
  END IF;

  IF v_powerup IS NOT NULL AND v_powerup <> 'double' THEN RAISE EXCEPTION 'unknown powerup'; END IF;
  IF v_powerup = 'double' AND v_player.used_double THEN v_powerup := NULL; END IF;

  v_limit := greatest(1, v_question.time_limit_seconds) * 1000;
  v_ms_used := EXTRACT(EPOCH FROM (now() - COALESCE(v_room.phase_started_at, v_room.started_at))) * 1000;
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
$$;

-- 5. 50:50 is a no-op on true/false --------------------------------------
CREATE OR REPLACE FUNCTION private.use_fifty_fifty(p_player_id uuid, p_question_id uuid)
RETURNS integer[]
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
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

-- 6. Host-driven advance --------------------------------------------------
CREATE OR REPLACE FUNCTION private.advance_room(p_room_id uuid, p_expect_index integer, p_expect_phase text)
RETURNS public.rooms
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
DECLARE
  v_room public.rooms;
  v_total integer;
BEGIN
  IF NOT private.room_owner(p_room_id) THEN RAISE EXCEPTION 'forbidden'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id FOR UPDATE;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;

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

CREATE OR REPLACE FUNCTION public.advance_room(p_room_id uuid, p_expect_index integer, p_expect_phase text)
RETURNS public.rooms
LANGUAGE sql SET search_path TO 'public'
AS $$ SELECT private.advance_room(p_room_id, p_expect_index, p_expect_phase); $$;

REVOKE ALL ON FUNCTION public.advance_room(uuid, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.advance_room(uuid, integer, text) TO authenticated;

-- 7. Manual team assignment ----------------------------------------------
CREATE OR REPLACE FUNCTION private.set_player_team(p_player_id uuid, p_team_index integer)
RETURNS public.players
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
DECLARE
  v_player public.players;
  v_room public.rooms;
BEGIN
  SELECT * INTO v_player FROM public.players WHERE id = p_player_id;
  IF v_player.id IS NULL THEN RAISE EXCEPTION 'unknown player'; END IF;
  IF NOT private.room_owner(v_player.room_id) THEN RAISE EXCEPTION 'forbidden'; END IF;

  SELECT * INTO v_room FROM public.rooms WHERE id = v_player.room_id;
  IF p_team_index IS NOT NULL AND (p_team_index < 0 OR p_team_index >= greatest(1, v_room.team_count)) THEN
    RAISE EXCEPTION 'invalid team';
  END IF;

  UPDATE public.players SET team_index = p_team_index WHERE id = p_player_id RETURNING * INTO v_player;
  RETURN v_player;
END;
$$;

CREATE OR REPLACE FUNCTION public.set_player_team(p_player_id uuid, p_team_index integer)
RETURNS public.players
LANGUAGE sql SET search_path TO 'public'
AS $$ SELECT private.set_player_team(p_player_id, p_team_index); $$;

REVOKE ALL ON FUNCTION public.set_player_team(uuid, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.set_player_team(uuid, integer) TO authenticated;

-- 8. Auto-assign teams only in automatic mode ----------------------------
CREATE OR REPLACE FUNCTION private.join_room(p_code text, p_nickname text, p_avatar_color text DEFAULT '#a855f7'::text)
RETURNS public.players
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
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

-- 9. Storage policies for question images --------------------------------
CREATE POLICY "question_images_public_read" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'question-images');
CREATE POLICY "question_images_owner_insert" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'question-images' AND owner = auth.uid());
CREATE POLICY "question_images_owner_update" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'question-images' AND owner = auth.uid());
CREATE POLICY "question_images_owner_delete" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'question-images' AND owner = auth.uid());