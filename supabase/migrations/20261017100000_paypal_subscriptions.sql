-- =========================================================================
-- PayPal subscriptions replace Payhip.
--
-- * user_subscriptions rows are keyed by (provider, provider_subscription_id)
--   and are only ever written by the PayPal edge functions (service role),
--   which read the subscription back from the PayPal API before writing.
-- * Cancelled subscriptions keep access until the end of the paid period.
-- * The daily free-quiz quota is enforced by the database when a room is
--   created (see 20261017110000_restore_game_security.sql), not by the client.
-- =========================================================================

-- 1. Tables (no-ops when the previous subscription migration already ran) --
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  customer_email text,
  payhip_subscription_id text,
  payhip_customer_id text,
  plan_type text NOT NULL DEFAULT 'monthly',
  status text NOT NULL DEFAULT 'active',
  started_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.daily_hosted_quiz_usage (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  usage_date date NOT NULL DEFAULT ((now() AT TIME ZONE 'UTC')::date),
  hosted_count integer NOT NULL DEFAULT 1,
  last_hosted_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, usage_date)
);

-- Rows that exist before this migration came from Payhip. The column default
-- is switched to 'paypal' only after the backfill.
ALTER TABLE public.user_subscriptions
  ADD COLUMN IF NOT EXISTS provider text NOT NULL DEFAULT 'payhip',
  ADD COLUMN IF NOT EXISTS provider_subscription_id text,
  ADD COLUMN IF NOT EXISTS provider_plan_id text,
  ADD COLUMN IF NOT EXISTS provider_status text;
ALTER TABLE public.user_subscriptions ALTER COLUMN provider SET DEFAULT 'paypal';

UPDATE public.user_subscriptions
SET provider_subscription_id = payhip_subscription_id
WHERE provider = 'payhip'
  AND provider_subscription_id IS NULL
  AND payhip_subscription_id IS NOT NULL;

ALTER TABLE public.user_subscriptions DROP CONSTRAINT IF EXISTS user_subscriptions_plan_type_check;
ALTER TABLE public.user_subscriptions ADD CONSTRAINT user_subscriptions_plan_type_check
  CHECK (plan_type IN ('monthly', 'yearly', 'lifetime', 'custom', 'admin'));
ALTER TABLE public.user_subscriptions DROP CONSTRAINT IF EXISTS user_subscriptions_status_check;
ALTER TABLE public.user_subscriptions ADD CONSTRAINT user_subscriptions_status_check
  CHECK (status IN ('pending', 'active', 'cancelled', 'expired', 'past_due', 'trial'));
ALTER TABLE public.user_subscriptions DROP CONSTRAINT IF EXISTS user_subscriptions_provider_check;
ALTER TABLE public.user_subscriptions ADD CONSTRAINT user_subscriptions_provider_check
  CHECK (provider IN ('paypal', 'payhip', 'manual'));

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'user_subscriptions_provider_subscription_key'
  ) THEN
    ALTER TABLE public.user_subscriptions
      ADD CONSTRAINT user_subscriptions_provider_subscription_key
      UNIQUE (provider, provider_subscription_id);
  END IF;
END;
$$;

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_status
  ON public.user_subscriptions(user_id, status);

-- 2. Access: users read their own rows; only the service role writes. -------
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_hosted_quiz_usage ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.user_subscriptions FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.daily_hosted_quiz_usage FROM PUBLIC, anon, authenticated;
GRANT SELECT ON TABLE public.user_subscriptions TO authenticated;
GRANT SELECT ON TABLE public.daily_hosted_quiz_usage TO authenticated;
GRANT ALL ON TABLE public.user_subscriptions TO service_role;
GRANT ALL ON TABLE public.daily_hosted_quiz_usage TO service_role;

DROP POLICY IF EXISTS "user_subscriptions_user_select" ON public.user_subscriptions;
CREATE POLICY "user_subscriptions_user_select" ON public.user_subscriptions
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "daily_hosted_quiz_user_select" ON public.daily_hosted_quiz_usage;
CREATE POLICY "daily_hosted_quiz_user_select" ON public.daily_hosted_quiz_usage
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- 3. Helpers ---------------------------------------------------------------
CREATE SCHEMA IF NOT EXISTS private;

