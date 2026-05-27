import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found · 페이지를 찾을 수 없습니다",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "var(--bg, #fafaf7)",
        color: "var(--ink, #1a1a1a)",
        fontFamily: "Pretendard, 'Noto Sans KR', sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 14, letterSpacing: "0.2em", color: "var(--gold, #b8956a)", marginBottom: 16 }}>
        THE · WELLNESS N
      </div>
      <h1 style={{ fontSize: "clamp(48px, 10vw, 96px)", fontWeight: 300, letterSpacing: "-0.04em", margin: 0 }}>404</h1>
      <p style={{ fontSize: 18, marginTop: 12, color: "var(--ink-soft, #4a4a4a)" }}>
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <p style={{ fontSize: 14, marginTop: 4, color: "var(--ink-soft, #4a4a4a)" }}>
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          marginTop: 32,
          padding: "14px 28px",
          background: "var(--gold, #b8956a)",
          color: "#fff",
          borderRadius: 999,
          fontSize: 14,
          letterSpacing: "0.1em",
          textDecoration: "none",
        }}
      >
        홈으로 돌아가기 · Back to Home
      </Link>
    </main>
  );
}
