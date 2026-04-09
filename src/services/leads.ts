import { supabase } from '@/lib/supabase/client'

export type LeadInput = {
  name: string
  email: string
  scope: string
}

export const createLead = async (lead: LeadInput) => {
  const { data, error } = await supabase.from('leads').insert([lead]).select().single()

  if (error) throw error
  return data
}
