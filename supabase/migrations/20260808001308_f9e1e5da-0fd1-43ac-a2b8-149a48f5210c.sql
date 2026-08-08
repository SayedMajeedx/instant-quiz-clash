ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS category text NOT NULL DEFAULT 'عام',
  ADD COLUMN IF NOT EXISTS subcategory text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS quiz_difficulty text NOT NULL DEFAULT 'standard',
  ADD COLUMN IF NOT EXISTS language text NOT NULL DEFAULT 'ar',
  ADD COLUMN IF NOT EXISTS is_public boolean NOT NULL DEFAULT true;

ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS explanation text,
  ADD COLUMN IF NOT EXISTS subcategory text;

ALTER TABLE public.subcategories
  ADD COLUMN IF NOT EXISTS sort_order integer NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS quizzes_category_idx ON public.quizzes (category);
CREATE INDEX IF NOT EXISTS quizzes_is_public_idx ON public.quizzes (is_public);

-- Public library = admin-owned AND marked public
CREATE OR REPLACE FUNCTION private.is_library_quiz(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.quizzes q
    WHERE q.id = p_quiz_id AND q.is_public AND private.is_admin(q.user_id)
  );
$$;

-- Restore the admin upsert helper with the parameters the app sends
DROP FUNCTION IF EXISTS public.upsert_admin_quiz_by_id_or_title(uuid, text);
CREATE OR REPLACE FUNCTION public.upsert_admin_quiz_by_id_or_title(
  p_quiz_id uuid DEFAULT NULL,
  p_title text DEFAULT NULL,
  p_category text DEFAULT 'عام',
  p_subcategory text DEFAULT '',
  p_difficulty text DEFAULT 'standard',
  p_language text DEFAULT 'ar',
  p_is_public boolean DEFAULT true
) RETURNS uuid LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
DECLARE
  v_target_id uuid;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'authentication required';
  END IF;

  IF p_quiz_id IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE id = p_quiz_id LIMIT 1;
  END IF;
  IF v_target_id IS NULL AND p_title IS NOT NULL AND p_title <> '' THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE title = p_title LIMIT 1;
  END IF;

  IF v_target_id IS NOT NULL THEN
    UPDATE public.quizzes
       SET title = COALESCE(NULLIF(p_title, ''), title),
           category = COALESCE(p_category, category),
           subcategory = COALESCE(p_subcategory, subcategory),
           quiz_difficulty = COALESCE(p_difficulty, quiz_difficulty),
           language = COALESCE(p_language, language),
           is_public = COALESCE(p_is_public, is_public)
     WHERE id = v_target_id;
    RETURN v_target_id;
  END IF;

  IF p_title IS NOT NULL AND p_title <> '' THEN
    INSERT INTO public.quizzes (id, title, user_id, category, subcategory, quiz_difficulty, language, is_public)
    VALUES (
      COALESCE(p_quiz_id, gen_random_uuid()),
      p_title,
      auth.uid(),
      COALESCE(p_category, 'عام'),
      COALESCE(p_subcategory, ''),
      COALESCE(p_difficulty, 'standard'),
      COALESCE(p_language, 'ar'),
      COALESCE(p_is_public, true)
    )
    RETURNING id INTO v_target_id;
    RETURN v_target_id;
  END IF;

  RETURN NULL;
END;
$$;
REVOKE ALL ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) TO authenticated, service_role;

-- Admin quiz listing including the restored metadata
CREATE OR REPLACE FUNCTION public.get_all_admin_quizzes()
RETURNS jsonb LANGUAGE sql STABLE SET search_path = public, pg_temp AS $$
  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', q.id,
    'title', q.title,
    'category', q.category,
    'subcategory', q.subcategory,
    'quiz_difficulty', q.quiz_difficulty,
    'language', q.language,
    'is_public', q.is_public,
    'created_at', q.created_at,
    'questions', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', qn.id,
        'question_text', qn.question_text,
        'options', qn.options,
        'correct_index', qn.correct_index,
        'time_limit_seconds', qn.time_limit_seconds,
        'order_index', qn.order_index,
        'question_type', qn.question_type,
        'explanation', qn.explanation,
        'image_url', qn.image_url,
        'subcategory', qn.subcategory
      ) ORDER BY qn.order_index) FROM public.questions qn WHERE qn.quiz_id = q.id
    ), '[]'::jsonb)
  )), '[]'::jsonb)
  FROM public.quizzes q;
$$;
REVOKE ALL ON FUNCTION public.get_all_admin_quizzes() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_all_admin_quizzes() TO authenticated, service_role;