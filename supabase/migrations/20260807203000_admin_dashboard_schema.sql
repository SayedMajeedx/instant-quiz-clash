-- Migration: 20260807203000_admin_dashboard_schema.sql
-- Description: Complete Quiz Admin Dashboard Schema, Categories, Subcategories, Analytics, Admin Role & RLS Policies

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 2. Create subcategories table
CREATE TABLE IF NOT EXISTS public.subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS subcategories_category_id_idx ON public.subcategories (category_id);

-- 3. Extend quizzes table
ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS subcategory_id uuid REFERENCES public.subcategories(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS language text DEFAULT 'ar',
  ADD COLUMN IF NOT EXISTS quiz_difficulty text DEFAULT 'standard',
  ADD COLUMN IF NOT EXISTS is_public boolean DEFAULT true;

CREATE INDEX IF NOT EXISTS quizzes_category_id_idx ON public.quizzes (category_id);
CREATE INDEX IF NOT EXISTS quizzes_subcategory_id_idx ON public.quizzes (subcategory_id);

-- 4. Extend profiles table & Update handle_new_user()
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role text DEFAULT 'user' CHECK (role IN ('admin', 'user'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- 5. Create Analytics tables (game_sessions & user_answers)
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id uuid REFERENCES public.quizzes(id) ON DELETE SET NULL,
  host_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  room_code text,
  player_count integer DEFAULT 0,
  team_count integer DEFAULT 0,
  score_summary jsonb DEFAULT '{}'::jsonb,
  played_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS game_sessions_quiz_id_idx ON public.game_sessions (quiz_id);
CREATE INDEX IF NOT EXISTS game_sessions_host_id_idx ON public.game_sessions (host_id);

CREATE TABLE IF NOT EXISTS public.user_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_session_id uuid REFERENCES public.game_sessions(id) ON DELETE CASCADE,
  question_id uuid REFERENCES public.questions(id) ON DELETE CASCADE,
  player_id text,
  is_correct boolean NOT NULL,
  response_time_ms integer,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS user_answers_game_session_id_idx ON public.user_answers (game_session_id);
CREATE INDEX IF NOT EXISTS user_answers_question_id_idx ON public.user_answers (question_id);

-- 6. Helper Security Functions & RLS
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

COMMENT ON FUNCTION public.is_admin() IS 'Returns true if current user (auth.uid()) is an admin in profiles.';

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;

-- Enable RLS on new tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_answers ENABLE ROW LEVEL SECURITY;

-- Set Table Privileges
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT ALL ON public.categories TO authenticated, service_role;

GRANT SELECT ON public.subcategories TO anon, authenticated;
GRANT ALL ON public.subcategories TO authenticated, service_role;

GRANT ALL ON public.game_sessions TO authenticated, service_role;
GRANT ALL ON public.user_answers TO authenticated, service_role;

-- RLS Policies

-- Categories Policies
DROP POLICY IF EXISTS "categories_public_select" ON public.categories;
CREATE POLICY "categories_public_select" ON public.categories
  FOR SELECT TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "categories_admin_all" ON public.categories;
CREATE POLICY "categories_admin_all" ON public.categories
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Subcategories Policies
DROP POLICY IF EXISTS "subcategories_public_select" ON public.subcategories;
CREATE POLICY "subcategories_public_select" ON public.subcategories
  FOR SELECT TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "subcategories_admin_all" ON public.subcategories;
CREATE POLICY "subcategories_admin_all" ON public.subcategories
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Quizzes Admin Policy
DROP POLICY IF EXISTS "quizzes_admin_all" ON public.quizzes;
CREATE POLICY "quizzes_admin_all" ON public.quizzes
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Questions Admin Policy
DROP POLICY IF EXISTS "questions_admin_all" ON public.questions;
CREATE POLICY "questions_admin_all" ON public.questions
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Profiles Admin Policy
DROP POLICY IF EXISTS "profiles_admin_all" ON public.profiles;
CREATE POLICY "profiles_admin_all" ON public.profiles
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Game Sessions Policies
DROP POLICY IF EXISTS "game_sessions_host_all" ON public.game_sessions;
CREATE POLICY "game_sessions_host_all" ON public.game_sessions
  FOR ALL TO authenticated
  USING (auth.uid() = host_id)
  WITH CHECK (auth.uid() = host_id);

DROP POLICY IF EXISTS "game_sessions_admin_all" ON public.game_sessions;
CREATE POLICY "game_sessions_admin_all" ON public.game_sessions
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- User Answers Policies
DROP POLICY IF EXISTS "user_answers_host_all" ON public.user_answers;
CREATE POLICY "user_answers_host_all" ON public.user_answers
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.game_sessions gs
    WHERE gs.id = game_session_id AND gs.host_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.game_sessions gs
    WHERE gs.id = game_session_id AND gs.host_id = auth.uid()
  ));

DROP POLICY IF EXISTS "user_answers_admin_all" ON public.user_answers;
CREATE POLICY "user_answers_admin_all" ON public.user_answers
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
