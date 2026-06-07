export const automacaoHero = {
  titulo: "Automação de processos para eliminar retrabalho na sua operação",
  subtitulo:
    "Identificamos tarefas manuais repetitivas e substituímos por fluxos automáticos — relatórios, notificações, aprovações e integrações que funcionam no contexto real do seu negócio.",
};

export interface AreaAutomacao {
  titulo: string;
  descricao: string;
  resultado: string;
  itens: string[];
}

export const areasAutomacao: AreaAutomacao[] = [
  {
    titulo: "Automação de Fluxos Internos",
    descricao:
      "Mapeamos processos manuais e construímos fluxos digitais que reduzem etapas, erros e dependência de planilhas.",
    resultado: "Processos mais rápidos e previsíveis.",
    itens: [
      "Aprovações automáticas",
      "Encaminhamento entre setores",
      "Checklists digitais",
      "Alertas por etapa",
    ],
  },
  {
    titulo: "Relatórios e Rotinas Automáticas",
    descricao:
      "Relatórios que hoje são montados manualmente passam a ser gerados e enviados automaticamente no horário certo.",
    resultado: "Informação atualizada sem esforço manual.",
    itens: [
      "Relatórios agendados",
      "Consolidação de dados",
      "Envio por e-mail ou WhatsApp",
      "Dashboards atualizados",
    ],
  },
  {
    titulo: "Notificações e Alertas",
    descricao:
      "A equipe é avisada no momento certo — estoque baixo, prazo vencendo, falha de sistema ou pendência crítica.",
    resultado: "Problemas detectados antes de virar crise.",
    itens: [
      "Alertas por evento",
      "Notificações multicanal",
      "Regras por criticidade",
      "Monitoramento de SLAs",
    ],
  },
  {
    titulo: "Scripts e Rotinas de Backoffice",
    descricao:
      "Automatizamos tarefas repetitivas de backoffice — importação de dados, conciliações, sincronizações e rotinas noturnas.",
    resultado: "Menos horas perdidas em tarefas operacionais.",
    itens: [
      "Importação automatizada",
      "Conciliação de dados",
      "Rotinas agendadas",
      "Validações automáticas",
    ],
  },
];

export const automacaoCta = {
  titulo: "Quer eliminar tarefas manuais da sua operação?",
  subtitulo:
    "Conte quais processos consomem tempo da equipe. Analisamos e propomos automações com retorno claro.",
  botao: "Falar sobre automação",
};
