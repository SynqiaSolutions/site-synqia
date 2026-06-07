import Image from "next/image";
import { Target, Handshake, Repeat, Layers } from "lucide-react";
import { quemSomosContent, founderContent } from "@/data/sobreData";
import SectionHeader from "@/components/sections/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";

const principios = [
  {
    icon: Target,
    titulo: "Sob medida, não genérico",
    descricao:
      "Cada diagnóstico parte da realidade da operação, não de pacotes prontos.",
  },
  {
    icon: Handshake,
    titulo: "Relacionamento direto",
    descricao:
      "Sem a distância e a impessoalidade dos grandes fornecedores.",
  },
  {
    icon: Repeat,
    titulo: "Recorrência e evolução",
    descricao:
      "Acompanhamos a tecnologia conforme o negócio cresce e evolui.",
  },
  {
    icon: Layers,
    titulo: "Infra + software",
    descricao:
      "Domínio de infraestrutura e desenvolvimento sob o mesmo teto.",
  },
];

export function QuemSomosSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid mask-radial-fade absolute inset-x-0 top-0 h-[460px] opacity-50" />
        <div
          className="absolute left-1/2 top-[-12%] h-[360px] w-[640px] max-w-[120vw] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              {quemSomosContent.eyebrow}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl">
              {quemSomosContent.titulo}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {quemSomosContent.subtitulo}
            </p>
            <div className="mt-6 space-y-4">
              {quemSomosContent.paragrafos.map((paragrafo) => (
                <p
                  key={paragrafo.slice(0, 40)}
                  className="text-base leading-[1.7] text-muted-foreground"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-border/40 sm:grid-cols-2">
              {principios.map((p) => (
                <div key={p.titulo} className="bg-card/60 p-6 transition-colors hover:bg-card/80">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <p.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    {p.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.descricao}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="relative border-t border-hairline bg-card/20 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow="O responsável técnico"
            titulo="A pessoa por trás da Synqia"
            subtitulo="Em empresas de tecnologia de verdade, você sabe com quem está falando."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mx-auto flex max-w-[820px] flex-col items-center gap-8 rounded-3xl p-8 lg:max-w-none lg:grid lg:grid-cols-[minmax(280px,340px)_1fr] lg:items-start lg:gap-14 lg:p-12 xl:grid-cols-[360px_1fr] xl:gap-16">
            <div className="relative size-40 shrink-0 overflow-hidden rounded-2xl border border-hairline lg:size-auto lg:aspect-4/5 lg:w-full lg:rounded-3xl lg:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)]">
              <Image
                src="/leomir-dias.jpeg"
                alt={`Foto de ${founderContent.nome}`}
                fill
                sizes="(max-width: 1024px) 160px, 360px"
                className="object-cover"
              />
            </div>
            <div className="w-full lg:pt-2">
              <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl xl:text-[2rem]">
                {founderContent.nome}
              </h2>
              <p className="mt-1 font-heading text-sm font-semibold text-primary lg:mt-2 lg:text-base">
                {founderContent.cargo}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 lg:mt-5 justify-start">
                {founderContent.especialidades.map((esp) => (
                  <li
                    key={esp}
                    className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground/85"
                  >
                    {esp}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-[1.7] text-muted-foreground lg:mt-6 lg:text-[17px] lg:leading-[1.75]">
                {founderContent.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
