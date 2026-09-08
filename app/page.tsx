import Image from "next/image";
import Link from "next/link";
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
import { SiteNav } from "./site-nav";
import { serviceTopics } from "./services-data";

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
    eyebrow: "Sound that blends into the yard",
    image: "/projects/project-09.webp",
    imageAlt:
      "Landscape speaker concealed in a planting bed for even outdoor audio coverage",
    copy:
      "Landscape speakers and buried subwoofers positioned for even coverage, so music sounds balanced across the whole space instead of loud at the source and thin everywhere else.",
    points: [
      "Even, low-distortion coverage",
      "Speakers concealed in planting beds",
      "Separate zones for patio, pool and garden",
    ],
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    eyebrow: "Architecture after dark",
    image: "/projects/project-03.webp",
    imageAlt:
      "Landscape lighting grazing stonework and uplighting trees at a residential property",
    copy:
      "Fixtures placed and aimed to graze stone, uplight trees and wash façades — with a warm, consistent color temperature and glare shielded away from where people sit and walk.",
    points: [
      "Glare-controlled beam aiming",
      "Warm, consistent color temperature",
      "Corrosion-resistant low-voltage fixtures",
    ],
  },
  {
    icon: Tv,
    title: "Outdoor TVs",
    eyebrow: "Entertainment that reads in daylight",
    image: "/projects/service-outdoor-tv.png",
    imageAlt:
      "Weather-rated television mounted on a stone wall in a covered patio",
    copy:
      "Weather-rated displays sized to the viewing distance and mounted for daylight visibility, with cabling concealed in the wall and a single remote for the whole setup.",
    points: [
      "Weather-rated, daylight-visible screens",
      "Cabling concealed in-wall",
      "One remote for the whole system",
    ],
  },
  {
    icon: Blinds,
    title: "Motorized Shades",
    eyebrow: "Shade, privacy and cooler evenings",
    image: "/projects/service-motorized-shades.png",
    imageAlt:
      "Motorized roller shades on a covered terrace providing sun control and privacy",
    copy:
      "Motorized screens that hold off low sun and afternoon heat, close for privacy, and raise or lower on a schedule or alongside the rest of your outdoor scenes.",
    points: [
      "Sun and heat control",
      "Privacy on demand",
      "Scheduled and scene-based control",
    ],
  },
];

