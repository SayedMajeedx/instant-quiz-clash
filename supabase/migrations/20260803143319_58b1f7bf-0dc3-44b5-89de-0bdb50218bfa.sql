-- 1. Harden the private policy-helper functions (explicit, minimal, auth.uid()-scoped)

CREATE OR REPLACE FUNCTION private.is_quiz_owner(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp
AS $$
  SELECT auth.uid() IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.quizzes q
    WHERE q.id = p_quiz_id AND q.user_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION private.room_owner(p_room_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp
AS $$
  SELECT auth.uid() IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.rooms r
    JOIN public.quizzes q ON q.id = r.quiz_id
    WHERE r.id = p_room_id AND q.user_id = auth.uid()
  );
$$;

-- A room is "live" only while it is not ended (max 12h after creation),
-- or for 1 hour after it ended so the podium can be shown.
CREATE OR REPLACE FUNCTION private.room_is_live(p_room_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.id = p_room_id
      AND CASE
            WHEN r.status = 'ended' THEN r.created_at > now() - interval '1 hour'
            ELSE r.created_at > now() - interval '12 hours'
          END
  );
$$;

CREATE OR REPLACE FUNCTION private.quiz_has_live_room(p_quiz_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.rooms r
    WHERE r.quiz_id = p_quiz_id
      AND CASE
            WHEN r.status = 'ended' THEN r.created_at > now() - interval '1 hour'
            ELSE r.created_at > now() - interval '12 hours'
          END
  );
$$;

COMMENT ON FUNCTION private.is_quiz_owner(uuid) IS 'RLS helper: true only when auth.uid() owns the quiz.';
COMMENT ON FUNCTION private.room_owner(uuid) IS 'RLS helper: true only when auth.uid() owns the quiz behind the room.';
COMMENT ON FUNCTION private.room_is_live(uuid) IS 'RLS helper: true only while a room is joinable/playable, or 1h after it ended.';
COMMENT ON FUNCTION private.quiz_has_live_room(uuid) IS 'RLS helper: true only while the quiz has a live room.';

-- These are RLS-policy helpers evaluated as the querying role, so anon/authenticated
-- must retain EXECUTE, but PUBLIC and the private schema stay unreachable via the API.
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION private.is_quiz_owner(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_owner(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.room_is_live(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION private.quiz_has_live_room(uuid) FROM PUBLIC;
GRANT USAGE ON SCHEMA private TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.is_quiz_owner(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_owner(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.room_is_live(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION private.quiz_has_live_room(uuid) TO anon, authenticated;

-- 2. Table privileges: least privilege, matching the RLS policies that actually exist.

-- players / answers: never written directly; only the SECURITY DEFINER RPCs write them.
REVOKE ALL ON public.players FROM anon, authenticated;
REVOKE ALL ON public.answers FROM anon, authenticated;
GRANT SELECT, DELETE ON public.players TO authenticated;   -- host-scoped policies
GRANT SELECT ON public.answers TO authenticated;           -- host-scoped policy
GRANT ALL ON public.players TO service_role;
GRANT ALL ON public.answers TO service_role;

-- rooms / quizzes / questions: owners manage, anon reads only live content.
REVOKE ALL ON public.rooms FROM anon, authenticated;
REVOKE ALL ON public.quizzes FROM anon, authenticated;
REVOKE ALL ON public.questions FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.rooms TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.quizzes TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.questions TO authenticated;
GRANT SELECT ON public.rooms TO anon;
GRANT SELECT ON public.quizzes TO anon;
GRANT ALL ON public.rooms TO service_role;
GRANT ALL ON public.quizzes TO service_role;
GRANT ALL ON public.questions TO service_role;

-- profiles + archived game history: owner-only, never anon.
REVOKE ALL ON public.profiles FROM anon, authenticated;
REVOKE ALL ON public.game_results FROM anon, authenticated;
REVOKE ALL ON public.game_player_results FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, DELETE ON public.game_results TO authenticated;
GRANT SELECT, DELETE ON public.game_player_results TO authenticated;
GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.game_results TO service_role;
GRANT ALL ON public.game_player_results TO service_role;

-- 3. Function privileges: no blanket PUBLIC execute; only the roles that need each RPC.

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.archive_room(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO authenticated;

REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_answer(uuid, uuid, integer, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.use_fifty_fifty(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_players(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_answers(uuid, uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.room_reveals(uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated;