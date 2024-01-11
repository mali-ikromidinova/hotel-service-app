import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jbpejpfwvngayxlklrsw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicGVqcGZ3dm5nYXl4bGtscnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0OTQ4NjUsImV4cCI6MjAxOTA3MDg2NX0.7lcDSAqieoMEeSAu4H4FaFCVudKhbuDR3LySCXYueW8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
