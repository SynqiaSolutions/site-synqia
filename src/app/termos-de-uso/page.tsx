import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { companyData } from "@/data/companyData";
import { termsOfUseTitle, getTermsOfUseContent } from "@/data/legalContent";

export const metadata: Metadata = {
  title: `${termsOfUseTitle} | ${companyData.companyName}`,
  description: `Termos de Uso do site da ${companyData.companyName}. Condições de uso do site e dos serviços.`,
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <LegalLayout
      title={termsOfUseTitle}
      intro="As condições para utilização do nosso site e dos serviços oferecidos pela Synqia."
      current={{ label: "Termos de Uso", href: "/termos-de-uso" }}
    >
      <div
        className="[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-heading [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: getTermsOfUseContent() }}
      />
    </LegalLayout>
  );
}
