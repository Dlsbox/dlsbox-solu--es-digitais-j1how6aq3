import { supabase } from '@/lib/supabase/client'

export async function createLead(lead: { name: string; email: string; scope: string }) {
  const { data, error } = await supabase.from('leads').insert([lead]).select().single()

  if (error) throw error
  return data
}
