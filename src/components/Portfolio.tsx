"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LeadStonk.com",
    category: "B2B Lead Generation",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
    color: "from-[var(--color-w-purple)] to-transparent",
  },
  {
    title: "SmileCare Dental",
    category: "Dentist Clinic",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    color: "from-[var(--color-w-orange)] to-transparent",
  },
  {
    title: "GrowthBoost Agency",
    category: "Marketing Agency",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    color: "from-[#FF8833] to-transparent",
  },
  {
    title: "Elite Real Estate",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f28320be?auto=format&fit=crop&q=80",
    color: "from-[#8A2BE2] to-transparent",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[var(--color-w-bg-card)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Featured <span className="text-gradient-orange">Work</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Explore our latest projects showcasing high-end digital products and powerful web applications.
            </p>
          </div>
          <Button variant="outline" size="sm">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:h-[500px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} mix-blend-overlay opacity-50`}></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-4 text-white">
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
