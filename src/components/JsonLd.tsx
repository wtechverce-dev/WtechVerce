"use client";

// JSON-LD Structured Data for WTechVerce
export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    logo: "https://wtechverce.com/logo.png",
    description: "WTechVerce is a full-service web development and digital marketing agency providing custom software, eCommerce, and marketing solutions.",
    email: "wtechverce@gmail.com",
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
      "Software Development",
      "Digital Marketing",
      "SEO Services",
      "Custom Software Development",
      "WordPress Development",
      "Ecommerce Development",
      "UI/UX Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    description: "WTechVerce | Web Development & Digital Marketing Agency",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wtechverce.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    email: "wtechverce@gmail.com",
    telephone: "+92-313-7102600",
    description: "Web development and digital marketing agency offering custom software, SEO, and eCommerce platforms.",
    priceRange: "$$",
    currenciesAccepted: "USD, PKR",
    paymentAccepted: "Bank Transfer, PayPal",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WTechVerce Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Scalable business software, internal tools, and complex web applications.",
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Development",
            description: "Multi-tenant SaaS products with advanced architecture and Stripe integration.",
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "High-performance React, Next.js, and Node.js applications.",
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Development",
            description: "Conversion-optimized stores built on Shopify and WooCommerce.",
          }
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
