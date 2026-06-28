"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ── Lenis smooth scroll ──────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Delay so DOM is painted before we measure heights
    const init = setTimeout(() => {

      // ── 1. Cards fade-up (data-animate="card") ──────────────
      const cards = document.querySelectorAll("[data-animate='card']");
      gsap.set(cards, { y: 60, opacity: 0 });
      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0, opacity: 1,
            duration: 0.7, ease: "power3.out", stagger: 0.12,
          }),
      });

      // ── 3. Sub-text lines (data-animate="text") ─────────────
      const texts = document.querySelectorAll("[data-animate='text']");
      gsap.set(texts, { y: 28, opacity: 0 });
      ScrollTrigger.batch(texts, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0, opacity: 1,
            duration: 0.6, ease: "power2.out", stagger: 0.1,
          }),
      });

      // ── 4. Line/divider draw (data-animate="line") ──────────
      const lines = document.querySelectorAll("[data-animate='line']");
      gsap.set(lines, { scaleX: 0, transformOrigin: "left" });
      ScrollTrigger.batch(lines, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            scaleX: 1,
            duration: 0.8, ease: "power3.inOut", stagger: 0.1,
          }),
      });

      // ── 4b. Vertical Line draw (data-animate="line-y") ──────────
      const vLines = document.querySelectorAll("[data-animate='line-y']");
      gsap.set(vLines, { scaleY: 0, transformOrigin: "top" });
      ScrollTrigger.batch(vLines, {
        start: "top 80%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            scaleY: 1,
            duration: 1.5, ease: "power3.inOut", stagger: 0.1,
          }),
      });

      // ── 5. Number count-up badge (data-animate="badge") ─────
      const badges = document.querySelectorAll("[data-animate='badge']");
      gsap.set(badges, { scale: 0.7, opacity: 0 });
      ScrollTrigger.batch(badges, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            scale: 1, opacity: 1,
            duration: 0.5, ease: "back.out(1.7)", stagger: 0.1,
          }),
      });

      // Refresh ScrollTrigger to catch any layout shifts from hydration/fonts/3D canvases
      setTimeout(() => ScrollTrigger.refresh(), 500);
      setTimeout(() => ScrollTrigger.refresh(), 1500);

    }, 300);

    return () => {
      clearTimeout(init);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
