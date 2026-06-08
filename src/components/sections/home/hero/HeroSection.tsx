import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/data/homeContentData";
import { companyData } from "@/data/companyData";
import { cn } from "@/lib/utils";
import WhatsAppLink from "@/components/shared/WhatsAppLink";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    companyData.whatsapp,
    WHATSAPP_MESSAGES.diagnostico
  );

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16 md:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid mask-radial-fade absolute inset-0 opacity-70" />
        <div
          className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.20) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="hero-animate-group mx-auto flex max-w-[820px] flex-col items-center text-center">
          <span
            className={cn(
              "glass hero-animate mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-muted-foreground",
              "hero-animate-delay-1"
            )}
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            {heroContent.eyebrow}
          </span>

          <h1
            className={cn(
              "font-heading text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[64px]",
              "hero-animate hero-animate-delay-2"
            )}
          >
            {heroContent.tituloInicio}{" "}
            <span className="text-gradient-brand">
              {heroContent.tituloDestaque}
            </span>{" "}
            {heroContent.tituloFim}
          </h1>

          <p
            className={cn(
              "mt-6 max-w-[640px] text-pretty text-base leading-[1.65] text-muted-foreground md:text-lg",
              "hero-animate hero-animate-delay-3"
            )}
          >
            {heroContent.subtitulo}
          </p>

          <div
            className={cn(
              "mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row",
              "hero-animate hero-animate-delay-4"
            )}
          >
            <Button
              size="lg"
              className="group h-12 w-full px-6 text-[15px] shadow-md sm:w-auto"
              render={
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackLocation="hero-home"
                />
              }
            >
              <MessageCircle className="size-4" aria-hidden />
              {heroContent.ctaPrincipal}
            </Button>
            <Link
              href="#contato"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group h-12 w-full px-6 text-[15px] sm:w-auto hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {heroContent.ctaSecundario}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          <ul
            className={cn(
              "mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground",
              "hero-animate hero-animate-delay-5"
            )}
          >
            {heroContent.trustChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(6,182,212,0.3)]" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
