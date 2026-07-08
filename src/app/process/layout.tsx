import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — How We Build World-Class Products",
  description:
    "Learn how WTechVerce works — from Discovery and Planning to Design, Development, and Launch. A proven, transparent process that delivers results on time.",
  keywords: [
    "web development process",
    "how we build software",
    "agile development process",
    "product development steps",
    "software development workflow",
    "design to launch process",
    "WTechVerce process",
    "how digital agencies work",
    "project management process",
    "web app development lifecycle",
  ],
  alternates: {
    canonical: "https://wtechverce.com/process",
  },
  openGraph: {
    title: "Our Process | WTechVerce",
    description:
      "From discovery to launch — see how WTechVerce delivers world-class digital products with a transparent, proven process.",
    url: "https://wtechverce.com/process",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WTechVerce Development Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | WTechVerce",
    description:
      "Transparent. Proven. Results-driven. Discover how WTechVerce builds your product from idea to launch.",
    images: ["/og-image.png"],
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
