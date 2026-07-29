"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  { src: "/projects/catalog/catalog-01.jpg", alt: "Motorized outdoor shades service overview" },
  { src: "/projects/catalog/catalog-02.jpg", alt: "Automated outdoor shades for a luxury patio" },
  { src: "/projects/catalog/catalog-03.jpg", alt: "Motorized shade installation at a modern pool home" },
  { src: "/projects/catalog/catalog-04.jpg", alt: "Outdoor landscape step lighting" },
  { src: "/projects/catalog/catalog-05.jpg", alt: "Outdoor lighting fixture options" },
  { src: "/projects/catalog/catalog-06.jpg", alt: "Motorized shades for a covered outdoor kitchen" },
  { src: "/projects/catalog/catalog-07.jpg", alt: "Landscape lighting design examples" },
  { src: "/projects/catalog/catalog-08.jpg", alt: "Architectural landscape lighting at night" },
  { src: "/projects/catalog/catalog-09.jpg", alt: "Outdoor televisions for full sun and partial sun" },
  { src: "/projects/catalog/catalog-10.jpg", alt: "Samsung Terrace outdoor television installation" },
  { src: "/projects/catalog/catalog-11.jpg", alt: "Smart Living Group logo" },
  { src: "/projects/catalog/catalog-12.jpg", alt: "Smart Living Group luxury automation overview" },
  { src: "/projects/catalog/catalog-13.jpg", alt: "Smart Living Group company services" },
  { src: "/projects/catalog/catalog-14.jpg", alt: "Why clients choose Smart Living Group" },
  { src: "/projects/catalog/catalog-15.jpg", alt: "Smart Living Group vision" },
  { src: "/projects/catalog/catalog-16.jpg", alt: "Outdoor audio and outdoor television solutions" },
  { src: "/projects/catalog/catalog-17.jpg", alt: "Outdoor shades and outdoor lighting solutions" },
  { src: "/projects/catalog/catalog-18.jpg", alt: "Samsung Terrace outdoor TV on a covered patio" },
  { src: "/projects/catalog/catalog-19.jpg", alt: "Outdoor TV installation over a stone fireplace" },
  { src: "/projects/catalog/catalog-20.jpg", alt: "Premium outdoor audio system options" },
  { src: "/projects/catalog/catalog-21.jpg", alt: "Specialty outdoor speaker installation" },
  { src: "/projects/catalog/catalog-22.jpg", alt: "Landscape bollard outdoor audio systems" },
  { src: "/projects/catalog/catalog-23.jpg", alt: "Bollard outdoor speaker in a garden" },
  { src: "/projects/catalog/catalog-24.jpg", alt: "Patio, garden, and landscape outdoor audio systems" },
  { src: "/projects/catalog/catalog-25.jpg", alt: "Landscape speaker placement in a modern backyard" },
  { src: "/projects/catalog/catalog-26.jpg", alt: "Outdoor audio installation for a luxury pool home" },
  { src: "/projects/catalog/catalog-27.jpg", alt: "Outdoor speaker coverage plan around a swimming pool" },
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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
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
            aria-label={`Open catalog page ${index + 1} of ${TOTAL_PAGES}: ${page.alt}`}
          >
            <Image
              src={page.src}
              alt={page.alt}
              width={1000}
              height={1294}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="catalogPageNum">{index + 1}</span>
          </button>
        ))}
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
            aria-label="Previous catalog page"
          >
            <ChevronLeft size={28} />
          </button>
          <Image
            className="lightboxImage"
            src={pages[active].src}
            alt={pages[active].alt}
            width={1400}
            height={1812}
            priority
            sizes="(max-width: 768px) 92vw, 880px"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightboxNav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next catalog page"
          >
            <ChevronRight size={28} />
          </button>
          <span className="lightboxCount" aria-live="polite">{active + 1} / {TOTAL_PAGES}</span>
        </div>
      )}
    </>
  );
}
