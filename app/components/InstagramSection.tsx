"use client";

import Script from "next/script";
import { useLang } from "./LangContext";
import { INSTAGRAM_HANDLE, INSTAGRAM_POSTS } from "@/lib/social";

/**
 * 더웰니스앤 인스타그램 — 첫 화면 (2026-10-23 대표님 "메인에 인스타그램도 연동")
 * 계정(lib/social.ts)이 비어 있으면 아무것도 그리지 않는다.
 * 게시물은 인스타그램 공식 퍼가기(embed.js)로 붙인다 — 사진을 우리 서버에 복사하지 않는다.
 */
export default function InstagramSection() {
  const { t } = useLang();
  if (!INSTAGRAM_HANDLE) return null;
  const profile = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
  return (
    <section className="ig h2-tight" id="instagram">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Instagram · @{INSTAGRAM_HANDLE}</span>
          <h2 className="section-title"><strong>{t("h3.insta.title")}</strong></h2>
        </div>
        {INSTAGRAM_POSTS.length ? (
          <>
            <div className="ig-grid">
              {INSTAGRAM_POSTS.slice(0, 6).map((u) => (
                <blockquote key={u} className="instagram-media" data-instgrm-permalink={u} data-instgrm-version="14" />
              ))}
            </div>
            <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
          </>
        ) : null}
        <p style={{ textAlign: "center", marginTop: 16 }}>
          <a href={profile} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
             data-track="cta_click" data-category="social" data-label="instagram_profile">{t("h3.insta.follow")}</a>
        </p>
      </div>
    </section>
  );
}
