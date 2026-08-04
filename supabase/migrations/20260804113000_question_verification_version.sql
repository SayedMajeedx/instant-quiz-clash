-- 1. Add verification and version tracking columns to questions
ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS is_verified boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS version integer NOT NULL DEFAULT 1;

-- 2. Update room_questions RPC to include verification and version fields
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
  tags text[],
  source text,
  external_id text,
  is_verified boolean,
  version integer
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $$
  SELECT q.id, q.quiz_id, q.question_text, q.options, q.time_limit_seconds, q.order_index, q.image_url, q.question_type, q.explanation, q.difficulty, q.subcategory, q.tags, q.source, q.external_id, q.is_verified, q.version
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
  tags text[],
  source text,
  external_id text,
  is_verified boolean,
  version integer
)
LANGUAGE sql STABLE SET search_path TO 'public'
AS $$ SELECT * FROM private.room_questions(p_room_id); $$;

REVOKE ALL ON FUNCTION public.room_questions(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.room_questions(uuid) TO anon, authenticated;
