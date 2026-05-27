/**
 * Supabase 클라이언트 (seojin-concierge 사이트용)
 *
 * 권한: Anon Key (RLS 정책 적용 → 공개 데이터만 읽기)
 *
 * 사용 예:
 *   import { supabase } from "@/lib/supabase";
 *
 *   const { data } = await supabase
 *     .from("content")
 *     .select("*")
 *     .eq("site", "seojin")
 *     .eq("lang", "ko");
 */

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export const SITE_KEY = "seojin" as const;
