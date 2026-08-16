-- Migration: Fix public catalog RLS access for unauthenticated (anon) users
-- Description: Ensures all public users can read categories, subcategories, public quizzes, questions, and play stats without requiring admin login.

-- 1. Grant SELECT on categories and subcategories to anon and authenticated
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT SELECT ON public.subcategories TO anon, authenticated;

-- Ensure RLS is enabled and allows SELECT for public
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "categories_public_select" ON public.categories;
CREATE POLICY "categories_public_select" ON public.categories
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "subcategories_public_select" ON public.subcategories;
CREATE POLICY "subcategories_public_select" ON public.subcategories
  FOR SELECT TO anon, authenticated USING (true);

-- 2. Ensure public quizzes SELECT policy for anon & authenticated
GRANT SELECT ON public.quizzes TO anon, authenticated;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "quizzes_public_catalog_select" ON public.quizzes;
CREATE POLICY "quizzes_public_catalog_select" ON public.quizzes
  FOR SELECT TO anon, authenticated
  USING (is_public IS TRUE OR is_public IS NULL);

-- 3. Ensure questions SELECT policy for public quizzes
GRANT SELECT ON public.questions TO anon, authenticated;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "questions_public_catalog_select" ON public.questions;
CREATE POLICY "questions_public_catalog_select" ON public.questions
  FOR SELECT TO anon, authenticated
  USING (EXISTS (
    SELECT 1 FROM public.quizzes q
    WHERE q.id = quiz_id
      AND (q.is_public IS TRUE OR q.is_public IS NULL)
  ));

-- 4. Ensure quiz_play_stats SELECT policy for public
GRANT SELECT ON public.quiz_play_stats TO anon, authenticated;
ALTER TABLE public.quiz_play_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "quiz_play_stats_public_select" ON public.quiz_play_stats;
CREATE POLICY "quiz_play_stats_public_select" ON public.quiz_play_stats
  FOR SELECT TO anon, authenticated USING (true);

-- 5. Ensure admin_deleted_quizzes and get_catalog_deleted_quizzes RPC
GRANT SELECT (library_id, title, deleted_at) ON TABLE public.admin_deleted_quizzes TO anon, authenticated;

DROP POLICY IF EXISTS "admin_deleted_quizzes_catalog_select" ON public.admin_deleted_quizzes;
CREATE POLICY "admin_deleted_quizzes_catalog_select" ON public.admin_deleted_quizzes
  FOR SELECT TO anon, authenticated USING (true);

GRANT EXECUTE ON FUNCTION public.get_catalog_deleted_quizzes() TO anon, authenticated, service_role;

NOTIFY pgrst, 'reload schema';
