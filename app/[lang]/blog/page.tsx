import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getPublishedPosts } from "@/lib/content";
import SiteHeader from "../../components/SiteHeader";
import { VALID_LANGS } from "@/lib/langs";
import type { Lang } from "@/lib/i18n";

const SITE_URL = "https://thewellnessn.com";

export const revalidate = 60;

interface Props {
  params: { lang: string };
}

const BLOG_TITLE: Record<Lang, string> = {
  ko: "블로그 | The Wellness N",
  en: "Blog | The Wellness N",
  zh: "博客 | The Wellness N",
  ja: "ブログ | The Wellness N",
  th: "บล็อก | The Wellness N",
  vi: "Blog | The Wellness N",
  id: "Blog | The Wellness N",
};

const BLOG_DESC: Record<Lang, string> = {
  ko: "한국 의료관광·K-뷰티·웰니스 인사이트 — 강남 의료 현장의 생생한 정보",
  en: "Korea medical tourism, K-Beauty, and wellness insights from Gangnam clinics.",
  zh: "韩国医疗旅游·K-Beauty·健康养生洞察 — 来自江南诊所的第一手信息",
  ja: "韓国医療観光・Kビューティー・ウェルネスのインサイト — 江南クリニック最前線",
  th: "ข้อมูลเชิงลึกเกี่ยวกับการท่องเที่ยวเชิงการแพทย์เกาหลี K-Beauty และสุขภาพ",
  vi: "Thông tin chuyên sâu về du lịch y tế Hàn Quốc, K-Beauty và sức khỏe.",
  id: "Wawasan wisata medis Korea, K-Beauty, dan kesehatan dari klinik Gangnam.",
};

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as Lang;
  if (!VALID_LANGS.includes(lang)) return {};

  return {
    title: BLOG_TITLE[lang],
    description: BLOG_DESC[lang],
    alternates: { canonical: `${SITE_URL}/${lang}/blog` },
    openGraph: {
      title: BLOG_TITLE[lang],
      description: BLOG_DESC[lang],
      url: `${SITE_URL}/${lang}/blog`,
      type: "website",
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const lang = params.lang as Lang;
  if (!VALID_LANGS.includes(lang)) notFound();

  // 해당 언어의 포스트 조회 (없으면 ko로 폴백)
  let posts = await getPublishedPosts(lang, 50);
  const displayLang = posts.length > 0 ? lang : "ko";
  if (posts.length === 0) posts = await getPublishedPosts("ko", 50);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Wellness N Blog",
    url: `${SITE_URL}/${lang}/blog`,
    inLanguage: lang,
    blogPost: posts.map((p: any) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/${displayLang}/blog/${p.slug}`,
      datePublished: p.published_at,
      author: { "@type": "Organization", name: "The Wellness N" },
    })),
  };

  return (
    <>
      <Script
        id="blog-list-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="tw-blog-page" id="main-content">
        <section className="tw-blog-hero">
          <div className="container">
            <div className="tw-blog-eyebrow">BLOG · WELLNESS INSIGHTS</div>
            <h1 className="tw-blog-title">
              Korea Wellness<br />
              <em>Journal</em>
            </h1>
            <p className="tw-blog-sub">
              의료관광·K-뷰티·웰니스 인사이트
            </p>
          </div>
        </section>

        <section className="tw-blog-list-section">
          <div className="container">
            {posts.length === 0 ? (
              <div className="tw-blog-empty">
                <div className="empty-ico">📝</div>
                <h2>Soon to launch</h2>
                <p>Insights and case studies coming soon.</p>
                <Link href={`/${lang}`} className="btn btn-ghost">
                  Back to home
                </Link>
              </div>
            ) : (
              <div className="tw-blog-grid">
                {posts.map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/${displayLang}/blog/${post.slug}`}
                    className="tw-blog-card"
                  >
                    {post.cover_image_url ? (
                      <div className="tw-blog-card-img">
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="tw-blog-card-img tw-blog-card-img-placeholder">
                        <span>✦</span>
                      </div>
                    )}
                    <div className="tw-blog-card-body">
                      {post.tags && post.tags.length > 0 && (
                        <div className="tw-blog-card-tags">
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="tw-blog-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="tw-blog-card-title">{post.title}</h3>
                      {post.excerpt && (
                        <p className="tw-blog-card-excerpt">{post.excerpt}</p>
                      )}
                      <div className="tw-blog-card-meta">
                        <span>
                          {post.published_at
                            ? new Date(post.published_at).toLocaleDateString(
                                lang === "ko" ? "ko-KR" :
                                lang === "ja" ? "ja-JP" :
                                lang === "zh" ? "zh-CN" : "en-US",
                                { year: "numeric", month: "long", day: "numeric" }
                              )
                            : ""}
                        </span>
                        {post.reading_time > 0 && (
                          <span>· {post.reading_time} min</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
