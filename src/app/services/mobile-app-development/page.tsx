import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, Tablet, Layers, ShieldCheck, Cpu, Code2, Users, Sparkles, Terminal, Rocket, Check, Clock, DollarSign, Activity, MapPin, Watch, Plane } from "lucide-react";
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
      {/* STRUCTURED DATA: SERVICE SCHEMA */}
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
          "description": "WTechVerce delivers premier custom mobile app development services, native iOS and Android engineering, and cross-platform Flutter and React Native mobile applications.",
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Australia" }
          ]
        })}
      </Script>

      {/* STRUCTURED DATA: FAQ SCHEMA */}
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
                "text": "Native mobile app development services use platform-specific languages—Swift for Apple iOS and Kotlin for Android—providing maximum hardware performance, low latency, and direct OS API access. In contrast, cross-platform app development services use unified frameworks like Flutter or React Native to deploy a single shared codebase across both platforms, cutting development time by 35-40% while maintaining native-level responsiveness."
              }
            },
            {
              "@type": "Question",
              "name": "How does WTechVerce ensure App Store and Google Play compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As an experienced mobile application development services company, our engineering team manages the complete store submission process. We conduct Apple Human Interface and Google Material 3 design audits, configure privacy manifests, implement secure sandboxed in-app purchases, and resolve reviewer queries directly for a frictionless approval."
              }
            },
            {
              "@type": "Question",
              "name": "Can you engineer custom cloud backends that synchronize with our mobile apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our custom web and mobile app development teams build resilient RESTful and GraphQL APIs, real-time WebSocket streams, serverless cloud functions, and administrative web portals that synchronize data seamlessly with your mobile applications."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom enterprise mobile app development with strict data security?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our custom enterprise mobile app development practice includes role-based access control (RBAC), Mobile Device Management (MDM) compatibility, local SQLCipher encrypted databases, biometric authentication, and enterprise Single Sign-On (SSO)."
              }
            },
            {
              "@type": "Question",
              "name": "Can we hire dedicated mobile app developers for our active product?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide flexible dedicated developer pods for Swift, Kotlin, Flutter, and React Native that integrate into your existing Jira workflows, CI/CD pipelines, and sprint cycles."
              }
            }
          ]
        })}
      </Script>

      <NoiseTexture />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HERO SECTION */}
        <div className="max-w-4xl mb-20">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-6">
            Native &amp; Cross-Platform Mobile Engineering
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Custom Mobile App <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">
              Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            WTechVerce delivers market-tested <strong className="text-white">custom mobile app development services</strong> for iOS and Android. As an industry-leading <strong className="text-white">cross platform app development company</strong> and full-service <strong className="text-white">custom mobile application development company</strong>, we transform ambitious product concepts into high-engagement, store-approved mobile products.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            Whether you require dedicated <strong className="text-white">ios app development services</strong> using Swift and SwiftUI, high-performance <strong className="text-white">custom android app development</strong> with Kotlin, or unified multi-platform apps using Flutter and React Native, our senior mobile engineers build resilient architectures designed to capture market share.
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
              SwiftUI · Jetpack Compose · Flutter · React Native
            </span>
          </div>
        </div>

        {/* SEARCH INTENT: PROBLEM TO SOLUTION FRAMING */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">High-Performance Mobile</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Why Off-the-Shelf App Templates Fail Under Real User Demand</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In a hyper-competitive mobile marketplace, low-quality hybrid wrappers and generic templates lead to high churn, battery drain, UI jank, and immediate uninstalls. Delivering the <strong className="text-white">best mobile app development services</strong> requires technical mastery over memory lifecycles, offline synchronization, and hardware telemetry.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              When hardware acceleration, custom offline caching, and deep OS integration are paramount, our <strong className="text-white">native mobile app development services</strong> deliver 100% native engineering. When budget efficiency and multi-platform launch speed are the primary priorities, our <strong className="text-white">cross-platform app development services</strong> and custom <strong className="text-white">cross platform app development services</strong> use React Native and Flutter to deploy unified codebases with zero visual compromise.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As an established <strong className="text-white">mobile application development services company</strong> partnering with clients seeking top-tier <strong className="text-white">mobile app development services in usa</strong> and globally, we ensure your mobile app delivers optimized Core Web Vitals, ultra-responsive touch feedback, and frictionless checkout experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Smartphone className="w-6 h-6 text-[#00B4D8]" />, title: "Native iOS Apps", desc: "Premium custom ios app development built with Swift, SwiftUI, and Apple Human Interface guidelines." },
              { icon: <Tablet className="w-6 h-6 text-[#00B4D8]" />, title: "Native Android Apps", desc: "Scalable custom android app development using Kotlin, Jetpack Compose, and Material 3 design systems." },
              { icon: <Layers className="w-6 h-6 text-[#00B4D8]" />, title: "Cross-Platform Frameworks", desc: "Top-rated flutter mobile app development services and React Native delivering 90% code reuse." },
              { icon: <Users className="w-6 h-6 text-[#00B4D8]" />, title: "Enterprise & On-Demand", desc: "Engineered by an experienced enterprise app development company and on demand app development company." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON MATRIX: NATIVE VS CROSS-PLATFORM VS HYBRID */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Architecture Decision Matrix</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Native vs. Cross-Platform vs. Legacy Hybrid</h2>
            <p className="text-gray-400 text-base">
              Evaluate which architectural paradigm aligns with your product goals, technical constraints, and time-to-market.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-400">Technical Metric</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-[#00B4D8]">Native iOS &amp; Android</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-[#90E0EF]">Cross-Platform (Flutter / React Native)</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-gray-500">Legacy Hybrid (Cordova / WebViews)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Rendering Performance</td>
                  <td className="p-4 md:p-6 text-[#00B4D8]">120 FPS fluid animations; direct GPU rendering via Metal &amp; Vulkan.</td>
                  <td className="p-4 md:p-6 text-gray-300">Near-native 60-120 FPS; Flutter Impeller engine &amp; React Native Fabric.</td>
                  <td className="p-4 md:p-6 text-gray-500">Prone to DOM lag, slow scrolling, and sluggish touch response.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Hardware &amp; Sensor Access</td>
                  <td className="p-4 md:p-6 text-[#00B4D8]">Immediate zero-day access to new iOS/Android OS features &amp; sensors.</td>
                  <td className="p-4 md:p-6 text-gray-300">Full access via official bridges and custom native module channels.</td>
                  <td className="p-4 md:p-6 text-gray-500">Limited by community plugins; complex sensor integration failures.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Codebase Maintenance</td>
                  <td className="p-4 md:p-6 text-[#00B4D8]">Two independent codebases (Swift &amp; Kotlin) requiring dual engineering teams.</td>
                  <td className="p-4 md:p-6 text-gray-300">Single unified codebase sharing 85-95% of business logic across platforms.</td>
                  <td className="p-4 md:p-6 text-gray-500">Shared web code, but requires constant brittle device polyfills.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Delivery Timeline</td>
                  <td className="p-4 md:p-6 text-[#00B4D8]">12–16 weeks for full dual-platform release.</td>
                  <td className="p-4 md:p-6 text-gray-300">8–12 weeks; fast time-to-market with synchronized release cycles.</td>
                  <td className="p-4 md:p-6 text-gray-500">Fast initial mock, but extensive debugging delays store approval.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-semibold text-white">Best Fit For</td>
                  <td className="p-4 md:p-6 text-[#00B4D8]">3D AR/VR, complex audio DSP, intensive background telemetry, IoT.</td>
                  <td className="p-4 md:p-6 text-gray-300">SaaS companion apps, on-demand marketplaces, social platforms, FinTech.</td>
                  <td className="p-4 md:p-6 text-gray-500">Not recommended for modern commercial mobile applications.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CORE MOBILE SERVICE PILLARS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Specialized Capabilities</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Comprehensive Mobile Application Development Services</h2>
            <p className="text-gray-400 text-base">
              As a full-cycle <strong className="text-white">cross-platform app development company</strong> and recognized partner among leading <strong className="text-white">cross platform app development companies</strong>, we provide end-to-end mobile engineering capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom iOS App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Bespoke Swift and SwiftUI mobile engineering adhering to Apple Human Interface Guidelines. Optimized for iPhone, iPad, watchOS, and App Clips with strict privacy manifest compliance.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">Swift · SwiftUI · CoreData · Combine</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <Tablet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Android App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Scalable Android applications developed with Kotlin and Jetpack Compose. Built to support multiple screen densities, Android 14+ background execution policies, and Google Play billing.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">Kotlin · Jetpack Compose · Coroutines · Room</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flutter Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                High-performance multi-platform apps using Google’s Flutter engine. Delivers rapid UI rendering via Impeller, pixel-perfect widget styling, and unified backend sync for iOS and Android.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">Dart · Flutter 3 · Bloc · Riverpod · Impeller</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">React Native Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                As a specialized <strong className="text-white">react native mobile app development company</strong>, we construct modular applications that share business logic with web platforms and enable over-the-air (OTA) updates.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">React Native · TypeScript · Expo · Redux Toolkit</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Enterprise Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tailored for corporations requiring Mobile Device Management (MDM), single sign-on (SSO), encrypted data storage via SQLCipher, and offline data synchronization for field workforces.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">MDM · OAuth2 · SQLCipher · RBAC · Offline Sync</span>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0F1A] hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">On-Demand App Development Company</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                High-throughput on-demand architectures supporting real-time GPS driver tracking, automated order dispatching, multi-sided buyer-seller marketplaces, and automated push notifications.
              </p>
              <span className="text-xs text-[#00B4D8] font-semibold">WebSockets · Google Maps SDK · Stripe · FCM</span>
            </div>
          </div>
        </div>

        {/* DOMAIN SOLUTIONS: WEARABLES, IOT, TRAVEL, FITNESS & HYBRID ARCHITECTURES */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Specialized Verticals</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Industry-Specific Mobile Applications</h2>
            <p className="text-gray-400 text-base">
              From IoT hardware pairing to lifestyle marketplaces, our engineers bring domain expertise across specialized app categories.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <Watch className="w-6 h-6 text-[#00B4D8] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Wearables &amp; IoT</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                As a leading <strong className="text-white">wearable app development company</strong>, we deliver dedicated <strong className="text-white">wearable app development services</strong> and <strong className="text-white">iot mobile app development services</strong> for Apple Watch and Wear OS sensors.
              </p>
              <span className="text-xs text-[#00B4D8]">Bluetooth LE · MQTT · Sensor Telemetry</span>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <Plane className="w-6 h-6 text-[#00B4D8] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Travel &amp; Hospitality</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Expert <strong className="text-white">travel mobile app development services</strong> featuring itinerary planning, dynamic currency conversions, airline ticket wallet integration, and offline navigation maps.
              </p>
              <span className="text-xs text-[#00B4D8]">PassKit · Geofencing · Offline Caching</span>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <Activity className="w-6 h-6 text-[#00B4D8] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Health &amp; Fitness</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Custom <strong className="text-white">fitness app development services</strong> including workout tracking, wearable biometrics sync, automated subscription billing, and audio-guided training routines.
              </p>
              <span className="text-xs text-[#00B4D8]">HealthKit · Google Fit · In-App Subscriptions</span>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-[#0A0F1A]">
              <Cpu className="w-6 h-6 text-[#00B4D8] mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Modern Hybrid Frameworks</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Unlike outdated WebView solutions, our modern <strong className="text-white">hybrid app development company</strong> approach couples web technologies with native hardware acceleration when needed.
              </p>
              <span className="text-xs text-[#00B4D8]">Capacitor · Next.js · Native Shells</span>
            </div>
          </div>
        </div>

        {/* PROCESS SECTION: 4 SPRINT PHASES */}
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
              { step: "01", title: "Thumb-Zone Wireframing", desc: "Interactive Figma prototypes mapping thumb-friendly navigation, onboarding flows, and gesture architectures." },
              { step: "02", title: "Technical Architecture", desc: "Selecting between native Swift/Kotlin or Flutter/React Native and configuring cloud API endpoints." },
              { step: "03", title: "Sprint Deliverables", desc: "Bi-weekly sprint demos distributed directly to your testing devices via Apple TestFlight and Google Firebase App Distribution." },
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

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#00B4D8]/10 to-transparent border border-[#00B4D8]/20 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose WTechVerce</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Mobile Engineering Designed for Retention and Scalability</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with innovative startups and enterprise businesses across the United States—including tech hubs in New York, Dallas, Austin, and Los Angeles—as well as international clients. Our collaborative agile process gives you direct access to lead mobile engineers and total code ownership through our dedicated <strong className="text-white">custom mobile app development service</strong> pods.
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
                Native mobile app development services use platform-specific languages—Swift for Apple iOS and Kotlin for Android—providing maximum hardware performance, low latency, and direct OS API access. In contrast, cross-platform app development services use unified frameworks like Flutter or React Native to deploy a single shared codebase across both platforms, cutting development time by 35-40% while maintaining native-level responsiveness.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How does WTechVerce ensure App Store and Google Play compliance?</h4>
              <p className="text-gray-400 leading-relaxed">
                As an experienced mobile application development services company, our engineering team manages the complete store submission process. We conduct Apple Human Interface and Google Material 3 design audits, configure privacy manifests, implement secure sandboxed in-app purchases, and resolve reviewer queries directly for a frictionless approval.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can you engineer custom cloud backends that synchronize with our mobile apps?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our custom web and mobile app development teams build resilient RESTful and GraphQL APIs, real-time WebSocket streams, serverless cloud functions, and administrative web portals that synchronize data seamlessly with your mobile applications.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you offer custom enterprise mobile app development with strict data security?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, our custom enterprise mobile app development practice includes role-based access control (RBAC), Mobile Device Management (MDM) compatibility, local SQLCipher encrypted databases, biometric authentication, and enterprise Single Sign-On (SSO).
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Can we hire dedicated mobile app developers for our active product?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes, we provide flexible dedicated developer pods for Swift, Kotlin, Flutter, and React Native that integrate into your existing Jira workflows, CI/CD pipelines, and sprint cycles.
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
