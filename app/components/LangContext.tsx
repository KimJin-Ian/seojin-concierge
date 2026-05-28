"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { tFor, type Lang, LANGS } from "@/lib/i18n";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: string) => string;
  langs: typeof LANGS;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "withess_lang";
const SITE_KEY = "seojin" as const;

function toI18nMap(rows: Array<{ section: string; content_key: string; value: string }>) {
  const map: Record<string, string> = {};
  for (const row of rows) {
    map[`${row.section}.${row.content_key}`] = row.value;
  }
  return map;
}

export function LangProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? "ko");
  const [dbContent, setDbContent] = useState<Record<string, Record<string, string>>>({});

  useEffect(() => {
    // If a language was provided via URL (initialLang), use it and persist it
    if (initialLang) {
      setLangState(initialLang);
      try { localStorage.setItem(STORAGE_KEY, initialLang); } catch { /* ignore */ }
      if (typeof document !== "undefined") document.documentElement.lang = initialLang;
      return;
    }
    // Otherwise fall back to localStorage / browser detection
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      const valid: Lang[] = ["ko", "en", "zh", "ja", "th", "vi", "id"];
      if (saved && valid.includes(saved)) {
        setLangState(saved);
        document.documentElement.lang = saved;
        return;
      }
      const nav = (navigator.language || "ko").toLowerCase();
      if (nav.startsWith("en")) setLangState("en");
      else if (nav.startsWith("zh")) setLangState("zh");
      else if (nav.startsWith("ja")) setLangState("ja");
      else if (nav.startsWith("th")) setLangState("th");
      else if (nav.startsWith("vi")) setLangState("vi");
      else if (nav.startsWith("id") || nav.startsWith("ms")) setLangState("id");
      else setLangState("ko");
    } catch {
      /* SSR / no localStorage */
    }
  }, [initialLang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // DB content fetch — admin에서 편집한 콘텐츠 자동 반영
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    if (dbContent[lang] !== undefined) return;

    let alive = true;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("content")
          .select("section, content_key, value")
          .eq("site", SITE_KEY)
          .eq("lang", lang);

        if (error || !alive) return;
        const map = toI18nMap((data || []) as any);
        setDbContent((prev) => ({ ...prev, [lang]: map }));
      } catch {
        // ignore
      }
    })();

    return () => { alive = false; };
  }, [lang, dbContent]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  // t(): DB 값 우선, 없으면 i18n.ts 폴백
  const t = useCallback(
    (key: string) => {
      const dbVal = dbContent[lang]?.[key];
      if (dbVal !== undefined && dbVal !== null && dbVal !== "") {
        return dbVal;
      }
      return tFor(lang, key);
    },
    [lang, dbContent]
  );

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t, langs: LANGS }),
    [lang, setLang, t]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used inside <LangProvider>");
  }
  return ctx;
}
