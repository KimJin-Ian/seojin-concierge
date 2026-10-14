"use client";

import { useState } from "react";
import { useLang } from "./LangContext";
import { CLINIC_SUBS, FIT_TYPES, PARTNER_CATS, PARTNERS, PRICE_CHECKED, type ClinicSub, type FitType, type Partner, type PartnerCat } from "@/lib/partners";

/**
 * 협력사 판 — 분야 탭 · 한 줄에 넷 · 칸마다 "더보기"
 *
 * 스크롤을 줄이려고 분야를 탭으로 나눴다(대표님 요청). 병원은 진료 분야(성형외과·피부과 · 치과 …)를
 * 한 번 더 고를 수 있게 했다 — 분야마다 줄을 따로 두면 한두 곳뿐인 분야 때문에 빈 줄이 늘었다.
 * 탭 밖의 칸도 화면에서만 숨기고 문서에는 그대로 둔다 — 검색엔진이 협력사 이름을 읽어야 한다.
 * "더보기" 를 누르면 그 칸이 넓어지며 설명과 홈페이지 링크가 펼쳐진다.
 * 병원은 "고민으로 찾기"(자주 받는 상담 유형)로도 고를 수 있다 — 분야 고르기와 둘 중 하나만 걸린다.
 */
export default function PartnerBoard() {
  const { t } = useLang();
  const [tab, setTab] = useState<PartnerCat>("clinic");
  const [sub, setSub] = useState<ClinicSub | "all">("all");
  const [fit, setFit] = useState<FitType | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const count = (c: PartnerCat) => PARTNERS.filter((p) => p.cat === c).length;

  const card = (p: Partner, hidden = false) => {
    const name = p.nameKey ? t(p.nameKey) : p.name;
    const isOpen = open === p.id;
    // 설명 — 협력사가 보내준 글 → 사전의 글 → 분야별 정해진 문장. 아무것도 없을 때만 정해진 문장을 쓴다
    const desc = p.desc?.length ? p.desc
      : p.descKeys?.length ? p.descKeys.map((k) => t(k))
      : p.points?.length || p.signature || p.products?.length ? []
      : [t(`ptn.tpl.${p.sub ?? p.cat}`)];
    // 카드 앞면에도 제품 수 · 시작 가격을 보여준다 — "홈페이지만 봐도 무슨 제품이 얼마인지" (대표님 요청)
    const firstPrice = p.products?.find((x) => /원/.test(x.price))?.price;
    return (
      <div key={p.id} className={`pb-card${isOpen ? " is-open" : ""}`} hidden={hidden}>
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
        <button type="button" className="pb-more" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : p.id)}>
          {isOpen ? t("ptn.less") : t("ptn.more")} <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && (
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
  };

  return (
    <div className="pb">
      <div className="pb-tabs" role="tablist">
        {PARTNER_CATS.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={tab === c}
                  className={`pb-tab${tab === c ? " active" : ""}`} onClick={() => { setTab(c); setOpen(null); }}>
            {t(`ptn.cat.${c}`)} <span className="pb-n">{count(c)}</span>
          </button>
        ))}
      </div>

      {PARTNER_CATS.map((c) => (
        <div key={c} className={`pb-panel${tab === c ? " active" : ""}`} role="tabpanel">
          {c === "clinic" && (
            <div className="pb-subs">
              {(["all", ...CLINIC_SUBS] as const).map((s) => {
                const n = s === "all" ? count("clinic") : PARTNERS.filter((p) => p.sub === s).length;
                return (
                  <button key={s} type="button" className={`pb-sub-btn${sub === s && !fit ? " active" : ""}`}
                          aria-pressed={sub === s && !fit} onClick={() => { setSub(s); setFit(null); setOpen(null); }}>
                    {s === "all" ? t("ptn.all") : t(`ptn.sub.${s}`)} <span>{n}</span>
                  </button>
                );
              })}
            </div>
          )}
          {c === "clinic" && (
            <div className="pb-subs pb-fits">
              <span className="pb-fits-label">{t("ptn.find")}</span>
              {FIT_TYPES.map((f) => (
                <button key={f} type="button" className={`pb-sub-btn pb-fit-btn${fit === f ? " active" : ""}`}
                        aria-pressed={fit === f} onClick={() => { setFit(fit === f ? null : f); setSub("all"); setOpen(null); }}>
                  {t(`ptn.fit.${f}`)} <span>{PARTNERS.filter((p) => p.fits?.includes(f)).length}</span>
                </button>
              ))}
            </div>
          )}
          <div className="pb-grid">
            {PARTNERS.filter((p) => p.cat === c)
              .sort((a, b) => (c === "clinic" ? CLINIC_SUBS.indexOf(a.sub!) - CLINIC_SUBS.indexOf(b.sub!) : 0))
              .map((p) => card(p, c === "clinic" && (fit ? !p.fits?.includes(fit) : sub !== "all" && p.sub !== sub)))}
          </div>
        </div>
      ))}
    </div>
  );
}
