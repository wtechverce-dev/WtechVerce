"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles, Shield, Zap, Globe } from "lucide-react";

const GlobeScene = dynamic(() => import("@/components/3d/GlobeScene"), {
  ssr: false,
  loading: () => null,
});

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      {/* 3D Globe - right side */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-0 opacity-70">
        <GlobeScene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#070C12] via-[#070C12]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#070C12] via-transparent to-transparent" />

      {/* Cyan/Blue ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#6C24FA]/15 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#FD4F00]/10 rounded-full blur-[80px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FD4F00]/40 bg-[#FD4F00]/10 backdrop-blur-md mb-8 hover:bg-[#FD4F00]/20 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#FD4F00]" />
            <span className="text-sm font-medium text-gray-200 tracking-wide">
              World-Class Digital Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] mb-6"
          >
            We Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#FD4F00] to-[#6C24FA]">
              Futuristic
            </span>
            <br />
            Digital Products.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            From AI-powered web apps to enterprise SaaS platforms — W Techverce
            engineers premium digital experiences that scale globally.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { icon: <Shield className="w-3 h-3" />, text: "Enterprise Grade" },
              { icon: <Zap className="w-3 h-3" />, text: "Lightning Fast" },
              { icon: <Globe className="w-3 h-3" />, text: "Global Reach" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#FD4F00]/20 text-xs text-gray-300 hover:border-[#FD4F00]/50 transition-colors"
              >
                <span className="text-[#FD4F00]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/services" variant="primary" size="md">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/portfolio" variant="outline" size="md" filled>
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col gap-1 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FD4F00]/40 transition-all"
            >
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-600">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}
