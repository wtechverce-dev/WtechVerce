"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { Send, Mail, MapPin, Globe, Phone } from "lucide-react";

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take 6–16 weeks depending on scope. We'll give you a precise timeline after the discovery call." },
  { q: "What is your pricing model?", a: "We offer fixed-price projects and retainer-based engagements. Pricing depends on complexity, team size, and timeline." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer dedicated maintenance plans, performance monitoring, and priority support for all our clients." },
  { q: "Can you work with our existing tech stack?", a: "Absolutely. We are full-stack experts and can integrate with or extend your existing infrastructure." },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields (Name, Email, Project Details).");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
          project: formData.service, // Map service to project for admin panel compatibility
          budget: formData.budget
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      <section className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* Glow */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#FF6B00]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8A2BE2]/8 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-sm font-medium text-[#FF6B00]">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Let&apos;s Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]">
              Together
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Tell us about it and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact Info Card */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "WTechVerse@gmail.com", color: "#FF6B00" },
                  { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "0313-7102600", color: "#8A2BE2" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Pakistan · Global Remote", color: "#FF8833" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Globe className="w-4 h-4" />, color: "#1DA1F2" },
                    { icon: <Globe className="w-4 h-4" />, color: "#0077B5" },
                    { icon: <Globe className="w-4 h-4" />, color: "#ffffff" },
                  ].map((social, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors">
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick FAQ</h3>
              <div className="flex flex-col gap-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-sm text-white mb-2">{faq.q}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-[#0a0a0a] border border-[#8A2BE2]/20 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(107,33,168,0.07)] relative overflow-hidden"
          >
            {status === 'success' && (
              <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-8">Tell Us About Your Project</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name *</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors placeholder-gray-600" placeholder="John Smith" disabled={status === 'loading'} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8A2BE2]/50 transition-colors placeholder-gray-600" placeholder="john@company.com" disabled={status === 'loading'} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company (Optional)</label>
                <input type="text" id="company" value={formData.company} onChange={handleChange} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors placeholder-gray-600" placeholder="Your Company Name" disabled={status === 'loading'} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Needed</label>
                <select id="service" value={formData.service} onChange={handleChange} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8A2BE2]/50 transition-colors appearance-none cursor-pointer" disabled={status === 'loading'}>
                  <option value="">Select a service...</option>
                  <option value="web">Web Development</option>
                  <option value="saas">SaaS Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="design">UI/UX Design</option>
                  <option value="software">Custom Software</option>
                  <option value="support">Maintenance & Support</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Budget Range</label>
                <select id="budget" value={formData.budget} onChange={handleChange} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors appearance-none cursor-pointer" disabled={status === 'loading'}>
                  <option value="">Select budget range...</option>
                  <option>Under $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000 – $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Details *</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={5} className="bg-[#050505] border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8A2BE2]/50 transition-colors resize-none placeholder-gray-600" placeholder="Describe your project, goals, timeline, and anything else we should know..." disabled={status === 'loading'}></textarea>
              </div>

              <Button type="submit" variant="primary" size="md" className="mt-4 w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {!status || status !== 'loading' && <Send className="w-5 h-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
