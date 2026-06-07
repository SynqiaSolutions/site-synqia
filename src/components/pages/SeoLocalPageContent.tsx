import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageSections";
import CtaWhatsappSection from "@/components/shared/PageSections";
import Reveal from "@/components/shared/Reveal";
import type { SeoLocalPage } from "@/data/seoLocalData";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import JsonLdRouteGraph from "@/components/seo/JsonLdRouteGraph";

interface SeoLocalPageContentProps {
  page: SeoLocalPage;
}

export default function SeoLocalPageContent({ page }: SeoLocalPageContentProps) {
  return (
    <>
      <JsonLdRouteGraph
        path={page.path}
        title={page.metaTitle}
        description={page.metaDescription}
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: page.title, path: page.path },
        ]}
        localBusinessName={`Synqia — ${page.title}`}
        serviceName={page.title}
      />
      <PageHero
        eyebrow={page.regiaoLabel}
        titulo={page.heroTitulo}
        subtitulo={page.heroSubtitulo}
        whatsappMessage={WHATSAPP_MESSAGES.diagnostico}
      />

      <section className="relative border-t border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-hairline bg-card/40 p-8">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  O que oferecemos
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {page.servicos.map((servico) => (
                    <li
                      key={servico}
                      className="flex items-start gap-3 text-[15px] text-muted-foreground"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      {servico}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-hairline bg-card/40 p-8">
                <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                  <Sparkles className="size-5 text-primary" aria-hidden />
                  Por que escolher a Synqia
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {page.beneficios.map((beneficio) => (
                    <li
                      key={beneficio}
                      className="flex items-start gap-3 text-[15px] text-muted-foreground"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {page.servicoPrincipal && (
        <section className="relative border-t border-hairline py-12">
          <div className="mx-auto max-w-[760px] px-6 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conheça também nossa página de{" "}
              <Link
                href={page.servicoPrincipal.path}
                className="font-medium text-primary hover:underline"
              >
                {page.servicoPrincipal.label}
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <CtaWhatsappSection
        titulo={`Precisa de ${page.title.toLowerCase()}?`}
        subtitulo={`Atendemos empresas de ${page.ctaRegiao} com diagnóstico gratuito.`}
        botao="Solicitar diagnóstico"
        message={WHATSAPP_MESSAGES.diagnostico}
      />
    </>
  );
}
