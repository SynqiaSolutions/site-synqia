import { buildBreadcrumbJsonLd, toAbsoluteUrl } from "@/lib/seo";

interface JsonLdRouteGraphProps {
  path: string;
  title: string;
  description: string;
  breadcrumb: Array<{ name: string; path: string }>;
  localBusinessName?: string;
  serviceName?: string;
}

export default function JsonLdRouteGraph({
  path,
  title,
  description,
  breadcrumb,
  localBusinessName,
  serviceName,
}: JsonLdRouteGraphProps) {
  const pageUrl = toAbsoluteUrl(path);
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${toAbsoluteUrl("/")}#website` },
    },
    {
      ...buildBreadcrumbJsonLd(breadcrumb),
      "@id": breadcrumbId,
    },
  ] as Array<Record<string, unknown>>;

  if (localBusinessName) {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#local-business-context`,
      name: localBusinessName,
      areaServed: breadcrumb[breadcrumb.length - 1]?.name || "Brasil",
      url: pageUrl,
    });
  }

  if (serviceName) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service-context`,
      name: serviceName,
      provider: { "@id": `${toAbsoluteUrl("/")}#organization` },
      areaServed: breadcrumb[breadcrumb.length - 1]?.name || "Brasil",
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
