import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  QuemSomosSection,
  FounderSection,
} from "@/components/sections/sobre/SobreSections";
import JsonLdSobre from "@/components/seo/JsonLdSobre";
import CtaWhatsappSection from "@/components/shared/PageSections";
import { buildMetadataTemplate } from "@/lib/seo";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/sobre",
  title: "Sobre a Synqia | Consultoria Tecnológica em Itumbiara-GO",
  description:
    "Conheça a Synqia: consultoria tecnológica em Itumbiara-GO focada em infraestrutura, suporte empresarial e desenvolvimento de sistemas sob medida para PMEs.",
  keywords: [
    "sobre synqia",
    "consultoria ti itumbiara",
    "empresa tecnologia itumbiara",
    "leomir dias synqia",
    "itumbiara go",
  ],
});

export default function SobrePage() {
  return (
    <>
      <JsonLdSobre />
      <Navbar />
      <main>
        <QuemSomosSection />
        <FounderSection />
        <CtaWhatsappSection
          titulo="Vamos conversar sobre o que sua empresa precisa?"
          subtitulo="Conte o cenário atual. Respondemos com clareza sobre o que pode ser feito e como trabalhamos."
          botao="Falar com um especialista"
          message={WHATSAPP_MESSAGES.default}
        />
      </main>
      <Footer />
    </>
  );
}
