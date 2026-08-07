import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, BarChart3, Layout } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";
import Script from "next/script";

// In a real app, this would be fetched from a CMS like Sanity or a database.
// For SEO, keeping it hardcoded here works just as well.
const projects = [
  {
    slug: "custom-saas-platform-development",
    title: "Custom SaaS Platform Development",
    category: "Web Development",
    description: "Built a high-performance B2B lead generation platform handling complex data queries, real-time analytics, and automated outreach logic.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-[#FD4F00]/30 to-[#6C24FA]/20",
    clientGoal: "The client needed a highly scalable SaaS platform capable of processing millions of data points with near-zero latency, along with an intuitive user dashboard.",
    challenge: "Handling concurrent real-time queries and integrating complex third-party APIs without slowing down the primary user interface.",
    solution: "We engineered a microservices architecture using Node.js for the backend and Next.js (React) for a lightning-fast, server-rendered frontend.",
    results: [
      "400% increase in processing speed",
      "Zero downtime during peak traffic",
      "Successful launch generating $50k MRR in month one"
    ]
  },
  {
    slug: "wordpress-business-website-development",
    title: "WordPress Business Website Development",
    category: "WordPress & SEO",
    description: "Developed a lightning-fast, highly secure dental clinic WordPress site with local SEO optimization that tripled organic traffic.",
    tags: ["WordPress", "Local SEO", "Custom Theme"],
    gradient: "from-[#6C24FA]/30 to-[#FD4F00]/20",
    clientGoal: "The clinic wanted to dominate local search results while providing a seamless online appointment booking experience for patients.",
    challenge: "The old site was built on a bloated theme, causing 10+ second load times and high bounce rates, severely hurting local SEO.",
    solution: "We built a custom, lightweight WordPress theme from scratch, optimized Core Web Vitals, and implemented aggressive local schema markup.",
    results: [
      "Load time reduced from 12s to 1.2s",
      "310% increase in local organic traffic",
      "45% increase in online appointment bookings"
    ]
  },
  {
    slug: "ecommerce-website-development",
    title: "Ecommerce Website Development",
    category: "Ecommerce Development",
    description: "A conversion-optimized Shopify storefront integrated with local payment gateways and automated inventory syncing.",
    tags: ["Shopify", "React", "CRO"],
    gradient: "from-[#FF8833]/20 to-[#6B21A8]/20",
    clientGoal: "A direct-to-consumer brand needed a modern storefront optimized for mobile conversions and integrated with local fulfillment centers.",
    challenge: "Extremely high mobile bounce rate and complex local payment gateway requirements not supported natively by Shopify.",
    solution: "We developed a headless Shopify architecture using React to deliver sub-second mobile page loads and built custom payment integrations via Shopify APIs.",
    results: [
      "2.5x increase in mobile conversion rate",
      "Significant reduction in cart abandonment",
      "Automated fulfillment saving 20 hours/week"
    ]
  },
  {
    slug: "real-estate-web-application",
    title: "Custom Real Estate Web Application",
    category: "Web Application",
    description: "Complex property search portal with Mapbox integration, advanced filtering, and CRM capabilities.",
    tags: ["React", "PostgreSQL", "AWS"],
    gradient: "from-[#6B21A8]/20 to-[#FD4F00]/20",
    clientGoal: "Create a Zillow-like experience for a regional luxury real estate market with advanced map-based searching.",
    challenge: "Rendering thousands of property pins on a map interactively without crashing the browser.",
    solution: "Implemented Mapbox GL with dynamic clustering and a highly optimized PostgreSQL database backend to serve geo-spatial queries instantly.",
    results: [
      "Smooth 60fps map interactions",
      "50,000+ active monthly users",
      "Featured by regional real estate boards"
    ]
  },
  {
    slug: "fitness-gym-management-software",
    title: "Gym Management Software Development",
    category: "Software Development",
    description: "Custom internal tool for class scheduling, automated billing, and member retention tracking.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    gradient: "from-[#FD4F00]/20 to-[#6C24FA]/30",
    clientGoal: "Replace five different fragmented SaaS tools with one unified internal management system.",
    challenge: "Migrating highly sensitive recurring billing data safely while minimizing disruptions to daily gym operations.",
    solution: "Built a secure, PCI-compliant web application utilizing Stripe for billing and a unified dashboard for all administrative tasks.",
    results: [
      "$2,000/month saved on software subscriptions",
      "100% successful data migration",
      "Significant improvement in staff efficiency"
    ]
  },
  {
    slug: "restaurant-ordering-system",
    title: "Restaurant Food Ordering System",
    category: "Web App",
    description: "Real-time delivery tracking and digital menu system integrated with POS software.",
    tags: ["Next.js", "Node.js", "Socket.io"],
    gradient: "from-[#6C24FA]/20 to-[#FF8833]/20",
    clientGoal: "Eliminate third-party delivery app fees by bringing ordering and driver tracking in-house.",
    challenge: "Achieving real-time driver tracking and immediate kitchen notifications during peak weekend rushes.",
    solution: "Leveraged WebSockets (Socket.io) for instantaneous two-way communication between the customer app, kitchen display, and driver app.",
    results: [
      "Eliminated 30% commission fees to third parties",
      "Average order processing time reduced by 4 minutes",
      "Highly rated user experience"
    ]
  }
];

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | WTechVerce Portfolio`,
    description: project.description,
    alternates: {
      canonical: `https://wtechverce.com/portfolio/${project.slug}`,
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="article-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": project.title,
          "description": project.description,
          "author": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WTechVerce"
          }
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <div className="mb-6 flex gap-3 flex-wrap">
          <span className="text-sm font-bold tracking-wider uppercase text-[#FD4F00]">{project.category}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          {project.title}
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* CASE STUDY CONTENT */}
        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Layout className="w-8 h-8 text-[#6C24FA]" />
              <h2 className="text-3xl font-bold">The Goal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">{project.clientGoal}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="p-8 border border-[#FD4F00]/20 bg-[#FD4F00]/5 rounded-3xl">
              <p className="text-gray-300 leading-relaxed text-lg">{project.challenge}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-gray-400 leading-relaxed text-lg">{project.solution}</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <BarChart3 className="w-8 h-8 text-[#16a34a]" />
              <h2 className="text-3xl font-bold">The Results</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.results.map((result, i) => (
                <div key={i} className="bg-[#0A0F1A] border border-[#16a34a]/30 p-6 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-[#16a34a] mb-4" />
                  <p className="text-gray-300 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-24 text-center p-12 border border-white/10 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-3xl font-black mb-6">Want similar results?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let's discuss how we can engineer a custom solution for your specific business challenges.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
