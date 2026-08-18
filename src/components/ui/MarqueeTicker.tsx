"use client";

import { useRef } from "react";

interface MarqueeTickerProps {
  items?: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export default function MarqueeTicker({
  items = ["SEO", "PPC", "CONTENT MARKETING", "WEB DESIGN", "EMAIL MARKETING", "CRO", "SOCIAL MEDIA", "PAID ADS"],
  speed = 40,
  direction = "left",
  className = "",
  itemClassName = "",
  separator = "·",
}: MarqueeTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless loop
  const allItems = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden w-full select-none ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex gap-0 w-max"
        style={{
          animation: `marquee-ticker ${speed}s linear infinite ${direction === "right" ? "reverse" : "normal"}`,
        }}
      >
        {allItems.map((item, i) => (
          <span key={i} className={`flex items-center gap-4 px-6 whitespace-nowrap text-sm font-semibold tracking-widest uppercase ${itemClassName}`}>
            <span className="text-[#FD4F00] text-lg">{separator}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
