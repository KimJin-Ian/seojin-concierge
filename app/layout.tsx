import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K-Beauty & Medical Tourism Concierge | Gangnam Premium",
  description:
    "강남의 의료 기술과 웰니스·회복 경험을 연결합니다. 맞춤 의료관광 컨시어지 플랫폼.",
  keywords: [
    "의료관광",
    "K-Beauty",
    "강남",
    "medical tourism",
    "wellness",
    "컨시어지",
    "concierge",
    "안티에이징",
    "건강검진",
    "K-Wellness",
  ],
  openGraph: {
    title: "SEOJIN Concierge — K-Beauty × Medical × Wellness",
    description:
      "강남의 의료 기술과 웰니스·회복 경험을 한 명의 컨시어지가 설계합니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
