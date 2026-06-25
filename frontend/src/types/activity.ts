export interface Activity {
  id: number;
  usf: string;
  responsavel_acompanhamento: string;
  detalhes_atividade: string;
  inicio_atividade: string;
  tipo_atividade: string;
  carga_horaria: number;
  status: "PENDENTE" | "APROVADO" | "REJEITADO";
  data_criacao: string;
}

