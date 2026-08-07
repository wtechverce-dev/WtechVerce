import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Link as LinkIcon, BarChart } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "SEO Services in Pakistan & Global | WTechVerce",
  description: "Data-driven Search Engine Optimization services. From local SEO to technical audits and link building, we rank your business on Google.",
  alternates: {
    canonical: "https://wtechverce.com/services/seo",
  },
};

export default function SeoService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Search Engine Optimization",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Comprehensive SEO services including Local SEO, Technical SEO, On-Page Optimization, and Link Building.",
          "areaServed": "Worldwide"
        })}
      </Script>
      
      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            ← Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Data-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C1D95] to-[#8a4bfa]">
              SEO Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Stop guessing what Google wants. We use data-backed strategies to improve your organic rankings, drive high-intent traffic, and turn searches into sales.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Get a Free SEO Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Traffic That Converts</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ranking for vanity keywords is a waste of time. We focus on search intent — getting you in front of customers exactly when they are ready to buy. From deep technical audits to aggressive link building, we cover every pillar of modern SEO.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Search className="w-6 h-6 text-[#8a4bfa]" />, title: "Technical SEO", desc: "Crawlability & speed." },
              { icon: <MapPin className="w-6 h-6 text-[#8a4bfa]" />, title: "Local SEO", desc: "Dominate the Maps pack." },
              { icon: <LinkIcon className="w-6 h-6 text-[#8a4bfa]" />, title: "Link Building", desc: "High-authority backlinks." },
              { icon: <BarChart className="w-6 h-6 text-[#8a4bfa]" />, title: "Content Strategy", desc: "Topical authority." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
