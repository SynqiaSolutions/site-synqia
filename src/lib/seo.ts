import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/env";

const FALLBACK_BASE_URL = "https://www.synqia.com.br";

export function getSeoBaseUrl(): string {
  return getBaseUrl() || FALLBACK_BASE_URL;
}

export function toAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSeoBaseUrl().replace(/\/$/, "")}${normalizedPath}`;
}

export function buildCanonical(path: string): string {
  return toAbsoluteUrl(path);
}

export function buildOgImageUrl(path: string, title: string): string {
  const url = new URL(toAbsoluteUrl(path));
  url.pathname = "/api/og";
  url.searchParams.set("title", title);
  return url.toString();
}

interface MetadataTemplateInput {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export function buildMetadataTemplate({
  path,
  title,
  description,
  keywords,
}: MetadataTemplateInput): Metadata {
  const canonical = buildCanonical(path);
  const ogImage = buildOgImageUrl(path, title);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "pt-BR": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}
