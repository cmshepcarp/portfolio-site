import { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://calebcarpenter.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://calebcarpenter.com/projects",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://calebcarpenter.com/skills",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `https://calebcarpenter.com/projects#${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const skillRoutes = skills.map((skill) => ({
    url: `https://calebcarpenter.com/skills/${skill.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...skillRoutes];
}
