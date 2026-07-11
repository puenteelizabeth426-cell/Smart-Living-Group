import { Mail, Phone, ArrowRight, ShieldCheck, Sparkles, Waves, Lightbulb, Tv, Blinds, MapPin, CheckCircle2 } from "lucide-react";

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
        <a href="#home" className="brand brandLogo" aria-label="Smart Living Group home">
          <img src="/projects/logo.webp" alt="Smart Living Group" className="chromeLogo" />
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#catalog">Catalog</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="tel:+1XXXXXXXXXX">Call Now</a>
      </nav>

      <section id="home" className="hero">
        <div className="heroMedia">
          <img src="/projects/project-01.webp" alt="Luxury outdoor kitchen with premium lighting" />
        </div>
        <div className="heroOverlay" />
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

      <section className="split section">
        <div className="splitImage"><img src="/projects/project-10.webp" alt="Outdoor lighting project" /></div>
        <div className="splitContent">
          <p className="eyebrow dark">Why Smart Living Group</p>
          <h2>Designed like a luxury finish, installed like infrastructure.</h2>
          <p>Every detail matters: fixture placement, speaker coverage, wire management, control simplicity and the way the space feels at night.</p>
          <div className="featureList">
            <div><ShieldCheck /><strong>Professional Installation</strong><span>Clean, reliable, and built to last.</span></div>
            <div><Sparkles /><strong>Premium Experience</strong><span>Elegant design without complicated controls.</span></div>
            <div><MapPin /><strong>DFW Service Area</strong><span>Serving luxury homes across Dallas–Fort Worth.</span></div>
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
        <div className="catalogCard">
          <p className="eyebrow">Catalog</p>
          <h2>Explore Smart Living Group services.</h2>
          <p>Add your PDF as <strong>public/catalog.pdf</strong> and this section will open it directly for clients.</p>
          <a className="button primary" href="/catalog.pdf">Open Catalog <ArrowRight size={18} /></a>
        </div>
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
          <a href="tel:+1XXXXXXXXXX" className="contactButton"><Phone /> Call Smart Living Group</a>
          <a href="mailto:Smartlivingroup@gmail.com" className="contactButton"><Mail /> Smartlivingroup@gmail.com</a>
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
