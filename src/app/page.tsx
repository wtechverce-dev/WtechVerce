"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";
import HeroBackground from "@/components/ui/HeroBackground";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import NoiseTexture from "@/components/ui/NoiseTexture";
import ScrambleText from "@/components/ui/ScrambleText";
import Button from "@/components/ui/Button";
import {
  ArrowRight, ArrowUpRight, ChevronDown, ChevronUp,
  Search, Target, Megaphone, PenTool, Mail,
  LayoutTemplate, Code, Globe, Cloud, Briefcase,
  Stethoscope, Hammer, Building2, Store,
  CheckCircle, Star,
} from "lucide-react";

// ─── COUNTER ────────────────────────────────────────────────
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 120);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ─── FADE IN SECTION ────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FAQ ITEM ────────────────────────────────────────────────
const faqs = [
  { q: "What does a digital marketing agency do?", a: "A digital marketing agency plans, builds, and manages your online marketing — SEO, paid ads, content, social media, and web optimization — so you get more qualified leads and customers without building an in-house team." },
  { q: "How much does digital marketing cost?", a: "Costs vary by industry, competition, and how many channels you need. Most businesses invest in a monthly retainer scoped to specific deliverables, with pricing set after an audit rather than a flat, generic rate." },
  { q: "How long does it take to see results?", a: "Paid advertising can show early signals within weeks. SEO and organic growth typically take 3–6 months to build meaningful momentum." },
  { q: "Do you offer month-to-month contracts?", a: "Yes. We work month-to-month. You stay because results justify it, not because a contract requires it." },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-white/8"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-7 text-left group gap-4">
        <span className={`font-bold text-lg transition-colors duration-200 ${open ? "text-[#FD4F00]" : "text-white"}`}>{faq.q}</span>
        <span className={`w-9 h-9 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${open ? "border-[#FD4F00] text-[#FD4F00] bg-[#FD4F00]/10" : "border-white/20 text-white/40"}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-gray-400 pb-7 leading-relaxed pr-12">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden">
      <NoiseTexture />
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO — Kept intact per user request
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-32 pb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 backdrop-blur-sm mb-10 hover:bg-[#FD4F00]/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FD4F00] animate-pulse" />
            <span className="text-[#FD4F00] text-sm font-semibold tracking-widest uppercase">
              <ScrambleText text="Digital Marketing & Development Agency" delay={0.5} duration={1.5} />
            </span>
          </motion.div>

          <div className="mb-8 w-full flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.2rem,7vw,7.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white"
              >
                We Build & Grow
              </motion.h1>
            </div>
            <div className="overflow-hidden py-2">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.2rem,7vw,7.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#ff6a2a] to-[#FD4F00] bg-[length:200%] animate-gradient"
              >
                Industry Leaders
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col items-center gap-8 max-w-2xl text-center"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              From high-performance SaaS platforms to revenue-driving marketing campaigns. One partner for your entire digital ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-4">
              <Button href="/contact" variant="primary" size="lg" filled>
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Service tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mt-16 max-w-3xl"
          >
            {["SEO", "Web Development", "Paid Ads", "SaaS Management", "CRO", "Content", "UI/UX Design"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium backdrop-blur-sm hover:border-[#FD4F00]/50 hover:text-[#FD4F00] hover:bg-[#FD4F00]/10 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-0 w-full z-10 border-t border-white/8 py-4 bg-white/[0.02] backdrop-blur-sm"
        >
          <MarqueeTicker
            items={["SOCIAL MEDIA", "PAID ADS", "CRO", "WEB DEVELOPMENT", "SAAS PRODUCT MANAGEMENT", "SEO", "CONTENT MARKETING"]}
            speed={30}
            itemClassName="text-white/40"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS TICKER
      ══════════════════════════════════════════ */}
      <div className="border-y border-white/8 py-7 bg-[#040810] relative overflow-hidden">
        <MarqueeTicker
          items={["REACT.JS", "NEXT.JS", "NODE.JS", "TYPESCRIPT", "AWS", "TAILWIND CSS", "GOOGLE ADS", "META ADS", "AHREFS", "SEMRUSH", "SHOPIFY", "WORDPRESS"]}
          speed={50}
          itemClassName="text-white/20 font-bold tracking-widest"
        />
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1: ABOUT — Image Collage + Content
          (Addiztech: "Empowering business growth…")
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#02050A] relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#FD4F00]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: image collage */}
          <FadeIn delay={0}>
            <div className="relative h-[520px] w-full">
              {/* Top-left image */}
              <div className="absolute top-0 left-0 w-[58%] h-[52%] rounded-[1.75rem] overflow-hidden border border-white/8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                  alt="WTechVerce team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom-right image */}
              <div className="absolute bottom-0 right-0 w-[62%] h-[57%] rounded-[1.75rem] overflow-hidden border border-white/8 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
                  alt="WTechVerce meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Center spinning badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#c03800] flex items-center justify-center shadow-[0_0_60px_rgba(253,79,0,0.5)]">
                <span className="text-white font-black text-[10px] tracking-[0.2em] text-center uppercase leading-snug">WTECH<br/>VERCE</span>
              </div>
              {/* Small floating stat card */}
              <div className="absolute -left-6 bottom-16 bg-[#0A0F1A] border border-white/10 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float z-20">
                <div className="w-10 h-10 rounded-full bg-[#6C24FA]/20 flex items-center justify-center text-[#6C24FA] text-lg font-black">97</div>
                <div className="text-sm">
                  <div className="text-white font-bold">% Retention</div>
                  <div className="text-gray-500 text-xs">Client Rate</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: content */}
          <FadeIn delay={0.15}>
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/25 bg-[#FD4F00]/8 text-[#FD4F00] text-xs font-bold uppercase tracking-widest">
                About WTechVerce
              </span>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] text-white tracking-[-0.03em]">
                Empowering business growth with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">Creative Solutions</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A digital marketing agency plans, builds, and runs your online marketing so you don't have to hire, train, and manage an in-house team. Most agencies fall into two traps: single-channel specialists or shallow generalists. We fix the parts that actually cost you money.
              </p>
              <div className="flex gap-8 py-6 border-y border-white/6">
                {[
                  { val: "150+", label: "Clients Served" },
                  { val: "$2M+", label: "Revenue Generated" },
                  { val: "4.9★", label: "Average Rating" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-white">{s.val}</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#FD4F00] hover:text-white transition-all duration-300 group">
                Work With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: BENTO GRID — Services
          (Addiztech: "Clean / Services" bento)
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/25 bg-[#6C24FA]/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-6">
                Our Expertise
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-[-0.03em]">What we do best</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large card — SEO */}
            <FadeIn delay={0.05} className="md:col-span-8">
              <div className="p-10 rounded-[2.5rem] bg-[#070D18] border border-white/5 relative overflow-hidden group h-full min-h-[340px]">
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="SEO" className="w-full h-full object-cover" style={{ maskImage: "linear-gradient(to left, black, transparent)" }} />
                </div>
                <div className="relative z-10 max-w-sm">
                  <div className="w-14 h-14 rounded-2xl bg-[#FD4F00] flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(253,79,0,0.4)]">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">SEO & Organic Growth</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Rank for the searches your customers actually type — not vanity keywords. High-ROI organic strategies that compound over time.</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#FD4F00] transition-colors group/link">
                    Explore <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Accent card — Web Dev */}
            <FadeIn delay={0.1} className="md:col-span-4">
              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#6C24FA] to-[#3d0fa0] relative overflow-hidden flex flex-col justify-between h-full min-h-[340px] group">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mb-auto">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-3">Web Development</h3>
                  <p className="text-white/75 leading-relaxed text-sm">Fast, secure, mobile-first websites that never bottleneck your sales.</p>
                </div>
                <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-white/10 blur-[50px] rounded-full pointer-events-none" />
              </div>
            </FadeIn>

            {/* Image card — Paid Ads */}
            <FadeIn delay={0.15} className="md:col-span-4">
              <div className="rounded-[2.5rem] bg-[#070D18] border border-white/5 relative overflow-hidden h-[360px] group">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Paid Ads" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-black text-white mb-2">Paid Advertising</h3>
                  <p className="text-gray-400 text-sm">Google Ads & Meta Ads built around your target CPA.</p>
                </div>
              </div>
            </FadeIn>

            {/* Wide card — Content */}
            <FadeIn delay={0.2} className="md:col-span-8">
              <div className="p-10 rounded-[2.5rem] bg-[#070D18] border border-white/5 flex items-center gap-8 h-[360px] group hover:border-[#FD4F00]/20 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#FD4F00]/10 flex items-center justify-center text-[#FD4F00] shrink-0">
                  <Megaphone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">Content & Social Media</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">Content that builds brand recognition and feeds your funnel. Blog posts and guides that answer real buyer questions.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: WHY CHOOSE US
          (Addiztech: image left + checklist right + glass card)
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[800px] h-[600px] bg-[#6C24FA]/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* LEFT: Image */}
          <FadeIn delay={0}>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/8">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80"
                  alt="Why WTechVerce"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -right-8 top-16 bg-[#0A0F1A] border border-white/10 px-6 py-5 rounded-2xl shadow-2xl animate-float">
                <div className="text-3xl font-black text-white">150+</div>
                <div className="text-gray-400 text-sm">Clients Served</div>
              </div>
              <div className="absolute -left-8 bottom-16 bg-[#0A0F1A] border border-[#FD4F00]/20 px-6 py-5 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-3xl font-black text-[#FD4F00]">97%</div>
                <div className="text-gray-400 text-sm">Retention Rate</div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Content */}
          <FadeIn delay={0.15}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-7">
                Why Choose Us
              </span>
              <h2 className="text-5xl font-black text-white leading-tight tracking-[-0.03em] mb-10">
                We fix the parts that are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">costing you money</span>
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  { title: "Transparent Reporting", desc: "Tied to revenue, not vanity metrics. Always in plain language." },
                  { title: "No Lock-In Contracts", desc: "Month-to-month. You stay because of results, not paperwork." },
                  { title: "Dedicated Strategist", desc: "A real point of contact who knows your business inside-out." },
                  { title: "Full-Funnel Approach", desc: "We manage SEO, Ads, Content, and Dev in sync — not in silos." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#6C24FA]/20 flex items-center justify-center text-[#6C24FA] shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wide Glassmorphism quote card */}
              <div className="p-8 rounded-3xl bg-[#0A0F1A]/80 backdrop-blur-xl border border-[#FD4F00]/25 shadow-[0_0_50px_rgba(253,79,0,0.08)]">
                <p className="text-white text-base leading-relaxed italic mb-3">
                  "Our last agency just sent reports we didn't understand."
                </p>
                <span className="text-[#FD4F00] font-bold text-sm not-italic">— We report in plain language, tied to ROI.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4: MARQUEE OUTLINE + PORTFOLIO CAROUSEL
          (Addiztech: "SKILL & WORKING AREA" giant marquee)
      ══════════════════════════════════════════ */}
      <section className="bg-[#040810] overflow-hidden pt-20">
        {/* Giant outline marquee */}
        <div className="mb-16 overflow-hidden">
          <div className="flex gap-0 w-max" style={{ animation: "marquee-ticker 30s linear infinite" }}>
            {["SKILL & WORKING AREA", "SKILL & WORKING AREA", "SKILL & WORKING AREA", "SKILL & WORKING AREA", "SKILL & WORKING AREA", "SKILL & WORKING AREA"].map((t, i) => (
              <span key={i} className="flex items-center whitespace-nowrap pr-16">
                <span
                  className="text-[clamp(4rem,10vw,9rem)] font-black leading-none uppercase tracking-tight text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", display: "inline-block" }}
                >
                  {t}
                </span>
                <span className="ml-8 text-[clamp(4rem,10vw,9rem)] font-black leading-none text-[#FD4F00] opacity-20">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
          <FadeIn>
            <h2 className="text-5xl font-black text-white">Portfolio</h2>
          </FadeIn>
          <Link href="/portfolio" className="text-[#FD4F00] font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="flex gap-6 px-6 md:px-12 pb-20 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80", title: "SaaS Dashboard Redesign", cat: "Web Design & Development", color: "#6C24FA" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80", title: "B2B Lead Generation", cat: "SEO & Paid Ads", color: "#FD4F00" },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80", title: "eCommerce Scaling", cat: "Full Funnel Marketing", color: "#6C24FA" },
            { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=700&q=80", title: "Law Firm Local Dominance", cat: "Local SEO", color: "#FD4F00" },
          ].map((item, i) => (
            <div key={i} className="min-w-[340px] md:min-w-[460px] snap-center group cursor-pointer shrink-0">
              <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-[#0A0F1A] aspect-[4/3] relative mb-5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-70" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: item.color + "22", color: item.color, border: `1px solid ${item.color}44` }}>
                  {item.cat}
                </div>
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#FD4F00] transition-colors">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5: OUR PROCESS
          (Addiztech: "OUR" outline bg + "PROCESS" color + 4 cards)
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative overflow-hidden">
        {/* Heading */}
        <div className="relative text-center mb-24">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase select-none pointer-events-none whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
          >
            OUR
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-6">
              How We Work
            </span>
            <h2 className="text-[clamp(4rem,11vw,10rem)] font-black text-[#FD4F00] leading-none tracking-tight">PROCESS</h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { num: "01", title: "Audit & Discovery", desc: "We audit your site, rankings, ads, and competitors to find real gaps.", icon: <Search className="w-6 h-6" /> },
            { num: "02", title: "Strategy Roadmap", desc: "You receive a written plan: which channels, why them, and what to expect.", icon: <Target className="w-6 h-6" /> },
            { num: "03", title: "Execution", desc: "Our specialists build, launch, and manage every deliverable.", icon: <Megaphone className="w-6 h-6" /> },
            { num: "04", title: "Report & Optimize", desc: "Monthly reports tied to real revenue metrics, not vanity numbers.", icon: <Star className="w-6 h-6" /> },
          ].map((step, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group p-8 rounded-[2rem] bg-[#070D18] border border-white/5 hover:border-[#FD4F00]/40 hover:bg-[#0A0F1A] transition-all duration-500 h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#6C24FA] font-black text-2xl">{step.num}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#FD4F00]/10 flex items-center justify-center text-white/40 group-hover:text-[#FD4F00] transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6: CASE STUDIES — 2×2 GRID
          (Addiztech: "Projects" 2×2 grid with circle CTA)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#040810]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/25 bg-[#6C24FA]/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-5">
                Featured Work
              </span>
              <h2 className="text-5xl font-black text-white">Case Studies</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Leadstonk */}
            <FadeIn delay={0.05}>
              <div className="aspect-[4/3] rounded-[2.5rem] bg-[#f2f0eb] p-10 relative overflow-hidden group">
                <div className="absolute top-7 left-7 z-10">
                  <span className="px-3 py-1.5 bg-black text-white text-xs font-bold rounded-full uppercase tracking-widest">Leadstonk</span>
                </div>
                <div className="absolute top-7 right-7 z-10">
                  <span className="px-3 py-1.5 bg-black/10 text-black text-xs font-bold rounded-full uppercase tracking-widest">SEO + Web Dev</span>
                </div>
                <img
                  src="/projects/leadstonk.png"
                  alt="Leadstonk"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>

            {/* Dental */}
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] rounded-[2.5rem] bg-[#0A1220] border border-white/5 p-10 relative overflow-hidden group">
                <div className="absolute top-7 left-7 z-10">
                  <span className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest">Dental Clinic</span>
                </div>
                <div className="absolute top-7 right-7 z-10">
                  <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-widest">SEO + Marketing</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                  alt="Dental Clinic"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>

          {/* View More circle button */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/portfolio"
              className="w-28 h-28 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#c03800] text-white flex flex-col items-center justify-center font-black uppercase tracking-widest text-xs hover:scale-110 hover:shadow-[0_0_50px_rgba(253,79,0,0.5)] transition-all duration-300 text-center leading-snug"
            >
              View<br/>More
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7: TESTIMONIALS
          (Addiztech: "4.9" left + quote card right)
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-8">
                Client Reviews
              </span>
              <div className="text-[9rem] font-black text-white leading-none tracking-tight mb-6">4.9</div>
              <div className="flex gap-1.5 text-[#FD4F00] mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-current" />)}
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Based on 150+ Verified Reviews</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative p-10 rounded-[2.5rem] bg-[#070D18] border border-white/8">
              <div className="absolute -top-7 -left-7 w-14 h-14 bg-[#6C24FA] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(108,36,250,0.4)]">
                <span className="text-4xl font-serif leading-none" style={{ paddingTop: "12px" }}>"</span>
              </div>
              <p className="text-white text-xl leading-relaxed mb-8">
                WTechVerce rebuilt our SaaS platform and doubled our conversion rate in 3 months. The transparency in reporting and coordination between their ads and SEO team is unlike any agency we've ever used.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Sarah Jenkins</h4>
                  <span className="text-sm text-gray-500">Founder, TechFlow SaaS</span>
                </div>
                <div className="ml-auto flex gap-1 text-[#FD4F00]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8: FAQ
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/25 bg-[#FD4F00]/8 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
                Questions
              </span>
              <h2 className="text-5xl font-black text-white">Common Questions</h2>
            </div>
          </FadeIn>
          <div className="divide-y divide-white/5">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9: LET'S WORK TOGETHER
          (Addiztech: team photo + center circle CTA + big text)
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#02050A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Image banner */}
          <FadeIn>
            <div className="w-full h-[320px] rounded-[3rem] overflow-hidden relative mb-20">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
                alt="WTechVerce Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />

              {/* Center circular CTA button */}
              <Link
                href="/contact"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#c03800] text-white flex flex-col items-center justify-center font-black uppercase tracking-widest text-sm hover:scale-110 hover:shadow-[0_0_70px_rgba(253,79,0,0.7)] transition-all duration-300 z-20 text-center leading-snug"
              >
                Start Your<br/>Project
              </Link>
            </div>
          </FadeIn>

          {/* Big text */}
          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-black text-white leading-[0.95] tracking-[-0.04em] text-center">
              LET'S WORK<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)" }}>TOGETHER</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#FD4F00] text-white font-bold hover:bg-[#e04400] hover:shadow-[0_0_40px_rgba(253,79,0,0.4)] transition-all group">
                Get a Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 text-white font-bold hover:border-white/50 hover:bg-white/5 transition-all">
                View Our Work <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
