-- Migration: Fix quizzes schema, categories RLS, and add upsert_admin_quiz RPC
-- Target: Lovable Supabase project (rplxgxgfehjmrsipbfnb)

-- 1. Ensure quizzes table columns exist
ALTER TABLE public.quizzes ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'عام';
ALTER TABLE public.quizzes ADD COLUMN IF NOT EXISTS subcategory TEXT DEFAULT '';
ALTER TABLE public.quizzes ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT true;
ALTER TABLE public.quizzes ADD COLUMN IF NOT EXISTS quiz_difficulty TEXT DEFAULT 'standard';
ALTER TABLE public.quizzes ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'ar';

-- 2. Relax categories & subcategories constraints
ALTER TABLE public.categories ALTER COLUMN brand_id DROP NOT NULL;
ALTER TABLE public.categories ALTER COLUMN name_en DROP NOT NULL;
ALTER TABLE public.categories ALTER COLUMN sort_order SET DEFAULT 0;
ALTER TABLE public.categories ALTER COLUMN is_active SET DEFAULT true;

-- 3. Clean up restrictive policies
DROP POLICY IF EXISTS "Admins manage brand categories" ON public.categories;
DROP POLICY IF EXISTS "Public can read active categories" ON public.categories;
DROP POLICY IF EXISTS "Admin subcategories CRUD" ON public.subcategories;
DROP POLICY IF EXISTS "Admin categories CRUD" ON public.categories;

-- 4. Enable permissive policies
DROP POLICY IF EXISTS "Permissive categories" ON public.categories;
CREATE POLICY "Permissive categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive subcategories" ON public.subcategories;
CREATE POLICY "Permissive subcategories" ON public.subcategories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive quizzes" ON public.quizzes;
CREATE POLICY "Permissive quizzes" ON public.quizzes FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive questions" ON public.questions;
CREATE POLICY "Permissive questions" ON public.questions FOR ALL USING (true) WITH CHECK (true);

-- 5. Create or replace upsert_admin_quiz RPC
CREATE OR REPLACE FUNCTION public.upsert_admin_quiz(
  p_title text,
  p_category text DEFAULT 'عام',
  p_subcategory text DEFAULT '',
  p_difficulty text DEFAULT 'standard',
  p_language text DEFAULT 'ar',
  p_is_public boolean DEFAULT true
) RETURNS uuid AS $$
DECLARE
  v_quiz_id uuid;
BEGIN
  SELECT id INTO v_quiz_id FROM public.quizzes WHERE title = p_title LIMIT 1;
  
  IF v_quiz_id IS NULL THEN
    INSERT INTO public.quizzes (title, category, subcategory, quiz_difficulty, language, is_public)
    VALUES (
      p_title, 
      COALESCE(p_category, 'عام'), 
      COALESCE(p_subcategory, ''), 
      COALESCE(p_difficulty, 'standard'), 
      COALESCE(p_language, 'ar'), 
      COALESCE(p_is_public, true)
    )
    RETURNING id INTO v_quiz_id;
  ELSE
    UPDATE public.quizzes
    SET category = COALESCE(p_category, category),
        subcategory = COALESCE(p_subcategory, subcategory),
        quiz_difficulty = COALESCE(p_difficulty, quiz_difficulty),
        language = COALESCE(p_language, language),
        is_public = COALESCE(p_is_public, is_public)
    WHERE id = v_quiz_id;
  END IF;

  RETURN v_quiz_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz(text, text, text, text, text, boolean) TO anon, authenticated, service_role, postgres;

-- 6. Reload PostgREST schema cache
NOTIFY pgrst, 'reload schema';
