import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, RefreshCw, Code, LineChart, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Website Redesign Services | WTechVerce",
  description: "Strategic website redesign services to improve UX, fix technical debt, and increase conversions without losing your existing SEO rankings.",
  alternates: {
    canonical: "https://wtechverce.com/services/website-redesign",
  },
};

export default function WebsiteRedesignService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Website Redesign",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "Strategic website overhauls to modernize aesthetics, improve performance, and boost conversions.",
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
            Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">
              Redesign Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            A redesign isn't just a fresh coat of paint. It's a strategic overhaul to fix technical debt, improve user experience, and drive higher conversion rates.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Audit Your Website <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Modernize Without Losing SEO</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The biggest risk of a redesign is losing your hard-earned Google rankings. We perform meticulous URL mapping and 301 redirect planning to ensure your SEO equity transfers perfectly to the new site.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <RefreshCw className="w-6 h-6 text-[#FD4F00]" />, title: "UX Audit", desc: "Identify drop-offs." },
              { icon: <LineChart className="w-6 h-6 text-[#FD4F00]" />, title: "SEO Preservation", desc: "No lost traffic." },
              { icon: <Code className="w-6 h-6 text-[#FD4F00]" />, title: "Tech Modernization", desc: "Faster frameworks." },
              { icon: <Shield className="w-6 h-6 text-[#FD4F00]" />, title: "Zero Downtime", desc: "Seamless launch." },
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
