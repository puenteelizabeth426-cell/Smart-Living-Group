"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Pages 1-20 are live. Pages 21-27 will be added once uploaded.
const catalogPages = [
  { src: "/catalog/catalog-01.jpg", alt: "Motorized outdoor shades service overview" },
  { src: "/catalog/catalog-02.jpg", alt: "Automated outdoor shades for a luxury patio" },
  { src: "/catalog/catalog-03.jpg", alt: "Motorized shade installation at a modern pool home" },
  { src: "/catalog/catalog-04.jpg", alt: "Outdoor landscape step lighting" },
  { src: "/catalog/catalog-05.jpg", alt: "Outdoor lighting fixture options" },
  { src: "/catalog/catalog-06.jpg", alt: "Motorized shades for a covered outdoor kitchen" },
  { src: "/catalog/catalog-07.jpg", alt: "Landscape lighting design examples" },
  { src: "/catalog/catalog-08.jpg", alt: "Architectural landscape lighting at night" },
  { src: "/catalog/catalog-09.jpg", alt: "Outdoor televisions for full sun and partial sun" },
  { src: "/catalog/catalog-10.jpg", alt: "Samsung Terrace outdoor television installation" },
  { src: "/catalog/catalog-11.jpg", alt: "Smart Living Group logo" },
  { src: "/catalog/catalog-12.jpg", alt: "Smart Living Group luxury automation overview" },
  { src: "/catalog/catalog-13.jpg", alt: "Smart Living Group company services" },
  { src: "/catalog/catalog-14.jpg", alt: "Why clients choose Smart Living Group" },
  { src: "/catalog/catalog-15.jpg", alt: "Smart Living Group vision" },
  { src: "/catalog/catalog-16.jpg", alt: "Outdoor audio and outdoor television solutions" },
  { src: "/catalog/catalog-17.jpg", alt: "Outdoor shades and outdoor lighting solutions" },
  { src: "/catalog/catalog-18.jpg", alt: "Samsung Terrace outdoor TV on a covered patio" },
  { src: "/catalog/catalog-19.jpg", alt: "Outdoor TV installation over a stone fireplace" },
  { src: "/catalog/catalog-20.jpg", alt: "Premium outdoor audio system options" },
];

const TOTAL = catalogPages.length;

export function CatalogViewer() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((p) => (p === null ? p : (p + 1) % TOTAL)), []);
  const prev = useCallback(() => setActive((p) => (p === null ? p : (p - 1 + TOTAL) % TOTAL)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="catalogPages">
        {catalogPages.map((page, index) => (
          <button
            type="button"
            className="catalogPage"
            key={page.src}
            onClick={() => setActive(index)}
            aria-label={`Open catalog page ${index + 1}: ${page.alt}`}
          >
            <Image
              src={page.src || "/placeholder.svg"}
              alt={page.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="catalogPageImg"
              loading="lazy"
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
          <div className="lightboxImageWrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={catalogPages[active].src || "/placeholder.svg"}
              alt={catalogPages[active].alt}
              fill
              sizes="90vw"
              className="lightboxImage"
              priority
            />
          </div>
          <button
            type="button"
            className="lightboxNav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next catalog page"
          >
            <ChevronRight size={28} />
          </button>
          <span className="lightboxCount">{active + 1} / {TOTAL}</span>
        </div>
      )}
    </>
  );
}
