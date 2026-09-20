import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Search, TrendingUp, Link as LinkIcon, BarChart2, Globe, Target, Zap, ShieldAlert, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Professional SEO Services to Rank Your Website | WTechVerce",
  description:
    "Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website to rank higher on Google search results.",
  keywords: [
    "Professional SEO Services",
    "expert seo services",
    "top results digital marketing agency",
    "corporate performance marketing solutions",
    "advanced data driven seo campaigns",
    "search engine marketing traffic growth",
    "professional off page link building services",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/seo",
  },
  openGraph: {
    title: "Professional SEO Services to Rank Your Website | WTechVerce",
    description:
      "Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website to rank higher on Google search results.",
    url: "https://wtechverce.com/services/seo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional SEO Services to Rank Your Website | WTechVerce",
    description:
      "Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website to rank higher on Google search results.",
  },
};

export default function SeoService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Professional SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website to rank higher on Google search results.",
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
              "name": "How long does it take to see results from SEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most SEO campaigns begin showing measurable organic ranking improvements within 3 to 6 months as domain authority builds, technical crawl errors are resolved, and content clusters gain indexation depth."
              }
            },
            {
              "@type": "Question",
              "name": "What makes WTechVerce a top results digital marketing agency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unlike agencies fixated on superficial impressions, WTechVerce functions as a top results digital marketing agency focused strictly on bottom-line revenue. We pair corporate performance marketing solutions with advanced data driven SEO campaigns to generate high-intent pipeline."
              }
            },
            {
              "@type": "Question",
              "name": "How do your advanced data driven SEO campaigns drive search engine marketing traffic growth?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We combine algorithmic keyword mapping, technical Core Web Vitals optimization, programmatic content clustering, and professional off page link building services to capture first-page Google positions that compound organic search engine marketing traffic growth."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in your professional off page link building services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our professional off page link building services focus exclusively on white-hat digital PR, editorial guest contributions on high-DR publications, broken link reclamation, and niche-relevant outreach that safely enhances domain authority without search engine penalties."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4C1D95]/40 bg-[#4C1D95]/15 text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-6">
            Search Engine Dominance
          </div>
          <h1 data-text-reveal className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Professional SEO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a4bfa] to-[#c4b5fd]">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Boost your online visibility and drive organic traffic with our <strong className="text-white">professional SEO services</strong>. We optimize your website to rank higher on Google search results, capture high-intent customers, and convert organic impressions into revenue.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            As a top results digital marketing agency, we engineer corporate performance marketing solutions, advanced data driven seo campaigns, and professional off page link building services that consistently drive search engine marketing traffic growth that compounds over time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" filled>
              Get a Free Organic Growth Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Organic Ranking Results
            </Button>
          </div>
        </div>

        {/* HERO SHOWCASE IMAGE WITH SEMANTIC ALT */}
        <div className="relative w-full h-[320px] md:h-[460px] rounded-3xl overflow-hidden border border-white/10 mb-32 group shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Expert search engine optimization services"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">Top Google Rankings</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Ethical, White-Hat SEO Architecture Driven by Search Intent Data</h3>
            </div>
            <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              GSC Verified · White-Hat
            </span>
          </div>
        </div>

        {/* SECTION 1: TECHNICAL AND ON-PAGE SEO OPTIMIZATION */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Structural Excellence</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-6">Technical and On-Page SEO Optimization</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Google algorithms heavily prioritize technical accessibility and topical depth. Our professional SEO services audit your codebase from the ground up, resolving crawl bottlenecks, eliminating duplicate content errors, and building clean semantic HTML hierarchies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We implement comprehensive Schema.org JSON-LD structured data graphs, optimize Core Web Vitals to achieve sub-second render times, and formulate keyword-rich internal linking strategies that distribute PageRank effectively across every key money page.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every page is crafted around commercial search intent, aligning metadata, headers, and body content to satisfy both Google's search algorithms and the exact questions your buyers are asking.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Search className="w-6 h-6 text-[#a78bfa]" />, title: "Technical Audits", desc: "Crawl depth analysis, canonical URL fixes, and 301 redirect mapping." },
              { icon: <Cpu className="w-6 h-6 text-[#a78bfa]" />, title: "Core Web Vitals", desc: "Optimizing LCP, FID, and CLS scores for maximum ranking potential." },
              { icon: <Target className="w-6 h-6 text-[#a78bfa]" />, title: "On-Page Targeting", desc: "Keyword-optimized headers, natural intent matching, and schema markup." },
              { icon: <BarChart2 className="w-6 h-6 text-[#a78bfa]" />, title: "Content Clusters", desc: "Pillar pages and topic clusters establishing undeniable topical authority." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: DRIVE ORGANIC TRAFFIC WITH EXPERT SEO */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Organic Growth That Compounds</span>
            <h2 data-text-reveal className="text-3xl md:text-4xl font-black mb-4">Drive Organic Traffic with Expert SEO</h2>
            <p className="text-gray-400 text-base">
              A comprehensive search strategy combines high-converting commercial keywords with external trust signals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Commercial Keyword Research</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Target high-intent transactional search queries where searchers have clear purchasing intent, bypassing vanity keywords that bring zero pipeline.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Low competition, high-intent targeting</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Competitor gap and SERP feature analysis</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Conversion-led intent mapping</li>
              </ul>
            </div>
            <div className="p-8 border border-[#4C1D95]/40 rounded-3xl bg-[#4C1D95]/10 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#8a4bfa] text-white text-xs font-black uppercase rounded-full tracking-wider">High Authority</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Off-Page Link Building</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional off page link building services that secure authoritative editorial mentions on high-DR industry publications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> 100% white-hat digital PR outreach</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Contextual in-content guest contributions</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Zero private blog networks (PBNs) or spam</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Continuous Monitoring &amp; ROI</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transparent reporting tied to actual revenue, tracking rankings, organic clicks, and conversions in Google Search Console and GA4.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Daily keyword ranking trajectory tracking</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Monthly organic traffic &amp; conversion reports</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Algorithmic update defense &amp; agility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#4C1D95]/15 to-transparent border border-[#4C1D95]/30 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Demonstrated Performance</span>
            <h3 className="text-3xl font-black mb-6">Why Partner With WTechVerce for Professional SEO Services?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We align search engine marketing directly with closed-won enterprise revenue rather than meaningless traffic charts.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized provider of professional SEO services specializing in technology agencies, B2B SaaS, and ecommerce.",
                "Corporate performance marketing solutions engineered around clear customer acquisition cost (CAC) objectives.",
                "Advanced data driven SEO campaigns built to rank for high-profit commercial keywords.",
                "Sustainable search engine marketing traffic growth that protects your business from Google core algorithm shifts.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#a78bfa] shrink-0 mt-0.5" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-2 block">Common Questions</span>
            <h2 data-text-reveal className="text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How long does it take to see results from SEO?</h4>
              <p className="text-gray-400 leading-relaxed">
                Most SEO campaigns begin showing measurable organic ranking improvements within 3 to 6 months as domain authority builds, technical crawl errors are resolved, and content clusters gain indexation depth.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Are your professional off page link building services safe from Google penalties?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes. We strictly reject private blog networks (PBNs), automated links, and spam directories. Every link is acquired via manual editorial outreach and relevant digital PR, ensuring permanent algorithmic safety.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">Do you provide reporting tied to actual revenue and leads?</h4>
              <p className="text-gray-400 leading-relaxed">
                Yes. As a top results digital marketing agency, our monthly reporting ties organic rankings, clicks, and conversions directly to pipeline value and lead quality in your CRM.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 data-text-reveal className="text-4xl font-black mb-6">Ready to Dominate Google Search Results?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get an in-depth audit of your current organic visibility, competitor backlink profiles, and an actionable roadmap for search dominance.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Claim Your SEO Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
