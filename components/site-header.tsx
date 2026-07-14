"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#catalog", label: "Catalog" },
  { href: "#contact", label: "Contact" },
];

const PHONE_TEL = "+18175103103";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-gradient-to-b from-black/80 via-black/25 to-transparent"
      }`}
    >
      <nav className="flex h-[74px] items-center justify-between px-[5vw] md:h-[82px]">
        <a href="#home" className="brand" aria-label="Smart Living Group home">
          <img
            src="/projects/logo.webp"
            alt="Smart Living Group logo"
            className="h-[52px] w-auto max-w-[130px] object-contain md:max-w-[148px]"
          />
        </a>

        <div className="hidden items-center gap-7 text-[13px] uppercase tracking-[0.14em] text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden rounded-full border border-gold/55 px-[18px] py-3 text-[13px] uppercase tracking-[0.08em] text-gold-soft transition-colors hover:bg-gold/10 md:inline-flex"
        >
          Call Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-background/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-line px-[5vw] py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-lg uppercase tracking-[0.12em] text-muted transition-colors hover:bg-card hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-gold-soft to-gold px-5 py-4 font-bold text-ink"
          >
            <Phone size={18} /> Call 817-510-3103
          </a>
        </div>
      </div>
    </header>
  );
}
