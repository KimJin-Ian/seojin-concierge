"use client";

import { useState } from "react";
import { useLang } from "./LangContext";
import { CLINIC_SUBS, FIT_TYPES, PARTNER_CATS, PARTNERS, PRICE_CHECKED, type FitType, type Partner, type PartnerCat } from "@/lib/partners";

/**
 * 협력사 — 모든 분야를 첫 화면에 펼친다 (2026-10-23 대표님)
 *
 * 10/13 판은 분야를 탭으로 나눴는데, 사람들이 첫 탭(병원)만 보고 MOU 업체들을 못 봤다.
 * 이제 분야마다 제목을 달아 차례로 늘어놓고, 위의 "분야로 바로 가기" 칩을 누르면 그 분야로 내려간다.
 * 한 줄에 다섯(휴대폰 셋)으로 촘촘히 — 스크롤을 덜 내리게.
 * "더보기" 를 누르면 그 칸이 넓어지며 설명 · 제품 · 홈페이지가 펼쳐진다.
 *
 * "고민으로 찾기" 는 큰 네모 버튼으로 따로 뺐다 (ConcernFinder, 아래).
 */

function PartnerCard({ p, open, onToggle }: { p: Partner; open: boolean; onToggle: () => void }) {
  const { t } = useLang();
  const name = p.nameKey ? t(p.nameKey) : p.name;
  // 설명 — 협력사가 보내준 글 → 사전의 글 → 분야별 정해진 문장. 아무것도 없을 때만 정해진 문장을 쓴다
  const desc = p.desc?.length ? p.desc
    : p.descKeys?.length ? p.descKeys.map((k) => t(k))
    : p.points?.length || p.signature || p.products?.length ? []
    : [t(`ptn.tpl.${p.sub ?? p.cat}`)];
  // 카드 앞면에도 제품 수 · 시작 가격 — "홈페이지만 봐도 무슨 제품이 얼마인지" (대표님 요청)
  const firstPrice = p.products?.find((x) => /원/.test(x.price))?.price;
  return (
    <div className={`pb-card${open ? " is-open" : ""}`}>
      {p.badge ? <span className="pb-badge">{p.badge}</span> : null}
      <div className="pb-logo">
        {p.logo
          ? <img src={`/logos/${p.logo}`} alt={`${name} 로고 · The Wellness N 협력사`} loading="lazy" />
          : <span className="pb-logo-text">{p.logoText ?? name}</span>}
      </div>
      <div className="pb-name">{name}</div>
      <div className="pb-tag">{p.sub ? t(`ptn.sub.${p.sub}`) : p.tagKey ? t(p.tagKey) : ""}</div>
      {p.products?.length ? (
        <div className="pb-price">{p.products.length > 1 ? `${p.products.length}${t("ptn.items")}` : p.products[0].name}{firstPrice ? ` · ${firstPrice}${p.products.length > 1 ? "~" : ""}` : ` · ${p.products[0].price}`}</div>
      ) : null}
      <button type="button" className="pb-more" aria-expanded={open} onClick={onToggle}>
        {open ? t("ptn.less") : t("ptn.more")} <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-detail">
          {desc.map((d, i) => <p key={i}>{d}</p>)}
          {p.points?.length ? <ul className="pb-points">{p.points.map((x) => <li key={x}>{x}</li>)}</ul> : null}
          {p.signature ? <p className="pb-signature"><b>★</b> {p.signature}</p> : null}
          {p.products?.length ? (
            <div className="pb-products">
              <table>
                <tbody>
                  {p.products.map((x) => (
                    <tr key={x.name}>
                      <th scope="row">{x.name}{x.note ? <small>{x.note}</small> : null}</th>
                      <td>{x.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {p.priceSource
                ? <p className="pb-price-note">{t(`ptn.priceNote.${p.priceSource}`)}</p>
                : p.products.some((x) => /원/.test(x.price)) && p.cat !== "biz" && p.cat !== "dining"
                ? <p className="pb-price-note">{t("ptn.priceNote").replace("{date}", PRICE_CHECKED)}</p> : null}
            </div>
          ) : null}
          {p.forWhom ? <p className="pb-benefit pb-for"><b>{t("ptn.forWhom")}</b> {p.forWhom}</p> : null}
          {p.benefit ? <p className="pb-benefit"><b>{t("ptn.benefit")}</b> {p.benefit}</p> : null}
          {p.perks ? <p className="pb-benefit"><b>{t("ptn.perks")}</b> {p.perks}</p> : null}
          {p.image ? <img className="pb-image" src={`/logos/${p.image}`} alt={`${name} 소개`} loading="lazy" /> : null}
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="pb-visit"
               data-track="cta_click" data-category="partner" data-label={`partner_${p.id}`}>
              {t("ptn.visit")}
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}

const inCat = (c: PartnerCat) => PARTNERS.filter((p) => p.cat === c)
  .sort((a, b) => (c === "clinic" ? CLINIC_SUBS.indexOf(a.sub!) - CLINIC_SUBS.indexOf(b.sub!) : 0));

export default function PartnerBoard() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);
  const jump = (c: PartnerCat) => document.getElementById(`ptn-${c}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="pb pb3">
      <div className="pb-jump" role="navigation" aria-label={t("h3.ptn.jump")}>
        <span className="pb-jump-label">{t("h3.ptn.jump")}</span>
        {PARTNER_CATS.map((c) => (
          <button key={c} type="button" className="pb-tab" onClick={() => jump(c)}>
            {t(`ptn.cat.${c}`)} <span className="pb-n">{inCat(c).length}</span>
          </button>
        ))}
      </div>

      {PARTNER_CATS.map((c) => (
        <section key={c} className="pb-section" id={`ptn-${c}`} aria-labelledby={`ptn-h-${c}`}>
          <h3 className="pb-section-title" id={`ptn-h-${c}`}>
            {t(`ptn.cat.${c}`)} <span className="pb-n">{inCat(c).length}</span>
          </h3>
          <div className="pb-grid">
            {inCat(c).map((p) => (
              <PartnerCard key={p.id} p={p} open={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const FIT_ICON: Record<FitType, string> = { antiaging: "✦", petit: "💋", surgery: "✚", regen: "🧬", jaw: "🦷" };

/** 고민으로 병원 찾기 — 큰 네모 버튼. 누르면 그 고민에 맞는 병원이 바로 아래에 나온다 */
export function ConcernFinder() {
  const { t } = useLang();
  const [fit, setFit] = useState<FitType | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const list = fit ? PARTNERS.filter((p) => p.fits?.includes(fit)) : [];
  return (
    <div className="cf">
      <div className="cf-grid">
        {FIT_TYPES.map((f) => {
          const n = PARTNERS.filter((p) => p.fits?.includes(f)).length;
          return (
            <button key={f} type="button" className={`cf-tile${fit === f ? " active" : ""}`} aria-pressed={fit === f}
                    onClick={() => { setFit(fit === f ? null : f); setOpen(null); }}>
              <span className="cf-ico" aria-hidden="true">{FIT_ICON[f]}</span>
              <span className="cf-name">{t(`ptn.fit.${f}`)}</span>
              <span className="cf-n">{n}{t("h3.find.n")}</span>
            </button>
          );
        })}
      </div>
      {fit && (
        <div className="cf-result">
          <div className="cf-result-head">
            <b>{FIT_ICON[fit]} {t(`ptn.fit.${fit}`)}</b>
            <button type="button" className="pb-more" onClick={() => setFit(null)}>{t("h3.find.close")} ×</button>
          </div>
          <div className="pb-grid">
            {list.map((p) => (
              <PartnerCard key={p.id} p={p} open={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
