import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";
import { companyData } from "@/data/companyData";
import { getRegionalSeoLinks } from "@/data/seoLocalData";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const linksRapidos = [
  { href: "/", label: "Home" },
  { href: "/consultoria-tecnologica", label: "Consultoria Tecnológica" },
  { href: "/desenvolvimento-de-sistemas", label: "Desenvolvimento de Sistemas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

const linksLegal = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/cookies", label: "Política de Cookies" },
];

const linksRegionais = getRegionalSeoLinks();
const primaryUnit = companyData.units[0];

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    companyData.whatsapp,
    WHATSAPP_MESSAGES.default
  );
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 mb-12">
          <div className="xl:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
              aria-label={`${companyData.companyName} — início`}
            >
              <span className="relative w-8 h-8 shrink-0">
                <Image
                  src="/enterprise-logo-blue.png"
                  alt={companyData.companyName}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </span>
              <span className="font-bold text-xl text-primary tracking-widest">
                {companyData.companyName.toUpperCase()}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-body leading-[1.7] max-w-[320px] mb-4">
              Consultoria Tecnológica, infraestrutura e desenvolvimento de soluções sob
              medida para empresas de Itumbiara-GO e região.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-foreground mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden">
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-foreground mb-4">
              Por região
            </h4>
            <ul className="space-y-2.5 xl:columns-2 xl:gap-x-6">
              {linksRegionais.map((link) => (
                <li key={link.href} className="break-inside-avoid">
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {linksLegal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-foreground mb-4">
              Fale com a gente
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                >
                  <MessageCircle
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-foreground text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                      WhatsApp
                    </span>
                    {companyData.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-start gap-3 text-muted-foreground text-sm font-body hover:text-primary transition-colors break-all"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="block text-foreground text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                      E-mail
                    </span>
                    {companyData.email}
                  </span>
                </a>
              </li>
              {primaryUnit && (
                <li>
                  <a
                    href={primaryUnit.mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                  >
                    <MapPin
                      className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-foreground text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                        Localização
                      </span>
                      {primaryUnit.address}, {primaryUnit.name}
                    </span>
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-muted-foreground text-xs font-body">
                <Clock
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                  aria-hidden
                />
                <span>
                  <span className="block text-foreground text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                    Atendimento
                  </span>
                  {companyData.businessHours}
                  <br />
                  Itumbiara-GO e Região
                </span>
              </li>
            </ul>
          </div>

          <div>
            {primaryUnit && (
              <address className="not-italic text-sm text-muted-foreground leading-relaxed mb-5">
                <span className="block text-foreground text-xs font-heading font-semibold uppercase tracking-wider mb-1">
                  Endereço
                </span>
                {primaryUnit.address}
                <br />
                {primaryUnit.name}
                <br />
                <a
                  href={primaryUnit.mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-primary hover:underline"
                >
                  Ver no Google Maps
                </a>
              </address>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs font-body">
          <p>
            © {year} {companyData.companyName}. Todos os direitos reservados.
          </p>
          <p>Itumbiara e Região · Consultoria e Desenvolvimento</p>
        </div>
      </div>
    </footer>
  );
}
