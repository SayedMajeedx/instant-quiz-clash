-- Migration: Full setup of categories, subcategories, quizzes, questions tables & RPC for fresh databases

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  brand_id UUID,
  name_en TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create subcategories table
CREATE TABLE IF NOT EXISTS public.subcategories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Create quizzes table
CREATE TABLE IF NOT EXISTS public.quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'عام',
  subcategory TEXT DEFAULT '',
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  subcategory_id UUID REFERENCES public.subcategories(id) ON DELETE SET NULL,
  language TEXT DEFAULT 'ar',
  quiz_difficulty TEXT DEFAULT 'standard',
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Create questions table
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  correct_index INTEGER DEFAULT 0,
  question_type TEXT DEFAULT 'multi',
  time_limit_seconds INTEGER DEFAULT 20,
  order_index INTEGER DEFAULT 0,
  explanation TEXT,
  image_url TEXT,
  subcategory TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- 6. Grant Permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;

-- 7. Add Permissive RLS Policies
DROP POLICY IF EXISTS "Permissive categories" ON public.categories;
CREATE POLICY "Permissive categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive subcategories" ON public.subcategories;
CREATE POLICY "Permissive subcategories" ON public.subcategories FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive quizzes" ON public.quizzes;
CREATE POLICY "Permissive quizzes" ON public.quizzes FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Permissive questions" ON public.questions;
CREATE POLICY "Permissive questions" ON public.questions FOR ALL USING (true) WITH CHECK (true);

-- 8. Create Admin Upsert RPC Function
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
  IF p_quiz_id IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE id = p_quiz_id LIMIT 1;
  END IF;

  IF v_target_id IS NULL AND p_title IS NOT NULL THEN
    SELECT id INTO v_target_id FROM public.quizzes WHERE title = p_title LIMIT 1;
  END IF;

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

-- 9. Reload PostgREST Schema Cache
NOTIFY pgrst, 'reload schema';
