import {
  ArrowRight, AudioLines, Lightbulb, Monitor, PanelsTopLeft,
  Download, Phone, Mail, MapPin, Star, CheckCircle2, MessageCircle
} from "lucide-react";

const services = [
  {
    icon: AudioLines,
    title: "Outdoor Audio",
    text: "Premium landscape speakers, hidden subwoofers, pool audio, patio audio, and multi-zone outdoor entertainment.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85",
    points: ["Landscape speakers", "Hidden subwoofers", "Pool audio", "Patio entertainment"]
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    text: "Elegant tree uplighting, path lighting, step lighting, garden lighting, and architectural nighttime scenes.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=85",
    points: ["Tree uplighting", "Path lighting", "Step lighting", "Garden lighting"]
  },
  {
    icon: Monitor,
    title: "Outdoor TVs",
    text: "Clean outdoor TV installations for patios, pools, pergolas, outdoor kitchens, and entertainment areas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
    points: ["Patio TVs", "Pool TVs", "Outdoor kitchens", "Game day areas"]
  },
  {
    icon: PanelsTopLeft,
    title: "Motorized Shades",
    text: "Outdoor motorized shades for privacy, solar protection, comfort, patios, pergolas, and luxury outdoor living.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85",
    points: ["Privacy", "Solar protection", "Pergolas", "Patio comfort"]
  }
];

const gallery = [
  ["Outdoor Lounge", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],
  ["Pool Lighting", "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"],
  ["Modern Patio", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85"],
  ["Evening Ambience", "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1200&q=85"],
  ["Outdoor Kitchen", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"],
  ["Luxury Backyard", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"],
  ["Covered Patio", "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=85"],
  ["Modern Residence", "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"],
  ["Outdoor Living", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"]
];

const process = [
  ["01", "Consultation", "We review your space, goals, style, and budget."],
  ["02", "Design", "We create a clean outdoor living plan."],
  ["03", "Installation", "We install with professional detail."],
  ["04", "Walkthrough", "We test everything and show you how it works."]
];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#">Smart Living Group</a>
        <nav>
          <a href="#services">Services</a>
          <a href="#catalog">Catalog</a>
          <a href="#gallery">Gallery</a>
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
          <p>Premium outdoor audio, landscape lighting, outdoor TVs, and motorized shades crafted for exceptional outdoor spaces in Dallas–Fort Worth.</p>
          <div className="actions">
            <a className="button gold" href="#contact">Request Consultation <ArrowRight size={17} /></a>
            <a className="button glass" href="#catalog">View Catalog</a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <p className="eyebrow">Smart Living Group</p>
        <h2>Outdoor spaces designed to feel elegant, comfortable, and unforgettable.</h2>
        <p>We transform patios, pools, pergolas, gardens, and outdoor kitchens into refined spaces for relaxing, entertaining, and enjoying every evening.</p>
      </section>

      <section id="services" className="section services">
        <p className="eyebrow">Our Services</p>
        <h2>Premium outdoor living solutions.</h2>
        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="serviceImage" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="serviceText">
                  <Icon size={32} />
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

      <section id="catalog" className="section catalog">
        <div>
          <p className="eyebrow">Our Catalog</p>
          <h2>Explore the Smart Living Group outdoor living catalog.</h2>
          <p>View our catalog with outdoor audio, lighting, TVs, shades, and outdoor living inspiration.</p>
          <div className="actions">
            <a className="button gold" href="/smart-living-group-catalog.pdf" target="_blank" rel="noreferrer">View Catalog <ArrowRight size={17} /></a>
            <a className="button glass" href="/smart-living-group-catalog.pdf" download>Download PDF <Download size={17} /></a>
          </div>
        </div>
        <div className="catalogMock"><span>Smart Living Group</span><strong>Outdoor Living Catalog</strong><small>Audio • Lighting • TVs • Shades</small></div>
      </section>

      <section id="gallery" className="section gallerySection">
        <p className="eyebrow">Gallery</p>
        <h2>Outdoor living inspiration.</h2>
        <div className="gallery">
          {gallery.map(([title, image]) => <div className="galleryItem" key={title} style={{ backgroundImage: `url(${image})` }}><span>{title}</span></div>)}
        </div>
      </section>

      <section className="section process">
        <p className="eyebrow">Our Process</p>
        <h2>Simple, professional, and designed around the client experience.</h2>
        <div className="processGrid">
          {process.map(([num, title, text]) => <article key={title}><strong>{num}</strong><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section why">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Premium design, clean installation, and ongoing support.</h2>
        <div className="whyGrid">
          {["Custom Design", "Premium Products", "Professional Installation", "Reliable Support"].map((item) => <div key={item}><Star size={22} /><h3>{item}</h3></div>)}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Create Something Extraordinary.</h2>
        <p>Ready to transform your outdoor living space? Contact Smart Living Group today.</p>
        <div className="contactBox">
          <a href="tel:+10000000000"><Phone size={18} /> Replace with your phone</a>
          <a href="mailto:smartlivingroup@gmail.com"><Mail size={18} /> smartlivingroup@gmail.com</a>
          <span><MapPin size={18} /> Dallas–Fort Worth</span>
        </div>
      </section>

      <a className="floatingCall" href="tel:+10000000000"><Phone size={20} /> Call</a>
      <a className="floatingMessage" href="mailto:smartlivingroup@gmail.com"><MessageCircle size={20} /> Email</a>

      <footer><p>© 2026 Smart Living Group. All rights reserved.</p></footer>
    </main>
  );
}
