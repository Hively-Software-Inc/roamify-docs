import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
      ],
    },
    sitemap: `https://docs.getroamify.com/sitemap.xml`,
    host: "https://docs.getroamify.com",
  };
}
