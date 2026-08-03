-- 1. Status-aware "live" checks (replace flat 12h time window)
CREATE OR REPLACE FUNCTION public.room_is_live(p_room_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.id = p_room_id
      AND r.created_at > now() - CASE WHEN r.status = 'ended' THEN interval '1 hour' ELSE interval '12 hours' END
  );
$$;

CREATE OR REPLACE FUNCTION public.quiz_has_live_room(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.quiz_id = p_quiz_id
      AND r.created_at > now() - CASE WHEN r.status = 'ended' THEN interval '1 hour' ELSE interval '12 hours' END
  );
$$;

CREATE OR REPLACE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(id uuid, quiz_id uuid, question_text text, options jsonb, time_limit_seconds integer, order_index integer)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND public.room_is_live(r.id)
  ORDER BY q.order_index;
$$;

-- 2. rooms: status-aware public read
DROP POLICY IF EXISTS rooms_live_select ON public.rooms;
CREATE POLICY rooms_live_select ON public.rooms FOR SELECT TO anon, authenticated
USING (public.room_is_live(id) OR public.is_quiz_owner(quiz_id));

-- 3. players / answers: no more anonymous table reads
DROP POLICY IF EXISTS players_live_select ON public.players;
CREATE POLICY players_owner_select ON public.players FOR SELECT TO authenticated
USING (public.room_owner(room_id));

DROP POLICY IF EXISTS answers_live_select ON public.answers;
CREATE POLICY answers_owner_select ON public.answers FOR SELECT TO authenticated
USING (public.room_owner(room_id));

REVOKE SELECT ON public.players FROM anon;
REVOKE SELECT ON public.answers FROM anon;

-- 4. Participant-scoped readers: caller must present their own player id
CREATE OR REPLACE FUNCTION public.room_players(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, nickname text, avatar_color text, joined_at timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT p.id, p.room_id, p.nickname, p.avatar_color, p.joined_at
  FROM public.players p
  WHERE p.room_id = p_room_id
    AND public.room_is_live(p_room_id)
    AND EXISTS (SELECT 1 FROM public.players me WHERE me.id = p_player_id AND me.room_id = p_room_id)
  ORDER BY p.joined_at;
$$;

CREATE OR REPLACE FUNCTION public.room_answers(p_room_id uuid, p_player_id uuid)
RETURNS TABLE(id uuid, room_id uuid, question_id uuid, player_id uuid, choice_index integer,
              answered_at timestamptz, is_correct boolean, points_awarded integer)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT a.id, a.room_id, a.question_id, a.player_id,
         CASE WHEN a.player_id = p_player_id THEN a.choice_index ELSE -1 END,
         a.answered_at, a.is_correct, a.points_awarded
  FROM public.answers a
  WHERE a.room_id = p_room_id
    AND public.room_is_live(p_room_id)
    AND EXISTS (SELECT 1 FROM public.players me WHERE me.id = p_player_id AND me.room_id = p_room_id);
$$;

-- 5. Lock down SECURITY DEFINER execution: internal helpers are not callable via the API
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.is_quiz_owner(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_is_live(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.room_owner(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.quiz_has_live_room(uuid) FROM PUBLIC, anon, authenticated;

-- Only the intended game RPCs stay callable, and only by real API roles
REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_reveals(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_players(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_answers(uuid, uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated;