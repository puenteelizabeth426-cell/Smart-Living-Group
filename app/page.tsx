import Image from "next/image";
import {
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Waves,
  Lightbulb,
  Tv,
  Blinds,
  MapPin,
  CheckCircle2,
  Instagram,
} from "lucide-react";
import { CatalogViewer } from "./catalog-viewer";

/* =========================================================
   GALERÍA Y DESCRIPCIONES SEO DE LAS IMÁGENES
========================================================= */

const galleryItems = [
  {
    src: "/projects/project-01.webp",
    alt: "Luxury outdoor kitchen with professional lighting and outdoor entertainment in Dallas-Fort Worth",
  },
  {
    src: "/projects/project-02.webp",
    alt: "Motorized patio shades providing sun protection and privacy for a Dallas outdoor living area",
  },
  {
    src: "/projects/project-03.webp",
    alt: "Professional landscape lighting illuminating palm trees and architecture at a luxury Dallas property",
  },
  {
    src: "/projects/project-04.webp",
    alt: "Outdoor landscape lighting installation highlighting pathways and garden features in North Texas",
  },
  {
    src: "/projects/project-05.webp",
    alt: "Premium outdoor speaker blended discreetly into residential landscaping",
  },
  {
    src: "/projects/project-06.webp",
    alt: "Luxury patio audio system with weather-resistant outdoor speakers in Dallas-Fort Worth",
  },
  {
    src: "/projects/project-07.webp",
    alt: "Architectural outdoor lighting installation for a modern residential property",
  },
  {
    src: "/projects/project-08.webp",
    alt: "Landscape speaker installation designed for balanced backyard audio coverage",
  },
  {
    src: "/projects/project-09.webp",
    alt: "Hidden landscape speaker installed among plants for premium outdoor audio",
  },
  {
    src: "/projects/project-10.webp",
    alt: "Outdoor TV installation for a covered patio entertainment area",
  },
  {
    src: "/projects/project-11.webp",
    alt: "Outdoor-rated television mounted above a stone fireplace in Dallas-Fort Worth",
  },
  {
    src: "/projects/project-12.webp",
    alt: "Luxury landscape lighting illuminating trees, stone walls and pathways after dark",
  },
  {
    src: "/projects/project-13.webp",
    alt: "Modern outdoor shade system installed around a luxury swimming pool",
  },
  {
    src: "/projects/project-14.webp",
    alt: "Professional outdoor audio equipment for immersive patio and garden sound",
  },
  {
    src: "/projects/project-15.webp",
    alt: "Bollard-style outdoor speaker installed in a landscaped residential garden",
  },
  {
    src: "/projects/project-16.webp",
    alt: "Premium outdoor entertainment system for a luxury Dallas backyard",
  },
  {
    src: "/projects/project-17.webp",
    alt: "Outdoor audio coverage design for a pool, patio and landscaped backyard",
  },
  {
    src: "/projects/project-18.webp",
    alt: "Luxury outdoor living project with integrated lighting, audio and entertainment",
  },
];

/* =========================================================
   SERVICIOS
========================================================= */

