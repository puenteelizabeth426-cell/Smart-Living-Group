import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { SiteNav } from "../../site-nav";
import { serviceTopics, getServiceTopic } from "../../services-data";

export function generateStaticParams() {
  return serviceTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getServiceTopic(slug);

  if (!topic) {
    return { title: "Service Not Found" };
  }

  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    keywords: topic.keywords,
    alternates: { canonical: `/services/${topic.slug}` },
    openGraph: {
      title: `${topic.metaTitle} | The Smart Living Group`,
      description: topic.metaDescription,
      url: `/services/${topic.slug}`,
      images: [{ url: topic.image, width: 1200, height: 800, alt: topic.imageAlt }],
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getServiceTopic(slug);

  if (!topic) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: topic.name,
    description: topic.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "The Smart Living Group",
    },
    areaServed: "Dallas-Fort Worth, Texas",
    serviceType: topic.name,
  };

  const others = serviceTopics.filter((t) => t.slug !== topic.slug);

  return (
    <main>
      <SiteNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="serviceHero">
        <div className="serviceHeroMedia">
          <Image
            src={topic.image}
            alt={topic.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="serviceHeroOverlay" />

        <div className="serviceHeroContent reveal">
          <Link href="/#services" className="serviceBack">
            <ArrowLeft size={16} aria-hidden="true" />
            All Services
          </Link>
          <p className="eyebrow">{topic.tagline}</p>
          <h1>{topic.name}</h1>
          <p className="serviceHeroText">{topic.intro}</p>

          <div className="heroActions">
            <a href="#service-contact" className="button primary">
              Request Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link href="/#catalog" className="button secondary">
              View Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="serviceFeatures section">
        <div className="sectionHeader">
          <p className="eyebrow dark">What&apos;s Included</p>
          <h2>{`${topic.name} in Dallas–Fort Worth.`}</h2>
        </div>

        <div className="serviceFeatureGrid">
          {topic.features.map((feature) => (
            <article className="serviceFeatureCard" key={feature.title}>
              <div className="serviceFeatureIcon">
                <CheckCircle2 size={22} aria-hidden="true" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="serviceExplore section">
        <div className="sectionHeader center">
          <p className="eyebrow dark">Explore More</p>
          <h2>Other outdoor living services.</h2>
        </div>

        <div className="serviceExploreGrid">
          {others.map((other) => (
            <Link
              href={`/services/${other.slug}`}
              className="serviceExploreCard"
              key={other.slug}
            >
              <div className="serviceExploreMedia">
                <Image
                  src={other.image}
                  alt={other.imageAlt}
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span>{other.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="service-contact" className="contact section">
        <div>
          <p className="eyebrow">Start Your Project</p>
          <h2>{`Ready for ${topic.name.toLowerCase()}?`}</h2>
          <p>
            {`Request a consultation for ${topic.name.toLowerCase()} in Dallas–Fort Worth and our team will help design the right solution for your space.`}
          </p>
        </div>

        <div className="contactActions">
          <a
            href="tel:+18175103103"
            className="contactButton"
            aria-label="Call The Smart Living Group at 817-510-3103"
          >
            <Phone aria-hidden="true" />
            (817) 510-3103
          </a>
        </div>
      </section>

      <footer>
        <Image
          src="/projects/logo.webp"
          alt="The Smart Living Group Dallas-Fort Worth logo"
          width={240}
          height={240}
        />
        <p>The Smart Living Group — a S&amp;L Company</p>
        <p>
          Outdoor Audio • Landscape Lighting • Outdoor TVs • Motorized Shades •
          Outdoor Kitchen
        </p>
      </footer>
    </main>
  );
}
