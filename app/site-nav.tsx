import { Phone } from "lucide-react";

export function SiteNav() {
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

      <div className="navLinks">
        <a href="/outdoor-lighting-dallas">Lighting</a>
        <a href="/outdoor-audio-dallas">Audio</a>
        <a href="/outdoor-tv-installation-dallas">Outdoor TVs</a>
        <a href="/motorized-shades-dallas">Shades</a>
        <a href="/#catalog">Catalog</a>
        <a href="/#process">Process</a>
        <a href="/#contact">Consultation</a>
      </div>

      <div className="navEnd">
        <a
          className="navCommercial"
          href="/commercial-trade"
          aria-label="Commercial and Trade services"
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
    </nav>
  );
}
