export interface iFinancialData {
  occupation: string;
  enterprise: string | null;
  contractType: string | null;
  employeeYear: string | null;
  employeeYearE?: string | null;
  employeeMonth: string | null;
  employeeMonthE?: string | null;
  monthlySalary: number;
  monthlySalaryE?: number;
  monthlyExpenses: number;
  realStateValue: number;
  debtValue: number;
}