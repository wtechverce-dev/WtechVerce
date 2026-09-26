"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Connect GSAP ticker to drive Lenis RAF loop at native refresh rates
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 4. Initial layout refresh once DOM paints
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route change, reset scroll position immediately & re-sync ScrollTrigger
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
