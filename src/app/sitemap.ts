import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wtechverce.com";
  const lastModified = new Date();

  const entries: Array<{
    route: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
    // Homepage
    { route: "", changeFrequency: "weekly", priority: 1.0 },

    // Services Hub & Canonical Service Pages
    { route: "/services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/custom-software-development", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/web-development-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/mobile-app-development-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/saas-development-company", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/wordpress-development-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/ecommerce-development-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/ui-ux-design-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/website-redesign-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/services/seo-services", changeFrequency: "weekly", priority: 0.9 },
    { route: "/web-development-company-pakistan", changeFrequency: "weekly", priority: 0.9 },

    // Blog Hub & Pillar Guides
    { route: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { route: "/blog/what-is-custom-software-development", changeFrequency: "weekly", priority: 0.85 },
    { route: "/blog/custom-website-development-cost", changeFrequency: "weekly", priority: 0.85 },
    { route: "/blog/wordpress-vs-custom-website", changeFrequency: "weekly", priority: 0.85 },
    { route: "/blog/website-development-cost-pakistan-2026", changeFrequency: "monthly", priority: 0.8 },

    // Portfolio & Case Studies
    { route: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/custom-saas-platform-development", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/wordpress-business-website-development", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/ecommerce-website-development", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/real-estate-web-application", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/fitness-gym-management-software", changeFrequency: "monthly", priority: 0.8 },
    { route: "/portfolio/restaurant-ordering-system", changeFrequency: "monthly", priority: 0.8 },

    // Company Pages
    { route: "/process", changeFrequency: "monthly", priority: 0.7 },
    { route: "/contact", changeFrequency: "monthly", priority: 0.7 },
  ];

  return entries.map(({ route, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
