-- The previous policy called public.is_admin(), which signed-out visitors
-- cannot execute (permission denied), so the whole SELECT failed for them and
-- the browse "Most Played" sort silently lost its data. private.is_admin(uuid)
-- is callable by anon and returns false when there is no session, matching the
-- pattern the other catalog policies already use.
DROP POLICY IF EXISTS "quiz_play_stats_public_select" ON public.quiz_play_stats;

CREATE POLICY "quiz_play_stats_public_select" ON public.quiz_play_stats
FOR SELECT TO anon, authenticated
USING (
  private.is_admin(auth.uid())
  OR EXISTS (
    SELECT 1
    FROM public.quizzes q
    WHERE q.id::text = quiz_play_stats.source_quiz_id
      AND q.is_public IS TRUE
  )
);