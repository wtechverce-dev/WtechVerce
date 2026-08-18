import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield, Settings } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Software Development Services | WTechVerce",
  description: "Enterprise-grade custom software development services. We build scalable, secure, and robust software solutions tailored to your business operations.",
  alternates: {
    canonical: "https://wtechverce.com/services/software-development",
  },
};

export default function SoftwareDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Custom software development for enterprise solutions, automation, and core business infrastructure.",
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
              "name": "What industries do you build custom software for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We build custom software across various industries including healthcare, finance, logistics, and retail, focusing on process automation and data security."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide long-term software maintenance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer ongoing maintenance, security updates, and feature enhancements to ensure your software evolves with your business."
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
            Custom Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Transform your business operations with powerful, custom-built software. We design and develop complex systems, internal tools, and enterprise applications that streamline workflows and drive efficiency.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Discuss Your Software Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Engineered for Enterprise Scale</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When off-the-shelf software fails to meet your unique operational needs, a custom solution is the only path forward. We build resilient, high-availability software architectures that act as the backbone of your business.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our engineering team specializes in deep API integrations, legacy system modernization, and secure cloud infrastructure to ensure your data is protected and your operations run flawlessly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="w-6 h-6 text-[#FD4F00]" />, title: "System Architecture", desc: "Microservices & Monoliths" },
              { icon: <Database className="w-6 h-6 text-[#FD4F00]" />, title: "Database Design", desc: "PostgreSQL & MongoDB" },
              { icon: <Cloud className="w-6 h-6 text-[#FD4F00]" />, title: "Cloud Infrastructure", desc: "AWS & Vercel" },
              { icon: <Shield className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Security", desc: "Data protection & auth" },
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
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Software Engineering Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Requirements Gathering", desc: "We deeply analyze your business logic, operational bottlenecks, and technical requirements." },
              { step: "02", title: "System Design", desc: "Designing scalable database schemas, API contracts, and infrastructure topology." },
              { step: "03", title: "Development Sprints", desc: "Iterative development with rigorous automated testing and continuous integration." },
              { step: "04", title: "Deployment & Training", desc: "Secure cloud deployment, comprehensive documentation, and team onboarding." },
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Trust WTechVerce with Your Software?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We focus on building software that solves actual business problems, reducing manual labor and increasing operational efficiency.
            </p>
            <ul className="space-y-4">
              {["Deep technical expertise in complex systems.", "Focus on security and data integrity.", "Seamless integration with your existing ERPs/CRMs.", "Dedicated engineering teams that act as your CTO."].map((item, i) => (
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
              <h4 className="text-lg font-bold mb-2">What industries do you build custom software for?</h4>
              <p className="text-gray-400">We build custom software across various industries including healthcare, finance, logistics, and retail, focusing on process automation and data security.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide long-term software maintenance?</h4>
              <p className="text-gray-400">Yes, we offer ongoing maintenance, security updates, and feature enhancements to ensure your software evolves with your business.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom software can reduce costs and scale your operational capacity.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Software Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
