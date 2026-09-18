import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, TrendingUp, Link as LinkIcon, BarChart2, Globe, Target, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Top Results Digital Marketing Agency & SEO Services | WTechVerce",
  description:
    "WTechVerce is a top results digital marketing agency delivering corporate performance marketing solutions, advanced data driven SEO campaigns, search engine marketing traffic growth, and professional off page link building services.",
  keywords: [
    "top results digital marketing agency",
    "corporate performance marketing solutions",
    "advanced data driven seo campaigns",
    "search engine marketing traffic growth",
    "professional off page link building services",
    "digital marketing agency",
    "seo services company",
    "organic search marketing",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services/seo",
  },
  openGraph: {
    title: "Top Results Digital Marketing Agency & SEO Services | WTechVerce",
    description:
      "Scale organic revenue with a top results digital marketing agency offering corporate performance marketing solutions and advanced data driven SEO campaigns.",
    url: "https://wtechverce.com/services/seo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Results Digital Marketing Agency & SEO Services | WTechVerce",
    description:
      "Top results digital marketing agency delivering advanced data driven SEO campaigns and search engine marketing traffic growth.",
  },
};

export default function SeoService() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Top Results Digital Marketing Agency & SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "WTechVerce",
            "url": "https://wtechverce.com"
          },
          "description": "Top results digital marketing agency offering corporate performance marketing solutions, advanced data driven SEO campaigns, search engine marketing traffic growth, and professional off page link building services.",
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
            Top Results Digital Marketing Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Advanced Data-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a4bfa] to-[#c4b5fd]">
              SEO Campaigns &amp; Marketing
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Stop wasting capital on vanity traffic. As a top results digital marketing agency, we execute corporate performance marketing solutions, advanced data driven SEO campaigns, and professional off page link building services that consistently drive search engine marketing traffic growth and revenue.
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

        {/* INTRODUCTION / CORE METHODOLOGY */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Organic Growth Engine</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Corporate Performance Marketing Solutions &amp; Sustainable Reach</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern search engines reward authority, topical depth, and technical excellence. Our corporate performance marketing solutions combine strict data science with creative storytelling to capture high-intent buyers throughout the decision funnel.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through advanced data driven SEO campaigns and strategic search engine marketing traffic growth initiatives, we elevate your organic visibility in US, UK, and global tech ecosystems. We support every on-page improvement with our professional off page link building services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Target className="w-6 h-6 text-[#a78bfa]" />, title: "Performance Marketing", desc: "Corporate performance marketing solutions with clear ROI." },
              { icon: <Search className="w-6 h-6 text-[#a78bfa]" />, title: "Advanced SEO Campaigns", desc: "Advanced data driven SEO campaigns designed for commercial intent." },
              { icon: <TrendingUp className="w-6 h-6 text-[#a78bfa]" />, title: "SEM Traffic Growth", desc: "Search engine marketing traffic growth that scales over time." },
              { icon: <LinkIcon className="w-6 h-6 text-[#a78bfa]" />, title: "Off-Page Link Building", desc: "Professional off page link building services and high-DR outreach." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0F1A] border border-white/5 p-6 rounded-2xl">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* THREE CORE PILLARS */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Complete Optimization Stack</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Search Engine Marketing Traffic Growth Architecture</h2>
            <p className="text-gray-400 text-base">
              Sustainable rankings require a balanced synergy between code, content, and external authority.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Advanced SEO Campaigns</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Advanced data driven SEO campaigns driven by search intent mapping, schema graph injection, and Core Web Vitals speed optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Full technical site crawl and audit</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Schema.org structured data graph</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Indexation and canonicalization fixes</li>
              </ul>
            </div>
            <div className="p-8 border border-[#4C1D95]/40 rounded-3xl bg-[#4C1D95]/10 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#8a4bfa] text-white text-xs font-black uppercase rounded-full tracking-wider">High Impact</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Performance Marketing</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Corporate performance marketing solutions designed to capture active high-ticket buyers and convert organic visitors into sales meetings.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Full-funnel conversion rate optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Landing page messaging refinement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Real-time GA4 and Search Console dashboards</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-white">Link Building Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional off page link building services that establish unbreakable topical authority across competitive commercial keywords.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> High-DR editorial contextual backlinks</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Digital PR &amp; thought leadership outreach</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#a78bfa]" /> Zero PBNs, 100% white-hat verification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-r from-[#4C1D95]/15 to-transparent border border-[#4C1D95]/30 rounded-[2.5rem] p-10 md:p-16 mb-32">
          <div className="max-w-3xl">
            <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3 block">Demonstrated Performance</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Why Partner With Our Top Results Digital Marketing Agency?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We align SEO and performance marketing directly with closed-won enterprise revenue rather than meaningless vanity impressions.
            </p>
            <ul className="space-y-4">
              {[
                "Recognized as a top results digital marketing agency specializing in high-growth tech firms and startups.",
                "Corporate performance marketing solutions engineered around strict customer acquisition cost (CAC) goals.",
                "Advanced data driven SEO campaigns built to rank for high-profit transactional keywords.",
                "Sustainable search engine marketing traffic growth that protects your pipeline from algorithmic fluctuations.",
                "100% white-hat professional off page link building services securing high-authority media mentions.",
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
          <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold mb-2">How fast do advanced data driven SEO campaigns show measurable results?</h4>
              <p className="text-gray-400 leading-relaxed">
                Most clients notice technical crawlability fixes and impression improvements within the first 30 to 45 days. Substantial first-page ranking jumps and search engine marketing traffic growth generally compound within 90 to 180 days.
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
          <h2 className="text-4xl font-black mb-6">Ready to Dominate Search Rankings?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get an in-depth audit of your current organic visibility, competitor backlink profiles, and a bespoke roadmap for search dominance.
          </p>
          <Button href="/contact" variant="primary" size="lg" filled>
            Claim Your SEO Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
