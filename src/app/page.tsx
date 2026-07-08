"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrambleText from "@/components/ui/ScrambleText";
import SplitReveal from "@/components/ui/SplitReveal";
import TechMarquee from "@/components/ui/TechMarquee";
import Button from "@/components/ui/Button";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";
import {
  ArrowRight, Sparkles, Shield, Zap, Globe, Code, Cloud, Cpu,
  LayoutTemplate, Settings, Server, Star, ChevronDown, ChevronUp,
  ArrowUpRight, CheckCircle, Users, Award, TrendingUp, Search
} from "lucide-react";

const FloatingCrystal = dynamic(() => import("@/components/3d/FloatingCrystal"), { ssr: false, loading: () => null });
const NeuralNetwork3D = dynamic(() => import("@/components/3d/NeuralNetwork3D"), { ssr: false, loading: () => null });
const TorusRings = dynamic(() => import("@/components/3d/TorusRings"), { ssr: false, loading: () => null });

const HeroGlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#6C24FA]/30 rounded-full animate-spin border-t-[#FD4F00]" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">Loading</div>
      </div>
    </div>
  ),
});

// ─── ANIMATED COUNTER ───────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
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

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SERVICES DATA ───────────────────────────────────
const services = [
  { icon: <Code className="w-6 h-6" />, title: "Web Development", desc: "Custom websites, enterprise portals, admin dashboards, and marketplace platforms.", color: "#FD4F00", features: ["Next.js & React", "API Integrations", "CMS Solutions", "E-Commerce"] },
  { icon: <Cloud className="w-6 h-6" />, title: "SaaS Development", desc: "Multi-tenant platforms, subscription billing, CRM tools, and cloud architectures.", color: "#6C24FA", features: ["Multi-tenancy", "Stripe Billing", "Real-time Features", "Cloud Deploy"] },
  { icon: <Cpu className="w-6 h-6" />, title: "AI Solutions", desc: "AI-powered apps, workflow automation, intelligent chatbots, and data systems.", color: "#FD4F00", features: ["OpenAI / GPT", "LangChain", "AI Chatbots", "Automation"] },
  { icon: <LayoutTemplate className="w-6 h-6" />, title: "UI/UX Design", desc: "Premium landing pages, design systems, product UI, and brand identity design.", color: "#FD4F00", features: ["Figma Design", "Design Systems", "Prototyping", "Brand Identity"] },
  { icon: <Settings className="w-6 h-6" />, title: "Custom Software", desc: "Internal tools, workflow platforms, automation systems, and business solutions.", color: "#FD4F00", features: ["ERP Systems", "Workflow Tools", "Dashboards", "Integrations"] },
  { icon: <Server className="w-6 h-6" />, title: "Support & Maintenance", desc: "Hosting, continuous updates, performance tuning, and dedicated technical support.", color: "#6C24FA", features: ["24/7 Support", "Performance", "Security", "Updates"] },
];

