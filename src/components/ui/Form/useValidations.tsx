import { useEffect } from 'react';
import {
  minValueQuotaAllowed,
  SMMLV,
} from '../../../lib/simulator';
import { convertToColombianPesos } from '../../../utils';


export default function useValidations(
  typeHouse: string,
  monthlySalary: number,
  amountQuota: number,
  termFinance: number,
  getPercentage: any,
  clearErrors: any,
  setError: any,
  setpercentage: any,
  seterrorMessageAlert: any,
  setValue: any
) {
  const handleClearErrors = () => {
    clearErrors('typeHouse');
    clearErrors('monthlySalaryE');
    clearErrors('amountQuotaE');
    clearErrors('termFinance');
  };

  const validateTypeHouse = () => {
    if (monthlySalary > 0 && monthlySalary < SMMLV) {
      setError('monthlySalaryE', {
        type: 'error',
        message: 'Los ingresos mínimos permitidos son de 1 SMMLV.',
      });
    }
    if (typeHouse === "vis" && amountQuota > 0 && amountQuota > monthlySalary * 0.4) {
      setError('amountQuotaE', {
        type: 'error',
        message: 'La cuota mensual no puede superar el 40% de sus ingresos.',
      });
    }
    if (typeHouse === "novis" && amountQuota > 0 && amountQuota > monthlySalary * 0.3) {
      setError('amountQuotaE', {
        type: 'error',
        message: 'La cuota mensual no puede superar el 30% de sus ingresos.',
      });
    }
    if (amountQuota > 0 && amountQuota < minValueQuotaAllowed) {
      setError('amountQuotaE', {
        type: 'error',
        message: `La cuota mensual no puede ser inferior a ${(convertToColombianPesos(minValueQuotaAllowed))}`,
      });
    }
  };

  useEffect(() => {
    if (typeHouse === 'novis') {
      setpercentage(0.3);
      setValue('percentageQuota', 0.3);
      seterrorMessageAlert(
        'El valor de la cuota mensual para vivienda No VIS, no puede superar el 30% de sus ingresos totales..'
      );
    } else if (typeHouse === 'vis') {
      setValue('percentageQuota', 0.4);
      seterrorMessageAlert(
        'El valor de la cuota mensual para vivienda VIS, no puede superar el 40% de sus ingresos totales.'
      );
      setpercentage(0.4);
    }
  }, [typeHouse])

  useEffect(() => {
    handleClearErrors();
    validateTypeHouse();
    getPercentage();

  }, [typeHouse, monthlySalary, amountQuota, termFinance]);
}
