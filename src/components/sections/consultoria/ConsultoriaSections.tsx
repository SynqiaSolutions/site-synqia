import { Server, Headphones, ShieldCheck, ClipboardList, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageSections";
import CtaWhatsappSection from "@/components/shared/PageSections";
import SectionHeader from "@/components/sections/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import {
  consultoriaHero,
  areasConsultoria,
  consultoriaCta,
} from "@/data/consultoriaData";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const icones = [Server, Headphones, ShieldCheck, ClipboardList];

export function HeroConsultoriaSection() {
  return (
    <PageHero
      eyebrow="Consultoria de TI"
      titulo={consultoriaHero.titulo}
      subtitulo={consultoriaHero.subtitulo}
      ctaPrimarioLabel="Falar com um especialista"
      ctaSecundarioLabel="Solicitar análise técnica"
      whatsappMessage={WHATSAPP_MESSAGES.consultoria}
    />
  );
}

export function ServicosConsultoriaSection() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Áreas de atuação"
            titulo="O que estruturamos na sua operação"
            subtitulo="Cada frente da consultoria tem um objetivo concreto: reduzir falhas, dar previsibilidade e fazer a tecnologia funcionar a favor do negócio."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {areasConsultoria.map((area, index) => {
            const Icon = icones[index] ?? Server;
            return (
              <Reveal key={area.titulo} delay={index * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
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
                    <Check className="size-3 shrink-0 text-primary" aria-hidden /> {area.resultado}
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

export function CtaConsultoriaSection() {
  return (
    <CtaWhatsappSection
      titulo={consultoriaCta.titulo}
      subtitulo={consultoriaCta.subtitulo}
      botao={consultoriaCta.botao}
      message={WHATSAPP_MESSAGES.consultoria}
    />
  );
}
