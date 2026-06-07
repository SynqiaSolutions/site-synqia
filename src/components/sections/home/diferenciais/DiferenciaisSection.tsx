"use client";

import {
  UserCheck,
  Code2,
  MapPin,
  Search,
  MessageSquare,
  Target,
} from "lucide-react";
import SectionHeader from "../../shared/SectionHeader";
import Reveal from "../../shared/Reveal";
import { diferenciaisContent } from "@/data/homeContentData";

const icones = [UserCheck, Code2, MapPin, Search, MessageSquare, Target];

export default function DiferenciaisSection() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-24 border-y border-hairline bg-card/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow={diferenciaisContent.eyebrow}
            titulo={diferenciaisContent.titulo}
            subtitulo={diferenciaisContent.subtitulo}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciaisContent.itens.map((item, index) => {
            const Icon = icones[index] ?? UserCheck;
            return (
              <Reveal
                key={item.titulo}
                delay={index * 0.06}
                className="group relative bg-background p-7 transition-colors duration-500 hover:bg-card/60 active:bg-card/80"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-hairline bg-card text-primary transition-colors group-hover:border-primary/40">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
