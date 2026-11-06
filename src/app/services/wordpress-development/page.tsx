import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Database, Layout, Shield, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom WordPress Web Development Services",
  description: "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
  keywords: [
    "wordpress development services",
    "custom wordpress development",
    "wordpress website development company",
    "custom wordpress development company",
    "custom wordpress website development",
    "wordpress cms development services",
    "headless wordpress development",
    "custom wordpress theme development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/wordpress-development",
  },
  openGraph: {
    title: "Custom WordPress Web Development Services | WTechVerce",
    description: "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
    url: "https://wtechverce.com/services/wordpress-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom WordPress Web Development Services | WTechVerce",
    description: "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
  },
};

export default function WordPressDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "WordPress Development Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Professional WordPress development services, custom WordPress website development, custom plugin integration, headless architecture, and advanced performance optimization.",
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
              "name": "Why choose WordPress website development for your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "WordPress powers over 40% of the web due to its unmatched CMS flexibility, cost-effectiveness, and ease of content management. When engineered by a custom WordPress development company without bloated plugins, custom WordPress website development offers enterprise-grade security, sub-second loading speed, and scalable technical SEO."
              }
            },
            {
              "@type": "Question",
              "name": "Do you use pre-made templates or build from scratch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in custom WordPress themes built from scratch to ensure maximum performance, security, and alignment with your brand."
              }
            },
            {
              "@type": "Question",
              "name": "Can you migrate an existing site to WordPress?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle complex content migrations from platforms like Webflow, Wix, Squarespace, and custom CMS platforms to WordPress with zero SEO impact."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-6">
            Custom WP Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            WordPress Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C24FA] to-[#b785fc]">
              Services &amp; Custom CMS
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Harness the power of WordPress without the bloat. As a custom WordPress development company, we deliver enterprise-grade WordPress development services — engineering custom themes, tailored plugin integrations, headless architectures, and high-performance business websites that load in under a second.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your WP Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 data-text-reveal className="text-3xl font-black mb-6">Beyond Basic Templates</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Anyone can install an off-the-shelf WordPress theme. As a custom WordPress development company, we engineer high-performance platforms. By eliminating unnecessary plugins and writing clean PHP and JavaScript, we ensure your custom WordPress website development never suffers from slow load times or vulnerability exploits.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From corporate portals and high-traffic publishing platforms to headless architectures paired with Next.js, our WordPress CMS development services empower marketing teams with intuitive content management while delivering developer-grade speed and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Themes", desc: "Pixel-perfect custom WordPress theme development." },
              { icon: <Zap className="w-6 h-6 text-[#6C24FA]" />, title: "Headless CMS", desc: "Next.js frontend & WordPress CMS development." },
              { icon: <Shield className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Plugin Integration", desc: "Tailored plugins, API sync, & security hardening." },
              { icon: <Database className="w-6 h-6 text-[#6C24FA]" />, title: "Enterprise Migrations", desc: "Zero-data-loss transfers & database optimization." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl hover:border-[#6C24FA]/30 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR PROCESS */}
        <div className="mb-32">
          <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-12 text-center">Our WordPress Workflow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Information Architecture", desc: "Structuring taxonomies, post types, and data fields for seamless backend management." },
              { step: "02", title: "Custom Theme Dev", desc: "Building a lean, lightweight theme tailored strictly to your design requirements." },
              { step: "03", title: "Content Integration", desc: "Migrating existing data and setting up intuitive Gutenberg blocks or ACF layouts." },
              { step: "04", title: "Optimization & Launch", desc: "Caching, image optimization, security configuration, and going live." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-[#07091A]">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELEVANT WORDPRESS CASE STUDY & COMPARISON */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Execution</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured WordPress Case Study</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#6C24FA] font-bold hover:underline mt-4 md:mt-0">
              Explore All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/wordpress-business-website-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#6C24FA]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Custom Theme &amp; SEO Rebuild</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#6C24FA] transition-colors mb-4">
                Dental Clinic WordPress Website Rebuild
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Replaced a legacy third-party theme with a hand-coded custom WordPress theme, clean Gutenberg block architecture, local SEO schema markup, and integrated patient appointment request flows.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" />
              </span>
            </Link>

            <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">Decision Matrix</span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  WordPress vs Custom Website: Which Fits Your Goals?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Understand the trade-offs between custom WordPress development and bespoke Next.js web applications regarding performance, budget, and long-term scalability.
                </p>
              </div>
              <Button href="/blog/wordpress-vs-custom-website" variant="outline" size="md">
                Read WordPress vs Custom Guide <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 data-text-reveal className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why choose WordPress website development for your business?</h4>
              <p className="text-gray-400">WordPress powers over 40% of the web due to its unmatched CMS flexibility, cost-effectiveness, and ease of content management. When engineered by a custom WordPress development company without bloated plugins, custom WordPress website development offers enterprise-grade security, sub-second loading speed, and scalable technical SEO.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you use pre-made templates or build from scratch?</h4>
              <p className="text-gray-400">We specialize in custom WordPress themes built from scratch to ensure maximum performance, security, and alignment with your brand.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you migrate an existing site to WordPress?</h4>
              <p className="text-gray-400">Yes, we handle complex content migrations from platforms like Webflow, Wix, Squarespace, and custom CMS platforms to WordPress with zero SEO impact.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Scale with WordPress</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a powerful, easy-to-manage CMS without the technical headaches. Let&apos;s build a WP site that works for you.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
