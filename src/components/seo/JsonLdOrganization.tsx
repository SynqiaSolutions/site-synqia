import { companyData } from "@/data/companyData";
import { ITUMBIARA_COORDS } from "@/data/seoLocalData";
import { getFounderId, getOrganizationId, getSiteUrl } from "@/lib/jsonLd";

const siteUrl = getSiteUrl();
const siteName = companyData.companyName;
const firstUnit = companyData.units[0];
const organizationId = getOrganizationId();

function buildOrganizationJsonLd() {
  const sameAs: string[] = [];
  if (companyData.social.instagram?.url) sameAs.push(companyData.social.instagram.url);
  if (companyData.social.youtube?.url) sameAs.push(companyData.social.youtube.url);
  if (companyData.social.facebook?.url) sameAs.push(companyData.social.facebook.url);
  if (companyData.social.linkedin?.url) sameAs.push(companyData.social.linkedin.url);

  const localBusinessId = `${siteUrl}#localbusiness`;
  const websiteId = `${siteUrl}#website`;

  const organization: Record<string, unknown> = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/enterprise-logo-blue.png`,
    description:
      "Consultoria Tecnológica, infraestrutura, suporte empresarial e desenvolvimento de sistemas sob medida em Itumbiara-GO.",
    founder: { "@id": getFounderId() },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: companyData.phone,
        email: companyData.email,
        areaServed: "Itumbiara, GO, Brasil",
        availableLanguage: ["pt-BR"],
      },
    ],
    ...(sameAs.length > 0 && { sameAs }),
  };

  const localBusiness: Record<string, unknown> = {
    "@type": ["LocalBusiness", "ITConsultant"],
    "@id": localBusinessId,
    name: `${siteName} — Consultoria Tecnológica Itumbiara`,
    url: siteUrl,
    telephone: companyData.phone,
    email: companyData.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    image: `${siteUrl}/enterprise-logo-blue.png`,
    hasMap: firstUnit?.mapsLinkUrl,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Itumbiara", containedInPlace: { "@type": "State", name: "Goiás" } },
      { "@type": "AdministrativeArea", name: "Triângulo Mineiro" },
      { "@type": "AdministrativeArea", name: "Sudoeste de Goiás" },
      { "@type": "Country", name: "Brasil" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: ITUMBIARA_COORDS.lat,
      longitude: ITUMBIARA_COORDS.lng,
    },
    serviceType: [
      "Consultoria Tecnológica",
      "Suporte TI empresarial",
      "Desenvolvimento de sistemas sob medida",
      "Criação de sites",
    ],
    parentOrganization: { "@id": organizationId },
    address: {
      "@type": "PostalAddress",
      streetAddress: firstUnit?.address ?? "Itumbiara",
      addressLocality: "Itumbiara",
      addressRegion: "GO",
      addressCountry: "BR",
    },
  };

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: { "@id": organizationId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website],
  };
}

export default function JsonLdOrganization() {
  const jsonLd = buildOrganizationJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
