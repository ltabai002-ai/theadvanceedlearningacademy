import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a client even with placeholder values to prevent app from crashing
// Note: Database features won't work until real credentials are provided
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
