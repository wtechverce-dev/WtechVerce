import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Hire Web & Software Developers",
  description:
    "Ready to build custom software, a SaaS product, or a high-performance web app? Contact WTechVerce. We serve clients across the US, UK, and worldwide. Free consultation.",
  keywords: [
    "hire custom software developers",
    "hire web developers US UK",
    "contact web development company",
    "offshore software development team",
    "custom software development quote",
    "SaaS development consultation",
    "WTechVerce contact",
    "hire full stack engineering team",
  ],
  alternates: {
    canonical: "https://wtechverce.com/contact",
  },
  openGraph: {
    title: "Contact Us | WTechVerce",
    description:
      "Have a project in mind? Reach out to WTechVerce and let's build your next digital product together. We respond within 24 hours.",
    url: "https://wtechverce.com/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact WTechVerce - Start Your Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | WTechVerce",
    description:
      "Let's build something amazing together. Contact WTechVerce — we respond within 24 hours.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
