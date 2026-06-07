import type { MetadataRoute } from "next";
import { companyData } from "@/data/companyData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${companyData.companyName} — Consultoria de TI e Software`,
    short_name: companyData.companyName,
    description:
      "Consultoria de TI, suporte empresarial e desenvolvimento de software sob medida em Itumbiara-GO.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1E",
    theme_color: "#0A0F1E",
    lang: "pt-BR",
    icons: [
      {
        src: "/enterprise-logo-blue.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
