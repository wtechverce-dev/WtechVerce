import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield, Layers, Users, Workflow, Code2, Terminal, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Software Development Company & Apps",
  description:
    "WTechVerce is a custom software development company. We engineer enterprise software, custom business tools, and scalable cloud apps.",
  keywords: [
    "custom software development company",
    "enterprise software development",
    "enterprise software development company",
    "custom enterprise software development",
    "custom business software",
    "software application development",
    "outsourcing software development services",
    "custom software development for startups",
    "best custom software development companies",
    "top custom software development companies",
    "best custom software development company",
    "custom software development services usa",
    "software development for small business",
    "mvp software development agency",
    "crm software development company",
    "custom logistics software development",
    "custom manufacturing software development",
    "real estate software development company",
    "automotive software development services",
    "desktop application development company",
    "custom desktop app development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development Company & Apps | WTechVerce",
    description:
      "WTechVerce is a custom software development company. We engineer enterprise software, custom business tools, and scalable cloud apps.",
    url: "https://wtechverce.com/services/software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company & Apps | WTechVerce",
    description:
      "WTechVerce is a custom software development company. We engineer enterprise software, custom business tools, and scalable cloud apps.",
  },
};

export default function SoftwareDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development Company & Enterprise Software Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a custom software development company delivering bespoke enterprise software development, business automation systems, and scalable cloud applications.",
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
              "name": "Why partner with an enterprise software development company instead of buying off-the-shelf software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Partnering with a custom software development company gives you 100% intellectual property ownership, zero per-seat subscription fees, and bespoke systems built around your exact business logic that commercial packages cannot accommodate."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the custom software development lifecycle take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline typically spans 8 to 16 weeks for a startup MVP, and 4 to 8 months for complex enterprise software development, delivered in agile bi-weekly sprints."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire dedicated software developers or engage in outsourcing software development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide flexible engagement models including dedicated developer pods for staff augmentation and turnkey end-to-end milestone delivery with full timezone overlap for US and European clients."
              }
            },
            {
              "@type": "Question",
              "name": "Do you develop cross-platform desktop applications as well as cloud systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a desktop application development company we engineer high-performance cross-platform desktop tools (using Electron and modern C++/Node frameworks) integrated directly with cloud databases and local hardware."
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
            Bespoke Software Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Development Company
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            WTechVerce is a premier <strong className="text-white">custom software development company</strong>. We engineer high-performance <strong className="text-white">enterprise software development</strong> systems, custom business tools, and scalable cloud applications tailored to your proprietary operations.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From custom enterprise software development and automated workflow architectures to rapid MVP development for high-growth startups, our senior engineers deliver maintainable, secure software that eliminates operational friction and drives long-term efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Discuss Your Software Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Software Case Studies
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
            alt="Custom software development company engineers building enterprise software systems"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Resilient Architecture</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Engineered for Reliability, Data Integrity &amp; Operational Continuity</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Enterprise-Grade Architecture
            </span>
          </div>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">High-Value Engineering</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Enterprise Software Development Built for Scalability &amp; Growth</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When rigid off-the-shelf software packages fail to support your unique business models, investing in <strong className="text-white">custom business software</strong> becomes essential. As a specialized <strong className="text-white">enterprise software development company</strong>, we construct custom solutions engineered to resolve operational bottlenecks and replace fragmented spreadsheets with automated workflows.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our <strong className="text-white">software application development</strong> services cover everything from internal resource management tools and custom CRM/ERP engines to multi-tenant cloud applications. Every codebase is built with full source-code ownership, strict data encryption, and zero ongoing licensing penalties.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you require <strong className="text-white">software development for small business</strong> to streamline operations or dedicated teams for full-scale enterprise software modernization, WTechVerce delivers dependable, milestone-driven technical execution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Architecture", desc: "Custom enterprise software development with microservices, secure APIs, and high concurrency." },
              { icon: <Layers className="w-6 h-6 text-[#FD4F00]" />, title: "Custom Business Software", desc: "Bespoke operations software, automated inventory tools, and custom CRM/ERP platforms." },
              { icon: <Terminal className="w-6 h-6 text-[#FD4F00]" />, title: "Desktop Applications", desc: "Cross-platform desktop application development for Windows, macOS, and Linux." },
              { icon: <Workflow className="w-6 h-6 text-[#FD4F00]" />, title: "Startup MVP Engineering", desc: "Rapid MVP software development agency sprints for venture-backed and bootstrapped founders." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Agile Methodology</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Our Software Engineering Lifecycle (SDLC)</h2>
            <p className="text-gray-400 text-base">
              A transparent, battle-tested software engineering process guarantees clear deliverables, risk mitigation, and predictable release schedules.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Architecture", desc: "We document user workflows, analyze business logic, design database schemas, and map technical requirements." },
              { step: "02", title: "Wireframing & UI Flows", desc: "Interactive wireframing and clickable UI flows that test user journeys and data schemas prior to production code." },
              { step: "03", title: "Agile Development", desc: "Bi-weekly sprint deliverables with automated test suites, continuous integration, and transparent progress demos." },
              { step: "04", title: "Deployment & SLAs", desc: "Zero-downtime cloud deployment, full engineering documentation, and 24/7 post-launch maintenance monitoring." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRY EXPERTISE GRID */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Domain Capabilities</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Custom Software Solutions Across Business Domains</h2>
            <p className="text-gray-400 text-base">
              We engineer custom software applications tailored around the operational requirements of diverse commercial industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CRM & Internal Operations", desc: "Custom CRM software development to centralize customer pipelines, communication logs, and sales workflows." },
              { title: "Logistics & Supply Chain", desc: "Custom logistics software development for fleet tracking, warehouse dispatch, and delivery scheduling." },
              { title: "Manufacturing & Inventory", desc: "Custom manufacturing software development connecting inventory levels, procurement, and assembly metrics." },
              { title: "Real Estate & Property Tech", desc: "Real estate software development company solutions including property listings, geospatial maps, and lead intake." },
              { title: "Automotive & Fleet Management", desc: "Automotive software development services for maintenance tracking, booking calendars, and customer portals." },
              { title: "Financial & Healthcare Portals", desc: "Custom financial dashboards and clinic scheduling systems (such as patient appointment booking tools)." },
            ].map((domain, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A]">
                <h4 className="text-lg font-bold text-white mb-3">{domain.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US CALLOUT */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Competitive Advantage</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why High-Growth Companies Choose WTechVerce</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with innovative founders and technology leaders across North America and Europe. Whether collaborating with businesses in New York, Chicago, Austin, or international markets, our agile software development methodology ensures transparent milestones, complete IP ownership, and zero technical debt.
            </p>
            <ul className="space-y-4">
              {[
                "100% bespoke source code ownership with zero licensing fees or platform lock-in.",
                "Automated unit testing, integration tests, and rigorous code reviews on every sprint.",
                "Proven experience delivering enterprise software development for mid-market and startup teams.",
                "Flexible outsourcing software development services with dedicated team pods and full timezone alignment.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FD4F00] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FLEXIBLE ENGAGEMENT MODELS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Flexible Collaboration</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">How to Hire Our Software Engineering Team</h2>
            <p className="text-gray-400 text-base">
              Whether you need to augment your existing in-house team or outsource full-cycle software delivery, we offer flexible engagement models tailored to your operating velocity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Developer Pods",
                badge: "Staff Augmentation",
                desc: "Hire dedicated senior full-stack engineers who integrate directly into your daily standups, Jira boards, and GitHub repos. Full time-zone alignment with US and UK teams.",
                points: ["Direct developer communication", "Flexible month-to-month contracts", "Pre-vetted in Next.js, Node, Python"],
              },
              {
                title: "End-to-End Turnkey Delivery",
                badge: "Fixed-Scope or Milestone",
                desc: "We take total ownership of your software product lifecycle — from discovery and UI/UX wireframing to production cloud deployment and post-launch SLAs.",
                points: ["Milestone-based delivery", "Zero scope ambiguity", "Complete architecture documentation"],
              },
              {
                title: "MVP Sprints for Startups",
                badge: "Rapid 8–12 Weeks",
                desc: "Engineered specifically for bootstrapped or venture-backed founders who need a production-ready, multi-tenant SaaS MVP to onboard pilot customers quickly.",
                points: ["Subscription billing logic included", "Scalable cloud infrastructure", "Investor-ready source code"],
              },
            ].map((model, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] flex flex-col justify-between hover:border-[#FD4F00]/30 transition-colors">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-2">{model.badge}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{model.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {model.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FD4F00] shrink-0" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                  Inquire About This Model
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* RELEVANT SOFTWARE CASE STUDIES */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Real-World Execution</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured Software Case Studies</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#FD4F00] font-bold hover:underline mt-4 md:mt-0">
              Explore All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/custom-saas-platform-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#FD4F00]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">SaaS Engineering</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FD4F00] transition-colors mb-4">
                Custom B2B SaaS Platform Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Engineered a scalable microservices architecture with Node.js and Next.js, featuring automated Stripe billing, secure user authentication, and interactive analytics dashboards.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#FD4F00]" />
              </span>
            </Link>

            <Link href="/portfolio/fitness-gym-management-software" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#6C24FA]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Internal Operations Tool</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#c29dfd] transition-colors mb-4">
                Custom Gym Management Software
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Replaced fragmented subscription tools with one unified internal portal for scheduling, recurring billing, and automated staff workflows.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" />
              </span>
            </Link>
          </div>
        </div>

        {/* EDUCATIONAL RESOURCE BRIDGE (TOPICAL CLUSTER) */}
        <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 md:p-12 mb-32 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-2">Authoritative Guide</span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Want to Learn How Custom Software Works?
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Read our comprehensive architectural breakdown on custom software engineering, comparison matrices against off-the-shelf software, and 2026 pricing benchmarks.
            </p>
          </div>
          <Button href="/blog/what-is-custom-software-development" variant="outline" size="md" className="shrink-0">
            Read Complete Guide <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About Software Development</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why partner with an enterprise software development company instead of buying off-the-shelf software?</h4>
              <p className="text-gray-400 leading-relaxed">
                Partnering with a custom software development company gives you 100% intellectual property ownership, zero per-seat subscription fees, and bespoke systems built around your exact business logic that commercial packages cannot accommodate.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How long does the custom software development lifecycle take?</h4>
              <p className="text-gray-400 leading-relaxed">
                The timeline typically spans 8 to 16 weeks for a startup MVP, and 4 to 8 months for complex enterprise software development, delivered in agile bi-weekly sprints.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire dedicated software developers or engage in outsourcing software development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we provide flexible engagement models including dedicated developer pods for staff augmentation and turnkey end-to-end milestone delivery with full timezone overlap for US and European clients.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you develop cross-platform desktop applications as well as cloud systems?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a desktop application development company we engineer high-performance cross-platform desktop tools (using Electron and modern C++/Node frameworks) integrated directly with cloud databases and local hardware.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build Custom Software That Scales?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact WTechVerce today to discuss your technical requirements and receive a comprehensive architecture roadmap and quote.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Technical Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
