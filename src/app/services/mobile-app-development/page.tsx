import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Smartphone, Tablet, Layers, ShieldCheck, Cpu, Code2, Users, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Native iOS & Android Mobile App Development | WTechVerce",
  description:
    "WTechVerce delivers native iOS and Android app development, cross platform mobile app development services, custom mobile application wireframing, and corporate mobile app developers for hire.",
  keywords: [
    "native ios and android app development",
    "cross platform mobile app development services",
    "corporate mobile app developers for hire",
    "custom mobile application wireframing",
    "hybrid mobile app development solutions",
    "mobile app development company",
    "react native development services",
    "flutter app development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Native iOS & Android Mobile App Development | WTechVerce",
    description:
      "Build market-leading mobile experiences with native iOS and Android app development, cross-platform solutions, and custom mobile application wireframing.",
    url: "https://wtechverce.com/services/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Native iOS & Android Mobile App Development | WTechVerce",
    description:
      "Native iOS and Android app development, hybrid mobile app development solutions, and corporate mobile app developers for hire.",
  },
};

export default function MobileAppDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Native iOS and Android App Development",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Native iOS and Android app development, cross platform mobile app development services, custom mobile application wireframing, and hybrid mobile app development solutions.",
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
              "name": "What is the difference between native iOS and Android app development vs cross platform mobile app development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Native iOS and Android app development builds separate Swift/Kotlin codebases for maximum hardware acceleration and OS-specific features, whereas cross platform mobile app development services use frameworks like React Native or Flutter to share code across both platforms, reducing time-to-market and maintenance costs."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire corporate mobile app developers for hire on a dedicated basis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, WTechVerce provides vetted corporate mobile app developers for hire who integrate into your sprint cycles, handle App Store and Google Play submissions, and manage ongoing feature updates."
              }
            },
            {
              "@type": "Question",
              "name": "What does your custom mobile application wireframing process include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our custom mobile application wireframing process includes user touchpoint mapping, micro-interaction design, gesture architecture, and clickable interactive prototypes to test usability prior to production coding."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-6">
            Mobile App Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Native iOS &amp; Android <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
              App Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Captivate users on their most personal devices. We engineer native iOS and Android app development, cross platform mobile app development services, and hybrid mobile app development solutions backed by rigorous custom mobile application wireframing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Hire Corporate Mobile App Developers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Explore Mobile Showcase
            </Button>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Engineered for Performance</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Cross Platform Mobile App Development Services &amp; Hybrid Solutions</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In a mobile-first world, your application must respond with instant fluidity, offline resilience, and biometric security. Whether you need native iOS and Android app development utilizing Swift and Kotlin for heavy computation, or cross platform mobile app development services using React Native or Flutter, we build apps that dominate app store charts.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Looking to scale your engineering team quickly? We provide seasoned corporate mobile app developers for hire who understand App Store guidelines, push notification architectures, and in-app monetization models.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6 text-[#00B4D8]" />, title: "Native Development", desc: "Native iOS and Android app development with Swift and Kotlin." },
              { icon: <Layers className="w-6 h-6 text-[#00B4D8]" />, title: "Cross-Platform", desc: "Cross platform mobile app development services via React Native & Flutter." },
              { icon: <Tablet className="w-6 h-6 text-[#00B4D8]" />, title: "Mobile Wireframing", desc: "Custom mobile application wireframing and clickable UI testing." },
              { icon: <Users className="w-6 h-6 text-[#00B4D8]" />, title: "Developers for Hire", desc: "Corporate mobile app developers for hire on flexible contracts." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS & WIREFRAMING */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">From Idea to App Store</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Custom Mobile Application Wireframing to Full Deployment</h2>
            <p className="text-gray-400 text-base">
              A disciplined mobile product lifecycle eliminates bugs and optimizes user retention from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "App Wireframing", desc: "Custom mobile application wireframing mapping thumb-friendly gestures, user onboarding, and navigation bars." },
              { step: "02", title: "Tech Architecture", desc: "Selecting between native iOS/Android or hybrid mobile app development solutions based on roadmap." },
              { step: "03", title: "Sprint Coding", desc: "Corporate mobile app developers for hire delivering sprint-tested builds via TestFlight and Firebase." },
              { step: "04", title: "Store Submission", desc: "App Store & Google Play compliance, ASO keyword optimization, and ongoing OS update patches." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HYBRID VS NATIVE */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Technology Stacks</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Native &amp; Hybrid Mobile App Development Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Native iOS &amp; Android Apps</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Native iOS and Android app development designed for apps requiring maximum graphic power, Bluetooth/hardware sensor integration, or complex background processing.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> Swift &amp; SwiftUI for Apple iOS, iPadOS, WatchOS</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> Kotlin &amp; Jetpack Compose for Android ecosystem</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> Zero latency animations &amp; CoreML/ARKit support</li>
              </ul>
            </div>
            <div className="p-8 border border-[#00B4D8]/30 rounded-3xl bg-[#00B4D8]/5">
              <h3 className="text-2xl font-bold mb-4 text-white">Hybrid &amp; Cross-Platform Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Cross platform mobile app development services and hybrid mobile app development solutions that allow you to launch on both platforms with a single codebase.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> React Native &amp; Expo for rapid multi-platform release</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> Flutter &amp; Dart for visually rich UI components</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00B4D8]" /> 40% reduction in upfront development costs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#00B4D8]/10 to-transparent border border-[#00B4D8]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Client Advantages</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Hire Our Corporate Mobile App Developers?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We eliminate app store rejection risks and ensure your mobile software remains loved by your customers.
            </p>
            <ul className="space-y-4">
              {[
                "Comprehensive native iOS and Android app development covering the entire Apple and Google device landscape.",
                "High-performance cross platform mobile app development services with near-native performance metrics.",
                "Vetted corporate mobile app developers for hire available for team augmentation or end-to-end turnkey delivery.",
                "Custom mobile application wireframing that stress-tests usability before development begins.",
                "Reliable hybrid mobile app development solutions designed to scale with your backend microservices.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" /> <span>{item}</span>
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
              <h4 className="text-lg font-bold mb-2">How do I choose between native iOS/Android and cross-platform apps?</h4>
              <p className="text-gray-400 leading-relaxed">
                If your app requires heavy hardware processing, 3D gaming, or OS-level customization, native iOS and Android app development is optimal. For most enterprise, SaaS, and ecommerce applications, cross platform mobile app development services provide equal quality at lower cost.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire corporate mobile app developers for hire on short notice?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we can deploy corporate mobile app developers for hire within 48 to 72 hours, aligned with your time zone and technical specifications.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the advantage of custom mobile application wireframing?</h4>
              <p className="text-gray-400 leading-relaxed">
                Custom mobile application wireframing provides an interactive preview of your app, allowing you to validate user retention mechanics and user flow before writing code.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your iOS or Android app concept with our mobile architects and receive a detailed roadmap and feasibility audit.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Book a Mobile Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
