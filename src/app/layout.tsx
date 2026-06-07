import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CookieConsent from "@/components/shared/CookieConsent";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import Analytics from "@/components/shared/Analytics";
import JsonLdOrganization from "@/components/seo/JsonLdOrganization";
import { companyData } from "@/data/companyData";
import { getBaseUrl } from "@/lib/env";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const title =
  "Synqia | Consultoria Tecnológica e Desenvolvimento de Sistemas em Itumbiara-GO";

const description =
  "Consultoria Tecnológica, suporte empresarial e desenvolvimento de sistemas sob medida em Itumbiara-GO. Infraestrutura, redes, backup e soluções digitais para PMEs.";

const baseUrl = getBaseUrl();

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0F1E",
};

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title,
  description,
  keywords: [
    "consultoria tecnológica itumbiara",
    "suporte ti empresarial itumbiara",
    "desenvolvimento de sistemas itumbiara",
    "empresa de ti itumbiara",
    "criação de sites itumbiara",
    "infraestrutura ti itumbiara go",
    "Synqia",
    "consultoria tecnológica goiás",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/enterprise-logo-blue.png", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: companyData.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="antialiased bg-background text-foreground">
        <JsonLdOrganization />
        <Analytics />
        {children}
        <CookieConsent />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
