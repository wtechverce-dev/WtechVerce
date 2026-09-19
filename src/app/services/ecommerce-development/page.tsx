import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ShoppingCart, CreditCard, BarChart, Smartphone, ShieldCheck, Store, Layers, Zap, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Professional eCommerce Website Development Services - WTechVerce",
  description:
    "Grow your online business with our top-notch eCommerce website development services. We create secure, user-friendly, and high-converting online stores.",
  keywords: [
    "eCommerce Website Development",
    "ecommerce website development services",
    "high converting ecommerce website dev",
    "enterprise online store builders",
    "custom shopify plus development",
    "b2b ecommerce application development",
    "secure shopping cart architecture",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/ecommerce-development",
  },
  openGraph: {
    title: "Professional eCommerce Website Development Services - WTechVerce",
    description:
      "Grow your online business with our top-notch eCommerce website development services. We create secure, user-friendly, and high-converting online stores.",
    url: "https://wtechverce.com/services/ecommerce-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional eCommerce Website Development Services - WTechVerce",
    description:
      "Grow your online business with our top-notch eCommerce website development services. We create secure, user-friendly, and high-converting online stores.",
  },
};

export default function EcommerceDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "eCommerce Website Development Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Grow your online business with our top-notch eCommerce website development services. We create secure, user-friendly, and high-converting online stores.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "High-Converting eCommerce Website Development",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Shopify Plus Development Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "B2B eCommerce Application Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Secure Shopping Cart Architecture & Checkout Optimization"
                }
              }
            ]
          }
        })}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which eCommerce platforms do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in building secure online stores using WooCommerce, Shopify, Magento, and custom-coded eCommerce solutions."
              }
            },
            {
              "@type": "Question",
              "name": "What makes high converting ecommerce website development different from standard web design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "High converting ecommerce website development optimizes every touchpoint—from mobile site velocity and intuitive filtering to frictionless one-click checkouts and secure shopping cart architecture—to maximize average order value (AOV) and conversion rate."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide custom Shopify Plus development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our enterprise online store builders build custom Shopify Plus solutions including headless Hydrogen storefronts, custom checkout extensions, private Shopify apps, and ERP inventory synchronizations."
              }
            },
            {
              "@type": "Question",
              "name": "Can you build complex B2B ecommerce applications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in B2B ecommerce application development with wholesale tiered pricing, quote-to-order logic, purchase order (PO) workflows, and multi-warehouse inventory management."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8833]/30 bg-[#FF8833]/10 text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-6">
            eCommerce Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            eCommerce Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8833] to-[#ffb885]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Grow your online business with our top-notch <strong className="text-white">eCommerce website development services</strong>. We create secure, user-friendly, and high-converting online stores tailored to scale sales and streamline inventory operations.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As enterprise online store builders, we combine high converting ecommerce website dev, custom shopify plus development services, and B2B ecommerce application development backed by a secure shopping cart architecture that turns traffic into repeatable revenue.
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
            alt="Professional ecommerce website development setup"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF8833] font-bold">Conversion Rate Optimization</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Engineered for Fast Checkouts, Low Abandonment &amp; High AOV</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              PCI-DSS Certified
            </span>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">High-Converting Stores</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Scalable Online Store Solutions</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In ecommerce, every microsecond of latency and unnecessary checkout step costs your business sales. Our eCommerce website development services approach digital retailing through a scientific conversion framework. We build stores that load in under a second and make product exploration effortless.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Whether you are an ambitious DTC brand requiring custom Shopify Plus development or a wholesale enterprise needing bespoke B2B ecommerce application development, our solutions adapt smoothly to high traffic surges during Black Friday, flash sales, and product drops.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We engineer secure shopping cart architecture that protects credit card data with tokenization, supports multi-currency conversions, and enables real-time ERP inventory synchronizations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Store className="w-6 h-6 text-[#FF8833]" />, title: "Shopify & Plus", desc: "Liquid themes, custom checkout extensions, and headless Hydrogen setups." },
              { icon: <ShieldCheck className="w-6 h-6 text-[#FF8833]" />, title: "Secure Cart System", desc: "PCI-compliant checkout architecture with one-click payment options." },
              { icon: <Layers className="w-6 h-6 text-[#FF8833]" />, title: "B2B Wholesale", desc: "Tiered pricing rules, corporate quotes, and volume discount calculators." },
              { icon: <BarChart className="w-6 h-6 text-[#FF8833]" />, title: "CRO Optimized", desc: "Data-backed layouts designed to increase average cart size." },
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
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Complete Functionality</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Powerful eCommerce Features We Integrate</h2>
            <p className="text-gray-400 text-base">
              Every digital storefront we deploy comes equipped with enterprise integrations and high-converting retail mechanics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Seamless Payment Integrations</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Connect global and regional payment gateways effortlessly to cater to customers across North America, Europe, and Asia.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Stripe, PayPal, Apple Pay, Google Pay</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Klarna, Afterpay Buy Now Pay Later (BNPL)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Automated multi-jurisdiction tax collection</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FF8833]/30 rounded-3xl bg-[#FF8833]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FF8833] text-black text-xs font-black uppercase rounded-full tracking-wider">High Conversion</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Frictionless Checkout</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Single-page and accelerated checkout funnels that eliminate cart abandonment and simplify repeat customer re-orders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Auto-fill address &amp; postal code verification</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Dynamic in-cart cross-sells and upsells</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Guest checkout with instant account creation</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Inventory &amp; ERP Sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Real-time stock synchronization across multi-location warehouses, third-party logistics (3PLs), and physical POS systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> NetSuite, SAP, and QuickBooks integrations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Automated low-stock alerts &amp; backorder logic</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Multi-warehouse order routing rules</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#FF8833]/10 to-transparent border border-[#FF8833]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Why Partner With WTechVerce</span>
            <h3 className="text-3xl font-black mb-6">Proven eCommerce Architecture Built for Maximum Return on Ad Spend</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We design every online store from the perspective of both customer experience and merchant administration, making day-to-day operations simple and profitable.
            </p>
            <ul className="space-y-4">
              {[
                "Demonstrated track record of delivering high converting ecommerce website dev with sub-second speeds.",
                "Custom Shopify Plus development services tailored for rapid omnichannel brand scaling.",
                "B2B ecommerce application development with wholesale portals, customer tiers, and invoice financing.",
                "Rigorous secure shopping cart architecture that protects transactions and maintains PCI compliance.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#FF8833] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Which eCommerce platforms do you specialize in?</h4>
              <p className="text-gray-400 leading-relaxed">
                We specialize in building secure online stores using WooCommerce, Shopify, Magento, and custom-coded eCommerce solutions tailored to your catalog scale and operational needs.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What makes high converting ecommerce website development different from standard web design?</h4>
              <p className="text-gray-400 leading-relaxed">
                High converting ecommerce website development optimizes every touchpoint—from mobile site velocity and intuitive filtering to frictionless one-click checkouts and secure shopping cart architecture—to maximize average order value (AOV) and conversion rate.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide custom Shopify Plus development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our enterprise online store builders build custom Shopify Plus solutions including headless Hydrogen storefronts, custom checkout extensions, private Shopify apps, and ERP inventory synchronizations.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you build complex B2B ecommerce applications?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we specialize in B2B ecommerce application development with wholesale tiered pricing, quote-to-order logic, purchase order (PO) workflows, and multi-warehouse inventory management.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Scale Your eCommerce Revenue?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with WTechVerce's ecommerce engineers to discuss your storefront vision, custom integrations, and growth strategy.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your eCommerce Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
