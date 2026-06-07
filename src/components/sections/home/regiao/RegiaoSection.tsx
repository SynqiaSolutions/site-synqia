import { MapPin, Wifi } from "lucide-react";
import Link from "next/link";
import Reveal from "../../shared/Reveal";
import SectionHeader from "../../shared/SectionHeader";
import { regiaoContent } from "@/data/homeContentData";
import { cn } from "@/lib/utils";

function RegiaoCard({
  regiao,
}: {
  regiao: (typeof regiaoContent.regioes)[number];
}) {
  const isNacional = regiao.remoto;
  const cardClass = cn(
    "flex h-full flex-col items-center justify-start rounded-2xl border p-5 text-center transition-colors",
    regiao.destaque
      ? "border-primary/40 bg-primary/5"
      : "border-hairline bg-card/30 hover:border-primary/20 hover:bg-card/50",
    regiao.href && "hover:border-primary/40"
  );

  const content = (
    <>
      {isNacional ? (
        <Wifi className="size-5 shrink-0 text-primary/70" aria-hidden />
      ) : (
        <MapPin
          className={cn(
            "size-5 shrink-0",
            regiao.destaque ? "text-primary" : "text-primary/60"
          )}
          aria-hidden
        />
      )}
      <p
        className={cn(
          "flex min-h-10 items-center justify-center font-heading text-sm font-semibold",
          regiao.destaque ? "text-foreground" : "text-foreground/80"
        )}
      >
        {regiao.nome}
      </p>
      <p className="flex-1 text-[11px] leading-relaxed text-muted-foreground">
        {regiao.descricao}
      </p>
    </>
  );

  if (regiao.href) {
    return (
      <Link href={regiao.href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}

export default function RegiaoSection() {
  return (
    <section
      id="regiao"
      className="relative scroll-mt-24 border-t border-hairline py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader
            eyebrow={regiaoContent.eyebrow}
            titulo={regiaoContent.titulo}
            subtitulo={regiaoContent.subtitulo}
          />
        </Reveal>

        <div className="mt-2 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {regiaoContent.regioes.map((regiao, index) => (
            <Reveal key={regiao.nome} delay={index * 0.06} className="h-full">
              <RegiaoCard regiao={regiao} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Atendemos empresas em todo o Brasil de forma remota.{" "}
            <Link href="#contato" className="text-primary hover:underline">
              Entre em contato
            </Link>{" "}
            e veja como podemos ajudar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
