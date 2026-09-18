import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Monitor, Smartphone, Zap, Server, Globe2, Layout } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Professional Custom Web Development & Responsive Design | WTechVerce",
  description:
    "Scale your digital presence with top-tier custom web development services. High-converting website designs built for speed, security, and ranking growth.",
  keywords: [
    "custom web development agency",
    "professional corporate website design",
    "responsive web application development",
    "dedicated frontend and backend web services",
    "bespoke business website development",
    "web development company",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/web-development",
  },
  openGraph: {
    title: "Professional Custom Web Development & Responsive Design | WTechVerce",
    description:
      "Scale your digital presence with top-tier custom web development services. High-converting website designs built for speed, security, and ranking growth.",
    url: "https://wtechverce.com/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Custom Web Development & Responsive Design | WTechVerce",
    description:
      "Scale your digital presence with top-tier custom web development services. High-converting website designs built for speed, security, and ranking growth.",
  },
};

export default function WebDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Web Development Agency",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Custom web development agency providing professional corporate website design services, responsive web application development, and dedicated frontend and backend web services.",
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
              "name": "Why hire a custom web development agency instead of using pre-made templates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A custom web development agency crafts tailor-made codebases using Next.js and React that deliver sub-second loading speeds, superior search engine indexation, bespoke business logic, and uncompromising enterprise security that generic templates cannot provide."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in your professional corporate website design services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our professional corporate website design services include stakeholder discovery, responsive UI/UX design, interactive prototyping, conversion-focused layout architecture, and enterprise CMS integration."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide dedicated frontend and backend web services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer dedicated frontend and backend web services. Our frontend specialists excel in React, Next.js, and Tailwind CSS, while our backend engineers build high-performance APIs and microservices using Node.js, Express, and PostgreSQL."
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
            Custom Web Development Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Professional Custom Web Development &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Responsive Design
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            We don't just build websites; we engineer digital revenue engines. As a premier custom web development agency, we deliver professional corporate website design services, responsive web application development, and dedicated frontend and backend web services tailored to your exact business objectives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your Custom Web Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Corporate Portfolio
            </Button>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">High-Performance Engineering</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Professional Corporate Website Design Services</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your digital presence defines customer credibility. Our professional corporate website design services elevate enterprise brands through custom typography, intuitive user journeys, and clean semantic architecture. We ensure your brand commands authority and drives measurable inquiries.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond aesthetic appeal, we specialize in bespoke business website development and responsive web application development. Whether you require customer portals, internal operational tools, or interactive product configurations, our dedicated frontend and backend web services ensure optimal reliability and speed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#FD4F00]" />, title: "Corporate Design", desc: "Professional corporate website design services with custom brand identity." },
              { icon: <Globe2 className="w-6 h-6 text-[#FD4F00]" />, title: "Responsive Web Apps", desc: "Responsive web application development optimized for mobile, tablet & desktop." },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Full-Stack Services", desc: "Dedicated frontend and backend web services with Next.js, React & Node.js." },
              { icon: <Zap className="w-6 h-6 text-[#FD4F00]" />, title: "Bespoke Websites", desc: "Bespoke business website development tailored strictly to your operations." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES BREAKDOWN */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Full-Stack Solutions</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Dedicated Frontend and Backend Web Services</h2>
            <p className="text-gray-400 text-base">
              From interactive user interfaces to scalable cloud infrastructure, our engineering capabilities cover the entire modern web stack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Responsive web application development using modern frameworks like React, Next.js, and TypeScript for fluid interactions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Perfect Google Core Web Vitals</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Mobile-first responsive layouts</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Accessible WCAG 2.1 AA compliance</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FD4F00]/30 rounded-3xl bg-[#FD4F00]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FD4F00] text-white text-xs font-black uppercase rounded-full tracking-wider">Enterprise Grade</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Backend &amp; API Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Dedicated frontend and backend web services with high-throughput REST and GraphQL APIs, database optimization, and cloud deployments.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Node.js, Express &amp; Serverless functions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> PostgreSQL, MongoDB &amp; Redis caching</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> AWS, Vercel &amp; Cloudflare edge security</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Bespoke Business Websites</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Bespoke business website development designed to scale enterprises, corporate consultancies, and innovative startups.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Custom CMS integrations (Sanity, Strapi)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Lead generation funnel optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Scalable multi-language architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Partner With WTechVerce as Your Custom Web Development Agency?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We eliminate technical debt before it happens, ensuring your website remains fast, maintainable, and adaptable as your market evolves.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized custom web development agency with proven global delivery across US, UK, and European clients.",
                "Professional corporate website design services focused on stakeholder trust and high conversion rates.",
                "Responsive web application development built with React and Next.js for sub-second load times.",
                "Dedicated frontend and backend web services providing end-to-end architecture from design to DevOps.",
                "Bespoke business website development tailored specifically around your competitive advantages.",
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
              <h4 className="text-lg font-bold mb-2">What sets WTechVerce apart as a custom web development agency?</h4>
              <p className="text-gray-400 leading-relaxed">
                Unlike agencies that rely on slow WordPress templates, we specialize in bespoke business website development using modern technologies like Next.js, React, and Node.js. This guarantees extreme performance, bulletproof security, and top SEO rankings.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do your professional corporate website design services work?</h4>
              <p className="text-gray-400 leading-relaxed">
                We begin with a strategic brand discovery session, create interactive Figma wireframes, review interactive feedback, and then develop the production site with responsive web application development principles.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire dedicated frontend and backend web services for an existing project?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our dedicated frontend and backend web services can integrate directly into your active repositories to audit code, refactor legacy systems, implement new features, and boost speed metrics.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build With a Premier Custom Web Development Agency?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your requirements with our technical leads and receive a detailed project scope, timeline, and quote.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
