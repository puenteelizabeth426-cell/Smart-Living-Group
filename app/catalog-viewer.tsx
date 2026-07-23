"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PAGES = 27;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => `/catalog/page-${i + 1}.jpg`);

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
        {pages.map((src, index) => (
          <button
            type="button"
            className="catalogPage"
            key={src}
            onClick={() => setActive(index)}
            aria-label={`Open catalog page ${index + 1}`}
          >
            <img src={src || "/placeholder.svg"} alt={`Catalog page ${index + 1}`} loading="lazy" />
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
            src={pages[active] || "/placeholder.svg"}
            alt={`Catalog page ${active + 1}`}
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
