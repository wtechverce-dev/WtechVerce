import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield, Layers, Users, Workflow, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Enterprise Software Development Company | WTechVerce",
  description:
    "WTechVerce is a leading enterprise software development company delivering custom software applications for business. Hire dedicated custom software developers & offshore software development teams.",
  keywords: [
    "enterprise software development company",
    "custom software applications for business",
    "dedicated custom software developers",
    "offshore software development team",
    "custom software product wireframing",
    "custom software development services",
    "bespoke software engineering",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/software-development",
  },
  openGraph: {
    title: "Enterprise Software Development Company | WTechVerce",
    description:
      "Empower your organization with custom software applications for business, dedicated custom software developers, and reliable offshore software development teams.",
    url: "https://wtechverce.com/services/software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Development Company | WTechVerce",
    description:
      "Enterprise software development company delivering custom software applications for business and dedicated engineering teams.",
  },
};

export default function SoftwareDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Enterprise Software Development Company",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Enterprise software development company delivering custom software applications for business, dedicated custom software developers, and offshore software development teams.",
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
              "name": "Why partner with an enterprise software development company like WTechVerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As a dedicated enterprise software development company, WTechVerce builds scalable, secure, and compliant custom software applications for business that eliminate operational bottlenecks and integrate seamlessly with your core systems."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire dedicated custom software developers or an offshore software development team?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide flexible engagement models allowing you to hire dedicated custom software developers or scale with a full offshore software development team equipped with modern DevOps, QA, and cloud engineering expertise."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in your custom software product wireframing phase?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom software product wireframing services include interactive user flow mapping, architectural blue-printing, edge-case analysis, and clickable prototypes to validate product logic before writing production code."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
            Enterprise Software Development Company
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Software Applications <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              for Business & Enterprise
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Scale your operations with high-performance, resilient software architectures. As a premier enterprise software development company, we provide dedicated custom software developers and offshore software development teams that turn complex operational requirements into competitive advantages.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Hire Dedicated Software Developers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Enterprise Case Studies
            </Button>
          </div>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Bespoke Engineering</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Custom Software Applications for Business Scaling</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When off-the-shelf software fails to address unique corporate workflows, custom software applications for business become indispensable. Our enterprise engineering team builds high-availability microservices, automated data pipelines, and internal management suites that align strictly with your strategic goals.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need to augment your existing in-house technical department with dedicated custom software developers or establish a high-output offshore software development team, WTechVerce delivers dependable results on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Architecture", desc: "Distributed microservices, fault-tolerant cloud systems." },
              { icon: <Workflow className="w-6 h-6 text-[#FD4F00]" />, title: "Product Wireframing", desc: "Custom software product wireframing and clickable UI flows." },
              { icon: <Users className="w-6 h-6 text-[#FD4F00]" />, title: "Dedicated Developers", desc: "Senior full-stack engineers tailored to your roadmap." },
              { icon: <Shield className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Security", desc: "Role-based access, end-to-end encryption & compliance." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WIREFRAMING & PROCESS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">From Concept to Code</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Custom Software Product Wireframing to Deployment</h2>
            <p className="text-gray-400 text-base">
              Every successful enterprise software project begins with precise planning. We eliminate guesswork with meticulous wireframing and agile sprint cycles.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Product Wireframing", desc: "Custom software product wireframing to map user journeys, permissions, and database entities." },
              { step: "02", title: "System Architecture", desc: "Designing robust API schemas, secure cloud infrastructure topology, and database models." },
              { step: "03", title: "Agile Sprints", desc: "Dedicated custom software developers delivering bi-weekly testable features with automated CI/CD." },
              { step: "04", title: "Scale & Maintenance", desc: "Seamless enterprise deployment, SLA-backed monitoring, and ongoing feature evolution." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US / OFFSHORE ADVANTAGE */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Global Delivery Model</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Hire Our Offshore Software Development Team?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Partnering with our offshore software development team provides top-tier engineering talent at competitive rates, without compromising on code quality, security standards, or communication velocity.
            </p>
            <ul className="space-y-4">
              {[
                "Dedicated custom software developers fluent in modern full-stack frameworks (React, Node.js, Next.js, Python, PostgreSQL).",
                "Proven track record building enterprise software applications for business across US, UK, and international markets.",
                "Custom software product wireframing that speeds up development cycles and reduces rework by over 40%.",
                "Transparent project management with real-time Slack/Discord communication and sprint transparency.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FD4F00] shrink-0 mt-0.5" /> <span>{item}</span>
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
              <h4 className="text-lg font-bold mb-2">Why should we choose an enterprise software development company like WTechVerce?</h4>
              <p className="text-gray-400 leading-relaxed">
                WTechVerce brings battle-tested engineering standards, ISO-grade data security protocols, and scalable architectures designed for long-term growth. We deliver custom software applications for business that integrate with your ERP, CRM, and cloud ecosystem.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do your dedicated custom software developers integrate with our team?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our dedicated developers work in your preferred time zone, participate in daily standups, follow your Git workflows, and utilize your project tracking tools to operate as a seamless extension of your in-house engineering team.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What happens during the custom software product wireframing stage?</h4>
              <p className="text-gray-400 leading-relaxed">
                During custom software product wireframing, our product architects design structural user blueprints, interaction workflows, and functional prototypes. This guarantees full stakeholder alignment before writing a single line of code.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build Enterprise Custom Software?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Speak with an enterprise solutions architect today. Discover how our dedicated developers and offshore engineering teams can accelerate your business roadmap.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Book an Engineering Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
