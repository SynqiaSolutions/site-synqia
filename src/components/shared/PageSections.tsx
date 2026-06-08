import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/shared/Reveal";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { companyData } from "@/data/companyData";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <div className="bg-grid mask-radial-fade absolute inset-0 opacity-60" />
      <div
        className="absolute left-1/2 top-[-20%] h-[440px] w-[760px] max-w-[120vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
    </div>
  );
}

interface PageHeroProps {
  titulo: string;
  subtitulo: string;
  eyebrow?: string;
  /** Mantido por compatibilidade — não renderizado. */
  imagem?: string;
  as?: "h1" | "h2";
  showCta?: boolean;
  /** Label do CTA primário (WhatsApp). */
  ctaPrimarioLabel?: string;
  /** Label do CTA secundário (formulário de contato). */
  ctaSecundarioLabel?: string;
  /** Href do CTA secundário. */
  ctaSecundarioHref?: string;
  whatsappMessage?: string;
  /** Identificador para rastreamento de cliques no WhatsApp (GA4). */
  whatsappTrackLocation?: string;
}

export function PageHero({
  titulo,
  subtitulo,
  eyebrow,
  as = "h1",
  showCta = true,
  ctaPrimarioLabel = "Falar com um especialista",
  ctaSecundarioLabel = "Solicitar análise técnica",
  ctaSecundarioHref = "/#contato",
  whatsappMessage = WHATSAPP_MESSAGES.diagnostico,
  whatsappTrackLocation = "page-hero",
}: PageHeroProps) {
  const Heading = as;
  const whatsappUrl = buildWhatsAppUrl(companyData.whatsapp, whatsappMessage);

  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-36 md:pb-24 md:pt-44">
      <HeroBackground />
      <Reveal className="mx-auto flex max-w-[820px] flex-col items-center text-center">
        {eyebrow && (
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            {eyebrow}
          </span>
        )}
        <Heading className="font-heading text-balance text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
          {titulo}
        </Heading>
        <p className="mt-5 max-w-[620px] text-pretty text-base leading-[1.65] text-muted-foreground md:text-lg">
          {subtitulo}
        </p>

        {showCta && (
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="group h-12 w-full px-6 text-[15px] shadow-[0_0_0_1px_rgba(6,182,212,0.4),0_12px_40px_-12px_rgba(6,182,212,0.55)] sm:w-auto"
              render={
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackLocation={whatsappTrackLocation}
                />
              }
            >
              <MessageCircle className="size-4" aria-hidden />
              {ctaPrimarioLabel}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full px-6 text-[15px] sm:w-auto"
              render={<Link href={ctaSecundarioHref} />}
            >
              {ctaSecundarioLabel}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        )}
      </Reveal>
    </section>
  );
}

interface CtaWhatsappSectionProps {
  titulo: string;
  subtitulo?: string;
  botao?: string;
  message?: string;
  id?: string;
  /** Identificador para rastreamento de cliques no WhatsApp (GA4). */
  whatsappTrackLocation?: string;
}

export default function CtaWhatsappSection({
  titulo,
  subtitulo,
  botao = "Falar com um especialista",
  message = WHATSAPP_MESSAGES.default,
  id,
  whatsappTrackLocation,
}: CtaWhatsappSectionProps) {
  const whatsappUrl = buildWhatsAppUrl(companyData.whatsapp, message);
  const trackLocation = whatsappTrackLocation ?? id ?? "cta-whatsapp";

  return (
    <section id={id} className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[680px] max-w-[110vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[860px] px-6">
        <Reveal className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center md:px-12 md:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mx-auto mt-4 max-w-[560px] text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitulo}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 w-full px-6 text-[15px] shadow-xl sm:w-auto"
              render={
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={botao}
                  trackLocation={trackLocation}
                />
              }
            >
              <MessageCircle className="size-4" aria-hidden />
              {botao}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full px-6 text-[15px] sm:w-auto"
              render={<Link href="/#contato" />}
            >
              Enviar uma mensagem
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface BreadcrumbProps {
  items: Array<{ label: string; href: string }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Navegação estrutural"
      className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-1.5 px-6 pt-28 pb-2 text-sm text-muted-foreground"
    >
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden className="text-muted-foreground/50">
              /
            </span>
          )}
          {i === items.length - 1 ? (
            <span className="text-foreground">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
