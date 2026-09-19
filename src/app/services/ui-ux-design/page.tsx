import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, PenTool, Layers, Eye, Smartphone, Layout, Sparkles, Compass, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Professional UI/UX Design Services | WTechVerce",
  description:
    "Enhance your digital product with modern UI/UX design services. We focus on creating clean, intuitive, and engaging interfaces that your users will love.",
  keywords: [
    "UI/UX Design Services",
    "professional ui/ux design services",
    "premium ui ux design agency",
    "custom digital product interface design",
    "software prototype wireframing",
    "responsive website layout design",
    "user experience and mobile interface wireframes",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/ui-ux-design",
  },
  openGraph: {
    title: "Professional UI/UX Design Services | WTechVerce",
    description:
      "Enhance your digital product with modern UI/UX design services. We focus on creating clean, intuitive, and engaging interfaces that your users will love.",
    url: "https://wtechverce.com/services/ui-ux-design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional UI/UX Design Services | WTechVerce",
    description:
      "Enhance your digital product with modern UI/UX design services. We focus on creating clean, intuitive, and engaging interfaces that your users will love.",
  },
};

export default function UiUxDesignService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Professional UI/UX Design Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Enhance your digital product with modern UI/UX design services. We focus on creating clean, intuitive, and engaging interfaces that your users will love.",
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
              "name": "What is included in your UI/UX design process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our process includes user research, wireframing, interactive prototyping, visual interface design, and usability testing."
              }
            },
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
            Human-Centric Interface Design
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Professional UI/UX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B21A8] to-[#c87bff]">
              Design Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Enhance your digital product with modern <strong className="text-white">UI/UX design services</strong>. We focus on creating clean, intuitive, and engaging interfaces that your users will love and your business can scale.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As a premium UI UX design agency, we combine custom digital product interface design, software prototype wireframing, and responsive website layout design to turn complicated workflows into joyful digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Request Design Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Design Showcase
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80"
            alt="Modern UI UX design services interface mockup"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c87bff] font-bold">Design Systems &amp; UX</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Visual Splendor Backed by Cognitive Psychology &amp; Behavioral Data</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Figma · WCAG 2.1 AA
            </span>
          </div>
        </div>

        {/* SECTION 1: USER-CENTERED DESIGN ARCHITECTURE */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">Methodical Strategy</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">User-Centered Design Architecture</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Design is more than aesthetics; it is the fundamental bridge between customer intent and business profit. Our professional UI/UX design services approach every screen through extensive user behavior analysis, competitive benchmarking, and cognitive load reduction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We design custom digital product interface design systems that look polished while guiding customers smoothly toward desired conversions. Whether your product is a B2B enterprise SaaS platform with complex dashboards or a fast-paced consumer mobile app, our design frameworks deliver clarity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every interface is built using modular component libraries and design tokens, ensuring your frontend engineers can translate Figma layouts into production code with pixel-perfect fidelity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Compass className="w-6 h-6 text-[#c87bff]" />, title: "User Research", desc: "User interviews, heatmaps, and empirical journey mapping." },
              { icon: <Layout className="w-6 h-6 text-[#c87bff]" />, title: "Design Systems", desc: "Consistent typography scales, color palettes & tokenized UI." },
              { icon: <Smartphone className="w-6 h-6 text-[#c87bff]" />, title: "Mobile UI Ergonomics", desc: "Thumb-zone navigation and tactile micro-interactions." },
              { icon: <Users className="w-6 h-6 text-[#c87bff]" />, title: "Usability Testing", desc: "Task completion metrics and accessibility compliance checks." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: WIREFRAMING AND PROTOTYPING */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">From Idea to Interactive Reality</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Wireframing and Prototyping</h2>
            <p className="text-gray-400 text-base">
              Interactive prototypes eliminate ambiguity, align executive stakeholders, and validate complex product interactions before development begins.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Information Architecture", desc: "Sitemaps, structural hierarchy, and user decision tree diagrams." },
              { step: "02", title: "Low-Fi Wireframing", desc: "Rapid grayscale layout sketches focusing on layout structure and content hierarchy." },
              { step: "03", title: "Hi-Fi Prototyping", desc: "Clickable Figma prototypes with realistic data states, hover triggers, and transitions." },
              { step: "04", title: "Developer Handoff", desc: "Auto-layout specifications, CSS tokens, assets, and comprehensive interaction guides." },
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
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-3 block">The WTechVerce Edge</span>
            <h3 className="text-3xl font-black mb-6">Interfaces That Enhance Product Retention &amp; Customer Delight</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We design digital products that leave a lasting emotional impression while driving measurable commercial metrics for tech enterprises and high-growth startups.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized premium UI UX design agency partnering with ambitious technology companies worldwide.",
                "Custom digital product interface design tailored for web applications, SaaS dashboards, and mobile apps.",
                "Thorough software prototype wireframing services that prevent expensive engineering iterations.",
                "Responsive website layout design that delivers unmatched fluidity on smartphones, tablets, and desktops.",
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
          <div className="text-center mb-12">
            <span className="text-[#c87bff] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is included in your UI/UX design process?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our process includes user research, wireframing, interactive prototyping, visual interface design, and usability testing to ensure a seamless product launch.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What deliverables do we receive from your UI/UX design services?</h4>
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
            Partner with WTechVerce's design studio to craft intuitive, engaging digital products that delight users and fuel sustainable business growth.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your UI/UX Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
