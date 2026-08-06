"use client";

import Image from "next/image";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

const pages = [
  {
    src: "/catalog/catalog-18.jpg",
    alt: "The Smart Living Group logo and outdoor living technology brand identity",
  },
  {
    src: "/catalog/catalog-04.jpg",
    alt: "The Smart Living Group luxury outdoor automation overview in Dallas-Fort Worth",
  },
  {
    src: "/catalog/catalog-17.jpg",
    alt: "The Smart Living Group outdoor audio, lighting, television and shade services",
  },
  {
    src: "/catalog/catalog-10.jpg",
    alt: "Reasons clients choose The Smart Living Group for outdoor technology installation",
  },
  {
    src: "/catalog/catalog-15.jpg",
    alt: "The Smart Living Group vision for luxury outdoor living in Dallas-Fort Worth",
  },
  {
    src: "/catalog/catalog-16.jpg",
    alt: "Outdoor audio systems and outdoor television installation solutions",
  },
  {
    src: "/catalog/catalog-02.jpg",
    alt: "Automated outdoor shades and landscape lighting solutions for luxury patios",
  },
  {
    src: "/catalog/catalog-09.jpg",
    alt: "Outdoor speaker coverage plan around a luxury residential swimming pool",
  },
  {
    src: "/catalog/catalog-07.jpg",
    alt: "Outdoor audio installation for a luxury pool home in Dallas-Fort Worth",
  },
  {
    src: "/catalog/catalog-06.jpg",
    alt: "Landscape outdoor speaker placement in a modern residential backyard",
  },
  {
    src: "/catalog/catalog-11.jpg",
    alt: "Patio, garden and landscape outdoor audio systems for residential properties",
  },
  {
    src: "/catalog/catalog-13.jpg",
    alt: "Bollard outdoor speaker installed discreetly inside a landscaped garden",
  },
  {
    src: "/catalog/catalog-14.jpg",
    alt: "Landscape and ambisonic bollard outdoor audio systems",
  },
  {
    src: "/catalog/catalog-08.jpg",
    alt: "Specialty outdoor speaker installation for premium backyard audio",
  },
  {
    src: "/catalog/catalog-05.jpg",
    alt: "Specialty, line array and concert series outdoor speaker options",
  },
  {
    src: "/catalog/catalog-26.jpg",
    alt: "Samsung outdoor television installed above a stone patio fireplace",
  },
  {
    src: "/catalog/catalog-03.jpg",
    alt: "Samsung Terrace outdoor television installed on a covered patio",
  },
  {
    src: "/catalog/catalog-01.jpg",
    alt: "Samsung Terrace outdoor televisions for full sun and partial sun locations",
  },
  {
    src: "/catalog/catalog-27.jpg",
    alt: "Samsung Terrace outdoor television with soundbar mounted on a stone wall",
  },
  {
    src: "/catalog/catalog-12.jpg",
    alt: "Outdoor landscape lighting design and installation services",
  },
  {
    src: "/catalog/catalog-20.jpg",
    alt: "Professional outdoor landscape lighting solutions in Dallas-Fort Worth",
  },
  {
    src: "/catalog/catalog-24.jpg",
    alt: "Outdoor RGB and landscape lighting illuminating modern exterior steps",
  },
  {
    src: "/catalog/catalog-21.jpg",
    alt: "Path, niche, bullet uplight and marker landscape lighting fixtures",
  },
  {
    src: "/catalog/catalog-23.jpg",
    alt: "Motorized outdoor shades installed on a modern luxury home",
  },
  {
    src: "/catalog/catalog-19.jpg",
    alt: "Motorized outdoor shades installed on a modern poolside home",
  },
  {
    src: "/catalog/catalog-22.jpg",
    alt: "Automated outdoor shades installed across a covered residential patio",
  },
  {
    src: "/catalog/catalog-25.jpg",
    alt: "Outdoor shade design, professional installation and customer service process",
  },
];

const totalPages = pages.length;

