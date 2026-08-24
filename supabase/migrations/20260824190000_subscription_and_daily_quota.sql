-- =========================================================================
-- Subscriptions & Daily Quota Tables & Functions
-- =========================================================================

-- 1. Subscriptions table
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  customer_email text,
  payhip_subscription_id text,
  payhip_customer_id text,
  plan_type text NOT NULL DEFAULT 'monthly' CHECK (plan_type IN ('monthly', 'yearly', 'lifetime', 'custom', 'admin')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'past_due', 'trial')),
  started_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_status ON public.user_subscriptions(user_id, status);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_email ON public.user_subscriptions(customer_email);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_payhip_id ON public.user_subscriptions(payhip_subscription_id);

ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "user_subscriptions_user_select" ON public.user_subscriptions;
CREATE POLICY "user_subscriptions_user_select" ON public.user_subscriptions
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

GRANT SELECT ON TABLE public.user_subscriptions TO authenticated;
GRANT ALL ON TABLE public.user_subscriptions TO service_role;

-- 2. Daily hosted quiz usage tracking table
CREATE TABLE IF NOT EXISTS public.daily_hosted_quiz_usage (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  usage_date date NOT NULL DEFAULT ((now() AT TIME ZONE 'UTC')::date),
  hosted_count integer NOT NULL DEFAULT 1,
  last_hosted_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, usage_date)
);

CREATE INDEX IF NOT EXISTS idx_daily_hosted_quiz_user_date ON public.daily_hosted_quiz_usage(user_id, usage_date);

ALTER TABLE public.daily_hosted_quiz_usage ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "daily_hosted_quiz_user_select" ON public.daily_hosted_quiz_usage;
CREATE POLICY "daily_hosted_quiz_user_select" ON public.daily_hosted_quiz_usage
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

GRANT SELECT ON TABLE public.daily_hosted_quiz_usage TO authenticated;
GRANT ALL ON TABLE public.daily_hosted_quiz_usage TO service_role;

-- 3. Check user hosting eligibility RPC
CREATE OR REPLACE FUNCTION public.check_user_hosting_eligibility()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_user_role text;
  v_sub record;
  v_today date := (now() AT TIME ZONE 'UTC')::date;
  v_today_count integer := 0;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN jsonb_build_object(
      'allowed', false,
      'reason', 'auth_required',
      'is_subscribed', false,
      'quota_remaining', 0
    );
  END IF;

  -- Admin bypass
  SELECT role INTO v_user_role FROM public.profiles WHERE id = v_user_id;
  IF v_user_role = 'admin' THEN
    RETURN jsonb_build_object(
      'allowed', true,
      'is_subscribed', true,
      'plan', 'admin',
      'quota_remaining', null
    );
  END IF;

  -- Check active subscription
  SELECT * INTO v_sub
  FROM public.user_subscriptions
  WHERE user_id = v_user_id
    AND status = 'active'
    AND (expires_at IS NULL OR expires_at > now())
  ORDER BY created_at DESC
  LIMIT 1;

  IF v_sub.id IS NOT NULL THEN
    RETURN jsonb_build_object(
      'allowed', true,
      'is_subscribed', true,
      'plan', v_sub.plan_type,
      'expires_at', v_sub.expires_at,
      'quota_remaining', null
    );
  END IF;

  -- Free user: Check today's usage (1 quiz per day)
  SELECT hosted_count INTO v_today_count
  FROM public.daily_hosted_quiz_usage
  WHERE user_id = v_user_id AND usage_date = v_today;

  IF v_today_count IS NOT NULL AND v_today_count >= 1 THEN
    RETURN jsonb_build_object(
      'allowed', false,
      'reason', 'daily_limit_reached',
      'is_subscribed', false,
      'plan', 'free',
      'quota_remaining', 0,
      'usage_date', v_today
    );
  ELSE
    RETURN jsonb_build_object(
      'allowed', true,
      'is_subscribed', false,
      'plan', 'free',
      'quota_remaining', 1,
      'usage_date', v_today
    );
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.check_user_hosting_eligibility() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_user_hosting_eligibility() TO authenticated, service_role;

-- 4. Claim daily hosted quiz RPC
CREATE OR REPLACE FUNCTION public.claim_daily_hosted_quiz()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id uuid := auth.uid();
  v_eligibility jsonb;
  v_is_sub boolean;
  v_today date := (now() AT TIME ZONE 'UTC')::date;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '42501';
  END IF;

  v_eligibility := public.check_user_hosting_eligibility();
  v_is_sub := COALESCE((v_eligibility->>'is_subscribed')::boolean, false);

  IF v_is_sub THEN
    RETURN jsonb_build_object('success', true, 'is_subscribed', true, 'quota_remaining', null);
  END IF;

  IF (v_eligibility->>'allowed')::boolean IS NOT TRUE THEN
    RAISE EXCEPTION 'Daily free quiz limit reached. Please upgrade to Pro.' USING ERRCODE = 'P0001';
  END IF;

  -- Increment or insert daily usage
  INSERT INTO public.daily_hosted_quiz_usage (user_id, usage_date, hosted_count, last_hosted_at)
  VALUES (v_user_id, v_today, 1, now())
  ON CONFLICT (user_id, usage_date)
  DO UPDATE SET
    hosted_count = public.daily_hosted_quiz_usage.hosted_count + 1,
    last_hosted_at = now();

  RETURN jsonb_build_object('success', true, 'is_subscribed', false, 'quota_remaining', 0);
END;
$$;

REVOKE ALL ON FUNCTION public.claim_daily_hosted_quiz() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_daily_hosted_quiz() TO authenticated, service_role;
