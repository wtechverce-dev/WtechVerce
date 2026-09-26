"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);

  // Only animate when section is in view to eliminate layout thrashing
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let animId: number;

    const updateArch = () => {
      const track = trackRef.current;
      if (!track || typeof window === "undefined") {
        animId = requestAnimationFrame(updateArch);
        return;
      }

      const centerX = window.innerWidth / 2;
      const divisor = window.innerWidth / 2.2;

      // 1 single layout read for the moving track
      const trackLeft = track.getBoundingClientRect().left;
      const cardWidth = window.innerWidth < 768 ? 280 : 340;
      const gap = 48; // gap-12 = 48px

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        // Calculate position mathematically from trackLeft + index offset
        const cardCenter = trackLeft + i * (cardWidth + gap) + cardWidth / 2;
        const distance = cardCenter - centerX;

        const normalized = distance / divisor;
        const rotate = Math.max(-40, Math.min(40, normalized * 40));
        const y = Math.min(280, Math.pow(normalized, 2) * 280);

        card.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotate}deg)`;
      });

      animId = requestAnimationFrame(updateArch);
    };

    animId = requestAnimationFrame(updateArch);
    return () => cancelAnimationFrame(animId);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#02050A] overflow-hidden flex flex-col items-center border-y border-white/5 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 relative z-10">
        <h2 className="text-5xl md:text-[6rem] font-medium tracking-tighter text-white leading-[1]">
          Good design <br /> makes life better.
        </h2>
      </div>

      <div className="w-full relative h-[600px] md:h-[700px] overflow-hidden flex items-center -mt-12">
        <motion.div
          ref={trackRef}
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 w-max px-4 absolute"
          style={{ willChange: "transform" }}
        >
          {marqueeItems.map((img, i) => (
            <div key={i} className="shrink-0 w-[280px] h-[320px] md:w-[340px] md:h-[400px]">
              <div
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/5 border border-white/10"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={img}
                  alt="WTechVerce Design Excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center z-10 mt-8 relative">
        <Link href="/#about">
          <button className="flex items-center gap-2 bg-gradient-to-br from-[#FD4F00] to-[#6C24FA] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(253,79,0,0.3)]">
            <span className="text-lg">Learn about us</span> <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </button>
        </Link>
      </div>
    </section>
  );
}
