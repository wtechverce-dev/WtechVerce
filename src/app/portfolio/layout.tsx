import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio — Real Projects, Real Results",
  description:
    "Explore WTechVerce's portfolio of real-world projects including web apps, SaaS platforms, AI solutions, and UI/UX designs delivered for clients worldwide.",
  keywords: [
    "web development portfolio",
    "digital agency portfolio",
    "SaaS projects",
    "AI projects portfolio",
    "UI UX design case studies",
    "WTechVerce work",
    "client projects",
    "best web design projects",
    "software development case studies",
    "startup website portfolio",
  ],
  alternates: {
    canonical: "https://wtechverce.com/portfolio",
  },
  openGraph: {
    title: "Our Portfolio | WTechVerce",
    description:
      "See the real-world products we have built — from SaaS platforms to AI-powered solutions. Check out WTechVerce's latest work.",
    url: "https://wtechverce.com/portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce Portfolio - Real Projects, Real Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | WTechVerce",
    description:
      "Real projects, real impact. See how WTechVerce builds digital products that drive growth.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
