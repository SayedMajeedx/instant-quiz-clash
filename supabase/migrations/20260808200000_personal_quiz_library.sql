-- Separate a user's personal quiz shelf from catalog/admin-owned content.
ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS personal_library boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS personal_library_origin text;

UPDATE public.quizzes AS quiz
SET personal_library = true,
    personal_library_origin = COALESCE(quiz.personal_library_origin, 'played')
WHERE COALESCE(quiz.quiz_kind, 'standard') <> 'custom_generated'
  AND EXISTS (
    SELECT 1
    FROM public.game_results AS game
    WHERE game.quiz_id = quiz.id AND game.host_id = quiz.user_id
  );

CREATE INDEX IF NOT EXISTS quizzes_personal_library_idx
  ON public.quizzes (user_id, personal_library, created_at DESC);

CREATE OR REPLACE FUNCTION public.mark_played_quiz_personal()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  UPDATE public.quizzes
  SET personal_library = true,
      personal_library_origin = COALESCE(personal_library_origin, 'played')
  WHERE id = NEW.quiz_id
    AND user_id = NEW.host_id
    AND COALESCE(quiz_kind, 'standard') <> 'custom_generated';
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS game_results_mark_personal_quiz ON public.game_results;
CREATE TRIGGER game_results_mark_personal_quiz
AFTER INSERT ON public.game_results
FOR EACH ROW EXECUTE FUNCTION public.mark_played_quiz_personal();

NOTIFY pgrst, 'reload schema';
