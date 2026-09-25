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
    introduction: "We design lighting around the landscape—not around a box of fixtures. Every beam angle, fixture location and lighting zone is planned to enhance your trees, gardens, hardscape and architecture while improving safety and the way your family enjoys the outdoors.",
    benefits: ["Custom lighting design for each property", "Low-voltage, outdoor-rated fixtures", "Tree, garden, pathway and architectural lighting", "Clean wiring and discreet fixture placement", "Smart timers, scenes and app control", "Residential and commercial installations"],
    applications: ["Trees, gardens and stonework", "Walkways, steps and driveways", "Front entries and façades", "Pools, patios and outdoor kitchens", "Pergolas and entertaining areas", "Restaurants and commercial properties"],
    process: [{title:"Consultation",text:"We walk the property and learn what you want to illuminate."},{title:"Lighting Design",text:"We plan fixture types, placement, beam angles and zones."},{title:"Installation",text:"Our team installs discreetly and protects the landscaping."},{title:"Night Adjustment",text:"We aim and fine-tune every light after dark."}],
    faqs: [{question:"How much does landscape lighting cost in Dallas?",answer:"Pricing depends on the property size, number and quality of fixtures, wiring conditions and control options. We provide a custom proposal after reviewing the space."},{question:"Can landscape lighting be automated?",answer:"Yes. Lighting can run on schedules, sunset timing, app control or coordinated scenes for entertaining, security and everyday use."},{question:"Do you install lighting around pools and patios?",answer:"Yes. We design outdoor-rated lighting for pools, patios, pergolas, kitchens, pathways, gardens and architectural features."},{question:"Do you serve areas outside Dallas?",answer:"Yes. The Smart Living Group serves Dallas, Fort Worth and surrounding DFW communities including Southlake, Colleyville, Keller, Frisco, Plano and more."}],
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
    ]
  }} />;
}
