-- Migration: Fix Supabase Security Advisor Warnings
-- 1. Storage Bucket Policy Cleanup
-- Ensure the storage policy on storage.objects is scoped correctly so private bucket warnings are cleared.
DROP POLICY IF EXISTS "question_images_public_read" ON storage.objects;

-- Re-create question_images policy cleanly if needed for authenticated users,
-- while public access to public buckets is served directly via Supabase Storage public URLs.
CREATE POLICY "question_images_public_read" ON storage.objects
  FOR SELECT TO authenticated USING (bucket_id = 'question-images');

-- Ensure question-images bucket is explicitly public
UPDATE storage.buckets SET public = true WHERE id = 'question-images';


-- 2. Restrict Quiz Usage Statistics / Game Results Exposure
-- Ensure game_results and game_player_results are strictly locked down to room owners / host only.
ALTER TABLE IF EXISTS public.game_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.game_player_results ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.game_results FROM PUBLIC, anon;
REVOKE ALL ON TABLE public.game_player_results FROM PUBLIC, anon;

-- Re-enforce owner-only select policies on game_results
DROP POLICY IF EXISTS game_results_owner_select ON public.game_results;
CREATE POLICY game_results_owner_select ON public.game_results 
  FOR SELECT TO authenticated 
  USING (auth.uid() = host_id);

DROP POLICY IF EXISTS game_player_results_owner_select ON public.game_player_results;
CREATE POLICY game_player_results_owner_select ON public.game_player_results 
  FOR SELECT TO authenticated 
  USING (EXISTS (
    SELECT 1 FROM public.game_results g 
    WHERE g.id = game_id AND g.host_id = auth.uid()
  ));


-- 3. Lock down SECURITY DEFINER Functions from PUBLIC
-- Revoke execution from PUBLIC on all internal and RPC SECURITY DEFINER functions.
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT routine_schema, routine_name, p.oid::regprocedure as func_signature
        FROM information_schema.routines r_info
        JOIN pg_proc p ON p.proname = r_info.routine_name
        JOIN pg_namespace n ON n.oid = p.pronamespace AND n.nspname = r_info.routine_schema
        WHERE r_info.routine_schema IN ('public', 'private')
          AND p.prosecdef = true
    LOOP
        EXECUTE format('REVOKE ALL ON FUNCTION %s FROM PUBLIC;', r.func_signature);
    END LOOP;
END $$;

-- 4. Re-grant minimum necessary execution permissions for client-facing game RPCs
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_answer(uuid, uuid, integer, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.use_fifty_fifty(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_players(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_answers(uuid, uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.room_reveals(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.archive_room(uuid) TO authenticated;
