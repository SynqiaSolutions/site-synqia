import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLdHome from "@/components/seo/JsonLdHome";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import QuemSomosHomeSection from "@/components/sections/home/quem-somos/QuemSomosHomeSection";
import ProblemasSection from "@/components/sections/home/problemas/ProblemasSection";
import ServicosSection from "@/components/sections/home/servicos/ServicosSection";
import ComoFuncionaSection from "@/components/sections/home/como-funciona/ComoFuncionaSection";
import DiferenciaisSection from "@/components/sections/home/diferenciais/DiferenciaisSection";
import FundadorHomeSection from "@/components/sections/home/fundador/FundadorHomeSection";
import RegiaoSection from "@/components/sections/home/regiao/RegiaoSection";
import ContatoHomeSection from "@/components/sections/home/contato/ContatoHomeSection";

export default function Home() {
  return (
    <>
      <JsonLdHome />
      <Navbar />
      <main>
        {/* 1. Apresentação imediata da empresa */}
        <HeroSection />

        {/* 2. Quem é a Synqia — humanização */}
        <QuemSomosHomeSection />

        {/* 3. Problemas que resolvemos — identificação */}
        <ProblemasSection />

        {/* 4. Serviços — capacidade técnica */}
        <ServicosSection />

        {/* 5. Como trabalhamos — redução de incerteza */}
        <ComoFuncionaSection />

        {/* 6. Diferenciais — geração de preferência */}
        <DiferenciaisSection />

        {/* 7. Fundador — humanização da marca */}
        <FundadorHomeSection />

        {/* 8. Região de atendimento — SEO local + acessibilidade */}
        <RegiaoSection />

        {/* 9. Contato — início de conversa */}
        <ContatoHomeSection />
      </main>
      <Footer />
    </>
  );
}
