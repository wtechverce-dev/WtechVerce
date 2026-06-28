import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "W Techverce | Premium Digital Agency",
  description: "W Techverce builds world-class web apps, SaaS platforms, and AI solutions. Enterprise-grade digital products for the modern era.",
  keywords: ["digital agency", "web development", "SaaS", "AI solutions", "UI/UX design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bebas.variable}`}>
      <body className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#8A2BE2] selection:text-white font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
