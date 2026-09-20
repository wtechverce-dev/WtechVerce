import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield, Layers, Users, Workflow, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Software Development Services | WTechVerce",
  description:
    "Looking for reliable custom software development? WTechVerce builds scalable, high-performance software solutions tailored to your business needs. Contact us today!",
  keywords: [
    "custom software development",
    "custom software development services",
    "enterprise software development company",
    "custom software applications",
    "dedicated custom software developers",
    "offshore software development team",
    "custom software product wireframing",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development Services | WTechVerce",
    description:
      "Looking for reliable custom software development? WTechVerce builds scalable, high-performance software solutions tailored to your business needs. Contact us today!",
    url: "https://wtechverce.com/services/software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services | WTechVerce",
    description:
      "Looking for reliable custom software development? WTechVerce builds scalable, high-performance software solutions tailored to your business needs. Contact us today!",
  },
};

export default function SoftwareDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software Development Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Looking for reliable custom software development? WTechVerce builds scalable, high-performance software solutions tailored to your business needs.",
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
              "name": "How long does it take to develop custom software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline depends on the complexity of the project, but a standard software development lifecycle usually takes between 2 to 6 months."
              }
            },
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
            â† Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
            Enterprise Software Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Looking for reliable <strong className="text-white">custom software development</strong>? WTechVerce delivers world-class custom software development services, helping organizations build scalable, high-performance software solutions tailored to their exact business needs.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As a leading enterprise software development company, our dedicated custom software developers and offshore software engineering teams transform complex business logic, legacy software bottlenecks, and multi-tenant architectures into high-performing commercial assets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Hire Dedicated Software Developers <ArrowRight className="w-5 h-5 ml-2" />
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
            alt="Custom software development services by WTechVerce team"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Scalable Infrastructure</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Engineered for Reliability, Zero Downtime &amp; Compliance</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              ISO-Standard Architecture
            </span>
          </div>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">High-Value Engineering</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Why Choose Our Software Solutions?</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When standard, off-the-shelf software packages fail to support your proprietary operations, custom software applications for business become an essential operational pillar. Our custom software development services solve the specific operational hurdles your company faces daily.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              From enterprise resource automation and secure transaction ledgers to customer self-service portals, our dedicated custom software developers ensure that every feature is engineered to lower operating costs, eliminate manual errors, and scale without software degradation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Furthermore, partnering with our offshore software development team provides continuous DevOps coverage, code reviews, and guaranteed SLA support across US, UK, and European time zones.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Cpu className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Architecture", desc: "Microservices, distributed backend architectures, and high-load servers." },
              { icon: <Workflow className="w-6 h-6 text-[#FD4F00]" />, title: "Product Wireframing", desc: "Custom software product wireframing to test user interactions prior to code." },
              { icon: <Users className="w-6 h-6 text-[#FD4F00]" />, title: "Dedicated Engineers", desc: "Senior full-stack developers fluent in React, Node.js, Next.js, and Python." },
              { icon: <Shield className="w-6 h-6 text-[#FD4F00]" />, title: "Enterprise Security", desc: "End-to-end data encryption, role-based access control, and GDPR compliance." },
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
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Our Software Engineering Process</h2>
            <p className="text-gray-400 text-base">
              A battle-tested software engineering process guarantees clear milestones, transparent reporting, and rapid time-to-market.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "We document user personas, analyze business logic, and determine technical system requirements." },
              { step: "02", title: "Product Wireframing", desc: "Interactive wireframing and clickable UI flows that test user journeys and data schemas." },
              { step: "03", title: "Agile Sprints", desc: "Bi-weekly sprint deliverables with automated test suites, continuous integration, and demo reviews." },
              { step: "04", title: "Launch & Evolution", desc: "Zero-downtime cloud deployment, full engineering documentation, and 24/7 post-launch monitoring." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US CALLOUT */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Competitive Advantage</span>
            <h3 className="text-3xl font-black mb-6">Scalable Software Engineering Tailored to Your Growth</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our engineering team builds custom software applications for business that integrate seamlessly with your third-party APIs, legacy databases, and ERPs, saving your company thousands of manual working hours every year.
            </p>
            <ul className="space-y-4">
              {[
                "100% bespoke source code ownership with no licensing fees or proprietary platform lock-in.",
                "Rigorous automated testing and code reviews for bug-free production environments.",
                "Custom software product wireframing that shortens delivery timelines and eliminates guesswork.",
                "Senior engineers experienced in enterprise fintech, logistics, healthcare, and ecommerce software.",
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
          <div className="text-center mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How long does it take to develop custom software?</h4>
              <p className="text-gray-400 leading-relaxed">
                The timeline depends on the complexity of the project, but a standard software development lifecycle usually takes between 2 to 6 months from discovery and wireframing through to final deployment.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why partner with an enterprise software development company like WTechVerce?</h4>
              <p className="text-gray-400 leading-relaxed">
                As a dedicated enterprise software development company, WTechVerce builds scalable, secure, and compliant custom software applications for business that eliminate operational bottlenecks and integrate seamlessly with your core systems.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire dedicated custom software developers or an offshore software development team?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we provide flexible engagement models allowing you to hire dedicated custom software developers or scale with a full offshore software development team equipped with modern DevOps, QA, and cloud engineering expertise.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is included in your custom software product wireframing phase?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our custom software product wireframing services include interactive user flow mapping, architectural blue-printing, edge-case analysis, and clickable prototypes to validate product logic before writing production code.
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
