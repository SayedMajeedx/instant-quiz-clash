-- Clean, versioned room starter. Uses only columns present in the live rooms table.
DROP FUNCTION IF EXISTS public.start_room_v2(uuid);

CREATE FUNCTION public.start_room_v2(p_room_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room public.rooms;
  v_starts_at timestamptz := now() + interval '3 seconds';
BEGIN
  IF auth.uid() IS NULL OR NOT EXISTS (
    SELECT 1
    FROM public.rooms r
    JOIN public.quizzes q ON q.id = r.quiz_id
    WHERE r.id = p_room_id AND q.user_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'forbidden';
  END IF;

  UPDATE public.rooms
  SET status = 'active',
      cursor_index = 0,
      cursor_phase = 'question',
      started_at = v_starts_at,
      phase_started_at = v_starts_at
  WHERE id = p_room_id
  RETURNING * INTO v_room;

  IF v_room.id IS NULL THEN RAISE EXCEPTION 'room not found'; END IF;
  RETURN to_jsonb(v_room);
END;
$$;

REVOKE ALL ON FUNCTION public.start_room_v2(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.start_room_v2(uuid) TO authenticated, service_role;
