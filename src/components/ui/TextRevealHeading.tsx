"use client";

/**
 * TextRevealHeading
 * ─────────────────
 * Renders a heading with the BOX-3 clip-path scroll-reveal effect.
 *
 * Structure (SEO-safe):
 *   <Tag>                  ← semantic heading, base muted colour (visible)
 *     <span aria-hidden>   ← absolute overlay, starts clipped, reveals on scroll
 *   </Tag>
 *
 * Usage:
 *   <TextRevealHeading as="h2" className="text-5xl font-black">
 *     Your heading text or <span className="text-[#FD4F00]">styled</span> JSX
 *   </TextRevealHeading>
 */

import { useEffect, useRef, ElementType, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  /** ScrollTrigger end value — how far up the viewport reveal completes (default "top 55%") */
  end?: string;
  /** ScrollTrigger start value (default "top bottom") */
  start?: string;
  /** Extra scrub factor (default 1) */
  scrub?: number | boolean;
  /** Additional class for the reveal overlay span */
  revealClassName?: string;
}

export default function TextRevealHeading({
  as: Tag = "h2",
  children,
  className = "",
  end = "top 55%",
  start = "top bottom",
  scrub = 1,
  revealClassName = "",
}: TextRevealHeadingProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const reveal = revealRef.current;
    if (!wrapper || !reveal) return;

    // Respect prefers-reduced-motion — skip animation, show final state
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(reveal, { clipPath: "inset(0 0% 0 0)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        reveal,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start,
            end,
            scrub,
          },
        }
      );
    }, wrapper);

    return () => ctx.revert();
  }, [start, end, scrub]);

  return (
    // @ts-expect-error – dynamic tag is safe here
    <Tag ref={wrapperRef} className={`text-reveal-heading relative ${className}`}>
      {/* Base layer: muted, always visible — preserves semantic text */}
      <span className="text-reveal-base" aria-hidden="true">
        {children}
      </span>

      {/* Reveal layer: overlay, starts hidden, reveals left → right */}
      <span
        ref={revealRef}
        className={`text-reveal-overlay ${revealClassName}`}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Screen-reader only text (single semantic heading) */}
      <span className="sr-only">{children}</span>
    </Tag>
  );
}
