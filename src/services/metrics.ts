import { supabase } from '@/lib/supabase/client'

export const getTrackerMetrics = async () => {
  const { data, error } = await supabase.from('tracker_metrics').select('*').limit(1).single()

  // Handle case when table exists but has no rows (PGRST116)
  if (error && error.code !== 'PGRST116') {
    throw error
  }

  return data
}
