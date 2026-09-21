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
          "/*?q=",        // Block junk ?q={search_term_string} URLs
          "/*?*q=",       // Block any variation
        ],
      },
    ],
    sitemap: "https://wtechverce.com/sitemap.xml",
    host: "https://wtechverce.com",
  };
}

