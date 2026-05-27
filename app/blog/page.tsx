import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getPublishedPosts } from "@/lib/content";
import SiteHeader from "../components/SiteHeader";

const SITE_URL = "https://thewellnessn.com";

export const metadata: Metadata = {
  title: "Blog | The Wellness N",
  description: "Korea medical tourism, K-Beauty, and wellness insights.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | The Wellness N",
    description: "Korea medical tourism · K-Beauty · Anti-aging insights",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts("ko", 50);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Wellness N Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p: any) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
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
                <Link href="/" className="btn btn-ghost">
                  Back to home
                </Link>
              </div>
            ) : (
              <div className="tw-blog-grid">
                {posts.map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
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
                                "ko-KR",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
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
