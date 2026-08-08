-- Create multiplayer custom rooms from the same unified question bank shown by
-- Browse/Admin. The client sends only the already-selected snapshot (20-100 rows).
CREATE OR REPLACE FUNCTION public.create_custom_quiz_room(
  p_questions jsonb,
  p_advance_mode text DEFAULT 'auto',
  p_team_count integer DEFAULT 0,
  p_team_mode text DEFAULT 'auto'
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_count integer;
  v_quiz_id uuid;
  v_room_id uuid;
  v_code text;
  v_attempt integer;
  v_i integer;
  v_expires_at timestamptz := now() + interval '12 hours';
  v_alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;
  IF jsonb_typeof(p_questions) <> 'array' THEN
    RAISE EXCEPTION 'Questions must be a JSON array';
  END IF;

  v_count := jsonb_array_length(p_questions);
  IF v_count NOT IN (20, 40, 50, 100) THEN
    RAISE EXCEPTION 'Question count must be 20, 40, 50, or 100';
  END IF;
  IF p_advance_mode NOT IN ('auto', 'manual') OR p_team_mode NOT IN ('auto', 'manual') THEN
    RAISE EXCEPTION 'Invalid room mode';
  END IF;
  IF p_team_count < 0 OR p_team_count > 8 THEN
    RAISE EXCEPTION 'Team count must be between 0 and 8';
  END IF;
  IF EXISTS (
    SELECT 1
    FROM jsonb_array_elements(p_questions) AS item
    WHERE nullif(btrim(item->>'question_text'), '') IS NULL
      OR jsonb_typeof(item->'options') <> 'array'
      OR jsonb_array_length(item->'options') < 2
      OR COALESCE((item->>'correct_index')::integer, -1) < 0
      OR COALESCE((item->>'correct_index')::integer, -1) >= jsonb_array_length(item->'options')
  ) THEN
    RAISE EXCEPTION 'One or more questions are invalid';
  END IF;

  INSERT INTO public.quizzes (
    user_id, title, category, subcategory, language, quiz_difficulty,
    is_public, quiz_kind, source_config, expires_at
  ) VALUES (
    v_user_id, 'تحدي كويز مخصص', 'مخصص', '', 'ar', 'standard',
    false, 'custom_generated', jsonb_build_object('question_count', v_count), v_expires_at
  ) RETURNING id INTO v_quiz_id;

  INSERT INTO public.questions (
    quiz_id, question_text, options, correct_index, time_limit_seconds,
    order_index, question_type, explanation, image_url, difficulty,
    subcategory, source_category
  )
  SELECT
    v_quiz_id,
    item->>'question_text',
    item->'options',
    (item->>'correct_index')::integer,
    30,
    ordinality - 1,
    COALESCE(nullif(item->>'question_type', ''), 'multi'),
    nullif(item->>'explanation', ''),
    nullif(item->>'image_url', ''),
    COALESCE(nullif(item->>'difficulty', ''), 'standard'),
    COALESCE(item->>'subcategory', ''),
    COALESCE(item->>'source_category', 'عام')
  FROM jsonb_array_elements(p_questions) WITH ORDINALITY AS selected(item, ordinality)
  ORDER BY ordinality;

  FOR v_attempt IN 1..12 LOOP
    v_code := '';
    FOR v_i IN 1..6 LOOP
      v_code := v_code || substr(v_alphabet, floor(random() * length(v_alphabet))::integer + 1, 1);
    END LOOP;
    BEGIN
      INSERT INTO public.rooms (code, quiz_id, status, advance_mode, team_count, team_mode)
      VALUES (v_code, v_quiz_id, 'lobby', p_advance_mode, p_team_count, p_team_mode)
      RETURNING id INTO v_room_id;
      EXIT;
    EXCEPTION WHEN unique_violation THEN
      v_room_id := NULL;
    END;
  END LOOP;

  IF v_room_id IS NULL THEN
    RAISE EXCEPTION 'Could not allocate a unique room code';
  END IF;

  RETURN jsonb_build_object(
    'room_id', v_room_id,
    'room_code', v_code,
    'quiz_id', v_quiz_id,
    'question_count', v_count,
    'expires_at', v_expires_at
  );
END;
$$;

REVOKE ALL ON FUNCTION public.create_custom_quiz_room(jsonb, text, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_custom_quiz_room(jsonb, text, integer, text) TO authenticated;

NOTIFY pgrst, 'reload schema';
