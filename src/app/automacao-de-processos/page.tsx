import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  HeroAutomacaoSection,
  SolucoesAutomacaoSection,
  CtaAutomacaoSection,
} from "@/components/sections/automacao/AutomacaoSections";
import { buildMetadataTemplate } from "@/lib/seo";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/automacao-de-processos",
  title: "Automação de Processos para Empresas | Synqia Itumbiara-GO",
  description:
    "Automação de processos empresariais em Itumbiara-GO e região. Fluxos digitais, relatórios automáticos, alertas e rotinas que eliminam retrabalho operacional.",
  keywords: [
    "automação de processos",
    "automação empresarial",
    "fluxos digitais",
    "automação itumbiara",
    "RPA empresas",
    "Synqia",
  ],
});

export default function AutomacaoDeProcessosPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroAutomacaoSection />
        <SolucoesAutomacaoSection />
        <CtaAutomacaoSection />
      </main>
      <Footer />
    </>
  );
}
