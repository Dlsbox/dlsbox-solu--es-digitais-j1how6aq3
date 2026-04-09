-- Migrations for leads and tracker metrics
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    scope TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.tracker_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    balance NUMERIC NOT NULL DEFAULT 0,
    incomes NUMERIC NOT NULL DEFAULT 0,
    expenses NUMERIC NOT NULL DEFAULT 0,
    essential_percentage INTEGER NOT NULL DEFAULT 0,
    non_essential_percentage INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row Level Security for leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable insert for anyone" ON public.leads;
CREATE POLICY "Enable insert for anyone" ON public.leads
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Enable read for authenticated users only" ON public.leads;
CREATE POLICY "Enable read for authenticated users only" ON public.leads
    FOR SELECT TO authenticated USING (true);

-- Row Level Security for tracker_metrics
ALTER TABLE public.tracker_metrics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable read for anyone" ON public.tracker_metrics;
CREATE POLICY "Enable read for anyone" ON public.tracker_metrics
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Enable all for authenticated users" ON public.tracker_metrics;
CREATE POLICY "Enable all for authenticated users" ON public.tracker_metrics
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Seed data for tracker_metrics to avoid empty states
INSERT INTO public.tracker_metrics (id, balance, incomes, expenses, essential_percentage, non_essential_percentage)
VALUES ('11111111-1111-1111-1111-111111111111'::uuid, 18000.00, 24500.00, 6500.00, 65, 30)
ON CONFLICT (id) DO UPDATE SET
    balance = EXCLUDED.balance,
    incomes = EXCLUDED.incomes,
    expenses = EXCLUDED.expenses,
    essential_percentage = EXCLUDED.essential_percentage,
    non_essential_percentage = EXCLUDED.non_essential_percentage;
