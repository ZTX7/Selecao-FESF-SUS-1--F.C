export interface LoggedUser {
  id: number;
  nome_completo: string;
  area_atuacao: string;
}

export interface RecentReport {
  id: number;
  usf: string;
  detalhes_atividade: string;
  data_submissao: string;
  status: "PENDENTE" | "APROVADO" | "REJEITADO";
}
