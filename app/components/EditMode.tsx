"use client";

/**
 * 비주얼 에디터 모드 (?edit=1 URL 파라미터 시에만 활성화)
 * — seojin-concierge용 (witheass-website와 동일 코드)
 */

import { useEffect } from "react";

const ALLOWED_PARENT_ORIGINS = [
  "https://witheass-admin-real.vercel.app",
  "http://localhost:3001",
  "http://localhost:3000",
];

export default function EditMode() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("edit") !== "1") return;

    const parentOrigin =
      window.parent !== window ? document.referrer : "";
    const isInAdmin = ALLOWED_PARENT_ORIGINS.some((o) =>
      parentOrigin.startsWith(o)
    );

    const style = document.createElement("style");
    style.id = "edit-mode-styles";
    style.textContent = `
      [data-edit-key] {
        position: relative;
        cursor: pointer;
        transition: outline 0.15s, background-color 0.15s;
      }
      [data-edit-key]:hover {
        outline: 2px dashed #3b82f6 !important;
        outline-offset: 4px;
        background-color: rgba(59, 130, 246, 0.04) !important;
      }
      [data-edit-key].__edit-selected {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 4px;
        background-color: rgba(59, 130, 246, 0.08) !important;
      }
      [data-edit-key]:hover::before,
      [data-edit-key].__edit-selected::before {
        content: "✏️ " attr(data-edit-key);
        position: absolute;
        top: -32px;
        right: 0;
        background: #3b82f6;
        color: #fff;
        font-size: 11px;
        font-weight: 600;
        padding: 4px 9px;
        border-radius: 4px;
        z-index: 9999;
        pointer-events: none;
        font-family: -apple-system, "Pretendard", sans-serif;
        white-space: nowrap;
      }
      [data-edit-key].__edit-selected::before {
        background: #16a34a;
      }
      .__edit-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #3b82f6, #6366f1);
        color: #fff;
        padding: 8px 16px;
        font-size: 13px;
        font-family: -apple-system, "Pretendard", sans-serif;
        text-align: center;
        z-index: 999999;
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
    `;
    document.head.appendChild(style);

    const banner = document.createElement("div");
    banner.className = "__edit-banner";
    banner.textContent = isInAdmin
      ? "✏️ 편집 모드 — 클릭한 섹션은 admin 사이드바에서 편집됩니다"
      : "👀 편집 모드 미리보기 (admin 안에서 열어야 실제 편집 가능)";
    document.body.appendChild(banner);

    const originalPaddingTop = document.body.style.paddingTop;
    document.body.style.paddingTop = `calc(${originalPaddingTop || "0px"} + 36px)`;

    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("[data-edit-key]");
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      const key = target.getAttribute("data-edit-key") || "";
      if (!key) return;

      document
        .querySelectorAll("[data-edit-key].__edit-selected")
        .forEach((el) => el.classList.remove("__edit-selected"));
      target.classList.add("__edit-selected");

      if (isInAdmin) {
        window.parent.postMessage(
          { type: "visual-editor:click", key, source: "homepage" },
          "*"
        );
      } else {
        console.log("[edit-mode] clicked:", key);
      }
    }

    document.addEventListener("click", onClick, { capture: true });

    if (isInAdmin && window.parent !== window) {
      window.parent.postMessage(
        { type: "visual-editor:ready", source: "homepage" },
        "*"
      );
    }

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      style.remove();
      banner.remove();
      document.body.style.paddingTop = originalPaddingTop;
    };
  }, []);

  return null;
}
