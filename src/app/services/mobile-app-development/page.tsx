import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, Tablet, Layers, ShieldCheck, Cpu, Code2, Users, Sparkles, Terminal } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Services & Apps",
  description:
    "WTechVerce provides custom mobile app development services for iOS and Android. High-performance React Native, Flutter, and scalable apps.",
  keywords: [
    "custom mobile app development services",
    "ios app development services",
    "cross platform app development company",
    "cross platform app development services",
    "on demand app development company",
    "hybrid app development company",
    "enterprise app development company",
    "custom mobile application development company",
    "custom ios app development",
    "custom android app development",
    "react native mobile app development company",
    "flutter mobile app development services",
    "cross-platform app development services",
    "mobile application development services company",
    "best mobile app development services",
    "mobile app development services in usa",
    "native mobile app development services",
    "cross platform app development companies",
    "custom mobile app development service",
    "custom enterprise mobile app development",
    "custom web and mobile app development",
    "cross-platform app development company",
    "wearable app development company",
    "wearable app development services",
    "iot mobile app development services",
    "travel mobile app development services",
    "fitness app development services",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Custom Mobile App Development Services & Apps | WTechVerce",
    description:
      "WTechVerce provides custom mobile app development services for iOS and Android. High-performance React Native, Flutter, and scalable apps.",
    url: "https://wtechverce.com/services/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development Services & Apps | WTechVerce",
    description:
      "WTechVerce provides custom mobile app development services for iOS and Android. High-performance React Native, Flutter, and scalable apps.",
  },
};

