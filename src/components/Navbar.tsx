"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Code, Cloud, Settings, LayoutTemplate, Server, Cpu } from "lucide-react";

const servicesList = [
  { label: "Software Dev", href: "/services/software-development", icon: <Cpu className="w-5 h-5 text-[#FD4F00]" /> },
  { label: "SaaS Dev", href: "/services/saas-development", icon: <Cloud className="w-5 h-5 text-[#6C24FA]" /> },
  { label: "Web Development", href: "/services/web-development", icon: <Code className="w-5 h-5 text-[#FF8833]" /> },
  { label: "Ecommerce Dev", href: "/services/ecommerce-development", icon: <Settings className="w-5 h-5 text-[#6B21A8]" /> },
  { label: "UI/UX Design", href: "/services/ui-ux-design", icon: <LayoutTemplate className="w-5 h-5 text-[#FD4F00]" /> },
  { label: "SEO Services", href: "/services/seo", icon: <Server className="w-5 h-5 text-[#4C1D95]" /> },
];

const navLinks = [
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "pt-5 px-4" : "pt-8 px-6"
      }`}
    >
      <div
        className={`w-full transition-all duration-700 flex items-center justify-between ${
          isScrolled
            ? "max-w-6xl bg-[#02050A]/85 backdrop-blur-3xl border border-white/10 rounded-full px-8 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            : "max-w-7xl bg-transparent px-4 md:px-8 py-2"
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="relative flex items-center shrink-0">
          <Image
            src="/wtech.png"
            alt="WTechVerce"
            width={400}
            height={140}
            priority
            className={`object-contain transition-all duration-500 ${isScrolled ? "h-16 w-auto" : "h-28 md:h-32 w-auto"}`}
          />
        </Link>

        {/* Desktop Links (Center) */}
        <nav className="hidden md:flex items-center gap-2 md:gap-4" onMouseLeave={() => setHoveredLink(null)}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.hasMegaMenu && pathname.startsWith("/services/"));
            const isHovered = hoveredLink === link.label;

            return (
              <div
                key={link.label}
                onMouseEnter={() => setHoveredLink(link.label)}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className={`relative px-5 py-2.5 flex items-center gap-1 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 z-10 ${
                    isActive || isHovered ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-20">{link.label}</span>
                  {link.hasMegaMenu && (
                    <ChevronDown className={`w-4 h-4 relative z-20 transition-transform duration-300 ${isHovered ? "rotate-180 text-white" : ""}`} />
                  )}
                  
                  {/* Active Tab Indicator (Sliding Pill) */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Indicator */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-white/5 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-[#0A0F1A]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl grid grid-cols-2 gap-4"
                      >
                        {servicesList.map((service, i) => (
                          <Link key={i} href={service.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/20 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white group-hover/item:text-[#FD4F00] transition-colors">{service.label}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block shrink-0">
          <Button href="/contact" variant="primary" size="sm" className="!py-3 !px-8 !text-sm">
            Start Project →
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-24 z-40 bg-[#07091A]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.8)] md:hidden overflow-y-auto max-h-[80vh]"
          >
            {/* Ambient glow inside menu */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FD4F00]/15 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-white font-bold tracking-widest uppercase text-sm"
                    >
                      {link.label}
                      <span className="text-[#FD4F00] opacity-50">→</span>
                    </Link>
                  </motion.div>
                  {link.hasMegaMenu && (
                    <div className="pl-4 mt-2 grid grid-cols-1 gap-2">
                      {servicesList.map((sub, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.15 + (j * 0.05) }}
                        >
                          <Link 
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-sm text-gray-300"
                          >
                            {sub.icon} {sub.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button href="/contact" variant="primary" size="md" className="w-full justify-center !py-4 rounded-xl shadow-[0_10px_30px_rgba(253,79,0,0.3)]">
                  Start Your Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
