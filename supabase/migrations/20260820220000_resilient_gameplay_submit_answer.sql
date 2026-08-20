-- Migration: Resilient submit_answer and game loop RPCs
-- Prevents game freezes, handles duplicate/late submissions gracefully

CREATE OR REPLACE FUNCTION private.submit_answer(
  p_player_id uuid,
  p_question_id uuid,
  p_choice integer,
  p_powerup text DEFAULT NULL::text
)
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

  -- Idempotency: Return existing answer if player already answered this question
  SELECT * INTO v_answer FROM public.answers WHERE player_id = p_player_id AND question_id = p_question_id;
  IF v_answer.id IS NOT NULL THEN
    RETURN v_answer;
  END IF;

  -- Ensure room is still on question phase for this question
  IF v_room.cursor_phase <> 'question' OR v_question.order_index <> v_room.cursor_index THEN
    RAISE EXCEPTION 'question not active';
  END IF;

  v_choices := CASE WHEN v_question.question_type = 'boolean' THEN 2 ELSE 4 END;
  IF p_choice < 0 OR p_choice >= v_choices THEN RAISE EXCEPTION 'invalid choice'; END IF;

  IF v_powerup IS NOT NULL AND v_powerup <> 'double' THEN RAISE EXCEPTION 'unknown powerup'; END IF;
  IF v_powerup = 'double' AND v_player.used_double THEN v_powerup := NULL; END IF;

  v_limit := greatest(1, v_question.time_limit_seconds) * 1000;
  v_ms_used := EXTRACT(EPOCH FROM (now() - COALESCE(v_room.phase_started_at, v_room.started_at))) * 1000;

  -- Cap ms_used gracefully instead of rejecting late clicks while room is still in question phase
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

CREATE OR REPLACE FUNCTION public.submit_answer(
  p_player_id uuid,
  p_question_id uuid,
  p_choice integer,
  p_powerup text DEFAULT NULL::text
)
RETURNS public.answers
LANGUAGE sql SET search_path TO 'public'
AS $$ SELECT private.submit_answer(p_player_id, p_question_id, p_choice, p_powerup); $$;

REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer, text) TO anon, authenticated, service_role;