export function CatalogViewer() {
  const [activePage, setActivePage] =
    useState<number | null>(null);

  const closeViewer = useCallback(() => {
    setActivePage(null);
  }, []);

  const showNextPage = useCallback(() => {
    setActivePage((currentPage) => {
      if (currentPage === null) {
        return null;
      }

      return Math.min(currentPage + 1, totalPages - 1);
    });
  }, []);

  const showPreviousPage = useCallback(() => {
    setActivePage((currentPage) => {
      if (currentPage === null) {
        return null;
      }

      return Math.max(currentPage - 1, 0);
    });
  }, []);

  useEffect(() => {
    if (activePage === null) {
      return;
    }

    const handleKeyboard = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        showNextPage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousPage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard,
      );
    };
  }, [
    activePage,
    closeViewer,
    showNextPage,
    showPreviousPage,
  ]);

  return (
    <>
      <div
        className="catalogBookWrap"
        aria-label="The Smart Living Group service catalog"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
          width: "100%",
          marginTop: "44px",
        }}
      >
        <button
          type="button"
          className="catalogBook"
          onClick={() => setActivePage(0)}
          aria-label={`Open The Smart Living Group catalog, ${totalPages} pages`}
          style={{
            position: "relative",
            display: "block",
            width: "min(90vw, 360px)",
            aspectRatio: "8.5 / 11",
            padding: "0",
            overflow: "hidden",
            borderRadius: "6px 16px 16px 6px",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            background: "rgba(255, 255, 255, 0.04)",
            boxShadow:
              "0 30px 70px rgba(0, 0, 0, 0.5), inset 22px 0 34px -22px rgba(0,0,0,0.85)",
            cursor: "pointer",
          }}
        >
          <Image
            src={pages[0].src}
            alt={`Catalog cover: ${pages[0].alt}`}
            fill
            priority
            sizes="(max-width: 640px) 90vw, 360px"
            style={{ objectFit: "contain" }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "14px",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.12) 60%, transparent)",
              borderRight: "1px solid rgba(255,255,255,0.07)",
            }}
          />
          <span
            className="catalogBookHint"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "18px",
              transform: "translateX(-50%)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "rgba(0, 0, 0, 0.62)",
              backdropFilter: "blur(6px)",
              color: "white",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            <BookOpen size={18} aria-hidden="true" /> Open Catalog
          </span>
        </button>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.55)",
            fontSize: "13px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {totalPages} pages
        </p>
      </div>

      {activePage !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Catalog page ${activePage + 1} of ${totalPages}`}
          onClick={closeViewer}
          style={{
            position: "fixed",
            inset: "0",
            zIndex: 9999,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px 24px 70px",
            overflowX: "hidden",
            overflowY: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
            background:
              "rgba(0, 0, 0, 0.94)",
            backdropFilter: "blur(10px)",
          }}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            aria-label="Close catalog viewer"
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 4,
              display: "grid",
              placeItems: "center",
              width: "48px",
              height: "48px",
              border: "none",
              borderRadius: "999px",
              background:
                "rgba(255, 255, 255, 0.14)",
              color: "white",
              cursor: "pointer",
            }}
          >
            <X size={26} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPage();
            }}
            disabled={activePage === 0}
            aria-label="View previous catalog page"
            style={{
              position: "fixed",
              left: "16px",
              top: "50%",
              zIndex: 4,
              display: "grid",
              placeItems: "center",
              width: "52px",
              height: "52px",
              transform: "translateY(-50%)",
              border: "none",
              borderRadius: "999px",
              background:
                "rgba(255, 255, 255, 0.14)",
              color: "white",
              cursor:
                activePage === 0
                  ? "default"
                  : "pointer",
              opacity: activePage === 0 ? 0.3 : 1,
            }}
          >
            <ChevronLeft
              size={30}
              aria-hidden="true"
            />
          </button>

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            style={{
              position: "relative",
              flex: "0 0 auto",
              width: "min(88vw, 900px)",
              aspectRatio: "8.5 / 11",
              minHeight: "620px",
            }}
          >
            <Image
              key={pages[activePage].src}
              src={pages[activePage].src}
              alt={pages[activePage].alt}
              fill
              priority
              sizes="88vw"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextPage();
            }}
            disabled={activePage === totalPages - 1}
            aria-label="View next catalog page"
            style={{
              position: "fixed",
              right: "16px",
              top: "50%",
              zIndex: 4,
              display: "grid",
              placeItems: "center",
              width: "52px",
              height: "52px",
              transform: "translateY(-50%)",
              border: "none",
              borderRadius: "999px",
              background:
                "rgba(255, 255, 255, 0.14)",
              color: "white",
              cursor:
                activePage === totalPages - 1
                  ? "default"
                  : "pointer",
              opacity:
                activePage === totalPages - 1
                  ? 0.3
                  : 1,
            }}
          >
            <ChevronRight
              size={30}
              aria-hidden="true"
            />
          </button>

          <span
            aria-live="polite"
            style={{
              position: "fixed",
              bottom: "18px",
              left: "50%",
              zIndex: 4,
              transform: "translateX(-50%)",
              padding: "8px 14px",
              borderRadius: "999px",
              background:
                "rgba(255, 255, 255, 0.14)",
              color: "white",
              fontSize: "14px",
            }}
          >
            {activePage + 1} / {totalPages}
          </span>
        </div>
      )}
    </>
  );
}
