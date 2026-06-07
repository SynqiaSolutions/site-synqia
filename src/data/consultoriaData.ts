export const consultoriaHero = {
  titulo:
    "Consultoria de TI para empresas que precisam de tecnologia confiável",
  subtitulo:
    "Diagnóstico, estruturação e acompanhamento contínuo da infraestrutura tecnológica. Reduzimos falhas, organizamos a operação e garantimos previsibilidade no dia a dia.",
};

export interface AreaConsultoria {
  titulo: string;
  descricao: string;
  resultado: string;
  itens: string[];
}

export const areasConsultoria: AreaConsultoria[] = [
  {
    titulo: "Infraestrutura e Redes",
    descricao:
      "Mapeamos, organizamos e estruturamos toda a base tecnológica da empresa — equipamentos, rede, servidores e conectividade.",
    resultado: "Operação estável, sem queda de rede ou perda de dados.",
    itens: [
      "Diagnóstico de rede e conectividade",
      "Organização física e cabeamento",
      "Servidores e armazenamento",
      "Padronização de equipamentos",
    ],
  },
  {
    titulo: "Suporte Técnico Recorrente",
    descricao:
      "Atendimento direto, sem fila e sem intermediários. Problemas resolvidos no mesmo dia, com acompanhamento preventivo para evitar recorrência.",
    resultado: "TI resolvida sem precisar improvisar.",
    itens: [
      "Atendimento remoto e presencial",
      "Resolução no mesmo dia",
      "Monitoramento preventivo",
      "Relatório mensal de TI",
    ],
  },
  {
    titulo: "Segurança e Backup",
    descricao:
      "Protegemos os dados e sistemas da empresa com políticas de backup, controle de acesso e adequação às normas de proteção de dados.",
    resultado: "Dados protegidos e recuperáveis em caso de falha.",
    itens: [
      "Política de backup automatizado",
      "Controle de acesso e permissões",
      "Proteção contra ameaças",
      "Adequação à LGPD",
    ],
  },
  {
    titulo: "Planejamento e Gestão de TI",
    descricao:
      "Estruturamos um plano de TI alinhado ao crescimento da empresa, com inventário, padronização e roadmap de melhorias.",
    resultado: "Tecnologia que acompanha o crescimento do negócio.",
    itens: [
      "Inventário e documentação",
      "Padronização de processos",
      "Roadmap de melhorias",
      "Planos preventivos e corretivos",
    ],
  },
];

export const consultoriaCta = {
  titulo: "Vamos analisar a estrutura tecnológica da sua empresa?",
  subtitulo:
    "Conte o cenário atual. Respondemos com uma análise direta e sem compromisso sobre o que pode ser melhorado.",
  botao: "Falar com um especialista",
};
