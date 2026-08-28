import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Motorized Outdoor Shades Dallas | Patio Shades DFW",
  description: "Motorized outdoor patio shades in Dallas–Fort Worth for sun control, privacy, insect protection and greater comfort in covered outdoor spaces.",
  alternates: { canonical: "/motorized-shades-dallas" },
  openGraph: { title: "Motorized Outdoor Shades Dallas–Fort Worth", description: "Automated patio shades for comfort, privacy and sun control.", url: "/motorized-shades-dallas", images: ["/projects/service-motorized-shades.png"] },
};

export default function Page() {
  return <ServicePage data={{
    name: "Motorized Outdoor Shades",
    eyebrow: "Motorized Shades • Dallas–Fort Worth",
    headline: "Motorized Outdoor Shades for Dallas–Fort Worth Patios.",
    description: "Automated patio shades designed to reduce glare and heat, improve privacy and make covered outdoor spaces more comfortable.",
    heroImage: "/projects/service-motorized-shades.png",
    heroAlt: "Motorized outdoor roller shades installed on a luxury covered patio in Dallas-Fort Worth",
    introduction: "Motorized exterior shades help extend the hours and seasons you can comfortably enjoy a patio. We design each system around the openings, sun exposure, wind conditions, architecture and preferred control method.",
    benefits: ["Sun, glare and heat reduction", "Added daytime and evening privacy", "Motorized operation with clean hardware", "Remote, keypad, app and voice options", "Preset scenes and schedule integration", "Custom fabrics, openness levels and colors"],
    applications: ["Covered patios and terraces", "Outdoor kitchens", "Pergolas and cabanas", "West-facing outdoor spaces", "Poolside seating areas", "Hospitality and restaurant patios"],
    process: [{title:"Consultation",text:"We review the openings, structure, sun exposure and desired privacy."},{title:"Measure & Select",text:"We confirm dimensions, fabric, color, motor and control options."},{title:"Installation",text:"Tracks, housings, power and shades are installed for a clean finish."},{title:"Programming",text:"We set limits, remotes, schedules and smart scenes, then demonstrate operation."}],
    faqs: [{question:"Do outdoor shades help with Texas heat?",answer:"They can significantly reduce direct sunlight and glare entering a covered patio, helping the space feel more comfortable. Results depend on exposure, fabric and enclosure."},{question:"Can motorized shades provide privacy?",answer:"Yes. Fabric selection and openness level determine visibility and privacy. We help choose the right material for daytime and evening needs."},{question:"How are outdoor shades controlled?",answer:"Depending on the system, shades can use a remote, wall keypad, phone app, schedule, voice command or integrated smart scene."},{question:"Can shades be installed on an existing patio?",answer:"Often, yes. We inspect the structure, opening dimensions, mounting surfaces and available power to determine the best installation approach."}]
  }} />;
}
