import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Layers, Users, CreditCard, Lock, Cloud, Shield, Server, Zap } from "lucide-react";
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
          "description": "WTechVerce is a SaaS product development company delivering custom SaaS development services, multi-tenant cloud architecture, and automated subscription billing engines.",
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
              "name": "What is included in your custom SaaS development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom SaaS development services encompass product discovery, user dashboard design, multi-tenant database partitioning, automated subscription billing (Stripe, LemonSqueezy), role-based access control, and scalable cloud infrastructure deployment."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure data isolation in multi-tenant SaaS software development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement rigorous multi-tenant data isolation patterns—such as row-level security (RLS) in PostgreSQL or separate schema/database partitioning—ensuring that tenant records remain strictly segregated and encrypted."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate Stripe for complex SaaS subscription billing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in implementing Stripe billing systems, supporting multi-tier subscriptions, metered usage-based billing, seat add-ons, localized tax calculations, and prorated plan upgrades."
              }
            },
            {
              "@type": "Question",
              "name": "What is the typical timeline for an MVP with a SaaS product development company?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard SaaS Minimum Viable Product (MVP) typically takes 8 to 12 weeks from initial architectural scoping to production launch, providing founders with an investor-ready, pilot-tested product."
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
            Cloud Product Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom SaaS Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Services &amp; Architecture
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Transform your software vision into a scalable, recurring revenue platform with our end-to-end <strong className="text-white">saas development services</strong>. As a specialized <strong className="text-white">saas product development company</strong>, we engineer secure multi-tenant cloud platforms, automated billing engines, and intuitive dashboards designed for high retention.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From initial SaaS MVP engineering and tenant architecture scoping to enterprise cloud scaling, our full-stack engineers construct custom SaaS solutions with Next.js, Node.js, Python, PostgreSQL, and Stripe.
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

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Cloud Architecture</span>
            <h2 data-text-reveal className="text-3xl font-black mb-6">Engineered for Monthly Recurring Revenue (MRR) Growth</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Engineering a software-as-a-service platform requires far more than basic CRUD development. It demands an enterprise cloud architecture capable of handling thousands of concurrent users, isolating tenant datasets with zero leakage risk, and automating billing cycles flawlessly.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As a dedicated <strong className="text-white">cloud application development company</strong>, we construct scalable SaaS ecosystems that support complex user tiers, self-service customer onboarding, and high-throughput background processing.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are an early-stage founder building an MVP or a scaling enterprise migrating a legacy tool to the cloud, our <strong className="text-white">custom saas development</strong> engineers deliver clean, modular codebases built for high valuation and investor confidence.
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

        {/* OUR PROCESS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Agile SaaS Lifecycle</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black">The SaaS Development Roadmap: From MVP to Enterprise Scale</h2>
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

        {/* RELEVANT SAAS CASE STUDY */}
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
                Our custom SaaS development services encompass product discovery, user dashboard design, multi-tenant database partitioning, automated subscription billing (Stripe, LemonSqueezy), role-based access control, and scalable cloud infrastructure deployment.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you ensure data isolation in multi-tenant SaaS software development?</h4>
              <p className="text-gray-400 leading-relaxed">
                We implement rigorous multi-tenant data isolation patterns—such as row-level security (RLS) in PostgreSQL or separate schema/database partitioning—ensuring that tenant records remain strictly segregated and encrypted.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you integrate Stripe for complex SaaS subscription billing?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we specialize in implementing Stripe billing systems, supporting multi-tier subscriptions, metered usage-based billing, seat add-ons, localized tax calculations, and prorated plan upgrades.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the typical timeline for an MVP with a SaaS product development company?</h4>
              <p className="text-gray-400 leading-relaxed">
                A standard SaaS Minimum Viable Product (MVP) typically takes 8 to 12 weeks from initial architectural scoping to production launch, providing founders with an investor-ready, pilot-tested product.
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
