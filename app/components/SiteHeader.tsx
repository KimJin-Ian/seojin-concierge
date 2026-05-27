"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import LangSwitcher from "./LangSwitcher";

export default function SiteHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

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

  const close = () => setOpen(false);

  return (
    <header>
      <div className="container nav">
        <a href="#" className="logo" onClick={close}>
          THE <span>·</span> WELLNESS N
        </a>
        <ul className={`nav-menu ${open ? "open" : ""}`} aria-hidden={!open}>
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
