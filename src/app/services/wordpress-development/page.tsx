import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Database, Layout, Shield, Zap, ShoppingCart, Code2, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom WordPress Web Development Services",
  description:
    "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
  keywords: [
    "wordpress development services",
    "why wordpress website development",
    "custom wordpress development",
    "wordpress web development agency",
    "wordpress website development company",
    "custom wordpress development company",
    "custom wordpress website development",
    "woocommerce website development company",
    "wordpress cms development services",
    "custom wordpress plugin development company",
    "custom wordpress web development",
    "wordpress plugin development services",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/wordpress-development",
  },
  openGraph: {
    title: "Custom WordPress Web Development Services | WTechVerce",
    description:
      "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
    url: "https://wtechverce.com/services/wordpress-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom WordPress Web Development Services | WTechVerce",
    description:
      "WTechVerce provides custom WordPress development. We build fast, secure themes, custom plugins, and modern headless CMS web tools.",
  },
};

export default function WordPressDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom WordPress Development Services & Enterprise CMS Solutions",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a custom WordPress development company providing professional WordPress development services, custom themes, plugin engineering, and WooCommerce platforms.",
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
              "name": "Why choose custom WordPress website development instead of pre-made templates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pre-made templates carry heavy code bloat, unneeded dependencies, and severe security vulnerabilities. As a custom WordPress development company, we engineer lightweight bespoke themes and modular plugins that load in sub-seconds and deliver peak SEO crawlability."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide custom WordPress plugin development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our custom WordPress plugin development company creates secure, object-oriented plugins tailored to your specific business logic, third-party API synchronizations, and internal database workflows."
              }
            },
            {
              "@type": "Question",
              "name": "Can you engineer custom WooCommerce online stores?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a WooCommerce website development company we build high-converting eCommerce storefronts featuring custom checkout funnels, inventory synchronization, and regional payment gateway integrations."
              }
            },
            {
              "@type": "Question",
              "name": "How do you migrate existing corporate websites to WordPress without losing SEO rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We execute comprehensive URL mapping, 301 redirect architectures, metadata preservation, and database migration from platforms like Webflow, Wix, or legacy CMSs with zero organic traffic loss."
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
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-6">
            Custom WordPress Development Company
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            WordPress Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C24FA] to-[#b785fc]">
              Services &amp; Custom CMS
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Harness the power and autonomy of WordPress without the drag of bloated page builders. As a premier <strong className="text-white">wordpress web development agency</strong> and <strong className="text-white">wordpress website development company</strong>, we deliver enterprise-grade <strong className="text-white">wordpress development services</strong> engineered for performance, security, and search visibility.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From bespoke WordPress theme development and custom plugin engineering to enterprise WooCommerce stores and decoupled headless architectures, our engineers craft clean PHP and React solutions that make content management effortless.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your WordPress Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View WordPress Case Studies
            </Button>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Bespoke CMS Engineering</span>
            <h2 data-text-reveal className="text-3xl font-black mb-6">Why Businesses Choose Custom WordPress Development</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Anyone can install an off-the-shelf commercial theme, but generic setups quickly bog down under heavy traffic and create severe security liabilities. As a dedicated <strong className="text-white">custom wordpress development company</strong>, we engineer lightweight platforms with zero unnecessary dependencies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              By writing clean, semantic template files and native Gutenberg blocks, our <strong className="text-white">custom wordpress website development</strong> gives non-technical marketing teams intuitive editorial control while ensuring page loads remain under a second on mobile viewports.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From high-traffic corporate blogs and membership directories to global enterprise stores, our <strong className="text-white">wordpress cms development services</strong> combine robust backend data schemas with modern frontend performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Themes", desc: "Bespoke custom WordPress theme development using ACF Pro and native Gutenberg blocks." },
              { icon: <Code2 className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Plugins", desc: "Custom wordpress plugin development services for proprietary APIs and third-party sync." },
              { icon: <ShoppingCart className="w-6 h-6 text-[#6C24FA]" />, title: "WooCommerce Stores", desc: "Enterprise WooCommerce website development with high-converting custom checkout flows." },
              { icon: <Zap className="w-6 h-6 text-[#6C24FA]" />, title: "Headless WordPress", desc: "Decoupled WordPress CMS development with high-speed Next.js frontend rendering." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl hover:border-[#6C24FA]/30 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR PROCESS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Methodology</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Our WordPress Engineering &amp; QA Workflow</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Information Architecture", desc: "Structuring custom post types, taxonomies, and custom fields for intuitive content editing." },
              { step: "02", title: "Custom Theme Coding", desc: "Building a lightweight, semantic theme strictly tailored around your Figma UI design." },
              { step: "03", title: "Plugin & API Integration", desc: "Developing custom plugins, connecting CRM workflows, and securing payment gateway endpoints." },
              { step: "04", title: "Optimization & Launch", desc: "Object caching, database query optimization, security hardening, and zero-downtime deployment." },
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
                Replaced a bloated third-party theme with a hand-coded custom WordPress theme, clean Gutenberg block architecture, local SEO schema markup, and integrated patient appointment booking workflows.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Full Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" />
              </span>
            </Link>

            <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FD4F00] font-bold block mb-3">Architectural Comparison</span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  WordPress vs Custom Website: Which Fits Your Goals?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Understand the strategic trade-offs between custom WordPress development and bespoke Next.js web applications regarding performance, budget, and long-term scalability.
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
          <div className="text-center mb-10">
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About WordPress CMS</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why choose custom WordPress website development instead of pre-made templates?</h4>
              <p className="text-gray-400 leading-relaxed">
                Pre-made templates carry heavy code bloat, unneeded dependencies, and severe security vulnerabilities. As a custom WordPress development company, we engineer lightweight bespoke themes and modular plugins that load in sub-seconds and deliver peak SEO crawlability.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide custom WordPress plugin development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our custom WordPress plugin development company creates secure, object-oriented plugins tailored to your specific business logic, third-party API synchronizations, and internal database workflows.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you engineer custom WooCommerce online stores?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a WooCommerce website development company we build high-converting eCommerce storefronts featuring custom checkout funnels, inventory synchronization, and regional payment gateway integrations.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you migrate existing corporate websites to WordPress without losing SEO rankings?</h4>
              <p className="text-gray-400 leading-relaxed">
                We execute comprehensive URL mapping, 301 redirect architectures, metadata preservation, and database migration from platforms like Webflow, Wix, or legacy CMSs with zero organic traffic loss.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Scale With a Custom WordPress Solution</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get an enterprise CMS engineered for speed, clean editing, and long-term search engine visibility. Let us build a WordPress platform tailored to your brand.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
