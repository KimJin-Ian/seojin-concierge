/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 이미지 최적화 — next/image 사용 시 자동 webp/avif 변환
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // 보안 헤더 (모든 페이지 적용)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // 클릭재킹 방어 — CSP frame-ancestors가 더 정밀하게 제어
          // (X-Frame-Options 제거: admin의 비주얼 에디터가 iframe 사용)
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // 권한 정책 — 카메라/마이크/위치 차단 (의료관광 사이트엔 불필요)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // HSTS — HTTPS 강제 (Vercel은 자동, 명시 보강)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // CSP — 외부 폰트(jsdelivr) + JSON-LD 인라인 스크립트 허용
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
              "font-src 'self' data: https://cdn.jsdelivr.net",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'self' https://witheass-admin-real.vercel.app https://*.vercel.app",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      // 정적 자산 캐싱 (1년)
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff2)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
