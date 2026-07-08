"use client";

// JSON-LD Structured Data for WTechVerce
// Yeh Google ko batata hai ke ye site kya hai — rich search results ke liye zaroori hai

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    logo: "https://wtechverce.com/logo.png",
    description:
      "WTechVerce is a premium digital agency specializing in Web Development, SaaS Platforms, AI Solutions, and UI/UX Design.",
    email: "WTechVerse@gmail.com",
    telephone: "+92-313-7102600",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    sameAs: [
      "https://wtechverce.com",
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10",
    },
    knowsAbout: [
      "Web Development",
      "SaaS Development",
      "AI Solutions",
      "UI/UX Design",
      "Custom Software Development",
      "Next.js",
      "React",
      "Node.js",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    description:
      "Premium Web Development & AI Agency — WTechVerce builds world-class digital products.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wtechverce.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    email: "WTechVerse@gmail.com",
    telephone: "+92-313-7102600",
    description:
      "Premium digital agency offering Web Development, SaaS, AI Solutions, and UI/UX Design services worldwide.",
    priceRange: "$$",
    currenciesAccepted: "USD, PKR",
    paymentAccepted: "Bank Transfer, PayPal",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WTechVerce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom web application development using Next.js, React, and modern technologies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Development",
            description:
              "End-to-end SaaS platform development with scalable architecture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions",
            description:
              "Custom AI and machine learning solutions integrated into your business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "User-centered design that converts visitors into customers.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
