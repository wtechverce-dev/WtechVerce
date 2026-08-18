"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Code, Cloud, Cpu, LayoutTemplate, Settings, Server, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

const CyberCore = dynamic(() => import("@/components/3d/CyberCore"), {
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
    title: "Custom Software Development",
    slug: "software-development",
    description: "Enterprise-grade custom software, internal tools, and automation systems tailored to your complex business operations.",
    features: ["Enterprise Software", "API Integrations", "Database Design", "Cloud Architecture"],
    color: "#FD4F00",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "SaaS Development",
    slug: "saas-development",
    description: "Multi-tenant, secure, and highly scalable SaaS products engineered for high growth and subscription revenue.",
    features: ["Multi-Tenant Logic", "Stripe Billing", "User Management", "MVP to Scale"],
    color: "#8A2BE2",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Web Development",
    slug: "web-development",
    description: "Custom, high-performance websites and web applications built from scratch to perfectly align with your business goals.",
    features: ["Custom Web Apps", "React / Next.js", "Performance Optimized", "Scalable Architecture"],
    color: "#FD4F00",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "WordPress Development",
    slug: "wordpress-development",
    description: "Premium WordPress websites that are fast, secure, and easy for your team to manage without writing code.",
    features: ["Custom Themes", "Plugin Integration", "Headless WordPress", "Speed Optimization"],
    color: "#6C24FA",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Ecommerce Development",
    slug: "ecommerce-development",
    description: "Conversion-focused online stores built on WooCommerce or Shopify that turn visitors into paying customers.",
    features: ["Custom Storefronts", "Payment Integration", "Inventory Sync", "Conversion Optimized"],
    color: "#FF8833",
  },
  {
    icon: <LayoutTemplate className="w-7 h-7" />,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Data-backed design systems and user interfaces that look stunning and guide users seamlessly to conversion.",
    features: ["User Research", "Wireframing", "High-Fidelity UI", "Interactive Prototypes"],
    color: "#6B21A8",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Website Redesign",
    slug: "website-redesign",
    description: "Complete strategic overhauls of outdated websites to improve aesthetics, fix technical debt, and increase ROI.",
    features: ["UX Audit", "Modernization", "Content Migration", "No-Downtime Launch"],
    color: "#FD4F00",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "SEO Services",
    slug: "seo",
    description: "Data-driven Search Engine Optimization to dominate local and global search results, driving high-intent organic traffic.",
    features: ["Local SEO", "Technical SEO", "Content Strategy", "Link Building"],
    color: "#4C1D95",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

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

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
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

          {/* Right: 3D Cyber Core */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] md:h-[600px] w-full"
          >
            <CyberCore />
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
    </main>
  );
}
