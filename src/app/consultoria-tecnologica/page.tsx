import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  HeroConsultoriaSection,
  ServicosConsultoriaSection,
  CtaConsultoriaSection,
} from "@/components/sections/consultoria/ConsultoriaSections";
import { buildMetadataTemplate } from "@/lib/seo";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/consultoria-tecnologica",
  title:
    "Consultoria de TI para PMEs | Infraestrutura, Redes e Suporte | Synqia",
  description:
    "Consultoria Tecnológica em Itumbiara-GO: infraestrutura, redes, backup, segurança e suporte empresarial recorrente para PMEs. Diagnóstico gratuito com a Synqia.",
  keywords: [
    "consultoria tecnológica",
    "consultoria ti itumbiara",
    "infraestrutura ti",
    "suporte empresarial",
    "itumbiara go",
    "Synqia",
  ],
});

export default function ConsultoriaTiPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroConsultoriaSection />
        <ServicosConsultoriaSection />
        <CtaConsultoriaSection />
      </main>
      <Footer />
    </>
  );
}
