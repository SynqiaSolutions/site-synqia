interface SectionHeaderProps {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  alinhamento?: "center" | "start";
  /** Se true, o título é o H1 da página (apenas o hero). Padrão: H2. */
  as?: "h1" | "h2";
}

export default function SectionHeader({
  eyebrow,
  titulo,
  subtitulo,
  alinhamento = "center",
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  const alignClass = alinhamento === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`${alignClass} max-w-[760px] mb-12`}>
      {eyebrow && (
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.14em] uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <Heading
        className="font-heading font-bold text-foreground leading-[1.15] tracking-[-0.02em] text-[clamp(28px,4vw,40px)]"
      >
        {titulo}
      </Heading>
      {subtitulo && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-[1.6] font-body">
          {subtitulo}
        </p>
      )}
    </header>
  );
}
