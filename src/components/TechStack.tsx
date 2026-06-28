"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Three.js", "Node.js", "PostgreSQL", "Supabase", "AWS", "OpenAI",
  "GraphQL", "Docker", "Vercel"
];

export default function TechStack() {
  return (
    <section className="py-32 bg-[var(--color-w-bg-card)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Powered by <span className="text-gradient-purple">Next-Gen</span> Tech
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We use enterprise-grade tools and frameworks to ensure your products are secure, scalable, and blazingly fast.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 bg-[var(--color-w-bg)] border border-white/10 rounded-full shadow-[0_0_15px_rgba(107,33,168,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] hover:border-[var(--color-w-orange)]/30 transition-all cursor-default"
            >
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
