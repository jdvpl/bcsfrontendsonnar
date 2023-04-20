export interface iFormDataSimulation {
  simulationType: string;
  typeHouse: string;
  houseValue: number; // house
  percentageFinance: number; // house
  financeValue: number; // house
  termFinance: number;
  insuranceCheck: boolean;
  dateOfBirth: string;
  monthlySalary: number;
  amountQuota: number;
  percentageQuota: number;
  city?:any;
  gender?:string;
  stratum?:string|number;
}
