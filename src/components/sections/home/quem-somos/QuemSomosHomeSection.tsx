"use client";

import { CheckCircle2 } from "lucide-react";
import Reveal from "../../shared/Reveal";
import { quemSomosHomeContent } from "@/data/homeContentData";

export default function QuemSomosHomeSection() {
  return (
    <section
      id="quem-somos"
      className="relative scroll-mt-24 py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              {quemSomosHomeContent.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-foreground md:text-4xl">
              {quemSomosHomeContent.titulo}
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-muted-foreground">
              {quemSomosHomeContent.texto}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80 italic">
              {quemSomosHomeContent.complemento}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {quemSomosHomeContent.pilares.map((pilar) => (
                <li
                  key={pilar.label}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-card/40 px-4 py-4 text-sm text-foreground/90 transition-colors hover:border-primary/30 hover:bg-card/60"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  {pilar.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
