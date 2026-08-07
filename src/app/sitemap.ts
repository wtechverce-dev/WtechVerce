import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wtechverce.com";

  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/wordpress-development",
    "/services/ecommerce-development",
    "/services/ui-ux-design",
    "/services/website-redesign",
    "/services/seo",
    "/web-development-company-pakistan",
    "/portfolio",
    "/portfolio/custom-saas-platform-development",
    "/portfolio/wordpress-business-website-development",
    "/portfolio/ecommerce-website-development",
    "/portfolio/real-estate-web-application",
    "/portfolio/fitness-gym-management-software",
    "/portfolio/restaurant-ordering-system",
    "/process",
    "/contact",
    "/blog",
    "/blog/website-development-cost-pakistan-2026",
    "/blog/wordpress-vs-custom-website",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : (route.includes("/services") || route.includes("/web-development-company-pakistan") ? 0.9 : 0.8),
  }));
}
