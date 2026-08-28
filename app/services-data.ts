export type ServiceTopic = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  features: { title: string; copy: string }[];
};

export const serviceTopics: ServiceTopic[] = [
  {
    slug: "outdoor-lighting",
    name: "Outdoor Lighting",
    tagline: "Architecture after dark.",
    image: "/projects/seo-outdoor-lighting.png",
    imageAlt:
      "Luxury home exterior at dusk with elegant architectural outdoor lighting in Dallas-Fort Worth",
    metaTitle: "Outdoor Lighting Installation Dallas–Fort Worth",
    metaDescription:
      "Professional outdoor lighting design and installation across Dallas–Fort Worth. Architectural, facade, entry and exterior lighting for luxury homes and businesses.",
    keywords: [
      "outdoor lighting Dallas",
      "outdoor lighting Fort Worth",
      "exterior lighting installation DFW",
      "architectural outdoor lighting",
      "luxury outdoor lighting Dallas",
    ],
    intro:
      "The Smart Living Group designs and installs premium outdoor lighting that makes your home look intentional and elegant after dark — from facade and architectural lighting to entries, driveways and outdoor living areas.",
    features: [
      {
        title: "Architectural Accents",
        copy: "Uplighting and wall washing that highlight columns, stone, texture and structure.",
      },
      {
        title: "Entry & Facade",
        copy: "Warm, welcoming light across entrances, driveways and the front of the home.",
      },
      {
        title: "Smart Control",
        copy: "Simple scenes and schedules from your phone, keypad or voice.",
      },
    ],
  },
  {
    slug: "outdoor-audio",
    name: "Outdoor Audio",
    tagline: "Hidden sound. Luxury feel.",
    image: "/projects/seo-outdoor-audio.png",
    imageAlt:
      "Discreet premium landscape speaker blended into luxury backyard landscaping at golden hour",
    metaTitle: "Outdoor Audio & Landscape Speakers Dallas–Fort Worth",
    metaDescription:
      "Outdoor audio installation across Dallas–Fort Worth. Landscape speakers, patio and pool audio and multi-zone outdoor sound systems designed to disappear.",
    keywords: [
      "outdoor audio Dallas",
      "outdoor audio Fort Worth",
      "landscape speakers DFW",
      "outdoor speakers Dallas",
      "patio audio installation",
    ],
    intro:
      "We design outdoor audio systems that blend into the landscape and deliver rich, even sound across patios, pools and gardens — without visible clutter or hot spots.",
    features: [
      {
        title: "Landscape Speakers",
        copy: "Discreet satellites and buried subwoofers tuned for balanced coverage.",
      },
      {
        title: "Pool & Patio Zones",
        copy: "Independent audio zones for entertaining areas throughout the property.",
      },
      {
        title: "Multi-Zone Control",
        copy: "Stream and control every zone from a single, simple interface.",
      },
    ],
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    tagline: "Gardens that glow.",
    image: "/projects/seo-landscape-lighting.png",
    imageAlt:
      "Professional landscape lighting illuminating trees, pathways and garden beds at a luxury Dallas property",
    metaTitle: "Landscape Lighting Installation Dallas–Fort Worth",
    metaDescription:
      "Professional landscape lighting across Dallas–Fort Worth. Path, tree, garden and water-feature lighting that transforms outdoor spaces after dark.",
    keywords: [
      "landscape lighting Dallas",
      "landscape lighting Fort Worth",
      "path lighting installation DFW",
      "garden lighting Dallas",
      "tree uplighting Fort Worth",
    ],
    intro:
      "Our landscape lighting turns gardens, pathways and mature trees into a beautiful nighttime experience, with low-voltage systems engineered for reliability and easy control.",
    features: [
      {
        title: "Path & Garden",
        copy: "Soft, safe illumination along walkways, steps and planting beds.",
      },
      {
        title: "Tree & Feature",
        copy: "Dramatic uplighting for trees, stonework and water features.",
      },
      {
        title: "Durable & Low-Voltage",
        copy: "Weather-rated fixtures built to last through every season.",
      },
    ],
  },
  {
    slug: "outdoor-tvs",
    name: "Outdoor TVs",
    tagline: "Entertainment outside.",
    image: "/projects/seo-outdoor-tvs.png",
    imageAlt:
      "Outdoor-rated television mounted above a stone fireplace on a luxury covered patio in Dallas",
    metaTitle: "Outdoor TV Installation Dallas–Fort Worth",
    metaDescription:
      "Outdoor TV installation across Dallas–Fort Worth. Weatherproof outdoor-rated displays, clean mounting and concealed wiring for patios, kitchens and pool areas.",
    keywords: [
      "outdoor TV installation Dallas",
      "outdoor TV installation Fort Worth",
      "outdoor television mounting DFW",
      "weatherproof outdoor TV Dallas",
      "patio TV installation",
    ],
    intro:
      "We install outdoor-rated televisions with clean mounting, concealed wiring and simple control so you can enjoy the game or a movie anywhere outside — rain or shine.",
    features: [
      {
        title: "Outdoor-Rated Displays",
        copy: "Bright, weatherproof TVs engineered for direct outdoor conditions.",
      },
      {
        title: "Concealed Wiring",
        copy: "Power and signal hidden for a clean, finished installation.",
      },
      {
        title: "Simple Control",
        copy: "One remote or app for the TV, sound and sources.",
      },
    ],
  },
  {
    slug: "motorized-shades",
    name: "Motorized Shades",
    tagline: "Comfort with one touch.",
    image: "/projects/seo-motorized-shades.png",
    imageAlt:
      "Motorized roller shades on a luxury covered terrace providing sun control and privacy",
    metaTitle: "Motorized Outdoor Shades Dallas–Fort Worth",
    metaDescription:
      "Motorized outdoor shade installation across Dallas–Fort Worth. Sun control, privacy and comfort for patios and outdoor living, integrated with smart scenes.",
    keywords: [
      "motorized shades Dallas",
      "motorized shades Fort Worth",
      "motorized patio shades DFW",
      "outdoor shade installation Dallas",
      "smart shades Fort Worth",
    ],
    intro:
      "Motorized shades give you instant sun control, privacy and comfort across covered patios and outdoor rooms, integrated with smart scenes for effortless everyday use.",
    features: [
      {
        title: "Sun & Heat Control",
        copy: "Lower the shades to cut glare and heat at the touch of a button.",
      },
      {
        title: "Privacy On Demand",
        copy: "Define your outdoor room whenever you want it.",
      },
      {
        title: "Smart Scenes",
        copy: "Automate by time of day, sun or a single tap.",
      },
    ],
  },
  {
    slug: "patio-lighting-and-audio",
    name: "Patio Lighting and Audio",
    tagline: "Set the whole scene.",
    image: "/projects/seo-patio-lighting-audio.png",
    imageAlt:
      "Luxury covered patio in the evening with integrated ambient lighting and discreet speakers",
    metaTitle: "Patio Lighting & Audio Dallas–Fort Worth",
    metaDescription:
      "Integrated patio lighting and audio across Dallas–Fort Worth. Ambient lighting and discreet speakers combined into one simple, beautiful outdoor experience.",
    keywords: [
      "patio lighting Dallas",
      "patio audio Fort Worth",
      "patio lighting and audio DFW",
      "outdoor entertainment patio Dallas",
      "patio sound and lighting",
    ],
    intro:
      "We combine ambient lighting and discreet audio into one seamless patio experience — the perfect scene for dinners, gatherings and quiet evenings, all controlled together.",
    features: [
      {
        title: "Layered Lighting",
        copy: "Ambient, accent and task lighting balanced for atmosphere.",
      },
      {
        title: "Discreet Audio",
        copy: "Speakers that blend in while filling the patio with sound.",
      },
      {
        title: "One-Touch Scenes",
        copy: "Lights and music set together for instant ambiance.",
      },
    ],
  },
  {
    slug: "outdoor-kitchen",
    name: "Outdoor Kitchen",
    tagline: "The heart of the backyard.",
    image: "/projects/seo-outdoor-kitchen.png",
    imageAlt:
      "Luxury outdoor kitchen at dusk with stone countertops, grill, task lighting and integrated technology in Dallas",
    metaTitle: "Outdoor Kitchen Technology Dallas–Fort Worth",
    metaDescription:
      "Outdoor kitchen technology across Dallas–Fort Worth. Task and ambient lighting, integrated audio and outdoor TVs that make your outdoor kitchen the center of entertaining.",
    keywords: [
      "outdoor kitchen Dallas",
      "outdoor kitchen Fort Worth",
      "outdoor kitchen lighting DFW",
      "outdoor kitchen audio Dallas",
      "outdoor kitchen technology",
    ],
    intro:
      "We bring technology to the outdoor kitchen — task and ambient lighting, integrated audio and outdoor displays — so cooking and entertaining feel effortless from afternoon to late night.",
    features: [
      {
        title: "Task & Ambient Lighting",
        copy: "Bright, functional light for cooking plus warm ambiance for guests.",
      },
      {
        title: "Integrated Audio",
        copy: "Music that carries across the kitchen, bar and dining areas.",
      },
      {
        title: "Entertainment Ready",
        copy: "Outdoor TVs and controls built into the entertaining space.",
      },
    ],
  },
];

export function getServiceTopic(slug: string) {
  return serviceTopics.find((topic) => topic.slug === slug);
}
