"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";
import { companyData } from "@/data/companyData";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/consultoria-tecnologica", label: "Consultoria" },
  { href: "/desenvolvimento-de-sistemas", label: "Desenvolvimento" },
  // { href: "/automacao-de-processos", label: "Automação" },
  // { href: "/integracao-de-sistemas", label: "Integração" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled && "px-2 sm:px-4"
        )}
      >
        <div
          className={cn(
            "mx-auto flex min-h-16 w-full items-center transition-all duration-500",
            scrolled
              ? "mt-2 rounded-2xl border border-border/70 bg-background/75 px-1.5 py-1 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "border-b border-border/30 bg-background/40 backdrop-blur-md"
          )}
        >
          <div className="relative flex h-14 w-full items-center justify-between gap-2 px-3 sm:px-6">
            {/* LOGO */}
            <Link
              href="/"
              className="group relative z-10 flex min-w-0 items-center gap-2 sm:gap-1.5"
              onClick={closeMenu}
              aria-label={`${companyData.companyName} — Ir para o início`}
            >
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                <Image
                  src="/enterprise-logo-blue.png"
                  alt={companyData.companyName}
                  fill
                  sizes="(max-width: 640px) 28px, 36px"
                  className="object-contain transition-opacity group-hover:opacity-80"
                />
              </span>
              <span className="truncate text-lg font-bold tracking-widest text-primary lg:text-xl">
                {companyData.companyName.toUpperCase()}
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="pointer-events-none absolute inset-x-0 hidden items-center justify-center lg:flex"
              aria-label="Navegação principal"
            >
              <div className="pointer-events-auto flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-heading text-[12px] font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* SOCIAL + HAMBURGER */}
            <div className="relative z-10 flex shrink-0 items-center gap-2">
              <SocialLinks size="sm" className="hidden lg:flex" />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex size-10 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          {/* OVERLAY */}
          <div
            aria-hidden
            onClick={closeMenu}
            className="animate-in fade-in fixed inset-0 z-50 bg-black/60 duration-200"
          />

          {/* MOBILE DRAWER */}
          <aside
            aria-label="Menu de navegação"
            className="animate-in slide-in-from-right fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-popover shadow-2xl duration-300"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 pt-[max(1rem,env(safe-area-inset-top,0px))]">
              <Link
                href="/"
                className="flex min-w-0 flex-1 items-center gap-1.5 pr-3"
                onClick={closeMenu}
                aria-label={`${companyData.companyName} — Ir para o início`}
              >
                <span className="relative h-7 w-7 shrink-0 sm:h-8 sm:w-8">
                  <Image
                    src="/enterprise-logo-blue.png"
                    alt={companyData.companyName}
                    fill
                    sizes="(max-width: 640px) 28px, 32px"
                    className="object-contain"
                  />
                </span>
                <span className="truncate text-sm font-bold tracking-wide text-primary sm:text-lg sm:tracking-widest">
                  {companyData.companyName.toUpperCase()}
                </span>
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="flex size-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Fechar menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4"
              aria-label="Navegação principal (mobile)"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 font-heading text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto shrink-0 border-t border-border px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
              <SocialLinks size="sm" />
            </div>
          </aside>
        </>
      )}
    </>
  );
}
