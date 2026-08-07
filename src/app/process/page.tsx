"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "Deep Dive Into Your Vision",
    description: "We start with an in-depth discovery session to fully understand your business goals, target audience, technical constraints, and success metrics. No assumptions — only clarity.",
    duration: "1–2 Weeks",
    deliverables: ["Requirements document", "Market analysis", "Competitor audit", "Project roadmap"],
    color: "#FD4F00",
  },
  {
    num: "02",
    phase: "Planning",
    title: "Architecture & Strategy",
    description: "We design the complete technical architecture, database schema, API contracts, and user flows. Every decision is made intentionally to support scale, performance, and maintainability.",
    duration: "1–2 Weeks",
    deliverables: ["System architecture", "Wireframes", "Tech stack decision", "Sprint plan"],
    color: "#FF8833",
  },
  {
    num: "03",
    phase: "Design",
    title: "World-Class UI/UX",
    description: "Our designers craft visually stunning, user-centric interfaces. We use Figma for high-fidelity prototypes, establish a full design system, and iterate until perfection.",
    duration: "2–3 Weeks",
    deliverables: ["Design system", "UI screens", "Interactive prototype", "Design handoff"],
    color: "#8A2BE2",
  },
  {
    num: "04",
    phase: "SEO & Content",
    title: "SEO Architecture",
    description: "Before coding begins, we map out keyword strategies, semantic HTML structures, and internal linking models to ensure your site is built to rank from day one.",
    duration: "1 Week",
    deliverables: ["Keyword mapping", "URL structure", "Schema plan", "Content guidelines"],
    color: "#6B21A8",
  },
  {
    num: "05",
    phase: "Development",
    title: "Precision Engineering",
    description: "Our engineers bring the designs to life with clean, scalable, and thoroughly tested code. We operate in 2-week sprints with continuous deliveries so you see progress constantly.",
    duration: "4–12 Weeks",
    deliverables: ["Working application", "API integration", "CMS setup", "Admin dashboard"],
    color: "#16a34a",
  },
  {
    num: "06",
    phase: "QA & Testing",
    title: "Battle-Tested Quality",
    description: "Rigorous testing across devices, browsers, screen sizes, and load scenarios ensures your product is bulletproof before it reaches your users.",
    duration: "1–2 Weeks",
    deliverables: ["Bug-free release", "Performance audit", "Security check", "Mobile QA"],
    color: "#FD4F00",
  },
  {
    num: "07",
    phase: "Launch",
    title: "Smooth Deployment",
    description: "We handle deployment to production, configure CDN, SSL, and server scaling. We ensure zero downtime and a flawless transition to the live environment.",
    duration: "1 Week",
    deliverables: ["Live deployment", "Monitoring setup", "Analytics integration", "Final sign-off"],
    color: "#8A2BE2",
  },
  {
    num: "08",
    phase: "Growth",
    title: "Maintenance & Scaling",
    description: "Post-launch, we stay engaged to resolve issues, optimize performance, implement A/B testing, and support your ongoing business growth.",
    duration: "Ongoing",
    deliverables: ["Uptime monitoring", "Security patches", "Feature updates", "Conversion tracking"],
    color: "#FF8833",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#6B21A8]/10 rounded-full blur-[130px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-pulse" />
            <span className="text-sm font-medium text-[#8A2BE2]">Our Process</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
              Build Websites
            </span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            A battle-tested, transparent, and results-driven process that transforms
            complex ideas into polished digital products — on time, every time.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00] via-[#8A2BE2] to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-start gap-8 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className="flex-1 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top left, ${step.color}10, transparent 60%)` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: step.color }}>
                          Phase {step.num} · {step.phase}
                        </span>
                        <h3 className="text-2xl font-black text-white">{step.title}</h3>
                      </div>
                      <span className="text-xs px-3 py-1.5 rounded-full border text-gray-400" style={{ borderColor: `${step.color}40`, background: `${step.color}10` }}>
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>

                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex flex-col items-center w-16 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white z-10"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`, boxShadow: `0 0 20px ${step.color}60` }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Empty Side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to begin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
              Phase 01?
            </span>
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Book Discovery Call <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>

    </main>
  );
}
