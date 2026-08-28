"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const serviceLinks = [
  { label: "Outdoor Lighting", href: "/services/outdoor-lighting" },
  { label: "Outdoor Audio", href: "/services/outdoor-audio" },
  { label: "Outdoor TVs", href: "/services/outdoor-tvs" },
  { label: "Motorized Shades", href: "/services/motorized-shades" },
];

const exploreLinks = [
  { label: "Catalog", href: "/#catalog" },
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Consultation", href: "/#contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="brandGroup">
        <a href="/" className="brand" aria-label="The Smart Living Group home">
          <span className="brandWordmark">Smart Living</span>
        </a>
        <a
          href="tel:+18175103103"
          className="brandPhone"
          aria-label="Call The Smart Living Group at (817) 510-3103"
        >
          <Phone size={16} aria-hidden="true" />
          <span>(817) 510-3103</span>
        </a>
      </div>

      <div className="navDesktop">
        <div className="navServices">
          {serviceLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={`navServiceLink${isActive(link.href) ? " active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navEnd">
          <a
            className="navCommercial"
            href="/commercial-trade"
            aria-current={isActive("/commercial-trade") ? "page" : undefined}
          >
            Commercial &amp; Trade
          </a>

          <a
            className="navCta"
            href="tel:+18175103103"
            aria-label="Call The Smart Living Group"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="navMobileControls">
        <a
          className="navCommercial"
          href="/commercial-trade"
          aria-current={isActive("/commercial-trade") ? "page" : undefined}
        >
          Commercial &amp; Trade
        </a>

        <button
          type="button"
          className="navToggle"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobileMenu"
        className={`mobileMenu${open ? " open" : ""}`}
        hidden={!open}
      >
        <span className="mobileMenuLabel">Services</span>
        <div className="mobileMenuGroup">
          {serviceLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={`navServiceLink${isActive(link.href) ? " active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="mobileMenuLabel">Explore</span>
        <div className="mobileMenuGroup">
          {exploreLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="button primary mobileMenuCall"
          href="tel:+18175103103"
          onClick={() => setOpen(false)}
        >
          <Phone size={16} aria-hidden="true" />
          Call (817) 510-3103
        </a>
      </div>
    </nav>
  );
}
