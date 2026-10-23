"use client";

/**
 * 푸터 (DB 우선 + 하드코딩 폴백) — seojin-concierge
 */

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { supabase, SITE_KEY, isSupabaseConfigured } from "@/lib/supabase";

const EMAIL = "dreamwithessmarketing@gmail.com";
const PHONE = "+82 10-2068-0817";
const TEL = "tel:+821020680817";

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
            <div
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                opacity: 0.7,
                marginTop: 4,
                marginBottom: 10,
              }}
            >
              더웰니스앤 · 한국 의료관광 컨시어지
            </div>
            <p className="foot-desc">{t("h3.footer.desc")}</p>
            {/* 맨 아래 연락처 — 메뉴(DB)가 바뀌어도 늘 보인다 (2026-10-23 대표님 "맨밑에 이메일") */}
            <p className="foot-reach">
              <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
              <a href={TEL}>📞 {PHONE}</a>
              <a href={`/${lang}#contact`}>💬 카카오톡 · WhatsApp 상담</a>
            </p>
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
                  <li><a href="#process">진행 방법</a></li>
                </ul>
              </div>
              <div className="foot-col">
                <h5>Contact</h5>
                <ul>
                  <li>Seoul · Gangnam, Korea</li>
                  <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                  <li><a href={TEL}>{PHONE}</a></li>
                  <li><a href={`/${lang}#contact`}>KakaoTalk · WhatsApp</a></li>
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
