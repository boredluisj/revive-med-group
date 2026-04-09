const SITE_URL = "https://revivemedgroup.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Revive Medical Group",
    description:
      "Revive Medical Group provides hormone therapy, regenerative medicine, TRT, semaglutide weight loss, BHRT, IV nutrient therapy, Botox, and aesthetic treatments in North Myrtle Beach, SC.",
    url: SITE_URL,
    telephone: "843-299-9000",
    email: "info@revivemedgroup.com",
    image: `${SITE_URL}/images/client/revive/hero-bg.jpg`,
    logo: `${SITE_URL}/images/client/revive/favicon-original.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1016 Second Avenue N, Executive Center Suite 203-F",
      addressLocality: "North Myrtle Beach",
      addressRegion: "SC",
      postalCode: "29582",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.8168,
      longitude: -78.6801,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/revivemedgroup",
      "https://www.facebook.com/revivemedgroup",
    ],
    priceRange: "$$",
    medicalSpecialty: "Hormone Therapy & Regenerative Medicine",
    founder: {
      "@type": "Person",
      name: "Chad Watts, DMSc, PA-C",
      jobTitle: "Medical Director",
    },
  };
}

interface BlogPostParams {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  featuredImage: string;
}

export function blogPostSchema(post: BlogPostParams) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Revive Medical Group",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/client/revive/favicon-original.png`,
      },
    },
    image: `${SITE_URL}${post.featuredImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

interface ServiceParams {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export function serviceSchema(service: ServiceParams) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Revive Medical Group",
    url: `${SITE_URL}/services/${service.slug}`,
    telephone: "843-299-9000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1016 Second Avenue N, Executive Center Suite 203-F",
      addressLocality: "North Myrtle Beach",
      addressRegion: "SC",
      postalCode: "29582",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/revivemedgroup",
      "https://www.facebook.com/revivemedgroup",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            image: `${SITE_URL}${service.image}`,
            provider: {
              "@type": "MedicalBusiness",
              name: "Revive Medical Group",
            },
          },
        },
      ],
    },
  };
}
