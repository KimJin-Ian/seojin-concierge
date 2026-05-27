"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "#fafaf7",
        color: "#1a1a1a",
        fontFamily: "Pretendard, 'Noto Sans KR', sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 14, letterSpacing: "0.2em", color: "#b8956a", marginBottom: 16 }}>
        THE · WELLNESS N
      </div>
      <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 400, letterSpacing: "-0.02em", margin: 0 }}>
        문제가 발생했습니다
      </h1>
      <p style={{ fontSize: 16, marginTop: 12, color: "#4a4a4a", maxWidth: 480 }}>
        일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>
      <p style={{ fontSize: 14, marginTop: 4, color: "#4a4a4a" }}>
        Something went wrong. Please try again.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={reset}
          style={{
            padding: "14px 28px",
            background: "#b8956a",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            fontSize: 14,
            letterSpacing: "0.1em",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          다시 시도 · Try Again
        </button>
        <a
          href="/"
          style={{
            padding: "14px 28px",
            background: "transparent",
            color: "#1a1a1a",
            border: "1px solid #e8e4dc",
            borderRadius: 999,
            fontSize: 14,
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          홈으로 · Home
        </a>
      </div>
    </main>
  );
}
