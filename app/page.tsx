import { Mail, Phone, ArrowRight, ShieldCheck, Sparkles, Waves, Lightbulb, Tv, Blinds, MapPin, CheckCircle2, Instagram } from "lucide-react";
import { CatalogViewer } from "./catalog-viewer";

const images = Array.from({ length: 18 }, (_, i) => `/projects/project-${String(i + 1).padStart(2, "0")}.webp`);

const services = [
  {
    icon: Waves,
    title: "Outdoor Audio",
    eyebrow: "Hidden sound. Luxury feel.",
    image: "/projects/project-09.webp",
    copy: "Landscape speakers, subwoofers and premium audio zones designed to disappear into the environment while delivering powerful, balanced sound.",
    points: ["Landscape speakers", "Pool & patio audio", "Multi-zone control"]
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    eyebrow: "Architecture after dark.",
    image: "/projects/project-03.webp",
    copy: "Elegant lighting design for homes, gardens, entries, pathways, trees, stonework, water features and outdoor entertaining spaces.",
    points: ["Pathway lighting", "Tree & wall accents", "Smart lighting control"]
  },
  {
    icon: Tv,
    title: "Outdoor TVs",
    eyebrow: "Entertainment outside.",
    image: "/projects/project-01.webp",
    copy: "Outdoor-rated displays, clean mounting, concealed wiring and simple control for patios, kitchens, pergolas and pool areas.",
    points: ["Outdoor-rated TVs", "Concealed wiring", "Clean control systems"]
  },
  {
    icon: Blinds,
    title: "Motorized Shades",
    eyebrow: "Comfort with one touch.",
    image: "/projects/project-02.webp",
    copy: "Motorized shade systems for privacy, sun control and comfort, integrated with smart home scenes and outdoor living spaces.",
    points: ["Sun & heat control", "Privacy solutions", "Smart scene integration"]
  }
];

