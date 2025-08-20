import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://calebcarpenter.com/sitemap.xml",
    host: "https://calebcarpenter.com",
  };
}
