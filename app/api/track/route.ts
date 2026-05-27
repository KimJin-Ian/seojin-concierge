/**
 * 클릭/이벤트 트래킹 API (seojin-concierge)
 */

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SITE_KEY = "seojin" as const;

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json({ skipped: true });
  }

  try {
    const body = await req.json();
    const { event_name, event_label, event_category, page_path } = body;

    if (!event_name) {
      return NextResponse.json({ error: "event_name required" }, { status: 400 });
    }

    const ua = req.headers.get("user-agent") || null;
    const referrer = req.headers.get("referer") || null;
    const country = req.headers.get("x-vercel-ip-country") || null;

    let device_type: string | null = null;
    if (ua) {
      if (/mobile/i.test(ua)) device_type = "mobile";
      else if (/tablet|ipad/i.test(ua)) device_type = "tablet";
      else device_type = "desktop";
    }

    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("click_events").insert({
      site: SITE_KEY,
      event_name,
      event_label: event_label || null,
      event_category: event_category || null,
      page_path: page_path || null,
      referrer,
      user_agent: ua,
      country,
      device_type,
    } as any);

    if (error) {
      console.error("[/api/track] insert error:", error);
      return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("[/api/track] error:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
