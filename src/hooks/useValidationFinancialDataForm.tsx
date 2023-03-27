import { useEffect } from 'react';
import { iFinancialData } from '../interfaces/iFinancialData';
import {
  SMMLV,
} from '../lib/simulator';


export default function useValidationFinancialDataForm(
  occupation: string,
  enterprise: string | null,
  contractType: string | null,
  employeeYear: string | null,
  employeeMonth: string | null,
  monthlySalary: number,
  monthlyExpenses: number,
  realStateValue: number,
  debtValue: number,
  clearErrors: any,
  setError: any,
  setValue: any,
  financialDataForm: Partial<iFinancialData>
) {
  const handleClearErrors = () => {
    clearErrors('occupation');
    clearErrors('enterprise');
    clearErrors('contractType');
    clearErrors('employeeYearE');
    clearErrors('employeeMonthE');
    clearErrors('monthlySalaryE');
    clearErrors('monthlyExpenses');
    clearErrors('realStateValue');
    clearErrors('debtValue');
  };
  const validations = () => {
    if (monthlySalary > 0 && monthlySalary < SMMLV) {
      setError('monthlySalaryE', {
        type: 'error',
        message: 'Los ingresos mínimos permitidos son de 1 SMMLV.',
      });
    }
    if (occupation === "Employee") {
      if (employeeYear && (employeeYear?.length > 2 || +employeeYear > 40)) {
        setError('employeeYearE', {
          type: 'error',
          message: 'Supera el límite de años permitidos',
        });
      }
      if (employeeMonth && +employeeMonth > 11) {
        setError('employeeMonthE', {
          type: 'error',
          message: 'Supera el límite de meses permitidos',
        });
      }
    }
  };
  useEffect(() => {
    if (Object.entries(financialDataForm).length > 0) {
      setValue("occupation", financialDataForm.occupation);
      setValue("enterprise", financialDataForm.enterprise);
      setValue("contractType", financialDataForm.contractType);
      setValue("employeeYear", financialDataForm.employeeYear);
      setValue("employeeMonth", financialDataForm.employeeMonth);
      setValue("monthlySalary", financialDataForm.monthlySalary);
      setValue("monthlyExpenses", financialDataForm.monthlyExpenses);
      setValue("realStateValue", financialDataForm.realStateValue);
      setValue("debtValue", financialDataForm.debtValue);

    }
  }, [])
  useEffect(() => {
    handleClearErrors();
    validations();
  }, [occupation, enterprise, contractType, employeeYear, employeeMonth, monthlySalary, monthlyExpenses, realStateValue, debtValue]);
}
