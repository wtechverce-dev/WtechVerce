import type { Metadata } from "next";
import GSAPScrollAnimations from "@/components/ui/GSAPScrollAnimations";

export const metadata: Metadata = {
  title: "Web & Software Development Services",
  description:
    "WTechVerce offers custom software development, web application engineering, SaaS platform development, eCommerce solutions, and UI/UX design for global businesses.",
  keywords: [
    "custom software development services",
    "web development services",
    "SaaS development company",
    "custom web application development",
    "UI UX design services",
    "enterprise software development",
    "Next.js development company",
    "hire software developers",
    "React development agency",
    "offshore development team",
  ],
  alternates: {
    canonical: "https://wtechverce.com/services",
  },
  openGraph: {
    title: "Web & Software Development Services | WTechVerce",
    description:
      "Explore WTechVerce's full range of engineering services — from custom software and SaaS platforms to full-stack web applications and UI/UX design.",
    url: "https://wtechverce.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce - Web & Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Software Development Services | WTechVerce",
    description:
      "Explore WTechVerce's full range of engineering services — from custom software and SaaS platforms to full-stack web applications and UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Global GSAP scanner — fires text-reveal on [data-text-reveal] elements */}
      <GSAPScrollAnimations />
      {children}
    </>
  );
}

