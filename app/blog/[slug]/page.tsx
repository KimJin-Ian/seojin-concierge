import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/content";
import SiteHeader from "../../components/SiteHeader";

const SITE_URL = "https://thewellnessn.com";
const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, "ko");
  if (!post) {
    return { title: "Post Not Found", robots: { index: false } };
  }

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || "";
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at || undefined,
      authors: post.author_name ? [post.author_name] : ["The Wellness N"],
      images: post.cover_image_url
        ? [{ url: post.cover_image_url, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts("ko", 100);
    return posts.map((p: any) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug, "ko");
  if (!post) notFound();

  const allPosts = await getPublishedPosts("ko", 10);
  const otherPosts = allPosts.filter((p: any) => p.id !== post.id).slice(0, 3);

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image_url || `${SITE_URL}/og-image.png`,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Organization",
      name: post.author_name || "The Wellness N",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "The Wellness N",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags?.join(", ") || "",
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <SiteHeader />

      <main className="tw-blog-page tw-blog-post" id="main-content">
        <article className="tw-blog-article">
          <div className="container container-narrow">
            <div className="tw-blog-post-header">
              <Link href="/blog" className="tw-blog-back-link">
                ← Blog list
              </Link>
              {post.tags && post.tags.length > 0 && (
                <div className="tw-blog-card-tags" style={{ marginBottom: 16 }}>
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="tw-blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="tw-blog-article-title">{post.title}</h1>
              {post.excerpt && (
                <p className="tw-blog-article-excerpt">{post.excerpt}</p>
              )}
              <div className="tw-blog-article-meta">
                <span>
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
                {post.reading_time > 0 && (
                  <span>· {post.reading_time} min read</span>
                )}
                {post.author_name && <span>· {post.author_name}</span>}
              </div>
            </div>

            {post.cover_image_url && (
              <div className="tw-blog-cover">
                <img
                  src={post.cover_image_url}
                  alt={post.cover_image_alt || post.title}
                  loading="eager"
                />
              </div>
            )}

            <div
              className="tw-blog-article-body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            <div className="tw-blog-cta">
              <h3>Need wellness consultation?</h3>
              <p>The Wellness N connects you with Gangnam's premium clinics.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  data-track="cta_click"
                  data-category="contact"
                  data-label="blog_kakao"
                >
                  💬 KakaoTalk
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  data-track="cta_click"
                  data-category="contact"
                  data-label="blog_whatsapp"
                >
                  📱 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>

        {otherPosts.length > 0 && (
          <section className="tw-blog-list-section tw-blog-related">
            <div className="container">
              <h2 className="tw-blog-related-title">Other articles</h2>
              <div className="tw-blog-grid">
                {otherPosts.map((p: any) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="tw-blog-card"
                  >
                    {p.cover_image_url ? (
                      <div className="tw-blog-card-img">
                        <img
                          src={p.cover_image_url}
                          alt={p.title}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="tw-blog-card-img tw-blog-card-img-placeholder">
                        <span>✦</span>
                      </div>
                    )}
                    <div className="tw-blog-card-body">
                      <h3 className="tw-blog-card-title">{p.title}</h3>
                      {p.excerpt && (
                        <p className="tw-blog-card-excerpt">{p.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
