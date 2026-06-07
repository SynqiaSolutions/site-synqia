import Image from "next/image";
import Reveal from "../../shared/Reveal";
import { founderContent } from "@/data/sobreData";

export default function FundadorHomeSection() {
  return (
    <section
      id="fundador"
      className="relative scroll-mt-24 py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            A pessoa por trás da Synqia
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(260px,300px)_1fr] lg:gap-16 xl:grid-cols-[320px_1fr] xl:gap-20">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl border border-hairline lg:size-full lg:aspect-4/5 lg:rounded-3xl lg:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)]">
                <Image
                  src="/leomir-dias.jpeg"
                  alt={`Foto de ${founderContent.nome}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 112px, 320px"
                />
              </div>
              <div className="lg:hidden">
                <p className="font-heading text-xl font-bold text-foreground">
                  {founderContent.nome}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {founderContent.cargo}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:gap-8 lg:pt-1">
            <Reveal delay={0.05} className="hidden lg:block">
              <p className="font-heading text-2xl font-bold text-foreground xl:text-3xl">
                {founderContent.nome}
              </p>
              <p className="mt-2 font-heading text-sm font-semibold text-primary">
                {founderContent.cargo}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="flex flex-wrap gap-2 justify-start">
                {founderContent.especialidades.map((especialidade) => (
                  <li
                    key={especialidade}
                    className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground/85"
                  >
                    {especialidade}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-[1.7] text-muted-foreground lg:max-w-none lg:text-[17px] lg:leading-[1.75]">
                {founderContent.bio}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