// ─── PORTFOLIO DATA ────────────────────────────────
const projects = [
  { title: "LeadStonk.com", category: "B2B Lead Generation", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", color: "#FD4F00" },
  { title: "SmileCare Dental", category: "Dentist Clinic", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80", color: "#6C24FA" },
  { title: "GrowthBoost Agency", category: "Marketing Agency", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", color: "#FD4F00" },
  { title: "Elite Real Estate", category: "Real Estate", img: "https://images.unsplash.com/photo-1582407947304-fd86f28320be?auto=format&fit=crop&w=800&q=80", color: "#6C24FA" },
];

// ─── TIMELINE DATA ────────────────────────────────
const timeline = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your goals, audience, and requirements. Build a crystal-clear project brief.", points: ["Market Research", "Competitor Analysis", "Project Scope"], icon: <Search className="w-6 h-6" />, color: "#FD4F00" },
  { num: "02", title: "Planning", desc: "Architecture design, wireframes, tech stack selection, and sprint roadmap creation.", points: ["System Architecture", "Tech Stack Definition", "Sprint Roadmap"], icon: <LayoutTemplate className="w-6 h-6" />, color: "#FD4F00" },
  { num: "03", title: "Design", desc: "Premium UI/UX design with high-fidelity Figma prototypes and a complete design system.", points: ["Wireframing", "UI/UX Design", "Interactive Prototypes"], icon: <Sparkles className="w-6 h-6" />, color: "#6C24FA" },
  { num: "04", title: "Development", desc: "Precision engineering with clean, scalable code and bi-weekly milestone deliveries.", points: ["Frontend & Backend", "API Development", "CI/CD Setup"], icon: <Code className="w-6 h-6" />, color: "#FD4F00" },
  { num: "05", title: "Testing & QA", desc: "Cross-device, cross-browser, load, and security testing before every release.", points: ["Unit Testing", "Security Audits", "Performance Tuning"], icon: <Shield className="w-6 h-6" />, color: "#FD4F00" },
  { num: "06", title: "Launch & Support", desc: "Smooth production deployment, monitoring setup, analytics, and ongoing dedicated support.", points: ["Cloud Deployment", "Analytics Setup", "24/7 Monitoring"], icon: <Zap className="w-6 h-6" />, color: "#6C24FA" },
];

// ─── REVIEWS DATA ────────────────────────────────
const reviews = [
  { name: "Ahmad K.", role: "CTO, Aura Tech", review: "W Techverce delivered our SaaS platform in half the expected time. The 3D UI they built blew away our investors. Absolutely world-class team.", stars: 5, avatar: "AK" },
  { name: "Sarah M.", role: "Founder, NexGen AI", review: "The AI dashboard they built is phenomenal. Real-time, fast, and gorgeous. We went from zero to production in 8 weeks. Highly recommend.", stars: 5, avatar: "SM" },
  { name: "Usman R.", role: "CEO, VanguardCo", review: "They took our complex enterprise requirements and turned them into an elegant, scalable portal. The code quality is exceptional.", stars: 5, avatar: "UR" },
  { name: "Lisa C.", role: "Product Manager, Orbit", review: "The design system they built for us saved months of future dev time. Pixel-perfect and fully documented. A truly premium agency.", stars: 5, avatar: "LC" },
];

// ─── FAQ DATA ─────────────────────────────────────
const faqs = [
  { q: "How long does a typical project take?", a: "Most projects range from 6 to 16 weeks depending on complexity and scope. We'll give you a precise timeline and milestones after the discovery session." },
  { q: "What technologies do you specialize in?", a: "We specialize in Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, AWS, and AI/ML tools like OpenAI and LangChain. We also support custom tech stacks." },
  { q: "Do you offer post-launch support?", a: "Yes! Every project includes a free 30-day post-launch support period. We also offer dedicated maintenance retainers for ongoing optimization and updates." },
  { q: "Can you work with our existing codebase?", a: "Absolutely. We regularly audit, refactor, and extend existing codebases. We'll do a free code review before starting to understand the scope." },
  { q: "What is your pricing model?", a: "We offer fixed-price contracts for well-defined projects and retainer-based engagements for ongoing work. Pricing is transparent with no hidden fees." },
  { q: "Do you sign NDAs?", a: "Yes, we sign NDAs before any detailed project discussions. Your IP and business information are always fully protected." },
];

// ─── FAQ ITEM COMPONENT ───────────────────────────
function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border ${open ? 'border-[#6C24FA]/50 bg-white/[0.03] shadow-[0_0_30px_rgba(108,36,250,0.1)]' : 'border-white/10 bg-transparent'} rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 md:py-6 text-left group"
      >
        <span className={`font-bold pr-4 transition-colors duration-300 ${open ? 'text-[#FD4F00] text-lg' : 'text-white text-lg group-hover:text-gray-200'}`}>{faq.q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${open ? 'bg-[#FD4F00]/20 text-[#FD4F00]' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}`}>
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base border-t border-white/5 pt-4 mt-2">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070C12] text-white overflow-x-hidden">
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO SECTION — 3D Laptop + Nodes
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* BG Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070C12] via-[#070C12] to-[#070C12]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FD4F00]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6C24FA]/8 rounded-full blur-[140px] pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* LEFT TEXT */}
          <div className="lg:col-span-5">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "backOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FD4F00]" />
              <ScrambleText
                text="World-Class Digital Agency"
                delay={0.2}
                duration={1.2}
                className="text-sm font-semibold text-[#FD4F00] tracking-wide"
              />
            </motion.div>

            {/* H1 — word-by-word clip reveal */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.2] mb-6">
              <SplitReveal
                text="We Build"
                delay={0.3}
                stagger={0.1}
                className="text-white"
              />
              <SplitReveal
                text="Futuristic"
                delay={0.5}
                stagger={0.08}
                wordClass="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#FD4F00] to-[#6C24FA]"
                className=""
              />
              <SplitReveal
                text="Digital Products."
                delay={0.7}
                stagger={0.07}
                className="text-white"
              />
            </h1>

            {/* Paragraph — scramble on load */}
            <div className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              <SplitReveal text="W Techverce engineers elite digital products. From high-performance web applications to scalable SaaS platforms and AI integrations, we deliver absolute excellence." scrollTrigger type="text" />
            </div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: <Shield className="w-3.5 h-3.5" />, text: "Enterprise Grade" },
                { icon: <Zap className="w-3.5 h-3.5" />, text: "Lightning Fast" },
                { icon: <Globe className="w-3.5 h-3.5" />, text: "Global Reach" },
              ].map((chip, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                  <span className="text-[#FD4F00]">{chip.icon}</span>
                  {chip.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/services" variant="primary" size="md">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/portfolio" variant="outline" size="md" filled>
                View Portfolio
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — 3D GLOBE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[600px] md:h-[750px] w-full flex items-center justify-center lg:col-span-7"
          >
            <HeroGlobeScene />
          </motion.div>
        </div>

      </section>

      {/* STATS STRIP — standalone between hero and services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#070C12] border-t border-b border-white/8 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 gap-10 md:flex md:justify-center md:gap-24">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, val: 150, suffix: "+", label: "Projects" },
              { icon: <Users className="w-6 h-6" />, val: 80, suffix: "+", label: "Clients" },
              { icon: <Award className="w-6 h-6" />, val: 5, suffix: "+", label: "Years" },
              { icon: <CheckCircle className="w-6 h-6" />, val: 98, suffix: "%", label: "Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[#FD4F00]">{s.icon}</span>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-white">
                    <Counter to={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-gray-400">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-[#070C12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div data-animate="card" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/8 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6C24FA] animate-pulse" />
              <span className="text-sm font-semibold text-[#6C24FA]">What We Build</span>
            </div>
            <h2 data-animate="heading" className="text-4xl md:text-6xl font-black mb-5">
              <SplitReveal text="Our Services" wordClass="" className="justify-center" scrollTrigger />
            </h2>
            <div className="text-gray-400 max-w-2xl mx-auto text-lg">
              <SplitReveal text="End-to-end digital solutions engineered for scale, performance, and impact." scrollTrigger type="text" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                data-animate="card"
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-[#070C12] border border-white/6 rounded-3xl p-8 overflow-hidden cursor-default"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at top left, ${svc.color}12, transparent 65%)` }} />
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${svc.color}, transparent)` }} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${svc.color}35, ${svc.color}10)`, border: `1px solid ${svc.color}50` }}>
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{svc.title}</h3>
                  <div className="text-gray-400 text-sm leading-relaxed mb-5">
                    <SplitReveal text={svc.desc} scrollTrigger type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {svc.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/services" variant="outline" size="sm" className="border-[#FD4F00]/40 text-[#FD4F00] hover:bg-[#FD4F00]/10">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTFOLIO SECTION
      ══════════════════════════════════════════ */}
      <section id="portfolio" className="py-20 bg-[#070C12] relative">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#6C24FA]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FD4F00] animate-pulse" />
                <span className="text-sm font-semibold text-[#FD4F00]">Our Work</span>
              </div>
              <h2 data-animate="heading" className="text-4xl md:text-6xl font-black">
                <SplitReveal text="Featured Projects" scrollTrigger />
              </h2>
            </div>
            <div data-animate="text">
              <Button href="/portfolio" variant="outline" size="sm">
                All Projects <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                data-animate="card"
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10]"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${proj.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C12] via-[#070C12]/50 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${proj.color}40, transparent)` }} />

                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="text-xs font-bold tracking-widest uppercase mb-2 inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit"
                    style={{ color: proj.color }}>
                    {proj.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl md:text-3xl font-black text-white">{proj.title}</h3>
                    <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 flex-shrink-0 ml-4">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE / PROCESS SECTION
      ══════════════════════════════════════════ */}
      <section id="process" className="py-24 relative bg-[#070C12]">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/8 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6C24FA] animate-pulse" />
              <span className="text-sm font-semibold text-[#6C24FA]">How We Work</span>
            </div>
            <h2 data-animate="heading" className="text-4xl md:text-6xl font-black mb-5">
              <SplitReveal text="Our Process" className="justify-center" scrollTrigger />
            </h2>
            <div className="text-gray-400 max-w-xl mx-auto text-lg">
              <SplitReveal text="A proven, transparent process that turns complex ideas into polished products." scrollTrigger type="text" />
            </div>
          </div>

          <div className="relative border-l-2 border-white/10 md:border-none pl-6 md:pl-0 ml-4 md:ml-0">
            {/* Center glowing line for desktop */}
            <div 
              data-animate="line-y" 
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FD4F00] via-[#6C24FA] to-transparent -translate-x-1/2 origin-top" 
            />

            <div className="flex flex-col gap-12 md:gap-24">
              {timeline.map((step, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Glowing Dot with Pulse */}
                  <div className="absolute left-[-31px] md:left-1/2 md:-translate-x-1/2 top-6 md:top-auto w-4 h-4 rounded-full bg-[#070C12] border-[3px] border-[#FD4F00] shadow-[0_0_20px_rgba(253,79,0,0.9)] z-10 flex items-center justify-center" style={{ borderColor: step.color }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: step.color }} />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 md:text-left'}`}>
                    <div data-animate="card" className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(108,36,250,0.2)] transition-all duration-500 backdrop-blur-xl relative group overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                        style={{ background: `radial-gradient(circle at ${i % 2 === 0 ? 'right' : 'left'} bottom, ${step.color}25, transparent 70%)` }} />
                      
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, ${step.color}40, ${step.color}10)`, border: `1px solid ${step.color}60` }}>
                            {step.icon}
                          </div>
                        </div>
                        <div className="text-5xl md:text-7xl font-black opacity-[0.07] text-white select-none transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.15]">{step.num}</div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 transition-colors duration-300" style={{ textShadow: `0 0 20px ${step.color}40` }}>{step.title}</h3>
                      <div className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10 mb-6">
                        <SplitReveal text={step.desc} scrollTrigger type="text" />
                      </div>

                      {/* Sub-points (Informative) */}
                      <ul className="space-y-3 relative z-10 border-t border-white/10 pt-6 mt-4">
                        {step.points.map((pt, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-gray-300 group/item">
                            <CheckCircle className="w-4 h-4 opacity-50 group-hover/item:opacity-100 transition-opacity" style={{ color: step.color }} />
                            <span className="group-hover/item:text-white transition-colors">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REVIEWS / TESTIMONIALS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#070C12] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#FD4F00]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-6">
              <Star className="w-4 h-4 text-[#FD4F00] fill-[#FD4F00]" />
              <span className="text-sm font-semibold text-[#FD4F00]">Client Reviews</span>
            </div>
            <h2 data-animate="heading" className="text-4xl md:text-6xl font-black mb-5">
              <SplitReveal text="What Our Clients Say" className="justify-center" scrollTrigger />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, i) => (
              <motion.div
                key={i}
                data-animate="card"
                whileHover={{ y: -6 }}
                className="group bg-[#070C12] border border-white/6 rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle, #FD4F00, transparent)" }} />

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rev.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#FD4F00] fill-[#FD4F00]" />
                  ))}
                </div>

                <div className="text-gray-300 leading-relaxed mb-8 text-base italic">
                  <SplitReveal text={`"${rev.review}"`} scrollTrigger type="text" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #FD4F00, #6C24FA)" }}>
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{rev.name}</div>
                    <div className="text-sm text-gray-500">{rev.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#070C12] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C24FA]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Heading & Illustration */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="sticky top-32">
                <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/8 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#6C24FA] animate-pulse" />
                  <span className="text-sm font-semibold text-[#6C24FA]">FAQ</span>
                </div>
                <h2 data-animate="heading" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  <SplitReveal text="Any Questions?" scrollTrigger />
                </h2>
                <div className="text-gray-400 text-lg mb-8 max-w-md">
                  <SplitReveal text="Everything you need to know about our process, pricing, and how we deliver world-class products." scrollTrigger type="text" />
                </div>
                <div data-animate="card" className="p-6 rounded-2xl bg-gradient-to-br from-[#FD4F00]/10 to-[#6C24FA]/10 border border-white/10 backdrop-blur-md hidden md:block">
                  <h3 className="text-white font-bold mb-2">Still have questions?</h3>
                  <p className="text-gray-400 text-sm mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                  <Button href="/contact" variant="white" size="sm" filled>
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-[#070C12]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD4F00]/8 via-transparent to-[#6C24FA]/8" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div>
            <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <Sparkles className="w-4 h-4 text-[#FD4F00]" />
              <span className="text-sm font-medium text-gray-300">Ready to Start?</span>
            </div>

            <h2 data-animate="heading" className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              <SplitReveal text="Let's build something great." wordClass="" className="justify-center" scrollTrigger />
            </h2>

            <div className="text-gray-400 text-xl mb-12 max-w-xl mx-auto">
              <SplitReveal text="Have a project in mind? Let's talk about it. Our team responds within 24 hours." scrollTrigger type="text" />
            </div>

            <div data-animate="card" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" filled>
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6C24FA]/10 rounded-full blur-[120px] pointer-events-none" />
        {/* 3D NeuralNetwork decoration */}
        <div className="absolute right-[-120px] top-0 w-[500px] h-[500px] opacity-40 pointer-events-none hidden lg:block">
          <NeuralNetwork3D />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#6C24FA]/40 bg-[#6C24FA]/10 text-[#a78bfa] text-sm font-semibold mb-6 tracking-widest uppercase">Why Us</span>
            <h2 data-animate="heading" className="text-5xl md:text-6xl font-black mb-6">
              <SplitReveal text="The W Techverce Difference" scrollTrigger />
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We don't just build websites. We architect digital experiences that convert, scale, and outlast the competition.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Blazing Fast Delivery", desc: "Our agile process means you see working software within weeks, not months. No endless planning cycles — just results.", stat: "2x", statLabel: "Faster than industry avg" },
              { icon: "🔒", title: "Enterprise-Grade Security", desc: "Every product we ship is hardened with security-first architecture — OWASP-compliant, penetration tested, and built to protect your data.", stat: "0", statLabel: "Security breaches to date" },
              { icon: "📈", title: "ROI-Driven Approach", desc: "We tie every design and engineering decision to business outcomes. Your success metric is our north star — not just pixel perfection.", stat: "312%", statLabel: "Avg client ROI increase" },
              { icon: "🤝", title: "Dedicated Team Model", desc: "You get a dedicated squad of a designer, engineer, and PM — not outsourced freelancers. A true extension of your team.", stat: "1", statLabel: "Dedicated team, always" },
              { icon: "🌍", title: "Global-Ready Products", desc: "We build with i18n, multi-region deployment, and timezone-aware systems from day one. Ready to scale worldwide.", stat: "40+", statLabel: "Countries served" },
              { icon: "♾️", title: "Post-Launch Partnership", desc: "We don't disappear after launch. Our support plans include monitoring, updates, and growth sprints to keep you ahead.", stat: "24/7", statLabel: "Support availability" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#6C24FA]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(108,36,250,0.08), transparent 60%)" }} />
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-end gap-2 pt-4 border-t border-white/8">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">{item.stat}</span>
                  <span className="text-xs text-gray-500 mb-1">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden bg-[#070C12]">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FD4F00]/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        {/* 3D Crystal decoration */}
        <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30 pointer-events-none hidden lg:block">
          <FloatingCrystal />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#FD4F00]/40 bg-[#FD4F00]/10 text-[#FD4F00] text-sm font-semibold mb-6 tracking-widest uppercase">Client Reviews</span>
            <h2 data-animate="heading" className="text-5xl md:text-6xl font-black mb-6">
              <SplitReveal text="Trusted By Founders Worldwide" scrollTrigger />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Mitchell", role: "CEO, Aura SaaS", avatar: "SM", rating: 5, review: "W Techverce didn't just build our platform — they became genuine partners in our growth. The team's technical depth is extraordinary, and they delivered 3 weeks ahead of schedule.", gradient: "from-[#FD4F00]/20 to-transparent" },
              { name: "James Okonkwo", role: "CTO, NexGen AI", avatar: "JO", rating: 5, review: "We had tried two other agencies before. W Techverce was a revelation. Clean architecture, proactive communication, and a product that our users love. Highly recommend.", gradient: "from-[#6C24FA]/20 to-transparent" },
              { name: "Priya Nair", role: "Founder, HealthStack", avatar: "PN", rating: 5, review: "The design quality is truly exceptional. They understood our brand vision from day one and translated it into an interface our clients compliment constantly. Outstanding work.", gradient: "from-[#FD4F00]/15 to-transparent" },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative p-8 rounded-2xl border border-white/8 bg-gradient-to-br ${t.gradient} backdrop-blur-sm overflow-hidden`}>
                {/* Quote mark */}
                <span className="absolute top-4 right-6 text-7xl text-white/5 font-black leading-none select-none">"</span>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-[#FD4F00] text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#6C24FA] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES WE SERVE
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#6C24FA]/8 rounded-full blur-[100px] pointer-events-none" />
        {/* 3D TorusRings decoration */}
        <div className="absolute right-[-60px] bottom-10 w-[380px] h-[380px] opacity-35 pointer-events-none hidden lg:block">
          <TorusRings />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#6C24FA]/40 bg-[#6C24FA]/10 text-[#a78bfa] text-sm font-semibold mb-6 tracking-widest uppercase">Industries</span>
            <h2 data-animate="heading" className="text-5xl md:text-6xl font-black mb-6">
              <SplitReveal text="We Build For Every Sector" scrollTrigger />
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From HealthTech to FinTech, our cross-domain expertise lets us deliver industry-specific solutions that truly fit.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏥", label: "HealthTech", desc: "Telemedicine, EHRs, patient portals" },
              { icon: "💰", label: "FinTech", desc: "Trading platforms, wallets, banking" },
              { icon: "🎓", label: "EdTech", desc: "LMS, e-learning, virtual classrooms" },
              { icon: "🛒", label: "E-Commerce", desc: "Stores, marketplaces, headless" },
              { icon: "🤖", label: "AI & ML", desc: "Copilots, automation, pipelines" },
              { icon: "🚀", label: "SaaS", desc: "Multi-tenant, billing, analytics" },
              { icon: "🏗️", label: "PropTech", desc: "Listings, CRMs, virtual tours" },
              { icon: "🎮", label: "GameTech", desc: "Web games, leaderboards, NFTs" },
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-gradient-to-br hover:from-[#FD4F00]/10 hover:to-[#6C24FA]/10 hover:border-[#6C24FA]/30 transition-all duration-400 text-center cursor-default">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{ind.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{ind.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
