import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Smartphone, Tablet, Layers, ShieldCheck, Cpu, Code2, Users, Sparkles, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Mobile App Development Services (iOS & Android) | WTechVerce",
  description:
    "Turn your ideas into successful mobile applications. We offer end-to-end mobile app development services for iOS and Android with seamless user experiences.",
  keywords: [
    "Mobile App Development Services",
    "native ios and android app development",
    "cross platform mobile app development",
    "corporate mobile app developers",
    "custom mobile application wireframing",
    "hybrid mobile app development solutions",
    "mobile app development company",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services (iOS & Android) | WTechVerce",
    description:
      "Turn your ideas into successful mobile applications. We offer end-to-end mobile app development services for iOS and Android with seamless user experiences.",
    url: "https://wtechverce.com/services/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services (iOS & Android) | WTechVerce",
    description:
      "Turn your ideas into successful mobile applications. We offer end-to-end mobile app development services for iOS and Android with seamless user experiences.",
  },
};

export default function MobileAppDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile App Development Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Turn your ideas into successful mobile applications. We offer end-to-end mobile app development services for iOS and Android with seamless user experiences.",
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
              "name": "Do you develop cross-platform mobile applications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build high-performance cross-platform mobile apps using Flutter and React Native to target both iOS and Android platforms efficiently."
              }
            },
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
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Mobile App <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Turn your ideas into successful mobile applications with our top-tier <strong className="text-white">mobile app development services</strong>. We offer end-to-end mobile app development services for iOS and Android with seamless user experiences.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From native iOS and Android app development using Swift and Kotlin to cross platform mobile app development via React Native and Flutter, our corporate mobile app developers engineer responsive, feature-rich applications that drive engagement and retention.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Hire Mobile App Developers <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Mobile Case Studies
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80"
            alt="Mobile app development services for iOS and Android"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00B4D8] font-bold">iOS &amp; Android Ecosystems</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Intuitive Mobile Experiences Engineered for App Store Dominance</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              SwiftUI · Jetpack Compose · Flutter
            </span>
          </div>
        </div>

        {/* INTRODUCTION / VALUE PROPOSITION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">High-Performance Mobile</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Android and iOS App Development</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In an era where over 60% of digital traffic flows through smartphones, having a responsive, lag-free mobile application is crucial for enterprise success. Our mobile app development services bridge technical complexity with human-centric ergonomics.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We engineer native iOS and Android app development using modern architectures, ensuring 60FPS animations, offline caching, push notifications, and biometric authentication work without a hitch.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When business requirements call for multi-platform speed, our cross platform mobile app development services leverage React Native and Flutter to deliver near-native performance while cutting maintenance overhead in half.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6 text-[#00B4D8]" />, title: "Native iOS Apps", desc: "Swift, SwiftUI, Apple Human Interface compliance & CoreData." },
              { icon: <Tablet className="w-6 h-6 text-[#00B4D8]" />, title: "Native Android Apps", desc: "Kotlin, Jetpack Compose, Material 3 UI design & Room DB." },
              { icon: <Layers className="w-6 h-6 text-[#00B4D8]" />, title: "Cross-Platform", desc: "React Native and Flutter apps deploying unified code." },
              { icon: <Users className="w-6 h-6 text-[#00B4D8]" />, title: "Dedicated Developers", desc: "Corporate mobile app developers for hire on flexible terms." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">From Wireframe to App Store</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Our Mobile Application Development Process</h2>
            <p className="text-gray-400 text-base">
              A structured, step-by-step engineering roadmap ensures bug-free builds and seamless App Store and Google Play approvals.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Mobile Wireframing", desc: "Custom mobile application wireframing mapping gesture navigation, thumb zone accessibility, and user onboarding." },
              { step: "02", title: "Architecture Design", desc: "Selecting the optimal native or cross-platform technology stack and configuring cloud backend APIs." },
              { step: "03", title: "Agile Sprints", desc: "Sprint cycles with bi-weekly builds distributed to your team via TestFlight and Firebase App Distribution." },
              { step: "04", title: "Store Launch & ASO", desc: "Handling strict Apple App Store and Google Play compliance, App Store Optimization (ASO), and ongoing patches." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#00B4D8]/10 to-transparent border border-[#00B4D8]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose WTechVerce</span>
            <h3 className="text-3xl font-black mb-6">Mobile Engineering Designed for Retention and Scalability</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We build mobile applications that delight users, protect enterprise data, and handle sudden spikes in active daily sessions with zero crashes.
            </p>
            <ul className="space-y-4">
              {[
                "Full-cycle mobile app development services from custom wireframing to App Store release.",
                "High-performance native iOS and Android app development using Swift and Kotlin.",
                "Cross platform mobile app development utilizing React Native and Flutter for cost efficiency.",
                "Experienced corporate mobile app developers available for project delivery or team augmentation.",
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
          <div className="text-center mb-12">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you develop cross-platform mobile applications?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we build high-performance cross-platform mobile apps using Flutter and React Native to target both iOS and Android platforms efficiently, maximizing speed-to-market while reducing ongoing maintenance costs.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the difference between native iOS/Android and cross-platform apps?</h4>
              <p className="text-gray-400 leading-relaxed">
                Native iOS and Android app development builds separate Swift/Kotlin codebases for maximum hardware acceleration and OS-specific features, whereas cross platform mobile app development services use frameworks like React Native or Flutter to share code across both platforms.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire corporate mobile app developers for hire on a dedicated basis?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, WTechVerce provides vetted corporate mobile app developers for hire who integrate into your sprint cycles, handle App Store and Google Play submissions, and manage ongoing feature updates.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What does your custom mobile application wireframing process include?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our custom mobile application wireframing process includes user touchpoint mapping, micro-interaction design, gesture architecture, and clickable interactive prototypes to test usability prior to production coding.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build a Standout Mobile App?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discuss your mobile application concept with our senior mobile architects and receive a detailed roadmap and feasibility audit.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Book a Mobile Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
