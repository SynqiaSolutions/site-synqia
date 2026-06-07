"use client";

import SectionHeader from "../../shared/SectionHeader";
import Reveal from "../../shared/Reveal";
import { comoFuncionaContent } from "@/data/homeContentData";

export default function ComoFuncionaSection() {
  return (
    <section id="processo" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow={comoFuncionaContent.eyebrow}
            titulo={comoFuncionaContent.titulo}
            subtitulo={comoFuncionaContent.subtitulo}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {comoFuncionaContent.etapas.map((etapa, index) => (
            <Reveal key={etapa.titulo} delay={index * 0.08}>
              <article className="relative flex h-full flex-col">
                <div className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-2xl border border-hairline bg-card font-heading text-lg font-bold text-primary">
                  {etapa.numero}
                  <span
                    className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-md"
                    aria-hidden
                  />
                </div>

                {index < comoFuncionaContent.etapas.length - 1 && (
                  <div
                    className="absolute left-7 top-7 hidden h-px w-[calc(100%+1.5rem)] bg-linear-to-r from-primary/30 to-transparent lg:block"
                    aria-hidden
                  />
                )}

                <h3 className="font-heading text-base font-bold text-foreground">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {etapa.descricao}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