const services = [
  {
    icon: Waves,
    title: "Outdoor Audio",
    eyebrow: "Hidden sound. Luxury feel.",
    image: "/projects/project-09.webp",
    imageAlt:
      "Hidden landscape speaker installation for luxury outdoor audio in Dallas-Fort Worth",
    copy:
      "Landscape speakers, subwoofers and premium audio zones designed to disappear into the environment while delivering powerful, balanced sound.",
    points: [
      "Landscape speakers",
      "Pool and patio audio",
      "Multi-zone control",
    ],
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    eyebrow: "Architecture after dark.",
    image: "/projects/project-03.webp",
    imageAlt:
      "Professional landscape lighting installation illuminating a luxury home in Dallas",
    copy:
      "Elegant lighting design for homes, gardens, entries, pathways, trees, stonework, water features and outdoor entertaining spaces.",
    points: [
      "Pathway lighting",
      "Tree and wall accents",
      "Smart lighting control",
    ],
  },
  {
    icon: Tv,
    title: "Outdoor TVs",
    eyebrow: "Entertainment outside.",
    image: "/projects/project-01.webp",
    imageAlt:
      "Outdoor TV and entertainment installation for a luxury Dallas patio",
    copy:
      "Outdoor-rated displays, clean mounting, concealed wiring and simple control for patios, kitchens, pergolas and pool areas.",
    points: [
      "Outdoor-rated TVs",
      "Concealed wiring",
      "Simple control systems",
    ],
  },
  {
    icon: Blinds,
    title: "Motorized Shades",
    eyebrow: "Comfort with one touch.",
    image: "/projects/project-02.webp",
    imageAlt:
      "Motorized outdoor patio shades installed for privacy and sun control",
    copy:
      "Motorized shade systems for privacy, sun control and comfort, integrated with smart scenes and outdoor living spaces.",
    points: [
      "Sun and heat control",
      "Privacy solutions",
      "Smart scene integration",
    ],
  },
];

const process = [
  "Consultation",
  "Design",
  "Installation",
  "Ongoing Support",
];

const brands = [
  "Sonance",
  "Coastal Source",
  "Lutron",
  "Samsung",
  "Future Automation",
  "MantelMount",
  "Savant",
  "Josh.ai",
];

/* =========================================================
   PÁGINA PRINCIPAL
========================================================= */

