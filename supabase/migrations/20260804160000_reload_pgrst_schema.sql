-- Migration to notify PostgREST to reload schema cache for new columns
NOTIFY pgrst, 'reload schema';

CREATE OR REPLACE FUNCTION public.reload_schema_cache()
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
AS $$
BEGIN
  PERFORM pg_notify('pgrst', 'reload schema');
END;
$$;

GRANT EXECUTE ON FUNCTION public.reload_schema_cache() TO anon, authenticated;
