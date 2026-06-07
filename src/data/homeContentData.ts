export const heroContent = {
  eyebrow: "Seu novo parceiro tecnológico!",
  tituloInicio: "Consultoria e desenvovimento",
  tituloDestaque: "para empresas",
  tituloFim: "que precisam crescer.",
  subtitulo:
    "Consultoria especializada e desenvolvimento de software sob medida para pequenas e médias empresas de Itumbiara e região. Estruturamos a tecnologia da sua operação com método, transparência e atendimento direto.",
  ctaPrincipal: "Falar com um especialista",
  ctaSecundario: "Solicitar análise técnica",
  // mantidos para compatibilidade com componentes legados
  ctaDiagnostico: "Falar com um especialista",
  ctaWhatsapp: "Solicitar análise técnica",
  trustChips: [
    "Atendimento presencial e remoto",
    "Itumbiara GO e Região",
    "Contato direto com o responsável técnico",
  ],
};

export const quemSomosHomeContent = {
  eyebrow: "Quem somos",
  titulo: "Uma empresa de tecnologia focada em resultado, não em jargão.",
  texto:
    "A Synqia é uma consultoria de TI e desenvolvedora de software sob medida com sede em Itumbiara-GO. Trabalhamos com pequenas e médias empresas que precisam de tecnologia funcional, suporte confiável e soluções que se encaixam na realidade do negócio, sem intermediários, sem promessas genéricas.",
  complemento:
    "Cada projeto começa com um diagnóstico real da operação. Só depois disso propomos o que faz sentido, não o que é mais rentável para nós.",
  pilares: [
    { label: "Atendimento pessoal e transparente" },
    { label: "Soluções desenvolvidas internamente" },
    { label: "Foco em resultado operacional" },
    { label: "Relacionamento de longo prazo" },
  ],
};

export const problemasContent = {
  eyebrow: "Problemas que resolvemos",
  titulo: "Sua empresa enfrenta algum destes desafios?",
  subtitulo: "Se você se reconhece em pelo menos um deles, podemos ajudar!",
  itens: [
    {
      icone: "FileSpreadsheet" as const,
      titulo: "Planilhas excessivas",
      pergunta: "Sua empresa depende de planilhas para controlar a operação?",
      descricao:
        "Controles espalhados em planilhas que ninguém consegue manter atualizadas.",
    },
    {
      icone: "Unplug" as const,
      titulo: "Sistemas desconectados",
      pergunta: "Suas ferramentas e sistemas não conversam entre si?",
      descricao:
        "Ferramentas que não conversam entre si, gerando retrabalho e inconsistências.",
    },
    {
      icone: "RefreshCw" as const,
      titulo: "Processos manuais e repetitivos",
      pergunta: "Sua equipe perde tempo com tarefas manuais repetitivas?",
      descricao:
        "Tarefas que consomem tempo da equipe e poderiam ser automatizadas.",
    },
    {
      icone: "BarChart2" as const,
      titulo: "Falta de indicadores",
      pergunta: "Sua empresa toma decisões sem dados confiáveis?",
      descricao:
        "Decisões tomadas sem dados, sem visibilidade real do que está acontecendo.",
    },
    {
      icone: "Headphones" as const,
      titulo: "Suporte técnico sem resposta",
      pergunta: "Problemas de TI ficam dias sem resolução na sua empresa?",
      descricao:
        "Problemas que ficam dias sem resolução e comprometem a operação.",
    },
    {
      icone: "TrendingDown" as const,
      titulo: "Crescimento sem estrutura",
      pergunta: "Sua empresa cresceu, mas a tecnologia não acompanhou?",
      descricao:
        "A empresa cresce, mas a tecnologia não acompanha, tudo improvisa.",
    },
  ],
};

export const servicosHomeContent = [
  {
    icon: "Server" as const,
    titulo: "Consultoria de TI",
    descricao:
      "Diagnóstico, estruturação e otimização de toda a infraestrutura tecnológica da empresa.",
    resultado: "Operação estável, segura e previsível.",
    itens: [
      "Diagnóstico de infraestrutura",
      "Redes e conectividade",
      "Segurança e backup",
      "Padronização de equipamentos",
      "Gestão de TI contínua",
    ],
    href: "/consultoria-tecnologica",
  },
  {
    icon: "Code2" as const,
    titulo: "Desenvolvimento Sob Medida",
    descricao:
      "Sistemas, painéis e aplicações construídas para resolver os problemas reais do seu negócio.",
    resultado: "Software que se encaixa na sua operação.",
    itens: [
      "Sistemas internos",
      "Painéis administrativos",
      "Aplicações web e mobile",
      "Portais para clientes",
      "ERPs e CRMs customizados",
    ],
    href: "/desenvolvimento-de-sistemas",
  },
  {
    icon: "Zap" as const,
    titulo: "Automação de Processos",
    descricao:
      "Eliminamos tarefas manuais e repetitivas com automações que funcionam no seu contexto.",
    resultado: "Menos retrabalho, mais eficiência operacional.",
    itens: [
      "Automação de fluxos internos",
      "Relatórios automáticos",
      "Notificações e alertas",
      "Workflows digitais",
      "Scripts de automação",
    ],
    href: "/automacao-de-processos",
  },
  {
    icon: "Plug" as const,
    titulo: "Integrações de Sistemas",

    descricao:
      "Conectamos ferramentas e plataformas que hoje operam de forma isolada na sua empresa.",
    resultado: "Comunicação inteligente entre sistemas",
    itens: [
      "Integração via API",
      "Conexão entre ERPs e plataformas",
      "Sincronização de dados",
      "Integrações com e-commerce",
      "Webhooks e eventos automáticos",
    ],
    href: "/integracao-de-sistemas",
  },
  {
    icon: "Headphones" as const,
    titulo: "Suporte Técnico Empresarial",
    descricao:
      "Suporte recorrente com atendimento direto, prevenção de problemas e resolução rápida.",
    resultado: "TI estável sem depender de sorte.",
    itens: [
      "Suporte remoto e presencial",
      "Atendimento no mesmo dia",
      "Monitoramento preventivo",
      "Manutenção de equipamentos",
      "Gestão de fornecedores de TI",
    ],
    href: "/consultoria-tecnologica",
  },
];

