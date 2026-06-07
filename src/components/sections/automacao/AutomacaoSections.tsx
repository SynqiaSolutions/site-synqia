import { RefreshCw, Bell, FileSpreadsheet, Workflow, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageSections";
import CtaWhatsappSection from "@/components/shared/PageSections";
import SectionHeader from "@/components/sections/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import {
  automacaoHero,
  areasAutomacao,
  automacaoCta,
} from "@/data/automacaoData";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const icones = [Workflow, FileSpreadsheet, Bell, RefreshCw];

export function HeroAutomacaoSection() {
  return (
    <PageHero
      eyebrow="Automação de Processos"
      titulo={automacaoHero.titulo}
      subtitulo={automacaoHero.subtitulo}
      ctaPrimarioLabel="Falar sobre automação"
      whatsappMessage={WHATSAPP_MESSAGES.automacao}
    />
  );
}

export function SolucoesAutomacaoSection() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="O que automatizamos"
            titulo="Menos tarefa manual, mais operação fluida"
            subtitulo="Cada automação nasce de um processo real da empresa — não de templates genéricos que não se encaixam na rotina."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {areasAutomacao.map((area, index) => {
            const Icon = icones[index] ?? Workflow;
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

export function CtaAutomacaoSection() {
  return (
    <>
      <CtaWhatsappSection
        titulo={automacaoCta.titulo}
        subtitulo={automacaoCta.subtitulo}
        botao={automacaoCta.botao}
        message={WHATSAPP_MESSAGES.automacao}
      />
    </>
  );
}
