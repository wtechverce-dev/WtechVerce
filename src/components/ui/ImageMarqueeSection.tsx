"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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

// Generate alternating rotations to mimic a curved/playful look
const getRotation = (index: number) => {
  const pattern = [4, -3, 2, -5, 3, -2];
  return pattern[index % pattern.length];
};

export function ImageMarqueeSection() {
  return (
    <section className="py-32 bg-white overflow-hidden flex flex-col items-center border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-[5.5rem] font-medium tracking-tighter text-black leading-[1.1]">
          Good design <br /> makes life better.
        </h2>
      </div>

      <div className="w-full relative mb-16 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 w-max px-4 py-8"
        >
          {marqueeItems.map((img, i) => (
            <div key={i} className="shrink-0">
              <div
                className="w-[280px] h-[320px] md:w-[340px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105"
                style={{ transform: `rotate(${getRotation(i)}deg)` }}
              >
                <img src={img} alt="Design Example" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center z-10">
        <Button href="/about" variant="primary" size="lg" filled>
          <span className="font-bold">Learn about us</span> <span className="ml-1 text-lg leading-none">↗</span>
        </Button>
      </div>
    </section>
  );
}