export const comoFuncionaContent = {
  eyebrow: "Processo",
  titulo: "Como trabalhamos",
  subtitulo:
    "Do primeiro contato ao suporte contínuo, um processo claro em cada etapa.",
  etapas: [
    {
      numero: "01",
      titulo: "Diagnóstico",
      descricao:
        "Analisamos a operação, identificamos gargalos e mapeamos o cenário tecnológico atual da empresa.",
    },
    {
      numero: "02",
      titulo: "Planejamento",
      descricao:
        "Definimos prioridades, escopo e cronograma alinhados à realidade e ao orçamento do negócio.",
    },
    {
      numero: "03",
      titulo: "Implementação",
      descricao:
        "Desenvolvemos e implantamos as soluções com acompanhamento direto e comunicação transparente.",
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      descricao:
        "Monitoramos os resultados, ajustamos o que for necessário e validamos os objetivos definidos.",
    },
    {
      numero: "05",
      titulo: "Suporte",
      descricao:
        "Mantemos a operação estável com suporte recorrente, prevenção de problemas e evolução contínua.",
    },
  ],
};

export const diferenciaisContent = {
  eyebrow: "Por que a Synqia",
  titulo: "Diferenciais",
  subtitulo: "O que torna o nosso trabalho diferente na prática:",
  itens: [
    {
      titulo: "Contato direto com o responsável técnico",
      descricao:
        "Sem intermediários, sem fila de atendimento. Você fala com quem realmente resolve o problema.",
    },
    {
      titulo: "Soluções desenvolvidas internamente",
      descricao:
        "Tudo construído pela nossa equipe. Sem terceirização oculta ou código genérico adaptado.",
    },
    {
      titulo: "Presença em Itumbiara e atendimento nacional",
      descricao:
        "Atendimento presencial quando necessário. Suporte remoto para empresas em todo o Brasil.",
    },
    {
      titulo: "Diagnóstico antes da proposta",
      descricao:
        "Entendemos o problema antes de propor qualquer solução. Nada é padronizado ou genérico.",
    },
    {
      titulo: "Comunicação sem jargão técnico",
      descricao:
        "Traduzimos tecnologia em linguagem de negócio. Você entende cada decisão tomada.",
    },
    {
      titulo: "Foco em resultado operacional",
      descricao:
        "Não vendemos tecnologia por tecnologia. O objetivo é sempre melhorar a operação da sua empresa.",
    },
  ],
};

export const regiaoContent = {
  eyebrow: "Atendimento",
  titulo: "Onde atuamos",
  subtitulo:
    "Atendimento presencial no Triângulo Mineiro e Sul de Goiás - suporte remoto para todo o Brasil.",
  regioes: [
    {
      nome: "Itumbiara",
      descricao: "Sede e atendimento presencial",
      destaque: true,
      remoto: false,
      href: "/consultoria-ti-itumbiara",
    },
    {
      nome: "Goiânia e região",
      descricao: "Atendimento presencial e remoto",
      destaque: false,
      remoto: false,
      href: "/consultoria-ti-goias",
    },
    {
      nome: "Uberlândia",
      descricao: "Atendimento remoto, visitas agendadas",
      destaque: false,
      remoto: false,
      href: "/consultoria-ti-triangulo-mineiro",
    },
    {
      nome: "Triângulo Mineiro",
      descricao: "Cobertura em Uberlândia e região",
      destaque: false,
      remoto: false,
      href: "/consultoria-ti-triangulo-mineiro",
    },
    {
      nome: "Sul de Goiás",
      descricao: "Cobertura em Itumbiara e região",
      destaque: false,
      remoto: false,
      href: "/consultoria-ti-goias",
    },
    {
      nome: "Brasil",
      descricao: "Atendimento 100% remoto",
      destaque: false,
      remoto: true,
    },
  ],
};
