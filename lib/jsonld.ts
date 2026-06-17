/**
 * Structured-data builders. Each returns a plain JSON-LD object that the
 * <JsonLd /> component serializes into a <script type="application/ld+json">.
 * All values are derived from lib/site-data.ts.
 */
import {
  SITE,
  RATING,
  TESTIMONIALS,
  FAQ,
  SERVICES,
  SERVICE_AREAS,
} from "@/lib/site-data";

/** Every DFW city we serve, for the areaServed graph. */
const AREAS_SERVED = [
  { "@type": "City", name: `${SITE.address.city}, TX` },
  ...SERVICE_AREAS.map((a) => ({ "@type": "City", name: `${a.city}, TX` })),
  { "@type": "AdministrativeArea", name: "Dallas–Fort Worth Metroplex" },
];

/**
 * GeneralContractor (a recognized LocalBusiness subtype) + AggregateRating +
 * sample reviews + an areaServed graph. The primary business node.
 */
export function contractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.studioName,
    image: SITE.url + "/og.jpg",
    url: SITE.url,
    telephone: SITE.phoneHref,
    email: SITE.email,
    priceRange: "$$$",
    slogan: SITE.tagline,
    description:
      "Award-winning landscaping and outdoor-living design-build firm serving Dallas–Fort Worth — patios, outdoor kitchens, custom pools, pergolas, landscape design, and lighting.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: AREAS_SERVED,
    knowsAbout: [
      "Landscape design",
      "Paver patios and hardscaping",
      "Outdoor kitchens",
      "Swimming pool construction",
      "Pergolas and shade structures",
      "Landscape lighting",
      "Irrigation and turf",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      SITE.social.houzz,
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.google,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value.toFixed(1),
      reviewCount: RATING.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: TESTIMONIALS.slice(0, 3).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Living Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.blurb,
          areaServed: AREAS_SERVED,
          provider: { "@id": `${SITE.url}/#business` },
        },
      })),
    },
  };
}

/** Standalone Service nodes (used on the Services page). */
export function servicesSchema() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.blurb,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: AREAS_SERVED,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: `${s.name} — ${s.priceFrom}`,
    },
  }));
}

/** WebSite node so search engines understand the site name + publisher. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.legalName,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

/** FAQPage node — eligible for rich results. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Reusable breadcrumb builder for interior pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
