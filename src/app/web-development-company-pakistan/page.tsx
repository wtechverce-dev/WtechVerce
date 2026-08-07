import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Trophy, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Top Web Development Company in Pakistan | WTechVerce",
  description: "WTechVerce is the leading web development company in Pakistan. We build custom websites, e-commerce stores, and software solutions for global and local businesses.",
  alternates: {
    canonical: "https://wtechverce.com/web-development-company-pakistan",
  },
};

export default function PakistanWebDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WTechVerce",
          "description": "Leading Web Development Company in Pakistan providing web design, custom software, and SEO services.",
          "areaServed": "Pakistan",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK"
          }
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            ← Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 mb-6">
            <MapPin className="w-4 h-4 text-[#16a34a]" />
            <span className="text-sm font-bold text-[#16a34a] uppercase tracking-widest">Serving Pakistan & Worldwide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Top Web Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#4ade80]">
              Company in Pakistan
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Elevate your business with a premium digital presence. We build fast, scalable, and secure web applications for startups and enterprises across Pakistan and the globe.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Consult With Our Experts <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Local Expertise. Global Standards.</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Based in Pakistan, WTechVerce delivers world-class web development, ecommerce solutions, and software architectures. Whether you are a local business trying to dominate your market or an international firm looking for top-tier talent, we bridge the gap.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Trophy className="w-6 h-6 text-[#16a34a]" />, title: "Proven Track Record", desc: "150+ successful launches." },
              { icon: <Users className="w-6 h-6 text-[#16a34a]" />, title: "Local Market Knowledge", desc: "Tailored to PK audience." },
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
