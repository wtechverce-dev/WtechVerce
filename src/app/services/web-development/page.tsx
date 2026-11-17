import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Code, Monitor, Smartphone, Zap, Server, Globe2, Layout, Layers, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Website Development Company & Web Agency",
  description:
    "WTechVerce is a website development company providing custom web development services, bespoke web applications, and responsive portals.",
  keywords: [
    "website development company",
    "web development agency",
    "custom web development",
    "web application development company",
    "custom web development services",
    "custom web application development services",
    "custom website development services",
    "website design and development services",
    "website development for small business",
    "white label web development services",
    "web portal development company",
    "custom web portal development",
    "react js application development company",
    "custom python web development company",
    "laravel website development company",
    "php website development services",
    "custom web application development cost",
    "white label web development agency",
    "web development and seo company",
    "responsive web development company",
    "bespoke web application development company",
    "customized web application development",
    "bespoke web application development",
    "affordable web development services",
    "custom web app development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/web-development",
  },
  openGraph: {
    title: "Website Development Company & Web Agency | WTechVerce",
    description:
      "WTechVerce is a website development company providing custom web development services, bespoke web applications, and responsive portals.",
    url: "https://wtechverce.com/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company & Web Agency | WTechVerce",
    description:
      "WTechVerce is a website development company providing custom web development services, bespoke web applications, and responsive portals.",
  },
};

