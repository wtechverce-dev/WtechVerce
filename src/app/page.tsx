"use client";
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
  Play, Users, Shield, Rocket, ArrowRightCircle
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden font-sans">
      <NoiseTexture />
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO (Kept Intact as Requested)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-32 pb-24 flex flex-col items-center">
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 1: ABOUT (COLLAGE + TEXT)
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-[#02050A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Collage */}
          <div className="relative h-[600px] w-full">
            <div className="absolute top-10 left-10 w-2/3 h-[300px] rounded-[2rem] overflow-hidden border-2 border-white/5">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 right-10 w-2/3 h-[350px] rounded-[2rem] overflow-hidden border-2 border-white/5 z-10">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Meeting" className="w-full h-full object-cover" />
            </div>
            {/* Spinning Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 rounded-full bg-[#FD4F00] flex items-center justify-center shadow-[0_0_50px_rgba(253,79,0,0.4)]">
              <span className="text-white font-black text-xs tracking-widest text-center leading-tight">WTECH<br/>VERCE</span>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FD4F00] text-sm font-bold uppercase tracking-widest">
              About WTechVerce
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-white tracking-tight">
              Empowering business growth with <span className="text-[#FD4F00]">Creative Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              A digital marketing agency plans, builds, and runs your online marketing so you don't have to hire, train, and manage that team in-house. Most agencies fall into two traps: single-channel specialists or shallow generalists. We fix the parts that actually cost you money.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#FD4F00] hover:text-white transition-all duration-300">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 2: BENTO GRID SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#050810] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/20 bg-[#6C24FA]/10 text-[#6C24FA] text-sm font-bold uppercase tracking-widest mb-6">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Check our services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1: Wide Dark */}
            <div className="md:col-span-8 p-10 rounded-[2.5rem] bg-[#0A0F1A] border border-white/5 relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 w-2/3 h-full opacity-40 mix-blend-screen">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="SEO" className="w-full h-full object-cover object-left mask-image-linear" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 rounded-full bg-[#FD4F00] flex items-center justify-center text-white mb-8">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">SEO & Organic Growth</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Rank for the searches your customers actually type — not vanity keywords. We build high-ROI organic search strategies.</p>
                <Link href="/seo" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#FD4F00] transition-colors">
                  Explore <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Square Bright Accent */}
            <div className="md:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#6C24FA] to-[#450eac] relative overflow-hidden flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-8">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4">Web Development</h3>
                <p className="text-white/80 leading-relaxed">Fast, secure, mobile-first websites that never bottleneck sales.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-[40px] rounded-full pointer-events-none" />
            </div>

            {/* Card 3: Image Card */}
            <div className="md:col-span-4 p-10 rounded-[2.5rem] bg-[#0A0F1A] border border-white/5 relative overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-2xl font-black text-white mb-2">Paid Advertising</h3>
                <p className="text-gray-400 text-sm">Google Ads & Meta Ads built around your target CPA.</p>
              </div>
            </div>

            {/* Card 4: Wide Dark */}
            <div className="md:col-span-8 p-10 rounded-[2.5rem] bg-[#0A0F1A] border border-white/5 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FD4F00]/10 flex items-center justify-center text-[#FD4F00]">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-white">Content & Social Media</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Content that builds brand recognition and feeds your funnel. Blog posts and guides that answer real buyer questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 3: WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#6C24FA]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Why Choose Us" className="w-full h-auto object-cover" />
            </div>
            {/* Floating element */}
            <div className="absolute -right-10 top-20 bg-[#0A0F1A] border border-white/10 p-6 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FD4F00] flex items-center justify-center text-white font-black text-xl">150+</div>
              <span className="font-bold text-white leading-tight">Clients<br/>Served</span>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold uppercase tracking-widest mb-6">
              Why Choose Us
            </div>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tight mb-10">
              We fix the parts that are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">costing you money</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {[
                { title: "Transparent Reporting", desc: "Tied to revenue, not vanity metrics." },
                { title: "No Lock-In Contracts", desc: "Month-to-month. You stay because of results." },
                { title: "Dedicated Strategist", desc: "A real point of contact who knows your business." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#6C24FA]/20 flex items-center justify-center text-[#6C24FA] shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wide Glassmorphism Card */}
            <div className="p-8 rounded-3xl bg-[#0A0F1A]/80 backdrop-blur-xl border border-[#FD4F00]/30 shadow-[0_0_40px_rgba(253,79,0,0.1)]">
              <p className="text-white text-lg font-medium leading-relaxed italic">
                "Our last agency just sent reports we didn't understand." <br/>
                <span className="text-[#FD4F00] font-bold not-italic">— We report in plain language.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 4: MARQUEE & PORTFOLIO CAROUSEL
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#050810] overflow-hidden">
        {/* Massive Marquee */}
        <div className="mb-20">
          <MarqueeTicker
            items={["SKILL & WORKING AREA", "SKILL & WORKING AREA"]}
            speed={60}
            itemClassName="text-[8rem] font-black text-transparent opacity-30 uppercase [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
          <h2 className="text-5xl font-black text-white">Portfolio</h2>
          <Link href="/portfolio" className="text-[#FD4F00] font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scroll simulation */}
        <div className="flex gap-6 px-6 md:px-12 pb-10 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", title: "SaaS Dashboard Redesign", cat: "Web Design" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", title: "B2B Lead Generation", cat: "SEO & Ads" },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", title: "eCommerce Scaling", cat: "Full Funnel" },
            { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80", title: "Local Law Firm Dominance", cat: "Local SEO" },
          ].map((item, i) => (
            <div key={i} className="min-w-[350px] md:min-w-[450px] snap-center group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-[#0A0F1A] aspect-[4/3] relative mb-6">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-80" />
              </div>
              <span className="text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-2 block">{item.cat}</span>
              <h3 className="text-2xl font-black text-white group-hover:text-[#FD4F00] transition-colors">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 5: OUR PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative">
        <div className="text-center mb-24 relative">
          {/* Huge background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-transparent opacity-10 select-none pointer-events-none whitespace-nowrap" style={{ WebkitTextStroke: "2px #fff" }}>
            OUR
          </div>
          <h2 className="text-[10vw] font-black text-[#FD4F00] leading-none relative z-10">PROCESS</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Audit & Discovery", desc: "We audit your site, rankings, and competitors." },
            { num: "02", title: "Strategy Roadmap", desc: "You get a written plan: what channels and why." },
            { num: "03", title: "Execution", desc: "Our specialists build and launch the campaigns." },
            { num: "04", title: "Optimize", desc: "Monthly reports tied to real business goals." },
          ].map((step, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-[#0A0F1A] border border-white/5 hover:border-[#FD4F00]/50 transition-all duration-300">
              <span className="text-[#6C24FA] font-black text-3xl mb-8 block">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 6: PROJECTS GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#050810]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-[2.5rem] bg-[#f0f0f0] p-12 relative overflow-hidden group">
              <div className="absolute top-8 left-8 z-10">
                <span className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full">Leadstonk</span>
              </div>
              <img src="/projects/leadstonk.png" alt="Leadstonk" className="w-full h-full object-cover object-left-top rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-[2.5rem] bg-[#1A1A1A] p-12 relative overflow-hidden group">
              <div className="absolute top-8 left-8 z-10">
                <span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">Dental Clinic</span>
              </div>
              {/* Note: In a real app we'd have a dental project screenshot, using placeholder for now */}
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Dental" className="w-full h-full object-cover object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/portfolio" className="w-24 h-24 rounded-full bg-[#FD4F00] text-white flex items-center justify-center font-bold uppercase tracking-widest text-xs hover:scale-110 hover:shadow-[0_0_40px_rgba(253,79,0,0.5)] transition-all">
              View<br/>More
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 7: TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-white mb-8">What Our Clients Say</h2>
            <div className="text-8xl font-black text-white mb-6">4.9</div>
            <div className="flex gap-2 justify-center md:justify-start text-[#FD4F00] mb-4">
              <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Based on 150+ Reviews</p>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-[#0A0F1A] border border-white/5 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#6C24FA] rounded-full flex items-center justify-center text-white">
              <span className="text-4xl font-serif leading-none mt-4">"</span>
            </div>
            <p className="text-white text-xl leading-relaxed mb-8">
              WTechVerce rebuilt our SaaS platform and doubled our conversion rate in 3 months. The transparency in reporting and the coordination between their ads and SEO team is unlike any agency we've used.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <span className="text-sm text-gray-500">Founder, TechFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDIZTECH SECTION 8: LET'S WORK TOGETHER
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#050810] text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="w-full h-[300px] rounded-[3rem] overflow-hidden relative mb-16">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Absolute center circular button */}
            <Link href="/contact" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#FD4F00] text-white flex flex-col items-center justify-center font-black uppercase tracking-widest text-sm hover:scale-110 hover:shadow-[0_0_60px_rgba(253,79,0,0.6)] transition-all z-20 text-center leading-tight">
              Start Your <br/> Project
            </Link>
          </div>

          <h2 className="text-[8vw] font-black text-white leading-none tracking-tight">LET'S WORK<br/>TOGETHER</h2>
        </div>
      </section>
    </main>
  );
}
