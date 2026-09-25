import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Landscape Lighting Dallas | Smart Living",
  description:
    "Professional landscape lighting design and installation in Dallas-Fort Worth for homes, pathways, trees, gardens, patios and outdoor spaces.",
  alternates: {
    canonical: "/landscape-lighting-dallas",
  },
};

export default function Page() {
  return (
    <ServicePage
      data={{
        name: "Landscape Lighting",
        eyebrow: "Landscape Lighting • Dallas-Fort Worth",
        headline: "Landscape Lighting Designed for Dallas-Fort Worth Homes.",
        description:
          "Custom landscape lighting that highlights architecture, trees, pathways and outdoor spaces throughout Dallas-Fort Worth.",
        heroImage: "/projects/project-03.webp",
        heroAlt:
          "Professional landscape lighting installation at a Dallas-Fort Worth home",
        introduction:
          "We design landscape lighting around your property to create a warm, polished outdoor environment after dark. Every fixture, beam angle and lighting zone is planned around the architecture and landscaping.",
        benefits: [
          "Custom lighting design for each property",
          "Low-voltage outdoor-rated fixtures",
          "Pathway, tree and architectural lighting",
          "Clean professional installation",
        ],
        applications: [
          "Front entries and facades",
          "Walkways, steps and driveways",
          "Trees, gardens and stonework",
          "Pools, patios and outdoor kitchens",
        ],
        process: [
          {
            title: "Consultation",
            text: "We walk the property and learn what you want to illuminate.",
          },
          {
            title: "Lighting Design",
            text: "We plan fixture locations, beam angles and lighting zones for the property.",
          },
          {
            title: "Installation",
            text: "Our team installs the system carefully while protecting the landscaping.",
          },
        ],
        faqs: [
          {
            question: "How much does landscape lighting cost in Dallas?",
            answer:
              "Pricing depends on the property size, number and quality of fixtures, wiring and installation requirements. We provide a custom proposal after reviewing the property.",
          },
          {
            question: "Can landscape lighting be automated?",
            answer:
              "Yes. Landscape lighting can run on schedules, timers and compatible control systems.",
          },
        ],
      }}
    />
  );
}