export default function WebDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Website Development Company & Custom Web Application Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a professional website development company and web development agency engineering custom web applications, responsive corporate websites, and secure digital portals.",
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Australia" }
          ]
        })}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why hire a custom website development company instead of using a pre-made template?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We focus on performance optimization, Core Web Vitals, efficient code, and caching strategies to deliver fast, responsive websites. Actual performance depends on the project architecture, hosting environment, and user network conditions."
              }
            },
            {
              "@type": "Question",
              "name": "What factors influence custom web application development cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom web application development cost depends on scope complexity, custom API integrations, user authentication tiers, database architecture, and real-time features. We provide transparent, milestone-based estimates before development begins."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide white label web development services for agency partners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our white label web development services support digital agencies, marketing firms, and consultancies needing dedicated frontend and backend engineering capacity under complete confidentiality and strict NDA terms."
              }
            },
            {
              "@type": "Question",
              "name": "Can you build customized web portals and internal business dashboards?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a web portal development company we design and build secure client portals, vendor management systems, interactive dashboards, and cloud web applications tailored to your business operations."
              }
            },
            {
              "@type": "Question",
              "name": "How does WTechVerce collaborate with clients across US timezones?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We maintain daily communication overlap with US timezones via Slack, weekly sprint video standups, and transparent Jira or GitHub project tracking, delivering seamless remote collaboration from concept to deployment."
              }
            }
          ]
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HERO */}
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
            Bespoke Web Development Agency
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Website Development Company & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Custom Web Applications
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            WTechVerce is a full-service <strong className="text-white">website development company</strong> and bespoke <strong className="text-white">web development agency</strong>. We engineer high-performance web applications, modern corporate websites, and secure business portals designed to convert visitors into measurable revenue.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From responsive web application development and custom web portal development to dedicated frontend and backend engineering, we deliver scalable codebases using Next.js, React, Node.js, and Python—built without technical debt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your Web Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Web Case Studies
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Custom web development services and responsive website development company interface"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Engineered for Performance</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Full-Stack Web Engineering Built for Scale, Speed &amp; Conversions</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Next.js 16 &amp; React 19
            </span>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Digital Engineering</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Custom Web Development Services for Growing Businesses</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your website is your primary digital storefront and sales engine. Our <strong className="text-white">custom web development services</strong> ensure your digital platform communicates authority, loads instantly across mobile and desktop screens, and guides visitors smoothly into qualified sales conversations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We reject rigid, slow templates that restrict your growth and create security liabilities. Instead, our <strong className="text-white">website design and development services</strong> utilize clean, hand-crafted architectures that provide complete operational control, modular scalability, and built-in search engine optimization.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need <strong className="text-white">website development for small business</strong> to establish market presence, bespoke corporate portal development, or complex cloud web applications, our dedicated engineering team delivers reliable craftsmanship tailored to your commercial objectives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#FD4F00]" />, title: "Custom Web Applications", desc: "Bespoke web application development built with React and Next.js for high interactivity." },
              { icon: <Globe2 className="w-6 h-6 text-[#FD4F00]" />, title: "Web Portals & Dashboards", desc: "Custom web portal development for client management, vendor access, and internal operations." },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Full-Stack Web Services", desc: "Dedicated frontend and backend web development services with robust REST and GraphQL APIs." },
              { icon: <Zap className="w-6 h-6 text-[#FD4F00]" />, title: "White Label Engineering", desc: "White label web development services for marketing agencies needing reliable technical capacity." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Full-Stack Matrix</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Modern Web Development Technologies We Leverage</h2>
            <p className="text-gray-400 text-base">
              As an agile web development agency, we engineer platforms using proven, high-performance technology stacks built for enterprise scalability and maintainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Frameworks</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Specialized React JS application development and Next.js architectures using TypeScript and Tailwind CSS for fluid interactivity and instant server-rendered page loads.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Next.js App Router &amp; Server Components</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> React 19 &amp; TypeScript type safety</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Core Web Vitals optimization &amp; mobile responsiveness</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FD4F00]/30 rounded-3xl bg-[#FD4F00]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FD4F00] text-white text-xs font-black uppercase rounded-full tracking-wider">Enterprise Performance</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Backend &amp; API Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Robust backend engineering using Node.js, Python, Laravel, and PHP website development services to construct secure, high-throughput microservices.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Node.js, Express &amp; custom Python web development</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Laravel website development &amp; RESTful API design</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> PostgreSQL, MongoDB &amp; Redis caching infrastructure</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Content Systems &amp; Portals</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Custom web portal development and headless CMS architectures empowering business teams to manage content, user tiers, and integrations effortlessly.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Custom client and vendor portal dashboards</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Headless Sanity, Strapi &amp; decoupled WordPress setups</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Legacy CMS migration (including Drupal and Java integrations)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US / AGENCY PARTNERSHIPS */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">A Premier Custom Web Development Agency Focused on Real Business Results</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We collaborate with growing businesses, enterprise teams, and creative agencies across North America and Europe. Whether serving clients in tech hubs like New York, Chicago, Denver, or Austin, our agile development methodology guarantees transparent milestone delivery, clean codebases, and direct communication.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized custom website development company with proven global delivery across US, UK, and international clients.",
                "Professional website design and development services focused on stakeholder trust, brand credibility, and measurable conversion rates.",
                "Responsive web application development built with React and Next.js for instant client-side performance.",
                "Dedicated frontend and backend web development services providing complete support from initial discovery to production deployment.",
                "White label web development agency partnerships providing reliable overflow engineering capacity under strict confidentiality.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FD4F00] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RELEVANT WEB DEVELOPMENT CASE STUDIES */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Work</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured Web Engineering Projects</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#FD4F00] font-bold hover:underline mt-4 md:mt-0">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/real-estate-web-application" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#6C24FA]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Interactive Web Application</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#c29dfd] transition-colors mb-4">
                Custom Real Estate Search &amp; Discovery Portal
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Engineered an interactive Mapbox GL property search portal with dynamic pin clustering, PostgreSQL geospatial queries, and direct agent CRM integration.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Explore Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" />
              </span>
            </Link>

            <Link href="/portfolio/ecommerce-website-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#FD4F00]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">Headless eCommerce</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FD4F00] transition-colors mb-4">
                High-Conversion D2C Storefront Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Delivered a headless React storefront integrated with Shopify APIs, automated inventory sync, regional payment gateways, and a responsive mobile checkout flow.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Explore Case Study <ArrowRight className="w-4 h-4 text-[#FD4F00]" />
              </span>
            </Link>
          </div>
        </div>

        {/* EDUCATIONAL RESOURCE BRIDGE (TOPICAL CLUSTER) */}
        <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 md:p-12 mb-32 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-2">Cost &amp; Strategy Analysis</span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              How Much Does Custom Web Application Development Cost in 2026?
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore transparent price ranges for simple websites, custom web applications, and enterprise digital platforms in our comprehensive 2026 cost guide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href="/blog/custom-website-development-cost" variant="outline" size="md">
              Read Cost Guide <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/blog/wordpress-vs-custom-website" variant="outline" size="md">
              WordPress vs Custom
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About Web Development</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why hire a custom website development company instead of using a pre-made template?</h4>
              <p className="text-gray-400 leading-relaxed">
                We focus on performance optimization, Core Web Vitals, efficient code, and caching strategies to deliver fast, responsive websites. Actual performance depends on the project architecture, hosting environment, and user network conditions.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What factors influence custom web application development cost?</h4>
              <p className="text-gray-400 leading-relaxed">
                Custom web application development cost depends on scope complexity, custom API integrations, user authentication tiers, database architecture, and real-time features. We provide transparent, milestone-based estimates before development begins.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide white label web development services for agency partners?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our white label web development services support digital agencies, marketing firms, and consultancies needing dedicated frontend and backend engineering capacity under complete confidentiality and strict NDA terms.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you build customized web portals and internal business dashboards?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a web portal development company we design and build secure client portals, vendor management systems, interactive dashboards, and cloud web applications tailored to your business operations.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How does WTechVerce collaborate with clients across US timezones?</h4>
              <p className="text-gray-400 leading-relaxed">
                We maintain daily communication overlap with US timezones via Slack, weekly sprint video standups, and transparent Jira or GitHub project tracking, delivering seamless remote collaboration from concept to deployment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build With a Premier Web Development Agency?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your website objectives with our technical leads and receive a comprehensive project scope, timeline, and quote.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
