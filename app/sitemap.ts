import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // If you have project slugs, list them dynamically later.
  ];
}
