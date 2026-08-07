import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, PenTool, Layers, Eye, Smartphone } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "UI/UX Design Services | WTechVerce",
  description: "Data-driven UI/UX design services. We craft stunning, intuitive interfaces that enhance user engagement and drive high conversion rates.",
  alternates: {
    canonical: "https://wtechverce.com/services/ui-ux-design",
  },
};

export default function UiUxDesignService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "UI/UX Design",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce"
          },
          "description": "User Interface and User Experience design services focusing on user research, wireframing, and interactive prototyping.",
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
              "name": "What tools do you use for UI/UX design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use industry-standard tools like Figma for wireframing, high-fidelity design, and interactive prototyping."
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
            UI/UX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B21A8] to-[#c87bff]">
              Design Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Beautiful design is subjective; effective design is data-driven. We craft intuitive interfaces that delight users and guide them seamlessly toward conversion.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Revamp Your UX <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-black mb-6">Interfaces That Connect</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A confusing interface is the fastest way to lose a customer. Our UX research maps out exactly what your users need, and our UI design delivers it wrapped in your brand's unique identity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <PenTool className="w-6 h-6 text-[#6B21A8]" />, title: "Wireframing", desc: "Structural blueprints." },
              { icon: <Layers className="w-6 h-6 text-[#6B21A8]" />, title: "Design Systems", desc: "Scalable component libraries." },
              { icon: <Eye className="w-6 h-6 text-[#6B21A8]" />, title: "User Research", desc: "Data-backed decisions." },
              { icon: <Smartphone className="w-6 h-6 text-[#6B21A8]" />, title: "Prototyping", desc: "Interactive Figma models." },
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
