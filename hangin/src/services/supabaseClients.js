import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rsxolifwufpgycjkrtrl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeG9saWZ3dWZwZ3ljamtydHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5Mzk2NzgsImV4cCI6MjA4MDUxNTY3OH0.6JhpCaa332pPmlL55Mgl3GlfoWAeSgEW_wH4uYAHs74";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
