BEGIN;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles' 
        AND column_name = 'internal_unlimited'
    ) THEN
        ALTER TABLE public.profiles ADD COLUMN internal_unlimited BOOLEAN DEFAULT false;
    END IF;
END
$$;

UPDATE public.profiles 
SET internal_unlimited = COALESCE(internal_unlimited, false);

ALTER TABLE public.profiles 
ALTER COLUMN internal_unlimited SET NOT NULL;

COMMIT;
