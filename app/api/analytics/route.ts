/**
 * 분석 데이터 API (The Wellness N admin 전용)
 *
 * 쿼리 파라미터:
 *   days: 1 | 7 | 30 | 90 (기본 7)
 *
 * site 필터는 항상 'seojin' 고정 (이 사이트 admin이므로).
 * Auth: middleware에서 /admin/* 보호되어 있으나 API는 별개로 isAuthenticated 체크.
 */

import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAdminClient, hasAdminConfig } from "@/lib/supabase-admin";

const SITE = "seojin";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const days = Math.min(90, parseInt(searchParams.get("days") || "7", 10));
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const yesterdayStart = new Date(todayStart.getTime() - 24 * 60 * 60 * 1000);

  const emptyResponse = {
    period: { days, since, until: new Date().toISOString() },
    site: SITE,
    totals: { events: 0, pageViews: 0, clicks: 0, uniqueVisitors: 0 },
    today: { events: 0, pageViews: 0, clicks: 0 },
    yesterday: { events: 0, pageViews: 0, clicks: 0 },
    clicksByLabel: {},
    viewsByPath: {},
    deviceBreakdown: {},
    countryBreakdown: {},
    dailyTrend: {},
    scrollDepth: { "25%": 0, "50%": 0, "75%": 0, "100%": 0 },
  };

  if (!hasAdminConfig) {
    return NextResponse.json({
      ...emptyResponse,
      _notice: "Supabase 환경변수 (SERVICE_ROLE_KEY) 미설정",
    });
  }

  try {
    const supabase = getAdminClient() as any;
    const { data, error } = await supabase
      .from("click_events")
      .select("*")
      .eq("site", SITE)
      .gte("created_at", since);
    if (error) throw error;

    const events = (data || []) as any[];

    const todayEvents = events.filter(
      (e) => new Date(e.created_at) >= todayStart
    );
    const yesterdayEvents = events.filter(
      (e) =>
        new Date(e.created_at) >= yesterdayStart &&
        new Date(e.created_at) < todayStart
    );

    const pageViews = events.filter((e) => e.event_name === "page_view");
    const clicks = events.filter((e) => e.event_name === "cta_click");
    const scrollEvents = events.filter((e) => e.event_name === "scroll_depth");
    const uniqueVisitors = new Set(events.map((e) => e.user_agent)).size;

    const clicksByLabel: Record<string, number> = {};
    for (const c of clicks) {
      const k = c.event_label || "unknown";
      clicksByLabel[k] = (clicksByLabel[k] || 0) + 1;
    }

    const viewsByPath: Record<string, number> = {};
    for (const v of pageViews) {
      const k = v.page_path || "/";
      viewsByPath[k] = (viewsByPath[k] || 0) + 1;
    }

    const deviceBreakdown: Record<string, number> = {};
    for (const e of events) {
      const d = e.device_type || "unknown";
      deviceBreakdown[d] = (deviceBreakdown[d] || 0) + 1;
    }

    const countryBreakdown: Record<string, number> = {};
    for (const e of events) {
      const c = e.country || "unknown";
      countryBreakdown[c] = (countryBreakdown[c] || 0) + 1;
    }

    const dailyTrend: Record<string, { views: number; clicks: number }> = {};
    for (let i = 0; i < days; i++) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      const key = date.toISOString().slice(0, 10);
      dailyTrend[key] = { views: 0, clicks: 0 };
    }
    for (const e of events) {
      const key = e.created_at.slice(0, 10);
      if (!dailyTrend[key]) dailyTrend[key] = { views: 0, clicks: 0 };
      if (e.event_name === "page_view") dailyTrend[key].views++;
      if (e.event_name === "cta_click") dailyTrend[key].clicks++;
    }

    const scrollDepth: Record<string, number> = {
      "25%": 0,
      "50%": 0,
      "75%": 0,
      "100%": 0,
    };
    for (const s of scrollEvents) {
      const k = s.event_label || "";
      if (k in scrollDepth) scrollDepth[k]++;
    }

    return NextResponse.json({
      period: { days, since, until: new Date().toISOString() },
      site: SITE,
      totals: {
        events: events.length,
        pageViews: pageViews.length,
        clicks: clicks.length,
        uniqueVisitors,
      },
      today: {
        events: todayEvents.length,
        pageViews: todayEvents.filter((e) => e.event_name === "page_view").length,
        clicks: todayEvents.filter((e) => e.event_name === "cta_click").length,
      },
      yesterday: {
        events: yesterdayEvents.length,
        pageViews: yesterdayEvents.filter((e) => e.event_name === "page_view").length,
        clicks: yesterdayEvents.filter((e) => e.event_name === "cta_click").length,
      },
      clicksByLabel,
      viewsByPath,
      deviceBreakdown,
      countryBreakdown,
      dailyTrend,
      scrollDepth,
    });
  } catch (e: any) {
    console.error("[/api/analytics] error:", e);
    return NextResponse.json({ ...emptyResponse, _error: e?.message || "Unknown" });
  }
}
