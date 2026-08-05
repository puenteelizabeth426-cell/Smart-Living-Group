const siteUrl = "https://smartliving-texas.com";
const email = "Smartlivingroup@gmail.com";
const logo = `${siteUrl}/projects/logo.webp`;
const heroImage = `${siteUrl}/projects/project-01.webp`;

const services = [
  {
    name: "Outdoor Audio",
    description:
      "Landscape speakers, subwoofers and premium multi-zone audio systems designed to disappear into the environment while delivering powerful, balanced sound.",
  },
  {
    name: "Landscape Lighting",
    description:
      "Elegant landscape lighting design for homes, gardens, entries, pathways, trees, stonework, water features and outdoor entertaining spaces.",
  },
  {
    name: "Outdoor TV Installation",
    description:
      "Outdoor-rated displays with clean mounting, concealed wiring and simple control for patios, kitchens, pergolas and pool areas.",
  },
  {
    name: "Motorized Shades",
    description:
      "Motorized shade systems for privacy, sun control and comfort, integrated with smart home scenes and outdoor living spaces.",
  },
];

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Smart Living Group",
    legalName: "Smart Living Group, a S&L Company",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 1512,
      height: 1181,
    },
    image: heroImage,
    email,
    slogan: "The Art of Perfect Living",
    description:
      "Smart Living Group designs and installs outdoor audio, landscape lighting, outdoor TVs and motorized shades for luxury homes across Dallas–Fort Worth.",
    areaServed: {
      "@type": "Place",
      name: "Dallas–Fort Worth Metroplex, Texas",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Smart Living Group",
    url: siteUrl,
    image: heroImage,
    logo,
    email,
    priceRange: "$$$",
    description:
      "Luxury outdoor technology company specializing in outdoor audio, landscape lighting, outdoor TVs and motorized shades across Dallas–Fort Worth.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
      addressLocality: "Dallas–Fort Worth",
    },
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Fort Worth" },
      { "@type": "AdministrativeArea", name: "Dallas–Fort Worth Metroplex" },
    ],
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  };

  const serviceGraph = services.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-${index + 1}`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Dallas–Fort Worth Metroplex, Texas",
    },
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
      { "@type": "ListItem", position: 3, name: "Gallery", item: `${siteUrl}/#gallery` },
      { "@type": "ListItem", position: 4, name: "Catalog", item: `${siteUrl}/#catalog` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${siteUrl}/#contact` },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Smart Living Group",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  const graph = [organization, website, localBusiness, ...serviceGraph, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
