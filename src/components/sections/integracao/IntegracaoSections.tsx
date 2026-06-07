import { Cable, Cloud, ShoppingCart, GitMerge, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageSections";
import CtaWhatsappSection from "@/components/shared/PageSections";
import SectionHeader from "@/components/sections/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import {
  integracaoHero,
  areasIntegracao,
  integracaoCta,
} from "@/data/integracaoData";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const icones = [Cable, Cloud, ShoppingCart, GitMerge];

export function HeroIntegracaoSection() {
  return (
    <PageHero
      eyebrow="Integração de Sistemas"
      titulo={integracaoHero.titulo}
      subtitulo={integracaoHero.subtitulo}
      ctaPrimarioLabel="Falar sobre integrações"
      whatsappMessage={WHATSAPP_MESSAGES.integracao}
    />
  );
}

export function SolucoesIntegracaoSection() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Integrações"
            titulo="Conectamos o que hoje opera isolado"
            subtitulo="Eliminamos retrabalho, inconsistência de dados e dependência de exportações manuais entre ferramentas."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {areasIntegracao.map((area, index) => {
            const Icon = icones[index] ?? Cable;
            return (
              <Reveal key={area.titulo} delay={index * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60">
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {area.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.descricao}
                  </p>
                  <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary/80">
                    <Check className="size-3 shrink-0 text-primary" aria-hidden />{" "}
                    {area.resultado}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {area.itens.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-hairline bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaIntegracaoSection() {
  return (
    <>
      <CtaWhatsappSection
        titulo={integracaoCta.titulo}
        subtitulo={integracaoCta.subtitulo}
        botao={integracaoCta.botao}
        message={WHATSAPP_MESSAGES.integracao}
      />
    </>
  );
}
