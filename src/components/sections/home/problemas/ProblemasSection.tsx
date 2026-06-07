"use client";

import {
  FileSpreadsheet,
  Unplug,
  RefreshCw,
  BarChart2,
  Headphones,
  TrendingDown,
} from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Reveal from "../../shared/Reveal";
import { problemasContent } from "@/data/homeContentData";

const iconeMap = {
  FileSpreadsheet,
  Unplug,
  RefreshCw,
  BarChart2,
  Headphones,
  TrendingDown,
};

export default function ProblemasSection() {
  return (
    <section
      id="problemas"
      className="relative scroll-mt-24 border-y border-hairline bg-card/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow={problemasContent.eyebrow}
            titulo={problemasContent.titulo}
            subtitulo={problemasContent.subtitulo}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemasContent.itens.map((item, index) => {
            const Icon = iconeMap[item.icone] ?? FileSpreadsheet;
            return (
              <Reveal key={item.titulo} delay={index * 0.07}>
                <article className="group flex h-full gap-4 rounded-2xl border border-hairline bg-card/40 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/60">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      {item.pergunta}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.descricao}
                    </p>
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
