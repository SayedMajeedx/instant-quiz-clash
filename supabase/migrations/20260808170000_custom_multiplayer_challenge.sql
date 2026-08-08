-- Multiplayer custom challenges are materialized as temporary quiz snapshots,
-- allowing the existing room/join/play flow to remain unchanged.
ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS quiz_kind text NOT NULL DEFAULT 'standard',
  ADD COLUMN IF NOT EXISTS source_config jsonb,
  ADD COLUMN IF NOT EXISTS expires_at timestamptz;

ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS source_question_id uuid REFERENCES public.questions(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS source_category text;

ALTER TABLE public.questions ALTER COLUMN time_limit_seconds SET DEFAULT 30;
UPDATE public.questions SET time_limit_seconds = 30 WHERE time_limit_seconds = 20;

CREATE INDEX IF NOT EXISTS quizzes_kind_expiry_idx ON public.quizzes (quiz_kind, expires_at);
CREATE INDEX IF NOT EXISTS questions_source_question_idx ON public.questions (source_question_id);

DROP FUNCTION IF EXISTS public.room_questions(uuid);
CREATE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer,
  question_type text,
  image_url text,
  subcategory text,
  source_category text
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT
    question.id,
    question.quiz_id,
    question.question_text,
    question.options,
    question.time_limit_seconds,
    question.order_index,
    question.question_type,
    question.image_url,
    question.subcategory,
    question.source_category
  FROM public.questions AS question
  JOIN public.rooms AS room ON room.quiz_id = question.quiz_id
  WHERE room.id = p_room_id
    AND CASE
          WHEN room.status = 'ended' THEN room.created_at > now() - interval '1 hour'
          ELSE room.created_at > now() - interval '12 hours'
        END
  ORDER BY question.order_index;
$$;
REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.custom_quiz_pool_size(
  p_categories text[] DEFAULT ARRAY[]::text[],
  p_subcategories text[] DEFAULT ARRAY[]::text[],
  p_difficulty text DEFAULT 'all'
) RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT count(DISTINCT question.id)::integer
  FROM public.questions AS question
  JOIN public.quizzes AS quiz ON quiz.id = question.quiz_id
  WHERE quiz.is_public IS TRUE
    AND COALESCE(quiz.quiz_kind, 'standard') = 'standard'
    AND nullif(btrim(question.question_text), '') IS NOT NULL
    AND jsonb_array_length(question.options) >= 2
    AND (cardinality(p_categories) = 0 OR quiz.category = ANY(p_categories))
    AND (cardinality(p_subcategories) = 0 OR question.subcategory = ANY(p_subcategories))
    AND (
      p_difficulty = 'all'
      OR (p_difficulty = 'challenge' AND lower(COALESCE(question.difficulty, quiz.quiz_difficulty, 'standard')) IN ('challenge', 'hard', 'expert'))
      OR (p_difficulty = 'standard' AND lower(COALESCE(question.difficulty, quiz.quiz_difficulty, 'standard')) NOT IN ('challenge', 'hard', 'expert'))
    );
$$;

REVOKE ALL ON FUNCTION public.custom_quiz_pool_size(text[], text[], text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.custom_quiz_pool_size(text[], text[], text) TO authenticated;

CREATE OR REPLACE FUNCTION public.generate_custom_quiz_room(
  p_categories text[] DEFAULT ARRAY[]::text[],
  p_subcategories text[] DEFAULT ARRAY[]::text[],
  p_question_count integer DEFAULT 20,
  p_difficulty text DEFAULT 'all',
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
  v_pool uuid[];
  v_selected uuid[];
  v_pool_size integer;
  v_i integer;
  v_j integer;
  v_tmp uuid;
  v_quiz_id uuid;
  v_room_id uuid;
  v_code text;
  v_attempt integer;
  v_expires_at timestamptz := now() + interval '12 hours';
  v_alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;
  IF p_question_count NOT IN (20, 40, 50, 100) THEN
    RAISE EXCEPTION 'Question count must be 20, 40, 50, or 100';
  END IF;
  IF p_difficulty NOT IN ('all', 'standard', 'challenge') THEN
    RAISE EXCEPTION 'Invalid difficulty';
  END IF;
  IF p_advance_mode NOT IN ('auto', 'manual') OR p_team_mode NOT IN ('auto', 'manual') THEN
    RAISE EXCEPTION 'Invalid room mode';
  END IF;
  IF p_team_count < 0 OR p_team_count > 8 THEN
    RAISE EXCEPTION 'Team count must be between 0 and 8';
  END IF;

  -- Bounded housekeeping for previously generated games.
  DELETE FROM public.quizzes
  WHERE quiz_kind = 'custom_generated'
    AND expires_at < now()
    AND NOT EXISTS (
      SELECT 1 FROM public.rooms
      WHERE rooms.quiz_id = quizzes.id AND rooms.status IN ('lobby', 'active')
    );

  SELECT array_agg(candidate.id ORDER BY candidate.id)
  INTO v_pool
  FROM (
    SELECT DISTINCT question.id
    FROM public.questions AS question
    JOIN public.quizzes AS quiz ON quiz.id = question.quiz_id
    WHERE quiz.is_public IS TRUE
      AND COALESCE(quiz.quiz_kind, 'standard') = 'standard'
      AND nullif(btrim(question.question_text), '') IS NOT NULL
      AND jsonb_array_length(question.options) >= 2
      AND (cardinality(p_categories) = 0 OR quiz.category = ANY(p_categories))
      AND (cardinality(p_subcategories) = 0 OR question.subcategory = ANY(p_subcategories))
      AND (
        p_difficulty = 'all'
        OR (p_difficulty = 'challenge' AND lower(COALESCE(question.difficulty, quiz.quiz_difficulty, 'standard')) IN ('challenge', 'hard', 'expert'))
        OR (p_difficulty = 'standard' AND lower(COALESCE(question.difficulty, quiz.quiz_difficulty, 'standard')) NOT IN ('challenge', 'hard', 'expert'))
      )
  ) AS candidate;

  v_pool_size := COALESCE(cardinality(v_pool), 0);
  IF v_pool_size < p_question_count THEN
    RAISE EXCEPTION 'Only % eligible questions are available', v_pool_size;
  END IF;

  -- Fisher-Yates shuffle inside the transaction.
  FOR v_i IN REVERSE 2..v_pool_size LOOP
    v_j := floor(random() * v_i)::integer + 1;
    v_tmp := v_pool[v_i];
    v_pool[v_i] := v_pool[v_j];
    v_pool[v_j] := v_tmp;
  END LOOP;
  v_selected := v_pool[1:p_question_count];

  INSERT INTO public.quizzes (
    user_id, title, category, subcategory, language, quiz_difficulty,
    is_public, quiz_kind, source_config, expires_at
  ) VALUES (
    v_user_id,
    'تحدي كويز مخصص',
    'مخصص',
    '',
    'ar',
    CASE WHEN p_difficulty = 'all' THEN 'standard' ELSE p_difficulty END,
    false,
    'custom_generated',
    jsonb_build_object(
      'categories', p_categories,
      'subcategories', p_subcategories,
      'question_count', p_question_count,
      'difficulty', p_difficulty
    ),
    v_expires_at
  ) RETURNING id INTO v_quiz_id;

  INSERT INTO public.questions (
    quiz_id, question_text, options, correct_index, time_limit_seconds,
    order_index, question_type, explanation, image_url, difficulty,
    subcategory, tags, source, external_id, is_verified, version,
    source_question_id, source_category
  )
  SELECT
    v_quiz_id,
    source_question.question_text,
    source_question.options,
    source_question.correct_index,
    30,
    selected.ordinality - 1,
    source_question.question_type,
    source_question.explanation,
    source_question.image_url,
    source_question.difficulty,
    source_question.subcategory,
    source_question.tags,
    source_question.source,
    source_question.external_id,
    source_question.is_verified,
    source_question.version,
    source_question.id,
    source_quiz.category
  FROM unnest(v_selected) WITH ORDINALITY AS selected(question_id, ordinality)
  JOIN public.questions AS source_question ON source_question.id = selected.question_id
  JOIN public.quizzes AS source_quiz ON source_quiz.id = source_question.quiz_id
  ORDER BY selected.ordinality;

  FOR v_attempt IN 1..12 LOOP
    v_code := '';
    FOR v_i IN 1..6 LOOP
      v_code := v_code || substr(v_alphabet, floor(random() * length(v_alphabet))::integer + 1, 1);
    END LOOP;
    BEGIN
      INSERT INTO public.rooms (
        code, quiz_id, status, advance_mode, team_count, team_mode
      ) VALUES (
        v_code, v_quiz_id, 'lobby', p_advance_mode, p_team_count, p_team_mode
      ) RETURNING id INTO v_room_id;
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
    'question_count', p_question_count,
    'expires_at', v_expires_at
  );
END;
$$;

REVOKE ALL ON FUNCTION public.generate_custom_quiz_room(text[], text[], integer, text, text, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.generate_custom_quiz_room(text[], text[], integer, text, text, integer, text) TO authenticated;

-- Generated snapshots are private to their host but remain playable through
-- the existing room-scoped security functions.
DROP POLICY IF EXISTS quizzes_public_catalog_select ON public.quizzes;
CREATE POLICY quizzes_public_catalog_select ON public.quizzes
  FOR SELECT TO anon, authenticated
  USING (is_public IS TRUE AND COALESCE(quiz_kind, 'standard') = 'standard');

NOTIFY pgrst, 'reload schema';
