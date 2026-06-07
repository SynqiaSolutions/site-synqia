import { siteImages } from "@/data/siteImages";

export interface SeoLocalPage {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  regiaoLabel: string;
  ctaRegiao: string;
  heroTitulo: string;
  heroSubtitulo: string;
  servicos: string[];
  beneficios: string[];
  imagem: string;
  updatedAt: string;
  servicoPrincipal?: { path: string; label: string };
}

export const ITUMBIARA_COORDS = {
  lat: -18.424714,
  lng: -49.22423,
};

export const seoLocalPages: SeoLocalPage[] = [
  {
    slug: "consultoria-ti-itumbiara",
    path: "/consultoria-ti-itumbiara",
    title: "Consultoria Tecnológica em Itumbiara-GO",
    metaTitle:
      "Consultoria Tecnológica em Itumbiara-GO | Infraestrutura e Suporte Empresarial",
    metaDescription:
      "Consultoria Tecnológica em Itumbiara-GO para empresas que precisam estruturar infraestrutura, redes e suporte recorrente. Diagnóstico gratuito com a Synqia.",
    keywords: [
      "consultoria tecnológica itumbiara",
      "consultoria ti itumbiara go",
      "empresa de ti itumbiara",
      "infraestrutura ti itumbiara",
      "suporte ti empresarial itumbiara",
    ],
    regiaoLabel: "Itumbiara-GO e região",
    ctaRegiao: "Itumbiara-GO e região",
    heroTitulo: "Consultoria Tecnológica em Itumbiara-GO",
    heroSubtitulo:
      "Estruturamos a tecnologia da sua empresa com infraestrutura, redes, segurança e suporte recorrente. Atendimento local para PMEs de Itumbiara e região.",
    servicos: [
      "Diagnóstico de infraestrutura",
      "Redes e Wi-Fi corporativo",
      "Backup e segurança de dados",
      "Suporte remoto e presencial",
      "Padronização de equipamentos",
    ],
    beneficios: [
      "Atendimento presencial em Itumbiara",
      "Contratos recorrentes sem surpresas",
      "Relacionamento direto com o responsável técnico",
    ],
    imagem: siteImages.seo.infraestruturaTi,
    updatedAt: "2026-06-01T00:00:00.000Z",
  },
  {
    slug: "suporte-ti-empresarial-itumbiara",
    path: "/suporte-ti-empresarial-itumbiara",
    title: "Suporte TI Empresarial em Itumbiara-GO",
    metaTitle:
      "Suporte TI Empresarial em Itumbiara-GO | Atendimento Local Synqia",
    metaDescription:
      "Suporte de TI empresarial em Itumbiara-GO com atendimento remoto e presencial. Monitoramento, backup e suporte prioritário para PMEs da região.",
    keywords: [
      "suporte ti empresarial itumbiara",
      "suporte tecnico empresas itumbiara",
      "ti empresarial itumbiara go",
      "help desk itumbiara",
      "manutenção computadores empresas itumbiara",
    ],
    regiaoLabel: "Itumbiara-GO e região",
    ctaRegiao: "Itumbiara-GO e região",
    heroTitulo: "Suporte TI Empresarial em Itumbiara-GO",
    heroSubtitulo:
      "Suporte técnico recorrente para empresas que não podem parar. Monitoramento, atendimento remoto e visitas presenciais em Itumbiara e região.",
    servicos: [
      "Suporte remoto e presencial",
      "Monitoramento de equipamentos",
      "Manutenção preventiva",
      "Gestão de backups",
      "Atendimento prioritário",
    ],
    beneficios: [
      "Resposta rápida no horário comercial",
      "Conhecimento da operação local",
      "Planos adaptados ao tamanho da empresa",
    ],
    imagem: siteImages.seo.suporteTi,
    updatedAt: "2026-06-01T00:00:00.000Z",
  },
  {
    slug: "desenvolvimento-de-sistemas-itumbiara",
    path: "/desenvolvimento-de-sistemas-itumbiara",
    title: "Desenvolvimento de Sistemas em Itumbiara-GO",
    metaTitle:
      "Desenvolvimento de Sistemas em Itumbiara-GO | Soluções Sob Medida",
    metaDescription:
      "Desenvolvimento de sistemas sob medida em Itumbiara-GO. Sistemas internos, dashboards, automações e portais corporativos para PMEs da região.",
    keywords: [
      "desenvolvimento de sistemas itumbiara",
      "sistema sob medida itumbiara",
      "software empresarial itumbiara go",
      "desenvolvimento software itumbiara",
      "sistema gestão itumbiara",
    ],
    regiaoLabel: "Itumbiara-GO e região",
    ctaRegiao: "Itumbiara-GO e região",
    heroTitulo: "Desenvolvimento de Sistemas em Itumbiara-GO",
    heroSubtitulo:
      "Soluções digitais personalizadas para resolver problemas reais do seu negócio. Sistemas internos, dashboards, automações e portais corporativos.",
    servicos: [
      "Sistemas de gestão interna",
      "Dashboards e relatórios",
      "Automações e integrações",
      "Portais para clientes e equipes",
      "Aplicações web sob medida",
    ],
    beneficios: [
      "Desenvolvimento próprio, sem terceirização oculta",
      "Solução alinhada ao processo da empresa",
      "Suporte pós-lançamento",
    ],
    imagem: siteImages.seo.softwareMedida,
    updatedAt: "2026-06-01T00:00:00.000Z",
  },
  {
    slug: "criacao-de-sites-itumbiara",
    path: "/criacao-de-sites-itumbiara",
    title: "Criação de Sites em Itumbiara-GO",
    metaTitle:
      "Criação de Sites em Itumbiara-GO | Sites Institucionais e Portais",
    metaDescription:
      "Criação de sites institucionais e landing pages em Itumbiara-GO com SEO local. Presença digital profissional para empresas da região.",
    keywords: [
      "criação de sites itumbiara",
      "site institucional itumbiara",
      "desenvolvimento site itumbiara go",
      "landing page itumbiara",
      "site empresarial itumbiara",
    ],
    regiaoLabel: "Itumbiara-GO e região",
    ctaRegiao: "Itumbiara-GO e região",
    heroTitulo: "Criação de Sites em Itumbiara-GO",
    heroSubtitulo:
      "Sites institucionais, landing pages e portais empresariais com foco em credibilidade e SEO local para empresas de Itumbiara e região.",
    servicos: [
      "Sites institucionais",
      "Landing pages de conversão",
      "Portais empresariais",
      "SEO local para Itumbiara-GO",
      "Integração com WhatsApp e formulários",
    ],
    beneficios: [
      "Design responsivo e performance otimizada",
      "SEO configurado para buscas locais",
      "Manutenção e evolução contínua",
    ],
    imagem: siteImages.seo.siteInstitucional,
    updatedAt: "2026-06-01T00:00:00.000Z",
  },
  {
    slug: "consultoria-ti-goias",
    path: "/consultoria-ti-goias",
    title: "Consultoria de TI em Goiás",
    metaTitle:
      "Consultoria de TI em Goiás | Infraestrutura e Suporte para PMEs",
    metaDescription:
      "Consultoria de TI em Goiás para pequenas e médias empresas. Infraestrutura, suporte empresarial, redes e desenvolvimento de software com atendimento presencial e remoto.",
    keywords: [
      "consultoria ti goiás",
      "consultoria tecnológica goiás",
      "empresa de ti goiás",
      "suporte ti empresarial goiás",
      "infraestrutura ti goiás",
    ],
    regiaoLabel: "Goiás e região",
    ctaRegiao: "Goiás e interior",
    heroTitulo: "Consultoria de TI em Goiás",
    heroSubtitulo:
      "Consultoria tecnológica para PMEs de Goiás com atendimento presencial no interior e suporte remoto em todo o estado. Infraestrutura, suporte recorrente e software sob medida.",
    servicos: [
      "Diagnóstico de infraestrutura",
      "Suporte TI empresarial recorrente",
      "Redes e conectividade",
      "Backup e segurança de dados",
      "Desenvolvimento de sistemas sob medida",
    ],
    beneficios: [
      "Atendimento presencial no interior de Goiás",
      "Suporte remoto em todo o estado",
      "Relacionamento direto com o responsável técnico",
    ],
    imagem: siteImages.seo.infraestruturaTi,
    updatedAt: "2026-06-07T00:00:00.000Z",
  },
  {
    slug: "consultoria-ti-triangulo-mineiro",
    path: "/consultoria-ti-triangulo-mineiro",
    title: "Consultoria de TI no Triângulo Mineiro",
    metaTitle:
      "Consultoria de TI no Triângulo Mineiro | Synqia Tecnologia",
    metaDescription:
      "Consultoria de TI no Triângulo Mineiro para empresas que precisam de infraestrutura confiável, suporte empresarial e desenvolvimento de software sob medida.",
    keywords: [
      "consultoria ti triângulo mineiro",
      "consultoria ti uberlândia",
      "empresa de ti triângulo mineiro",
      "suporte ti empresarial uberlândia",
      "desenvolvimento software triângulo mineiro",
    ],
    regiaoLabel: "Triângulo Mineiro",
    ctaRegiao: "Triângulo Mineiro e região",
    heroTitulo: "Consultoria de TI no Triângulo Mineiro",
    heroSubtitulo:
      "Parceiro tecnológico para PMEs do Triângulo Mineiro. Consultoria de infraestrutura, suporte empresarial e software sob medida com visitas agendadas e atendimento remoto.",
    servicos: [
      "Consultoria de infraestrutura",
      "Suporte TI empresarial",
      "Redes e conectividade",
      "Automação de processos",
      "Integração de sistemas",
    ],
    beneficios: [
      "Cobertura em Uberlândia e região",
      "Visitas presenciais agendadas",
      "Suporte remoto contínuo",
    ],
    imagem: siteImages.seo.suporteTi,
    updatedAt: "2026-06-07T00:00:00.000Z",
  },
  {
    slug: "automacao-de-processos-goias",
    path: "/automacao-de-processos-goias",
    title: "Automação de Processos em Goiás",
    metaTitle:
      "Automação de Processos em Goiás | Fluxos Digitais para PMEs",
    metaDescription:
      "Automação de processos empresariais em Goiás. Fluxos digitais, relatórios automáticos e rotinas que eliminam retrabalho para PMEs do interior e capital.",
    keywords: [
      "automação de processos goiás",
      "automação empresarial goiás",
      "fluxos digitais goiás",
      "RPA empresas goiás",
      "automação itumbiara goiás",
    ],
    regiaoLabel: "Goiás e região",
    ctaRegiao: "Goiás e interior",
    heroTitulo: "Automação de Processos em Goiás",
    heroSubtitulo:
      "Eliminamos tarefas manuais repetitivas com automações sob medida para PMEs de Goiás. Atendimento presencial no interior e suporte remoto em todo o estado.",
    servicos: [
      "Automação de fluxos internos",
      "Relatórios e rotinas automáticas",
      "Notificações e alertas operacionais",
      "Scripts de backoffice",
      "Integração com sistemas existentes",
    ],
    beneficios: [
      "Diagnóstico antes da implementação",
      "Soluções alinhadas ao processo real",
      "Suporte pós-implantação",
    ],
    imagem: siteImages.seo.softwareMedida,
    updatedAt: "2026-06-07T00:00:00.000Z",
    servicoPrincipal: {
      path: "/automacao-de-processos",
      label: "Automação de processos",
    },
  },
  {
    slug: "integracao-de-sistemas-goias",
    path: "/integracao-de-sistemas-goias",
    title: "Integração de Sistemas em Goiás",
    metaTitle:
      "Integração de Sistemas em Goiás | APIs e ERPs para PMEs",
    metaDescription:
      "Integração de sistemas empresariais em Goiás via API, ERP, CRM e e-commerce. Conectamos ferramentas isoladas para PMEs do interior e região metropolitana.",
    keywords: [
      "integração de sistemas goiás",
      "integração api goiás",
      "integração erp goiás",
      "middleware empresarial goiás",
      "integração sistemas itumbiara",
    ],
    regiaoLabel: "Goiás e região",
    ctaRegiao: "Goiás e interior",
    heroTitulo: "Integração de Sistemas em Goiás",
    heroSubtitulo:
      "Conectamos ERPs, CRMs, e-commerce e sistemas internos para empresas de Goiás. Menos retrabalho, dados consistentes e operação integrada.",
    servicos: [
      "Integração via API e webhooks",
      "Conexão entre ERPs e CRMs",
      "Sincronização de e-commerce",
      "Middleware sob medida",
      "Monitoramento de integrações",
    ],
    beneficios: [
      "Mapeamento técnico antes do projeto",
      "Integrações estáveis e documentadas",
      "Suporte contínuo pós-implantação",
    ],
    imagem: siteImages.seo.infraestruturaTi,
    updatedAt: "2026-06-07T00:00:00.000Z",
    servicoPrincipal: {
      path: "/integracao-de-sistemas",
      label: "Integração de sistemas",
    },
  },
];

export function getSeoLocalPageBySlug(slug: string): SeoLocalPage | undefined {
  return seoLocalPages.find((page) => page.slug === slug);
}

export function getSeoLocalPageByPath(path: string): SeoLocalPage | undefined {
  return seoLocalPages.find((page) => page.path === path);
}

export function getRegionalSeoLinks(): Array<{ href: string; label: string }> {
  return seoLocalPages.map((page) => ({
    href: page.path,
    label: page.title,
  }));
}
