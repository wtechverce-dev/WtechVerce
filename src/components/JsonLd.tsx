"use client";

// JSON-LD Structured Data for WTechVerce
export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    logo: "https://wtechverce.com/wtech.png",
    description: "WTechVerce is a web and software development company specializing in custom software, SaaS products, web applications, and eCommerce platforms for businesses in the US, UK, and worldwide.",
    email: "wtechverce.io@gmail.com",
    telephone: "+92-313-7102600",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    sameAs: [
      "https://www.linkedin.com/company/wtechverce",
      "https://twitter.com/wtechverce",
      "https://github.com/wtechverce",
      "https://www.facebook.com/wtechverce",
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10",
    },
    knowsAbout: [
      "Custom Software Development",
      "Web Development",
      "SaaS Development",
      "Software Engineering",
      "Ecommerce Development",
      "UI/UX Design",
      "Mobile App Development",
      "WordPress Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    description: "WTechVerce | Web & Software Development Company",
  };


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    email: "wtechverce.io@gmail.com",
    telephone: "+92-313-7102600",
    description: "Web and software development company offering custom software engineering, SaaS development, web applications, and eCommerce platforms.",
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
