import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          Erro 404
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          O endereço pode estar incorreto ou a página foi removida. Volte ao
          início ou explore nossos serviços.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/" />}>
            Ir para o início
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/#contato" />}
          >
            Falar conosco
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