const process = ["Consultation", "Design", "Installation", "Ongoing Support"];
const brands = ["Sonance", "Coastal Source", "Lutron", "Samsung", "Future Automation", "MantelMount", "Savant", "Josh.ai"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand" aria-label="Smart Living Group home">
          <img src="/projects/logo.webp" alt="Smart Living Group logo" />
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#catalog">Catalog</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="tel:+18175103103">Call Now</a>
      </nav>

      <section id="home" className="hero">
        <div className="heroMedia">
          <img src="/projects/project-01.webp" alt="Luxury outdoor kitchen with premium lighting" />
        </div>
        <div className="heroOverlay" />
        <img className="heroLogo" src="/projects/logo.webp" alt="The Smart Living Group logo — The Art of Perfect Living" />
        <div className="heroContent reveal">
          <p className="eyebrow">Dallas–Fort Worth Luxury Outdoor Technology</p>
          <h1>Luxury Outdoor Living. Perfectly Designed.</h1>
          <p className="heroText">Smart Living Group designs and installs outdoor audio, landscape lighting, outdoor TVs and motorized shades for elevated residential spaces.</p>
          <div className="heroActions">
            <a href="#contact" className="button primary">Request Consultation <ArrowRight size={18} /></a>
            <a href="#catalog" className="button secondary">View Catalog</a>
          </div>
        </div>
        <div className="heroCards">
          {[
            ["Premium Design", "Custom layouts for every property"],
            ["Clean Installation", "Hidden wiring and luxury finish"],
            ["Smart Control", "Simple scenes from phone or remote"]
          ].map(([title, text]) => (
            <div className="miniCard" key={title}>
              <Sparkles size={18} />
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="intro section">
        <div>
          <p className="eyebrow dark">The Art of Perfect Living</p>
          <h2>Outdoor spaces designed to look beautiful, sound incredible and feel effortless.</h2>
        </div>
        <p>We combine premium products, thoughtful design and professional installation to create outdoor environments that feel finished, intentional and easy to control.</p>
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
                <div className="serviceImage"><img src={service.image} alt={service.title} /></div>
                <div className="serviceBody">
                  <div className="serviceIcon"><Icon size={22} /></div>
                  <p className="eyebrow dark">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}><CheckCircle2 size={16} />{point}</li>)}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="why section">
        <div className="whyHeader">
          <p className="eyebrow dark">Why Smart Living Group</p>
          <h2>Designed like a luxury finish, installed like infrastructure.</h2>
        </div>
        <div className="whyRow">
          <div className="whyCard">
            <div className="whyIcon"><ShieldCheck size={22} /></div>
            <div><strong>Professional Installation</strong><span>Clean, reliable, and built to last.</span></div>
          </div>
          <div className="whyCard">
            <div className="whyIcon"><Sparkles size={22} /></div>
            <div><strong>Premium Experience</strong><span>Elegant design without complicated controls.</span></div>
          </div>
          <div className="whyCard">
            <div className="whyIcon"><MapPin size={22} /></div>
            <div><strong>DFW Service Area</strong><span>Serving homes and businesses across Dallas–Fort Worth.</span></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallerySection">
        <div className="sectionHeader center">
          <p className="eyebrow dark">Portfolio</p>
          <h2>Real project photography. No stock look.</h2>
        </div>
        <div className="gallery">
          {images.map((src, index) => (
            <a href={src} className="galleryItem" key={src} target="_blank" rel="noreferrer">
              <img src={src} alt={`Smart Living Group project ${index + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <section id="catalog" className="catalog section">
        <div className="sectionHeader center">
          <p className="eyebrow">Catalog</p>
          <h2>Explore Smart Living Group services.</h2>
          <p className="catalogIntro">Browse our full range of outdoor audio, landscape lighting, outdoor TVs and motorized shade solutions. Open the book and flip through page by page.</p>
        </div>
        <CatalogViewer />
      </section>

      <section className="brands section">
        <p className="eyebrow dark">Premium Products</p>
        <h2>Built around trusted luxury technology brands.</h2>
        <div className="brandWall">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </section>

      <section className="process section">
        <div className="sectionHeader center">
          <p className="eyebrow dark">Process</p>
          <h2>A simple path from idea to finished outdoor experience.</h2>
        </div>
        <div className="processGrid">
          {process.map((item, index) => (
            <div className="processCard" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>{index === 0 ? "We listen, evaluate the property and define the goal." : index === 1 ? "We create a clean plan for audio, lighting, displays, shades and control." : index === 2 ? "Our installation focuses on clean detail, reliability and premium finish." : "We help keep the system simple, updated and ready to use."}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2>Ready to elevate your outdoor space?</h2>
          <p>Request a consultation for outdoor audio, landscape lighting, outdoor TVs or motorized shades.</p>
        </div>
        <div className="contactActions">
          <a href="tel:+18175103103" className="contactButton"><Phone /> (817) 510-3103</a>
          <a href="mailto:Smartlivingroup@gmail.com" className="contactButton"><Mail /> Smartlivingroup@gmail.com</a>
          <a href="https://instagram.com/the_smart_living_group" target="_blank" rel="noreferrer" className="contactButton"><Instagram /> @the_smart_living_group</a>
        </div>
      </section>

      <footer>
        <img src="/projects/logo.webp" alt="Smart Living Group logo" />
        <p>Smart Living Group — a S&amp;L Company</p>
        <p>Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized Shades</p>
      </footer>
    </main>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Outdoor Living Dallas | Smart Living Group",
  description:
    "Luxury outdoor audio, landscape lighting, outdoor TVs and motorized shades throughout Dallas-Fort Worth.",

  keywords: [
    "Outdoor Audio Dallas",
    "Landscape Lighting Dallas",
    "Luxury Outdoor Living",
    "Outdoor TV Installation",
    "Motorized Shades Dallas",
    "Outdoor Speakers Dallas",
    "Dallas Smart Home"
  ],
};                                                                 import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Audio & Landscape Lighting Services Dallas",
  description:
    "Professional outdoor audio, landscape lighting, outdoor TVs and motorized shade installation in Dallas-Fort Worth.",

  keywords: [
    "Outdoor Audio",
    "Landscape Lighting",
    "Outdoor TV",
    "Motorized Shades",
    "Outdoor Speakers Dallas"
  ],
};