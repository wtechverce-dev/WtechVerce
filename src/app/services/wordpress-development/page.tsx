import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Database, Layout, Shield, Zap, ShoppingCart, Code2, Layers, Check, Clock, Sparkles, Terminal, FileCode } from "lucide-react";
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
      {/* STRUCTURED DATA: SERVICE SCHEMA */}
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

      {/* STRUCTURED DATA: FAQ SCHEMA */}
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why choose custom WordPress website development instead of pre-made commercial themes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Commercial themes and visual page builders load megabytes of unneeded scripts, resulting in poor Core Web Vitals and security vulnerabilities. Our custom WordPress website development utilizes clean, hand-coded PHP templates and native Gutenberg blocks that pass Core Web Vitals audits and deliver peak SEO crawlability."
              }
            },
            {
              "@type": "Question",
              "name": "Why wordpress website development over proprietary CMS platforms like Webflow or Wix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When evaluating why wordpress website development is preferred by growing businesses, the primary factors are 100% data ownership, zero vendor lock-in, infinite custom plugin extensibility, and the ability to host your data on any cloud infrastructure worldwide."
              }
            },
            {
              "@type": "Question",
              "name": "What services does your custom wordpress plugin development company provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom wordpress plugin development company provides secure, object-oriented plugin architecture tailored to your specific business logic, third-party API synchronizations, CRM integrations, and automated payment gateway workflows without bloating your database."
              }
            },
            {
              "@type": "Question",
              "name": "Can a woocommerce website development company scale an online store to thousands of products?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a specialized woocommerce website development company, we optimize database schemas, implement Redis object caching, configure Elasticsearch product search, and streamline checkout funnels for high-volume enterprise stores."
              }
            },
            {
              "@type": "Question",
              "name": "How does WTechVerce deliver custom wordpress web development without risking downtime or traffic loss?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom wordpress web development process uses staging environments, strict database migration scripts, comprehensive 301 URL redirect maps, and automated SEO schema preservation to ensure a zero-downtime transition."
              }
            }
          ]
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HERO SECTION */}
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
            Harness the unmatched publishing autonomy of WordPress without the drag of bloated page builders. As a premier <strong className="text-white">wordpress web development agency</strong> and recognized <strong className="text-white">wordpress website development company</strong>, we deliver enterprise-grade <strong className="text-white">wordpress development services</strong> engineered for Core Web Vitals speed, airtight security, and organic search dominance.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From bespoke WordPress theme development and enterprise WooCommerce engineering to custom plugins and decoupled headless CMS setups, our full-stack engineers craft clean PHP and React solutions that make content management fast, scalable, and effortless.
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

        {/* SEARCH INTENT: PROBLEM TO SOLUTION FRAMING */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Bespoke CMS Engineering</span>
            <h2 data-text-reveal className="text-3xl font-black mb-6">Why Businesses Choose Custom WordPress Development</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Anyone can install an off-the-shelf commercial theme, but generic setups quickly bog down under heavy traffic, create severe security vulnerabilities, and fail Google’s Core Web Vitals metrics. As a dedicated <strong className="text-white">custom wordpress development company</strong>, we engineer lightweight platforms with zero unnecessary dependencies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              By writing clean, semantic template files and native Gutenberg blocks, our <strong className="text-white">custom wordpress website development</strong> gives non-technical marketing teams intuitive editorial control while ensuring page loads remain optimized on all devices. When considering <strong className="text-white">why wordpress website development</strong> remains the leading CMS choice, complete data ownership and limitless adaptability stand supreme.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From high-traffic corporate blogs and membership directories to global enterprise stores, our <strong className="text-white">wordpress cms development services</strong> and high-performance <strong className="text-white">custom wordpress web development</strong> combine robust backend data schemas with modern frontend performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layout className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Themes", desc: "Bespoke custom WordPress development using Advanced Custom Fields (ACF Pro) and native blocks." },
              { icon: <Code2 className="w-6 h-6 text-[#6C24FA]" />, title: "Custom Plugins", desc: "Crafted by an expert custom wordpress plugin development company for proprietary business logic." },
              { icon: <ShoppingCart className="w-6 h-6 text-[#6C24FA]" />, title: "WooCommerce Stores", desc: "Full-scale woocommerce website development company solutions with optimized checkout funnels." },
              { icon: <Zap className="w-6 h-6 text-[#6C24FA]" />, title: "Headless WordPress", desc: "Decoupled WordPress CMS development with lightning-fast Next.js frontend rendering." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl hover:border-[#6C24FA]/30 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON MATRIX: CUSTOM WORDPRESS VS BLOATED TEMPLATES */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Performance Comparison</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Bespoke Custom WordPress vs. Bloated Commercial Themes</h2>
            <p className="text-gray-400 text-base">
              See the direct commercial and technical advantages of hand-crafted WordPress engineering over heavy page builders like Elementor or Divi.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-400">Technical Metric</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-[#6C24FA]">Bespoke Custom WordPress</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-400">Commercial Page Builders</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Generic Off-The-Shelf Themes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Core Web Vitals &amp; Page Speed</td>
                  <td className="p-4 md:p-6 text-[#6C24FA]">Green 90+ PageSpeed scores; lean asset loading and instant LCP.</td>
                  <td className="p-4 md:p-6 text-gray-400">Scores of 25–45; excessive DOM depth, nested divs, and script bloat.</td>
                  <td className="p-4 md:p-6 text-gray-500">Unoptimized asset bundles with 40+ unused CSS/JS files.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Security &amp; Vulnerability Profile</td>
                  <td className="p-4 md:p-6 text-[#6C24FA]">Strict input sanitization, nonces, and minimal third-party plugin exposure.</td>
                  <td className="p-4 md:p-6 text-gray-400">Frequent CVE security patches required; high vulnerability surface.</td>
                  <td className="p-4 md:p-6 text-gray-500">Bundled outdated premium plugins that cannot be updated directly.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Editorial &amp; Content Management</td>
                  <td className="p-4 md:p-6 text-[#6C24FA]">Custom native Gutenberg blocks tailored strictly to your design system.</td>
                  <td className="p-4 md:p-6 text-gray-400">Complex visual drag-and-drop where editors easily break layouts.</td>
                  <td className="p-4 md:p-6 text-gray-500">Rigid theme option panels that fail when branding evolves.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">SEO &amp; Semantic HTML Markup</td>
                  <td className="p-4 md:p-6 text-[#6C24FA]">Clean schema.org structured data, semantic headings, and fast crawlability.</td>
                  <td className="p-4 md:p-6 text-gray-400">Messy markup with multiple H1 tags and cluttered non-semantic code.</td>
                  <td className="p-4 md:p-6 text-gray-500">Generic schema defaults with missing business metadata.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CORE WORDPRESS CAPABILITIES */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Engineering Capabilities</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Enterprise WordPress Development &amp; CMS Solutions</h2>
            <p className="text-gray-400 text-base">
              We provide comprehensive <strong className="text-white">wordpress plugin development services</strong>, theme engineering, and headless architecture for ambitious brands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <Layout className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Theme Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Pixel-perfect translation of Figma designs into clean PHP and modern CSS/Tailwind templates with zero visual page builder drag.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">ACF Pro · Gutenberg Blocks · Tailwind CSS</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <Code2 className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Plugin Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tailored plugin architecture built by our custom WordPress plugin engineers for bespoke calculators, CRM data pipelines, and external API sync.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">OOP PHP · REST API · Webhooks · WP-CLI</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <ShoppingCart className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">WooCommerce Online Stores</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                High-converting eCommerce platforms featuring custom cart drawers, one-click checkout, automated inventory sync, and multi-currency pricing.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">WooCommerce · Stripe · PayPal · Redis Cache</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <Zap className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Decoupled Headless WordPress</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Combine the familiar WordPress admin content interface with a high-speed Next.js frontend connected via GraphQL or REST API.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">WPGraphQL · Next.js · Vercel Edge · ISR</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <Shield className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Security Hardening &amp; Auditing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Enterprise security audits, automated database backups, Web Application Firewall (WAF) integration, and strict file permission hardening.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">Cloudflare WAF · SSL · Fail2ban · 2FA</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#6C24FA]/40 transition-colors">
              <Database className="w-10 h-10 text-[#6C24FA] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Safe Migration &amp; 301 Preservation</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Flawless migration of content, users, and media from legacy CMSs or builder platforms with exact 301 URL redirect maps to protect search rankings.
              </p>
              <span className="text-xs text-[#6C24FA] font-semibold">Zero Traffic Loss · URL Mapping · Schema Audit</span>
            </div>
          </div>
        </div>

        {/* OUR PROCESS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Methodology</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Our WordPress Engineering &amp; QA Workflow</h2>
            <p className="text-gray-400 text-base mt-4">
              A disciplined, sprint-driven development process ensuring predictable delivery, clean code reviews, and seamless production launch.
            </p>
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
              <h4 className="text-lg font-bold mb-2">Why choose custom WordPress website development instead of pre-made commercial themes?</h4>
              <p className="text-gray-400 leading-relaxed">
                Commercial themes and visual page builders load megabytes of unneeded scripts, resulting in poor Core Web Vitals and security vulnerabilities. Our custom WordPress website development utilizes clean, hand-coded PHP templates and native Gutenberg blocks that pass Core Web Vitals audits and deliver peak SEO crawlability.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Why wordpress website development over proprietary CMS platforms like Webflow or Wix?</h4>
              <p className="text-gray-400 leading-relaxed">
                When evaluating why wordpress website development is preferred by growing businesses, the primary factors are 100% data ownership, zero vendor lock-in, infinite custom plugin extensibility, and the ability to host your data on any cloud infrastructure worldwide.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What services does your custom wordpress plugin development company provide?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our custom wordpress plugin development company provides secure, object-oriented plugin architecture tailored to your specific business logic, third-party API synchronizations, CRM integrations, and automated payment gateway workflows without bloating your database.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can a woocommerce website development company scale an online store to thousands of products?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a specialized woocommerce website development company, we optimize database schemas, implement Redis object caching, configure Elasticsearch product search, and streamline checkout funnels for high-volume enterprise stores.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How does WTechVerce deliver custom wordpress web development without risking downtime or traffic loss?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our custom wordpress web development process uses staging environments, strict database migration scripts, comprehensive 301 URL redirect maps, and automated SEO schema preservation to ensure a zero-downtime transition.
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
