import { problemasContent } from "@/data/homeContentData";
import {
  buildContactPageJsonLd,
  buildFaqPageJsonLd,
  buildPersonJsonLd,
  getOrganizationId,
  getSiteUrl,
} from "@/lib/jsonLd";
import { toAbsoluteUrl } from "@/lib/seo";

interface ServiceJsonLd {
  "@type": "Service";
  "@id": string;
  name: string;
  description: string;
  areaServed: string;
  provider?: { "@id": string };
}

function buildServiceJsonLd(siteUrl: string): ServiceJsonLd[] {
  const organizationId = getOrganizationId();
  const provider = { "@id": organizationId };

  return [
    {
      "@type": "Service",
      "@id": `${siteUrl}#service-consultoria`,
      name: "Consultoria Tecnológica",
      description:
        "Infraestrutura, redes, backup, segurança e suporte empresarial recorrente em Itumbiara-GO.",
      areaServed: "Itumbiara, GO, Brasil",
      provider,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service-desenvolvimento`,
      name: "Desenvolvimento de Sistemas Sob Medida",
      description:
        "Sistemas internos, dashboards, automações e portais corporativos para PMEs.",
      areaServed: "Itumbiara, GO, Brasil",
      provider,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service-presenca-digital`,
      name: "Presença Digital",
      description:
        "Sites institucionais, landing pages e portais empresariais com SEO local.",
      areaServed: "Itumbiara, GO, Brasil",
      provider,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service-automacao`,
      name: "Automação de Processos",
      description:
        "Fluxos digitais, relatórios automáticos e rotinas que eliminam tarefas manuais repetitivas.",
      areaServed: "Itumbiara, GO, Brasil",
      provider,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service-integracao`,
      name: "Integração de Sistemas",
      description:
        "Integração via API entre ERPs, CRMs, e-commerce e sistemas internos.",
      areaServed: "Itumbiara, GO, Brasil",
      provider,
    },
  ];
}

export default function JsonLdHome() {
  const siteUrl = getSiteUrl();
  const homeUrl = toAbsoluteUrl("/");
  const faqItems = problemasContent.itens.map((item) => ({
    pergunta: item.pergunta,
    resposta: item.descricao,
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceJsonLd(siteUrl),
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: "Synqia — Consultoria Tecnológica em Itumbiara-GO",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": getOrganizationId() },
        hasPart: [
          { "@id": `${homeUrl}#faq` },
          { "@id": `${homeUrl}#contato` },
        ],
      },
      buildFaqPageJsonLd(faqItems),
      buildPersonJsonLd({ pagePath: "/sobre" }),
      buildContactPageJsonLd(),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
