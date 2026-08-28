import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Outdoor Lighting Dallas | Landscape Lighting DFW",
  description: "Professional outdoor and landscape lighting design and installation in Dallas–Fort Worth for pathways, trees, architecture, patios and gardens.",
  alternates: { canonical: "/outdoor-lighting-dallas" },
  openGraph: { title: "Outdoor Lighting & Landscape Lighting Dallas–Fort Worth", description: "Custom landscape lighting designed and installed by The Smart Living Group.", url: "/outdoor-lighting-dallas", images: ["/projects/project-03.webp"] },
};

export default function Page() {
  return <ServicePage data={{
    name: "Outdoor & Landscape Lighting",
    eyebrow: "Outdoor Lighting • Dallas–Fort Worth",
    headline: "Outdoor Lighting Designed for Dallas–Fort Worth Homes.",
    description: "Custom landscape lighting that highlights architecture, guides pathways and creates a warm, inviting outdoor atmosphere after dark.",
    heroImage: "/projects/project-03.webp",
    heroAlt: "Professional outdoor landscape lighting illuminating a luxury Dallas-Fort Worth home at night",
    introduction: "We design lighting around the property—not around a box of fixtures. Every beam angle, fixture location and lighting zone is planned to enhance architecture, landscaping, safety and the way your family uses the space.",
    benefits: ["Custom lighting design for each property", "Low-voltage, outdoor-rated fixtures", "Pathway, tree, wall and architectural lighting", "Clean wiring and discreet fixture placement", "Smart timers, scenes and app control", "Residential and commercial installations"],
    applications: ["Front entries and façades", "Walkways, steps and driveways", "Trees, gardens and stonework", "Pools, patios and outdoor kitchens", "Pergolas and entertaining areas", "Restaurants and commercial properties"],
    process: [{title:"Consultation",text:"We walk the property and learn what you want to illuminate."},{title:"Lighting Design",text:"We plan fixture types, placement, beam angles and zones."},{title:"Installation",text:"Our team installs discreetly and protects the landscaping."},{title:"Night Adjustment",text:"We aim and fine-tune every light after dark."}],
    faqs: [{question:"How much does landscape lighting cost in Dallas?",answer:"Pricing depends on the property size, number and quality of fixtures, wiring conditions and control options. We provide a custom proposal after reviewing the space."},{question:"Can outdoor lighting be automated?",answer:"Yes. Lighting can run on schedules, sunset timing, app control or coordinated scenes for entertaining, security and everyday use."},{question:"Do you install lighting around pools and patios?",answer:"Yes. We design outdoor-rated lighting for pools, patios, pergolas, kitchens, pathways, gardens and architectural features."},{question:"Do you serve areas outside Dallas?",answer:"Yes. The Smart Living Group serves Dallas, Fort Worth and surrounding DFW communities including Southlake, Colleyville, Keller, Frisco, Plano and more."}]
  }} />;
}
