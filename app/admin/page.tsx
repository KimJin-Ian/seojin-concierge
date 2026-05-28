"use client";

import { useEffect, useState } from "react";
import AdminShell from "./components/AdminShell";
import Link from "next/link";

type Totals = {
  todayPV: number;
  yesterdayPV: number;
  uniqueVisitors7d: number;
  clicks7d: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Totals | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/api/analytics?days=7")
      .then((r) => r.json())
      .then((res) => {
        if (!alive) return;
        setStats({
          todayPV: res?.today?.pageViews ?? 0,
          yesterdayPV: res?.yesterday?.pageViews ?? 0,
          uniqueVisitors7d: res?.totals?.uniqueVisitors ?? 0,
          clicks7d: res?.totals?.clicks ?? 0,
        });
      })
      .catch(() => {})
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <AdminShell>
      <div className="admin-header">
        <h1>대시보드</h1>
        <p className="desc">The Wellness N 사이트 관리 콘솔에 오신 것을 환영합니다.</p>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="label">📅 오늘 페이지뷰</div>
          <div className="value">{loading ? "…" : stats?.todayPV ?? 0}</div>
          <div className="change">어제: {stats?.yesterdayPV ?? 0}</div>
        </div>
        <div className="stat-card">
          <div className="label">👥 고유 방문자 (7일)</div>
          <div className="value">{loading ? "…" : stats?.uniqueVisitors7d ?? 0}</div>
          <div className="change">UA 기준 추정</div>
        </div>
        <div className="stat-card">
          <div className="label">🎯 CTA 클릭 (7일)</div>
          <div className="value">{loading ? "…" : stats?.clicks7d ?? 0}</div>
          <div className="change">카톡·WhatsApp·이메일 등</div>
        </div>
        <div className="stat-card">
          <div className="label">📈 상세 분석</div>
          <Link href="/admin/analytics" className="btn btn-primary" style={{ marginTop: 12 }}>
            보러가기 →
          </Link>
        </div>
      </div>

      <div className="panel">
        <h2 className="panel-title">
          빠른 액션
          <span className="meta">자주 쓰는 기능</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          <Link href="/admin/content" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 16 }}>
            ✏️ 메인 텍스트 편집
          </Link>
          <Link href="/admin/blog" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 16 }}>
            📝 새 블로그 글 쓰기
          </Link>
          <Link href="/admin/media" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 16 }}>
            🖼️ 이미지 업로드
          </Link>
          <Link href="/admin/analytics" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 16 }}>
            📈 트래픽 상세보기
          </Link>
        </div>
      </div>

      <div className="panel">
        <h2 className="panel-title">
          외부 도구
          <span className="meta">새 창으로 열림</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          <a href="https://vercel.com/dashboard" target="_blank" rel="noopener" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 14 }}>
            🚀 Vercel 대시보드 →
          </a>
          <a href="https://analytics.google.com" target="_blank" rel="noopener" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 14 }}>
            📊 Google Analytics →
          </a>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 14 }}>
            🔍 구글 서치 콘솔 →
          </a>
          <a href="https://searchadvisor.naver.com" target="_blank" rel="noopener" className="btn btn-secondary" style={{ justifyContent: "flex-start", padding: 14 }}>
            🟢 네이버 서치어드바이저 →
          </a>
        </div>
      </div>

      <div className="panel">
        <h2 className="panel-title">시스템 정보</h2>
        <table className="admin-table">
          <tbody>
            <tr>
              <td style={{ width: 160 }}><strong>도메인</strong></td>
              <td>thewellnessn.com</td>
            </tr>
            <tr>
              <td><strong>호스팅</strong></td>
              <td>Vercel <span className="badge badge-success">활성</span></td>
            </tr>
            <tr>
              <td><strong>지원 언어</strong></td>
              <td>7개 언어 (ko/en/zh/ja/th/vi/id)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
