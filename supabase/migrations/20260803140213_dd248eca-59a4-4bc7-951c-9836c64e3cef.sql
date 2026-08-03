DROP VIEW IF EXISTS public.questions_public;

CREATE OR REPLACE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE (
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND r.created_at > now() - interval '12 hours'
  ORDER BY q.order_index;
$$;

REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM public;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;