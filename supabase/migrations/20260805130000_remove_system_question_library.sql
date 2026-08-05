-- Remove the bundled system quiz library while preserving user-owned quizzes.
BEGIN;

DELETE FROM public.questions
WHERE quiz_id IN (
  SELECT id
  FROM public.quizzes
  WHERE user_id IS NULL
);

DELETE FROM public.quizzes
WHERE user_id IS NULL;

COMMIT;
