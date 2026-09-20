"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollAnimations() {
  useEffect(() => {
    // Small delay to let DOM render
    const ctx = gsap.context(() => {

      // ── 1. SECTION FADE-IN + SLIDE-UP for all [data-gsap="fade"] ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='fade']").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60, filter: "blur(8px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)",
            duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── 2. STAGGER CARD GRIDS [data-gsap="stagger"] ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((container) => {
        const cards = container.querySelectorAll<HTMLElement>(":scope > *");
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // ── 3. COUNTER ANIMATIONS [data-count] ──
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; }
        });
      });

      // ── 4. PARALLAX BACKGROUNDS [data-gsap="parallax"] ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
        gsap.to(el, {
          yPercent: -25,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1.5 }
        });
      });

      // ── 5. HORIZONTAL SLIDE-IN from left/right ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='slide-left']").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='slide-right']").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });

      // ── 6. SCALE POP [data-gsap="pop"] ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='pop']").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });

      // ── 7. LINE DRAW for horizontal rules / borders ──
      gsap.utils.toArray<HTMLElement>("[data-gsap='line']").forEach((el) => {
        gsap.fromTo(el, { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1, ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" } });
      });

      // ── 8. TEXT REVEAL — [data-text-reveal] ──────────────────────────────
      // For server-rendered pages that can't use the <TextRevealHeading> component.
      // The element's inner HTML is wrapped with base (.trh-base) + overlay (.trh-overlay)
      // spans, then the clip-path animation is applied via GSAP ScrollTrigger.
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.utils.toArray<HTMLElement>("[data-text-reveal]").forEach((el) => {
        // Skip if already processed (e.g. hot-reload)
        if (el.dataset.textRevealDone === "1") return;
        el.dataset.textRevealDone = "1";

        // Capture original inner HTML
        const originalHTML = el.innerHTML;

        // Build the dual-layer structure
        el.innerHTML = `
          <span class="trh-base" aria-hidden="true">${originalHTML}</span>
          <span class="trh-overlay" aria-hidden="true">${originalHTML}</span>
          <span class="sr-only">${el.textContent}</span>
        `;

        const overlay = el.querySelector<HTMLElement>(".trh-overlay");
        if (!overlay) return;

        if (prefersReduced) {
          gsap.set(overlay, { clipPath: "inset(0 0% 0 0)" });
          return;
        }

        gsap.fromTo(
          overlay,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
      // ─────────────────────────────────────────────────────────────────────

    });

    return () => ctx.revert();
  }, []);

  return null;
}

