"use client";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { NewsCards } from "../../components/NewsSection";
import { useLang } from "../../components/LangContext";
import NEWS from "@/lib/news-data.json";

export default function NewsPage() {
  const { t, lang } = useLang();
  const updated = String((NEWS as any).updated ?? "").replace(/-/g, ".");
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="more-head">
          <div className="container">
            <a href={`/${lang}`} className="more-back">{t("more.back")}</a>
            <h1 className="section-title">{t("h3.news.page")}</h1>
            <p className="section-sub">{t("h3.news.updated").replace("{date}", updated)}</p>
          </div>
        </section>
        <section className="nw h2-tight">
          <div className="container">
            <NewsCards />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
