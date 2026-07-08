"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070C12] border-t border-white/6 py-16 mt-auto">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#FD4F00] to-[#6C24FA]">W</span>
              <span className="text-xl font-bold text-white">tech</span>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C24FA] to-[#FD4F00]">verce</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              World-class digital agency building futuristic web apps, AI solutions, and enterprise SaaS platforms.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["Web Development", "SaaS Development", "AI Solutions", "UI/UX Design"].map((s, i) => (
                <Link key={i} href="/services" className="text-gray-500 text-sm hover:text-white transition-colors">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">Company</h4>
            <div className="flex flex-col gap-2.5">
              {[["Portfolio", "/portfolio"], ["Process", "/process"], ["Contact", "/contact"]].map(([label, href], i) => (
                <Link key={i} href={href} className="text-gray-500 text-sm hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} W Techverce. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="mailto:WTechVerse@gmail.com" className="hover:text-white transition-colors">WTechVerse@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
