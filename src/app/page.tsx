"use client";
// Force Vercel Redeployment Trigger

import { motion, useInView, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrambleText from "@/components/ui/ScrambleText";
import SplitReveal from "@/components/ui/SplitReveal";
import Button from "@/components/ui/Button";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";
import {
  ArrowRight, Sparkles, Shield, Zap, Globe, Code, Cloud, Cpu,
  LayoutTemplate, Settings, Server, Star, ChevronDown, ChevronUp,
  ArrowUpRight, CheckCircle, Users, Award, TrendingUp, Search,
  Megaphone, PenTool, Mail, LineChart, Target, Building2, Store, Briefcase, Stethoscope, Hammer, Laptop
} from "lucide-react";

const FloatingCrystal = dynamic(() => import("@/components/3d/FloatingCrystal"), { ssr: false, loading: () => null });
const NeuralNetwork3D = dynamic(() => import("@/components/3d/NeuralNetwork3D"), { ssr: false, loading: () => null });

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
  { icon: <Search className="w-6 h-6" />, title: "SEO", desc: "Technical fixes, content strategy, and link building aimed at ranking for the searches your actual customers type in — not just vanity keywords.", color: "#FD4F00", features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"], link: "/seo-services" },
  { icon: <Target className="w-6 h-6" />, title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, and other paid channels, built around a target cost-per-acquisition instead of a budget you spend and hope works.", color: "#6C24FA", features: ["Google Ads", "Meta Ads", "Retargeting", "ROI Tracking"], link: "/ppc-management" },
  { icon: <Megaphone className="w-6 h-6" />, title: "Social Media Marketing", desc: "Content and community management that builds brand recognition and feeds your funnel, not just likes.", color: "#FD4F00", features: ["Community Management", "Brand Awareness", "Lead Gen", "Content Creation"], link: "/social-media" },
  { icon: <PenTool className="w-6 h-6" />, title: "Content Marketing", desc: "Blog posts, guides, and resources that answer real buyer questions and support your SEO strategy at the same time.", color: "#FD4F00", features: ["Blog Posts", "Guides & E-books", "Copywriting", "SEO Content"], link: "/content-marketing" },
  { icon: <LayoutTemplate className="w-6 h-6" />, title: "Web Design & CRO", desc: "Traffic means nothing if your site doesn't convert it. We test and refine pages to turn more visitors into leads and customers.", color: "#6C24FA", features: ["A/B Testing", "Landing Pages", "UX/UI Design", "Conversion Focus"], link: "/web-design" },
  { icon: <Code className="w-6 h-6" />, title: "Web Development", desc: "A great design still needs solid code behind it. We build fast, secure, mobile-friendly websites so your site never bottlenecks sales.", color: "#FD4F00", features: ["Next.js & React", "Custom Builds", "Platform Migration", "Speed Optimization"], link: "/web-development" },
  { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", desc: "Automated sequences and campaigns that turn one-time buyers and leads into repeat customers.", color: "#FD4F00", features: ["Automations", "Newsletters", "Lead Nurturing", "Retention"], link: "/email-marketing" },
];

// ─── INDUSTRIES DATA ────────────────────────────────
const industries = [
  { title: "Small & Local Businesses", icon: <Store className="w-6 h-6" />, desc: "Focusing on local SEO, Google Business Profile optimization, and reviews — the three things that actually move foot traffic and phone calls.", link: "/local-seo" },
  { title: "SaaS Companies & Startups", icon: <Cloud className="w-6 h-6" />, desc: "Building demand-gen funnels around free trials, demos, and content that ranks for the exact questions your buyers are Googling.", link: "/saas-marketing" },
  { title: "eCommerce Brands", icon: <Globe className="w-6 h-6" />, desc: "Running paid media and SEO side by side, with conversion tracking that shows you real return on ad spend — not vanity impressions.", link: "/ecommerce-marketing" },
  { title: "Law Firms", icon: <Briefcase className="w-6 h-6" />, desc: "Combining local SEO with tightly targeted PPC so you're not burning budget on clicks that never turn into consultations.", link: "/law-firm-marketing" },
  { title: "Home Service Businesses", icon: <Hammer className="w-6 h-6" />, desc: "Building campaigns around service-area targeting and call tracking, so you know which channel actually generated the job.", link: "/home-services-marketing" },
  { title: "Medical & Dental Clinics", icon: <Stethoscope className="w-6 h-6" />, desc: "HIPAA-conscious content, local search visibility, and a website that builds trust fast are non-negotiable here.", link: "/healthcare-marketing" },
  { title: "Enterprise Businesses", icon: <Building2 className="w-6 h-6" />, desc: "We slot into existing marketing teams as an extension, coordinating a dozen campaigns without losing consistency.", link: "/enterprise-marketing" },
];

// ─── TIMELINE DATA ────────────────────────────────
const timeline = [
  { num: "01", title: "Audit & Discovery", desc: "We start by auditing your current site, rankings, ad accounts, and competitors. No recommendations before we understand your baseline.", points: ["Technical Audit", "Competitor Research", "Baseline Metrics"], icon: <Search className="w-6 h-6" />, color: "#FD4F00" },
  { num: "02", title: "Strategy & Roadmap", desc: "You get a written plan: which channels, why those channels, and what results to expect in 30, 60, and 90 days.", points: ["Channel Selection", "KPI Definition", "90-Day Roadmap"], icon: <LineChart className="w-6 h-6" />, color: "#FD4F00" },
  { num: "03", title: "Execution", desc: "Our specialists build and launch — content, campaigns, technical fixes, creative — according to the roadmap.", points: ["Campaign Launch", "Content Creation", "Technical Fixes"], icon: <Zap className="w-6 h-6" />, color: "#6C24FA" },
  { num: "04", title: "Reporting & Optimization", desc: "Monthly reporting tied to your actual business goals, with adjustments made based on real performance, not guesswork.", points: ["Monthly Reports", "A/B Testing", "Continuous Scaling"], icon: <TrendingUp className="w-6 h-6" />, color: "#FD4F00" },
];

// ─── FAQ DATA ─────────────────────────────────────
const faqs = [
  { q: "What does a digital marketing agency do?", a: "A digital marketing agency plans, builds, and manages your online marketing — SEO, paid ads, content, social media, and web optimization — so you get more qualified leads and customers without building an in-house team." },
  { q: "How much does a digital marketing agency cost?", a: "Costs vary by industry, competition, and how many channels you need. Most businesses invest in a monthly retainer scoped to specific deliverables, with pricing set after an audit rather than a flat, generic rate." },
  { q: "How is a digital marketing agency different from a freelancer?", a: "An agency gives you a full team — strategist, SEO specialist, ad manager, content writer — instead of one person covering everything. That matters once your marketing needs more than one channel running well at the same time." },
  { q: "How long does it take to see results?", a: "Paid advertising can show early signals within weeks. SEO and organic growth typically take 3–6 months to build meaningful momentum, since it depends on competition and your starting point." },
  { q: "Do I need a digital marketing agency if I already have an in-house marketing person?", a: "Often, yes — as a specialist extension, not a replacement. Most in-house marketers are generalists. An agency adds channel-specific expertise (technical SEO, paid media strategy) without the cost of five new hires." },
  { q: "What industries does WTechVerce work with?", a: "Small and local businesses, SaaS companies, startups, eCommerce brands, law firms, home service businesses like roofing and HVAC, medical and dental clinics, and enterprise teams." },
  { q: "Is there a contract, and can I cancel anytime?", a: "We work month-to-month. You stay because results justify it, not because a contract requires it." },
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
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070C12] via-[#070C12] to-[#070C12]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FD4F00]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6C24FA]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "backOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FD4F00]" />
              <ScrambleText text="Full-Service Marketing Partner" delay={0.2} duration={1.2} className="text-sm font-semibold text-[#FD4F00] tracking-wide" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              <SplitReveal text="Digital Marketing Agency" delay={0.3} stagger={0.1} className="text-white block" />
              <SplitReveal text="for Small Business" delay={0.5} stagger={0.08} wordClass="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#FD4F00] to-[#6C24FA]" className="block" />
              <SplitReveal text="& Growing Brands" delay={0.7} stagger={0.07} className="text-white block" />
            </h1>

            <div className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              <SplitReveal text="Most digital marketing agencies sell you a bundle of services and hope something sticks. WTechVerce builds one plan, aimed at one goal: more of the right customers finding you and buying from you." scrollTrigger type="text" />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="md">
                Get Your Free Marketing Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="h-[600px] md:h-[750px] w-full flex items-center justify-center lg:col-span-6">
            <HeroGlobeScene />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT IS A DIGITAL MARKETING AGENCY
      ══════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#070C12] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 data-animate="heading" className="text-3xl md:text-5xl font-black mb-8">What Is a Digital Marketing Agency <span className="text-gray-500 text-2xl md:text-4xl block mt-2">(and What Should It Do for You)</span></h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            A digital marketing agency is a team of specialists who plan, build, and run your online marketing so you don't have to hire, train, and manage that team in-house. That sounds simple. In practice, most agencies fall into one of two traps.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
              <h3 className="text-[#FD4F00] font-bold mb-3 text-xl">The Single-Channel Trap</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Some agencies specialize in a single channel — only SEO, or only ads. That works until your business needs more than one lever pulled at the same time. A great SEO campaign with a broken checkout page still loses customers.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-colors">
              <h3 className="text-[#6C24FA] font-bold mb-3 text-xl">The Shallow Generalist Trap</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Other agencies do everything, but shallow. You get a junior account manager juggling twelve clients and a generic playbook copy-pasted across all of them.</p>
            </div>
          </div>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#FD4F00]/10 to-[#6C24FA]/10 border border-white/10 text-left">
            <p className="text-xl font-bold text-white leading-relaxed">
              A good digital marketing agency does neither. It looks at your whole customer journey — how people find you, what they see when they land on your site, and what happens after they convert — and fixes the parts that are actually costing you money. <span className="text-[#FD4F00]">That's the model WTechVerce runs on.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE WORK WITH (Industries)
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#6C24FA]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 data-animate="heading" className="text-4xl md:text-5xl font-black mb-5">Who We Work With</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We built our process to flex across industries, because the fundamentals of good marketing don't change — but the playbook inside each industry does.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="group p-8 rounded-3xl bg-[#070C12] border border-white/10 hover:border-[#6C24FA]/50 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-[#6C24FA] to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#6C24FA] mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href={ind.link} className="hover:text-[#6C24FA] transition-colors">{ind.title}</Link>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT A FULL SERVICE AGENCY INCLUDES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-24 relative bg-[#070C12]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div data-animate="card" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/8 mb-6">
              <span className="text-sm font-semibold text-[#FD4F00]">Our Capabilities</span>
            </div>
            <h2 data-animate="heading" className="text-4xl md:text-5xl font-black mb-5">What a Full-Service Digital Marketing Agency Actually Includes</h2>
            <div className="text-gray-400 max-w-2xl mx-auto text-lg">
              "Full service" gets thrown around a lot. Here's what it means when we say it.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} data-animate="card" whileHover={{ y: -10 }} className="group relative bg-[#070C12] border border-white/6 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{ background: `radial-gradient(circle at top left, ${svc.color}12, transparent 65%)` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${svc.color}35, ${svc.color}10)`, border: `1px solid ${svc.color}50` }}>
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    <Link href={svc.link} className="hover:underline decoration-[#FD4F00]">{svc.title}</Link>
                  </h3>
                  <div className="text-gray-400 text-sm leading-relaxed mb-6">{svc.desc}</div>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEMS WE SOLVE & WHY US
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#070C12]">
        <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30 pointer-events-none hidden lg:block">
          <FloatingCrystal />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16">
          <div className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl">
            <h2 className="text-3xl font-black mb-10 text-white">Problems We Solve</h2>
            <div className="space-y-8">
              {[
                { prob: `"We're getting traffic but no leads."`, sol: "Usually a targeting or conversion problem, not a traffic problem. We diagnose which." },
                { prob: `"Our last agency just sent reports we didn't understand."`, sol: "We report in plain language tied to revenue, not just impressions and clicks." },
                { prob: `"We don't have time to manage five different vendors."`, sol: "One team, one point of contact, one strategy across every channel." },
                { prob: `"We tried marketing before and it didn't work."`, sol: "Usually because channels were run in isolation. We coordinate them." },
                { prob: `"We don't know if our budget is being spent well."`, sol: "Full transparency into spend, performance, and what changes next." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#FD4F00] pl-5 relative group">
                  <div className="absolute -left-[3px] top-1.5 w-1 h-1 rounded-full bg-[#FD4F00] group-hover:scale-150 transition-transform" />
                  <h4 className="text-white font-bold mb-2 text-lg italic opacity-90">{item.prob}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.sol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C24FA]/10 blur-[80px] pointer-events-none rounded-full" />
            <h2 className="text-3xl font-black mb-10 text-white">Why Businesses Choose WTechVerce</h2>
            <div className="space-y-10 relative z-10">
              {[
                { title: "Transparent Reporting", desc: "You see exactly what we're doing and why, in reports built for business owners — not marketers." },
                { title: "No Long-Term Lock-In Contracts", desc: "We earn your business every month through results, not through a contract that traps you." },
                { title: "Dedicated Strategist, Not a Ticket Queue", desc: "You get a real point of contact who knows your business, not a rotating support inbox." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6C24FA]/20 text-[#6C24FA] flex items-center justify-center shrink-0 border border-[#6C24FA]/40 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-xl">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section id="process" className="py-24 relative bg-[#070C12]">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 data-animate="heading" className="text-4xl md:text-5xl font-black mb-5">How Our Process Works</h2>
          </div>
          <div className="relative border-l-2 border-white/10 md:border-none pl-6 md:pl-0 ml-4 md:ml-0">
            <div data-animate="line-y" className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FD4F00] via-[#6C24FA] to-transparent -translate-x-1/2 origin-top" />
            <div className="flex flex-col gap-16 md:gap-24">
              {timeline.map((step, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-[-31px] md:left-1/2 md:-translate-x-1/2 top-6 md:top-auto w-4 h-4 rounded-full bg-[#070C12] border-[3px] border-[#FD4F00] shadow-[0_0_20px_rgba(253,79,0,0.9)] z-10 flex items-center justify-center" style={{ borderColor: step.color }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: step.color }} />
                  </div>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 md:text-left'}`}>
                    <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-6xl md:text-8xl font-black opacity-[0.04] text-white absolute top-2 right-6 pointer-events-none">{step.num}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 flex items-center gap-3">
                        {step.title}
                      </h3>
                      <div className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 relative z-10">{step.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESULTS YOU CAN EXPECT & STATS
      ══════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#070C12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Results You Can Expect</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every business starts from a different baseline, so we won't promise a specific number before we've run your audit. What we can tell you is what a well-run digital marketing program typically delivers within the first two quarters:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Measurable increases in organic search visibility for revenue-driving keywords",
                "Lower cost-per-lead through better ad targeting and landing page conversion",
                "A documented content and SEO asset library that keeps compounding",
                "Clear attribution showing which channels are actually driving booked calls or sales"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-[#FD4F00] shrink-0" />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="outline" size="sm" filled>
              View Case Studies & Results
            </Button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6C24FA]/10 blur-[100px] pointer-events-none rounded-full" />
            <h3 className="text-2xl font-bold mb-8 text-white">Digital Marketing Statistics That Matter in 2026</h3>
            <div className="space-y-6 relative z-10">
              <div className="border-l-2 border-[#6C24FA] pl-4">
                <p className="text-gray-300 text-sm leading-relaxed">Search engines remain the starting point for the large majority of online research before a purchase decision, which is why SEO and local search visibility still anchor most effective strategies.</p>
              </div>
              <div className="border-l-2 border-[#FD4F00] pl-4">
                <p className="text-gray-300 text-sm leading-relaxed">Businesses that combine SEO with paid advertising consistently see stronger overall conversion rates than those running either channel alone, because paid traffic fills the gap while organic rankings build.</p>
              </div>
              <div className="border-l-2 border-[#6C24FA] pl-4">
                <p className="text-gray-300 text-sm leading-relaxed">Mobile devices account for the majority of local searches, which is why fast-loading, mobile-first websites directly affect lead volume for local and home service businesses.</p>
              </div>
              <div className="border-l-2 border-[#FD4F00] pl-4">
                <p className="text-gray-300 text-sm leading-relaxed">Video and short-form content continue to gain share of attention across social platforms, making it a growing lever for brand awareness campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE & PRICING
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#070C12]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">WTechVerce vs. Typical Agencies</h2>
          <div className="overflow-x-auto mb-20 bg-white/[0.02] rounded-3xl border border-white/10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-white/10 text-gray-500 font-normal">Feature</th>
                  <th className="p-6 border-b border-white/10 text-gray-400">Typical Agency</th>
                  <th className="p-6 border-b border-[#FD4F00]/30 text-[#FD4F00] font-bold text-lg bg-[#FD4F00]/5">WTechVerce</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  { label: "Contract terms", bad: "12-month lock-in", good: "Month-to-month" },
                  { label: "Reporting", bad: "Raw data dumps", good: "Plain-language, revenue-tied" },
                  { label: "Strategy", bad: "One-size-fits-all package", good: "Built around your audit" },
                  { label: "Point of contact", bad: "Rotating account managers", good: "Dedicated strategist" },
                  { label: "Channels", bad: "Siloed (one team per channel)", good: "Coordinated across SEO, PPC, content" },
                  { label: "Pricing", bad: "Hidden or bundled", good: "Clear, itemized" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 border-b border-white/5 text-gray-300 font-medium">{row.label}</td>
                    <td className="p-6 border-b border-white/5 text-gray-500">{row.bad}</td>
                    <td className="p-6 border-b border-white/5 text-white font-semibold bg-[#FD4F00]/5">{row.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-[#6C24FA]/10 to-transparent p-8 md:p-12 rounded-3xl border border-[#6C24FA]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C24FA]/10 blur-[60px] pointer-events-none rounded-full" />
            <h2 className="text-3xl font-black mb-4 relative z-10">Digital Marketing Agency Pricing <span className="font-normal text-gray-400 block mt-2 text-xl">— What It Actually Costs</span></h2>
            <p className="text-gray-300 mb-8 leading-relaxed relative z-10 max-w-3xl">
              Pricing depends heavily on your industry, competition level, and how many channels you need running at once. A local service business with light competition needs a very different budget than a law firm competing in a major metro. We give you an exact quote after the audit — not a generic package price that may not fit your actual situation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-[#070C12] p-6 rounded-2xl border border-white/10 hover:border-[#6C24FA]/50 transition-colors">
                <h4 className="font-bold text-white mb-3 text-lg">Monthly Retainer</h4>
                <p className="text-sm text-gray-400">Most common model, usually scoped around specific deliverables (SEO, ads management, content volume).</p>
              </div>
              <div className="bg-[#070C12] p-6 rounded-2xl border border-white/10 hover:border-[#6C24FA]/50 transition-colors">
                <h4 className="font-bold text-white mb-3 text-lg">% of Ad Spend</h4>
                <p className="text-sm text-gray-400">Common for PPC-heavy accounts, usually 10–20% of managed ad spend.</p>
              </div>
              <div className="bg-[#070C12] p-6 rounded-2xl border border-white/10 hover:border-[#6C24FA]/50 transition-colors">
                <h4 className="font-bold text-white mb-3 text-lg">Project-Based</h4>
                <p className="text-sm text-gray-400">For one-time work like a website rebuild, CRO audit, or a single campaign launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERT TIPS & MISTAKES
      ══════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#070C12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black mb-8">Expert Tips Before You Hire</h2>
            <div className="space-y-6">
              {[
                "Ask what 'full service' actually includes. Some agencies list 6 services but only staff 2 well.",
                "Ask how reporting works before you sign. If they can't show you a sample report, that's a red flag.",
                "Check contract length. Agencies confident in their results rarely need to lock you in for a year.",
                "Ask who will actually work on your account. Not who pitched you — who executes day to day.",
                "Request examples from your industry. A law firm and an eCommerce brand need very different playbooks."
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FD4F00]/10 text-[#FD4F00] flex items-center justify-center shrink-0 border border-[#FD4F00]/20 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-300 text-sm pt-1 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-8">Common Mistakes Businesses Make</h2>
            <div className="space-y-6">
              {[
                { title: "Choosing based on price alone.", desc: "The cheapest quote often means the least experienced team or fewest hours on your account." },
                { title: "Skipping the audit step.", desc: "If an agency proposes a strategy before reviewing your current site and data, they're guessing." },
                { title: "Ignoring communication style.", desc: "If response times are slow during the sales process, they won't improve after you sign." },
                { title: "Signing long contracts without a trial.", desc: "Start with a shorter commitment if the agency offers one." },
                { title: "Not asking about client churn.", desc: "Ask how many clients they've retained over 12+ months. Long relationships prove results." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#6C24FA] pl-5 py-1">
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#070C12] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C24FA]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="sticky top-32">
                <div data-animate="badge" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/30 bg-[#6C24FA]/8 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#6C24FA] animate-pulse" />
                  <span className="text-sm font-semibold text-[#6C24FA]">FAQ</span>
                </div>
                <h2 data-animate="heading" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  Frequently Asked Questions
                </h2>
                <div className="text-gray-400 text-lg mb-8 max-w-md">
                  Everything you need to know about our digital marketing process, pricing, and how we deliver results.
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
            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          KEY TAKEAWAYS & CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#070C12] border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD4F00]/5 via-transparent to-[#6C24FA]/5" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Key Takeaways</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Coordinate every channel toward one goal</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Pricing based on audit, not generic packages</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Dedicated strategist, no lock-in</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Tailored strategy for every industry</span>
            </div>
          </div>

          <h2 data-animate="heading" className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
            <SplitReveal text="Get Your Free Marketing Audit" scrollTrigger />
          </h2>
          <div className="text-gray-400 text-xl mb-12 max-w-xl mx-auto">
            See exactly where your current marketing is losing leads — and what fixing it would look like — before you spend a dollar with us.
          </div>
          <div data-animate="card" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get My Free Audit <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/results" variant="outline" size="lg" filled>
              See Our Results
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
