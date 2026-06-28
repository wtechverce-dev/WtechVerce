"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Code, Cloud, Cpu, LayoutTemplate, Settings, Server, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

const LaptopScene = dynamic(() => import("@/components/3d/LaptopScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#8A2BE2] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const allServices = [
  {
    icon: <Code className="w-7 h-7" />,
    title: "Web Development",
    description: "Custom websites, enterprise web applications, business portals, admin dashboards, and marketplace platforms built for performance and scale.",
    features: ["Custom Websites", "Enterprise Apps", "Admin Dashboards", "Marketplaces"],
    color: "#FF6B00",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "SaaS Development",
    description: "Multi-tenant SaaS platforms, subscription billing systems, CRM tools, and cloud-based software architectures that grow with you.",
    features: ["Multi-tenant Platforms", "Subscription Systems", "CRM Tools", "Cloud Architecture"],
    color: "#8A2BE2",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "AI Solutions",
    description: "AI-powered applications, workflow automation, intelligent chatbots, data processing systems, and lead generation tools.",
    features: ["AI-Powered Apps", "Workflow Automation", "AI Chatbots", "Data Processing"],
    color: "#FF8833",
  },
  {
    icon: <LayoutTemplate className="w-7 h-7" />,
    title: "Web & UI/UX Design",
    description: "Premium landing pages, complete design systems, product UI design, brand identity, and stunning interactive interfaces.",
    features: ["Landing Pages", "Design Systems", "Brand Identity", "Product Design"],
    color: "#6B21A8",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Custom Software",
    description: "Internal business tools, automation systems, workflow management platforms, and customer management systems built specifically for your needs.",
    features: ["Internal Tools", "Automation Systems", "Workflow Platforms", "CMS Solutions"],
    color: "#FF6B00",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Maintenance & Support",
    description: "Hosting support, continuous website maintenance, performance optimization, security updates, and dedicated technical support.",
    features: ["Hosting Support", "Maintenance Plans", "Performance Tuning", "Security Updates"],
    color: "#4C1D95",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section with 3D Laptop */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Gradient BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a15] to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6B21A8]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-pulse" />
              <span className="text-sm font-medium text-[#8A2BE2]">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
              What We
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
                Build For You
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              From futuristic web applications to enterprise AI systems — every project
              is crafted with meticulous attention to detail, cutting-edge technology,
              and a relentless focus on results.
            </p>

            <div className="flex flex-col gap-3">
              {["99.9% Uptime Guaranteed", "Enterprise-Grade Security", "Scalable Architecture", "Dedicated Support Team"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] md:h-[600px] w-full"
          >
            <LaptopScene />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Full-Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
                Capabilities
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Everything you need to build, launch, and scale a world-class digital product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-all duration-300 cursor-default"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at top left, ${service.color}15, transparent 60%)` }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white"
                    style={{ background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`, border: `1px solid ${service.color}40` }}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">W</span>
            <span className="text-lg font-bold text-white">tech</span>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#FF6B00]">verce</span>
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} W Techverce. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
