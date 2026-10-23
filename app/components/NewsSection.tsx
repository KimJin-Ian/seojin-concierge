"use client";

import { useLang } from "./LangContext";
import NEWS from "@/lib/news-data.json";

/**
 * 언론 보도 — 첫 화면에 최근 기사 (2026-10-23 대표님 "기사들이 1면에 뜨게끔")
 * 기사는 scripts/news-refresh.mjs 가 네이버 뉴스에서 매달 모은다 (lib/news-data.json).
 * 언론사 사진은 저작권이 언론사에 있어 쓰지 않는다 — 제목 · 매체 · 날짜 · 요약만 싣고 원문으로 보낸다.
 */
type Item = { title: string; url: string; press: string; date: string | null; summary: string };

export function NewsCards({ limit }: { limit?: number }) {
  const { t } = useLang();
  const items = ((NEWS as any).items as Item[]).slice(0, limit ?? 999);
  return (
    <div className="nw-grid">
      {items.map((x) => (
        <a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer nofollow" className="nw-card"
           data-track="cta_click" data-category="press" data-label="press_article">
          <div className="nw-meta"><b>{x.press}</b>{x.date ? <span>{x.date.replace(/-/g, ".")}</span> : null}</div>
          <h4 className="nw-title">{x.title}</h4>
          {x.summary ? <p className="nw-sum">{x.summary}</p> : null}
          <span className="nw-read">{t("h3.news.read")}</span>
        </a>
      ))}
    </div>
  );
}

export default function NewsSection() {
  const { t, lang } = useLang();
  const updated = String((NEWS as any).updated ?? "").replace(/-/g, ".");
  return (
    <section className="nw h2-tight" id="news">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">{t("h3.news.tag")}</span>
          <h2 className="section-title">{t("h3.news.t1")} <strong>{t("h3.news.t2")}</strong></h2>
        </div>
        <NewsCards limit={6} />
        <div className="nw-foot">
          <a href={`/${lang}/news`} className="btn btn-ghost">{t("h3.news.all")}</a>
          <span className="nw-updated">{t("h3.news.updated").replace("{date}", updated)}</span>
        </div>
      </div>
    </section>
  );
}
