import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "./components/LangContext";
import Analytics from "./components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = "https://thewellnessn.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Wellness N — Korea Medical & K-Beauty Concierge | Gangnam",
    template: "%s | The Wellness N",
  },
  description:
    "The Wellness N — 한국 의료관광·K-뷰티·안티에이징·힐링투어 전문 컨시어지. 강남 프리미엄 병원 다수 협업, 줄기세포·피코토닝·쥬베룩·티타늄·레이저·팔자주름·탈모 등 맞춤 케어. 실시간 통역·맞춤 회복·K-pop 투어 패키지. 방콕보다 저렴한 K-Beauty 가격.",
  applicationName: "The Wellness N",
  authors: [{ name: "The Wellness N · 위드에스마케팅" }],
  keywords: [
    "의료관광",
    "한국 의료관광",
    "Korea Medical Tourism",
    "K-Beauty",
    "K-뷰티",
    "안티에이징",
    "Anti-aging",
    "강남 의료",
    "Gangnam",
    "컨시어지",
    "concierge",
    "줄기세포",
    "Stem cell",
    "피코토닝",
    "팔자주름",
    "탈모",
    "쥬베룩",
    "티타늄",
    "레이저",
    "K-Wellness",
    "힐링투어",
    "건강검진",
    "리프팅",
    "회복 케어",
    "실시간 통역",
    "K-pop tour",
    "방콕 의료관광",
    "Vincent Clinic",
    "The Wellness N",
    "TheWellnessN",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ko-KR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "zh-CN": SITE_URL,
      "ja-JP": SITE_URL,
    },
  },
  openGraph: {
    title: "The Wellness N — Korea Medical & K-Beauty Concierge",
    description:
      "강남 프리미엄 병원 협업 + 줄기세포·피코토닝·리프팅·안티에이징·K-pop 투어. 방콕보다 저렴한 K-Beauty.",
    url: SITE_URL,
    siteName: "The Wellness N",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "zh_CN", "ja_JP"],
    images: [
      {
        url: `${SITE_URL}/og-image.png?v=2`,
        width: 1200,
        height: 630,
        alt: "The Wellness N — Korea Medical & K-Beauty Concierge",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wellness N — Korea Medical & K-Beauty Concierge",
    description: "강남 의료관광·K-뷰티 컨시어지. 줄기세포·피코토닝·안티에이징·K-pop 투어.",
    images: [`${SITE_URL}/og-image.png?v=2`],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: "Medical Tourism",
  verification: {
    // ⚠️ Vercel 환경변수에 실제 코드 입력 후 재배포
    // 1. 구글: https://search.google.com/search-console
    // 2. 네이버: https://searchadvisor.naver.com
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    other: {
      "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_VERIFICATION || "",
    },
  },
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Wellness N",
  alternateName: ["TheWellnessN", "위드에스 웰니스 컨시어지"],
  url: SITE_URL,
  description:
    "Korea Medical Tourism & K-Beauty Concierge — 강남 프리미엄 의료기관 협업 · 줄기세포·피코토닝·리프팅·안티에이징·힐링투어·K-pop tour 패키지",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressLocality: "Seoul",
    addressRegion: "강남구",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+82-10-2068-0817",
      contactType: "customer service",
      availableLanguage: ["Korean", "English", "Chinese", "Japanese"],
    },
  ],
  sameAs: [
    "http://pf.kakao.com/_QkZhd",
    "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Wellness N",
  url: SITE_URL,
  inLanguage: ["ko-KR", "en-US"],
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
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-web"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
