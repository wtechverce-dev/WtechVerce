import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Monitor, Smartphone, Zap, Server } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Web Development Services | WTechVerce",
  description: "High-performance, custom web development services. We build scalable React, Next.js, and Node.js applications that drive revenue and growth.",
  alternates: {
    canonical: "https://wtechverce.com/services/web-development",
  },
};

export default function WebDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Custom web development services including front-end, back-end, and full-stack solutions using React, Next.js, and Node.js.",
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
              "name": "What technologies do you use for custom web development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily use the MERN stack (MongoDB, Express, React, Node.js) and Next.js for high-performance, SEO-friendly applications."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a custom web development project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most custom web applications take between 4 to 12 weeks depending on complexity, integrations, and testing requirements."
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
            Custom Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            We don't just write code; we engineer digital assets. Our custom web development services are designed to build fast, secure, and scalable applications that solve complex business problems and drive measurable revenue.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Built for Performance and Scale</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Off-the-shelf solutions often force you to compromise on your business processes. Our custom web development approach ensures your software adapts to your business, not the other way around. 
              Whether you need a high-traffic SaaS platform, a complex internal portal, or a blazing-fast marketing site, we use modern stacks (React, Next.js, Node.js) to deliver products that dominate your industry.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus heavily on Core Web Vitals, security, and scalable architecture, ensuring that as your user base grows, your platform remains stable and lightning fast.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Code className="w-6 h-6 text-[#FD4F00]" />, title: "Frontend Architecture", desc: "React & Next.js" },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Backend Systems", desc: "Node.js & Express" },
              { icon: <Monitor className="w-6 h-6 text-[#FD4F00]" />, title: "SaaS Platforms", desc: "Multi-tenant logic" },
              { icon: <Zap className="w-6 h-6 text-[#FD4F00]" />, title: "API Development", desc: "REST & GraphQL" },
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
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Architecture", desc: "We map out database schemas, user flows, and tech stacks before writing a single line of code." },
              { step: "02", title: "UI/UX & Prototyping", desc: "Interactive Figma prototypes to visualize the final product and ensure perfect user journeys." },
              { step: "03", title: "Agile Development", desc: "Two-week sprints with transparent reporting. You see progress live on staging servers." },
              { step: "04", title: "Testing & Launch", desc: "Rigorous QA, load testing, and seamless deployment with zero downtime." },
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Choose WTechVerce?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We aren't just developers; we are digital growth partners. We build platforms with a deep understanding of SEO, conversion rate optimization, and business logic.
            </p>
            <ul className="space-y-4">
              {["Clean, documented, and scalable codebases.", "Direct communication with senior developers.", "Full ownership of intellectual property post-launch.", "Post-launch maintenance and continuous optimization."].map((item, i) => (
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
              <h4 className="text-lg font-bold mb-2">What technologies do you use for custom web development?</h4>
              <p className="text-gray-400">We primarily use the MERN stack (MongoDB, Express, React, Node.js) and Next.js for high-performance, SEO-friendly applications.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How long does a custom web development project take?</h4>
              <p className="text-gray-400">Most custom web applications take between 4 to 12 weeks depending on complexity, integrations, and testing requirements.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build Something Great?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop relying on templates that limit your growth. Let's engineer a custom web solution that scales with your business.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
