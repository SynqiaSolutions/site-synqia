"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/companyData";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  clearContatoWhatsAppMessage,
  getContatoWhatsAppMessage,
} from "@/lib/contatoLead";
import WhatsAppLink from "@/components/shared/WhatsAppLink";

export default function ContatoEnviadoContent() {
  const router = useRouter();
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  useEffect(() => {
    const message = getContatoWhatsAppMessage();
    if (!message) {
      router.replace("/#contato");
      return;
    }
    setWhatsappUrl(buildWhatsAppUrl(companyData.whatsapp, message));
  }, [router]);

  if (!whatsappUrl) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-muted-foreground">Carregando…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-16 text-center md:py-24">
      <span className="flex size-20 items-center justify-center rounded-full bg-primary/15">
        <CheckCircle2 className="size-10 text-primary" aria-hidden />
      </span>
      <h1 className="mt-6 font-heading text-3xl font-bold tracking-[-0.02em] text-foreground md:text-4xl">
        Mensagem registrada!
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Recebemos seus dados. Para concluir o contato, continue a conversa no
        WhatsApp — nossa equipe responde no mesmo dia útil.
      </p>
      <Button
        size="lg"
        className="mt-8 h-12 w-full px-6 text-[15px] sm:w-auto"
        render={
          <WhatsAppLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            trackLocation="contato-enviado"
            onClick={() => clearContatoWhatsAppMessage()}
          />
        }
      >
        <MessageCircle className="size-4" aria-hidden />
        Continuar no WhatsApp
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="mt-3 h-12 w-full px-6 text-[15px] sm:w-auto"
        render={<Link href="/" />}
      >
        <ArrowLeft className="size-4" aria-hidden />
        Voltar ao início
      </Button>
    </div>
  );
}
