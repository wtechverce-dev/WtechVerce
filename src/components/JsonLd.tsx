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
      "WTechVerce is a full-service digital marketing agency for small businesses, SaaS, eCommerce, law firms, and home services.",
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
      "Digital Marketing",
      "SEO",
      "Paid Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Web Design",
      "Conversion Rate Optimization",
      "Email Marketing",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WTechVerce",
    url: "https://wtechverce.com",
    description:
      "Digital Marketing Agency for Small Business & Growing Brands — WTechVerce builds strategies that drive real revenue.",
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
      "Digital marketing agency offering SEO, PPC, Content Marketing, and Web Design services worldwide.",
    priceRange: "$$",
    currenciesAccepted: "USD, PKR",
    paymentAccepted: "Bank Transfer, PayPal",
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WTechVerce Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO",
            description: "Technical fixes, content strategy, and link building for real rankings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paid Advertising (PPC)",
            description: "Google Ads and Meta Ads built around target cost-per-acquisition.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description: "Content and community management that builds brand recognition.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design & CRO",
            description: "Testing and refining pages to turn more visitors into leads and customers.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a digital marketing agency do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A digital marketing agency plans, builds, and manages your online marketing — SEO, paid ads, content, social media, and web optimization — so you get more qualified leads and customers without building an in-house team."
        }
      },
      {
        "@type": "Question",
        name: "How much does a digital marketing agency cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary by industry, competition, and how many channels you need. Most businesses invest in a monthly retainer scoped to specific deliverables, with pricing set after an audit rather than a flat, generic rate."
        }
      },
      {
        "@type": "Question",
        name: "How is a digital marketing agency different from a freelancer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An agency gives you a full team — strategist, SEO specialist, ad manager, content writer — instead of one person covering everything. That matters once your marketing needs more than one channel running well at the same time."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paid advertising can show early signals within weeks. SEO and organic growth typically take 3–6 months to build meaningful momentum, since it depends on competition and your starting point."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a digital marketing agency if I already have an in-house marketing person?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, yes — as a specialist extension, not a replacement. Most in-house marketers are generalists. An agency adds channel-specific expertise (technical SEO, paid media strategy) without the cost of five new hires."
        }
      },
      {
        "@type": "Question",
        name: "What industries does WTechVerce work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small and local businesses, SaaS companies, startups, eCommerce brands, law firms, home service businesses like roofing and HVAC, medical and dental clinics, and enterprise teams."
        }
      },
      {
        "@type": "Question",
        name: "Is there a contract, and can I cancel anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work month-to-month. You stay because results justify it, not because a contract requires it."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
