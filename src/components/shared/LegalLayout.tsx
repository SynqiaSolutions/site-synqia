import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LEGAL_LINKS = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/cookies", label: "Política de Cookies" },
];

interface LegalLayoutProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Item atual do breadcrumb (e usado para esconder o próprio link no rodapé). */
  current: { label: string; href: string };
  children: React.ReactNode;
}

/**
 * Shell premium minimalista para páginas jurídicas
 * (Privacidade, Termos, Cookies) — consistente com o dark mode da home.
 */
export default function LegalLayout({
  eyebrow = "Legal",
  title,
  intro,
  current,
  children,
}: LegalLayoutProps) {
  const otherLinks = LEGAL_LINKS.filter((l) => l.href !== current.href);

  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="bg-grid mask-radial-fade absolute inset-x-0 top-0 h-[420px] opacity-50" />
          <div
            className="absolute left-1/2 top-[-12%] h-[340px] w-[620px] max-w-[120vw] -translate-x-1/2 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-[760px] px-6 pb-20 pt-28 md:pt-32">
          <nav
            aria-label="Navegação estrutural"
            className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Início
            </Link>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground/50" aria-hidden />
            <span className="text-foreground">{current.label}</span>
          </nav>

          <header className="mb-10 border-b border-hairline pb-8">
            {eyebrow && (
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-[-0.02em] text-foreground md:text-4xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}
          </header>

          {children}

          <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-hairline pt-6 text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:underline">
              Voltar ao início
            </Link>
            {otherLinks.map((link) => (
              <span key={link.href} className="flex items-center gap-2">
                <span aria-hidden className="text-muted-foreground/40">·</span>
                <Link href={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
