import type { MetadataRoute } from "next";

const SITE_URL = "https://thewellnessn.com";

/**
 * robots.txt — 의료관광 사이트
 * - 모든 공개 페이지 인덱싱 허용 (7개 언어 전체)
 * - /admin/*, /api/* 차단
 * - 전 세계 주요 검색엔진 크롤러 모두 허용
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin/", "/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: "Googlebot", allow: "/", disallow },
      { userAgent: "Yeti", allow: "/", disallow }, // 네이버
      { userAgent: "Bingbot", allow: "/", disallow },
      { userAgent: "Daumoa", allow: "/", disallow }, // 다음 (Kakao)
      { userAgent: "Baiduspider", allow: "/", disallow }, // 바이두 (중국 사용자)
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
