"use client";

import { useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";

type AnalyticsResponse = {
  period: { days: number; since: string; until: string };
  totals: { events: number; pageViews: number; clicks: number; uniqueVisitors: number };
  today: { events: number; pageViews: number; clicks: number };
  yesterday: { events: number; pageViews: number; clicks: number };
  clicksByLabel: Record<string, number>;
  viewsByPath: Record<string, number>;
  deviceBreakdown: Record<string, number>;
  countryBreakdown: Record<string, number>;
  dailyTrend: Record<string, { views: number; clicks: number }>;
  scrollDepth: Record<string, number>;
  _notice?: string;
  _error?: string;
};

const PERIOD_OPTIONS = [
  { days: 1, label: "오늘" },
  { days: 7, label: "7일" },
  { days: 30, label: "30일" },
  { days: 90, label: "90일" },
];

export default function AnalyticsPage() {
  const [days, setDays] = useState(7);
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError("");
    fetch(`/api/analytics?days=${days}`)
      .then((r) => r.json())
      .then((res) => {
        if (!alive) return;
        if (res._error) setError(res._error);
        setData(res);
      })
      .catch((e) => alive && setError(String(e)))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [days]);

  // 가장 많이 클릭된 라벨 Top 5
  const topClicks = data
    ? Object.entries(data.clicksByLabel)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
    : [];

  // 가장 많이 본 경로 Top 5
  const topPaths = data
    ? Object.entries(data.viewsByPath)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
    : [];

  const scrollTotalUsers = data
    ? Math.max(...Object.values(data.scrollDepth), data.totals.pageViews)
    : 0;

  return (
    <AdminShell>
      <div className="admin-header">
        <h1>방문자 / 클릭 분석</h1>
        <p className="desc">
          The Wellness N 사이트의 실시간 트래픽 — 자체 트래킹(/api/track) 기반.
          {data?._notice && (
            <span style={{ color: "#f59e0b", marginLeft: 8 }}> ⚠ {data._notice}</span>
          )}
          {error && <span style={{ color: "#ef4444", marginLeft: 8 }}> ⚠ {error}</span>}
        </p>
      </div>

      {/* 기간 필터 */}
      <div className="panel" style={{ padding: 12, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {PERIOD_OPTIONS.map((o) => (
            <button
              key={o.days}
              type="button"
              onClick={() => setDays(o.days)}
              className={`btn ${days === o.days ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "8px 16px" }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* 통계 카드 */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="label">📅 오늘 PV</div>
          <div className="value">{loading ? "…" : data?.today.pageViews ?? 0}</div>
          <div className="change">어제: {data?.yesterday.pageViews ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="label">👥 고유 방문자 (추정)</div>
          <div className="value">{loading ? "…" : data?.totals.uniqueVisitors ?? 0}</div>
          <div className="change">최근 {days}일 · UA 기준</div>
        </div>
        <div className="stat-card">
          <div className="label">📄 총 페이지뷰</div>
          <div className="value">{loading ? "…" : data?.totals.pageViews ?? 0}</div>
          <div className="change">최근 {days}일</div>
        </div>
        <div className="stat-card">
          <div className="label">🎯 CTA 클릭</div>
          <div className="value">{loading ? "…" : data?.totals.clicks ?? 0}</div>
          <div className="change">최근 {days}일</div>
        </div>
      </div>

      {/* CTA 클릭률 */}
      <div className="panel">
        <h2 className="panel-title">
          🎯 주요 CTA 클릭 Top
          <span className="meta">최근 {days}일</span>
        </h2>
        {topClicks.length === 0 ? (
          <p style={{ color: "#94a3b8", padding: 12 }}>
            아직 클릭 데이터가 없습니다. 사이트 방문자가 CTA를 클릭하면 여기에 표시됩니다.
          </p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>이벤트 라벨</th>
                <th style={{ textAlign: "right" }}>클릭수</th>
                <th style={{ textAlign: "right" }}>비율</th>
              </tr>
            </thead>
            <tbody>
              {topClicks.map(([label, count]) => {
                const totalClicks = data?.totals.clicks || 1;
                const pct = ((count / totalClicks) * 100).toFixed(1);
                return (
                  <tr key={label}>
                    <td>{label}</td>
                    <td style={{ textAlign: "right" }}>{count}</td>
                    <td style={{ textAlign: "right" }}>{pct}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* 페이지별 PV */}
      <div className="panel">
        <h2 className="panel-title">
          📄 페이지별 조회 Top
          <span className="meta">최근 {days}일</span>
        </h2>
        {topPaths.length === 0 ? (
          <p style={{ color: "#94a3b8", padding: 12 }}>아직 페이지뷰가 없습니다.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>페이지 경로</th>
                <th style={{ textAlign: "right" }}>조회수</th>
              </tr>
            </thead>
            <tbody>
              {topPaths.map(([path, count]) => (
                <tr key={path}>
                  <td><code>{path}</code></td>
                  <td style={{ textAlign: "right" }}>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 디바이스 / 국가 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <div className="panel">
          <h2 className="panel-title">📱 디바이스</h2>
          {data && Object.keys(data.deviceBreakdown).length > 0 ? (
            <table className="admin-table">
              <tbody>
                {Object.entries(data.deviceBreakdown)
                  .sort((a, b) => b[1] - a[1])
                  .map(([dev, n]) => (
                    <tr key={dev}>
                      <td>{dev}</td>
                      <td style={{ textAlign: "right" }}>{n}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p style={{ color: "#94a3b8" }}>데이터 없음</p>
          )}
        </div>
        <div className="panel">
          <h2 className="panel-title">🌍 국가</h2>
          {data && Object.keys(data.countryBreakdown).length > 0 ? (
            <table className="admin-table">
              <tbody>
                {Object.entries(data.countryBreakdown)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 10)
                  .map(([c, n]) => (
                    <tr key={c}>
                      <td>{c}</td>
                      <td style={{ textAlign: "right" }}>{n}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p style={{ color: "#94a3b8" }}>데이터 없음</p>
          )}
        </div>
      </div>

      {/* 스크롤 깊이 */}
      <div className="panel">
        <h2 className="panel-title">
          📜 스크롤 깊이
          <span className="meta">GA_ID 설정 시에만 수집됨</span>
        </h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>구간</th>
              <th style={{ textAlign: "right" }}>도달 이벤트</th>
              <th style={{ textAlign: "right" }}>비율 (vs PV)</th>
            </tr>
          </thead>
          <tbody>
            {data && Object.entries(data.scrollDepth).map(([depth, n]) => {
              const pct = scrollTotalUsers > 0 ? ((n / scrollTotalUsers) * 100).toFixed(1) : "0";
              return (
                <tr key={depth}>
                  <td>{depth}</td>
                  <td style={{ textAlign: "right" }}>{n}</td>
                  <td style={{ textAlign: "right" }}>{pct}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 외부 분석 도구 */}
      <div className="panel">
        <h2 className="panel-title">상세 분석 (외부)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          <a href="https://vercel.com/dashboard" target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: 16 }}>
            🚀 Vercel Analytics →
          </a>
          <a href="https://analytics.google.com" target="_blank" rel="noopener" className="btn btn-secondary" style={{ padding: 16 }}>
            📊 Google Analytics →
          </a>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener" className="btn btn-secondary" style={{ padding: 16 }}>
            🔍 Search Console →
          </a>
        </div>
      </div>
    </AdminShell>
  );
}
