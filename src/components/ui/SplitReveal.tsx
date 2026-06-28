"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitRevealProps {
  text: string;
  className?: string;
  wordClass?: string; // class applied per word span (for gradients)
  delay?: number;
  stagger?: number;
  once?: boolean;
  scrollTrigger?: boolean;
  type?: "heading" | "text";
}

export default function SplitReveal({
  text,
  className = "",
  wordClass = "",
  delay = 0,
  stagger,
  once = true,
  scrollTrigger = false,
  type = "heading",
}: SplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLSpanElement>(".word-inner");
    gsap.set(words, { y: "110%", opacity: 0 });

    const finalStagger = stagger !== undefined ? stagger : (type === "heading" ? 0.1 : 0.02);
    const finalDuration = type === "heading" ? 1.2 : 0.8;
    const finalEase = type === "heading" ? "power4.out" : "power3.out";

    const animateWords = () => {
      gsap.to(words, {
        y: "0%",
        opacity: 1,
        duration: finalDuration,
        ease: finalEase,
        stagger: finalStagger,
        delay: scrollTrigger ? 0 : delay,
      });
    };

    const ctx = gsap.context(() => {
      if (scrollTrigger) {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.create({
            trigger: container,
            start: "top 85%",
            once: once,
            onEnter: animateWords,
          });
        });
      } else {
        animateWords();
      }
    }, container);

    return () => ctx.revert();
  }, [delay, stagger, scrollTrigger, type, once]);

  const words = text.split(" ");

  return (
    <div 
      ref={containerRef} 
      className={`${className} flex flex-wrap`} 
      style={{ gap: "0.25em" }}
      data-animate={scrollTrigger ? "split-text" : undefined}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: "hidden", display: "inline-block", lineHeight: "1.15" }}
        >
          <span className={`word-inner inline-block ${wordClass}`}>{word}</span>
        </span>
      ))}
    </div>
  );
}
