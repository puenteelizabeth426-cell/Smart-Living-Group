"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const pages = [
  { src: "/catalog/catalog-18.jpg", alt: "Smart Living Group logo" },
  { src: "/catalog/catalog-04.jpg", alt: "Smart Living Group luxury automation overview" },
  { src: "/catalog/catalog-17.jpg", alt: "Smart Living Group company services" },
  { src: "/catalog/catalog-10.jpg", alt: "Why clients choose Smart Living Group" },
  { src: "/catalog/catalog-15.jpg", alt: "Smart Living Group vision" },
  { src: "/catalog/catalog-16.jpg", alt: "Outdoor audio and outdoor television solutions" },
  { src: "/catalog/catalog-02.jpg", alt: "Automated outdoor shades and landscape lighting solutions" },
  { src: "/catalog/catalog-09.jpg", alt: "Outdoor speaker coverage plan around a swimming pool" },
  { src: "/catalog/catalog-07.jpg", alt: "Outdoor audio installation for a luxury pool home" },
  { src: "/catalog/catalog-06.jpg", alt: "Landscape outdoor speaker placement in a modern backyard" },
  { src: "/catalog/catalog-11.jpg", alt: "Patio, garden, and landscape outdoor audio systems" },
  { src: "/catalog/catalog-13.jpg", alt: "Bollard outdoor speaker in a garden" },
  { src: "/catalog/catalog-14.jpg", alt: "Landscape and ambisonic bollard outdoor audio systems" },
  { src: "/catalog/catalog-08.jpg", alt: "Specialty outdoor speaker installation" },
  { src: "/catalog/catalog-05.jpg", alt: "Specialty, line array, and concert series outdoor speakers" },
  { src: "/catalog/catalog-26.jpg", alt: "Discover outdoor TVs: Samsung outdoor TV on a stone fireplace" },
  { src: "/catalog/catalog-03.jpg", alt: "Samsung Terrace outdoor TV on a covered patio" },
  { src: "/catalog/catalog-01.jpg", alt: "Samsung Terrace outdoor TVs for full sun and partial sun" },
  { src: "/catalog/catalog-27.jpg", alt: "Samsung Terrace outdoor TV with soundbar on a stone wall" },
  { src: "/catalog/catalog-12.jpg", alt: "Discover outdoor landscape lighting" },
  { src: "/catalog/catalog-20.jpg", alt: "Expert outdoor landscape lighting solutions" },
  { src: "/catalog/catalog-24.jpg", alt: "Outdoor RGB and landscape lighting on illuminated steps" },
  { src: "/catalog/catalog-21.jpg", alt: "Path, niche, bullet uplight, and 90 degree marker landscape light fixtures" },
  { src: "/catalog/catalog-23.jpg", alt: "Discover outdoor shades on a modern home" },
  { src: "/catalog/catalog-19.jpg", alt: "Outdoor shades on a modern poolside home" },
  { src: "/catalog/catalog-22.jpg", alt: "Automated outdoor shades on a covered patio" },
  { src: "/catalog/catalog-25.jpg", alt: "Outdoor shade services: design, installation, and customer experience" },
];
const TOTAL_PAGES = pages.length;

export function CatalogViewer() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((p) => (p === null ? p : Math.min(p + 1, TOTAL_PAGES - 1))), []);
  const prev = useCallback(() => setActive((p) => (p === null ? p : Math.max(p - 1, 0))), []);

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
      <div className="catalogBookWrap">
        <button
          type="button"
          className="catalogBook"
          onClick={() => setActive(0)}
          aria-label="Open the Smart Living Group catalog"
        >
          <span className="catalogBookSpine" aria-hidden="true" />
          <img src={pages[0].src || "/placeholder.svg"} alt={`Catalog cover: ${pages[0].alt}`} />
          <span className="catalogBookHint">
            <BookOpen size={18} /> Open Catalog
          </span>
        </button>
        <p className="catalogBookMeta">{TOTAL_PAGES} pages</p>
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
            disabled={active === 0}
          >
            <ChevronLeft size={28} />
          </button>
          <div className="lightboxStage" onClick={(e) => e.stopPropagation()}>
            <img
              key={active}
              className="lightboxImage pageFlip"
              src={pages[active].src || "/placeholder.svg"}
              alt={pages[active].alt}
            />
          </div>
          <button
            type="button"
            className="lightboxNav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next page"
            disabled={active === TOTAL_PAGES - 1}
          >
            <ChevronRight size={28} />
          </button>
          <span className="lightboxCount">{active + 1} / {TOTAL_PAGES}</span>
        </div>
      )}
    </>
  );
}
