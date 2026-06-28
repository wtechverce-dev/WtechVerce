"use client";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", 
  "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "OpenAI", 
  "Supabase", "AWS", "Figma", "Stripe"
];

export default function TechMarquee() {
  // Duplicate array to create a seamless loop
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-10 relative bg-[#070C12]">
      {/* Fade out edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#070C12] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#070C12] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_40s_linear_infinite]">
        {marqueeItems.map((tech, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-8 py-3 mx-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm whitespace-nowrap text-gray-400 font-medium text-lg hover:text-white hover:bg-white/10 hover:border-[#6C24FA]/50 hover:shadow-[0_0_20px_rgba(108,36,250,0.3)] transition-all duration-300"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