export default function Home() {
  return (
    <>
      <main>
        <nav className="nav" aria-label="Main navigation">
          <a
            href="#home"
            className="brand"
            aria-label="The Smart Living Group home"
          >
            <Image
              src="/projects/logo.webp"
              alt="The Smart Living Group outdoor technology company logo"
              width={180}
              height={180}
              priority
            />
          </a>

          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#catalog">Catalog</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            className="navCta"
            href="tel:+18175103103"
            aria-label="Call The Smart Living Group"
          >
            Call Now
          </a>
        </nav>

        <section id="home" className="hero">
          <div className="heroMedia">
            <Image
              src="/projects/project-01.webp"
              alt="Luxury outdoor kitchen with premium lighting and entertainment in Dallas-Fort Worth"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="heroOverlay" />

          <Image
            className="heroLogo"
            src="/projects/logo.webp"
            alt="The Smart Living Group, a S and L Company, The Art of Perfect Living"
            width={420}
            height={420}
          />

          <div className="heroContent reveal">
            <p className="eyebrow">
              Dallas–Fort Worth Luxury Outdoor Technology
            </p>

            <h1>Luxury Outdoor Living. Perfectly Designed.</h1>

            <p className="heroText">
              The Smart Living Group designs and installs outdoor audio,
              landscape lighting, outdoor TVs and motorized shades for
              elevated residential and commercial spaces.
            </p>

            <div className="heroActions">
              <a href="#contact" className="button primary">
                Request Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a href="#catalog" className="button secondary">
                View Catalog
              </a>
            </div>
          </div>

          <div className="heroCards">
            {[
              ["Premium Design", "Custom layouts for every property"],
              ["Clean Installation", "Hidden wiring and luxury finish"],
              ["Smart Control", "Simple scenes from phone or remote"],
            ].map(([title, text]) => (
              <div className="miniCard" key={title}>
                <Sparkles size={18} aria-hidden="true" />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow dark">The Art of Perfect Living</p>

            <h2>
              Outdoor spaces designed to look beautiful, sound incredible
              and feel effortless.
            </h2>
          </div>

          <p>
            We combine premium products, thoughtful design and professional
            installation to create outdoor environments that feel finished,
            intentional and easy to control.
          </p>
        </section>

        <section id="services" className="section services">
          <div className="sectionHeader">
            <p className="eyebrow dark">Services</p>

            <h2>Premium solutions for luxury outdoor living.</h2>
          </div>

          <div className="serviceGrid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="serviceCard" key={service.title}>
                  <div className="serviceImage">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="serviceBody">
                    <div className="serviceIcon">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <p className="eyebrow dark">{service.eyebrow}</p>

                    <h3>{service.title}</h3>

                    <p>{service.copy}</p>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="why section">
          <div className="whyHeader">
            <p className="eyebrow dark">Why The Smart Living Group</p>

            <h2>
              Designed like a luxury finish, installed like infrastructure.
            </h2>
          </div>

          <div className="whyRow">
            <div className="whyCard">
              <div className="whyIcon">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>Professional Installation</strong>
                <span>Clean, reliable and built to last.</span>
              </div>
            </div>

            <div className="whyCard">
              <div className="whyIcon">
                <Sparkles size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>Premium Experience</strong>
                <span>Elegant design without complicated controls.</span>
              </div>
            </div>

            <div className="whyCard">
              <div className="whyIcon">
                <MapPin size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>DFW Service Area</strong>
                <span>
                  Serving homes and businesses across Dallas–Fort Worth.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallerySection">
          <div className="sectionHeader center">
            <p className="eyebrow dark">Portfolio</p>

            <h2>Outdoor audio, lighting and entertainment projects.</h2>
          </div>

          <div className="gallery">
            {galleryItems.map((item) => (
              <a
                href={item.src}
                className="galleryItem"
                key={item.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open image: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </a>
            ))}
          </div>
        </section>

        <section id="catalog" className="catalog section">
          <div className="sectionHeader center">
            <p className="eyebrow">Catalog</p>

            <h2>Explore The Smart Living Group services.</h2>

            <p className="catalogIntro">
              Browse our full range of outdoor audio, landscape lighting,
              outdoor TVs and motorized shade solutions. View the catalog
              directly on the website and flip through it page by page.
            </p>
          </div>

          <CatalogViewer />
        </section>

        <section className="brands section">
          <p className="eyebrow dark">Premium Products</p>

          <h2>Built around trusted luxury technology brands.</h2>

          <div className="brandWall">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="sectionHeader center">
            <p className="eyebrow dark">Process</p>

            <h2>
              A simple path from idea to finished outdoor experience.
            </h2>
          </div>

          <div className="processGrid">
            {process.map((item, index) => (
              <div className="processCard" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{item}</h3>

                <p>
                  {index === 0
                    ? "We listen, evaluate the property and define the goals for the project."
                    : index === 1
                      ? "We create a clean plan for audio, lighting, displays, shades and control."
                      : index === 2
                        ? "Our installation focuses on clean detail, reliability and a premium finish."
                        : "We help keep the system simple, updated and ready to use."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div>
            <p className="eyebrow">Start Your Project</p>

            <h2>Ready to elevate your outdoor space?</h2>

            <p>
              Request a consultation for outdoor audio, landscape lighting,
              outdoor TVs or motorized shades in Dallas-Fort Worth.
            </p>
          </div>

          <div className="contactActions">
            <a
              href="tel:+18175103103"
              className="contactButton"
              aria-label="Call The Smart Living Group at 817-510-3103"
            >
              <Phone aria-hidden="true" />
              (817) 510-3103
            </a>

            <a
              href="mailto:smartlivingroup@gmail.com"
              className="contactButton"
              aria-label="Email The Smart Living Group"
            >
              <Mail aria-hidden="true" />
              smartlivingroup@gmail.com
            </a>

            <a
              href="https://instagram.com/the_smart_living_group"
              target="_blank"
              rel="noreferrer"
              className="contactButton"
              aria-label="Visit The Smart Living Group on Instagram"
            >
              <Instagram aria-hidden="true" />
              @the_smart_living_group
            </a>
          </div>
        </section>

        <footer>
          <Image
            src="/projects/logo.webp"
            alt="The Smart Living Group Dallas-Fort Worth logo"
            width={240}
            height={240}
          />

          <p>The Smart Living Group — a S&amp;L Company</p>

          <p>
            Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized
            Shades
          </p>
        </footer>
      </main>
    </>
  );