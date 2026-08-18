"use client";
import Script from "next/script";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";
import HeroBackground from "@/components/ui/HeroBackground";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import NoiseTexture from "@/components/ui/NoiseTexture";
import ScrambleText from "@/components/ui/ScrambleText";
import Button from "@/components/ui/Button";
import { InteractiveServices } from "@/components/ui/InteractiveServices";
import { ImageMarqueeSection } from "@/components/ui/ImageMarqueeSection";
import {
  ArrowRight, ArrowUpRight, ChevronDown, ChevronUp,
  Search, Target, Megaphone, Code,
  CheckCircle, Star, ChevronLeft, ChevronRight,
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

// ─── FADE IN ─────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right" | "none";
}) {
  const y = direction === "up" ? 50 : 0;
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── PILL BUTTON (matches existing Button component style) ────
function PillBtn({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  if (filled) {
    return (
      <Link href={href}>
        <span className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-full overflow-hidden bg-gradient-to-r from-[#FD4F00] to-[#6C24FA] text-white hover:shadow-[0_0_30px_rgba(253,79,0,0.4)] transition-shadow duration-300">
          {children}
        </span>
      </Link>
    );
  }
  return (
    <Link href={href}>
      <span className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold rounded-full overflow-hidden border border-white text-white group hover:border-transparent transition-colors duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-[#FD4F00] to-[#6C24FA] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </span>
    </Link>
  );
}

// ─── FAQ ITEM ────────────────────────────────────────────────
const faqs = [
  { q: "What does a custom web development project include?", a: "Our custom web development includes full-stack engineering, scalable architecture, responsive UI design, and seamless API integrations tailored to your business." },
  { q: "How long does custom software development take?", a: "Timelines vary depending on complexity. A standard web application or SaaS MVP typically takes 8–12 weeks to design, develop, and launch." },
  { q: "What is the difference between a template website and a custom website?", a: "A template website restricts you to pre-built layouts and bloated code, hurting performance. A custom website is engineered from scratch for lightning-fast speeds, unique branding, and unconstrained scalability." },
  { q: "Can WTechVerce build custom SaaS software?", a: "Yes. We specialize in building secure, multi-tenant SaaS products using modern frameworks like Next.js, Node.js, and integrating complex features like Stripe billing." },
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
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-7 text-left gap-4">
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

// ─── TESTIMONIALS DATA ───────────────────────────────────────
const testimonials = [
  {
    quote: "WTechVerce rebuilt our SaaS platform and doubled our conversion rate in 3 months. The transparency in reporting and coordination is unlike any agency we've ever used.",
    name: "Sarah Jenkins",
    role: "Founder, TechFlow SaaS",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "Their SEO work took our dental clinic from page 5 to position 1 for our main keywords in under 4 months. Patient inquiries went up 3x. Best investment we've made.",
    name: "Dr. Khalid Raza",
    role: "Owner, Smile Dental Clinic",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The local SEO results were immediate. Within 60 days we were ranking in the Google 3-Pack for all our main service areas. Lead volume from organic more than tripled.",
    name: "Maria Santos",
    role: "Director, Santos Home Services",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
  },
];

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="min-h-screen bg-[#02050A] text-white overflow-x-hidden">
      <Script id="json-ld-organization" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "WTechVerce",
          "url": "https://wtechverce.com",
          "logo": "https://wtechverce.com/wtechvercefavicon.jpeg",
          "description": "A specialized web development and software development company driving digital transformation for modern businesses.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK"
          }
        })}
      </Script>
      <Script id="json-ld-website" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "WTechVerce",
          "url": "https://wtechverce.com"
        })}
      </Script>
      <NoiseTexture />
      <GSAPScrollAnimations />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-48 pb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 backdrop-blur-sm mb-10 hover:bg-[#FD4F00]/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FD4F00] animate-pulse" />
            <span className="text-[#FD4F00] text-sm font-semibold tracking-widest uppercase">
              <ScrambleText text="Development & Marketing Agency" delay={0.5} duration={1.5} />
            </span>
          </motion.div>

          <div className="mb-8 w-full flex flex-col items-center">
            <h1 className="sr-only">Web Development & Digital Marketing for Modern Businesses</h1>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white"
                aria-hidden="true"
              >
                Web Development &
              </motion.div>
            </div>
            <div className="overflow-hidden py-2">
              <motion.div
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#ff6a2a] to-[#FD4F00] bg-[length:200%] animate-gradient"
                aria-hidden="true"
              >
                Digital Marketing
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col items-center gap-8 max-w-3xl text-center"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              We are a full-service agency building and growing digital products. Specializing in <Link href="/services/web-development" className="text-white hover:text-[#FD4F00]">Custom Web Development</Link>, <Link href="/services/seo" className="text-white hover:text-[#FD4F00]">SEO Services</Link>, <Link href="/services/ecommerce-development" className="text-white hover:text-[#FD4F00]">Ecommerce</Link>, <Link href="/services/software-development" className="text-white hover:text-[#FD4F00]">Custom Software</Link>, and <Link href="/services/ui-ux-design" className="text-white hover:text-[#FD4F00]">UI/UX Design</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-4">
              <Button href="/contact" variant="primary" size="lg" filled>
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl"
          >
            {["Custom Software", "Web Development", "SaaS Development", "WordPress", "Ecommerce", "UI/UX Design", "SEO Services", "Website Redesign"].map((tag, i) => (
              <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }} whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium backdrop-blur-sm hover:border-[#FD4F00]/50 hover:text-[#FD4F00] hover:bg-[#FD4F00]/10 transition-all cursor-default">
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-0 w-full z-10 border-t border-white/8 py-4 bg-white/[0.02] backdrop-blur-sm">
          <MarqueeTicker
            items={["CUSTOM SOFTWARE", "WEB DEVELOPMENT", "SAAS PLATFORMS", "UI/UX DESIGN", "ECOMMERCE", "SEO", "WORDPRESS"]}
            speed={30} itemClassName="text-white/40"
          />
        </motion.div>
      </section>

      {/* TECH TICKER */}
      <div className="border-y border-white/8 py-7 bg-[#040810]">
        <MarqueeTicker
          items={["REACT.JS", "NEXT.JS", "NODE.JS", "TYPESCRIPT", "AWS", "TAILWIND CSS", "POSTGRESQL", "STRIPE", "MONGODB", "SHOPIFY", "WORDPRESS"]}
          speed={50} itemClassName="text-white/20 font-bold tracking-widest"
        />
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1: ABOUT — Image Collage + Content
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#02050A] relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#FD4F00]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: image collage */}
          <FadeIn direction="left">
            <div className="relative h-[520px] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[58%] h-[52%] rounded-[1.75rem] overflow-hidden border border-white/8 shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80" alt="WTechVerce team" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
                className="absolute bottom-0 right-0 w-[62%] h-[57%] rounded-[1.75rem] overflow-hidden border border-white/8 shadow-2xl z-10"
              >
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80" alt="WTechVerce meeting" className="w-full h-full object-cover" />
              </motion.div>

              {/* ANIMATED SPINNING BADGE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#6C24FA] flex items-center justify-center shadow-[0_0_40px_rgba(253,79,0,0.4)]">
                  {/* Spinning text inside the colored circle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 160 160" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                      <defs>
                        <path id="badge-text" d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" />
                      </defs>
                      <text fill="white" fontSize="12.5" letterSpacing="2.5" fontWeight="800" fontFamily="sans-serif">
                        <textPath href="#badge-text">WTECHVERCE • IT SOLUTION • WTECHVERCE • IT SOLUTION • </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  
                  {/* Inner white circle with logo */}
                  <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden p-3 shadow-lg">
                    <img src="/wtechvercefavicon.jpeg" alt="WTechVerce" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-6 bottom-16 bg-[#0A0F1A] border border-white/10 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C24FA] to-[#4a10c4] flex items-center justify-center text-white text-sm font-black">97</div>
                <div className="text-sm">
                  <div className="text-white font-bold">% Retention</div>
                  <div className="text-gray-500 text-xs">Client Rate</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* RIGHT: content */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/25 bg-[#FD4F00]/8 text-[#FD4F00] text-xs font-bold uppercase tracking-widest">
                About WTechVerce
              </span>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] text-white tracking-[-0.03em]">
                Empowering business growth with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#ff8c42]">Creative Solutions</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A true software development partner builds scalable, high-performance web applications so you don't have to hire and manage a massive in-house engineering team. We deliver custom SaaS, robust eCommerce, and flawless web architectures that solve real business bottlenecks.
              </p>
              <div className="flex gap-8 py-6 border-y border-white/6">
                {[{ val: "150+", label: "Clients Served" }, { val: "$2M+", label: "Revenue Generated" }, { val: "4.9★", label: "Average Rating" }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-white">{s.val}</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
              <PillBtn href="/contact" filled>
                Work With Us <ArrowRight className="w-5 h-5" />
              </PillBtn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 1.5: IMAGE MARQUEE SECTION
      ══════════════════════════════════════════ */}
      <ImageMarqueeSection />

      {/* ══════════════════════════════════════════
          SECTION 1.7: MEET THE TEAM — VIP
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#02050A] relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-[#FD4F00] rounded-full blur-[200px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C24FA] rounded-full blur-[200px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section header */}
          <FadeIn>
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/30 bg-[#FD4F00]/10 text-[#FD4F00] text-xs font-black uppercase tracking-widest mb-6">
                Meet The Team
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.95]">
                The people behind <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FD4F00, #6C24FA)" }}>
                  WTechVerce
                </span>
              </h2>
            </div>
          </FadeIn>

          {/* Team cards grid */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* ── CARD 1: Waheed Ahmed ── */}
            <FadeIn direction="left" delay={0.05}>
              <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/8 hover:border-[#FD4F00]/30 transition-all duration-500"
                style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #0d0820 100%)" }}>
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(253,79,0,0.08) 0%, transparent 70%)" }} />

                {/* Photo — FULL portrait */}
                <div className="relative h-[400px] md:h-[480px] overflow-hidden">
                  <img
                    src="/waheed.jpg"
                    alt="Waheed Ahmed"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0A0F1E 15%, rgba(10,15,30,0.2) 60%, transparent 100%)" }} />

                  {/* Floating rotating badge */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-5 right-5 w-16 h-16"
                    style={{ background: "conic-gradient(from 0deg, #FD4F00, #6C24FA, #FD4F00)", borderRadius: "50%", padding: "2px" }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0A0F1E] flex items-center justify-center">
                      <span className="text-[10px] font-black text-white text-center leading-tight">3+<br/>YRS</span>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-white mb-1">Waheed Ahmed</h3>
                  <p className="text-[#FD4F00] text-xs uppercase tracking-[0.3em] font-black mb-4">Founder & CEO · MERN Stack Developer</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Full-stack MERN developer building premium web products. Expert in React, Next.js, Node.js & MongoDB — turning ideas into high-converting digital experiences.
                  </p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {[{ l: "React.js", c: "#61DAFB" }, { l: "Next.js", c: "#fff" }, { l: "Node.js", c: "#68A063" }, { l: "MongoDB", c: "#4DB33D" }, { l: "Express", c: "#aaa" }, { l: "WordPress", c: "#21759b" }, { l: "GSAP", c: "#88CE02" }, { l: "Webflow", c: "#4353FF" }].map((t) => (
                      <span key={t.l} className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border"
                        style={{ color: t.c, borderColor: `${t.c}30`, background: `${t.c}10` }}>{t.l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── CARD 2: Umair Ali Raza ── */}
            <FadeIn direction="right" delay={0.1}>
              <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/8 hover:border-[#6C24FA]/30 transition-all duration-500"
                style={{ background: "linear-gradient(135deg, #07091A 0%, #0f0a1e 100%)" }}>
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(108,36,250,0.1) 0%, transparent 70%)" }} />

                {/* Photo — FULL portrait */}
                <div className="relative h-[400px] md:h-[480px] overflow-hidden">
                  <img
                    src="/umair.jpg"
                    alt="Umair Ali Raza"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #07091A 15%, rgba(7,9,26,0.2) 60%, transparent 100%)" }} />

                  {/* Floating rotating badge */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-5 right-5 w-16 h-16"
                    style={{ background: "conic-gradient(from 180deg, #6C24FA, #FD4F00, #6C24FA)", borderRadius: "50%", padding: "2px" }}
                  >
                    <div className="w-full h-full rounded-full bg-[#07091A] flex items-center justify-center">
                      <span className="text-[10px] font-black text-white text-center leading-tight">SEO<br/>PRO</span>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-white mb-1">Umair Ali Raza</h3>
                  <p className="text-[#6C24FA] text-xs uppercase tracking-[0.3em] font-black mb-4">SEO Expert · Local SEO</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Full-spectrum SEO strategist with deep expertise in <span className="text-white font-semibold">Local SEO</span>, and WordPress development. Drives organic traffic, top Google rankings, and measurable ROI for every client.
                  </p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {[{ l: "Local SEO", c: "#6C24FA" }, { l: "On-Page SEO", c: "#a78bfa" }, { l: "Link Building", c: "#FD4F00" }, { l: "E-Commerce SEO", c: "#f59e0b" }].map((t) => (
                      <span key={t.l} className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border"
                        style={{ color: t.c, borderColor: `${t.c}30`, background: `${t.c}10` }}>{t.l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 2: BENTO GRID — What We Do Best
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
              <div className="p-10 rounded-[2.5rem] bg-[#070D18] border border-white/5 relative overflow-hidden group h-full min-h-[340px] hover:border-[#FD4F00]/20 transition-colors duration-500">
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="SEO" className="w-full h-full object-cover" style={{ maskImage: "linear-gradient(to left, black, transparent)" }} />
                </div>
                <div className="relative z-10 max-w-sm">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 rounded-2xl bg-[#FD4F00] flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(253,79,0,0.4)]">
                    <Search className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-4">SEO & Organic Growth</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Rank for the searches your customers actually type — not vanity keywords. High-ROI organic strategies that compound over time.</p>
                  <PillBtn href="/services"><span className="flex items-center gap-2">Explore <ArrowRight className="w-4 h-4" /></span></PillBtn>
                </div>
              </div>
            </FadeIn>

            {/* Web Dev card — with background image */}
            <FadeIn delay={0.1} className="md:col-span-4">
              <div className="rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end h-full min-h-[340px] group">
                {/* Background image */}
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80"
                  alt="Web Development"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C24FA] via-[#6C24FA]/70 to-transparent" />
                {/* Content */}
                <div className="relative z-10 p-10">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
                    <Code className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-3">Web Development</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Fast, secure, mobile-first websites that never bottleneck your sales.</p>
                </div>
              </div>
            </FadeIn>

            {/* Paid Ads image card */}
            <FadeIn delay={0.15} className="md:col-span-4">
              <div className="rounded-[2.5rem] bg-[#070D18] border border-white/5 relative overflow-hidden h-[360px] group hover:border-[#FD4F00]/20 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Paid Ads" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-black text-white mb-2">Paid Advertising</h3>
                  <p className="text-gray-400 text-sm">Google Ads & Meta Ads built around your target CPA.</p>
                </div>
              </div>
            </FadeIn>

            {/* Content & Social — with background image */}
            <FadeIn delay={0.2} className="md:col-span-8">
              <div className="rounded-[2.5rem] relative overflow-hidden h-[360px] group hover:border-[#FD4F00]/20 transition-colors duration-500">
                {/* Background image */}
                <img
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1000&q=80"
                  alt="Content & Social Media"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/80 to-transparent" />
                {/* Content */}
                <div className="relative z-10 p-10 h-full flex items-center gap-8">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-2xl bg-[#FD4F00]/20 flex items-center justify-center text-[#FD4F00] shrink-0">
                    <Megaphone className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-4">Content & Social Media</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">Content that builds brand recognition and feeds your funnel. Blog posts and guides that answer real buyer questions.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[800px] h-[600px] bg-[#6C24FA]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <FadeIn direction="left">
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/8">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80" alt="Why WTechVerce" className="w-full h-auto object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -right-8 top-16 bg-[#0A0F1A] border border-white/10 px-6 py-5 rounded-2xl shadow-2xl animate-float">
                <div className="text-3xl font-black text-white">150+</div>
                <div className="text-gray-400 text-sm">Clients Served</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-8 bottom-16 bg-[#0A0F1A] border border-[#FD4F00]/20 px-6 py-5 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-3xl font-black text-[#FD4F00]">97%</div>
                <div className="text-gray-400 text-sm">Retention Rate</div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-7">Why Choose Us</span>
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
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#6C24FA]/20 flex items-center justify-center text-[#6C24FA] shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="p-8 rounded-3xl bg-[#0A0F1A]/80 backdrop-blur-xl border border-[#FD4F00]/25 shadow-[0_0_50px_rgba(253,79,0,0.08)]">
                <p className="text-white text-base leading-relaxed italic mb-3">"Our last agency just sent reports we didn't understand."</p>
                <span className="text-[#FD4F00] font-bold text-sm not-italic">— We report in plain language, tied to ROI.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3.5: INTERACTIVE EXPERTISE
      ══════════════════════════════════════════ */}
      <InteractiveServices />

      {/* ══════════════════════════════════════════
          SECTION 4: GIANT OUTLINE MARQUEE + PORTFOLIO
      ══════════════════════════════════════════ */}
      <section className="bg-[#040810] overflow-hidden pt-20">
        <div className="mb-16 overflow-hidden">
          <div className="flex gap-0 w-max" style={{ animation: "marquee-ticker 30s linear infinite" }}>
            {Array(6).fill("SKILL & WORKING AREA").map((t, i) => (
              <span key={i} className="flex items-center whitespace-nowrap pr-16">
                <span className="text-[clamp(4rem,10vw,9rem)] font-black leading-none uppercase tracking-tight text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)", display: "inline-block" }}>
                  {t}
                </span>
                <span className="ml-8 text-[clamp(4rem,10vw,9rem)] font-black leading-none text-[#FD4F00] opacity-20">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
          <FadeIn><h2 className="text-5xl font-black text-white">Portfolio</h2></FadeIn>
          <PillBtn href="/portfolio"><span className="flex items-center gap-2">View All <ArrowRight className="w-4 h-4" /></span></PillBtn>
        </div>

        <div className="flex gap-6 px-6 md:px-12 pb-20 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80", title: "SaaS Dashboard Redesign", cat: "Web Design & Development", color: "#6C24FA" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80", title: "B2B Lead Generation", cat: "SEO & Paid Ads", color: "#FD4F00" },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80", title: "eCommerce Scaling", cat: "Full Funnel Marketing", color: "#6C24FA" },
            { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=700&q=80", title: "Law Firm Local Dominance", cat: "Local SEO", color: "#FD4F00" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[340px] md:min-w-[460px] snap-center group cursor-pointer shrink-0">
              <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-[#0A0F1A] aspect-[4/3] relative mb-5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-70" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: item.color + "22", color: item.color, border: `1px solid ${item.color}44` }}>
                  {item.cat}
                </div>
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#FD4F00] transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5: OUR PROCESS
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] relative overflow-hidden">
        <div className="relative text-center mb-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase select-none pointer-events-none whitespace-nowrap text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
            OUR
          </div>
          <div className="relative z-10">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-6">How We Work</span>
              <h2 className="text-[clamp(4rem,11vw,10rem)] font-black text-[#FD4F00] leading-none tracking-tight">PROCESS</h2>
            </FadeIn>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { num: "01", title: "Audit & Discovery", desc: "We audit your site, rankings, ads, and competitors to find real gaps and opportunities.", icon: <Search className="w-6 h-6" />, color: "#FD4F00" },
            { num: "02", title: "Strategy Roadmap", desc: "You receive a detailed written plan: which channels, why them, and exact KPIs to track.", icon: <Target className="w-6 h-6" />, color: "#6C24FA" },
            { num: "03", title: "Execution", desc: "Our specialists build, launch, and manage every deliverable to the exact plan.", icon: <Megaphone className="w-6 h-6" />, color: "#FD4F00" },
            { num: "04", title: "Report & Optimize", desc: "Monthly reports tied to real revenue metrics, with continuous A/B testing and refinement.", icon: <Star className="w-6 h-6" />, color: "#6C24FA" },
          ].map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: step.color + "60" }}
              className="group p-8 rounded-[2rem] bg-[#070D18] border border-white/5 transition-all duration-500 h-full cursor-default"
              style={{ boxShadow: "0 0 0px rgba(0,0,0,0)" }}
            >
              {/* Step number + icon row */}
              <div className="flex items-start justify-between mb-10">
                <span className="text-5xl font-black leading-none" style={{ color: step.color, opacity: 0.2 }}>{step.num}</span>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: step.color + "18", color: step.color }}
                >
                  {step.icon}
                </motion.div>
              </div>
              {/* Thin accent line */}
              <div className="h-0.5 w-10 mb-6 rounded-full" style={{ background: step.color }} />
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6: CASE STUDIES — PREMIUM CARDS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#040810]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6C24FA]/25 bg-[#6C24FA]/10 text-[#6C24FA] text-xs font-bold uppercase tracking-widest mb-5">Featured Work</span>
              <h2 className="text-5xl font-black text-white">Case Studies</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadstonk card — full bleed premium */}
            <FadeIn delay={0.05} direction="left">
              <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer h-[540px]"
                style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 100%)" }}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-[2rem] p-[1px] z-0">
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "linear-gradient(135deg, #FD4F00, #6C24FA, #FD4F00)", backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }} />
                </div>
                {/* Ambient glows */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FD4F00]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FD4F00]/30 transition-all duration-700" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#6C24FA]/25 rounded-full blur-[100px] pointer-events-none" />
                {/* Full-bleed image top half */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  <img src="/projects/leadstonk.png" alt="Leadstonk"
                    className="w-full h-full object-cover object-top opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0d1a 40%, transparent 100%)" }} />
                </div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  {/* Top badges */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Case Study 01</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 bg-[#FD4F00] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(253,79,0,0.5)]">SEO</span>
                      <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Web Dev</span>
                    </div>
                  </div>
                  {/* Bottom content */}
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 group-hover:text-[#FD4F00] transition-colors duration-500">Leadstonk.com</h3>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">B2B Lead Generation platform with full-stack web development and aggressive SEO strategy.</p>
                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      {[["3x", "Lead Volume"], ["#1", "Rankings"], ["85%", "Bounce Drop"]].map(([val, label]) => (
                        <div key={label} className="text-center">
                          <div className="text-3xl font-black text-white mb-1 group-hover:text-[#FD4F00] transition-colors duration-300">{val}</div>
                          <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Dental Clinic card — full bleed premium */}
            <FadeIn delay={0.1} direction="right">
              <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer h-[540px]"
                style={{ background: "linear-gradient(135deg, #070D18 0%, #0f1a2e 100%)" }}>
                {/* Ambient glows */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#6C24FA]/25 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6C24FA]/40 transition-all duration-700" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FD4F00]/15 rounded-full blur-[80px] pointer-events-none" />
                {/* Full-bleed image */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Dental Clinic"
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #070D18 40%, transparent 100%)" }} />
                </div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  {/* Top badges */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Case Study 02</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 bg-[#6C24FA] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(108,36,250,0.5)]">SEO</span>
                      <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Marketing</span>
                    </div>
                  </div>
                  {/* Bottom content */}
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2 group-hover:text-[#6C24FA] transition-colors duration-500">Dental Clinic</h3>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">Local SEO and digital marketing strategy that tripled patient inquiries within 4 months.</p>
                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      {[["3x", "Patient Inquiries"], ["Pg.1", "Google Rank"], ["4mo", "Time to Results"]].map(([val, label]) => (
                        <div key={label} className="text-center">
                          <div className="text-3xl font-black text-white mb-1 group-hover:text-[#6C24FA] transition-colors duration-300">{val}</div>
                          <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-14 flex justify-center">
              <Button href="/portfolio" variant="primary" size="lg" filled>
                View All Projects <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7: TESTIMONIALS — ALL 5 VISIBLE
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#02050A] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest mb-5">Client Reviews</span>
                <h2 className="text-5xl font-black text-white leading-tight">What our clients<br/>are saying</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-right">
                  <div className="text-6xl font-black text-white">4.9</div>
                  <div className="flex gap-1 justify-end text-[#FD4F00] my-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">150+ Verified Reviews</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 5 testimonial cards — top row 3, bottom row 2 centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-7 rounded-[2rem] bg-[#070D18] border border-white/6 hover:border-[#FD4F00]/30 hover:shadow-[0_0_40px_rgba(253,79,0,0.07)] transition-all duration-500 group"
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#FD4F00] mb-5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
                {/* Accent corner */}
                <div className="absolute top-6 right-6 text-[#6C24FA]/40 text-4xl font-serif leading-none">&ldquo;</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-[66%] mx-auto">
            {testimonials.slice(3).map((t, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-7 rounded-[2rem] bg-[#070D18] border border-white/6 hover:border-[#6C24FA]/30 hover:shadow-[0_0_40px_rgba(108,36,250,0.07)] transition-all duration-500 group"
              >
                <div className="flex gap-1 text-[#FD4F00] mb-5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-[#FD4F00]/30 text-4xl font-serif leading-none">&ldquo;</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8: FAQ
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#040810]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/25 bg-[#FD4F00]/8 text-[#FD4F00] text-xs font-bold uppercase tracking-widest mb-6">Questions</span>
              <h2 className="text-5xl font-black text-white">Common Questions</h2>
            </div>
          </FadeIn>
          <div>
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9: LET'S WORK TOGETHER
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#02050A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Image banner with SPINNING RING CTA button */}
          <FadeIn>
            <div className="w-full h-[360px] rounded-[3rem] overflow-hidden relative mb-20">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80" alt="WTechVerce Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/55" />

              {/* SPINNING RING CIRCLE BUTTON */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <Link href="/contact">
                  <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#FD4F00] to-[#6C24FA] flex items-center justify-center shadow-[0_0_60px_rgba(253,79,0,0.5)] group hover:scale-105 transition-transform duration-300 cursor-pointer">
                    
                    {/* Spinning text */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 176 176" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                        <defs>
                          <path id="cta-text" d="M 88,88 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                        </defs>
                        <text fill="white" fontSize="13.5" letterSpacing="2.5" fontWeight="800" fontFamily="sans-serif">
                          <textPath href="#cta-text">START PROJECT • WTECHVERCE • GET IN TOUCH • WTECHVERCE • </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Inner white circle with logo */}
                    <div className="relative z-10 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-4">
                      <img src="/wtechvercefavicon.jpeg" alt="WTechVerce" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Big heading */}
          <FadeIn delay={0.1}>
            <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-black text-white leading-[0.95] tracking-[-0.04em] text-center">
              LET'S WORK<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>TOGETHER</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" filled>
                Get a Free Audit <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
