"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
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
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (_err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[var(--color-w-bg)] relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let&apos;s Build the <span className="text-gradient-primary">Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your next big project? Get in touch with us to discuss your vision.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6 text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-w-bg)] flex items-center justify-center text-[var(--color-w-orange)] shadow-[0_0_15px_rgba(255,107,0,0.1)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email Us</p>
                    <a href="mailto:hello@wtechverce.com" className="text-white hover:text-[var(--color-w-purple)] transition-colors">hello@wtechverce.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-w-bg)] flex items-center justify-center text-[var(--color-w-purple)] shadow-[0_0_15px_rgba(107,33,168,0.1)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-white">Global Remote</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-[#0A0A0A] p-8 rounded-3xl border border-[var(--color-w-purple)]/20 shadow-[0_0_30px_rgba(107,33,168,0.05)] relative overflow-hidden"
          >
            {status === 'success' && (
              <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            )}
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name *</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-w-orange)] transition-colors" placeholder="John Doe" disabled={status === 'loading'} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-w-purple)] transition-colors" placeholder="john@example.com" disabled={status === 'loading'} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-sm font-medium text-gray-400">Project Type</label>
                <select id="project" value={formData.project} onChange={handleChange} className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-w-orange)] transition-colors appearance-none" disabled={status === 'loading'}>
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="saas">SaaS Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message *</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-w-purple)] transition-colors resize-none" placeholder="Tell us about your project..." disabled={status === 'loading'}></textarea>
              </div>

              <Button type="submit" variant="white" size="md" className="mt-4" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {!status || status !== 'loading' && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
