import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  HardHat,
  Compass,
  Layers,
  UtensilsCrossed,
  CheckCircle2,
} from "lucide-react";
import { SiteNav } from "../site-nav";
import { CommercialForm } from "./commercial-form";

export const metadata: Metadata = {
  title: "Commercial & Trade | The Smart Living Group",
  description:
    "Integrated technology solutions for builders, developers, designers and commercial projects across Dallas–Fort Worth. Pre-construction planning through final commissioning.",
  alternates: { canonical: "/commercial-trade" },
};

const capabilities = [
  "Pre-construction planning",
  "System design",
  "Low-voltage infrastructure",
  "Lighting integration",
  "Audio & video",
  "Motorized shades",
  "Outdoor technology",
  "Commercial technology systems",
  "Structured wiring",
  "Equipment coordination",
  "Installation",
  "Programming",
  "Final commissioning",
  "Ongoing support",
];

const partners = [
  {
    icon: Building2,
    title: "Custom Home Builders",
    copy: "Technology planning and integration for luxury new construction and major residential projects.",
  },
  {
    icon: HardHat,
    title: "General Contractors",
    copy: "A dependable technology partner that coordinates with construction schedules and other trades.",
  },
  {
    icon: Compass,
    title: "Architects & Designers",
    copy: "Technology integrated without compromising architecture, finishes or interior design.",
  },
  {
    icon: Layers,
    title: "Developers",
    copy: "Scalable technology solutions for larger residential and commercial developments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Commercial & Hospitality",
    copy: "Integrated systems for restaurants, offices, hospitality spaces and other commercial environments.",
  },
];

export default function CommercialTradePage() {
  return (
    <main>
      <SiteNav />

      <section className="commHero">
        <div className="commHeroMedia">
          <Image
            src="/projects/commercial-hero.png"
            alt="Luxury new-construction commercial building at dusk with integrated architectural lighting in Dallas-Fort Worth"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="commHeroOverlay" />

        <div className="commHeroContent reveal">
          <p className="eyebrow">Commercial &amp; Trade</p>
          <h1>Technology Built Into the Project.</h1>
          <p className="commHeroText">
            Integrated technology solutions for builders, developers, designers
            and commercial projects across Dallas–Fort Worth.
          </p>

          <div className="heroActions">
            <a href="#commercial-contact" className="button primary">
              Discuss a Project
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#capabilities" className="button secondary">
              View Capabilities
            </a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="commPros section">
        <div className="commProsGrid">
          <div className="commProsIntro">
            <p className="eyebrow dark">Built for Professionals</p>
            <h2>A Technology Partner for the Entire Project</h2>
            <p className="commLead">
              Smart Living works alongside builders, contractors, architects,
              designers and project teams from planning through final
              installation — coordinating every system so technology is
              considered from day one, not added as an afterthought.
            </p>
          </div>

          <ul className="commCapabilities">
            {capabilities.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="commPartners section">
        <div className="sectionHeader">
          <p className="eyebrow dark">Who We Work With</p>
          <h2>Partners across every stage of the build.</h2>
        </div>

        <div className="commPartnerGrid">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <article className="commPartnerCard" key={partner.title}>
                <div className="commPartnerIcon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{partner.title}</h3>
                <p>{partner.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="commScale section">
        <div className="commScaleMedia">
          <Image
            src="/projects/commercial-scale.png"
            alt="Luxury commercial interior with double-height architecture and integrated technology systems"
            fill
            sizes="(max-width: 950px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="commScaleContent">
          <p className="eyebrow">Large Projects</p>
          <h2>Built to Scale.</h2>
          <p>
            From sophisticated custom residences to complex commercial
            environments, Smart Living provides the planning, infrastructure,
            installation and system integration required for larger projects.
          </p>

          <div className="commScalePoints">
            {[
              ["Professional Coordination", "Aligned with your trades and construction schedule."],
              ["Clean Documentation", "Clear plans, drawings and equipment records."],
              ["Reliability", "Infrastructure engineered to perform and last."],
              ["Long-Term Service", "Ongoing support well beyond commissioning."],
            ].map(([title, text]) => (
              <div className="commScaleItem" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commercial-contact" className="commContact section">
        <div className="commContactHeader">
          <p className="eyebrow">Commercial Project Inquiry</p>
          <h2>Planning a Larger Project?</h2>
          <p>
            Tell us about your upcoming project and our team will discuss system
            requirements, project scope, construction timeline and next steps.
          </p>
        </div>

        <div className="commContactCard">
          <CommercialForm />
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
          Commercial &amp; Trade • Custom Home Builders • Developers • Architects
          &amp; Designers • Hospitality
        </p>
      </footer>
    </main>
  );
}
