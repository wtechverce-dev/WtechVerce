"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
];

// Duplicate the array to ensure seamless looping (3 sets)
const marqueeItems = [...images, ...images, ...images];

export function ImageMarqueeSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useAnimationFrame(() => {
    if (typeof window === "undefined") return;
    const centerX = window.innerWidth / 2;

    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rect = card.parentElement!.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = cardCenter - centerX;
      
      // Normalize distance (-1 at left edge of screen, 1 at right edge)
      // We use a wider denominator to smooth the curve across a larger apparent radius
      const normalized = distance / (window.innerWidth / 1.5);
      
      // Rotation: e.g. -25deg on left edge, 25deg on right edge
      const rotate = normalized * 25; 
      
      // Y Offset: parabola shape, so it curves downward at edges
      // Math.pow ensures distance in either direction results in a positive drop
      const y = Math.pow(normalized, 2) * 120;
      
      card.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
    });
  });

  return (
    <section className="py-32 bg-white overflow-hidden flex flex-col items-center border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 relative z-10">
        <h2 className="text-5xl md:text-[6rem] font-medium tracking-tighter text-black leading-[1]">
          Good design <br /> makes life better.
        </h2>
      </div>

      <div className="w-full relative h-[450px] md:h-[550px] overflow-hidden flex items-center">
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 w-max px-4 absolute"
        >
          {marqueeItems.map((img, i) => (
            <div key={i} className="shrink-0 w-[280px] h-[320px] md:w-[340px] md:h-[400px]">
              <div
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] will-change-transform bg-gray-100"
              >
                <img src={img} alt="Design Example" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center z-10 mt-8 relative">
        <Link href="/about">
          <button className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#bbf000] text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(204,255,0,0.2)]">
            <span className="text-lg">Learn about us</span> <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </button>
        </Link>
      </div>
    </section>
  );
}
