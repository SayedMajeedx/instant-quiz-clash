-- =========================================================================
-- Catalog question counts, and question data cleanup.
--
-- * 20261018100000_position_based_rooms.sql hid answer columns from
--   anonymous users, which also stopped questions(count) embeds working for
--   them (PostgREST needs the whole table). quiz_question_counts returns the
--   counts for the public catalog and the home page instead.
-- * True/false questions saved as four-choice questions showed two empty
--   answer tiles. They become true/false, with "True" first as the player
--   screen labels them.
-- * Four-choice questions with extra blank options past the fourth keep only
--   the first four.
-- * Quizzes whose questions are all still blank (fresh drafts) leave the
--   public catalog; new drafts are created private by the app.
-- * A room can't be created for a quiz with blank questions (no text and no
--   image), so hosts don't spend their daily game on an unplayable quiz.
-- =========================================================================

-- 1. True/false stored as multiple choice ------------------------------------
UPDATE public.questions
SET question_type = 'boolean'
WHERE question_type IS DISTINCT FROM 'boolean'
  AND CASE WHEN jsonb_typeof(options) = 'array' THEN jsonb_array_length(options) END = 2
  AND btrim(options->>0) IN ('صح', 'صحيح', 'True', 'true')
  AND btrim(options->>1) IN ('خطأ', 'False', 'false');

UPDATE public.questions
SET question_type = 'boolean',
    options = jsonb_build_array(options->1, options->0),
    correct_index = 1 - correct_index
WHERE question_type IS DISTINCT FROM 'boolean'
  AND CASE WHEN jsonb_typeof(options) = 'array' THEN jsonb_array_length(options) END = 2
  AND correct_index IN (0, 1)
  AND btrim(options->>0) IN ('خطأ', 'False', 'false')
  AND btrim(options->>1) IN ('صح', 'صحيح', 'True', 'true');

-- 2. Blank options past the fourth --------------------------------------------
UPDATE public.questions AS q
SET options = (
  SELECT jsonb_agg(e.value ORDER BY e.ordinality)
  FROM jsonb_array_elements(q.options) WITH ORDINALITY AS e(value, ordinality)
  WHERE e.ordinality <= 4
)
WHERE q.question_type IS DISTINCT FROM 'boolean'
  AND CASE WHEN jsonb_typeof(q.options) = 'array' THEN jsonb_array_length(q.options) END > 4
  AND q.correct_index BETWEEN 0 AND 3
  AND NOT EXISTS (
    SELECT 1
    FROM jsonb_array_elements_text(
      CASE WHEN jsonb_typeof(q.options) = 'array' THEN q.options ELSE '[]'::jsonb END
    ) WITH ORDINALITY AS e(value, ordinality)
    WHERE e.ordinality > 4 AND btrim(e.value) <> ''
  );

-- 3. Blank drafts out of the public catalog -----------------------------------
UPDATE public.quizzes AS z
SET is_public = false
WHERE z.is_public
  AND EXISTS (SELECT 1 FROM public.questions AS q WHERE q.quiz_id = z.id)
  AND NOT EXISTS (
    SELECT 1 FROM public.questions AS q
    WHERE q.quiz_id = z.id
      AND (btrim(COALESCE(q.question_text, '')) <> '' OR btrim(COALESCE(q.image_url, '')) <> '')
  );

-- 4. No rooms for quizzes with blank questions --------------------------------
-- Same as 20261017110000_restore_game_security.sql, plus the check, which
-- runs before the daily quota is consumed.
CREATE OR REPLACE FUNCTION private.rooms_before_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF auth.uid() IS NOT NULL THEN
    NEW.host_id := auth.uid();
  ELSIF COALESCE(auth.role(), 'service_role') <> 'service_role' THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;

  NEW.status := 'lobby';
  NEW.cursor_index := 0;
  NEW.cursor_phase := 'question';
  NEW.started_at := NULL;
  NEW.phase_started_at := NULL;

  IF EXISTS (
    SELECT 1 FROM public.questions AS q
    WHERE q.quiz_id = NEW.quiz_id
      AND btrim(COALESCE(q.question_text, '')) = ''
      AND btrim(COALESCE(q.image_url, '')) = ''
  ) THEN
    RAISE EXCEPTION 'quiz has incomplete questions' USING ERRCODE = 'P0001';
  END IF;

  IF NEW.host_id IS NOT NULL THEN
    PERFORM private.consume_hosting_quota(NEW.host_id);
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.rooms_before_insert() FROM PUBLIC, anon, authenticated;

-- 5. Question counts for the catalog -------------------------------------------
-- Public quizzes for everyone; signed-in users also get their own quizzes,
-- and admins all of them.
CREATE OR REPLACE FUNCTION public.quiz_question_counts()
RETURNS TABLE(quiz_id uuid, question_count integer)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT z.id, count(q.id)::int
  FROM public.quizzes AS z
  LEFT JOIN public.questions AS q ON q.quiz_id = z.id
  WHERE z.is_public
     OR (auth.uid() IS NOT NULL AND z.user_id = auth.uid())
     OR public.is_admin()
  GROUP BY z.id;
$$;

REVOKE ALL ON FUNCTION public.quiz_question_counts() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.quiz_question_counts() TO anon, authenticated, service_role;

NOTIFY pgrst, 'reload schema';
