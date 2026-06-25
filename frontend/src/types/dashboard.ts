export interface ChartDataPeriod {
  periodo: string;
  quantidade: number;
}

export interface RecentReport {
  id: number;
  usf: string;
  detalhes_atividade: string;
  data_submissao: string;
  status: "PENDENTE" | "APROVADO" | "REJEITADO";
}


export interface ReportSummary {
  totalReports: number;
  approved: number;
  rejected: number;
  pending: number;
  totalHoursInputted: number;
  totalHoursApproved: number;
  totalHoursPending: number;
  recentReports: RecentReport[];
  chartDataPeriod: ChartDataPeriod[]; 
}