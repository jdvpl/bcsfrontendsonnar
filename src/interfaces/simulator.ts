export interface SimulationData {
  simulationType: string;
  typeHouse: string;
  houseValue: number;
  monthlySalaryE?: number;
  monthlySalary: number;
  amountQuotaE?: number;
  amountQuota: number;
  percentageFinance: number;
  percentageQuota: number;
  financeValue: number;
  termFinance: number;
  insuranceCheck: boolean;
  dateOfBirth: string;
  year?: string;
  day?: string;
  month?: string;
}
