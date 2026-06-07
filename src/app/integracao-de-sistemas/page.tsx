import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  HeroIntegracaoSection,
  SolucoesIntegracaoSection,
  CtaIntegracaoSection,
} from "@/components/sections/integracao/IntegracaoSections";
import { buildMetadataTemplate } from "@/lib/seo";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/integracao-de-sistemas",
  title: "Integração de Sistemas para Empresas | Synqia Itumbiara-GO",
  description:
    "Integração de sistemas empresariais via API, ERP, CRM e e-commerce. Conectamos ferramentas isoladas para PMEs de Itumbiara-GO e região.",
  keywords: [
    "integração de sistemas",
    "integração api empresas",
    "integração erp",
    "middleware empresarial",
    "integração itumbiara",
    "Synqia",
  ],
});

export default function IntegracaoDeSistemasPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroIntegracaoSection />
        <SolucoesIntegracaoSection />
        <CtaIntegracaoSection />
      </main>
      <Footer />
    </>
  );
}
