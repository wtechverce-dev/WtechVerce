import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShoppingCart, CreditCard, BarChart, Smartphone, ShieldCheck, Store, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "High-Converting eCommerce Website Development | WTechVerce",
  description:
    "Build a high-converting online store with modern enterprise ecommerce solutions. Secure payment architecture and strategic store optimization services.",
  keywords: [
    "high converting ecommerce website dev",
    "enterprise online store builders",
    "custom shopify plus development",
    "b2b ecommerce application development",
    "secure shopping cart architecture",
    "ecommerce website development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/ecommerce-development",
  },
  openGraph: {
    title: "High-Converting eCommerce Website Development | WTechVerce",
    description:
      "Build a high-converting online store with modern enterprise ecommerce solutions. Secure payment architecture and strategic store optimization services.",
    url: "https://wtechverce.com/services/ecommerce-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Converting eCommerce Website Development | WTechVerce",
    description:
      "Build a high-converting online store with modern enterprise ecommerce solutions. Secure payment architecture and strategic store optimization services.",
  },
};

export default function EcommerceDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "High Converting Ecommerce Website Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "High converting ecommerce website development, enterprise online store builders, custom Shopify Plus development services, and B2B ecommerce applications with secure shopping cart architecture.",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "High-Converting Ecommerce Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Shopify Plus Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "B2B Ecommerce Application Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Secure Shopping Cart Architecture"
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
            Enterprise Online Store Builders
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            High-Converting eCommerce <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8833] to-[#ffb885]">
              Website Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Turn browsers into high-lifetime-value buyers. As enterprise online store builders, we deliver high converting ecommerce website development, custom Shopify Plus development services, and B2B ecommerce application development backed by a secure shopping cart architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Launch Your High-Converting Store <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Ecommerce Work
            </Button>
          </div>
        </div>

        {/* INTRODUCTION / CORE PILLARS */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Conversion Architecture</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Enterprise Online Store Builders Crafted for Revenue</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Every extra second of load time and friction in the checkout process erodes profit margins. Our team focuses strictly on high converting ecommerce website development that merges lightning-fast page speeds with psychological merchandising triggers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From global brands requiring custom Shopify Plus development services to wholesale distributors needing robust B2B ecommerce application development, we architect secure shopping cart architecture that protects customer payment data while maximizing checkout completion rates.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Store className="w-6 h-6 text-[#FF8833]" />, title: "Shopify Plus Experts", desc: "Custom Shopify Plus development services and headless setups." },
              { icon: <ShieldCheck className="w-6 h-6 text-[#FF8833]" />, title: "Secure Cart System", desc: "PCI-DSS compliant secure shopping cart architecture." },
              { icon: <Layers className="w-6 h-6 text-[#FF8833]" />, title: "B2B Ecommerce", desc: "B2B ecommerce application development with wholesale pricing." },
              { icon: <BarChart className="w-6 h-6 text-[#FF8833]" />, title: "CRO Optimized", desc: "Proven checkout funnels engineered to maximize AOV." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* B2B & SHOPIFY PLUS DEEP DIVE */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Enterprise Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Custom Shopify Plus &amp; B2B Ecommerce Solutions</h2>
            <p className="text-gray-400 text-base">
              Scale without boundaries. Our enterprise online store builders engineer custom integrations with SAP, NetSuite, Salesforce, and modern ERPs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Shopify Plus</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Custom Shopify Plus development services utilizing Liquid, Checkout Extensibility, and headless Storefront APIs for unmatched brand control.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Custom Checkout UI extensions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Multi-currency &amp; internationalization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Advanced script and discount logic</li>
              </ul>
            </div>
            <div className="p-8 border border-[#FF8833]/30 rounded-3xl bg-[#FF8833]/5 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FF8833] text-black text-xs font-black uppercase rounded-full tracking-wider">Most Requested</div>
              <h3 className="text-2xl font-bold mb-4 text-white">B2B Ecommerce Apps</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                B2B ecommerce application development engineered for high-volume wholesale, distributor portals, and custom quote generation.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Customer-specific tier pricing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Net terms &amp; invoice payment flows</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Bulk CSV order uploading</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Secure Cart Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Rock-solid secure shopping cart architecture ensuring zero friction, PCI compliance, and lightning-quick 1-second checkout completion.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Stripe, PayPal, Apple Pay &amp; Klarna</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Real-time tax and shipping rate API</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF8833]" /> Fraud detection &amp; tokenization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE WTECHVERCE */}
        <div className="bg-gradient-to-r from-[#FF8833]/10 to-transparent border border-[#FF8833]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#FF8833] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose WTechVerce</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Partner With Our Enterprise Online Store Builders?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We engineer custom storefronts that combine modern aesthetic luxury with technical performance.
            </p>
            <ul className="space-y-4">
              {[
                "Proven high converting ecommerce website development techniques with documented conversion uplifts.",
                "Expert custom Shopify Plus development services tailored for rapid omnichannel scaling.",
                "Custom B2B ecommerce application development with automated replenishment and tiered wholesaler portals.",
                "Built-in secure shopping cart architecture that protects customer payment data and stops cart abandonment.",
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
          <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What makes high converting ecommerce website development different?</h4>
              <p className="text-gray-400 leading-relaxed">
                High converting ecommerce website development focuses on speed, checkout ergonomics, social proof, cross-sell algorithms, and frictionless payment methods to ensure maximum revenue per visitor.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide custom Shopify Plus development services?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our enterprise online store builders develop custom themes, headless storefronts with Hydrogen/Oxygen, and bespoke backend apps tailored for Shopify Plus merchants.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you ensure a secure shopping cart architecture?</h4>
              <p className="text-gray-400 leading-relaxed">
                We implement end-to-end tokenization, SSL encryption, PCI-DSS compliance, and zero-knowledge database schemas to ensure seamless and secure transactions across every device.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Scale Your Online Revenue?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with our enterprise online store builders to design, build, and optimize your custom ecommerce platform.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Start Your Ecommerce Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
