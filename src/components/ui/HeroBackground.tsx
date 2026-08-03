"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the spotlight so it lags slightly behind the cursor
  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Set initial position to center
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Dynamic Mouse Spotlight */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(108, 36, 250, 0.25) 0%, rgba(253, 79, 0, 0.1) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Abstract Glowing Orbs (Slow Moving) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-1/4 w-[600px] h-[600px] rounded-full bg-[#FD4F00] blur-[150px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-1/4 w-[500px] h-[500px] rounded-full bg-[#6C24FA] blur-[150px]"
      />

      {/* Grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", 
          backgroundSize: "60px 60px", 
          backgroundPosition: "center center" 
        }} 
      />
      
      {/* Vignette effect to darken the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#070C12_100%)] opacity-80" />
    </div>
  );
}
