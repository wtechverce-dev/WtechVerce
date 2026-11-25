import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Cpu, Layers, Workflow, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Software Development Company & Services | WTechVerce",
  description:
    "WTechVerce is a custom software development company specializing in custom software engineering, design, and programming. We build enterprise software, custom business tools, and scalable cloud apps.",
  keywords: [
    "custom software development",
    "custom software development company",
    "custom software engineering",
    "custom software design",
    "custom software developer",
    "custom software programming",
    "custom software",
    "custom development software",
    "software development custom software development",
    "software custom development",
    "customised software development",
    "custom software product development",
    "software custom",
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
    canonical: "https://wtechverce.com/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company & Services | WTechVerce",
    description:
      "WTechVerce is a custom software development company specializing in custom software engineering, design, and programming. We build enterprise software, custom business tools, and scalable cloud apps.",
    url: "https://wtechverce.com/services/custom-software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company & Services | WTechVerce",
    description:
      "WTechVerce is a custom software development company specializing in custom software engineering, design, and programming. We build enterprise software, custom business tools, and scalable cloud apps.",
  },
};

export default function CustomSoftwareDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development & Custom Software Engineering Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a custom software development company delivering bespoke custom software engineering, custom software design, and custom software programming for enterprise and startup clients.",
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Australia" }
          ]
        })}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is custom software development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software development is the process of designing, programming, and deploying software built specifically for one organization's workflows, users, and business logic — unlike off-the-shelf tools that force teams to adapt their processes around vendor limitations."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between custom software engineering and standard software development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software engineering involves architecting a system from first principles around your proprietary data models, integrations, and security requirements. Standard development reuses existing frameworks and templates; custom engineering designs every layer for your exact operational context."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the custom software development process take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Focused internal tools and startup MVPs typically ship in 8 to 16 weeks, while multi-module enterprise platforms take 4 to 8 months delivered across transparent bi-weekly sprint milestones."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire a dedicated custom software developer or outsource the entire project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer dedicated custom software developer pods that join your daily standups, and fixed-scope turnkey delivery models with working-hour overlap for US and European stakeholders."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle custom software design as well as programming?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our end-to-end service covers custom software design (UX wireframing, UI systems, interaction flows) and full custom software programming (backend APIs, cloud infrastructure, frontend interfaces) under one engagement."
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
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Services
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
            Fragmented spreadsheets, disconnected SaaS subscriptions, and manual workarounds quietly drain engineering hours and margins. WTechVerce is a <strong className="text-white">custom software development company</strong> that replaces operational chaos with tailored, scalable software systems built through disciplined <strong className="text-white">custom software engineering</strong>.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From enterprise <strong className="text-white">custom software development</strong> and business automation tools to rapid MVP launches, our senior <strong className="text-white">custom software developer</strong> teams deliver secure, thoroughly documented software with 100% IP ownership. Our full-cycle service covers <strong className="text-white">custom software design</strong>, <strong className="text-white">custom software programming</strong>, and production deployment — all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Scope Your Software Project <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
            <Button href="/blog/what-is-custom-software-development" variant="outline" size="lg">
              Read Process &amp; 2026 Cost Guide
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=75&fm=webp"
            alt="Custom software development company engineers working on custom software engineering and programming"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Resilient Architecture</span>
              <h2 className="text-xl md:text-2xl font-bold text-white">Custom Software Engineering for Reliability, Data Integrity &amp; Operational Continuity</h2>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Enterprise-Grade Architecture
            </span>
          </div>
        </div>

        {/* WHAT IS CUSTOM SOFTWARE */}
        <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 md:p-12 mb-32">
          <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Definition</span>
          <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-3xl">What Is Custom Software Development?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                <strong className="text-white">Custom software development</strong> is the end-to-end process of designing, programming, testing, and deploying software built exclusively for one organization's processes, users, and data — as opposed to off-the-shelf tools that come pre-packaged for generic markets.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Also called <strong className="text-white">custom development software</strong>, <strong className="text-white">customised software development</strong>, or <strong className="text-white">bespoke software engineering</strong>, the process starts with deep discovery of your business logic and ends with a fully owned, fully documented software product.
              </p>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Unlike SaaS subscriptions, <strong className="text-white">custom software product development</strong> gives your company 100% intellectual property ownership, zero per-seat licensing fees, and architecture that evolves with your operations rather than a vendor's roadmap.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it&apos;s called <strong className="text-white">software custom development</strong>, <strong className="text-white">software development custom software development</strong>, or simply <strong className="text-white">custom software</strong> — the goal is the same: a system built entirely around your competitive advantage.
              </p>
            </div>
          </div>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">High-Value Engineering</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Custom Software Engineering Built for Long-Term Control</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When rigid commercial tools force your staff to adapt their processes around missing features, bespoke <strong className="text-white">custom business software</strong> pays for itself. As a dedicated <strong className="text-white">enterprise software development company</strong>, we build integrated platforms that eliminate duplicate data entry and unify reporting.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our <strong className="text-white">custom software programming</strong> practice spans internal CRM and ERP engines, API middleware bridges, and cross-platform desktop applications — all built with encrypted role-based access control and full source-code ownership. Every <strong className="text-white">custom software design</strong> engagement starts with UX wireframes validated by real user flows before a single line of code is written.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need agile <strong className="text-white">software development for small business</strong>, high-velocity <strong className="text-white">custom software development for startups</strong>, <strong className="text-white">custom enterprise software development</strong> for distributed teams, or top-tier <strong className="text-white">custom software development services usa</strong>, our senior engineering pods deliver dependable outcomes. Recognized among the <strong className="text-white">best custom software development companies</strong> and <strong className="text-white">top custom software development companies</strong>, we operate as the <strong className="text-white">best custom software development company</strong> for founders and enterprise leaders alike.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="w-6 h-6 text-[#FD4F00]" aria-hidden="true" />, title: "Custom Software Engineering", desc: "Modular microservices, clean APIs, and robust cloud backends engineered with disciplined custom software programming practices." },
              { icon: <Layers className="w-6 h-6 text-[#FD4F00]" aria-hidden="true" />, title: "Custom Software Design", desc: "UX wireframing, UI design systems, and interaction flows — custom software design from blank canvas to production-ready screens." },
              { icon: <Terminal className="w-6 h-6 text-[#FD4F00]" aria-hidden="true" />, title: "Custom Desktop App Development", desc: "Cross-platform custom desktop app development for Windows, macOS, and Linux synced to cloud APIs." },
              { icon: <Workflow className="w-6 h-6 text-[#FD4F00]" aria-hidden="true" />, title: "Startup MVP Sprints", desc: "Agile MVP software development agency execution built for venture-backed and bootstrapped founders needing fast market validation." },
            ].map((item, i) => (
              <div key={i} className="bg-[#02050A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Build vs. Buy</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Custom Software vs. Off-the-Shelf Tools</h2>
            <p className="text-gray-400 text-base">
              Decide when custom software development delivers superior ROI over stacking disconnected SaaS subscriptions.
            </p>
          </div>
          <div className="overflow-x-auto bg-[#0A0F1A] border border-white/10 rounded-3xl">
            <table className="w-full text-sm text-left">
              <caption className="sr-only">Custom Software Development vs Off-the-Shelf SaaS comparison</caption>
              <thead className="border-b border-white/10 bg-white/[0.02]">
                <tr>
                  <th scope="col" className="py-4 px-6 text-gray-400 font-bold uppercase text-xs">Business Dimension</th>
                  <th scope="col" className="py-4 px-6 text-gray-400 font-bold uppercase text-xs">Off-the-Shelf SaaS</th>
                  <th scope="col" className="py-4 px-6 text-[#FD4F00] font-bold uppercase text-xs">Custom Software Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Long-Term Cost Structure", "Per-seat recurring subscriptions escalate every year", "Predictable one-time engineering build + cloud hosting"],
                  ["Workflow Fit", "Teams bend manual operations around vendor limits", "Built 100% around your proprietary approvals and rules"],
                  ["Data & API Ownership", "Siloed exports and fragile Zapier workarounds", "Unified database schemas and native ERP/CRM integrations"],
                  ["Intellectual Property", "Zero equity; vendor controls product roadmap", "Full GitHub repository and 100% IP ownership"],
                  ["Custom Software Design", "Locked UI; no brand or UX customization", "Fully bespoke UI/UX designed around your users"],
                ].map(([dim, ots, cust], idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-4 px-6 font-bold text-white text-left">{dim}</th>
                    <td className="py-4 px-6 text-gray-400">
                      <span className="inline-flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" aria-hidden="true" /> {ots}</span>
                    </td>
                    <td className="py-4 px-6 text-gray-200">
                      <span className="inline-flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00] shrink-0 mt-0.5" aria-hidden="true" /> {cust}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Agile Methodology</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Our Custom Software Development Process</h2>
            <p className="text-gray-400 text-base">
              Structured engineering milestones eliminate scope creep and keep custom software delivery transparent from kickoff to release.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Architecture", desc: "Documenting business logic, user roles, database schemas, and API contracts — the foundation of every custom software engineering engagement." },
              { step: "02", title: "Custom Software Design", desc: "Interactive clickable prototypes and UI systems validating screen ergonomics and edge cases with stakeholders before programming begins." },
              { step: "03", title: "Custom Software Programming", desc: "Bi-weekly production-staged releases backed by code reviews, automated regression tests, and transparent sprint reporting." },
              { step: "04", title: "Deployment & Maintenance", desc: "Zero-downtime cloud rollout, engineering documentation handover, and ongoing post-launch support from your dedicated custom software developer team." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRY EXPERTISE GRID */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Domain Capabilities</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Custom Software Solutions Across Core Business Domains</h2>
            <p className="text-gray-400 text-base">
              We tailor custom software engineering architectures around the operational workflows of specialized commercial sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CRM & Sales Pipelines", desc: "As a premier crm software development company, we centralize lead routing, communication logs, and reporting dashboards through custom software programming." },
              { title: "Logistics & Fleet Dispatch", desc: "Custom logistics software development covering shipment tracking, warehouse inventory, and delivery scheduling with real-time data sync." },
              { title: "Manufacturing & Inventory", desc: "Custom manufacturing software development synchronizing bill of materials, procurement, and production queues into one unified platform." },
              { title: "Real Estate & Proptech", desc: "As a trusted real estate software development company, we build property listing portals with geospatial filtering and agent CRM workflows." },
              { title: "Automotive & Service Portals", desc: "Automotive software development services supporting maintenance histories, service bookings, and fleet logs with custom software design." },
              { title: "Healthcare Scheduling & Billing", desc: "Patient appointment portals, member retention dashboards, and automated recurring invoicing engines built with HIPAA-aware architecture." },
            ].map((domain, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A]">
                <h3 className="text-lg font-bold text-white mb-3">{domain.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FLEXIBLE ENGAGEMENT MODELS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Flexible Collaboration</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">How Companies Engage Our Custom Software Developer Teams</h2>
            <p className="text-gray-400 text-base">
              Choose dedicated outsourcing software development pods or turnkey milestone delivery with full US and UK timezone overlap.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Developer Pods",
                badge: "Staff Augmentation",
                desc: "Embed a senior custom software developer directly into your daily Slack, Jira standups, and GitHub workflows for maximum velocity.",
                points: ["Direct engineer collaboration", "Flexible month-to-month capacity", "Next.js, Node.js, Python & TypeScript"],
              },
              {
                title: "End-to-End Turnkey Delivery",
                badge: "Fixed-Scope Milestones",
                desc: "Full custom software development lifecycle — from custom software design and UI/UX wireframing to custom software programming, QA, and production handover.",
                points: ["Milestone-gated payments", "Clear SRS scope specification", "Complete system documentation"],
              },
              {
                title: "Startup MVP Sprints",
                badge: "8–12 Week Target",
                desc: "Focused custom software engineering sprints helping founders launch multi-tenant software MVPs and validate pilot customers fast.",
                points: ["Stripe billing ready", "Scalable cloud deployment", "100% investor-ready IP"],
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
                        <CheckCircle className="w-3.5 h-3.5 text-[#FD4F00] shrink-0" aria-hidden="true" /> {pt}
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
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured Custom Software Case Studies</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#FD4F00] font-bold hover:underline mt-4 md:mt-0">
              Explore All Case Studies <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/custom-saas-platform-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#FD4F00]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">Custom Software Engineering</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FD4F00] transition-colors mb-4">
                Custom B2B SaaS Platform Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Full-cycle custom software development — from custom software design to custom software programming — delivering a scalable microservices architecture with Node.js, Next.js, Stripe billing, and analytics dashboards.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#FD4F00]" aria-hidden="true" />
              </span>
            </Link>

            <Link href="/portfolio/fitness-gym-management-software" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#6C24FA]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Custom Business Software</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#c29dfd] transition-colors mb-4">
                Custom Gym Management Software
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Replaced five fragmented subscription tools with one unified custom software platform for scheduling, recurring Stripe billing, and role-based staff workflows — custom software product development delivering measurable ROI.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* EDUCATIONAL RESOURCE BRIDGE */}
        <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 md:p-12 mb-32 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-2">Authoritative Guide</span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              What Is Custom Software Development? Process &amp; 2026 Costs
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore our comprehensive breakdown of the custom software development process, Build vs. Buy evaluation matrices, custom software engineering methodologies, and realistic 2026 software budgets.
            </p>
          </div>
          <Button href="/blog/what-is-custom-software-development" variant="outline" size="md" className="shrink-0">
            Read Complete Guide <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About Custom Software Development</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold mb-2">What is custom software development?</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom software development is the end-to-end process of designing, programming, testing, and deploying software built exclusively for one organization — covering custom software design, custom software programming, and production deployment under a single engagement.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold mb-2">What is the difference between custom software engineering and off-the-shelf software?</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom software engineering designs every system layer around your unique workflows, data models, and integration requirements. Off-the-shelf tools serve generic markets and force teams to adapt their processes around vendor-imposed limitations, leading to workarounds and rising per-seat subscription costs.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold mb-2">How long does the custom software development process take?</h3>
              <p className="text-gray-400 leading-relaxed">
                Focused internal tools and startup MVPs typically ship in 8 to 16 weeks, while multi-module enterprise platforms take 4 to 8 months delivered across transparent bi-weekly sprint milestones.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold mb-2">Can we hire a dedicated custom software developer or outsource the entire project?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. We offer dedicated custom software developer pods that join your daily standups and fixed-scope milestone teams with working-hour overlap for US and European stakeholders.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-bold mb-2">Do you handle custom software design as well as programming?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. Our end-to-end service covers custom software design (UX wireframing, UI systems, interaction flows) and full custom software programming (backend APIs, cloud infrastructure, frontend interfaces) under one engagement — no separate design agency needed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build Custom Software That Scales?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact WTechVerce today to discuss your custom software development requirements and receive a clear roadmap, technical estimate, and custom software design proposal.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Technical Consultation <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
