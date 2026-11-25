import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api/",
          "/login",
          "/*?q=",
          "/*?*q=",
        ],
      },
    ],
    sitemap: "https://wtechverce.com/sitemap.xml",
  };
}

