import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Motorized Outdoor Shades Dallas | Patio Shades DFW",
  description:
    "Motorized outdoor patio shades in Dallas-Fort Worth for sun control, privacy, insect protection and greater comfort in covered outdoor spaces.",
  alternates: {
    canonical: "/motorized-shades-dallas",
  },
  openGraph: {
    title: "Motorized Outdoor Shades Dallas-Fort Worth",
    description:
      "Automated patio shades for comfort, privacy and sun control.",
    url: "/motorized-shades-dallas",
    images: ["/projects/service-motorized-shades.png"],
  },
};

export default function Page() {
  return (
    <ServicePage
      data={{
        name: "Motorized Outdoor Shades",
        eyebrow: "Motorized Shades · Dallas-Fort Worth",
        headline: "Motorized Outdoor Shades for Dallas-Fort Worth Patios.",
        description:
          "Automated patio shades designed to reduce glare and heat, improve privacy and make covered outdoor spaces more comfortable.",
        heroImage: "/projects/service-motorized-shades.png",
        heroAlt:
          "Motorized outdoor roller shades installed on a luxury covered patio in Dallas-Fort Worth",
        introduction:
          "Motorized exterior shades help extend the hours and seasons you can comfortably enjoy a patio.",
        seoContent:
          "Smart Living Group designs and installs custom motorized patio shades and electric outdoor shades throughout Dallas-Fort Worth.",
        benefits: [
          "Sun, glare and heat reduction",
          "Added daytime and evening privacy",
          "Motorized operation with clean hardware",
        ],
        applications: [
          "Covered patios and terraces",
          "Outdoor kitchens",
          "Pergolas and cabanas",
          "West-facing outdoor spaces",
          "Poolside seating areas",
        ],
        process: [
          {
            title: "Consultation",
            text: "We review the openings, structure, sun exposure and desired privacy.",
          },
          {
            title: "Measure & Select",
            text: "We confirm dimensions, fabric, color, motor and control options.",
          },
          {
            title: "Installation",
            text: "We install and configure the motorized shade system.",
          },
        ],
        faqs: [
          {
            question: "Do outdoor shades help with Texas heat?",
            answer:
              "They can significantly reduce direct sunlight and glare entering a covered patio, helping the space feel more comfortable.",
          },
          {
            question: "Can motorized outdoor shades be controlled remotely?",
            answer:
              "Depending on the system, shades can use a remote, wall keypad, phone app or scheduled controls.",
          },
        ],
      }}
    />
  );
}
