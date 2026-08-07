-- Migration: Add upsert_admin_quiz_by_id_or_title RPC for UUID & non-UUID quizzes
-- Target: Lovable Supabase project (rplxgxgfehjmrsipbfnb)

CREATE OR REPLACE FUNCTION public.upsert_admin_quiz_by_id_or_title(
  p_quiz_id uuid DEFAULT NULL,
  p_title text DEFAULT NULL,
  p_category text DEFAULT 'عام',
  p_subcategory text DEFAULT '',
  p_difficulty text DEFAULT 'standard',
  p_language text DEFAULT 'ar',
  p_is_public boolean DEFAULT true
) RETURNS uuid AS $$
DECLARE
  v_target_id uuid;
BEGIN
  -- 1. Search by ID first
  IF p_quiz_id IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE id = p_quiz_id LIMIT 1;
  END IF;

  -- 2. Search by title if ID not found
  IF v_target_id IS NULL AND p_title IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE title = p_title LIMIT 1;
  END IF;

  -- 3. If quiz exists, UPDATE it cleanly (bypasses PostgREST schema cache)
  IF v_target_id IS NOT NULL THEN
    UPDATE public.quizzes
    SET category = COALESCE(p_category, category),
        subcategory = COALESCE(p_subcategory, subcategory),
        quiz_difficulty = COALESCE(p_difficulty, quiz_difficulty),
        language = COALESCE(p_language, language),
        is_public = COALESCE(p_is_public, is_public),
        title = COALESCE(p_title, title)
    WHERE id = v_target_id;
    RETURN v_target_id;
  END IF;

  -- 4. If quiz doesn't exist, INSERT it
  IF p_title IS NOT NULL AND p_title <> '' THEN
    INSERT INTO public.quizzes (id, title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES (
      COALESCE(p_quiz_id, gen_random_uuid()),
      p_title,
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean) TO anon, authenticated, service_role, postgres;

NOTIFY pgrst, 'reload schema';
