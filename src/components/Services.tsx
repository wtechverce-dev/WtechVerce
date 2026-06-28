"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Cpu, LayoutTemplate, Settings, Server } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites, enterprise web applications, and business portals built for scale and performance.",
    color: "from-[#FF6B00] to-[#FF8833]",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "SaaS Development",
    description: "Multi-tenant platforms, subscription systems, and scalable cloud-based software architectures.",
    color: "from-[#6B21A8] to-[#8A2BE2]",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "AI-powered applications, intelligent workflow automation, and custom chatbot integrations.",
    color: "from-[#FF6B00] to-[#8A2BE2]",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Web & UI/UX Design",
    description: "Premium landing pages, comprehensive design systems, and beautiful product interfaces.",
    color: "from-[#8A2BE2] to-[#FF6B00]",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom Software",
    description: "Internal business tools, workflow management platforms, and complex automation systems.",
    color: "from-[#FF8833] to-[#FF6B00]",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Hosting support, website maintenance, performance optimization, and robust security updates.",
    color: "from-[#4C1D95] to-[#6B21A8]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our <span className="text-gradient-purple">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end digital solutions that drive innovation and transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:bg-[#111111] transition-all duration-300"
            >
              {/* Animated Background Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 mb-6 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
