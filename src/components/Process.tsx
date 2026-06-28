"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements to formulate a winning digital strategy.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description: "Creating comprehensive wireframes, user flows, and technical system architectures to ensure scalable foundations.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Crafting premium, interactive interfaces with high-end aesthetics, 3D elements, and seamless user experiences.",
  },
  {
    number: "04",
    title: "Development",
    description: "Writing clean, efficient, and scalable code using modern technologies like Next.js, React, and robust backend systems.",
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "Rigorous testing across devices, browsers, and load scenarios to ensure flawless performance and security.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "Smooth deployment to production environments followed by continuous monitoring, optimization, and dedicated support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[var(--color-w-bg)] relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-w-bg-card-hover) 1px, transparent 1px), linear-gradient(90deg, var(--color-w-bg-card-hover) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="text-gradient-primary">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic, transparent, and results-driven approach to bringing complex digital products to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-w-purple)] to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full bg-[var(--color-w-bg-card)] border border-white/5 p-8 rounded-3xl hover:border-[var(--color-w-purple)]/30 transition-colors relative group">
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                    <span className="text-gradient-orange md:hidden">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex flex-col items-center justify-center relative w-16 h-16 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-w-bg)] border-2 border-[var(--color-w-orange)] z-10 flex items-center justify-center relative shadow-[0_0_15px_var(--color-w-orange)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-w-purple)] animate-pulse"></div>
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
