"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";

const ParticleSphere = dynamic(() => import("@/components/3d/ParticleSphere"), { ssr: false, loading: () => null });

const projects = [
  {
    title: "LeadStonk.com",
    category: "B2B Lead Generation",
    description: "A comprehensive B2B lead generation platform focusing on high-quality B2B leads and automated outreach.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-[#FF6B00]/30 to-[#8A2BE2]/20",
    border: "#FF6B00",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "SmileCare Dental",
    category: "Dentist Clinic",
    description: "Modern dental clinic website with online appointment booking and secure patient portal.",
    tags: ["React", "TailwindCSS", "Firebase"],
    gradient: "from-[#8A2BE2]/30 to-[#FF6B00]/20",
    border: "#8A2BE2",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "GrowthBoost Agency",
    category: "Marketing Agency",
    description: "Creative digital marketing agency portfolio highlighting campaign success stories and analytics.",
    tags: ["Next.js", "Framer Motion", "Sanity CMS"],
    gradient: "from-[#FF8833]/20 to-[#6B21A8]/20",
    border: "#FF8833",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Elite Real Estate",
    category: "Real Estate",
    description: "Premium real estate platform with advanced property search and 3D virtual tours.",
    tags: ["React", "PostgreSQL", "AWS"],
    gradient: "from-[#6B21A8]/20 to-[#FF6B00]/20",
    border: "#6B21A8",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f28320be?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "PureFitness Gym",
    category: "Fitness Center",
    description: "Fitness center management system with membership subscriptions and class scheduling.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    gradient: "from-[#FF6B00]/20 to-[#8A2BE2]/30",
    border: "#FF6B00",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "UrbanBites",
    category: "Restaurant",
    description: "Restaurant ordering system with digital menu and real-time order tracking.",
    tags: ["React Native", "Node.js", "Socket.io"],
    gradient: "from-[#8A2BE2]/20 to-[#FF8833]/20",
    border: "#8A2BE2",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <GSAPScrollAnimations />

      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#8A2BE2]/10 rounded-full blur-[100px] pointer-events-none" />
        {/* ParticleSphere 3D */}
        <div className="absolute top-0 right-[-50px] w-[450px] h-[450px] opacity-50 pointer-events-none hidden lg:block">
          <ParticleSphere />
        </div>

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

    </main>
  );
}
