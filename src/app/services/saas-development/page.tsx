import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Layers, Users, CreditCard, Lock, Infinity } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "SaaS Development Services | WTechVerce",
  description: "End-to-end SaaS development company. We build multi-tenant, secure, and highly scalable SaaS products with subscription billing integration.",
  alternates: {
    canonical: "https://wtechverce.com/services/saas-development",
  },
};

export default function SaaSDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SaaS Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Custom SaaS product development including multi-tenant architecture, billing integrations, and MVP creation.",
          "areaServed": "Worldwide"
        })}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can you integrate Stripe for subscription billing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in implementing Stripe billing, supporting complex metered billing, tiering, and prorations for SaaS platforms."
              }
            },
            {
              "@type": "Question",
              "name": "What is the typical timeline for a SaaS MVP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard SaaS Minimum Viable Product (MVP) takes approximately 8 to 12 weeks from initial concept to launch, depending on the complexity of the core features."
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
            ← Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            SaaS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Product Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Turn your vision into a scalable, revenue-generating software product. We build secure, multi-tenant SaaS platforms engineered for high growth, seamless user onboarding, and recurring revenue.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your SaaS MVP <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Engineered for MRR Growth</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building a SaaS product requires more than just writing code; it demands an architecture that handles thousands of concurrent users, isolates tenant data securely, and monetizes seamlessly.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From the initial Minimum Viable Product (MVP) to full-scale enterprise features, we provide end-to-end SaaS development using modern JavaScript frameworks (Next.js, React, Node.js) that investors and users love.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layers className="w-6 h-6 text-[#FD4F00]" />, title: "Multi-Tenant Architecture", desc: "Secure data isolation" },
              { icon: <CreditCard className="w-6 h-6 text-[#FD4F00]" />, title: "Billing & Subscriptions", desc: "Stripe & Braintree" },
              { icon: <Users className="w-6 h-6 text-[#FD4F00]" />, title: "User Management", desc: "Auth0 & NextAuth" },
              { icon: <Lock className="w-6 h-6 text-[#FD4F00]" />, title: "Security & Compliance", desc: "Role-based access" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR PROCESS */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">SaaS Development Lifecycle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Product Strategy", desc: "Defining the core MVP features, user journeys, and go-to-market technology strategy." },
              { step: "02", title: "UI/UX & Prototyping", desc: "Designing intuitive SaaS dashboards that reduce churn and improve onboarding." },
              { step: "03", title: "Full-Stack Engineering", desc: "Building the front-end, API, and integrating subscription billing logic." },
              { step: "04", title: "Launch & Iterate", desc: "Deploying to production and iterating based on real user feedback and analytics." },
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Your SaaS Technical Co-Founders</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We act as an extension of your founding team, providing the technical leadership needed to launch and scale successfully.
            </p>
            <ul className="space-y-4">
              {["Fast time-to-market for MVP launches.", "Scalable serverless and microservice architectures.", "Expertise in complex Stripe billing models.", "Beautiful, intuitive UI that users love."].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FD4F00] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you integrate Stripe for subscription billing?</h4>
              <p className="text-gray-400">Yes, we specialize in implementing Stripe billing, supporting complex metered billing, tiering, and prorations for SaaS platforms.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the typical timeline for a SaaS MVP?</h4>
              <p className="text-gray-400">A standard SaaS Minimum Viable Product (MVP) takes approximately 8 to 12 weeks from initial concept to launch, depending on the complexity of the core features.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Launch Your SaaS?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Bring us your idea, and we will bring the engineering firepower to make it a reality.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Discuss Your SaaS Idea <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