export default function MobileAppDevelopmentService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Mobile App Development Services for iOS & Android",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "WTechVerce provides custom mobile app development services, native iOS and Android engineering, and cross-platform Flutter and React Native solutions.",
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
              "name": "What is the difference between native iOS and Android app development vs cross platform mobile app development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Native iOS and Android app development uses platform-specific languages (Swift for Apple and Kotlin for Android) for maximum hardware performance and deep OS integration. Cross platform app development services utilize frameworks like Flutter or React Native to deploy a single unified codebase across both operating systems, reducing initial investment and time-to-market."
              }
            },
            {
              "@type": "Question",
              "name": "How do you handle App Store and Google Play compliance and approvals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our engineering team manages the complete release workflow, including Apple Human Interface and Google Material design audits, metadata preparation, privacy manifest configuration, sandbox test accounts, and direct communication with review teams."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire dedicated mobile app developers for our active product?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer flexible dedicated developer staffing pods for iOS (Swift), Android (Kotlin), Flutter, and React Native that integrate directly into your sprint cycles, daily standups, and codebase repositories."
              }
            },
            {
              "@type": "Question",
              "name": "Can you engineer custom web backends that synchronize with our mobile apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, as a custom web and mobile app development agency, we construct high-speed RESTful and GraphQL backend APIs, WebSocket live streams, and admin management dashboards that keep your mobile applications synchronized in real time."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-6">
            Native &amp; Cross-Platform Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Mobile App <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            WTechVerce delivers world-class <strong className="text-white">custom mobile app development services</strong> for iOS and Android. As a full-cycle <strong className="text-white">cross platform app development company</strong>, we transform high-impact product concepts into intuitive, high-retention mobile applications.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            From native iOS app development using Swift and Android development with Kotlin to high-velocity cross-platform engineering with Flutter and React Native, we engineer scalable, crash-resilient mobile applications that rank high on app stores and satisfy modern consumers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Start Your Mobile Project <ArrowRight className="w-5 h-5 ml-2" />
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
            alt="Custom mobile app development services interface for iOS and Android devices"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00B4D8] font-bold">iOS &amp; Android Ecosystems</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Intuitive Mobile Experiences Engineered for Engagement &amp; Retention</h3>
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
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Native &amp; Cross-Platform Mobile Application Engineering</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In a digital market dominated by smartphone engagement, an unoptimized or slow mobile application drives prospective customers straight to your competitors. Our <strong className="text-white">ios app development services</strong> and native Android solutions bridge technical precision with fluid user interaction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              When hardware acceleration, custom offline caching, and deep OS integration are paramount, we deliver 100% native engineering. When budget efficiency and multi-platform launch speed are the primary priorities, our <strong className="text-white">cross platform app development services</strong> use React Native and Flutter to deploy unified codebases with zero visual compromise.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From enterprise workforce applications to consumer-facing on-demand marketplaces, our senior engineering pods build secure, compliant applications that stand out on the Apple App Store and Google Play Store.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6 text-[#00B4D8]" />, title: "Native iOS Apps", desc: "Custom iOS app development built with Swift, SwiftUI, and Apple Human Interface guidelines." },
              { icon: <Tablet className="w-6 h-6 text-[#00B4D8]" />, title: "Native Android Apps", desc: "Custom Android app development using Kotlin, Jetpack Compose, and Material 3 design systems." },
              { icon: <Layers className="w-6 h-6 text-[#00B4D8]" />, title: "Cross-Platform Apps", desc: "Flutter and React Native mobile app development deploying shared code across iOS and Android." },
              { icon: <Users className="w-6 h-6 text-[#00B4D8]" />, title: "Enterprise & On-Demand", desc: "Custom enterprise mobile app development and on-demand marketplace architectures." },
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
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">From Concept to App Store</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Our End-to-End Mobile App Lifecycle</h2>
            <p className="text-gray-400 text-base">
              A structured, sprint-based roadmap ensures predictable delivery, transparent progress tracking, and effortless store approval.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Mobile Wireframing", desc: "Interactive wireframes mapping thumb-friendly navigation, onboarding flows, and gesture architectures." },
              { step: "02", title: "Technical Architecture", desc: "Selecting between native Swift/Kotlin or Flutter/React Native and configuring cloud API endpoints." },
              { step: "03", title: "Sprint Deliverables", desc: "Bi-weekly sprint demos distributed directly to your testing devices via TestFlight and Firebase." },
              { step: "04", title: "Store Submission & SLAs", desc: "Navigating strict Apple and Google guidelines, privacy manifest compliance, and post-launch maintenance." },
            ].map((s, i) => (
              <div key={i} className="relative p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="text-5xl font-black text-white/5 mb-6">{s.step}</div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIALIZED APP DOMAINS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Specialized Architectures</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">On-Demand &amp; Custom Mobile App Solutions</h2>
            <p className="text-gray-400 text-base">
              We have extensive experience building scalable mobile apps tailored around real-time user engagement and commercial workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "On-Demand & Delivery Apps", desc: "Architectures featuring live GPS driver tracking, automated dispatch, push notifications, and payment processing." },
              { title: "Booking & Marketplace Systems", desc: "Service appointment booking, handyman service marketplaces, and grocery delivery applications." },
              { title: "Health & Telemetry Portals", desc: "Patient appointment scheduling, fitness tracking, and clinic consultation booking systems." },
              { title: "Audio & Media Streaming", desc: "Low-latency audio streaming apps, video playback engines, and offline caching systems." },
              { title: "Financial & Account Dashboards", desc: "Secure mobile wallets, transaction history ledgers, and automated payment gateway integrations." },
              { title: "IoT & Wearable Companion Apps", desc: "Bluetooth LE connectivity, Apple Watch companion apps, and wearable sensor telemetry." },
            ].map((domain, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A]">
                <h4 className="text-lg font-bold text-white mb-3">{domain.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#00B4D8]/10 to-transparent border border-[#00B4D8]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose WTechVerce</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Mobile Engineering Designed for Retention and Scalability</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with innovative startups and enterprise businesses across the United States—including tech hubs in New York, Dallas, Austin, and Los Angeles—as well as international clients. Our collaborative agile process gives you direct access to lead mobile engineers and total code ownership.
            </p>
            <ul className="space-y-4">
              {[
                "Full-cycle custom mobile app development services from initial prototyping to App Store release.",
                "High-performance native iOS and Android app development using Swift and Kotlin.",
                "Cost-effective cross-platform development with Flutter and React Native for unified deployments.",
                "Dedicated mobile engineering pods available for turnkey project delivery or ongoing staff augmentation.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RELEVANT MOBILE & WEB APP CASE STUDIES */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Real-World Deployments</span>
              <h2 data-text-reveal className="text-3xl md:text-4xl font-black">Featured Mobile &amp; Web Applications</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#00B4D8] font-bold hover:underline mt-4 md:mt-0">
              Explore All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio/restaurant-ordering-system" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#00B4D8]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#00B4D8] font-bold block mb-3">Real-Time Mobile App</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00B4D8] transition-colors mb-4">
                Restaurant Food Ordering &amp; Live Tracking System
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Engineered real-time driver tracking and customer mobile ordering via WebSockets and React Native, cutting 30% third-party marketplace fees.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Case Study <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
              </span>
            </Link>

            <Link href="/portfolio/fitness-gym-management-software" className="group bg-[#0A0F1A] border border-white/5 hover:border-[#6C24FA]/40 rounded-3xl p-8 transition-all">
              <span className="text-xs uppercase tracking-widest text-[#6C24FA] font-bold block mb-3">Custom Member Portal</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#6C24FA] transition-colors mb-4">
                Mobile-Friendly Gym Management Software
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Unified scheduling, recurring Stripe billing, and member check-ins across mobile and tablet devices with zero downtime.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                Read Case Study <ArrowRight className="w-4 h-4 text-[#6C24FA]" />
              </span>
            </Link>
          </div>
        </div>

        {/* CLOUD BACKEND & WEB APP INTEGRATION BRIDGE */}
        <div className="bg-[#0A0F1A] border border-white/10 rounded-3xl p-8 md:p-12 mb-32 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#00B4D8] font-bold block mb-2">Full-Stack Synergy</span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Need a Custom Web Dashboard or Cloud Backend for Your App?
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We engineer custom APIs, microservices, and web admin dashboards that sync seamlessly with your iOS and Android mobile applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href="/services/software-development" variant="outline" size="md">
              Software Development <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/services/web-development" variant="outline" size="md">
              Web Development
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions About Mobile Development</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">What is the difference between native iOS and Android app development vs cross platform mobile app development?</h4>
              <p className="text-gray-400 leading-relaxed">
                Native iOS and Android app development uses platform-specific languages (Swift for Apple and Kotlin for Android) for maximum hardware performance and deep OS integration. Cross platform app development services utilize frameworks like Flutter or React Native to deploy a single unified codebase across both operating systems, reducing initial investment and time-to-market.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How do you handle App Store and Google Play compliance and approvals?</h4>
              <p className="text-gray-400 leading-relaxed">
                Our engineering team manages the complete release workflow, including Apple Human Interface and Google Material design audits, metadata preparation, privacy manifest configuration, sandbox test accounts, and direct communication with review teams.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire dedicated mobile app developers for our active product?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we offer flexible dedicated developer staffing pods for iOS (Swift), Android (Kotlin), Flutter, and React Native that integrate directly into your sprint cycles, daily standups, and codebase repositories.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you engineer custom web backends that synchronize with our mobile apps?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, as a custom web and mobile app development agency, we construct high-speed RESTful and GraphQL backend APIs, WebSocket live streams, and admin management dashboards that keep your mobile applications synchronized in real time.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Build a Standout Mobile Application?</h2>
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
