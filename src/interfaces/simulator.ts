export interface SimulationData {
  simulationType: string;
  typeHouse: string;
  houseValue: number;
  monthlySalary: number;
  amountQuota: number;
  percentageFinance: number;
  percentageQuote: number;
  financeValue: number;
  financeValueE?:number;
  termFinance: number;
  insuranceCheck: boolean;
  dateOfBirth: string;
  year?: string;
  day?: string;
  month?: string;
}
