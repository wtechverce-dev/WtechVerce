"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1.2 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable heavy canvas and mouse tracking on desktop
    const desktop = window.innerWidth >= 768 && !("ontouchstart" in window);
    setIsDesktop(desktop);

    if (!desktop) return;

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // High-performance canvas particle network — DESKTOP ONLY
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(24, Math.floor((width * height) / 60000));
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
      });
    }

    let animationFrameId: number | null = null;
    let isVisible = true;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const onPointerMove = (e: MouseEvent) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const maxDistSq = 110 * 110;
    const maxMouseDistSq = 160 * 160;

    const draw = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(253, 79, 0, 0.7)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.07 - dist / 1600})`;
            ctx.stroke();
          }
        }

        const dxMouse = p.x - currentMouseX;
        const dyMouse = p.y - currentMouseY;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < maxMouseDistSq) {
          const distMouse = Math.sqrt(distMouseSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(currentMouseX, currentMouseY);
          ctx.strokeStyle = `rgba(108, 36, 250, ${0.16 - distMouse / 1100})`;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (!animationFrameId) animationFrameId = requestAnimationFrame(draw);
        } else if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);
    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#070C12]"
      style={{ willChange: "transform" }}
    >
      {/* Particle Canvas — Desktop only */}
      <canvas
        ref={canvasRef}
        className="hidden md:block absolute inset-0 w-full h-full opacity-100"
      />

      {/* Dynamic Mouse Spotlight — Desktop only */}
      {isDesktop && (
        <motion.div
          className="hidden md:block absolute w-[800px] h-[800px] rounded-full opacity-70 pointer-events-none mix-blend-screen"
          style={{
            x: spotlightX,
            y: spotlightY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(108, 36, 250, 0.25) 0%, rgba(253, 79, 0, 0.12) 35%, transparent 65%)",
            willChange: "transform",
          }}
        />
      )}

      {/* Ambient Glow Orbs — Fast pure CSS gradients, zero layout shift */}
      <div
        className="absolute top-[5%] left-[5%] w-[380px] h-[380px] md:w-[650px] md:h-[650px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(253, 79, 0, 0.2) 0%, rgba(253, 79, 0, 0.03) 45%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[5%] right-[5%] w-[340px] h-[340px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108, 36, 250, 0.22) 0%, rgba(108, 36, 250, 0.03) 45%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#070C12_100%)] opacity-40 pointer-events-none" />
    </div>
  );
}
