/**
 * 언론 보도 모으기 — 네이버 뉴스에서 "더웰니스앤" 기사를 찾아 lib/news-data.json 에 쌓는다 (2026-10-23 대표님 요청)
 *
 *   node scripts/news-refresh.mjs            # 새 기사만 더한다 (지난 기사는 지우지 않는다)
 *
 * 매달 1일 GitHub Actions(.github/workflows/news-refresh.yml)가 돌려 바뀐 게 있으면 커밋한다 → Vercel 이 다시 배포.
 * 기사 사진은 가져오지 않는다 — 언론사 사진은 저작권이 언론사에 있다. 제목 · 매체 · 날짜 · 요약 두 줄만 싣고 원문으로 보낸다.
 * 네이버 화면의 클래스 이름은 자주 바뀐다. 그래서 data-heatmap-target(.tit · .body · .prof)만 보고 읽는다.
 */
import fs from "node:fs";
import path from "node:path";

const QUERIES = ["더웰니스앤", "THE WELLNESS N 의료관광"];
const MUST = /더웰니스앤|웰니스앤|THE WELLNESS N/i;
const FILE = path.resolve(process.cwd(), "lib/news-data.json");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";

const decode = (s) => s
  .replace(/<[^>]+>/g, "")
  .replace(/&quot;/g, "\"").replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&middot;/g, "·").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
  .replace(/새 창 열림/g, "").replace(/\s+/g, " ").trim();

/** "2026.08.24." · "3일 전" · "5시간 전" → YYYY-MM-DD */
function toDate(s, now = new Date()) {
  let m = s.match(/(20\d\d)\.(\d{1,2})\.(\d{1,2})\./);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  const d = new Date(now);
  if ((m = s.match(/(\d+)\s*일 전/))) d.setDate(d.getDate() - Number(m[1]));
  else if ((m = s.match(/(\d+)\s*주 전/))) d.setDate(d.getDate() - 7 * Number(m[1]));
  else if (!/(분|시간) 전/.test(s)) return null;
  return d.toISOString().slice(0, 10);
}

function parse(html) {
  const out = [];
  const tit = /<a[^>]+href="(https?:\/\/[^"]+)"[^>]*data-heatmap-target="\.tit"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = tit.exec(html))) {
    const url = m[1].replace(/&amp;/g, "&");
    const title = decode(m[2]);
    const before = html.slice(Math.max(0, m.index - 6000), m.index);
    // 매체 — 바로 앞의 .prof 링크 안 글자 중 마지막
    const profs = [...before.matchAll(/data-heatmap-target="\.prof"[^>]*>([\s\S]*?)<\/a>/g)];
    const press = profs.length ? decode(profs[profs.length - 1][1]) : "";
    // 날짜 — 바로 앞에 나온 날짜 글자
    const dates = [...before.matchAll(/>(20\d\d\.\d{1,2}\.\d{1,2}\.|\d+\s*(?:분|시간|일|주)\s*전)</g)];
    const date = dates.length ? toDate(dates[dates.length - 1][1]) : null;
    const after = html.slice(m.index, m.index + 4000);
    const body = after.match(/data-heatmap-target="\.body"[^>]*>([\s\S]*?)<\/a>/);
    const summary = body ? decode(body[1]).slice(0, 180) : "";
    if (!MUST.test(title + summary)) continue;
    out.push({ title, url, press, date, summary });
  }
  return out;
}

async function search(q, start) {
  const u = `https://search.naver.com/search.naver?where=news&sort=1&query=${encodeURIComponent(q)}&start=${start}`;
  const res = await fetch(u, { headers: { "User-Agent": UA, "Accept-Language": "ko-KR,ko;q=0.9" } });
  if (!res.ok) throw new Error(`네이버 검색 HTTP ${res.status}`);
  return parse(await res.text());
}

/** 네이버가 줄인 제목("…")은 원문의 og:title 로 바꾼다 — 사진(og:image)은 가져오지 않는다 */
async function fullTitle(it) {
  if (!/(\.\.\.|…)$/.test(it.title)) return it;
  try {
    const res = await fetch(it.url, { headers: { "User-Agent": UA }, redirect: "follow" });
    const html = await res.text();
    // 제목 안의 작은따옴표(' ')에서 끊기지 않게 — 여는 따옴표와 같은 따옴표까지 읽는다
    const t = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=(["'])(.*?)\1/i)?.[2]
      ?? html.match(/<title>([^<]+)<\/title>/i)?.[1];
    // 끝에 붙은 " - 매체 이름" · " | 매체 이름" 만 뗀다 (제목 안의 · 는 그대로)
    if (t) {
      let title = decode(t).replace(/\s+[-|]\s+[^-|]{2,40}$/, "");
      // " - 퍼블릭뉴스통신(Public news-network …)" 처럼 매체 이름 안에 - 가 있으면 위에서 못 뗀다
      const cut = Math.max(title.lastIndexOf(" - "), title.lastIndexOf(" | "));
      if (cut > 10 && it.press && title.slice(cut + 3).startsWith(it.press.slice(0, 3))) title = title.slice(0, cut);
      it.title = title.slice(0, 120);
    }
  } catch {}
  return it;
}

const old = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, "utf8")) : { items: [] };
const byUrl = new Map(old.items.map((x) => [x.url, x]));
let found = 0;
for (const q of QUERIES) {
  for (const start of [1, 11, 21]) {
    let got = [];
    try { got = await search(q, start); } catch (e) { console.log("건너뜀:", q, start, e.message); break; }
    if (!got.length) break;
    for (const it of got) {
      found++;
      // 같은 기사가 여러 매체에 같은 제목으로 실리면(보도자료) 하나만
      const dupTitle = [...byUrl.values()].some((x) => x.title === it.title && x.url !== it.url);
      it.press = it.press.replace(/\s*\(.*\)\s*$/, "");   // "퍼블릭뉴스통신(public news-network …)" → 매체 이름만
      if (!byUrl.has(it.url) && !dupTitle) byUrl.set(it.url, await fullTitle(it));
    }
    await new Promise((r) => setTimeout(r, 1200));
  }
}
const items = [...byUrl.values()].sort((a, b) => String(b.date ?? "").localeCompare(String(a.date ?? "")));
const next = { updated: new Date().toISOString().slice(0, 10), items };
const changed = JSON.stringify(items) !== JSON.stringify(old.items);
if (changed) fs.writeFileSync(FILE, JSON.stringify(next, null, 2) + "\n");
console.log(`검색에서 ${found}건 · 저장 ${items.length}건 (새로 ${items.length - old.items.length}건)${changed ? "" : " — 바뀐 것 없음"}`);
