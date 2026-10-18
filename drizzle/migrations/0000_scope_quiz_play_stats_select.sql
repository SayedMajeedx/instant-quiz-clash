-- quiz_play_stats: the old policy was USING (true), so anyone could read every
-- row, including play counts for quizzes that were never published.
-- Admins keep full read (the analytics page needs counts for private quizzes);
-- everyone else only sees counts for quizzes published in the public catalog,
-- which is exactly what the browse "Most Played" sort uses.
DROP POLICY IF EXISTS "quiz_play_stats_public_select" ON public.quiz_play_stats;

CREATE POLICY "quiz_play_stats_public_select" ON public.quiz_play_stats
FOR SELECT TO anon, authenticated
USING (
  public.is_admin()
  OR EXISTS (
    SELECT 1
    FROM public.quizzes q
    WHERE q.id::text = quiz_play_stats.source_quiz_id
      AND q.is_public IS TRUE
  )
);