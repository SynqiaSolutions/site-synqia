export const integracaoHero = {
  titulo: "Integração de sistemas para conectar a operação da sua empresa",
  subtitulo:
    "Conectamos ERPs, planilhas, plataformas de venda, CRMs e ferramentas internas para que os dados fluam sem retrabalho, erro humano ou informação duplicada.",
};

export interface AreaIntegracao {
  titulo: string;
  descricao: string;
  resultado: string;
  itens: string[];
}

export const areasIntegracao: AreaIntegracao[] = [
  {
    titulo: "Integração via API",
    descricao:
      "Conectamos sistemas modernos por API REST, webhooks e serviços em nuvem com segurança e monitoramento.",
    resultado: "Sistemas conversando em tempo real.",
    itens: [
      "APIs REST e webhooks",
      "Autenticação e tokens",
      "Logs e monitoramento",
      "Retentativas automáticas",
    ],
  },
  {
    titulo: "ERP, CRM e Plataformas de Gestão",
    descricao:
      "Integramos ferramentas de gestão com operação, financeiro, estoque e atendimento para eliminar lançamentos duplicados.",
    resultado: "Uma única fonte de verdade entre áreas.",
    itens: [
      "Sincronização de pedidos",
      "Cadastro de clientes",
      "Estoque e faturamento",
      "Status operacionais",
    ],
  },
  {
    titulo: "E-commerce e Canais de Venda",
    descricao:
      "Conectamos lojas virtuais, marketplaces e PDVs com estoque, financeiro e logística da empresa.",
    resultado: "Vendas online integradas ao backoffice.",
    itens: [
      "Pedidos automáticos",
      "Atualização de estoque",
      "Notificações de envio",
      "Conciliação financeira",
    ],
  },
  {
    titulo: "Sincronização e Middleware",
    descricao:
      "Quando os sistemas não conversam nativamente, construímos camadas intermediárias para transformar, validar e sincronizar dados.",
    resultado: "Integração estável mesmo entre sistemas legados.",
    itens: [
      "Middleware sob medida",
      "Mapeamento de campos",
      "Validação de dados",
      "Filas e eventos",
    ],
  },
];

export const integracaoCta = {
  titulo: "Seus sistemas precisam conversar entre si?",
  subtitulo:
    "Descreva quais ferramentas operam isoladas hoje. Mapeamos a integração ideal para sua operação.",
  botao: "Falar sobre integrações",
};
