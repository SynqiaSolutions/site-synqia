import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPostsData";
import { seoLocalPages } from "@/data/seoLocalData";
import { getBaseUrl } from "@/lib/env";

const baseUrl = getBaseUrl() || "https://www.synqia.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const, lastModified: "2026-06-01T00:00:00.000Z" },
    { path: "/consultoria-tecnologica", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-06-01T00:00:00.000Z" },
    { path: "/desenvolvimento-de-sistemas", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-06-01T00:00:00.000Z" },
    { path: "/automacao-de-processos", priority: 0.88, changeFrequency: "weekly" as const, lastModified: "2026-06-07T00:00:00.000Z" },
    { path: "/integracao-de-sistemas", priority: 0.88, changeFrequency: "weekly" as const, lastModified: "2026-06-07T00:00:00.000Z" },
    { path: "/sobre", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-06-01T00:00:00.000Z" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const, lastModified: "2026-06-01T00:00:00.000Z" },
    { path: "/cookies", priority: 0.5, changeFrequency: "yearly" as const, lastModified: "2026-04-20T00:00:00.000Z" },
    { path: "/politica-de-privacidade", priority: 0.4, changeFrequency: "yearly" as const, lastModified: "2026-04-20T00:00:00.000Z" },
    { path: "/termos-de-uso", priority: 0.4, changeFrequency: "yearly" as const, lastModified: "2026-04-20T00:00:00.000Z" },
  ];

  const seoRoutes = seoLocalPages.map((page) => ({
    path: page.path,
    priority: 0.85,
    changeFrequency: "weekly" as const,
    lastModified: page.updatedAt,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: post.publishedAt,
  }));

  const routes = [...coreRoutes, ...seoRoutes, ...blogRoutes];

  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl.replace(/\/$/, "")}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
