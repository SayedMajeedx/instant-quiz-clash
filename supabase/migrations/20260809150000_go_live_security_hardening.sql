-- QuizClash go-live hardening.
-- Safe to paste into the Supabase/Lovable SQL editor as one migration.

-- 1. Live rooms must not be enumerable through the REST table endpoint.
DROP POLICY IF EXISTS rooms_live_select ON public.rooms;
DROP POLICY IF EXISTS rooms_public_select ON public.rooms;
REVOKE SELECT ON TABLE public.rooms FROM anon;

-- Exact-code lookup preserves the join/play flow without allowing collection reads.
CREATE OR REPLACE FUNCTION public.get_room_by_code(p_code text)
RETURNS SETOF public.rooms
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT r.*
  FROM public.rooms AS r
  WHERE r.code = upper(btrim(p_code))
    AND length(btrim(p_code)) = 6
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_room_by_code(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_room_by_code(text) TO anon, authenticated, service_role;

-- Bound anonymous room-join pressure. This is deliberately generous enough for
-- normal parties while preventing one room from being filled instantly by a bot.
CREATE TABLE IF NOT EXISTS public.room_join_rate_windows (
  room_id uuid NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  window_start timestamptz NOT NULL,
  attempts integer NOT NULL DEFAULT 1,
  PRIMARY KEY (room_id, window_start)
);
ALTER TABLE public.room_join_rate_windows ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.room_join_rate_windows FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.room_join_rate_windows TO service_role;

CREATE OR REPLACE FUNCTION public.join_room(
  p_code text,
  p_nickname text,
  p_avatar_color text DEFAULT '#a855f7'
)
RETURNS public.players
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_room_id uuid;
  v_attempts integer;
  v_window timestamptz := date_trunc('minute', now());
BEGIN
  SELECT r.id INTO v_room_id
  FROM public.rooms AS r
  WHERE r.code = upper(btrim(p_code));

  IF v_room_id IS NULL THEN
    RAISE EXCEPTION 'room not found';
  END IF;

  INSERT INTO public.room_join_rate_windows (room_id, window_start, attempts)
  VALUES (v_room_id, v_window, 1)
  ON CONFLICT (room_id, window_start)
  DO UPDATE SET attempts = public.room_join_rate_windows.attempts + 1
  RETURNING attempts INTO v_attempts;

  IF v_attempts > 60 THEN
    RAISE EXCEPTION 'too many join attempts' USING ERRCODE = 'P0001';
  END IF;

  DELETE FROM public.room_join_rate_windows
  WHERE window_start < now() - interval '1 day';

  RETURN private.join_room(p_code, p_nickname, p_avatar_color);
END;
$$;

REVOKE ALL ON FUNCTION public.join_room(text, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.join_room(text, text, text) TO anon, authenticated, service_role;

-- 2. One shared AI usage per registered user per UTC calendar month.
CREATE TABLE IF NOT EXISTS public.ai_monthly_usage (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  month_start date NOT NULL,
  consumed_at timestamptz NOT NULL DEFAULT now(),
  feature text NOT NULL CHECK (feature IN ('text_import', 'topic_generation')),
  PRIMARY KEY (user_id, month_start)
);

ALTER TABLE public.ai_monthly_usage ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.ai_monthly_usage FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.ai_monthly_usage TO service_role;

CREATE OR REPLACE FUNCTION public.claim_monthly_ai_usage(p_feature text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_inserted integer;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;
  IF p_feature NOT IN ('text_import', 'topic_generation') THEN
    RAISE EXCEPTION 'Invalid AI feature' USING ERRCODE = '22023';
  END IF;

  INSERT INTO public.ai_monthly_usage (user_id, month_start, feature)
  VALUES (auth.uid(), date_trunc('month', timezone('UTC', now()))::date, p_feature)
  ON CONFLICT (user_id, month_start) DO NOTHING;

  GET DIAGNOSTICS v_inserted = ROW_COUNT;
  RETURN v_inserted = 1;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_monthly_ai_usage(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_monthly_ai_usage(text) TO authenticated, service_role;

-- Defense in depth for quiz image uploads; the UI applies the same 5 MB cap.
UPDATE storage.buckets
SET file_size_limit = 5242880,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
WHERE id = 'question-images';

-- 3. Never accept an authorization role from user-controlled signup metadata.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, role)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'display_name',
      NEW.raw_user_meta_data->>'full_name',
      split_part(NEW.email, '@', 1)
    ),
    'user'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- Preserve evidence before removing any historical, unapproved elevated roles.
CREATE TABLE IF NOT EXISTS public.security_privileged_role_audit (
  user_id uuid PRIMARY KEY,
  email text,
  previous_role text NOT NULL,
  captured_at timestamptz NOT NULL DEFAULT now(),
  reason text NOT NULL
);
ALTER TABLE public.security_privileged_role_audit ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.security_privileged_role_audit FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT ON TABLE public.security_privileged_role_audit TO service_role;

INSERT INTO public.security_privileged_role_audit (user_id, email, previous_role, reason)
SELECT p.id, u.email, p.role, 'Pre-launch remediation of legacy metadata-based role assignment'
FROM public.profiles AS p
JOIN auth.users AS u ON u.id = p.id
WHERE COALESCE(p.role, 'user') <> 'user'
  AND lower(COALESCE(u.email, '')) <> 'ifatshady@gmail.com'
ON CONFLICT (user_id) DO NOTHING;

UPDATE public.profiles AS p
SET role = 'user'
FROM auth.users AS u
WHERE u.id = p.id
  AND COALESCE(p.role, 'user') <> 'user'
  AND lower(COALESCE(u.email, '')) <> 'ifatshady@gmail.com';

NOTIFY pgrst, 'reload schema';
