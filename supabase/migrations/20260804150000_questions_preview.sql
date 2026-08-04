-- Migration for Answer-Free Quiz Preview
-- Excludes correct_index and explanation to prevent exposing answers during preview

CREATE OR REPLACE VIEW public.questions_preview AS
  SELECT
    id,
    quiz_id,
    question_text,
    options,
    time_limit_seconds,
    order_index,
    question_type,
    difficulty,
    subcategory,
    tags
  FROM public.questions;

GRANT SELECT ON public.questions_preview TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.get_quiz_preview(p_quiz_id uuid)
RETURNS TABLE(
  id uuid,
  quiz_id uuid,
  question_text text,
  options jsonb,
  time_limit_seconds integer,
  order_index integer,
  question_type text,
  difficulty text,
  subcategory text,
  tags text[]
)
LANGUAGE sql STABLE SET search_path TO 'public'
AS $$
  SELECT
    id,
    quiz_id,
    question_text,
    options,
    time_limit_seconds,
    order_index,
    question_type,
    difficulty,
    subcategory,
    tags
  FROM public.questions
  WHERE quiz_id = p_quiz_id
  ORDER BY order_index;
$$;

GRANT EXECUTE ON FUNCTION public.get_quiz_preview(uuid) TO anon, authenticated;
