import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // ─── Core SEO ───────────────────────────────────────────────────────────────
  metadataBase: new URL("https://wtechverce.com"),
  title: {
    default: "Digital Marketing Agency for Small Business | WTechVerce",
    template: "%s | WTechVerce",
  },
  description:
    "Full-service digital marketing agency for small businesses, SaaS, eCommerce & more. Transparent reporting, no lock-in contracts. Get a free audit.",
  keywords: [
    "digital marketing agency",
    "digital marketing agency services",
    "full service digital marketing agency",
    "top digital marketing agency",
    "digital marketing agency for small businesses",
    "digital marketing agency for small business",
    "agency digital marketing",
    "small business digital marketing agency",
    "digital marketing agency united states",
    "digital marketing agency pricing",
    "leading digital marketing agency",
    "digital marketing consulting agency",
    "WTechVerce",
  ],
  authors: [{ name: "WTechVerce", url: "https://wtechverce.com" }],
  creator: "WTechVerce",
  publisher: "WTechVerce",
  category: "marketing",

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
    title: "Digital Marketing Agency for Small Business | WTechVerce",
    description:
      "Full-service digital marketing agency for small businesses, SaaS, eCommerce & more. Transparent reporting, no lock-in contracts. Get a free audit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce - Digital Marketing Agency",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@wtechverce",
    creator: "@wtechverce",
    title: "Digital Marketing Agency for Small Business | WTechVerce",
    description:
      "Full-service digital marketing agency for small businesses, SaaS, eCommerce & more. Transparent reporting, no lock-in contracts. Get a free audit.",
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
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" type="image/jpeg" href="/wtechvercefavicon.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/wtechvercefavicon.jpeg" />
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        <JsonLd />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EGLJGCFRP6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGLJGCFRP6');
          `}
        </Script>
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

