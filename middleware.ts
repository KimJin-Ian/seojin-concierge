import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "admin_session";
const VALID_LANGS = ["ko", "en", "zh", "ja", "th", "vi", "id"] as const;

// ─── Admin JWT 인증 ──────────────────────────────────────────────────────────

async function isValid(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.JWT_SECRET;
  if (!secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

// ─── Accept-Language 헤더에서 지원 언어 감지 ─────────────────────────────────

function detectLang(request: NextRequest): string {
  const accept = request.headers.get("accept-language") || "";
  const parts = accept
    .split(",")
    .map((p) => p.split(";")[0].trim().toLowerCase());

  for (const part of parts) {
    if (part.startsWith("ko")) return "ko";
    if (part.startsWith("en")) return "en";
    if (part.startsWith("zh")) return "zh";
    if (part.startsWith("ja")) return "ja";
    if (part.startsWith("th")) return "th";
    if (part.startsWith("vi")) return "vi";
    if (part.startsWith("id") || part.startsWith("ms")) return "id";
  }
  return "ko"; // 기본값: 한국어
}

// ─── Middleware ──────────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Admin 인증 가드 (/admin/*)
  if (
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/admin/login") &&
    !pathname.startsWith("/api/admin/login")
  ) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const valid = await isValid(token);
    if (!valid) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === "/admin/login") {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const valid = await isValid(token);
    if (valid) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // 2) 루트 "/" → /{감지된 언어} 리다이렉트
  if (pathname === "/") {
    const lang = detectLang(request);
    return NextResponse.redirect(new URL(`/${lang}`, request.url), 302);
  }

  // 3) 구버전 /blog, /blog/* → /ko/blog, /ko/blog/... 리다이렉트 (301 영구)
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return NextResponse.redirect(
      new URL(`/ko${pathname}`, request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Admin 경로
    "/admin/:path*",
    // 루트 및 구버전 blog 경로
    "/",
    "/blog",
    "/blog/:path*",
  ],
};
