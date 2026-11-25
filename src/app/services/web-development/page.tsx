import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Zap, Server, Globe2, Layout } from "lucide-react";
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
          "description": "WTechVerce is a custom website development company and web development agency engineering bespoke web applications, responsive corporate sites, and secure business portals.",
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
                "text": "Pre-made templates ship with bloated scripts, restrictive layouts, and third-party plugin vulnerabilities that limit search visibility and growth. Working with a custom website development company gives you clean semantic code built on Next.js and React, tailored UX tailored to conversion, stronger Core Web Vitals optimization, and 100% source code ownership."
              }
            },
            {
              "@type": "Question",
              "name": "What factors influence custom web application development cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom web application development cost depends on feature scope, third-party API integrations, user roles and authentication, database architecture, and custom dashboard complexity. Simple marketing sites start around $1,500–$5,000, while interactive web apps typically range from $10,000–$40,000+."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide white label web development services for agency partners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our white label web development services support digital marketing firms, design studios, and consultancies that need dependable frontend and backend engineers under strict NDA confidentiality and direct Slack/Jira collaboration."
              }
            },
            {
              "@type": "Question",
              "name": "Can you build customized web portals and internal business dashboards?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. As an experienced web portal development company, we build role-based client portals, vendor management hubs, booking dashboards, and cloud web applications engineered around your exact daily workflows."
              }
            },
            {
              "@type": "Question",
              "name": "How does WTechVerce collaborate with clients across US and UK timezones?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our team schedules daily working-hour overlap with US Eastern and UK timezones, conducts weekly sprint video demos, and shares real-time GitHub and Jira progress so remote stakeholders always have full visibility."
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
            Website Development Company &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Custom Web Applications
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Slow templates, fragile plugins, and rigid page builders quietly cost businesses leads every day. WTechVerce is a dedicated website development company and web development agency that turns sluggish web properties into fast, conversion-focused digital products.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            Whether you are launching a bespoke web application with React and Next.js, building an interactive customer portal, or hiring a technical partner for white label web development services, our senior engineers deliver clean, maintainable codebases you own outright.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Get a Custom Web Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/blog/custom-website-development-cost" variant="outline" size="lg">
              See 2026 Pricing Breakdown
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
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Engineered for Conversions</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Full-Stack Web Architecture Built for Core Web Vitals &amp; Scale</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Next.js 16 · React 19 · TypeScript
            </span>
          </div>
        </div>

        {/* PROBLEM -> SOLUTION & CAPABILITIES */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Who This Is Built For</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Custom Web Development Services Designed Around Business Outcomes</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your website should be your highest-performing sales rep, not a maintenance headache. Our custom web development services and <strong className="text-white">custom web application development services</strong> align clean semantic SEO structure with clear buyer journeys. As an experienced <strong className="text-white">responsive web development company</strong>, we ensure search visitors actually turn into qualified inquiries.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Instead of forcing your brand into generic templates, our <strong className="text-white">custom website development services</strong> and website design and development services pair custom UI architecture with resilient backend engineering—avoiding plugin bloat, unexpected downtime, and layout bottlenecks on mobile devices.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We serve growing companies seeking affordable web development services and high-impact <strong className="text-white">website development for small business</strong>, mid-market teams requiring <strong className="text-white">custom web app development</strong> and <strong className="text-white">custom web portal development</strong>, and agencies scaling delivery through white label partnerships. As a premier <strong className="text-white">bespoke web application development company</strong> specializing in <strong className="text-white">bespoke web application development</strong>, we build digital assets that stand out.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#FD4F00]" />, title: "Bespoke Web Applications", desc: "As a web application development company, we build interactive Next.js and React platforms tailored to custom workflows." },
              { icon: <Globe2 className="w-6 h-6 text-[#FD4F00]" />, title: "Custom Web Portals", desc: "Dedicated web portal development company solutions for client accounts, vendor onboarding, and live operations." },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Search-Ready Architecture", desc: "A web development and SEO company foundation featuring structured Schema.org markup and responsive layouts." },
              { icon: <Zap className="w-6 h-6 text-[#FD4F00]" />, title: "White Label Engineering", desc: "Reliable white label web development agency pods giving marketing firms full-stack capacity under NDA." },
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
              We select battle-tested frameworks based on your exact workload—never locking you into proprietary builders.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Responsive web development from a recognized <strong className="text-white">react js application development company</strong> with React JS application architecture, Next.js App Router, TypeScript, and fluid mobile-first UI.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Server-rendered Next.js &amp; React 19 interfaces</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Strict TypeScript contracts &amp; WCAG accessibility</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Core Web Vitals optimization across mobile &amp; desktop</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FD4F00]/30 rounded-3xl bg-[#FD4F00]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FD4F00] text-white text-xs font-black uppercase rounded-full tracking-wider">Scalable Backend</div>
              <h3 className="text-2xl font-bold mb-4 text-white">APIs &amp; Data Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Secure backend microservices delivered as a <strong className="text-white">custom python web development company</strong>, <strong className="text-white">laravel website development company</strong>, and reliable provider of <strong className="text-white">php website development services</strong>.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Node.js, Express &amp; custom Python APIs</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Laravel &amp; modern PHP application architecture</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> PostgreSQL, MongoDB &amp; Redis caching layers</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Portals &amp; Headless CMS</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Customized web application development connecting client dashboards with headless content editors and legacy systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Role-based client &amp; vendor portal dashboards</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Headless Sanity, Strapi &amp; decoupled WordPress CMS</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Structured migrations from Drupal &amp; legacy platforms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BUYER COMPARISON MATRIX (SEARCH INTENT) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Architectural Comparison</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Custom Web Development vs. Pre-Made Templates</h2>
            <p className="text-gray-400 text-base">
              Understand why growing businesses outgrow generic templates and invest in bespoke web engineering.
            </p>
          </div>
          <div className="overflow-x-auto bg-[#0A0F1A] border border-white/10 rounded-3xl">
            <table className="w-full text-sm text-left">
              <thead className="border-b border-white/10 bg-white/[0.02]">
                <tr>
                  <th className="py-4 px-6 text-gray-400 font-bold uppercase text-xs">Decision Factor</th>
                  <th className="py-4 px-6 text-gray-400 font-bold uppercase text-xs">Generic Pre-Made Template</th>
                  <th className="py-4 px-6 text-[#FD4F00] font-bold uppercase text-xs">WTechVerce Custom Web Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Page Speed & Core Web Vitals", "Heavy unused CSS/JS scripts hurt mobile LCP scores", "Clean Next.js bundle splitting & optimized asset delivery"],
                  ["Technical SEO Structure", "Nested div bloat & conflicting plugin metadata", "Semantic HTML, custom Schema.org JSON-LD & clean canonicals"],
                  ["Custom Features & APIs", "Limited to off-the-shelf plugin compatibility", "Bespoke workflows, CRMs, Stripe billing & real-time portals"],
                  ["Security Footprint", "Exposed to common third-party plugin vulnerabilities", "Lean dependency tree with custom auth & strict input validation"],
                  ["Ownership & Lock-In", "Tied to theme builders and recurring plugin licenses", "100% full GitHub source code and intellectual property ownership"],
                ].map(([factor, tmpl, custom], idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{factor}</td>
                    <td className="py-4 px-6 text-gray-400">
                      <span className="inline-flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" /> {tmpl}</span>
                    </td>
                    <td className="py-4 px-6 text-gray-200">
                      <span className="inline-flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00] shrink-0 mt-0.5" /> {custom}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WHY PARTNER WITH US */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Delivery Standards</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">How Our Web Development Agency Keeps Projects Predictable</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              From startups in North America and the UK to agencies outsourcing overflow builds, every engagement runs on transparent two-week sprints, shared staging URLs, and direct Slack access to your lead engineers.
            </p>
            <ul className="space-y-4">
              {[
                "Line-item milestones and transparent custom web application development cost scoping before coding starts.",
                "Clean React, Next.js, Node.js, Laravel, and Python repositories with full automated build checks.",
                "Dedicated staging links every sprint so you test responsive mobile and desktop layouts firsthand.",
                "Complete GitHub handover and post-launch maintenance options with zero agency lock-in.",
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
                Pre-made templates ship with bloated scripts, restrictive layouts, and third-party plugin vulnerabilities that limit search visibility and growth. Working with a custom website development company gives you clean semantic code built on Next.js and React, tailored UX tailored to conversion, stronger Core Web Vitals optimization, and 100% source code ownership.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What factors influence custom web application development cost?</h4>
              <p className="text-gray-400 leading-relaxed">
                Custom web application development cost depends on feature scope, third-party API integrations, user roles and authentication, database architecture, and custom dashboard complexity. Simple marketing sites start around $1,500–$5,000, while interactive web apps typically range from $10,000–$40,000+.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide white label web development services for agency partners?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes. Our white label web development services support digital marketing firms, design studios, and consultancies that need dependable frontend and backend engineers under strict NDA confidentiality and direct Slack/Jira collaboration.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you build customized web portals and internal business dashboards?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes. As an experienced web portal development company, we build role-based client portals, vendor management hubs, booking dashboards, and cloud web applications engineered around your exact daily workflows.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How does WTechVerce collaborate with clients across US and UK timezones?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our team schedules daily working-hour overlap with US Eastern and UK timezones, conducts weekly sprint video demos, and shares real-time GitHub and Jira progress so remote stakeholders always have full visibility.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build With a Premier Web Development Agency?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your website objectives with our technical leads and receive a clear project scope, realistic timeline, and itemized estimate.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
