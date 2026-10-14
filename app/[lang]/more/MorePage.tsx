"use client";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import MoreSections from "../../components/MoreSections";
import { useLang } from "../../components/LangContext";

export default function MorePage() {
  const { t, lang } = useLang();
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="more-head">
          <div className="container">
            <a href={`/${lang}`} className="more-back">{t("more.back")}</a>
            <h1 className="section-title">{t("more.title")}</h1>
            <p className="section-sub">{t("more.sub")}</p>
          </div>
        </section>
        <MoreSections />
      </main>
      <SiteFooter />
    </>
  );
}
