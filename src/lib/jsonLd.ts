import { companyData } from "@/data/companyData";
import { founderContent } from "@/data/sobreData";
import { getSeoBaseUrl, toAbsoluteUrl } from "@/lib/seo";

export function getSiteUrl(): string {
  return getSeoBaseUrl().replace(/\/$/, "");
}

export function getOrganizationId(): string {
  return `${getSiteUrl()}#organization`;
}

export function getLocalBusinessId(): string {
  return `${getSiteUrl()}#localbusiness`;
}

export function getWebsiteId(): string {
  return `${getSiteUrl()}#website`;
}

export function getFounderId(): string {
  return `${getSiteUrl()}#founder`;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export function buildFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${toAbsoluteUrl("/")}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };
}

export function buildPersonJsonLd(options?: { pagePath?: string }) {
  const founderId = getFounderId();
  const pageUrl = options?.pagePath
    ? toAbsoluteUrl(options.pagePath)
    : toAbsoluteUrl("/sobre");

  return {
    "@type": "Person",
    "@id": founderId,
    name: founderContent.nome,
    jobTitle: founderContent.cargo,
    description: founderContent.bio,
    image: toAbsoluteUrl("/leomir-dias.jpeg"),
    url: pageUrl,
    worksFor: { "@id": getOrganizationId() },
    knowsAbout: founderContent.especialidades,
  };
}

export function buildContactPageJsonLd() {
  const homeUrl = toAbsoluteUrl("/");
  const contactUrl = `${homeUrl}#contato`;
  const firstUnit = companyData.units[0];

  return {
    "@type": "ContactPage",
    "@id": `${homeUrl}#contato`,
    url: contactUrl,
    name: `Contato — ${companyData.companyName}`,
    description:
      "Entre em contato com a Synqia para consultoria de TI, desenvolvimento de software e suporte empresarial em Itumbiara-GO.",
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${homeUrl}#webpage` },
    about: { "@id": getLocalBusinessId() },
    mainEntity: { "@id": getLocalBusinessId() },
    ...(firstUnit && {
      significantLink: firstUnit.mapsLinkUrl,
    }),
  };
}
