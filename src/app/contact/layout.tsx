import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project Today",
  description:
    "Ready to build something great? Contact WTechVerce to discuss your web development, SaaS, or AI project. We respond within 24 hours. Let's build together.",
  keywords: [
    "contact web development agency",
    "hire web developers",
    "start a web project",
    "get a website quote",
    "SaaS development inquiry",
    "AI development contact",
    "WTechVerce contact",
    "web agency Pakistan",
    "hire full stack team",
    "digital agency quote",
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
