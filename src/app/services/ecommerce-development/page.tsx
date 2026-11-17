import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingCart, CreditCard, BarChart, Smartphone, ShieldCheck, Store, Layers, Zap, RefreshCw, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "eCommerce Web Development Company & Apps",
  description:
    "WTechVerce is an ecommerce web development company. We engineer custom Shopify Plus stores, WooCommerce, and B2B online portals.",
  keywords: [
    "ecommerce web development company",
    "shopify app development services",
    "ecommerce software development company",
    "shopify plus development company",
    "b2b ecommerce development services",
    "shopify plus web development company",
    "ecommerce website design and development services",
    "custom ecommerce development services",
    "headless ecommerce architecture",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/ecommerce-development",
  },
  openGraph: {
    title: "eCommerce Web Development Company & Apps | WTechVerce",
    description:
      "WTechVerce is an ecommerce web development company. We engineer custom Shopify Plus stores, WooCommerce, and B2B online portals.",
    url: "https://wtechverce.com/services/ecommerce-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Web Development Company & Apps | WTechVerce",
    description:
      "WTechVerce is an ecommerce web development company. We engineer custom Shopify Plus stores, WooCommerce, and B2B online portals.",
  },
};

export default function EcommerceDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "eCommerce Web Development Company & Online Store Solutions",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce is a full-cycle eCommerce web development company delivering custom Shopify Plus storefronts, B2B eCommerce portals, and scalable WooCommerce platforms.",
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
              "name": "Which eCommerce platforms does your ecommerce web development company specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We engineer high-converting digital storefronts across Shopify, Shopify Plus, WooCommerce, and custom headless eCommerce architectures using Next.js and React."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide custom Shopify app development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we construct custom private and public Shopify apps to synchronize inventory, integrate proprietary ERP and CRM tools, and extend Shopify checkout functionality."
              }
            },
            {
              "@type": "Question",
              "name": "What features are included in your B2B ecommerce development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our B2B eCommerce solutions include wholesale customer registration, tiered volume pricing, customer-specific product catalogs, net payment terms, bulk order forms, and automated invoicing."
              }
            },
            {
              "@type": "Question",
              "name": "How do you optimize online store checkout funnels to reduce cart abandonment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement frictionless single-page checkouts, auto-fill address validation, native mobile wallet support (Apple Pay, Google Pay), and transparent shipping cost calculators to ensure maximum conversion rates."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8833]/30 bg-[#FF8833]/10 text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-6">
            eCommerce Engineering &amp; Architecture
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            eCommerce Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8833] to-[#ffb885]">
              Development Company
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Accelerate your online sales with a dedicated <strong className="text-white">ecommerce web development company</strong>. We build secure, high-converting digital storefronts, bespoke Shopify Plus solutions, and robust B2B platforms engineered to maximize transaction velocity and customer lifetime value.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As a full-cycle <strong className="text-white">ecommerce software development company</strong>, our engineers build tailored Shopify storefronts, enterprise WooCommerce platforms, and custom eCommerce web applications backed by secure shopping cart architecture that scales seamlessly during peak traffic spikes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Launch Your eCommerce Store <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore eCommerce Portfolio
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
            alt="Ecommerce web development company dashboard and custom online store architecture"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF8833] font-bold">Conversion Rate Optimization</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Engineered for Rapid Checkouts, Low Abandonment &amp; High Average Order Value</h3>
            </div>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">High-Converting Stores</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Scalable Online Store Solutions for Retail &amp; B2B Brands</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In online retail, every millisecond of page load latency and friction in the checkout funnel directly erodes gross margins. Our <strong className="text-white">ecommerce website design and development services</strong> approach digital commerce through a rigorous engineering framework, building storefronts that load instantly and make product discovery effortless.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              As an enterprise <strong className="text-white">shopify plus development company</strong>, we construct customized shopping experiences, tailored Liquid themes, and headless React storefronts that handle sudden promotional traffic surges without checkout slowdowns or cart errors.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Furthermore, our <strong className="text-white">b2b ecommerce development services</strong> provide dedicated wholesale portals with tier-based pricing matrices, bulk order workflows, and automated ERP inventory synchronization.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Store className="w-6 h-6 text-[#FF8833]" />, title: "Shopify Plus Development", desc: "Enterprise Shopify Plus development with custom Liquid themes and checkout extensibility." },
              { icon: <Code2 className="w-6 h-6 text-[#FF8833]" />, title: "Custom Shopify Apps", desc: "Shopify app development services connecting proprietary ERP, CRM, and fulfillment tools." },
              { icon: <Layers className="w-6 h-6 text-[#FF8833]" />, title: "B2B eCommerce Portals", desc: "B2B ecommerce development services with custom pricing tiers, bulk orders, and invoicing." },
              { icon: <ShieldCheck className="w-6 h-6 text-[#FF8833]" />, title: "Secure Cart Architecture", desc: "Encrypted payment gateways, multi-currency support, and fraud-prevention workflows." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Complete Commerce Mechanics</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Enterprise Features Built Into Every Digital Storefront</h2>
            <p className="text-gray-400 text-base">
              Every eCommerce platform we deploy comes equipped with enterprise integrations and high-converting retail mechanics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Seamless Payment Integrations</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Connect global and regional payment gateways effortlessly to cater to customers across North America, Europe, and international markets.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Stripe, PayPal, Apple Pay, Google Pay</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Klarna, Afterpay Buy Now Pay Later (BNPL)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Multi-currency checkout and automated sales tax</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FF8833]/30 rounded-3xl bg-[#FF8833]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FF8833] text-black text-xs font-black uppercase rounded-full tracking-wider">High Conversion</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Frictionless Checkout</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Single-page and accelerated checkout funnels that eliminate cart abandonment and simplify repeat customer re-orders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Auto-fill address and zip code verification</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Dynamic in-cart upsells and post-purchase offers</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> One-click guest checkout with instant account creation</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Inventory &amp; ERP Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Real-time stock synchronization with third-party business tools, 3PL logistics providers, and retail management systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Real-time 3PL inventory and order dispatch sync</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Automated low-stock alerts &amp; backorder logic</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Custom B2B catalog views and custom invoice generation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#FF8833]/10 to-transparent border border-[#FF8833]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">eCommerce Architecture Built for Return on Investment</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We design every online store from the perspective of both customer conversion and merchant administration, making day-to-day catalog management simple and scalable.
            </p>
            <ul className="space-y-4">
              {[
                "High-performance store engineering with fast catalog rendering and Core Web Vitals optimization.",
                "Custom Shopify Plus development with custom Liquid sections and checkout extensibility.",
                "B2B eCommerce development services including wholesale portals, tier pricing, and ERP integration.",
                "Rigorous shopping cart architecture protecting customer transaction data with zero vendor lock-in.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FF8833] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RELEVANT ECOMMERCE CASE STUDY */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Proven Execution</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured eCommerce Projects</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#FF8833] font-bold hover:underline mt-4 md:mt-0">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/ecommerce-website-development" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#FF8833]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#FF8833] font-bold block mb-3">Headless eCommerce</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FF8833] transition-colors mb-4">
                High-Conversion D2C Storefront Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Delivered a headless React storefront integrated with Shopify APIs, automated inventory sync, regional payment gateways, and a responsive mobile checkout flow.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Explore Case Study <ArrowRight className="w-4 h-4 text-[#FF8833]" />
              </span>
            </Link>

            <Link href="/portfolio/restaurant-ordering-system" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#00B4D8]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#00B4D8] font-bold block mb-3">Online Ordering &amp; Payments</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00B4D8] transition-colors mb-4">
                Restaurant Food Ordering &amp; Live Checkout System
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Engineered real-time mobile ordering, digital payment processing, and dispatch tracking that saved 30% in third-party marketplace commissions.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Explore Case Study <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
              </span>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About eCommerce Development</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Which eCommerce platforms does your ecommerce web development company specialize in?</h4>
              <p className="text-gray-400 leading-relaxed">
                We engineer high-converting digital storefronts across Shopify, Shopify Plus, WooCommerce, and custom headless eCommerce architectures using Next.js and React.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide custom Shopify app development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we construct custom private and public Shopify apps to synchronize inventory, integrate proprietary ERP and CRM tools, and extend Shopify checkout functionality.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What features are included in your B2B ecommerce development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our B2B eCommerce solutions include wholesale customer registration, tiered volume pricing, customer-specific product catalogs, net payment terms, bulk order forms, and automated invoicing.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you optimize online store checkout funnels to reduce cart abandonment?</h4>
              <p className="text-gray-400 leading-relaxed">
                We implement frictionless single-page checkouts, auto-fill address validation, native mobile wallet support (Apple Pay, Google Pay), and transparent shipping cost calculators to ensure maximum conversion rates.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Scale Your eCommerce Revenue?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with WTechVerce&apos;s ecommerce engineers to discuss your storefront vision, custom integrations, and growth strategy.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your eCommerce Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
