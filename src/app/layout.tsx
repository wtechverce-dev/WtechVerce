import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import JsonLd from "@/components/JsonLd";

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
  // ─── Core SEO ───────────────────────────────────────────────────────────────
  metadataBase: new URL("https://wtechverce.com"),
  title: {
    default: "WTechVerce | Premium Web Development & AI Agency",
    template: "%s | WTechVerce",
  },
  description:
    "WTechVerce is a premium digital agency specializing in Web Development, SaaS Platforms, AI Solutions, and UI/UX Design. We build world-class digital products that drive real business growth.",
  keywords: [
    "WTechVerce",
    "web development agency",
    "SaaS development",
    "AI solutions",
    "UI UX design agency",
    "custom software development",
    "digital agency Pakistan",
    "Next.js development",
    "React development agency",
    "mobile app development",
    "enterprise web solutions",
    "startup web development",
    "full stack development",
    "hire web developers",
    "best web agency",
  ],
  authors: [{ name: "WTechVerce", url: "https://wtechverce.com" }],
  creator: "WTechVerce",
  publisher: "WTechVerce",
  category: "technology",

  // ─── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: "https://wtechverce.com",
  },

  // ─── Open Graph (Facebook, WhatsApp, LinkedIn previews) ────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wtechverce.com",
    siteName: "WTechVerce",
    title: "WTechVerce | Premium Web Development & AI Agency",
    description:
      "We build world-class web apps, SaaS platforms, and AI solutions. Partner with WTechVerce to launch your next big digital product.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce - Premium Web Development & AI Agency",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@wtechverce",
    creator: "@wtechverce",
    title: "WTechVerce | Premium Web Development & AI Agency",
    description:
      "We build world-class web apps, SaaS platforms, and AI solutions. Partner with WTechVerce today.",
    images: ["/og-image.png"],
  },

  // ─── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Verification (fill in after Google/Bing Search Console setup) ──────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "REPLACE_WITH_YANDEX_TOKEN",
  },

  // ─── App Metadata ────────────────────────────────────────────────────────────
  applicationName: "WTechVerce",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bebas.variable}`}>
      <head>
        <link rel="icon" type="image/jpeg" href="/wtechvercefavicon.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/wtechvercefavicon.jpeg" />
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#8A2BE2] selection:text-white font-sans flex flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
