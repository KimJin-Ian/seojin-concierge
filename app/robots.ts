import type { MetadataRoute } from "next";

const SITE_URL = "https://thewellnessn.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Yeti", allow: "/" }, // 네이버
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Daumoa", allow: "/" }, // 다음
      { userAgent: "Baiduspider", allow: "/" }, // 바이두 (중국 사용자)
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
