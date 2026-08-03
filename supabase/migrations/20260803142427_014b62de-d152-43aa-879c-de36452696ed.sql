CREATE TABLE public.game_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  host_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id uuid,
  room_id uuid,
  quiz_title text NOT NULL DEFAULT 'Untitled quiz',
  room_code text NOT NULL DEFAULT '',
  team_count integer NOT NULL DEFAULT 0,
  question_count integer NOT NULL DEFAULT 0,
  player_count integer NOT NULL DEFAULT 0,
  played_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX game_results_room_id_key ON public.game_results(room_id) WHERE room_id IS NOT NULL;
CREATE INDEX game_results_host_idx ON public.game_results(host_id, played_at DESC);

GRANT SELECT, DELETE ON public.game_results TO authenticated;
GRANT ALL ON public.game_results TO service_role;
ALTER TABLE public.game_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY game_results_owner_select ON public.game_results FOR SELECT TO authenticated USING (auth.uid() = host_id);
CREATE POLICY game_results_owner_delete ON public.game_results FOR DELETE TO authenticated USING (auth.uid() = host_id);

CREATE TABLE public.game_player_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id uuid NOT NULL REFERENCES public.game_results(id) ON DELETE CASCADE,
  nickname text NOT NULL,
  avatar_color text NOT NULL DEFAULT '#a855f7',
  team_index integer,
  rank integer NOT NULL DEFAULT 0,
  score integer NOT NULL DEFAULT 0,
  correct_count integer NOT NULL DEFAULT 0,
  answered_count integer NOT NULL DEFAULT 0,
  best_streak integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX game_player_results_game_idx ON public.game_player_results(game_id, rank);

GRANT SELECT, DELETE ON public.game_player_results TO authenticated;
GRANT ALL ON public.game_player_results TO service_role;
ALTER TABLE public.game_player_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY game_player_results_owner_select ON public.game_player_results FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.game_results g WHERE g.id = game_id AND g.host_id = auth.uid()));
CREATE POLICY game_player_results_owner_delete ON public.game_player_results FOR DELETE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.game_results g WHERE g.id = game_id AND g.host_id = auth.uid()));

CREATE OR REPLACE FUNCTION public.archive_room(p_room_id uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  v_room public.rooms;
  v_quiz public.quizzes;
  v_game_id uuid;
  v_questions integer;
BEGIN
  SELECT * INTO v_room FROM public.rooms WHERE id = p_room_id;
  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_room.quiz_id;
  IF v_quiz.id IS NULL OR v_quiz.user_id <> auth.uid() THEN RAISE EXCEPTION 'forbidden'; END IF;

  SELECT id INTO v_game_id FROM public.game_results WHERE room_id = p_room_id;
  IF v_game_id IS NOT NULL THEN RETURN v_game_id; END IF;

  SELECT count(*) INTO v_questions FROM public.questions WHERE quiz_id = v_room.quiz_id;

  INSERT INTO public.game_results (host_id, quiz_id, room_id, quiz_title, room_code, team_count, question_count, player_count, played_at)
  VALUES (
    v_quiz.user_id, v_room.quiz_id, v_room.id, v_quiz.title, v_room.code, v_room.team_count, v_questions,
    (SELECT count(*) FROM public.players WHERE room_id = v_room.id),
    COALESCE(v_room.started_at, v_room.created_at)
  )
  RETURNING id INTO v_game_id;

  INSERT INTO public.game_player_results (game_id, nickname, avatar_color, team_index, rank, score, correct_count, answered_count, best_streak)
  SELECT v_game_id, s.nickname, s.avatar_color, s.team_index,
         row_number() OVER (ORDER BY s.score DESC, s.nickname)::int,
         s.score, s.correct_count, s.answered_count, s.best_streak
  FROM (
    SELECT p.nickname, p.avatar_color, p.team_index,
           COALESCE(sum(a.points_awarded), 0)::int AS score,
           COALESCE(count(a.id) FILTER (WHERE a.is_correct), 0)::int AS correct_count,
           COALESCE(count(a.id), 0)::int AS answered_count,
           COALESCE(max(a.streak_bonus) / 100 + 1, 0)::int AS best_streak
    FROM public.players p
    LEFT JOIN public.answers a ON a.player_id = p.id
    WHERE p.room_id = v_room.id
    GROUP BY p.id, p.nickname, p.avatar_color, p.team_index
  ) s;

  RETURN v_game_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.archive_room(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO authenticated;