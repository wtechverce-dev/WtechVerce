import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, PenTool, Layers, Eye, Smartphone, Layout, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Premium UI/UX Design Company & Custom Product Interfaces | WTechVerce",
  description:
    "Transform your digital products with our premium UI/UX design services. We create high-converting, user-centric interfaces and responsive software wireframes.",
  keywords: [
    "premium ui ux design agency",
    "custom digital product interface design",
    "software prototype wireframing",
    "responsive website layout design",
    "user experience and mobile interface wireframes",
    "ui ux design company",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/ui-ux-design",
  },
  openGraph: {
    title: "Premium UI/UX Design Company & Custom Product Interfaces | WTechVerce",
    description:
      "Transform your digital products with our premium UI/UX design services. We create high-converting, user-centric interfaces and responsive software wireframes.",
    url: "https://wtechverce.com/services/ui-ux-design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium UI/UX Design Company & Custom Product Interfaces | WTechVerce",
    description:
      "Transform your digital products with our premium UI/UX design services. We create high-converting, user-centric interfaces and responsive software wireframes.",
  },
};

export default function UiUxDesignService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Premium UI UX Design Agency",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Premium UI UX design agency providing custom digital product interface design, software prototype wireframing services, and responsive website layout design.",
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
              "name": "Why collaborate with a premium UI UX design agency like WTechVerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A premium UI UX design agency aligns scientific user research with striking visual aesthetics. WTechVerce crafts custom digital product interface design and responsive website layout design that reduces user drop-off and significantly elevates conversion rates."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in your software prototype wireframing services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our software prototype wireframing services include comprehensive user journey mapping, low-fidelity and high-fidelity wireframes, interactive Figma prototypes, and usability testing to validate features before code development."
              }
            },
            {
              "@type": "Question",
              "name": "How do user experience and mobile interface wireframes benefit development teams?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Detailed user experience and mobile interface wireframes establish crystal-clear engineering specifications, precise design systems, and responsive breakpoints, preventing costly refactoring during frontend implementation."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6B21A8]/30 bg-[#6B21A8]/10 text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-6">
            Premium UI UX Design Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Premium UI/UX Design Company &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B21A8] to-[#c87bff]">
              Custom Product Interfaces
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Design is not just how it looks—it's how it converts. As a premium UI UX design agency, we deliver custom digital product interface design, software prototype wireframing services, and responsive website layout design that turn complex applications into effortless user journeys.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Request Design Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View UI/UX Case Studies
            </Button>
          </div>
        </div>

        {/* INTRODUCTION / CORE PHILOSOPHY */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">User-Centric Architecture</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Software Prototype Wireframing Services &amp; Experience Strategy</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Before a single line of frontend code is written, our software prototype wireframing services clarify system mechanics. We dissect your user personas, construct high-fidelity behavioral flows, and conduct interactive validation rounds.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From sophisticated SaaS dashboards to consumer-facing platforms, we produce responsive website layout design and user experience and mobile interface wireframes that elevate brand perception and eliminate user friction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <PenTool className="w-6 h-6 text-[#c87bff]" />, title: "Custom Interface Design", desc: "Custom digital product interface design with modern design tokens." },
              { icon: <Layers className="w-6 h-6 text-[#c87bff]" />, title: "Prototype Wireframing", desc: "Software prototype wireframing services and interactive Figma flows." },
              { icon: <Layout className="w-6 h-6 text-[#c87bff]" />, title: "Responsive Layouts", desc: "Responsive website layout design adapting to any viewport size." },
              { icon: <Smartphone className="w-6 h-6 text-[#c87bff]" />, title: "Mobile Wireframes", desc: "User experience and mobile interface wireframes for touch ergonomics." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS / METHODOLOGY */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">Design System Process</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">User Experience and Mobile Interface Wireframes Workflow</h2>
            <p className="text-gray-400 text-base">
              A structured design workflow ensures seamless handoff to engineering teams without missed edge cases.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "User Research", desc: "Analyzing user behavior, competitor benchmarks, and conversion friction points." },
              { step: "02", title: "Wireframe Blueprints", desc: "Crafting user experience and mobile interface wireframes with clear architectural hierarchy." },
              { step: "03", title: "Interactive Prototypes", desc: "Developing software prototype wireframing services with clickable micro-interactions in Figma." },
              { step: "04", title: "Design System & Handoff", desc: "Delivering responsive website layout design tokens, component libraries, and dev documentation." },
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
        <div className="bg-gradient-to-r from-[#6B21A8]/10 to-transparent border border-[#6B21A8]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">Agency Excellence</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Choose Our Premium UI UX Design Agency?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We design digital products that leave a lasting emotional impact while driving measurable commercial metrics.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized premium UI UX design agency partnering with global startups and tech enterprises.",
                "Expert custom digital product interface design tailored for web apps, SaaS suites, and mobile portals.",
                "Comprehensive software prototype wireframing services that prevent expensive engineering iterations.",
                "Pixel-perfect responsive website layout design that delivers unmatched fluidity on mobile and desktop.",
                "Production-ready user experience and mobile interface wireframes ready for instant frontend integration.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#c87bff] shrink-0 mt-0.5" /> <span>{item}</span>
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
              <h4 className="text-lg font-bold mb-2">What deliverables do we receive from your premium UI UX design agency?</h4>
              <p className="text-gray-400 leading-relaxed">
                You receive fully organized Figma source files, comprehensive design systems with color/typography variables, clickable prototypes, developer handoff notes, and SVG vector assets.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do software prototype wireframing services speed up development?</h4>
              <p className="text-gray-400 leading-relaxed">
                Wireframes resolve layout ambiguities and user journey questions early. By testing interactive prototypes with stakeholders first, development teams avoid mid-sprint scope changes and code rewrites.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you design responsive website layout designs for complex data dashboards?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we specialize in high-density data visualization, complex analytics dashboards, and responsive web layouts that maintain legibility across mobile, tablet, and ultra-wide screens.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready for World-Class UI/UX Design?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Elevate your product experience. Partner with our designers to craft intuitive interfaces that drive engagement and revenue.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your UI/UX Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
