import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";
import NoiseTexture from "@/components/ui/NoiseTexture";

export const metadata: Metadata = {
  title: "Insights & Guides | WTechVerce Blog",
  description: "Expert insights on web development, SEO, e-commerce, and digital strategy from the engineers at WTechVerce.",
  alternates: {
    canonical: "https://wtechverce.com/blog",
  },
};

const posts = [
  {
    title: "Website Development Cost in Pakistan (2026 Guide)",
    slug: "website-development-cost-pakistan-2026",
    excerpt: "A complete, transparent breakdown of how much it costs to build a custom website, e-commerce store, or SaaS platform in Pakistan in 2026.",
    date: "Aug 07, 2026",
    category: "Guides"
  },
  {
    title: "WordPress vs Custom Website: Which is Better for SEO?",
    slug: "wordpress-vs-custom-website",
    excerpt: "Stuck between choosing WordPress or a custom React/Next.js build? We break down the pros, cons, and SEO impact of both architectures.",
    date: "Aug 02, 2026",
    category: "Technical SEO"
  }
];

export default function BlogHub() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden pt-32 pb-24">
      <NoiseTexture />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 mb-6">
            <BookOpen className="w-4 h-4 text-[#FD4F00]" />
            <span className="text-sm font-bold text-[#FD4F00] uppercase tracking-widest">WTechVerce Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
            Engineering & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">
              Growth Insights
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Actionable strategies, technical teardowns, and transparent pricing guides from our senior engineering and marketing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-[#0A0F1A] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all h-full flex flex-col group cursor-pointer">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-[#FD4F00] uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-black mb-4 group-hover:text-[#FD4F00] transition-colors">{post.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-white mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
