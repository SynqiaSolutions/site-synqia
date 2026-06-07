import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/env";

const baseUrl = getBaseUrl() || "https://www.synqia.com.br";
const origin = baseUrl.replace(/\/$/, "");
const isProduction = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    host: origin,
    sitemap: `${origin}/sitemap.xml`,
    rules: isProduction
      ? {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/_next/", "/admin/"],
        }
      : {
          userAgent: "*",
          disallow: "/",
        },
  };
}
