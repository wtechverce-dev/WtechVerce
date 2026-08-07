"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="relative bg-[#02050A] pt-32 pb-10 overflow-hidden mt-auto border-t border-white/5">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#FD4F00] rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[#6C24FA] rounded-full blur-[150px] mix-blend-screen translate-x-32" />
      </div>

      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        
        {/* TOP CTA SECTION */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FD4F00] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
          >
            Ready to grow?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10"
          >
            Let's build your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] via-[#ff7e40] to-[#6C24FA]">
              digital empire.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" variant="primary" size="lg" className="!px-10 !py-5 !text-lg shadow-[0_10px_40px_rgba(253,79,0,0.3)] hover:shadow-[0_15px_50px_rgba(253,79,0,0.5)]">
              Start a Project ↗
            </Button>
          </motion.div>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Info (Left) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-6 flex items-center shrink-0">
              <img
                src="/wtech.png"
                alt="WTechVerce"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-sm font-medium">
              A premium digital agency engineering futuristic web experiences, e-commerce solutions, and conversion-driven brands.
            </p>
          </div>

          {/* Links Grid (Right) */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 opacity-40">Services</h4>
              <ul className="flex flex-col gap-4">
                {[
                  ["Web Development", "/services/web-development"],
                  ["WordPress Development", "/services/wordpress-development"],
                  ["Ecommerce Solutions", "/services/ecommerce-development"],
                  ["UI/UX Design", "/services/ui-ux-design"],
                  ["SEO Services", "/services/seo"],
                  ["Web Development Pakistan", "/web-development-company-pakistan"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block font-medium text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 opacity-40">Company</h4>
              <ul className="flex flex-col gap-4">
                {[["Services Hub", "/services"], ["Portfolio", "/portfolio"], ["Process", "/process"], ["Contact", "/contact"]].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href as string} className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block font-medium text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 opacity-40">Socials</h4>
              <ul className="flex flex-col gap-4">
                {["LinkedIn", "Twitter / X", "Instagram", "GitHub"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-white/60 hover:text-[#FD4F00] hover:translate-x-1 transition-all inline-block font-medium text-sm flex items-center gap-1">
                      {s} <span className="text-[10px] opacity-50">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs md:text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} WTechVerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="mailto:WTechVerse@gmail.com" className="text-white/40 hover:text-white text-xs md:text-sm font-medium transition-colors">
              WTechVerse@gmail.com
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
