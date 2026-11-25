import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Layers, Users, CreditCard, Lock, Cloud, Shield, Server, Zap, Database, Terminal, Check, Clock, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom SaaS Development Services & Platforms",
  description:
    "Scale your product with our SaaS development services. WTechVerce engineers multi-tenant cloud software, billing engines, and rapid MVPs.",
  keywords: [
    "saas development services",
    "saas product development company",
    "custom saas development",
    "saas software development",
    "cloud application development company",
    "cloud based application development company",
    "multi-tenant saas development",
    "saas mvp development",
    "saas platform architecture",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/saas-development",
  },
  openGraph: {
    title: "Custom SaaS Development Services & Platforms | WTechVerce",
    description:
      "Scale your product with our SaaS development services. WTechVerce engineers multi-tenant cloud software, billing engines, and rapid MVPs.",
    url: "https://wtechverce.com/services/saas-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom SaaS Development Services & Platforms | WTechVerce",
    description:
      "Scale your product with our SaaS development services. WTechVerce engineers multi-tenant cloud software, billing engines, and rapid MVPs.",
  },
};

export default function SaaSDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      {/* STRUCTURED DATA: SERVICE SCHEMA */}
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SaaS Development Services & Cloud Product Engineering",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a premier SaaS product development company delivering custom SaaS development services, multi-tenant cloud application architecture, and automated Stripe recurring billing systems.",
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Australia" }
          ]
        })}
      </Script>

      {/* STRUCTURED DATA: FAQ SCHEMA */}
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is included in your custom SaaS development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom SaaS development services encompass product discovery, user dashboard design, multi-tenant database partitioning, automated subscription billing (Stripe, LemonSqueezy), role-based access control (RBAC), and scalable cloud infrastructure deployment."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure data isolation in multi-tenant SaaS development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In multi-tenant SaaS development, we implement rigorous tenant isolation patterns such as PostgreSQL Row-Level Security (RLS) or partitioned schemas. This guarantees complete separation of tenant records, prevents cross-tenant data leaks, and ensures enterprise compliance."
              }
            },
            {
              "@type": "Question",
              "name": "What makes a scalable SaaS platform architecture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A robust SaaS platform architecture separates stateless frontend layers from distributed microservices, utilizes asynchronous background workers (Redis, BullMQ) for intensive tasks, and implements database connection pooling to handle thousands of concurrent tenant sessions without latency spikes."
              }
            },
            {
              "@type": "Question",
              "name": "What is the typical timeline for an MVP with a SaaS product development company?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard SaaS MVP development cycle typically takes 8 to 12 weeks from initial architectural scoping to production launch, delivering an investor-ready, pilot-tested product with functional payment processing and user management."
              }
            },
            {
              "@type": "Question",
              "name": "Can a cloud based application development company help migrate our legacy system to SaaS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a specialized cloud based application development company, we re-architect on-premise monolithic software into modern multi-tenant cloud applications hosted on AWS, Google Cloud, or Vercel, migrating legacy customer data without business disruption."
              }
            }
          ]
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HERO SECTION */}
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
            Cloud Product Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom SaaS Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Services &amp; Architecture
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Transform your software vision into a high-growth, recurring revenue asset with our battle-tested <strong className="text-white">saas development services</strong>. As a premier <strong className="text-white">saas product development company</strong> and specialized <strong className="text-white">cloud application development company</strong>, we engineer high-performance multi-tenant platforms, automated subscription engines, and intuitive client dashboards designed for maximum retention.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From initial <strong className="text-white">saas mvp development</strong> and foundational <strong className="text-white">saas platform architecture</strong> to enterprise-grade cloud scaling, our full-stack engineers construct high-yield <strong className="text-white">custom saas development</strong> solutions using Next.js, Node.js, Python, PostgreSQL, and Stripe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your SaaS Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore SaaS Case Studies
            </Button>
          </div>
        </div>

        {/* SEARCH INTENT: PROBLEM TO SOLUTION FRAMING */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Cloud Architecture</span>
            <h2 data-text-reveal className="text-3xl font-black mb-6">Engineered for Monthly Recurring Revenue (MRR) Growth</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Engineering a successful software-as-a-service application requires far more than basic CRUD development. It demands a sophisticated <strong className="text-white">saas platform architecture</strong> capable of supporting thousands of concurrent users, isolating tenant datasets with zero leakage risk, and managing subscription lifecycles with absolute precision.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As an experienced <strong className="text-white">cloud based application development company</strong>, we construct scalable SaaS ecosystems that support complex user tiers, self-service customer onboarding, and high-throughput background processing. Our <strong className="text-white">saas software development</strong> practices ensure that your platform scales smoothly from your first 100 pilot users to tens of thousands of paying subscribers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are an early-stage founder requiring agile <strong className="text-white">saas mvp development</strong> or a scaling enterprise undertaking complex <strong className="text-white">multi-tenant saas development</strong>, our engineers build modular, investor-ready codebases with 100% full intellectual property ownership.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layers className="w-6 h-6 text-[#FD4F00]" />, title: "Multi-Tenant Cloud", desc: "Rigorous tenant data isolation with Row-Level Security (RLS) in PostgreSQL." },
              { icon: <CreditCard className="w-6 h-6 text-[#FD4F00]" />, title: "Automated Subscriptions", desc: "Turnkey Stripe and LemonSqueezy integration with metered usage and tiered billing." },
              { icon: <Users className="w-6 h-6 text-[#FD4F00]" />, title: "RBAC & User Access", desc: "Granular role-based permissions, team workspaces, and SSO authentication." },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Cloud Infrastructure", desc: "Serverless and containerized deployments on AWS, GCP, and Vercel Edge." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON MATRIX: CUSTOM SAAS VS NO-CODE / OTS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Architecture Evaluation</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Custom Multi-Tenant SaaS vs. No-Code &amp; OTS Tools</h2>
            <p className="text-gray-400 text-base">
              Discover why serious founders and enterprises transition from no-code prototypes to custom multi-tenant cloud software.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-400">Architectural Metric</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-[#FD4F00]">Custom Multi-Tenant SaaS</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-400">No-Code Tools (Bubble / Webflow)</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Off-the-Shelf SaaS White Labels</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Tenant Data Segregation</td>
                  <td className="p-4 md:p-6 text-[#FD4F00]">PostgreSQL Row-Level Security (RLS) &amp; isolated schemas; zero cross-tenant leakage.</td>
                  <td className="p-4 md:p-6 text-gray-400">Shared tables with client-side filters; significant data security risks.</td>
                  <td className="p-4 md:p-6 text-gray-500">Black-box hosting; zero direct database control or compliance auditing.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Billing &amp; Revenue Models</td>
                  <td className="p-4 md:p-6 text-[#FD4F00]">Arbitrary custom pricing: seat-based, metered usage, feature flags, localized taxes.</td>
                  <td className="p-4 md:p-6 text-gray-400">Rigid basic tiers; complex webhook reconciliation often breaks.</td>
                  <td className="p-4 md:p-6 text-gray-500">High revenue-share cut (up to 20%) taken by the white-label vendor.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Code &amp; IP Ownership</td>
                  <td className="p-4 md:p-6 text-[#FD4F00]">100% intellectual property ownership; clean Git repo ready for venture diligence.</td>
                  <td className="p-4 md:p-6 text-gray-400">Vendor lock-in; code cannot be exported or migrated if the platform shuts down.</td>
                  <td className="p-4 md:p-6 text-gray-500">Zero IP ownership; you are renting an interface from a third party.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Concurrency &amp; Latency</td>
                  <td className="p-4 md:p-6 text-[#FD4F00]">Sub-100ms API response times via edge caching and distributed connection pooling.</td>
                  <td className="p-4 md:p-6 text-gray-400">Frequent rate limits and performance degradation past 1,000 active users.</td>
                  <td className="p-4 md:p-6 text-gray-500">Shared compute clusters with unpredicted latency spikes during peak hours.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PILLARS OF SAAS ENGINEERING */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Full-Stack Cloud Core</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Core Pillars of Scalable SaaS Engineering</h2>
            <p className="text-gray-400 text-base">
              Every custom SaaS product we engineer includes foundational infrastructure necessary for enterprise stability and valuation growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <Database className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Multi-Tenant Database Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Engineered with Row-Level Security (RLS) in PostgreSQL or tenant schema partitioning, preventing data leaks while keeping hosting costs optimal across shared infrastructure.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">PostgreSQL · Prisma · Supabase · RLS</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <CreditCard className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Subscription Billing Engines</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Automated recurring revenue infrastructure supporting multi-tier plans, seat-based add-ons, usage-based metering, self-service customer portals, and failed-payment dunning flows.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">Stripe Billing · LemonSqueezy · Webhooks</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <Lock className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Granular RBAC &amp; Workspaces</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Hierarchical team management, role-based access control, audit logging, session management, and enterprise Single Sign-On (SAML/Okta) for frictionless enterprise sales.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">NextAuth · Clerk · OAuth2 · Workspaces</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <Zap className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">High-Throughput Background Jobs</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Decoupled task processing using Redis queues and serverless workers for heavy computations, batch PDF exports, email broadcasts, and third-party API sync without blocking the UI.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">Redis · BullMQ · Inngest · Serverless</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <TrendingUp className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Usage Analytics &amp; Admin Dashboards</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Embedded telemetry dashboards giving founders real-time visibility into MRR, churn rates, feature adoption, and tenant resource consumption.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">Tremor · Chart.js · PostgreSQL Aggregations</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#FD4F00]/40 transition-colors">
              <Cloud className="w-10 h-10 text-[#FD4F00] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Global Edge Deployment</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Distributed edge hosting ensuring lightning-fast dashboard interactions worldwide, automated SSL provisioning for tenant custom domains, and zero-downtime rolling deploys.
              </p>
              <span className="text-xs text-[#FD4F00] font-semibold">AWS · Vercel · Cloudflare · Docker</span>
            </div>
          </div>
        </div>

        {/* AGILE SAAS LIFECYCLE */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Agile SaaS Lifecycle</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black">The SaaS Development Roadmap: From MVP to Enterprise Scale</h2>
            <p className="text-gray-400 text-base mt-4">
              A rapid, iterative roadmap designed to validate core hypotheses quickly and transition into sustainable monthly recurring revenue.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Product Strategy", desc: "Defining core MVP feature boundaries, database schema relationships, and monetization architectures." },
              { step: "02", title: "UI/UX Dashboards", desc: "Prototyping intuitive SaaS user interfaces that minimize user churn and accelerate self-onboarding." },
              { step: "03", title: "Full-Stack Sprints", desc: "Engineering frontend React dashboards, secure REST/GraphQL APIs, and subscription webhook handlers." },
              { step: "04", title: "Deploy & Scale", desc: "Automated CI/CD deployment, server health telemetry, and ongoing feature iteration based on real metrics." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Technical Leadership</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Your SaaS Technical Co-Founders</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We operate as a direct extension of your product founding team, supplying the senior architectural leadership and execution speed required to build a competitive market footprint.
            </p>
            <ul className="space-y-4">
              {[
                "Rapid time-to-market with production-ready SaaS MVP delivery in 8–12 weeks.",
                "Scalable serverless and microservices architecture engineered to handle sudden user growth.",
                "Expertise in complex Stripe subscription models, webhooks, and metered billing algorithms.",
                "100% intellectual property ownership with zero licensing fees or vendor lock-in.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FD4F00] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RELEVANT SAAS CASE STUDY & KNOWLEDGE PILLARS */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Execution</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured SaaS Case Study</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#FD4F00] font-bold hover:underline mt-4 md:mt-0">
              Explore All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/custom-saas-platform-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#FD4F00]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">High-Throughput SaaS</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FD4F00] transition-colors mb-4">
                B2B Lead Generation SaaS Platform
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Engineered a distributed microservices backend with Node.js and Next.js, integrating automated multi-tier Stripe subscription billing, secure authentication, and interactive lead analytics dashboards.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#FD4F00]" />
              </span>
            </Link>

            <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Engineering Knowledge</span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  What Is Custom Software Development? Guide, Process &amp; Costs (2026)
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Learn what custom software development is, how the engineering process works, the difference between custom and off-the-shelf software, and realistic 2026 cost benchmarks — including SaaS MVP development.
                </p>
              </div>
              <Link href="/blog/what-is-custom-software-development" className="inline-flex items-center gap-2 text-xs font-bold text-[#6C24FA] hover:text-white transition-colors">
                Read the Full Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-10">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About SaaS Engineering</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is included in your custom SaaS development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our custom SaaS development services encompass product discovery, user dashboard design, multi-tenant database partitioning, automated subscription billing (Stripe, LemonSqueezy), role-based access control (RBAC), and scalable cloud infrastructure deployment.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you ensure data isolation in multi-tenant SaaS development?</h4>
              <p className="text-gray-400 leading-relaxed">
                In multi-tenant SaaS development, we implement rigorous tenant isolation patterns such as PostgreSQL Row-Level Security (RLS) or partitioned schemas. This guarantees complete separation of tenant records, prevents cross-tenant data leaks, and ensures enterprise compliance.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What makes a scalable SaaS platform architecture?</h4>
              <p className="text-gray-400 leading-relaxed">
                A robust SaaS platform architecture separates stateless frontend layers from distributed microservices, utilizes asynchronous background workers (Redis, BullMQ) for intensive tasks, and implements database connection pooling to handle thousands of concurrent tenant sessions without latency spikes.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the typical timeline for an MVP with a SaaS product development company?</h4>
              <p className="text-gray-400 leading-relaxed">
                A standard SaaS MVP development cycle typically takes 8 to 12 weeks from initial architectural scoping to production launch, delivering an investor-ready, pilot-tested product with functional payment processing and user management.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can a cloud based application development company help migrate our legacy system to SaaS?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a specialized cloud based application development company, we re-architect on-premise monolithic software into modern multi-tenant cloud applications hosted on AWS, Google Cloud, or Vercel, migrating legacy customer data without business disruption.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Launch Your SaaS Product?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Bring us your product vision, and our senior cloud architects will deliver the technical execution to make it a market reality.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Discuss Your SaaS Idea <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
