import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lnfuswdxpqqoflkvxary.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZnVzd2R4cHFxb2Zsa3Z4YXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDM2NDAsImV4cCI6MjA2MDcxOTY0MH0.1pU9tmfHDJtt5dbo-5_xp6AKzCFu5KhTAnrnQRP2rww";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
