"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";


const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070C12]/90 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(107,33,168,0.15)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/">
          <Image src="/wtech.png" alt="wtechverce" width={200} height={96} priority className="h-24 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-12 md:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium relative group transition-colors ${
                pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FD4F00] to-[#6C24FA] rounded-full transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="sm">
            Start Project →
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070C12]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg font-medium border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Start Project →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
