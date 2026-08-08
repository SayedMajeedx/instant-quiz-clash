-- 1. Admin roles
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS user_roles_select_own ON public.user_roles;
CREATE POLICY user_roles_select_own ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

CREATE OR REPLACE FUNCTION private.is_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = 'admin');
$$;

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role FROM auth.users WHERE lower(email) = 'ifatshady@gmail.com'
ON CONFLICT DO NOTHING;

-- 2. Public library visibility helper
CREATE OR REPLACE FUNCTION private.is_library_quiz(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.quizzes q
    WHERE q.id = p_quiz_id AND private.is_admin(q.user_id)
  );
$$;

-- 3. Drop overly permissive policies
DROP POLICY IF EXISTS "Permissive quizzes" ON public.quizzes;
DROP POLICY IF EXISTS "Permissive questions" ON public.questions;
DROP POLICY IF EXISTS "Permissive categories" ON public.categories;
DROP POLICY IF EXISTS "Permissive subcategories" ON public.subcategories;

-- 4. Taxonomy: public read, admin write
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.categories TO authenticated;
GRANT ALL ON public.categories TO service_role;
GRANT SELECT ON public.subcategories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.subcategories TO authenticated;
GRANT ALL ON public.subcategories TO service_role;

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS categories_public_select ON public.categories;
CREATE POLICY categories_public_select ON public.categories
  FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS categories_admin_write ON public.categories;
CREATE POLICY categories_admin_write ON public.categories
  FOR ALL TO authenticated USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

DROP POLICY IF EXISTS subcategories_public_select ON public.subcategories;
CREATE POLICY subcategories_public_select ON public.subcategories
  FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS subcategories_admin_write ON public.subcategories;
CREATE POLICY subcategories_admin_write ON public.subcategories
  FOR ALL TO authenticated USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

-- 5. Quizzes / questions: library read + owner/admin write
DROP POLICY IF EXISTS quizzes_library_select ON public.quizzes;
CREATE POLICY quizzes_library_select ON public.quizzes
  FOR SELECT TO anon, authenticated USING (private.is_library_quiz(id));
DROP POLICY IF EXISTS quizzes_admin_write ON public.quizzes;
CREATE POLICY quizzes_admin_write ON public.quizzes
  FOR ALL TO authenticated USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

DROP POLICY IF EXISTS questions_library_select ON public.questions;
CREATE POLICY questions_library_select ON public.questions
  FOR SELECT TO anon, authenticated USING (private.is_library_quiz(quiz_id));
DROP POLICY IF EXISTS questions_admin_write ON public.questions;
CREATE POLICY questions_admin_write ON public.questions
  FOR ALL TO authenticated USING (private.is_admin(auth.uid())) WITH CHECK (private.is_admin(auth.uid()));

GRANT SELECT ON public.quizzes TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.quizzes TO authenticated;
GRANT ALL ON public.quizzes TO service_role;
GRANT SELECT ON public.questions TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.questions TO authenticated;
GRANT ALL ON public.questions TO service_role;

-- 6. Storage: question images no longer world-readable
CREATE OR REPLACE FUNCTION private.question_image_readable(p_name text, p_owner uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT (p_owner IS NOT NULL AND p_owner = auth.uid())
    OR EXISTS (
      SELECT 1 FROM public.questions q
      JOIN public.quizzes z ON z.id = q.quiz_id
      WHERE q.image_url = p_name
        AND (
          private.is_admin(z.user_id)
          OR z.user_id = auth.uid()
          OR EXISTS (SELECT 1 FROM public.rooms r WHERE r.quiz_id = z.id AND private.room_is_live(r.id))
        )
    );
$$;

DROP POLICY IF EXISTS question_images_public_read ON storage.objects;
CREATE POLICY question_images_scoped_read ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'question-images' AND private.question_image_readable(name, owner));

-- 7. Play counter: no longer callable from the browser
CREATE OR REPLACE FUNCTION private.record_quiz_play(p_source_id text)
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  v_id text := nullif(btrim(p_source_id), '');
  v_count integer;
BEGIN
  IF v_id IS NULL OR length(v_id) > 200 THEN RETURN 0; END IF;
  INSERT INTO public.quiz_play_stats (source_quiz_id, play_count, last_played_at)
  VALUES (v_id, 1, now())
  ON CONFLICT (source_quiz_id) DO UPDATE
    SET play_count = public.quiz_play_stats.play_count + 1, last_played_at = now()
  RETURNING play_count INTO v_count;
  RETURN v_count;
END;
$$;

DROP FUNCTION IF EXISTS public.record_quiz_play(text);
CREATE OR REPLACE FUNCTION public.record_quiz_play(p_source_id text)
RETURNS integer LANGUAGE sql SET search_path = public, pg_temp AS $$
  SELECT private.record_quiz_play(p_source_id);
$$;
REVOKE ALL ON FUNCTION public.record_quiz_play(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_quiz_play(text) TO service_role;
REVOKE ALL ON FUNCTION private.record_quiz_play(text) FROM PUBLIC, anon, authenticated;

-- 8. Admin helpers: invoker + fixed search_path, schema-accurate
DROP FUNCTION IF EXISTS public.get_all_admin_quizzes();
CREATE OR REPLACE FUNCTION public.get_all_admin_quizzes()
RETURNS jsonb LANGUAGE sql STABLE SET search_path = public, pg_temp AS $$
  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', q.id,
    'title', q.title,
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
        'image_url', qn.image_url
      )) FROM public.questions qn WHERE qn.quiz_id = q.id
    ), '[]'::jsonb)
  )), '[]'::jsonb)
  FROM public.quizzes q;
$$;
REVOKE ALL ON FUNCTION public.get_all_admin_quizzes() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_all_admin_quizzes() TO authenticated, service_role;

DROP FUNCTION IF EXISTS public.upsert_admin_quiz_by_id_or_title(uuid, text, text, text, text, text, boolean);
CREATE OR REPLACE FUNCTION public.upsert_admin_quiz_by_id_or_title(
  p_quiz_id uuid DEFAULT NULL,
  p_title text DEFAULT NULL
) RETURNS uuid LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
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
    UPDATE public.quizzes SET title = COALESCE(p_title, title) WHERE id = v_target_id;
    RETURN v_target_id;
  END IF;
  IF p_title IS NOT NULL AND p_title <> '' THEN
    INSERT INTO public.quizzes (id, title, user_id)
    VALUES (COALESCE(p_quiz_id, gen_random_uuid()), p_title, auth.uid())
    RETURNING id INTO v_target_id;
    RETURN v_target_id;
  END IF;
  RETURN NULL;
END;
$$;
REVOKE ALL ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.upsert_admin_quiz_by_id_or_title(uuid, text) TO authenticated, service_role;