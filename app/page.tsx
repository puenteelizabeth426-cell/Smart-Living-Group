import {
  ArrowRight,
  AudioLines,
  Lightbulb,
  Monitor,
  PanelsTopLeft,
  Download,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Hammer,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: AudioLines,
    title: "Outdoor Audio",
    eyebrow: "Immersive Sound",
    text: "Premium landscape speakers, hidden subwoofers, patio audio, pool audio, and clean multi-zone entertainment designed for elegant outdoor spaces.",
    points: ["Hidden landscape speakers", "Pool & patio sound", "Multi-zone audio", "Clean wiring"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85"
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    eyebrow: "Nighttime Elegance",
    text: "Architectural lighting, tree uplighting, path lights, step lights, garden lighting, and refined nighttime scenes that transform the property after sunset.",
    points: ["Tree uplighting", "Path & step lighting", "Poolside ambience", "Architectural accents"],
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=85"
  },
  {
    icon: Monitor,
    title: "Outdoor TVs",
    eyebrow: "Outdoor Entertainment",
    text: "Outdoor TV installations for patios, pergolas, pools, outdoor kitchens, and game-day viewing with a clean, professional finish.",
    points: ["Patio TVs", "Pool entertainment", "Outdoor kitchens", "Weather-ready design"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85"
  },
  {
    icon: PanelsTopLeft,
    title: "Motorized Shades",
    eyebrow: "Comfort & Privacy",
    text: "Outdoor shade systems for privacy, sun protection, comfort, patios, pergolas, and elevated outdoor living.",
    points: ["Pergola shades", "Patio privacy", "Solar protection", "Luxury comfort"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85"
  }
];

const gallery = [
  ["Evening Outdoor Living", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],
  ["Poolside Ambience", "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"],
  ["Luxury Patio", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85"],
  ["Landscape Lighting", "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1200&q=85"],
  ["Outdoor Kitchen", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"],
  ["Modern Backyard", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"],
  ["Covered Patio", "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=85"],
  ["Premium Residence", "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"],
  ["Outdoor Lounge", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"]
];

const process = [
  ["01", "Consultation", "We learn your goals, outdoor space, style, and budget."],
  ["02", "Design", "We create a clean plan for audio, lighting, TV, or shades."],
  ["03", "Installation", "Our team installs with clean wiring and professional detail."],
  ["04", "Enjoy", "We walk you through the system and make sure everything feels right."]
];

const serviceAreas = [
  "Dallas", "Fort Worth", "Southlake", "Westlake", "Colleyville", "Grapevine",
  "Keller", "Frisco", "Prosper", "Plano", "Highland Park", "University Park"
];

const brands = ["Sonance", "Coastal Source", "Samsung", "Séura", "SunBriteTV", "Screen Innovations"];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#">Smart Living Group</a>
        <nav>
          <a href="#services">Services</a>
          <a href="#catalog">Catalog</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1900&q=85">
          <source src="https://cdn.coverr.co/videos/coverr-modern-house-with-pool-1854/1080p.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Luxury Outdoor Living</p>
          <h1>Luxury Outdoor Living, Perfectly Designed.</h1>
          <p>
            Premium outdoor audio, landscape lighting, outdoor TVs, and motorized shades
            crafted for exceptional outdoor spaces in Dallas–Fort Worth.
          </p>
          <div className="actions">
            <a className="button gold" href="#contact">Request Consultation <ArrowRight size={17} /></a>
            <a className="button glass" href="#catalog">View Catalog</a>
          </div>
        </div>
      </section>

      <section className="intro section">
        <p className="eyebrow">Smart Living Group</p>
        <h2>Outdoor spaces designed to feel elegant, comfortable, and unforgettable.</h2>
        <p>
          We transform patios, pools, pergolas, gardens, and outdoor kitchens into refined spaces for
          relaxing, entertaining, and enjoying every evening.
        </p>
        <div className="statGrid">
          <div><strong>4</strong><span>Premium Services</span></div>
          <div><strong>DFW</strong><span>Service Area</span></div>
          <div><strong>Luxury</strong><span>Outdoor Focus</span></div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="sectionHead">
          <p className="eyebrow">Our Services</p>
          <h2>Four premium outdoor living solutions.</h2>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="serviceImage" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="serviceText">
                  <div className="serviceTop">
                    <Icon size={31} />
                    <span>{service.eyebrow}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="servicePoints">
                    {service.points.map((point) => <span key={point}><CheckCircle2 size={15} /> {point}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="feature">
        <div className="featureImage" />
        <div className="featureText">
          <p className="eyebrow">Designed for Nightlife at Home</p>
          <h2>From sunset lighting to poolside music, every detail works together.</h2>
          <p>
            A premium outdoor experience should feel seamless. Sound, lighting, shade, and entertainment
            are designed to complement the property and the way your clients live.
          </p>
          <div className="featureList">
            <span><Sparkles size={18} /> Elegant visual design</span>
            <span><ShieldCheck size={18} /> Professional-grade products</span>
            <span><Hammer size={18} /> Clean installation finish</span>
          </div>
        </div>
      </section>

      <section id="catalog" className="section catalog">
        <div className="catalogText">
          <p className="eyebrow">Our Catalog</p>
          <h2>Explore the Smart Living Group outdoor living catalog.</h2>
          <p>
            View our premium catalog with outdoor audio, lighting, TVs, shades, and outdoor living inspiration.
          </p>
          <div className="actions">
            <a className="button gold" href="/smart-living-group-catalog.pdf" target="_blank" rel="noreferrer">
              View Catalog <ArrowRight size={17} />
            </a>
            <a className="button glass" href="/smart-living-group-catalog.pdf" download>
              Download PDF <Download size={17} />
            </a>
          </div>
        </div>
        <div className="catalogCard">
          <div className="catalogMock">
            <span>Smart Living Group</span>
            <strong>Outdoor Living Catalog</strong>
            <small>Audio • Lighting • TVs • Shades</small>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallerySection">
        <p className="eyebrow">Gallery</p>
        <h2>Outdoor living inspiration.</h2>
        <div className="gallery">
          {gallery.map(([title, image]) => (
            <div className="galleryItem" key={title} style={{ backgroundImage: `url(${image})` }}>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section brands">
        <p className="eyebrow">Premium Partners</p>
        <h2>Designed with premium outdoor living brands.</h2>
        <div className="brandGrid">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </section>

      <section id="process" className="section process">
        <p className="eyebrow">Our Process</p>
        <h2>Simple, professional, and designed around the client experience.</h2>
        <div className="processGrid">
          {process.map(([number, title, text]) => (
            <article key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section serviceArea">
        <p className="eyebrow">Service Area</p>
        <h2>Serving luxury outdoor living projects across Dallas–Fort Worth.</h2>
        <div className="areaGrid">
          {serviceAreas.map((area) => <span key={area}><MapPin size={15} /> {area}</span>)}
        </div>
      </section>

      <section className="section testimonials">
        <p className="eyebrow">Client Experience</p>
        <h2>Built to make outdoor living feel effortless.</h2>
        <div className="testimonialGrid">
          <div><Star /><p>“Professional, clean, and the final result completely changed our backyard.”</p><span>Outdoor Audio Client</span></div>
          <div><Star /><p>“The lighting made the entire property feel more elegant at night.”</p><span>Landscape Lighting Client</span></div>
          <div><Star /><p>“Great communication and a very polished installation.”</p><span>Outdoor Living Client</span></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Create Something Extraordinary.</h2>
        <p>Ready to transform your outdoor living space? Contact Smart Living Group today.</p>
        <div className="contactBox">
          <a href="tel:+10000000000"><Phone size={18} /> Replace with your phone</a>
          <a href="mailto:smartlivingroup@gmail.com"><Mail size={18} /> smartlivingroup@gmail.com</a>
          <span><MapPin size={18} /> Service Area: Dallas–Fort Worth</span>
        </div>
      </section>

      <a className="floatingCall" href="tel:+10000000000"><Phone size={20} /> Call</a>
      <a className="floatingMessage" href="mailto:smartlivingroup@gmail.com"><MessageCircle size={20} /> Email</a>

      <footer>
        <p>© 2026 Smart Living Group. All rights reserved.</p>
      </footer>
    </main>
  );
}
