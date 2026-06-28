"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Aura SaaS Platform",
    category: "SaaS Development",
    description: "Multi-tenant subscription platform with real-time analytics, billing automation, and team collaboration tools.",
    tags: ["Next.js", "Supabase", "Stripe", "PostgreSQL"],
    gradient: "from-[#FF6B00]/30 to-[#8A2BE2]/20",
    border: "#FF6B00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "NexGen AI Dashboard",
    category: "AI Solutions",
    description: "Intelligent data visualization platform with GPT-powered insights and automated reporting pipelines.",
    tags: ["React", "OpenAI", "Python", "AWS"],
    gradient: "from-[#8A2BE2]/30 to-[#FF6B00]/20",
    border: "#8A2BE2",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "Vanguard Enterprise Portal",
    category: "Web Application",
    description: "Enterprise-grade internal management portal with role-based access, audit logs, and custom workflows.",
    tags: ["Next.js", "TypeScript", "Node.js", "Redis"],
    gradient: "from-[#FF8833]/20 to-[#6B21A8]/20",
    border: "#FF8833",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Orbit Design System",
    category: "UI/UX Design",
    description: "Complete design system with 200+ components, dark/light theming, and Figma-to-code pipeline.",
    tags: ["Figma", "React", "Storybook", "Tailwind"],
    gradient: "from-[#6B21A8]/20 to-[#FF6B00]/20",
    border: "#6B21A8",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "FlowBot Automation",
    category: "AI Solutions",
    description: "AI workflow automation engine connecting 50+ business tools with zero-code interface builder.",
    tags: ["Python", "LangChain", "FastAPI", "Docker"],
    gradient: "from-[#FF6B00]/20 to-[#8A2BE2]/30",
    border: "#FF6B00",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "CoreMarket Platform",
    category: "Web Development",
    description: "B2B marketplace with vendor management, escrow payments, and real-time inventory tracking.",
    tags: ["Next.js", "Stripe", "Elasticsearch", "AWS"],
    gradient: "from-[#8A2BE2]/20 to-[#FF8833]/20",
    border: "#8A2BE2",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#8A2BE2]/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-sm font-medium text-[#FF6B00]">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Work That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
              Speaks
            </span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            Every project is a story of partnership, innovation, and impact.
            Here&apos;s what we&apos;ve built for ambitious teams around the world.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.filter((p) => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-400 mb-2 block">{project.category}</span>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 flex-shrink-0 ml-4">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              </div>

              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ background: `${project.border}20`, color: project.border }}>
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-600 border border-white/5 rounded-full px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
              something amazing?
            </span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Let&apos;s turn your vision into a product that stands out.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start a Project <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      <footer className="bg-[#030303] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">W</span>
            <span className="text-lg font-bold text-white">tech</span>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#FF6B00]">verce</span>
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} W Techverce. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
