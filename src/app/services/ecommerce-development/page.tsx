import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShoppingCart, CreditCard, BarChart, Smartphone } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Ecommerce Development Services | WTechVerce",
  description: "High-converting Ecommerce development services. We build custom Shopify and WooCommerce stores optimized for sales, speed, and seamless user experiences.",
  alternates: {
    canonical: "https://wtechverce.com/services/ecommerce-development",
  },
};

export default function EcommerceDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Ecommerce Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Custom Shopify and WooCommerce development focused on high conversion rates, speed, and seamless integrations.",
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
              "name": "Which platforms do you use for Ecommerce development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in Shopify for most direct-to-consumer brands and WooCommerce for content-heavy businesses requiring extreme customization."
              }
            },
            {
              "@type": "Question",
              "name": "Do you integrate third-party payment gateways and ERPs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we integrate local and global payment gateways, fulfillment systems, and ERPs seamlessly into your storefront."
              }
            }
          ]
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            ← Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Ecommerce <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8833] to-[#ffb885]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Stop losing sales to a clunky checkout process. We build high-converting Shopify and WooCommerce stores designed to maximize AOV and deliver frictionless shopping experiences.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Build Your Store <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Designed to Sell</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In ecommerce, every millisecond of load time and every extra click costs you money. We engineer storefronts with a relentless focus on Conversion Rate Optimization (CRO). 
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need a custom headless Shopify build for maximum performance or a heavily modified WooCommerce setup with complex inventory logic, we deliver stores that are beautiful, fast, and secure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <ShoppingCart className="w-6 h-6 text-[#FF8833]" />, title: "Shopify Dev", desc: "Liquid & Headless." },
              { icon: <CreditCard className="w-6 h-6 text-[#FF8833]" />, title: "Payment Integrations", desc: "Global & Local Gateways." },
              { icon: <Smartphone className="w-6 h-6 text-[#FF8833]" />, title: "Mobile-First", desc: "Flawless mobile UX." },
              { icon: <BarChart className="w-6 h-6 text-[#FF8833]" />, title: "CRO Optimized", desc: "Built for conversions." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Which platforms do you use for Ecommerce development?</h4>
              <p className="text-gray-400">We specialize in Shopify for most direct-to-consumer brands and WooCommerce for content-heavy businesses requiring extreme customization.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you integrate third-party payment gateways and ERPs?</h4>
              <p className="text-gray-400">Yes, we integrate local and global payment gateways, fulfillment systems, and ERPs seamlessly into your storefront.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
