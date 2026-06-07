export const desenvolvimentoHero = {
  titulo: "Software sob medida para resolver problemas reais do seu negócio",
  subtitulo:
    "Sua empresa não deve se adaptar ao software — o software deve se adaptar à sua operação. Construímos sistemas, automações e aplicações que funcionam do jeito que o seu negócio precisa.",
};

export interface SolucaoDesenvolvimento {
  titulo: string;
  descricao: string;
  resultado: string;
  itens: string[];
}

export const solucoesDesenvolvimento: SolucaoDesenvolvimento[] = [
  {
    titulo: "Sistemas de Controle Interno",
    descricao:
      "Sistemas para organizar estoque, produção, vendas e processos internos da operação — substituindo planilhas e controles manuais.",
    resultado: "Operação controlada.",
    itens: ["Gestão de estoque", "Controle de produção", "Fluxos internos"],
  },
  {
    titulo: "Painéis e Dashboards",
    descricao:
      "Painéis com indicadores e relatórios atualizados em tempo real para tomada de decisão mais rápida e baseada em dados.",
    resultado: "Visibilidade real da operação.",
    itens: [
      "KPIs e indicadores",
      "Relatórios automáticos",
      "Gráficos interativos",
    ],
  },
  {
    titulo: "Automações e Integrações",
    descricao:
      "Integrações via API, fluxos automáticos e scripts para eliminar tarefas repetitivas e conectar sistemas que hoje operam isolados.",
    resultado: "Dados fluindo entre sistemas.",
    itens: [
      "Integrações via API",
      "Fluxos automáticos",
      "Sincronização de dados",
    ],
  },
  {
    titulo: "Portais e Ambientes Digitais",
    descricao:
      "Ambientes digitais para clientes, parceiros e equipes internas acessarem informações, documentos e serviços com segurança.",
    resultado: "Acesso organizado para quem precisa.",
    itens: [
      "Portal do cliente",
      "Área restrita para equipes",
      "Gestão de acessos",
    ],
  },
  {
    titulo: "Aplicações Web e Mobile",
    descricao:
      "Aplicações acessíveis por qualquer dispositivo para acompanhamento da operação, atendimento ao cliente ou uso interno da equipe.",
    resultado: "Acesso à operação de qualquer lugar.",
    itens: [
      "Aplicações web responsivas",
      "Apps mobile",
      "Notificações em tempo real",
    ],
  },
  {
    titulo: "Lojas e Ambientes de Venda",
    descricao:
      "Plataformas de venda online integradas com estoque, pagamento e gestão de pedidos para empresas que precisam vender pela internet.",
    resultado: "Canal de vendas digital integrado ao negócio.",
    itens: [
      "E-commerce sob medida",
      "Integração com meios de pagamento",
      "Gestão de pedidos",
    ],
  },
];

export const desenvolvimentoCta = {
  titulo: "Tem um problema que precisa de uma solução digital?",
  subtitulo:
    "Conte o desafio da sua empresa. Analisamos o cenário e propomos a solução mais adequada — sem promessas genéricas.",
  botao: "Falar com um especialista",
};
