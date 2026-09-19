import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Code, Monitor, Smartphone, Zap, Server, Globe2, Layout, Layers, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Web Development & Website Design Services | WTechVerce",
  description:
    "Get modern, fast, and fully responsive websites with our professional web development services. Let us build a powerful website that drives business results.",
  keywords: [
    "Custom Web Development",
    "custom web development agency",
    "professional corporate website design",
    "responsive web application development",
    "dedicated frontend and backend web services",
    "bespoke business website development",
    "website design services",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development & Website Design Services | WTechVerce",
    description:
      "Get modern, fast, and fully responsive websites with our professional web development services. Let us build a powerful website that drives business results.",
    url: "https://wtechverce.com/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development & Website Design Services | WTechVerce",
    description:
      "Get modern, fast, and fully responsive websites with our professional web development services. Let us build a powerful website that drives business results.",
  },
};

export default function WebDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Web Development and Website Design Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Get modern, fast, and fully responsive websites with our professional web development services. Let us build a powerful website that drives business results.",
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
              "name": "Will my website be mobile-friendly and fast?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, every website we build is completely responsive on all devices and optimized for high-speed performance."
              }
            },
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
            Bespoke Web Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Web Development and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Website Design
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Get modern, fast, and fully responsive websites with our professional <strong className="text-white">custom web development</strong> services. Let us build a powerful website that drives business results and positions your brand at the forefront of your industry.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As a leading custom web development agency, we engineer professional corporate website design services, responsive web application development, and dedicated frontend and backend web services designed to scale without technical debt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your Web Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Web Case Studies
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Custom web development and responsive website design"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold">Ultra-Fast Loading</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Sub-Second Speed, Perfect Core Web Vitals &amp; Top Google Rankings</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Next.js 16 &amp; React 19
            </span>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Digital Experience</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Responsive Web Solutions for Your Business</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your company website is your primary digital salesperson. Our custom web development services ensure your site communicates credibility, loads instantly across mobile viewports, and channels visitors smoothly toward qualified inquiries and sales.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We reject bloated website builders that compromise security and crawlability. Instead, our professional corporate website design services utilize clean, hand-coded architectures that give you unmatched autonomy, lightning-fast interactivity, and built-in technical SEO dominance.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need bespoke business website development for corporate branding or responsive web application development for complex user dashboards, our dedicated frontend and backend web services deliver exceptional craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#FD4F00]" />, title: "Corporate Design", desc: "Professional corporate website design services with custom brand identity." },
              { icon: <Globe2 className="w-6 h-6 text-[#FD4F00]" />, title: "Responsive Web Apps", desc: "Responsive web application development optimized across all mobile viewports." },
              { icon: <Server className="w-6 h-6 text-[#FD4F00]" />, title: "Dedicated Engineering", desc: "Dedicated frontend and backend web services with Next.js, React, and Node.js." },
              { icon: <Zap className="w-6 h-6 text-[#FD4F00]" />, title: "Bespoke Development", desc: "Bespoke business website development tailored specifically to your roadmap." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Modern Architecture</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Modern Web Dev Technologies We Use</h2>
            <p className="text-gray-400 text-base">
              We build using industry-standard, high-performance technology stacks engineered for scalability, security, and developer ergonomics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Frameworks</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Responsive web application development powered by React, Next.js, TypeScript, and Tailwind CSS for fluid animations and instant client-side transitions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Server-Side Rendering (SSR) &amp; Static Generation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> 100/100 Google Lighthouse Core Web Vitals</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Accessible WCAG 2.1 AA UI standards</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FD4F00]/30 rounded-3xl bg-[#FD4F00]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FD4F00] text-white text-xs font-black uppercase rounded-full tracking-wider">Enterprise Performance</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Backend &amp; Cloud Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Dedicated frontend and backend web services with high-throughput REST and GraphQL APIs, resilient microservices, and database clustering.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Node.js, Express, Nest.js &amp; Python APIs</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> PostgreSQL, MongoDB, Redis caching layers</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Vercel, AWS, Cloudflare Edge security integration</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Content Systems &amp; Headless</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Bespoke business website development empowering non-technical team members to publish content effortlessly without touching source code.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Sanity, Strapi, Contentful headless CMS</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Custom WordPress headless configurations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FD4F00]" /> Granular permissions &amp; automated editorial pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose WTechVerce</span>
            <h3 className="text-3xl font-black mb-6">A Premier Custom Web Development Agency Focused on Revenue</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We eliminate technical roadblocks before they affect your traffic, ensuring your digital presence remains fast, maintainable, and adaptable as your market evolves.
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
          <div className="text-center mb-12">
            <span className="text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Will my website be mobile-friendly and fast?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, every website we build is completely responsive on all devices and optimized for high-speed performance, achieving top scores on Google PageSpeed Insights and Core Web Vitals.
              </p>
            </div>
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
          <h2 className="text-4xl font-black mb-6">Ready to Build With a Premier Web Development Team?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your website objectives with our technical leads and receive a comprehensive project scope, timeline, and quote.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Schedule a Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
