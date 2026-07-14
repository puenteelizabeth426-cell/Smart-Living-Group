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
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const images = Array.from(
  { length: 18 },
  (_, i) => `/projects/project-${String(i + 1).padStart(2, "0")}.webp`
);

const PHONE_TEL = "+18175103103";
const PHONE_DISPLAY = "817-510-3103";
const EMAIL = "Smartlivingroup@gmail.com";

const services = [
  {
    icon: Waves,
    title: "Outdoor Audio",
    eyebrow: "Hidden sound. Luxury feel.",
    image: "/projects/project-09.webp",
    copy: "Landscape speakers, subwoofers and premium audio zones designed to disappear into the environment while delivering powerful, balanced sound.",
    points: ["Landscape speakers", "Pool & patio audio", "Multi-zone control"],
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    eyebrow: "Architecture after dark.",
    image: "/projects/project-03.webp",
    copy: "Elegant lighting design for homes, gardens, entries, pathways, trees, stonework, water features and outdoor entertaining spaces.",
    points: ["Pathway lighting", "Tree & wall accents", "Smart lighting control"],
  },
  {
    icon: Tv,
    title: "Outdoor TVs",
    eyebrow: "Entertainment outside.",
    image: "/projects/project-01.webp",
    copy: "Outdoor-rated displays, clean mounting, concealed wiring and simple control for patios, kitchens, pergolas and pool areas.",
    points: ["Outdoor-rated TVs", "Concealed wiring", "Clean control systems"],
  },
  {
    icon: Blinds,
    title: "Motorized Shades",
    eyebrow: "Comfort with one touch.",
    image: "/projects/project-02.webp",
    copy: "Motorized shade systems for privacy, sun control and comfort, integrated with smart home scenes and outdoor living spaces.",
    points: ["Sun & heat control", "Privacy solutions", "Smart scene integration"],
  },
];

