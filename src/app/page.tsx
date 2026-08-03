"use client";
// v3.0 — Ultra Premium Redesign

import { motion, useInView, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
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
  Search, Target, Megaphone, PenTool, Mail, LineChart,
  LayoutTemplate, Code, Globe, Cloud, Briefcase,
  Stethoscope, Hammer, Building2, Store,
  CheckCircle, Sparkles, TrendingUp, Zap, Star,
} from "lucide-react";

const HeroGlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false, loading: () => null,
});

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

// ─── DATA ────────────────────────────────────────────────────
const services = [
  { num: "01", icon: <Search className="w-5 h-5" />, title: "SEO", desc: "Rank for the searches your customers actually type — not vanity keywords.", link: "/seo-services", color: "#FD4F00" },
  { num: "02", icon: <Target className="w-5 h-5" />, title: "Paid Advertising", desc: "Google Ads & Meta Ads built around a target cost-per-acquisition.", link: "/ppc-management", color: "#6C24FA" },
  { num: "03", icon: <Megaphone className="w-5 h-5" />, title: "Social Media", desc: "Content that builds brand recognition and feeds your funnel.", link: "/social-media", color: "#FD4F00" },
  { num: "04", icon: <PenTool className="w-5 h-5" />, title: "Content Marketing", desc: "Blog posts and guides that answer real buyer questions.", link: "/content-marketing", color: "#6C24FA" },
  { num: "05", icon: <LayoutTemplate className="w-5 h-5" />, title: "Web Design & CRO", desc: "Turn more visitors into leads. We test and refine every page.", link: "/web-design", color: "#FD4F00" },
  { num: "06", icon: <Code className="w-5 h-5" />, title: "Web Development", desc: "Fast, secure, mobile-first websites that never bottleneck sales.", link: "/web-development", color: "#6C24FA" },
  { num: "07", icon: <Mail className="w-5 h-5" />, title: "Email Marketing", desc: "Automated campaigns that turn leads into repeat customers.", link: "/email-marketing", color: "#FD4F00" },
];

const industries = [
  { icon: <Store className="w-5 h-5" />, title: "Local Businesses", link: "/local-seo" },
  { icon: <Cloud className="w-5 h-5" />, title: "SaaS & Startups", link: "/saas-marketing" },
  { icon: <Globe className="w-5 h-5" />, title: "eCommerce", link: "/ecommerce-marketing" },
  { icon: <Briefcase className="w-5 h-5" />, title: "Law Firms", link: "/law-firm-marketing" },
  { icon: <Hammer className="w-5 h-5" />, title: "Home Services", link: "/home-services-marketing" },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Medical & Dental", link: "/healthcare-marketing" },
  { icon: <Building2 className="w-5 h-5" />, title: "Enterprise", link: "/enterprise-marketing" },
];

