import { quemSomosContent } from "@/data/sobreData";
import {
  buildPersonJsonLd,
  getOrganizationId,
  getSiteUrl,
} from "@/lib/jsonLd";
import { buildBreadcrumbJsonLd, toAbsoluteUrl } from "@/lib/seo";

export default function JsonLdSobre() {
  const pageUrl = toAbsoluteUrl("/sobre");
  const siteUrl = getSiteUrl();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Sobre a Synqia",
        description: quemSomosContent.subtitulo,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": getOrganizationId() },
        mainEntity: { "@id": getOrganizationId() },
      },
      buildPersonJsonLd({ pagePath: "/sobre" }),
      {
        ...buildBreadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ]),
        "@id": `${pageUrl}#breadcrumb`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
