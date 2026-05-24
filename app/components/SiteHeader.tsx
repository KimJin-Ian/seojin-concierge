"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.classList.add("nav-open");
    else document.body.classList.remove("nav-open");
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header>
      <div className="container nav">
        <a href="#" className="logo" onClick={close}>
          SEOJIN <span>·</span> CONCIERGE
        </a>
        <ul className={`nav-menu ${open ? "open" : ""}`} aria-hidden={!open}>
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#treatments" onClick={close}>Treatments</a></li>
          <li><a href="#packages" onClick={close}>Packages</a></li>
          <li><a href="#why" onClick={close}>Why Us</a></li>
          <li><a href="#process" onClick={close}>Process</a></li>
          <li>
            <a
              href="#contact"
              onClick={close}
              style={{ color: "var(--gold-deep)", fontWeight: 500 }}
            >
              상담 신청 →
            </a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={close}>상담 신청</a>
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
