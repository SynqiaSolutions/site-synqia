"use client";

import Link from "next/link";
import { ArrowUpRight, Server, Code2, Zap, Plug, Headphones, Check } from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Reveal from "../../shared/Reveal";
import { servicosHomeContent } from "@/data/homeContentData";

const iconMap = { Server, Code2, Zap, Plug, Headphones };

export default function ServicosSection() {
  const primeiros = servicosHomeContent.slice(0, 3);
  const ultimos = servicosHomeContent.slice(3);

  return (
    <section id="servicos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Serviços"
            titulo="O que fazemos pela sua empresa."
            subtitulo="Da infraestrutura ao software sob medida — estruturamos a tecnologia na ordem certa para o seu negócio operar sem travar."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {primeiros.map((servico, index) => (
            <ServicoCard key={servico.titulo} servico={servico} index={index} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.667%+10px)]">
          {ultimos.map((servico, index) => (
            <ServicoCard
              key={servico.titulo}
              servico={servico}
              index={primeiros.length + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicoCard({
  servico,
  index,
}: {
  servico: (typeof servicosHomeContent)[number];
  index: number;
}) {
  const Icon = iconMap[servico.icon];
  return (
    <Reveal delay={index * 0.07}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] active:bg-card/70">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon className="size-6" aria-hidden />
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground">
          {servico.titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {servico.descricao}
        </p>

        <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary/80">
          <Check className="size-3 shrink-0 text-primary" aria-hidden />{servico.resultado}
        </p>

        <ul className="mb-7 mt-5 flex flex-1 flex-col gap-2.5">
          {servico.itens.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={servico.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Saiba mais
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </article>
    </Reveal>
  );
}
