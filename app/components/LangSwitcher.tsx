"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLang } from "./LangContext";
import type { Lang } from "@/lib/i18n";

const VALID_LANGS: Lang[] = ["ko", "en", "zh", "ja", "th", "vi", "id"];

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang, setLang, langs } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  const current = langs.find((l) => l.code === lang) ?? langs[0];

  function handleLangChange(newLang: Lang) {
    setLang(newLang);
    setOpen(false);

    // URL 기반 라우팅: /ko/... → /en/... 로 교체
    const segments = pathname.split("/");
    // pathname = "/ko/blog/..." → segments = ["", "ko", "blog", ...]
    if (segments.length >= 2 && VALID_LANGS.includes(segments[1] as Lang)) {
      segments[1] = newLang;
      router.push(segments.join("/") || `/${newLang}`);
    } else {
      // 아직 [lang] 경로 밖 (예: 구버전 /blog) → 새 lang 루트로 이동
      router.push(`/${newLang}`);
    }
  }

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-current"
        onClick={() => setOpen((v) => !v)}
        aria-label="언어 선택"
        aria-expanded={open}
      >
        🌐 <span className="lang-short">{current.short}</span>
        <span className="lang-caret">▾</span>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox">
          {langs.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                className={`lang-item ${l.code === lang ? "active" : ""}`}
                onClick={() => handleLangChange(l.code)}
                role="option"
                aria-selected={l.code === lang}
              >
                <span className="lang-short">{l.short}</span>
                <span className="lang-label">{l.label}</span>
                {l.code === lang && <span className="lang-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
