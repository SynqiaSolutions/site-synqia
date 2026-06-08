import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContatoEnviadoContent from "./ContatoEnviadoContent";
import { companyData } from "@/data/companyData";

const title = `Contato enviado | ${companyData.companyName}`;
const description =
  "Sua mensagem foi registrada. Continue a conversa no WhatsApp para falar com a equipe Synqia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato-enviado" },
  robots: { index: false, follow: false },
  openGraph: { title, description, url: "/contato-enviado" },
  twitter: { card: "summary", title, description },
};

export default function ContatoEnviadoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        <ContatoEnviadoContent />
      </main>
      <Footer />
    </>
  );
}
