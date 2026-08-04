-- 1. Add rich question metadata columns
ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS explanation text,
  ADD COLUMN IF NOT EXISTS difficulty text NOT NULL DEFAULT 'medium',
  ADD COLUMN IF NOT EXISTS subcategory text,
  ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}'::text[];

-- 2. Update room_questions RPC to expose metadata
DROP FUNCTION IF EXISTS public.room_questions(uuid);
DROP FUNCTION IF EXISTS private.room_questions(uuid);

CREATE FUNCTION private.room_questions(p_room_id uuid)
RETURNS TABLE(
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer,
  image_url text,
  question_type text,
  explanation text,
  difficulty text,
  subcategory text,
  tags text[]
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index, q.image_url, q.question_type, q.explanation, q.difficulty, q.subcategory, q.tags
  FROM public.questions q
  JOIN public.rooms r ON r.quiz_id = q.quiz_id
  WHERE r.id = p_room_id AND private.room_is_live(r.id)
  ORDER BY q.order_index;
$$;

CREATE FUNCTION public.room_questions(p_room_id uuid)
RETURNS TABLE(
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer,
  image_url text,
  question_type text,
  explanation text,
  difficulty text,
  subcategory text,
  tags text[]
)
LANGUAGE sql STABLE SET search_path TO 'public'
AS $$ SELECT * FROM private.room_questions(p_room_id); $$;

REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
