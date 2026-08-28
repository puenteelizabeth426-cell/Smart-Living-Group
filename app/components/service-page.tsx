import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SiteNav } from "../site-nav";

export type ServicePageData = {
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  introduction: string;
  benefits: string[];
  applications: string[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const serviceLinks = [
  ["Outdoor Lighting", "/outdoor-lighting-dallas"],
  ["Outdoor Audio", "/outdoor-audio-dallas"],
  ["Outdoor TV Installation", "/outdoor-tv-installation-dallas"],
  ["Motorized Shades", "/motorized-shades-dallas"],
];

const cities = [
  "Dallas", "Fort Worth", "Southlake", "Colleyville", "Grapevine",
  "Keller", "Westlake", "Trophy Club", "Flower Mound", "Coppell",
  "Highland Park", "University Park", "Frisco", "Plano", "Prosper",
  "McKinney", "Arlington", "Irving", "Las Colinas",
];

export function ServicePage({ data }: { data: ServicePageData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    provider: {
      "@type": "ProfessionalService",
      name: "The Smart Living Group",
      url: "https://www.smartliving-texas.com",
      telephone: "+1-817-510-3103",
    },
    areaServed: cities.map((name) => ({ "@type": "City", name })),
    description: data.description,
  };

  return (
    <main>
      <SiteNav />
      <section className="seoHero">
        <div className="seoHeroMedia">
          <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="seoHeroOverlay" />
        <div className="seoHeroContent">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.headline}</h1>
          <p>{data.description}</p>
          <div className="heroActions">
            <a className="button primary" href="tel:+18175103103">
              Call (817) 510-3103 <Phone size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="/#contact">
              Request Consultation <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="seoIntro section">
        <div>
          <p className="eyebrow dark">Designed for North Texas</p>
          <h2>{data.name} for beautiful, functional outdoor spaces.</h2>
        </div>
        <p className="seoLead">{data.introduction}</p>
      </section>

      <section className="seoDetails section">
        <div className="seoPanel">
          <p className="eyebrow dark">Why Smart Living</p>
          <h2>Professional design and clean installation.</h2>
          <ul className="seoChecklist">
            {data.benefits.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
        </div>
        <div className="seoPanel seoPanelDark">
          <p className="eyebrow">Ideal Applications</p>
          <h2>Made for the way you live outside.</h2>
          <ul className="seoChecklist">
            {data.applications.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="seoProcess section">
        <div className="sectionHeader">
          <p className="eyebrow dark">Our Process</p>
          <h2>From consultation to final walkthrough.</h2>
        </div>
        <div className="seoProcessGrid">
          {data.process.map((step, index) => (
            <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>
          ))}
        </div>
      </section>

      <section className="seoAreas section">
        <p className="eyebrow">Dallas–Fort Worth Service Area</p>
        <h2>Serving homes and businesses across DFW.</h2>
        <p>{cities.join(" • ")}</p>
      </section>

      <section className="seoFaq section">
        <div className="sectionHeader">
          <p className="eyebrow dark">Frequently Asked Questions</p>
          <h2>What to know about {data.name.toLowerCase()}.</h2>
        </div>
        <div className="seoFaqList">
          {data.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="seoRelated section">
        <p className="eyebrow dark">Explore Our Services</p>
        <div className="seoRelatedLinks">
          {serviceLinks.map(([label, href]) => <Link key={href} href={href}>{label}<ArrowRight size={16} /></Link>)}
        </div>
      </section>

      <section className="seoCta section">
        <p className="eyebrow">Start Your Project</p>
        <h2>Bring your outdoor space to life.</h2>
        <p>Schedule a consultation with The Smart Living Group for a custom system designed around your property.</p>
        <a className="button primary" href="/#contact">Request Consultation <ArrowRight size={18} /></a>
      </section>

      <footer>
        <Image src="/projects/logo.webp" alt="The Smart Living Group Dallas-Fort Worth logo" width={220} height={220} />
        <p>The Smart Living Group — a S&amp;L Company</p>
        <p>Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized Shades</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
