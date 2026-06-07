/**
 * Dados institucionais da Synqia Solutions.
 */

export interface CompanyUnit {
  name: string;
  address: string;
  phones: string[];
  mapsEmbedUrl: string;
  mapsLinkUrl: string;
}

export interface CompanySocial {
  instagram?: { url: string; label: string };
  youtube?: { url: string; label: string };
  facebook?: { url: string; label: string };
  linkedin?: { url: string; label: string };
}

export interface CompanyData {
  companyName: string;
  siteUrl: string;
  whatsapp: string;
  phone: string;
  email: string;
  businessHours: string;
  social: CompanySocial;
  units: CompanyUnit[];
  quoteOptions: string[];
}

export const companyData: CompanyData = {
  companyName: "Synqia",
  siteUrl: "synqia.com.br",
  whatsapp: "5564996775544",
  phone: "(64) 99677-5544",
  email: "contato@synqia.com.br",
  businessHours: "Segunda a Sexta: 8h às 18h",
  social: {
    instagram: {
      url: "https://instagram.com/synqiasolutions",
      label: "@synqiasolutions",
    },
    facebook: {
      url: "https://www.facebook.com/synqiasolutions",
      label: "@synqiasolutions",
    },
    linkedin: {
      url: "https://www.linkedin.com/company/synqiasolutions",
      label: "@synqiasolutions",
    },
  },
  units: [
    {
      name: "Itumbiara-GO",
      address: "Rua 38, 184, Santa Inês",
      phones: ["(64) 99677-5544"],
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7570.598627672346!2d-49.2242297551593!3d-18.42471428060109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a10d46964c419f%3A0xda2cbcd7d497c41f!2sSt.%20Santa%20Ines%2C%20Itumbiara%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1773344766110!5m2!1spt-BR!2sbr",
      mapsLinkUrl: "https://maps.app.goo.gl/HXqMQWYw3Q438CjL6",
    },
  ],
  quoteOptions: [
    "Consultoria de TI",
    "Desenvolvimento Sob Medida",
    "Automação de Processos",
    "Integrações de Sistemas",
    "Suporte Técnico Empresarial",
    "Tenho uma dúvida",
  ],
};