const processSteps = [
  {
    title: "Consultation",
    copy: "We listen, evaluate the property and define the goal.",
  },
  {
    title: "Design",
    copy: "We create a clean plan for audio, lighting, displays, shades and control.",
  },
  {
    title: "Installation",
    copy: "Our installation focuses on clean detail, reliability and premium finish.",
  },
  {
    title: "Ongoing Support",
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

const eyebrowGold = "text-[12px] font-bold uppercase tracking-[0.2em] text-gold";
const eyebrowSoft =
  "text-[12px] font-bold uppercase tracking-[0.2em] text-gold-soft";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-end overflow-hidden px-[5vw] pb-20 pt-[130px] md:min-h-screen md:items-center md:pb-[130px] md:pt-[150px]"
      >
        <div className="absolute inset-0">
          <img
            src="/projects/project-01.webp"
            alt="Luxury outdoor kitchen with premium lighting"
            className="h-full w-full scale-105 object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.83)_0%,rgba(0,0,0,0.58)_44%,rgba(0,0,0,0.25)_100%),linear-gradient(0deg,#080807_0%,transparent_28%)]" />

        <Reveal className="relative z-10 max-w-[820px]">
          <p className={`mb-4 ${eyebrowSoft}`}>
            Dallas–Fort Worth Luxury Outdoor Technology
          </p>
          <h1 className="max-w-[980px] font-serif text-[clamp(48px,8vw,112px)] leading-[0.98] tracking-[-0.04em] text-balance">
            Luxury Outdoor Living. Perfectly Designed.
          </h1>
          <p className="mt-6 max-w-[640px] text-[clamp(18px,2vw,22px)] leading-relaxed text-foreground/90">
            Smart Living Group designs and installs outdoor audio, landscape
            lighting, outdoor TVs and motorized shades for elevated residential
            spaces.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-gold-soft to-gold px-6 py-4 font-extrabold text-ink transition-transform hover:-translate-y-0.5"
            >
              Request Consultation <ArrowRight size={18} />
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-6 py-4 font-extrabold text-foreground transition-transform hover:-translate-y-0.5"
            >
              View Catalog
            </a>
          </div>
        </Reveal>

        <div className="absolute bottom-10 right-[5vw] z-10 hidden max-w-[760px] grid-cols-3 gap-3 lg:grid">
          {[
            ["Premium Design", "Custom layouts for every property"],
            ["Clean Installation", "Hidden wiring and luxury finish"],
            ["Smart Control", "Simple scenes from phone or remote"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="grid gap-1.5 rounded-[20px] border border-line bg-black/45 p-[18px] text-muted backdrop-blur-lg"
            >
              <Sparkles size={18} className="text-gold" />
              <strong className="text-[15px] text-foreground">{title}</strong>
              <span className="text-[13px] leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="grid items-end gap-12 bg-cream-deep px-[5vw] py-[76px] text-ink md:grid-cols-[1.25fr_0.75fr] md:gap-[70px] md:py-28">
        <Reveal>
          <p className={`mb-4 ${eyebrowGold}`}>The Art of Perfect Living</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Outdoor spaces designed to look beautiful, sound incredible and feel
            effortless.
          </h2>
        </Reveal>
        <Reveal delay={120} as="p" className="text-[17px] leading-relaxed text-ink/70">
          We combine premium products, thoughtful design and professional
          installation to create outdoor environments that feel finished,
          intentional and easy to control.
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream px-[5vw] py-[76px] text-ink md:py-28">
        <Reveal className="mb-14 max-w-[850px]">
          <p className={`mb-4 ${eyebrowGold}`}>Services</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Premium solutions for luxury outdoor living.
          </h2>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={index * 90}
                as="article"
                className="group overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.11)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(0,0,0,0.16)]"
              >
                <div className="h-[300px] overflow-hidden md:h-[330px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-[34px]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-gold-soft">
                    <Icon size={22} />
                  </div>
                  <p className={`mb-2 ${eyebrowGold}`}>{service.eyebrow}</p>
                  <h3 className="font-serif text-3xl tracking-[-0.03em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink/60">
                    {service.copy}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-ink/80"
                      >
                        <CheckCircle2 size={16} className="flex-none text-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Split / Why */}
      <section className="grid items-center gap-12 bg-background-soft px-[5vw] py-[76px] md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-28">
        <Reveal>
          <img
            src="/projects/project-10.webp"
            alt="Outdoor lighting project at dusk"
            className="h-[460px] w-full rounded-[36px] object-cover shadow-[0_40px_90px_rgba(0,0,0,0.45)] md:h-[660px]"
          />
        </Reveal>
        <Reveal delay={120} className="max-w-[680px]">
          <p className={`mb-4 ${eyebrowGold}`}>Why Smart Living Group</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Designed like a luxury finish, installed like infrastructure.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Every detail matters: fixture placement, speaker coverage, wire
            management, control simplicity and the way the space feels at night.
          </p>
          <div className="mt-9 grid gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Professional Installation",
                text: "Clean, reliable, and built to last.",
              },
              {
                icon: Sparkles,
                title: "Premium Experience",
                text: "Elegant design without complicated controls.",
              },
              {
                icon: MapPin,
                title: "DFW Service Area",
                text: "Serving luxury homes across Dallas–Fort Worth.",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="grid grid-cols-[34px_1fr] gap-x-3.5 rounded-3xl border border-line bg-card p-6"
                >
                  <Icon className="text-gold" />
                  <div>
                    <strong className="text-lg">{feature.title}</strong>
                    <span className="mt-1 block text-muted">{feature.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-cream px-[5vw] py-[76px] text-ink md:py-28">
        <Reveal className="mx-auto mb-14 max-w-[850px] text-center">
          <p className={`mb-4 ${eyebrowGold}`}>Portfolio</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Real project photography. No stock look.
          </h2>
        </Reveal>
        <div className="[column-gap:18px] columns-1 sm:columns-2 lg:columns-3">
          {images.map((src, index) => (
            <a
              href={src}
              key={src}
              target="_blank"
              rel="noreferrer"
              className="group mb-[18px] block overflow-hidden rounded-3xl bg-ink shadow-[0_16px_45px_rgba(0,0,0,0.14)] [break-inside:avoid]"
            >
              <img
                src={src}
                alt={`Smart Living Group project ${index + 1}`}
                loading="lazy"
                className="w-full transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section
        id="catalog"
        className="bg-[linear-gradient(135deg,rgba(0,0,0,0.65),rgba(0,0,0,0.35)),url('/projects/project-05.webp')] bg-cover bg-center px-[5vw] py-[76px] md:py-28"
      >
        <Reveal className="max-w-[760px] rounded-[34px] border border-line bg-black/55 p-8 backdrop-blur-xl md:p-[54px]">
          <p className={`mb-4 ${eyebrowSoft}`}>Catalog</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Explore Smart Living Group services.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Browse our full catalog of outdoor audio, lighting, display and shade
            solutions.
          </p>
          <a
            href="/catalog.pdf"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-gold-soft to-gold px-6 py-4 font-extrabold text-ink transition-transform hover:-translate-y-0.5"
          >
            Open Catalog <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      {/* Brands */}
      <section className="bg-cream-deep px-[5vw] py-[76px] text-center text-ink md:py-28">
        <Reveal>
          <p className={`mb-4 ${eyebrowGold}`}>Premium Products</p>
          <h2 className="mx-auto mb-9 max-w-[850px] font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Built around trusted luxury technology brands.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {brands.map((brand, index) => (
            <Reveal
              key={brand}
              delay={index * 50}
              className="rounded-[18px] border border-black/[0.08] bg-white px-3.5 py-6 font-extrabold tracking-[0.04em] text-ink/80"
            >
              {brand}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0b0b09] px-[5vw] py-[76px] md:py-28">
        <Reveal className="mx-auto mb-14 max-w-[850px] text-center">
          <p className={`mb-4 ${eyebrowGold}`}>Process</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            A simple path from idea to finished outdoor experience.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 90}
              className="min-h-[250px] rounded-[28px] border border-line bg-card p-[30px]"
            >
              <span className="font-black tracking-[0.18em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 mb-3 font-serif text-3xl tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="grid items-start gap-10 bg-[linear-gradient(135deg,#12110f,#050504)] px-[5vw] py-[76px] md:grid-cols-[1fr_0.9fr] md:items-center md:py-28"
      >
        <Reveal>
          <p className={`mb-4 ${eyebrowSoft}`}>Start Your Project</p>
          <h2 className="font-serif text-[clamp(36px,5vw,70px)] leading-[0.98] tracking-[-0.045em] text-balance">
            Ready to elevate your outdoor space?
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-foreground/80">
            Request a consultation for outdoor audio, landscape lighting, outdoor
            TVs or motorized shades. Prefer to talk now?
          </p>
          <div className="mt-8 grid gap-3.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3.5 rounded-[20px] border border-line bg-white/[0.06] p-6 font-extrabold transition-colors hover:border-gold/50"
            >
              <Phone className="text-gold" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3.5 rounded-[20px] border border-line bg-white/[0.06] p-6 font-extrabold transition-colors hover:border-gold/50"
            >
              <Mail className="text-gold" /> {EMAIL}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-line px-[5vw] py-[54px] text-center text-muted">
        <img
          src="/projects/logo.webp"
          alt="Smart Living Group logo"
          className="mx-auto mb-4 w-[210px]"
        />
        <p>Smart Living Group — a S&amp;L Company</p>
        <p className="mt-1">
          Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized Shades
        </p>
        <p className="mt-3 text-sm">
          <a href={`tel:${PHONE_TEL}`} className="hover:text-gold-soft">
            {PHONE_DISPLAY}
          </a>
          {" · "}
          <a href={`mailto:${EMAIL}`} className="hover:text-gold-soft">
            {EMAIL}
          </a>
        </p>
      </footer>
    </main>
  );
}
