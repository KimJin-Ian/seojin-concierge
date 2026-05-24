"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

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
        <ul className={`nav-menu ${open ? "open" : ""}`}>
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#treatments" onClick={close}>Treatments</a></li>
          <li><a href="#packages" onClick={close}>Packages</a></li>
          <li><a href="#why" onClick={close}>Why Us</a></li>
          <li><a href="#process" onClick={close}>Process</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={close}>
          상담 신청
        </a>
        <button
          className="menu-toggle"
          aria-label="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>
    </header>
  );
}
