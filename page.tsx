import { ArrowRight, AudioLines, Lightbulb, Monitor, Wifi, Shield, Building2, Home, Layers, Star } from "lucide-react";

const services = [
  {
    icon: AudioLines,
    title: "Outdoor Audio",
    text: "Hidden landscape speakers, bollard speakers, subwoofers, pool audio, patio audio, and multi-zone entertainment."
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    text: "Path lighting, tree uplighting, step lighting, RGB lighting, architectural lighting, and elegant nighttime scenes."
  },
  {
    icon: Monitor,
    title: "Outdoor TVs",
    text: "Premium weather-resistant TV systems for patios, pools, outdoor kitchens, and game-day entertainment."
  },
  {
    icon: Layers,
    title: "Motorized Shades",
    text: "Outdoor shades for privacy, solar protection, pergolas, patios, and luxury outdoor comfort."
  },
  {
    icon: Home,
    title: "Smart Home Automation",
    text: "Control lighting, audio, climate, shades, security, cameras, and entertainment from one simple experience."
  },
  {
    icon: Wifi,
    title: "Networking & Wi‑Fi",
    text: "Reliable whole-home and commercial Wi‑Fi, structured wiring, access points, and network design."
  },
  {
    icon: Shield,
    title: "Security Solutions",
    text: "Smart cameras, access control, smart locks, remote monitoring, and clean professional integration."
  },
  {
    icon: Building2,
    title: "Commercial Technology",
    text: "Restaurants, offices, retail spaces, gyms, clubhouses, churches, and hospitality technology systems."
  }
];

const builderPoints = [
  "Pre-wire planning",
  "Low-voltage design",
  "Lighting & audio packages",
  "Outdoor living technology",
  "Jobsite coordination",
  "Final programming",
  "Client training",
  "Ongoing support"
];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <div className="brand">Smart Living Group</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#builders">Builders</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroShade" />
        <div className="heroContent fadeUp">
          <p className="eyebrow">Luxury Outdoor Living & Smart Technology</p>
          <h1>Technology Designed for Beautiful Living.</h1>
          <p>
            Premium outdoor audio, landscape lighting, outdoor TVs, motorized shades,
            automation, networking, and commercial technology solutions for Dallas–Fort Worth.
          </p>
          <div className="actions">
            <a className="button gold" href="#contact">
              Request Consultation <ArrowRight size={17} />
            </a>
            <a className="button glass" href="#services">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="intro section">
        <p className="eyebrow">The Art of Perfect Living</p>
        <h2>Smart Living Group creates refined technology experiences that feel natural, elegant, and effortless.</h2>
        <p>
          We design and install systems that blend into the architecture while enhancing the lifestyle.
          From luxury backyards and custom homes to commercial spaces, every project is planned with
          performance, reliability, and beauty in mind.
        </p>
      </section>

      <section id="services" className="section dark">
        <div className="sectionHead">
          <p className="eyebrow">Services</p>
          <h2>Premium Solutions for Homes, Outdoor Spaces, Builders, and Businesses.</h2>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split">
        <div className="splitImage outdoorOne" />
        <div className="splitText">
          <p className="eyebrow">Outdoor Living</p>
          <h2>Designed for evenings by the pool, dinner on the patio, and unforgettable entertainment.</h2>
          <p>
            We combine lighting, audio, video, shade control, networking, and automation into one seamless
            outdoor experience. Every detail is designed to enhance the architecture, landscape, and lifestyle
            of the property.
          </p>
        </div>
      </section>

      <section id="builders" className="section builders">
        <p className="eyebrow">Builders & Designers</p>
        <h2>A technology partner for luxury new construction and outdoor living projects.</h2>
        <p>
          We work with builders, architects, pool companies, landscape designers, and general contractors
          to make low-voltage planning easier from design to final walkthrough.
        </p>
        <div className="builderGrid">
          {builderPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHead">
          <p className="eyebrow">Project Gallery</p>
          <h2>Replace these placeholders with your best real installation photos.</h2>
        </div>
        <div className="gallery">
          <div className="galleryItem one"><span>Outdoor Lighting</span></div>
          <div className="galleryItem two"><span>Landscape Audio</span></div>
          <div className="galleryItem three"><span>Outdoor TV</span></div>
          <div className="galleryItem four"><span>Motorized Shades</span></div>
        </div>
      </section>

      <section className="section why">
        <p className="eyebrow">Why Clients Choose Us</p>
        <h2>Professional design, clean installation, premium products, and ongoing support.</h2>
        <div className="whyGrid">
          {["Custom Design", "Premium Brands", "Professional Installation", "Reliable Support"].map((item) => (
            <div key={item}>
              <Star size={22} />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Create Something Extraordinary.</h2>
        <p>
          Ready to design a smarter, more beautiful living experience? Contact Smart Living Group today.
        </p>

        <div className="contactBox">
          <a href="tel:+10000000000">Call: Replace with your phone</a>
          <a href="mailto:smartlivingroup@gmail.com">Email: smartlivingroup@gmail.com</a>
          <span>Service Area: Dallas–Fort Worth</span>
        </div>
      </section>

      <footer>
        <p>© 2026 Smart Living Group. All rights reserved.</p>
      </footer>
    </main>
  );
}
