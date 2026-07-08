import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development, SaaS & AI Services",
  description:
    "WTechVerce offers premium Web Development, SaaS Platform Building, AI Integration, Custom Software, and UI/UX Design services. Get expert developers to scale your business.",
  keywords: [
    "web development services",
    "SaaS development company",
    "AI solutions agency",
    "UI UX design services",
    "custom software development",
    "Next.js development agency",
    "mobile app development",
    "hire full stack developers",
    "React developers for hire",
    "Node.js backend development",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services",
  },
  openGraph: {
    title: "Our Services | WTechVerce",
    description:
      "Explore WTechVerce's full range of digital services — from Web Apps and SaaS to AI-powered solutions and UI/UX Design.",
    url: "https://wtechverce.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce Services - Web, SaaS, AI, Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | WTechVerce",
    description:
      "From Web Development to AI Solutions — WTechVerce delivers premium digital services for startups and enterprises.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
