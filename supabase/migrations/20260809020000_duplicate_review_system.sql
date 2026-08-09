CREATE TABLE IF NOT EXISTS public.quiz_duplicate_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fingerprint text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'dismissed', 'resolved')),
  confidence numeric NOT NULL CHECK (confidence BETWEEN 0 AND 1),
  verdict text NOT NULL CHECK (verdict IN ('exact', 'equivalent', 'related')),
  shared_fact text NOT NULL DEFAULT '',
  rationale text NOT NULL DEFAULT '',
  signals jsonb NOT NULL DEFAULT '{}'::jsonb,
  questions jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  reviewed_at timestamptz,
  reviewed_by uuid REFERENCES auth.users(id),
  kept_question_id uuid,
  deleted_question_ids uuid[] NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS quiz_duplicate_reviews_status_confidence_idx
  ON public.quiz_duplicate_reviews (status, confidence DESC);

ALTER TABLE public.quiz_duplicate_reviews ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.quiz_duplicate_reviews FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.quiz_duplicate_reviews TO service_role;

COMMENT ON TABLE public.quiz_duplicate_reviews IS
  'Persistent, auditable human-review queue for globally duplicated quiz questions.';
