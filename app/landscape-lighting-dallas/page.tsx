import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Landscape Lighting Dallas | Outdoor Landscape Lighting DFW",
  description: "Professional landscape lighting design and installation in Dallas–Fort Worth for pathways, trees, gardens, architecture and outdoor living spaces.",
  alternates: { canonical: "/landscape-lighting-dallas" },
  openGraph: { title: "Landscape Lighting Dallas–Fort Worth", description: "Custom landscape lighting designed and installed by The Smart Living Group.", url: "/landscape-lighting-dallas", images: ["/projects/project-03.webp"] },
};

export default function Page() {
  return <ServicePage data={{
    name: "Landscape Lighting",
    eyebrow: "Landscape Lighting • Dallas–Fort Worth",
    headline: "Landscape Lighting Designed for Dallas–Fort Worth Homes.",
    description: "Custom landscape lighting that highlights trees, gardens and architecture, guides pathways and creates a warm, inviting property after dark.",
    heroImage: "/projects/project-03.webp",
    heroAlt: "Professional landscape lighting illuminating trees and gardens at a luxury Dallas-Fort Worth home at night",
    introduction: "We design lighting around your landscape—not around a box of fixtures. Every beam angle, fixture location and lighting zone is carefully planned to showcase your trees, gardens, hardscape and architecture, improve safety along walkways and steps, and extend the hours your family enjoys the outdoors. The result is a property that looks intentional, elegant and welcoming every night of the year.",
    whyUsIntro: "The Smart Living Group is a full-service outdoor lighting company serving Dallas–Fort Worth. From the first walkthrough to the final after-dark adjustment, one dedicated team handles your custom design, professional installation and long-term support—so your lighting looks flawless and keeps working for years. Here's what sets our work apart:",
    benefits: [
      "Custom lighting design tailored to your property",
      "Durable, low-voltage, outdoor-rated fixtures",
      "Tree, garden, pathway and architectural lighting",
      "Clean wiring with discreet, hidden fixture placement",
      "Smart timers, scenes and app-based control",
      "Professional installation for homes and businesses",
    ],
    applications: [
      "Trees, gardens and stonework",
      "Walkways, steps and driveways",
      "Front entries and home façades",
      "Pools, patios and outdoor kitchens",
      "Pergolas and entertaining areas",
      "Restaurants and commercial properties",
    ],
    process: [
      {title:"1. Consultation",text:"We walk your property with you to understand your goals and identify the features worth highlighting."},
      {title:"2. Lighting Design",text:"We create a custom plan detailing fixture types, placement, beam angles and lighting zones."},
      {title:"3. Installation",text:"Our team installs everything cleanly and discreetly while carefully protecting your landscaping."},
      {title:"4. Night Adjustment",text:"We return after dark to aim and fine-tune every fixture for the perfect final look."},
    ],
    faqs: [
      {question:"How much does landscape lighting cost in Dallas?",answer:"Every project is priced individually. Your investment depends on the size of the property, the number and quality of fixtures, existing wiring conditions and the control options you choose. After we review your space, we provide a clear, detailed proposal with no surprises."},
      {question:"Can landscape lighting be automated?",answer:"Yes. Your lighting can run on set schedules, automatic sunset-to-sunrise timing, app control from your phone, or coordinated scenes for entertaining, security and everyday use."},
      {question:"Do you install lighting around pools and patios?",answer:"Absolutely. We design outdoor-rated lighting for pools, patios, pergolas, outdoor kitchens, pathways, gardens and architectural features—all built to withstand Texas weather."},
      {question:"Do you serve areas outside Dallas?",answer:"Yes. The Smart Living Group serves Dallas, Fort Worth and the surrounding DFW communities, including Southlake, Colleyville, Keller, Frisco, Plano and more."},
    ],
    gallery: [
      {
        src: "/projects/landscape-trees.png",
        alt: "Warm uplighting on large mature oak trees and a stone walkway at a luxury Dallas-Fort Worth home at night",
        caption: "Uplighting on mature trees and architecture creates depth and drama after dark.",
      },
      {
        src: "/projects/landscape-pathway.png",
        alt: "Low-voltage path lights illuminating stone steps and manicured garden plantings in a Dallas-Fort Worth backyard",
        caption: "Discreet path lighting guides walkways and steps for safety and elegance.",
      },
      {
        src: "/projects/landscape-facade.png",
        alt: "Architectural landscape lighting washing the stone and brick facade of an elegant Dallas luxury home entry",
        caption: "Architectural lighting highlights facades, entries and stonework.",
      },
      {
        src: "/projects/landscape-patio.png",
        alt: "Luxury outdoor living patio with illuminated pergola, glowing garden beds and uplit trees at a Dallas home",
        caption: "Layered lighting extends outdoor living spaces into the evening.",
      },
      {
        src: "/projects/landscape-pool.png",
        alt: "Luxury Dallas backyard pool surrounded by warm landscape lighting, uplit trees and a glowing pergola at night",
        caption: "Poolside and backyard lighting create a resort-style setting after dark.",
      },
    ]
  }} />;
}
