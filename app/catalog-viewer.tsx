"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  { src: "/catalog/catalog-01.jpg", alt: "Samsung Terrace outdoor TVs for full sun and partial sun" },
  { src: "/catalog/catalog-02.jpg", alt: "Automated outdoor shades and landscape lighting solutions" },
  { src: "/catalog/catalog-03.jpg", alt: "Samsung Terrace outdoor TV on a covered patio" },
  { src: "/catalog/catalog-04.jpg", alt: "Smart Living Group luxury automation overview" },
  { src: "/catalog/catalog-05.jpg", alt: "Specialty, line array, and concert series outdoor speakers" },
  { src: "/catalog/catalog-06.jpg", alt: "Landscape outdoor speaker placement in a modern backyard" },
  { src: "/catalog/catalog-07.jpg", alt: "Outdoor audio installation for a luxury pool home" },
  { src: "/catalog/catalog-08.jpg", alt: "Specialty outdoor speaker installation" },
  { src: "/catalog/catalog-09.jpg", alt: "Outdoor speaker coverage plan around a swimming pool" },
  { src: "/catalog/catalog-10.jpg", alt: "Why clients choose Smart Living Group" },
  { src: "/catalog/catalog-11.jpg", alt: "Patio, garden, and landscape outdoor audio systems" },
  { src: "/catalog/catalog-12.jpg", alt: "Discover outdoor landscape lighting" },
  { src: "/catalog/catalog-13.jpg", alt: "Bollard outdoor speaker in a garden" },
  { src: "/catalog/catalog-14.jpg", alt: "Landscape and ambisonic bollard outdoor audio systems" },
  { src: "/catalog/catalog-15.jpg", alt: "Smart Living Group vision" },
  { src: "/catalog/catalog-16.jpg", alt: "Outdoor audio and outdoor television solutions" },
  { src: "/catalog/catalog-17.jpg", alt: "Smart Living Group company services" },
  { src: "/catalog/catalog-18.jpg", alt: "Smart Living Group logo" },
];
const TOTAL_PAGES = pages.length;

export function CatalogViewer() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((p) => (p === null ? p : (p + 1) % TOTAL_PAGES)), []);
  const prev = useCallback(() => setActive((p) => (p === null ? p : (p - 1 + TOTAL_PAGES) % TOTAL_PAGES)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, next, prev]);

  return (
    <>
      <div className="catalogPages">
        {pages.map((page, index) => (
          <button
            type="button"
            className="catalogPage"
            key={page.src}
            onClick={() => setActive(index)}
            aria-label={`Open catalog page ${index + 1}: ${page.alt}`}
          >
            <img src={page.src || "/placeholder.svg"} alt={page.alt} loading="lazy" />
            <span className="catalogPageNum">{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="catalogActions">
        <a
          className="button secondary"
          href="https://myfiles.formadoc.com/sharing/273c8e3c"
          target="_blank"
          rel="noreferrer"
        >
          Open Full Catalog <ArrowRight size={18} />
        </a>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Catalog viewer" onClick={close}>
          <button type="button" className="lightboxClose" onClick={close} aria-label="Close catalog viewer">
            <X size={24} />
          </button>
          <button
            type="button"
            className="lightboxNav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous page"
          >
            <ChevronLeft size={28} />
          </button>
          <img
            className="lightboxImage"
            src={pages[active].src || "/placeholder.svg"}
            alt={pages[active].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightboxNav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next page"
          >
            <ChevronRight size={28} />
          </button>
          <span className="lightboxCount">{active + 1} / {TOTAL_PAGES}</span>
        </div>
      )}
    </>
  );
}
