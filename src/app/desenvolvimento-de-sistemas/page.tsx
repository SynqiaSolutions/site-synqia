import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  HeroDesenvolvimentoSection,
  SolucoesSection,
  CtaDesenvolvimentoSection,
} from "@/components/sections/desenvolvimento/DesenvolvimentoSections";
import { buildMetadataTemplate } from "@/lib/seo";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/desenvolvimento-de-sistemas",
  title: "Desenvolvimento de Sistemas sob Medida em Itumbiara-GO | Synqia",
  description:
    "Desenvolvimento de sistemas sob medida em Itumbiara-GO. Sistemas internos, dashboards, automações e portais corporativos para resolver problemas reais do negócio.",
  keywords: [
    "desenvolvimento de sistemas",
    "sistema sob medida itumbiara",
    "software empresarial",
    "automação processos",
    "itumbiara go",
    "Synqia",
  ],
});

export default function DesenvolvimentoDeSistemasPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroDesenvolvimentoSection />
        <SolucoesSection />
        <CtaDesenvolvimentoSection />
      </main>
      <Footer />
    </>
  );
}
