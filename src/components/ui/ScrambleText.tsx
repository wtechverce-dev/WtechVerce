"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1.2,
  tag: Tag = "span",
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = text.split("");
    const totalFrames = Math.round(duration * 60);
    const revealAt = (i: number) =>
      Math.floor((i / letters.length) * totalFrames * 0.7);

    let frame = 0;
    let raf: ReturnType<typeof setTimeout>;

    const tick = () => {
      el.textContent = letters
        .map((char, i) => {
          if (char === " ") return " ";
          if (frame >= revealAt(i) + Math.random() * 10)
            return char; // revealed
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      frame++;
      if (frame < totalFrames) {
        raf = setTimeout(tick, 1000 / 60);
      } else {
        el.textContent = text; // ensure final
      }
    };

    const timer = setTimeout(() => tick(), delay * 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(raf);
    };
  }, [text, delay, duration]);

  return (
    // @ts-ignore
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
