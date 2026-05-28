import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
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
    canonical: `${SITE_URL}/ko`,
    languages: {
      "ko-KR": `${SITE_URL}/ko`,
      "en-US": `${SITE_URL}/en`,
      "zh-CN": `${SITE_URL}/zh`,
      "ja-JP": `${SITE_URL}/ja`,
      "th-TH": `${SITE_URL}/th`,
      "vi-VN": `${SITE_URL}/vi`,
      "id-ID": `${SITE_URL}/id`,
      "x-default": `${SITE_URL}/ko`,
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
  image: `${SITE_URL}/og-image.png?v=2`,
  "@id": SITE_URL,
  telephone: "+82-10-2068-0817",
  priceRange: "₩₩₩",
  currenciesAccepted: "KRW, USD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  description:
    "Korea Medical Tourism & K-Beauty Concierge — 강남 프리미엄 의료기관 협업 · 줄기세포·피코토닝·리프팅·안티에이징·힐링투어·K-pop tour 패키지",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: "Seoul",
    addressLocality: "강남구",
    streetAddress: "강남구 (상담 시 정확한 위치 안내)",
  },
  // 강남구 중심 좌표 (대략) — 정확한 주소 확정 시 업데이트
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5172,
    longitude: 127.0473,
  },
  areaServed: [
    { "@type": "Country", name: "KR" },
    { "@type": "Country", name: "US" },
    { "@type": "Country", name: "CN" },
    { "@type": "Country", name: "JP" },
    { "@type": "Country", name: "TH" },
    { "@type": "Country", name: "VN" },
    { "@type": "Country", name: "ID" },
  ],
  // 운영시간 (평일 9~18시 KST · 글로벌 고객은 카톡/WhatsApp 24/7)
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description:
        "주말은 카카오톡/WhatsApp 채널을 통한 24시간 메시지 응대",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+82-10-2068-0817",
      contactType: "customer service",
      availableLanguage: [
        "Korean", "English", "Chinese", "Japanese",
        "Thai", "Vietnamese", "Indonesian",
      ],
      areaServed: ["KR", "US", "CN", "JP", "TH", "VN", "ID"],
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
  inLanguage: ["ko-KR", "en-US", "zh-CN", "ja-JP", "th-TH", "vi-VN", "id-ID"],
};

// FAQPage — DB(faqs 테이블)의 seojin ko 5건과 동일. 어드민 편집 시 동기화 권장.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Wellness N은 어떤 서비스를 제공하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "강남 프리미엄 병원과 협업하여 의료관광·K-뷰티·안티에이징 컨시어지 서비스를 제공합니다. 상담부터 시술·회복·관광까지 원스톱.",
      },
    },
    {
      "@type": "Question",
      name: "어떤 시술을 받을 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "줄기세포, 피코토닝, 쥬베룩, 티타늄 리프팅, 레이저, 팔자주름, 탈모 케어, 건강검진 등 다양한 시술이 가능합니다.",
      },
    },
    {
      "@type": "Question",
      name: "통역이 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 영어/중국어/일본어 실시간 통역이 제공됩니다. 상담부터 시술 동행까지.",
      },
    },
    {
      "@type": "Question",
      name: "K-pop 투어도 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 의료 일정과 함께 K-pop 콘서트·아이돌 카페·강남 명소 투어 패키지를 구성할 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "결제는 어떻게 진행되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "상담 후 견적서 전달 → 카카오톡으로 안내. 현금/카드/외화 모두 가능합니다.",
      },
    },
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
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
