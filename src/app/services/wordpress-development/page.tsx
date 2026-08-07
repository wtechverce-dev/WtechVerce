import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Database, Layout, Shield, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Professional WordPress Development Services | WTechVerce",
  description: "Secure, high-performance WordPress development services. From custom themes to headless WordPress, we build scalable platforms tailored to your needs.",
  alternates: {
    canonical: "https://wtechverce.com/services/wordpress-development",
  },
};

export default function WordPressDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "WordPress Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Custom WordPress development, including theme building, plugin integration, headless architecture, and advanced optimization.",
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
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C24FA] to-[#b785fc]">
              WordPress Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Harness the power of the world’s most popular CMS. We build custom, bloat-free WordPress websites that are easy to manage, lightning-fast, and completely secure against vulnerabilities.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your WP Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* INTRODUCTION / WHAT WE OFFER */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Beyond Basic Templates</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Anyone can install a WordPress theme. We engineer scalable platforms. By removing unnecessary plugins and writing clean, custom code, we ensure your WordPress site doesn't suffer from the classic "slow WP" syndrome.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From corporate portals and high-traffic publishing platforms to headless WordPress architectures paired with Next.js, we deliver solutions that give marketing teams flexibility without sacrificing developer-grade performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Themes", desc: "Pixel-perfect designs." },
              { icon: <Zap className="w-6 h-6 text-[#6C24FA]" />, title: "Headless WP", desc: "Next.js frontend integration." },
              { icon: <Shield className="w-6 h-6 text-[#6C24FA]" />, title: "Security Hardening", desc: "Bulletproof architecture." },
              { icon: <Database className="w-6 h-6 text-[#6C24FA]" />, title: "Migrations", desc: "Zero-data-loss transfers." },
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
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Our WordPress Workflow</h2>
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

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
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
          <h2 className="text-4xl font-black mb-6">Scale with WordPress</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a powerful, easy-to-manage CMS without the technical headaches. Let's build a WP site that works for you.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