const faqs = [
  { q: "What does a digital marketing agency do?", a: "A digital marketing agency plans, builds, and manages your online marketing — SEO, paid ads, content, social media, and web optimization — so you get more qualified leads and customers without building an in-house team." },
  { q: "How much does a digital marketing agency cost?", a: "Costs vary by industry, competition, and how many channels you need. Most businesses invest in a monthly retainer scoped to specific deliverables, with pricing set after an audit rather than a flat, generic rate." },
  { q: "How is a digital marketing agency different from a freelancer?", a: "An agency gives you a full team — strategist, SEO specialist, ad manager, content writer — instead of one person covering everything. That matters once your marketing needs more than one channel running well at the same time." },
  { q: "How long does it take to see results?", a: "Paid advertising can show early signals within weeks. SEO and organic growth typically take 3–6 months to build meaningful momentum." },
  { q: "What industries does WTechVerce work with?", a: "Small and local businesses, SaaS companies, startups, eCommerce brands, law firms, home service businesses, medical and dental clinics, and enterprise teams." },
  { q: "Is there a contract, and can I cancel anytime?", a: "We work month-to-month. You stay because results justify it, not because a contract requires it." },
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
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-6 text-left group gap-4">
        <span className={`font-semibold text-lg transition-colors duration-200 ${open ? "text-[#FD4F00]" : "text-white"}`}>{faq.q}</span>
        <span className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${open ? "border-[#FD4F00] text-[#FD4F00]" : "border-white/20 text-white/40"}`}>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-gray-400 pb-6 leading-relaxed">{faq.a}</p>
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
    <main className="min-h-screen bg-[#070C12] text-white overflow-x-hidden">
      <NoiseTexture />
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO — Ultra Premium Centered
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        
        {/* ── Dynamic Mouse Canvas ── */}
        <HeroBackground />

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-32 pb-24 flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 backdrop-blur-sm mb-10 group hover:bg-[#FD4F00]/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FD4F00] animate-pulse" />
            <span className="text-[#FD4F00] text-sm font-semibold tracking-widest uppercase">
              <ScrambleText text="Digital Marketing & Development Agency" delay={0.5} duration={1.5} />
            </span>
          </motion.div>

          {/* ── Giant heading ── */}
          <div className="mb-8 w-full flex flex-col items-center">
            {/* Line 1 */}
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
            {/* Line 2 — gradient */}
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

          {/* ── Subtext + CTAs ── */}
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

          {/* ── Floating service badges ── */}
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

        {/* ── Scrolling ticker at very bottom ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-0 w-full z-10 border-t border-white/8 py-4 bg-white/[0.02] backdrop-blur-sm"
        >
          <MarqueeTicker
            items={["SOCIAL MEDIA", "PAID ADS", "CRO", "WEB DEVELOPMENT", "SAAS PRODUCT MANAGEMENT", "DEVELOPMENT SERVICES", "SEO", "CONTENT MARKETING"]}
            speed={30}
            itemClassName="text-white/40"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK MARQUEE
      ══════════════════════════════════════════ */}
      <div className="border-b border-white/8 py-8 bg-[#070C12] relative overflow-hidden">
        <MarqueeTicker
          items={["REACT.JS", "NEXT.JS", "NODE.JS", "TYPESCRIPT", "AWS", "TAILWIND CSS", "GOOGLE ADS", "META ADS", "AHREFS", "SEMRUSH", "SHOPIFY", "WORDPRESS"]}
          speed={50}
          itemClassName="text-white/20 font-bold tracking-widest"
        />
      </div>

      {/* ══════════════════════════════════════════
          STATS — 4 Big Numbers
      ══════════════════════════════════════════ */}
      <section className="py-20 border-y border-white/8 bg-white/[0.015] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 150, suffix: "+", label: "Clients Served" },
            { value: 2, prefix: "$", suffix: "M+", label: "Revenue Generated" },
            { value: 97, suffix: "%", label: "Client Retention" },
            { value: 4, suffix: ".9★", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2">
                <Counter to={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ""} />
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT IS A DMA
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 text-[30vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">01</div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[#FD4F00] text-xs uppercase tracking-widest font-bold mb-5 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-0">What Is a<br />Digital Marketing<br />Agency?</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-5">
            <p className="text-gray-300 text-lg leading-relaxed">A digital marketing agency plans, builds, and runs your online marketing so you don't have to hire, train, and manage that team in-house.</p>
            <p className="text-gray-400 leading-relaxed">Most agencies fall into two traps: single-channel specialists who can't run your whole funnel, or shallow generalists who copy-paste the same playbook for every client.</p>
            <div className="p-6 rounded-2xl bg-[#FD4F00]/8 border border-[#FD4F00]/20">
              <p className="text-white font-semibold leading-relaxed">A good agency looks at your whole customer journey and fixes the parts that are actually costing you money. <span className="text-[#FD4F00]">That's how WTechVerce operates.</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE WORK WITH (BENTO GRID STYLE)
      ══════════════════════════════════════════ */}
      <section className="py-32 border-t border-white/5 bg-[#03070b] relative overflow-hidden">
        {/* Abstract glowing background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6C24FA]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C24FA] animate-pulse" />
                Industries
              </span>
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Work With</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed lg:text-right text-lg">
              The fundamentals of good marketing don't change — but the playbook inside each industry does.
            </p>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Store className="w-6 h-6" />, title: "Small & Local Businesses", desc: "Local SEO, Google Business Profile, and reviews that move foot traffic.", link: "/local-seo", span: "md:col-span-2", bg: "from-[#FD4F00]/10 to-transparent" },
              { icon: <Cloud className="w-6 h-6" />, title: "SaaS & Startups", desc: "Demand-gen funnels around free trials and content your buyers are searching.", link: "/saas-marketing", span: "md:col-span-1", bg: "from-[#6C24FA]/10 to-transparent" },
              { icon: <Globe className="w-6 h-6" />, title: "eCommerce Brands", desc: "Paid media and SEO side by side with real ROAS tracking.", link: "/ecommerce-marketing", span: "md:col-span-1", bg: "from-blue-500/10 to-transparent" },
              { icon: <Briefcase className="w-6 h-6" />, title: "Law Firms", desc: "Local SEO with targeted PPC — not budget burned on non-converting clicks.", link: "/law-firm-marketing", span: "md:col-span-2", bg: "from-emerald-500/10 to-transparent" },
              { icon: <Hammer className="w-6 h-6" />, title: "Home Services", desc: "Service-area targeting and call tracking so you know what generated the job.", link: "/home-services-marketing", span: "md:col-span-1", bg: "from-amber-500/10 to-transparent" },
              { icon: <Stethoscope className="w-6 h-6" />, title: "Medical & Dental", desc: "HIPAA-conscious content and local search visibility that builds trust fast.", link: "/healthcare-marketing", span: "md:col-span-1", bg: "from-teal-500/10 to-transparent" },
              { icon: <Building2 className="w-6 h-6" />, title: "Enterprise", desc: "We slot into existing marketing teams as a specialist extension.", link: "/enterprise-marketing", span: "md:col-span-1", bg: "from-pink-500/10 to-transparent" },
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-8 rounded-3xl border border-white/5 bg-[#0D1219] overflow-hidden ${ind.span}`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-xl">
                    {ind.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-white mb-3 tracking-tight group-hover:text-[#FD4F00] transition-colors">{ind.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-8 right-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="border-y border-white/8 py-4 overflow-hidden">
        <MarqueeTicker items={["NO LOCK-IN CONTRACTS", "TRANSPARENT REPORTING", "DEDICATED STRATEGIST", "MONTH TO MONTH", "REAL REVENUE RESULTS", "FULL FUNNEL STRATEGY"]} speed={40} direction="right" itemClassName="text-white/25" />
      </div>

      {/* ══════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <span className="text-[#FD4F00] text-xs uppercase tracking-widest font-bold mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Leadstonk",
                category: "Custom Development & SEO",
                image: "/projects/leadstonk.png",
                desc: "Full-stack platform build combined with a high-ROI organic search strategy."
              },
              {
                title: "Premium Dental Clinic",
                category: "Web Development & Marketing",
                image: "/projects/dental.jpg",
                desc: "Modern patient portal and lead-generation campaigns driving daily appointments."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#070C12] border border-white/10 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C12] via-[#070C12]/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="text-[#FD4F00] font-bold text-xs tracking-widest uppercase mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — PREMIUM LIST
      ══════════════════════════════════════════ */}
      <section id="services" className="py-32 bg-[#03070b] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD4F00]/10 border border-[#FD4F00]/20 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4F00] animate-pulse" />
              What We Offer
            </span>
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight max-w-3xl text-white">
              Full-Service Digital Marketing
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-[#0D1219] border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex items-center gap-6 md:gap-10 relative z-10">
                  <span className="text-4xl font-black text-white/5 group-hover:text-white/20 transition-colors w-16">{svc.num}</span>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-xl" style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30`, color: svc.color }}>
                    {svc.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FD4F00] transition-colors">{svc.title}</h3>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-10 md:w-1/2 relative z-10 pl-22 md:pl-0">
                  <p className="text-gray-400 text-base leading-relaxed md:max-w-md">{svc.desc}</p>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#FD4F00] group-hover:border-[#FD4F00] group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  </div>
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.015] leading-none select-none pointer-events-none">04</div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <span className="text-[#6C24FA] text-xs uppercase tracking-widest font-bold mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "Audit & Discovery", desc: "We audit your site, rankings, ad accounts, and competitors before making a single recommendation.", icon: <Search className="w-5 h-5" />, color: "#FD4F00" },
              { num: "02", title: "Strategy & Roadmap", desc: "You get a written plan: which channels, why, and what results to expect at 30, 60, and 90 days.", icon: <LineChart className="w-5 h-5" />, color: "#6C24FA" },
              { num: "03", title: "Execution", desc: "Our specialists build and launch — content, campaigns, technical fixes — per the roadmap.", icon: <Zap className="w-5 h-5" />, color: "#FD4F00" },
              { num: "04", title: "Optimize & Report", desc: "Monthly reports tied to real business goals, with changes based on actual performance.", icon: <TrendingUp className="w-5 h-5" />, color: "#6C24FA" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute bottom-3 right-4 text-6xl font-black text-white/[0.04] select-none pointer-events-none">{step.num}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ background: `${step.color}18`, border: `1px solid ${step.color}40`, color: step.color }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEMS + WHY US (PREMIUM SPLIT)
      ══════════════════════════════════════════ */}
      <section className="py-32 border-t border-white/5 bg-[#070C12] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 relative z-10">
          
          {/* Left Column: Problems */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD4F00]/10 border border-[#FD4F00]/20 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4F00] animate-pulse" />
              Pain Points
            </span>
            <h2 className="text-5xl font-black mb-12 leading-tight tracking-tight text-white">
              Problems We <span className="text-[#FD4F00] italic pr-2">Solve</span>
            </h2>
            <div className="space-y-8">
              {[
                { prob: `"We're getting traffic but no leads."`, sol: "Usually a targeting or conversion problem, not a traffic problem. We diagnose which." },
                { prob: `"Our last agency just sent reports we didn't understand."`, sol: "We report in plain language tied to revenue, not impressions and clicks." },
                { prob: `"We don't have time to manage five different vendors."`, sol: "One team, one point of contact, one coordinated strategy." },
                { prob: `"We tried marketing before and it didn't work."`, sol: "Usually because channels were run in isolation. We fix that." },
                { prob: `"We don't know if our budget is being spent well."`, sol: "Full transparency into spend, performance, and what changes next." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-[#FD4F00]/30 font-black text-4xl shrink-0 group-hover:text-[#FD4F00] transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-bold mb-2 group-hover:text-[#FD4F00] transition-colors">{item.prob}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.sol}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Why Us */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C24FA]/10 border border-[#6C24FA]/20 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C24FA] animate-pulse" />
              Why WTechVerce
            </span>
            <h2 className="text-5xl font-black mb-12 leading-tight tracking-tight text-white">
              Why Businesses <span className="text-[#6C24FA] italic pr-2">Choose Us</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Transparent Reporting", desc: "Reports built for business owners — tied to revenue, not vanity metrics.", icon: <LineChart className="w-6 h-6" /> },
                { title: "No Lock-In Contracts", desc: "Month-to-month. You stay because results justify it, not because a contract traps you.", icon: <CheckCircle className="w-6 h-6" /> },
                { title: "Dedicated Strategist", desc: "A real point of contact who knows your business — not a rotating support inbox.", icon: <Sparkles className="w-6 h-6" /> },
                { title: "Full-Funnel Coordination", desc: "SEO, ads, content, and email all coordinated into one goal: more customers.", icon: <TrendingUp className="w-6 h-6" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-[#0D1219] border border-white/5 hover:border-[#6C24FA]/30 hover:bg-[#6C24FA]/5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#6C24FA]/10 border border-[#6C24FA]/20 flex items-center justify-center text-[#6C24FA] shrink-0 group-hover:scale-110 group-hover:bg-[#6C24FA] group-hover:text-white transition-all shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14 text-center">
            <span className="text-[#6C24FA] text-xs uppercase tracking-widest font-bold mb-4 block">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah J.", role: "Founder, TechFlow", quote: "WTechVerce rebuilt our SaaS platform and doubled our conversion rate in 3 months. Incredibly skilled team." },
              { name: "Michael R.", role: "CMO, RetailCo", quote: "The transparency in reporting and the coordination between their ads and SEO team is unlike any agency we've used." },
              { name: "Dr. Allen", role: "Dental Practice Owner", quote: "We don't worry about lead generation anymore. They handle the website and the ads, we just handle the patients." }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] relative"
              >
                <div className="flex gap-1 mb-6 text-[#FD4F00]">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed relative z-10">"{test.quote}"</p>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <span className="text-xs text-gray-500">{test.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE (PREMIUM)
      ══════════════════════════════════════════ */}
      <section className="py-32 border-t border-white/5 bg-[#03070b] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD4F00]/10 border border-[#FD4F00]/20 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4F00] animate-pulse" />
              The Difference
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">WTechVerce vs. Typical Agencies</h2>
          </div>
          
          <div className="rounded-[2.5rem] p-4 bg-[#0D1219] border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FD4F00]/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="rounded-[2rem] overflow-hidden bg-[#070A0F] border border-white/5 relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-8 text-gray-400 font-bold text-xs uppercase tracking-widest w-1/3">Feature</th>
                    <th className="p-8 text-gray-500 font-bold text-xs uppercase tracking-widest w-1/3">Typical Agency</th>
                    <th className="p-8 text-[#FD4F00] font-black text-sm uppercase tracking-widest bg-[#FD4F00]/10 w-1/3">WTechVerce ✦</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {[
                    ["Contract terms", "12-month lock-in", "Month-to-month"],
                    ["Reporting", "Raw data dumps", "Plain-language, revenue-tied"],
                    ["Strategy", "One-size-fits-all", "Built around your audit"],
                    ["Point of contact", "Rotating managers", "Dedicated strategist"],
                    ["Channels", "Siloed execution", "Coordinated: SEO, PPC, content"],
                    ["Pricing", "Hidden or bundled", "Clear and itemized"],
                  ].map(([label, bad, good], i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                      <td className="p-8 text-gray-300 font-bold">{label}</td>
                      <td className="p-8 text-gray-500 group-hover:text-gray-400 transition-colors">{bad}</td>
                      <td className="p-8 text-white font-black bg-[#FD4F00]/5 group-hover:bg-[#FD4F00]/10 transition-colors">{good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-[#6C24FA] text-xs uppercase tracking-widest font-bold mb-4 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">Everything you need to know before working with us.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#FD4F00] font-semibold hover:gap-4 transition-all text-sm">
                Still have questions? <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD4F00]/10 via-transparent to-[#6C24FA]/10 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FD4F00] blur-[200px] pointer-events-none"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <span className="text-[#FD4F00] text-xs uppercase tracking-widest font-bold mb-8 block">Get Started Today</span>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.92] tracking-[-0.04em] text-white mb-4">
              Ready to
            </h2>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.92] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#ff6a2a] to-[#FD4F00] mb-12">
              grow?
            </h2>
            <p className="text-gray-400 text-xl max-w-md mx-auto mb-12 leading-relaxed">
              See exactly where your marketing is losing leads — before you spend a dollar with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" filled>
                Get My Free Audit <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                See Our Work <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="mt-24 border-t border-white/8 pt-6 overflow-hidden">
          <MarqueeTicker items={["DIGITAL MARKETING AGENCY", "FOR SMALL BUSINESS", "TRANSPARENT REPORTING", "NO LOCK-IN CONTRACTS", "REAL REVENUE RESULTS", "WTECHVERCE"]} speed={40} itemClassName="text-white/15" />
        </div>
      </section>
    </main>
  );
}
