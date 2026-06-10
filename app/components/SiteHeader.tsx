"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import LangSwitcher from "./LangSwitcher";
import { supabase, SITE_KEY, isSupabaseConfigured } from "@/lib/supabase";

interface DbNavItem {
  id: string;
  label: string;
  url: string;
  is_external: boolean;
  is_cta: boolean;
  sort_order: number;
}

export default function SiteHeader() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [dbNav, setDbNav] = useState<DbNavItem[] | null>(null);

  useEffect(() => {
    if (open) document.body.classList.add("nav-open");
    else document.body.classList.remove("nav-open");
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1180 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // admin /site/nav에서 추가/편집한 메뉴 가져오기
  useEffect(() => {
    if (!isSupabaseConfigured) { setDbNav([]); return; }
    let alive = true;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("nav_links")
          .select("id, label, url, is_external, is_cta, sort_order")
          .eq("site", SITE_KEY)
          .eq("lang", lang)
          .eq("is_published", true)
          .order("sort_order", { ascending: true });
        if (error || !alive) return;
        setDbNav((data as DbNavItem[]) || []);
      } catch {
        if (alive) setDbNav([]);
      }
    })();
    return () => { alive = false; };
  }, [lang]);

  const close = () => setOpen(false);
  const useDbNav = dbNav !== null && dbNav.length > 0;

  return (
    <header>
      <div className="container nav">
        <a href="#" className="logo" onClick={close} aria-label="더웰니스앤 The Wellness N">
          THE <span>·</span> WELLNESS N
          <span
            style={{
              display: "block",
              fontSize: "0.46em",
              letterSpacing: "0.22em",
              opacity: 0.6,
              fontWeight: 400,
              marginTop: 1,
            }}
          >
            더웰니스앤
          </span>
        </a>
        <ul className={`nav-menu ${open ? "open" : ""}`} aria-hidden={!open}>
          {useDbNav ? (
            dbNav!.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={close}
                  target={item.is_external ? "_blank" : undefined}
                  rel={item.is_external ? "noopener noreferrer" : undefined}
                  style={item.is_cta ? { color: "var(--gold-deep)", fontWeight: 500 } : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))
          ) : (
            <>
              <li><a href="#about" onClick={close}>{t("nav.about")}</a></li>
              <li><a href="#diff" onClick={close}>{t("nav.diff")}</a></li>
              <li><a href="#treatments" onClick={close}>{t("nav.treatments")}</a></li>
              <li><a href="#keywords" onClick={close}>{t("nav.keywords")}</a></li>
              <li><a href="#packages" onClick={close}>{t("nav.packages")}</a></li>
              <li><a href="#kpop" onClick={close}>{t("nav.kpop")}</a></li>
              <li><a href="#membership" onClick={close}>{t("nav.membership")}</a></li>
              <li><a href="#partners" onClick={close}>{t("nav.partners")}</a></li>
              <li><a href="#process" onClick={close}>{t("nav.process")}</a></li>
              <li><a href="/blog" onClick={close}>Blog</a></li>
              <li>
                <a
                  href="#contact"
                  onClick={close}
                  style={{ color: "var(--gold-deep)", fontWeight: 500 }}
                >
                  {t("nav.consult")} →
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="nav-right">
          <LangSwitcher />
          <a
            href="http://pf.kakao.com/_QkZhd"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={close}
          >
            {t("nav.kakao")}
          </a>
        </div>
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
