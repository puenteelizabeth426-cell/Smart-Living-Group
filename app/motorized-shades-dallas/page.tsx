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
        gallery: [
          {
            src: "/projects/shades-patio-evening.png",
            alt: "Luxury covered patio at dusk with motorized outdoor shades partially lowered, warm lighting and lounge seating in a Dallas-Fort Worth home",
            caption: "Motorized outdoor shades on a luxury covered patio, extending comfort into the evening.",
          },
          {
            src: "/projects/shades-sun-privacy.png",
            alt: "Motorized exterior roller shades fully lowered on a covered patio to provide sun protection and privacy",
            caption: "Shades lowered for sun, glare and privacy control during peak afternoon heat.",
          },
          {
            src: "/projects/shades-installation.png",
            alt: "Clean professional motorized roller shade installation with sleek aluminum cassette and side guide tracks",
            caption: "A clean, professional installation with concealed wiring and premium hardware.",
          },
          {
            src: "/projects/shades-patio-daytime.png",
            alt: "Finished luxury covered patio in daylight with motorized outdoor shades raised, opening onto a manicured backyard and pool",
            caption: "Shades raised to open the space to the backyard and pool on a clear day.",
          },
        ],
      }}
    />
  );
}
