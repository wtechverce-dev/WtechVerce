"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Brand Identity", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" },
  { title: "Websites", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { title: "SEO", image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80" },
  { title: "Craft CMS", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
  { title: "Shopify", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
];

export function InteractiveServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isHoveringSection) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHoveringSection]);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#1A1A1A] relative overflow-hidden cursor-none"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => {
        setIsHoveringSection(false);
        setHoveredIndex(null);
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col relative z-10">
        {services.map((svc, i) => (
          <Link href="/services" key={i}>
            <div
              className="group border-b border-white/10 py-10 md:py-14 relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{ x: hoveredIndex === i ? 40 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3
                  className={`text-5xl md:text-[7rem] font-black tracking-tighter transition-colors duration-300 ${
                    hoveredIndex === i ? "text-white" : "text-[#333333]"
                  }`}
                >
                  {svc.title}
                </h3>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Image Reveal (Behind Cursor) */}
      <AnimatePresence>
        {hoveredIndex !== null && isHoveringSection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[300px] h-[380px] md:w-[400px] md:h-[480px] pointer-events-none rounded-[2rem] overflow-hidden shadow-2xl z-40 border-4 border-[#333333]"
            style={{
              x: mousePos.x - 200, // Roughly center horizontally
              y: mousePos.y - 240, // Roughly center vertically
            }}
          >
            <img
              src={services[hoveredIndex].image}
              alt={services[hoveredIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Lime Green Cursor */}
      <AnimatePresence>
        {isHoveringSection && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
            style={{
              x: mousePos.x,
              y: mousePos.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#ccff00] flex items-center justify-center shadow-2xl">
              <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-black stroke-[3]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
