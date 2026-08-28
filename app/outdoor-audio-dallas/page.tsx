import type { Metadata } from "next";
import { ServicePage } from "../components/service-page";

export const metadata: Metadata = {
  title: "Outdoor Audio Dallas | Outdoor Speakers DFW",
  description: "Premium outdoor audio and landscape speaker installation in Dallas–Fort Worth for pools, patios, gardens and outdoor entertainment areas.",
  alternates: { canonical: "/outdoor-audio-dallas" },
  openGraph: { title: "Outdoor Audio & Landscape Speakers Dallas–Fort Worth", description: "Balanced outdoor sound designed for pools, patios and landscapes.", url: "/outdoor-audio-dallas", images: ["/projects/project-09.webp"] },
};

export default function Page() {
  return <ServicePage data={{
    name: "Outdoor Audio",
    eyebrow: "Outdoor Audio • Dallas–Fort Worth",
    headline: "Premium Outdoor Audio for Dallas–Fort Worth Backyards.",
    description: "Landscape speakers, patio audio and outdoor subwoofers engineered for even coverage, powerful sound and discreet integration.",
    heroImage: "/projects/project-09.webp",
    heroAlt: "Discreet landscape speaker installed for premium outdoor audio in a Dallas backyard",
    introduction: "A great outdoor system should sound consistent without creating loud spots near the house. We design speaker placement, amplification and audio zones around your pool, patio and landscaping for clear, balanced music throughout the property.",
    benefits: ["Even sound coverage across the yard", "Weather-resistant outdoor speakers", "Hidden landscape subwoofers", "Independent pool, patio and garden zones", "Easy phone, remote or smart-system control", "Clean, professional wiring and calibration"],
    applications: ["Swimming pools and spas", "Covered patios and pergolas", "Outdoor kitchens", "Gardens and landscaped yards", "Sports and entertainment areas", "Restaurants and hospitality patios"],
    process: [{title:"Site Review",text:"We measure the space and identify listening areas and sound restrictions."},{title:"Audio Design",text:"We select speaker locations, zones, amplification and control."},{title:"Installation",text:"Speakers and wiring are placed discreetly throughout the landscape."},{title:"Calibration",text:"We balance the system and show you how to control every zone."}],
    faqs: [{question:"What type of speakers work best outdoors?",answer:"The right system depends on the property. Landscape satellite speakers and buried or discreet subwoofers typically provide more even coverage than a pair of loud wall-mounted speakers."},{question:"Are outdoor speakers weatherproof?",answer:"We use outdoor-rated equipment designed to withstand North Texas heat, rain, dust and seasonal temperature changes when properly installed."},{question:"Can I control different outdoor areas separately?",answer:"Yes. Pool, patio, kitchen and garden areas can be designed as separate audio zones with independent volume and source control."},{question:"Can outdoor audio connect to my existing system?",answer:"Often, yes. We review the existing equipment and network, then recommend the best way to integrate or upgrade it."}]
  }} />;
}
