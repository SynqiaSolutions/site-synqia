import {
  Boxes,
  LayoutDashboard,
  Workflow,
  Users,
  Smartphone,
  ShoppingCart,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageSections";
import CtaWhatsappSection from "@/components/shared/PageSections";
import SectionHeader from "@/components/sections/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import {
  desenvolvimentoHero,
  solucoesDesenvolvimento,
  desenvolvimentoCta,
} from "@/data/desenvolvimentoData";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const icones = [Boxes, LayoutDashboard, Workflow, Users, Smartphone, ShoppingCart];

export function HeroDesenvolvimentoSection() {
  return (
    <PageHero
      eyebrow="Desenvolvimento Sob Medida"
      titulo={desenvolvimentoHero.titulo}
      subtitulo={desenvolvimentoHero.subtitulo}
      ctaPrimarioLabel="Falar sobre meu projeto"
      ctaSecundarioLabel="Solicitar análise técnica"
      whatsappMessage={WHATSAPP_MESSAGES.desenvolvimento}
    />
  );
}

export function SolucoesSection() {
  return (
    <section className="relative border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Soluções"
            titulo="O que desenvolvemos para o seu negócio"
            subtitulo="Cada solução é construída a partir do problema real — não de templates ou pacotes prontos. O objetivo é sempre melhorar a operação."
          />
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solucoesDesenvolvimento.map((solucao, index) => {
            const Icon = icones[index] ?? Boxes;
            return (
              <Reveal key={solucao.titulo} delay={index * 0.06} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {solucao.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solucao.descricao}
                  </p>
                  <div className="mt-5 shrink-0">
                    <p className="flex items-start gap-1 text-xs font-semibold leading-snug text-primary/80">
                      <Check className="mt-0.5 size-3 shrink-0 text-primary" aria-hidden />{" "}
                      {solucao.resultado}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {solucao.itens.map((item) => (
                        <li
                          key={item}
                          className="max-w-full rounded-full border border-hairline bg-background/60 px-3 py-1 text-xs font-medium leading-snug text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaDesenvolvimentoSection() {
  return (
    <CtaWhatsappSection
      titulo={desenvolvimentoCta.titulo}
      subtitulo={desenvolvimentoCta.subtitulo}
      botao={desenvolvimentoCta.botao}
      message={WHATSAPP_MESSAGES.desenvolvimento}
    />
  );
}
