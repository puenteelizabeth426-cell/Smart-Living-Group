import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Outdoor TV Installation Dallas | Patio TVs DFW",
  description: "Professional outdoor TV installation in Dallas–Fort Worth with outdoor-rated displays, secure mounting, concealed wiring and simple control.",
  alternates: { canonical: "/outdoor-tv-installation-dallas" },
  openGraph: { title: "Outdoor TV Installation Dallas–Fort Worth", description: "Outdoor-rated televisions professionally mounted and integrated for patios and pool areas.", url: "/outdoor-tv-installation-dallas", images: ["/projects/service-outdoor-tv.png"] },
};

export default function Page() {
  return <ServicePage data={{
    name: "Outdoor TV Installation",
    eyebrow: "Outdoor TVs • Dallas–Fort Worth",
    headline: "Professional Outdoor TV Installation in Dallas–Fort Worth.",
    description: "Outdoor-rated televisions, secure mounting, concealed wiring and reliable connectivity for patios, pergolas, kitchens and poolside entertainment.",
    heroImage: "/projects/service-outdoor-tv.png",
    heroAlt: "Outdoor-rated television professionally mounted on a covered Dallas patio",
    introduction: "Outdoor television installation requires more than mounting an indoor TV outside. We evaluate sunlight, viewing distance, weather exposure, mounting surfaces, power, sound and network performance to create a reliable entertainment area.",
    benefits: ["Full-sun and partial-sun outdoor TV options", "Secure mounts for masonry and framed walls", "Concealed, weather-protected wiring", "Streaming and network setup", "Outdoor soundbar or speaker integration", "Clean control from one remote or app"],
    applications: ["Covered patios", "Outdoor kitchens", "Pergolas and cabanas", "Pool and spa areas", "Fireplace and stone-wall installations", "Restaurant and commercial patios"],
    process: [{title:"Location Review",text:"We evaluate sunlight, weather exposure, viewing angles and mounting surfaces."},{title:"Equipment Plan",text:"We recommend the appropriate display, mount, sound and connectivity."},{title:"Professional Mounting",text:"The system is securely installed with clean, protected wiring."},{title:"Setup",text:"We configure streaming, audio and controls and complete a final walkthrough."}],
    faqs: [{question:"Can I use a regular indoor TV outside?",answer:"Indoor televisions are not designed for outdoor heat, moisture, dust or bright sunlight. An outdoor-rated display is the safer and more reliable option."},{question:"What is the difference between full-sun and partial-sun outdoor TVs?",answer:"Full-sun models are engineered for brighter, more exposed locations. Partial-sun or shaded models are intended for covered areas with less direct sunlight."},{question:"Can you hide the TV wires?",answer:"Yes. When the structure allows, we conceal and protect power, signal and network wiring for a clean installation."},{question:"Can you add outdoor audio with the TV?",answer:"Yes. We can integrate an outdoor soundbar, patio speakers or a complete landscape audio system with the television."}]
  }} />;
}
