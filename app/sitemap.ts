import type { MetadataRoute } from "next";
import { skills } from "./data/skills";

const SITE_URL = "https://calebcarpenter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.8 },
    { path: "/skills", priority: 0.8 },
    ...skills.map((skill) => ({ path: "/skills/" + skill.slug, priority: 0.5 })),
  ];

  return pages.map(({ path, priority }) => ({
    url: SITE_URL + path,
    changeFrequency: "monthly",
    priority,
  }));
}