const process = [
  {
    title: "Consultation",
    image: "/projects/process-consultation.png",
    imageAlt:
      "Design blueprints and a lighting layout on a tablet during a luxury outdoor project consultation",
    copy: "We listen, evaluate the property and define the goals for the project.",
  },
  {
    title: "Design",
    image: "/projects/process-design.png",
    imageAlt:
      "Lighting and audio layout drawings with warm material swatches for a luxury outdoor design",
    copy: "We create a clean plan for audio, lighting, displays, shades and control.",
  },
  {
    title: "Installation",
    image: "/projects/process-installation.png",
    imageAlt:
      "Clean professional installation of a discreet landscape speaker and low-voltage lighting",
    copy: "Concealed cabling, weather-sealed connections and tidy terminations, installed to protect your landscaping.",
  },
  {
    title: "Ongoing Support",
    image: "/projects/process-support.png",
    imageAlt:
      "Smartphone showing a smart-home control app in a luxury outdoor living space at dusk",
    copy: "We help keep the system simple, updated and ready to use.",
  },
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
   P��GINA PRINCIPAL
========================================================= */

export default function Home() {
  return (
    <>
      <main>
        <SiteNav />

        <section id="home" className="hero">
          <div className="heroMedia">
            <video
              className="heroVideo"
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/showcase-1-poster.jpg"
              aria-hidden="true"
            >
              <source src="/videos/showcase-1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="heroOverlay" />

          <div className="heroContent reveal">
            <p className="eyebrow">
              Designed Outdoor Living Systems
            </p>

            <h1>Outdoor spaces that feel finished, not wired together.</h1>

            <p className="heroText">
              The Smart Living Group designs and installs outdoor audio,
              lighting, television and shade systems that read as part of the
              architecture — discreet, weather-resistant and simple to live
              with.
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

            <div className="heroCards">
              {[
                ["Designed to the Site", "Placement planned around your architecture and landscape"],
                ["Clean Installation", "Concealed cabling and weather-sealed connections"],
                ["Simple Control", "One tap for lighting, sound and shade scenes"],
              ].map(([title, text]) => (
                <div className="miniCard" key={title}>
                  <Sparkles size={18} aria-hidden="true" />
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="showcase section">
          <div className="sectionHeader center">
            <p className="eyebrow">See It In Motion</p>

            <h2>Real projects, brought to life.</h2>

            <p className="catalogIntro">
              A closer look at the outdoor lighting, audio and living spaces we
              design and install across Dallas–Fort Worth.
            </p>
          </div>

          <div className="showcaseGrid">
            <figure className="showcaseItem">
              <video
                className="showcaseVideo"
                controls
                playsInline
                preload="metadata"
                poster="/videos/showcase-1-poster.jpg"
              >
                <source src="/videos/showcase-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption>
                <span className="showcaseTitle">Outdoor audio system</span>
                <span className="showcaseDescription">
                  Weather-rated speakers placed around the patio and yard so
                  music stays balanced and clear from every seat — no single
                  loud spot, no dead zones. Everything is tuned to blend into
                  the landscape and controlled from a single tap.
                </span>
              </figcaption>
            </figure>

            <figure className="showcaseItem">
              <video
                className="showcaseVideo"
                controls
                playsInline
                preload="metadata"
                poster="/videos/showcase-2-poster.jpg"
              >
                <source src="/videos/showcase-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption>
                <span className="showcaseTitle">Outdoor kitchen</span>
                <span className="showcaseDescription">
                  A fully built outdoor kitchen designed for everyday cooking
                  and entertaining, with integrated task lighting over the prep
                  and grill areas and warm ambient lighting that makes the space
                  usable and inviting long after sunset.
                </span>
              </figcaption>
            </figure>
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
            We plan the layout, choose equipment suited to the environment and
            install it carefully, so the finished space feels intentional,
            holds up outdoors and stays easy to use.
          </p>
        </section>

        <section id="services" className="section services">
          <div className="sectionHeader">
            <p className="eyebrow dark">Services</p>

            <h2>How each outdoor system is designed and built.</h2>
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

        <section id="explore" className="section topics">
          <div className="sectionHeader center">
            <p className="eyebrow dark">Explore Services</p>

            <h2>Find the right outdoor living solution.</h2>

            <p className="catalogIntro">
              Explore how we approach lighting, audio, entertainment and shade.
              Select a service to see how it is planned, installed and lived
              with.
            </p>
          </div>

          <div className="topicGrid">
            {serviceTopics.map((topic) => (
              <Link
                href={`/services/${topic.slug}`}
                className="topicCard"
                key={topic.slug}
                aria-label={`Learn about ${topic.name}`}
              >
                <div className="topicMedia">
                  <Image
                    src={topic.image}
                    alt={topic.imageAlt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="topicBody">
                  <h3>{topic.name}</h3>
                  <span>
                    {topic.tagline}
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="why section">
          <div className="whyHeader">
            <p className="eyebrow dark">Why The Smart Living Group</p>

            <h2>
              Designed like a finish. Installed like infrastructure.
            </h2>
          </div>

          <div className="whyRow">
            <div className="whyCard">
              <div className="whyIcon">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>Professional Installation</strong>
                <span>Concealed cabling, weather-sealed and built to last.</span>
              </div>
            </div>

            <div className="whyCard">
              <div className="whyIcon">
                <Sparkles size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>Considered Detail</strong>
                <span>Placement, sightlines and cable paths planned in advance.</span>
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

        <section id="products" className="brands section">
          <p className="eyebrow dark">Equipment</p>

          <h2>Built around proven audio, lighting and control brands.</h2>

          <div className="brandImage">
            <Image
              src="/projects/products-showcase.png"
              alt="Outdoor audio, landscape lighting and smart control equipment from established technology brands"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          <div className="brandWall">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </section>

        <section id="process" className="process section">
          <div className="sectionHeader center">
            <p className="eyebrow dark">Process</p>

            <h2>
              A simple path from idea to finished outdoor experience.
            </h2>
          </div>

          <div className="processGrid">
            {process.map((item, index) => (
              <div className="processCard" key={item.title}>
                <div className="processImage">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{item.title}</h3>

                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div>
            <p className="eyebrow">Start Your Project</p>

            <h2>Ready to plan your outdoor space?</h2>

            <p>
              Request a consultation and we&apos;ll walk your property, discuss
              how you use it and outline a clear plan for audio, lighting,
              television and shade.
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
              href="mailto:info@smartliving-texas.com"
              className="contactButton"
              aria-label="Email The Smart Living Group"
            >
              <Mail aria-hidden="true" />
              info@smartliving-texas.com
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

          <p>The Smart Living Group</p>

          <p>
            Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized
            Shades
          </p>
        </footer>
      </main>
    </>
  );
}