-- The subscription that currently grants access, if any. A cancelled
-- subscription keeps access until expires_at; an active one with no
-- expires_at is open-ended (manual / lifetime grants).
CREATE OR REPLACE FUNCTION private.current_subscription(p_user_id uuid)
RETURNS public.user_subscriptions
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT s.*
  FROM public.user_subscriptions AS s
  WHERE s.user_id = p_user_id
    AND (
      (s.status = 'active' AND (s.expires_at IS NULL OR s.expires_at > now()))
      OR (s.status = 'cancelled' AND s.expires_at > now())
    )
  ORDER BY s.expires_at DESC NULLS FIRST, s.created_at DESC
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION private.current_subscription(uuid) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION private.is_unlimited_host(p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id = p_user_id AND role = 'admin')
      OR (private.current_subscription(p_user_id)).id IS NOT NULL;
$$;

REVOKE ALL ON FUNCTION private.is_unlimited_host(uuid) FROM PUBLIC, anon, authenticated;

-- Atomically consumes one hosted quiz for a free user. Raising rolls back the
-- increment together with the statement that called it (the room insert).
CREATE OR REPLACE FUNCTION private.consume_hosting_quota(p_user_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_today date := (now() AT TIME ZONE 'UTC')::date;
  v_count integer;
BEGIN
  IF p_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;
  IF private.is_unlimited_host(p_user_id) THEN
    RETURN;
  END IF;

  INSERT INTO public.daily_hosted_quiz_usage (user_id, usage_date, hosted_count, last_hosted_at)
  VALUES (p_user_id, v_today, 1, now())
  ON CONFLICT (user_id, usage_date)
  DO UPDATE SET hosted_count = public.daily_hosted_quiz_usage.hosted_count + 1,
                last_hosted_at = now()
  RETURNING hosted_count INTO v_count;

  IF v_count > 1 THEN
    RAISE EXCEPTION 'daily_limit_reached'
      USING ERRCODE = 'P0001', HINT = 'Upgrade to Pro for unlimited hosting.';
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION private.consume_hosting_quota(uuid) FROM PUBLIC, anon, authenticated;

-- 4. Eligibility shown in the UI. The quota itself is enforced on insert. ---
CREATE OR REPLACE FUNCTION public.check_user_hosting_eligibility()
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_sub public.user_subscriptions;
  v_today date := (now() AT TIME ZONE 'UTC')::date;
  v_today_count integer;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN jsonb_build_object(
      'allowed', false, 'reason', 'auth_required',
      'is_subscribed', false, 'plan', 'free', 'quota_remaining', 0
    );
  END IF;

  IF EXISTS (SELECT 1 FROM public.profiles WHERE id = v_user_id AND role = 'admin') THEN
    RETURN jsonb_build_object(
      'allowed', true, 'is_subscribed', true, 'plan', 'admin', 'quota_remaining', null
    );
  END IF;

  v_sub := private.current_subscription(v_user_id);
  IF v_sub.id IS NOT NULL THEN
    RETURN jsonb_build_object(
      'allowed', true,
      'is_subscribed', true,
      'plan', v_sub.plan_type,
      'status', v_sub.status,
      'provider', v_sub.provider,
      'expires_at', v_sub.expires_at,
      'quota_remaining', null
    );
  END IF;

  SELECT hosted_count INTO v_today_count
  FROM public.daily_hosted_quiz_usage
  WHERE user_id = v_user_id AND usage_date = v_today;

  IF COALESCE(v_today_count, 0) >= 1 THEN
    RETURN jsonb_build_object(
      'allowed', false, 'reason', 'daily_limit_reached', 'is_subscribed', false,
      'plan', 'free', 'quota_remaining', 0, 'usage_date', v_today
    );
  END IF;

  RETURN jsonb_build_object(
    'allowed', true, 'is_subscribed', false, 'plan', 'free',
    'quota_remaining', 1, 'usage_date', v_today
  );
END;
$$;

REVOKE ALL ON FUNCTION public.check_user_hosting_eligibility() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.check_user_hosting_eligibility() TO authenticated, service_role;

-- The client no longer claims quota itself; room creation does.
DROP FUNCTION IF EXISTS public.claim_daily_hosted_quiz();

NOTIFY pgrst, 'reload schema';
