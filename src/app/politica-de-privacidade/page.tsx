import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { companyData } from "@/data/companyData";
import {
  privacyPolicyTitle,
  getPrivacyPolicyContent,
} from "@/data/legalContent";

export const metadata: Metadata = {
  title: `${privacyPolicyTitle} | ${companyData.companyName}`,
  description: `Política de Privacidade da ${companyData.companyName}. Informações sobre coleta, uso e proteção de dados pessoais em conformidade com a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout
      title={privacyPolicyTitle}
      intro="Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      current={{ label: "Política de Privacidade", href: "/politica-de-privacidade" }}
    >
      <div
        className="[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-heading [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: getPrivacyPolicyContent() }}
      />
    </LegalLayout>
  );
}
