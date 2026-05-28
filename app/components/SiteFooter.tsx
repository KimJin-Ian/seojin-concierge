"use client";

/**
 * 푸터 (DB 우선 + 하드코딩 폴백) — seojin-concierge
 */

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { supabase, SITE_KEY, isSupabaseConfigured } from "@/lib/supabase";

const EMAIL = "dreamwithessmarketing@gmail.com";

interface DbLink {
  id: string;
  column_label: string;
  column_order: number;
  label: string;
  url: string;
  is_external: boolean;
  sort_order: number;
}

export default function SiteFooter() {
  const { t, lang } = useLang();
  const [dbLinks, setDbLinks] = useState<DbLink[] | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) { setDbLinks([]); return; }
    let alive = true;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("footer_links")
          .select("id, column_label, column_order, label, url, is_external, sort_order")
          .eq("site", SITE_KEY)
          .eq("lang", lang)
          .eq("is_published", true)
          .order("column_order", { ascending: true })
          .order("sort_order", { ascending: true });
        if (error || !alive) return;
        setDbLinks((data as DbLink[]) || []);
      } catch {
        if (alive) setDbLinks([]);
      }
    })();
    return () => { alive = false; };
  }, [lang]);

  const useDb = dbLinks !== null && dbLinks.length > 0;
  const columns: Record<string, { order: number; items: DbLink[] }> = {};
  if (useDb) {
    for (const link of dbLinks!) {
      if (!columns[link.column_label]) {
        columns[link.column_label] = { order: link.column_order, items: [] };
      }
      columns[link.column_label].items.push(link);
    }
  }
  const sortedColumns = Object.keys(columns).sort((a, b) => columns[a].order - columns[b].order);

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">THE <span>·</span> WELLNESS N</div>
            <p className="foot-desc">{t("footer.desc")}</p>
          </div>

          {useDb ? (
            sortedColumns.map((colName) => (
              <div key={colName} className="foot-col">
                <h5>{colName}</h5>
                <ul>
                  {columns[colName].items.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target={link.is_external ? "_blank" : undefined}
                        rel={link.is_external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <>
              <div className="foot-col">
                <h5>Service</h5>
                <ul>
                  <li><a href="#treatments">시술 카테고리</a></li>
                  <li><a href="#keywords">인기 키워드</a></li>
                  <li><a href="#packages">패키지</a></li>
                  <li><a href="#kpop">K-pop Tour</a></li>
                  <li><a href="#membership">멤버십</a></li>
                </ul>
              </div>
              <div className="foot-col">
                <h5>Trust</h5>
                <ul>
                  <li><a href="#trust">안전 보장</a></li>
                  <li><a href="#diff">왜 우리인가</a></li>
                  <li><a href="#partners">협업 병원</a></li>
                  <li><a href="#voices">유형별 리뷰</a></li>
                  <li><a href="#process">진행 과정</a></li>
                </ul>
              </div>
              <div className="foot-col">
                <h5>Contact</h5>
                <ul>
                  <li>Seoul · Gangnam, Korea</li>
                  <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                  <li>KakaoTalk · 위드에스마케팅</li>
                  <li>WhatsApp · Korea MEDICAL Tour</li>
                  <li>24/7 Concierge Support</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="foot-bottom">
          <div>{t("footer.copyright")}</div>
          <div>Privacy · Terms · Cookies</div>
        </div>
      </div>
    </footer>
  );
}
