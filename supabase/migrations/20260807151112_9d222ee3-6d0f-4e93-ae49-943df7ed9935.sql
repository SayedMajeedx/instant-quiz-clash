CREATE TABLE public.quiz_play_stats (
  source_quiz_id text PRIMARY KEY,
  play_count integer NOT NULL DEFAULT 0,
  last_played_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.quiz_play_stats TO anon;
GRANT SELECT ON public.quiz_play_stats TO authenticated;
GRANT ALL ON public.quiz_play_stats TO service_role;

ALTER TABLE public.quiz_play_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY quiz_play_stats_public_select ON public.quiz_play_stats
  FOR SELECT TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION public.record_quiz_play(p_source_id text)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id text := nullif(btrim(p_source_id), '');
  v_count integer;
BEGIN
  IF v_id IS NULL OR length(v_id) > 200 THEN
    RETURN 0;
  END IF;

  INSERT INTO public.quiz_play_stats (source_quiz_id, play_count, last_played_at)
  VALUES (v_id, 1, now())
  ON CONFLICT (source_quiz_id) DO UPDATE
    SET play_count = public.quiz_play_stats.play_count + 1,
        last_played_at = now()
  RETURNING play_count INTO v_count;

  RETURN v_count;
END;
$$;

REVOKE ALL ON FUNCTION public.record_quiz_play(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.record_quiz_play(text) TO anon, authenticated;