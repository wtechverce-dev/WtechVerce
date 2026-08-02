"use client";
// Premium Awwwards-inspired redesign — v2.0

import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import NoiseTexture from "@/components/ui/NoiseTexture";
import {
  ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, Search, Target,
  Megaphone, PenTool, Mail, LineChart, LayoutTemplate, Code,
  Globe, Cloud, Briefcase, Stethoscope, Hammer, Building2, Store,
  CheckCircle, Sparkles, TrendingUp, Zap,
} from "lucide-react";

const HeroGlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
  loading: () => null,
});

// ─── ANIMATED COUNTER ──────────────────────────────────────
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ─── STATS ──────────────────────────────────────────────────
const stats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 2, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 97, suffix: "%", label: "Client Retention" },
  { value: 4, suffix: ".9★", label: "Average Rating" },
];

// ─── SERVICES ───────────────────────────────────────────────
const services = [
  { num: "01", icon: <Search className="w-5 h-5" />, title: "SEO", desc: "Technical fixes, content strategy, and link building aimed at ranking for the searches your actual customers type in — not just vanity keywords.", link: "/seo-services" },
  { num: "02", icon: <Target className="w-5 h-5" />, title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, and other paid channels, built around a target cost-per-acquisition instead of a budget you spend and hope works.", link: "/ppc-management" },
  { num: "03", icon: <Megaphone className="w-5 h-5" />, title: "Social Media Marketing", desc: "Content and community management that builds brand recognition and feeds your funnel — not just likes.", link: "/social-media" },
  { num: "04", icon: <PenTool className="w-5 h-5" />, title: "Content Marketing", desc: "Blog posts, guides, and resources that answer real buyer questions and support your SEO strategy at the same time.", link: "/content-marketing" },
  { num: "05", icon: <LayoutTemplate className="w-5 h-5" />, title: "Web Design & CRO", desc: "Traffic means nothing if your site doesn't convert it. We test and refine pages to turn more visitors into leads.", link: "/web-design" },
  { num: "06", icon: <Code className="w-5 h-5" />, title: "Web Development", desc: "We build fast, secure, mobile-friendly websites so your site never bottlenecks sales.", link: "/web-development" },
  { num: "07", icon: <Mail className="w-5 h-5" />, title: "Email Marketing", desc: "Automated sequences and campaigns that turn one-time buyers and leads into repeat customers.", link: "/email-marketing" },
];

// ─── INDUSTRIES ─────────────────────────────────────────────
const industries = [
  { icon: <Store className="w-6 h-6" />, title: "Small & Local Businesses", desc: "Local SEO, Google Business Profile, and reviews — the three things that move foot traffic and phone calls.", link: "/local-seo" },
  { icon: <Cloud className="w-6 h-6" />, title: "SaaS & Startups", desc: "Demand-gen funnels around free trials, demos, and content that ranks for the exact questions your buyers Google.", link: "/saas-marketing" },
  { icon: <Globe className="w-6 h-6" />, title: "eCommerce Brands", desc: "Paid media and SEO side by side, with conversion tracking that shows real return on ad spend.", link: "/ecommerce-marketing" },
  { icon: <Briefcase className="w-6 h-6" />, title: "Law Firms", desc: "Local SEO with tightly targeted PPC so you're not burning budget on clicks that never become consultations.", link: "/law-firm-marketing" },
  { icon: <Hammer className="w-6 h-6" />, title: "Home Services", desc: "Service-area targeting and call tracking so you know which channel generated the job.", link: "/home-services-marketing" },
  { icon: <Stethoscope className="w-6 h-6" />, title: "Medical & Dental", desc: "HIPAA-conscious content, local search visibility, and a website that builds trust fast.", link: "/healthcare-marketing" },
  { icon: <Building2 className="w-6 h-6" />, title: "Enterprise", desc: "We slot into existing marketing teams as an extension, coordinating campaigns without losing consistency.", link: "/enterprise-marketing" },
];

// ─── PROCESS ────────────────────────────────────────────────
const process = [
  { num: "01", title: "Audit & Discovery", desc: "We audit your current site, rankings, ad accounts, and competitors. No recommendations before we understand your baseline." },
  { num: "02", title: "Strategy & Roadmap", desc: "You get a written plan: which channels, why those channels, and what results to expect in 30, 60, and 90 days." },
  { num: "03", title: "Execution", desc: "Our specialists build and launch — content, campaigns, technical fixes, creative — according to the roadmap." },
  { num: "04", title: "Reporting & Optimization", desc: "Monthly reporting tied to your actual business goals, with adjustments based on real performance, not guesswork." },
];

// ─── FAQ ────────────────────────────────────────────────────
const faqs = [
  { q: "What does a digital marketing agency do?", a: "A digital marketing agency plans, builds, and manages your online marketing — SEO, paid ads, content, social media, and web optimization — so you get more qualified leads and customers without building an in-house team." },
  { q: "How much does a digital marketing agency cost?", a: "Costs vary by industry, competition, and how many channels you need. Most businesses invest in a monthly retainer scoped to specific deliverables, with pricing set after an audit rather than a flat, generic rate." },
  { q: "How is a digital marketing agency different from a freelancer?", a: "An agency gives you a full team — strategist, SEO specialist, ad manager, content writer — instead of one person covering everything. That matters once your marketing needs more than one channel running well at the same time." },
  { q: "How long does it take to see results?", a: "Paid advertising can show early signals within weeks. SEO and organic growth typically take 3–6 months to build meaningful momentum, since it depends on competition and your starting point." },
  { q: "Do I need a digital marketing agency if I already have an in-house marketing person?", a: "Often, yes — as a specialist extension, not a replacement. Most in-house marketers are generalists. An agency adds channel-specific expertise without the cost of five new hires." },
  { q: "What industries does WTechVerce work with?", a: "Small and local businesses, SaaS companies, startups, eCommerce brands, law firms, home service businesses, medical and dental clinics, and enterprise teams." },
  { q: "Is there a contract, and can I cancel anytime?", a: "We work month-to-month. You stay because results justify it, not because a contract requires it." },
];

// ─── FAQ ITEM ────────────────────────────────────────────────
function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left group gap-4"
      >
        <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 ${open ? "text-[#FD4F00]" : "text-white group-hover:text-gray-200"}`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "border-[#FD4F00] text-[#FD4F00] bg-[#FD4F00]/10" : "border-white/20 text-gray-400 group-hover:border-white/40"}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-base leading-relaxed pb-6 max-w-3xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070C12] text-white overflow-x-hidden">
      <NoiseTexture />
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden">
        {/* Background Globe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-60">
            <HeroGlobeScene />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070C12] via-[#070C12]/80 to-transparent" />
        </div>

        {/* Glow blobs */}
        <div className="absolute top-20 left-[-100px] w-[500px] h-[500px] bg-[#FD4F00]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#6C24FA]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#FD4F00] animate-pulse" />
            <span className="text-sm font-medium text-[#FD4F00] tracking-widest uppercase">Digital Marketing Agency</span>
          </motion.div>

          {/* Giant H1 */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.95] tracking-tighter text-white"
            >
              Digital Marketing
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c55]"
            >
              Agency
            </motion.div>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.95] tracking-tighter text-white/20"
            >
              for Small Business.
            </motion.div>
          </div>

          {/* Sub text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 max-w-2xl"
          >
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              One plan. One goal: more of the right customers finding you and buying from you.
            </p>
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-3 bg-[#FD4F00] hover:bg-[#e04400] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:gap-4 hover:shadow-[0_0_40px_rgba(253,79,0,0.4)] text-base"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom ticker strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 mt-20 border-t border-white/8 py-5 bg-white/[0.01] backdrop-blur-sm"
        >
          <MarqueeTicker
            items={["SEO", "PPC ADVERTISING", "CONTENT MARKETING", "WEB DESIGN", "EMAIL MARKETING", "CRO", "SOCIAL MEDIA", "PAID ADS", "LOCAL SEO"]}
            speed={35}
            className="text-gray-500"
            itemClassName="text-gray-400"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section className="py-20 border-y border-white/8 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center md:text-left md:border-l border-white/10 md:pl-8 first:border-0 first:pl-0"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2 font-[family-name:var(--font-syne)]">
                  <Counter to={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ""} />
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT IS A DIGITAL MARKETING AGENCY
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] leading-none pointer-events-none select-none font-[family-name:var(--font-syne)]">01</div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-6 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-0">
              What Is a Digital Marketing Agency?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              A digital marketing agency plans, builds, and runs your online marketing so you don't have to hire, train, and manage that team in-house.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Most agencies fall into one of two traps: they specialize in a single channel — only SEO, or only ads — or they do everything but shallow. You get a junior account manager juggling twelve clients and a generic playbook copy-pasted across all of them.
            </p>
            <div className="pt-4 p-6 rounded-2xl bg-gradient-to-r from-[#FD4F00]/10 to-transparent border border-[#FD4F00]/20">
              <p className="text-white font-semibold leading-relaxed">
                A good digital marketing agency looks at your whole customer journey and fixes the parts that are actually costing you money. <span className="text-[#FD4F00]">That's the model WTechVerce runs on.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE WORK WITH
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] leading-none pointer-events-none select-none font-[family-name:var(--font-syne)]">02</div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[#6C24FA] text-sm uppercase tracking-widest font-bold mb-4 block">Industries</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-lg">Who We Work With</h2>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">The fundamentals of good marketing don't change — but the playbook inside each industry does.</p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#FD4F00]/50 hover:bg-[#FD4F00]/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FD4F00] mb-4 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{ind.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y border-white/8 py-4 bg-white/[0.01]">
        <MarqueeTicker
          items={["TRANSPARENT REPORTING", "NO LOCK-IN CONTRACTS", "DEDICATED STRATEGIST", "MONTH TO MONTH", "REAL REVENUE RESULTS"]}
          speed={50}
          direction="right"
          itemClassName="text-white/30"
        />
      </div>

      {/* ══════════════════════════════════════════
          SERVICES — Locomotive Style Alternating Rows
      ══════════════════════════════════════════ */}
      <section id="services" className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 text-[25vw] font-black text-white/[0.02] leading-none pointer-events-none select-none font-[family-name:var(--font-syne)]">03</div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-xl">Full-Service Digital Marketing — What's Actually Included</h2>
          </div>

          <div className="divide-y divide-white/8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-center hover:bg-white/[0.02] transition-colors duration-300 rounded-2xl px-4 md:px-6 -mx-4 md:-mx-6 cursor-pointer"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-[#FD4F00]/30 transition-colors font-[family-name:var(--font-syne)]">{svc.num}</span>
                </div>
                {/* Icon + Title */}
                <div className="col-span-8 md:col-span-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FD4F00]/10 border border-[#FD4F00]/20 flex items-center justify-center text-[#FD4F00] flex-shrink-0 group-hover:bg-[#FD4F00]/20 transition-colors">
                    {svc.icon}
                  </div>
                  <Link href={svc.link} className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FD4F00] transition-colors">{svc.title}</Link>
                </div>
                {/* Description */}
                <div className="col-span-12 md:col-span-6 md:pl-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex col-span-1 justify-end">
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#FD4F00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section id="process" className="py-28 border-t border-white/8 bg-white/[0.01] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <span className="text-[#6C24FA] text-sm uppercase tracking-widest font-bold mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden group hover:border-[#6C24FA]/40 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.04] leading-none font-[family-name:var(--font-syne)] pointer-events-none">{step.num}</div>
                <div className="w-10 h-10 rounded-full border border-[#6C24FA]/40 bg-[#6C24FA]/10 flex items-center justify-center text-[#6C24FA] font-bold text-sm mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEMS WE SOLVE + WHY US
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
          {/* Problems */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-6 block">Common Pain Points</span>
            <h2 className="text-4xl font-black mb-10 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c55]">Problems</span> We Solve
            </h2>
            <div className="space-y-6">
              {[
                { prob: `"We're getting traffic but no leads."`, sol: "Usually a targeting or conversion problem, not a traffic problem. We diagnose which." },
                { prob: `"Our last agency just sent reports we didn't understand."`, sol: "We report in plain language tied to revenue, not just impressions and clicks." },
                { prob: `"We don't have time to manage five different vendors."`, sol: "One team, one point of contact, one strategy across every channel." },
                { prob: `"We tried marketing before and it didn't work."`, sol: "Usually because channels were run in isolation. We coordinate them." },
                { prob: `"We don't know if our budget is being spent well."`, sol: "Full transparency into spend, performance, and what changes next." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-[#FD4F00] font-bold text-sm w-6 shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1 italic text-base">{item.prob}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.sol}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Us */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="text-[#6C24FA] text-sm uppercase tracking-widest font-bold mb-6 block">Why WTechVerce</span>
            <h2 className="text-4xl font-black mb-10 leading-tight">
              Why Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C24FA] to-[#a855f7]">Choose WTechVerce</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Transparent Reporting", desc: "You see exactly what we're doing and why, in reports built for business owners — not marketers.", icon: <LineChart className="w-5 h-5" /> },
                { title: "No Long-Term Lock-In Contracts", desc: "We earn your business every month through results, not through a contract that traps you.", icon: <CheckCircle className="w-5 h-5" /> },
                { title: "Dedicated Strategist, Not a Ticket Queue", desc: "You get a real point of contact who knows your business, not a rotating support inbox.", icon: <Sparkles className="w-5 h-5" /> },
                { title: "Full-Funnel Strategy", desc: "We coordinate every channel — SEO, ads, content, email — into one plan aimed at one goal.", icon: <TrendingUp className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6C24FA]/10 border border-[#6C24FA]/30 flex items-center justify-center text-[#6C24FA] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 bg-white/[0.01] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-black">WTechVerce vs. Typical Agencies</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[540px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-5 text-gray-500 font-medium text-sm">Feature</th>
                    <th className="p-5 text-gray-400 font-medium text-sm">Typical Agency</th>
                    <th className="p-5 text-[#FD4F00] font-bold text-sm bg-[#FD4F00]/5">WTechVerce ✦</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { label: "Contract terms", bad: "12-month lock-in", good: "Month-to-month" },
                    { label: "Reporting", bad: "Raw data dumps", good: "Plain-language, revenue-tied" },
                    { label: "Strategy", bad: "One-size-fits-all", good: "Built around your audit" },
                    { label: "Point of contact", bad: "Rotating managers", good: "Dedicated strategist" },
                    { label: "Channels", bad: "Siloed execution", good: "Coordinated: SEO, PPC, content" },
                    { label: "Pricing", bad: "Hidden or bundled", good: "Clear, itemized" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 text-gray-300 font-medium">{row.label}</td>
                      <td className="p-5 text-gray-500">{row.bad}</td>
                      <td className="p-5 text-white font-semibold bg-[#FD4F00]/5">{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING INFO
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">What Does a Digital Marketing Agency Actually Cost?</h2>
            <p className="text-gray-400 leading-relaxed mb-8">Pricing depends on your industry, competition level, and how many channels you need running at once. We give you an exact quote after the audit — not a generic package price.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#FD4F00] font-bold hover:gap-4 transition-all">
              Get a free audit quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Monthly Retainer", desc: "Most common. Scoped around specific deliverables — SEO, ads, content volume." },
              { title: "% of Ad Spend", desc: "Common for PPC-heavy accounts, usually 10–20% of managed ad spend." },
              { title: "Project-Based", desc: "For one-time work like a website rebuild or a single campaign launch." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#6C24FA]/40 transition-colors"
              >
                <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-[#6C24FA] text-sm uppercase tracking-widest font-bold mb-4 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-400 mb-8">Everything you need to know before working with us.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-[#FD4F00]/50 hover:text-[#FD4F00] transition-all">
                Still have questions? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD4F00]/8 via-transparent to-[#6C24FA]/8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FD4F00]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[#FD4F00] text-sm uppercase tracking-widest font-bold mb-6 block">Get Started</span>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-white mb-8">
              Ready to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c55]">grow?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-lg mx-auto mb-12 leading-relaxed">
              See exactly where your current marketing is losing leads — before you spend a dollar with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-[#FD4F00] hover:bg-[#e04400] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(253,79,0,0.5)] text-base hover:gap-4">
                Get My Free Audit <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-3 border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:bg-white/5 text-base">
                See Our Work <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <div className="mt-24 border-t border-white/8 pt-6">
          <MarqueeTicker
            items={["DIGITAL MARKETING AGENCY", "FOR SMALL BUSINESS", "TRANSPARENT REPORTING", "NO LOCK-IN CONTRACTS", "REAL REVENUE RESULTS", "WTECHVERCE"]}
            speed={45}
            itemClassName="text-white/20"
          />
        </div>
      </section>
    </main>
  );
}
