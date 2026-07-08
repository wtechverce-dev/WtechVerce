"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieIconProps {
  src: string;        // path to JSON in /public/lottie/
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  playOnView?: boolean;
  className?: string;
  speed?: number;
}

export default function LottieIcon({
  src,
  loop = true,
  autoplay = true,
  playOnHover = false,
  playOnView = false,
  className = "w-16 h-16",
  speed = 1,
}: LottieIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animData, setAnimData] = useState<object | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Load JSON
  useEffect(() => {
    fetch(src)
      .then((r) => r.json())
      .then(setAnimData)
      .catch(console.error);
  }, [src]);

  // Set speed
  useEffect(() => {
    if (lottieRef.current) lottieRef.current.setSpeed(speed);
  }, [speed, animData]);

  // Play on view (IntersectionObserver)
  useEffect(() => {
    if (!playOnView || !containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
          lottieRef.current?.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [playOnView, hasPlayed]);

  if (!animData) return <div className={className} />;

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => playOnHover && lottieRef.current?.play()}
      onMouseLeave={() => playOnHover && lottieRef.current?.stop()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animData}
        loop={playOnView ? false : loop}
        autoplay={playOnHover || playOnView ? false : autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
