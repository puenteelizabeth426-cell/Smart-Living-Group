import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Compass,
  Ruler,
  Wrench,
  LifeBuoy,
  PhoneCall,
  ClipboardList,
  PencilRuler,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "About Us | Outdoor Living Systems in Dallas–Fort Worth",
  description:
    "Meet The Smart Living Group — a design-led outdoor systems company serving Dallas–Fort Worth. Learn our approach to planning, installing and supporting outdoor audio, lighting, television and shade.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About The Smart Living Group",
    description:
      "A design-led outdoor systems company serving Dallas–Fort Worth homeowners, builders and design professionals.",
    url: "/about",
    images: ["/projects/about-hero.png"],
    type: "website",
  },
};

const values = [
  {
    icon: Compass,
    title: "Design-Led",
    copy: "We plan every system around your architecture, landscape and sightlines before a single fixture is placed.",
  },
  {
    icon: Ruler,
    title: "Detail-Driven",
    copy: "Beam angles, speaker coverage, mounting heights and cable paths are worked out in advance, not improvised on site.",
  },
  {
    icon: Wrench,
    title: "Built to Last",
    copy: "Weather-resistant equipment, sealed connections and clean terminations so the installation holds up outdoors.",
  },
  {
    icon: LifeBuoy,
    title: "Here Afterward",
    copy: "We stay available after the install to keep the system simple, updated and ready to use.",
  },
];

const consultation = [
  {
    icon: PhoneCall,
    step: "01",
    title: "First Conversation",
    copy: "We learn how you use your outdoor space, what you want to improve and the results you have in mind.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "On-Site Walkthrough",
    copy: "We walk the property, note sightlines, power and structure, and identify where systems should live.",
  },
  {
    icon: PencilRuler,
    step: "03",
    title: "Design & Proposal",
    copy: "You receive a clear plan and proposal covering equipment, placement, control and scope — no surprises.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Installation",
    copy: "Our team installs with concealed cabling and protected landscaping, then tunes everything on site.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Walkthrough & Support",
    copy: "We show you how everything works, confirm you are comfortable with it, and stay available afterward.",
  },
];

const team = [
  {
    name: "[Founder Name]",
    role: "[Founder / Owner]",
    copy: "[Placeholder — add the founder's background, years in outdoor technology and design, and what drives their approach to the work.]",
  },
  {
    name: "[Team Member]",
    role: "[Design / Project Lead]",
    copy: "[Placeholder — add this team member's role, experience and the part of the process they lead.]",
  },
  {
    name: "[Team Member]",
    role: "[Lead Installer]",
    copy: "[Placeholder — add this team member's role, experience and craftsmanship focus.]",
  },
];

const testimonials = [
  {
    quote:
      "[Placeholder testimonial — replace with a real client quote once available. Keep it specific about the experience, the result and working with the team.]",
    attribution: "[Client Name, City]",
  },
  {
    quote:
      "[Placeholder testimonial — replace with a real client or trade-partner quote once available.]",
    attribution: "[Client Name, City]",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteNav />

      <section className="aboutHero">
        <div className="aboutHeroMedia">
          <Image
            src="/projects/about-hero.png"
            alt="Outdoor living space at dusk with architectural lighting and concealed landscape audio"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="aboutHeroOverlay" />

        <div className="aboutHeroContent reveal">
          <p className="eyebrow">About Us</p>
          <h1>A design-led approach to outdoor living.</h1>
          <p className="aboutHeroText">
            The Smart Living Group plans, installs and supports outdoor audio,
            lighting, television and shade systems — built to feel like part of
            the home, not added on afterward.
          </p>
          <div className="heroActions">
            <a href="#about-contact" className="button primary">
              Request Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link href="/#services" className="button secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutMission section">
        <div className="aboutMissionText">
          <p className="eyebrow dark">Our Mission</p>
          <h2>
            We believe an outdoor space should feel finished, not wired
            together.
          </h2>
          <p>
            Too often, outdoor technology is treated as an afterthought —
            speakers bolted to walls, fixtures aimed into people&apos;s eyes and
            cabling left exposed. We take a different path: every system is
            designed around the property first, so the result looks
            intentional and works the way you expect.
          </p>
          <p className="aboutPlaceholder">
            [Founder story placeholder — add how and why the company started,
            the founder&apos;s background in outdoor technology and design, and
            the philosophy behind the work. Do not state a specific number of
            years or credentials until confirmed.]
          </p>
        </div>

        <div className="aboutMissionMedia">
          <Image
            src="/projects/about-approach.png"
            alt="Detail of a low-voltage landscape lighting fixture and neatly routed cabling being installed"
            width={900}
            height={1100}
            sizes="(max-width: 950px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className="aboutValues section">
        <div className="sectionHeader">
          <p className="eyebrow dark">How We Work</p>
          <h2>What sets our process apart.</h2>
        </div>

        <div className="aboutValueGrid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="aboutValueCard" key={value.title}>
                <div className="aboutValueIcon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="aboutProcess section">
        <div className="sectionHeader center">
          <p className="eyebrow dark">The Consultation Process</p>
          <h2>What to expect, from first call to final walkthrough.</h2>
          <p className="catalogIntro">
            A clear, low-pressure path so you always know the next step and
            what your outdoor space will become.
          </p>
        </div>

        <div className="aboutProcessGrid">
          {consultation.map((item) => {
            const Icon = item.icon;
            return (
              <article className="aboutProcessCard" key={item.step}>
                <span className="aboutProcessStep">{item.step}</span>
                <div className="aboutProcessIcon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="aboutTeam section">
        <div className="sectionHeader">
          <p className="eyebrow dark">The Team</p>
          <h2>The people behind the work.</h2>
          <p className="catalogIntro">
            [Placeholder — replace the portraits and bios below with real team
            photographs and backgrounds. Nothing here is fabricated.]
          </p>
        </div>

        <div className="aboutTeamGrid">
          {team.map((member, index) => (
            <article className="aboutTeamCard" key={index}>
              <div className="aboutTeamPhoto">
                <Image
                  src="/projects/about-portrait-placeholder.png"
                  alt="Placeholder portrait to be replaced with a real team photograph"
                  width={600}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="aboutTeamBadge">Photo placeholder</span>
              </div>
              <h3>{member.name}</h3>
              <p className="aboutTeamRole">{member.role}</p>
              <p>{member.copy}</p>
            </article>
          ))}
        </div>

        <div className="aboutCreds">
          <p className="eyebrow dark">Experience &amp; Credentials</p>
          <p className="aboutPlaceholder">
            [Placeholder — list real credentials, manufacturer certifications,
            trade affiliations and relevant experience here once confirmed.
            Avoid claiming certifications or years of experience until they can
            be verified.]
          </p>
        </div>
      </section>

      <section className="aboutTestimonials section">
        <div className="sectionHeader center">
          <p className="eyebrow dark">Client Feedback</p>
          <h2>What clients say.</h2>
          <p className="catalogIntro">
            [Placeholder — replace with real testimonials as they become
            available.]
          </p>
        </div>

        <div className="aboutTestimonialGrid">
          {testimonials.map((item, index) => (
            <figure className="aboutTestimonialCard" key={index}>
              <Quote size={26} aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="about-contact" className="contact section">
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2>Let&apos;s plan your outdoor space.</h2>
          <p>
            Reach out for a consultation. We&apos;ll walk your property, talk
            through how you use it and outline a clear plan for audio, lighting,
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
          alt="The Smart Living Group logo"
          width={240}
          height={240}
        />
        <p>The Smart Living Group</p>
        <p>
          Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized Shades
        </p>
      </footer>
    </main>
  );
}
