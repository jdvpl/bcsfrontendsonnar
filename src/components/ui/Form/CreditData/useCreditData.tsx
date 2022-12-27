import React, { useEffect } from 'react';
import { maxHouseValueNoVis, minHouseValueVis, SMMLV } from '../../../../lib/simulator';

export default function useValidations(
  houseValue: number,
  financeValue: number,
  termFinance: number,
  clearErrors: any,
  setError: any,
  setPercentageFinance: any,
  setValue: any
) {
  const handleClearErrors = () => {
    clearErrors('typeHouse');
    clearErrors('houseValue');
    clearErrors('financeValueE');
    clearErrors('termFinance');
    clearErrors('day');
    clearErrors('month');
    clearErrors('year');
  };
  const validateTypeHouse = () => {
    if (houseValue < minHouseValueVis && houseValue > 0) {
      setError('typeHouse', {
        type: 'error',
        message: 'El valor de la vivienda debe ser minimo de 50 SMMLV.',
      });
    }
    if (houseValue > maxHouseValueNoVis && houseValue > 0) {
      setError('typeHouse', {
        type: 'error',
        message: 'El valor de la vivienda máximo debe ser de 1.400 SMMLV.',
      });
    }
  };

  const validatefinanceValue = () => {
    if (financeValue > Math.round(houseValue * 0.7) && financeValue > 0) {
      setError('financeValueE', {
        type: 'error',
        message: 'El valor máximo a financiar no puede superar el 70% de la vivienda.',
      });
    }
    if (financeValue < SMMLV * 20 && financeValue > 0) {
      setError('financeValueE', {
        type: 'error',
        message: 'El valor mínimo a financiar para vivienda es de 20 SMMLV.',
      });
    }
  };

  const calculatePercentageFinance = () => {
    if (houseValue > 0 && financeValue > 999999) {
      const calculatePercentage = financeValue / houseValue;
      setPercentageFinance(calculatePercentage);
    }
  };

  const automationFinanceValue = (value: number) => {
    if (value > 0) {
      setValue('financeValue', Math.round(value * 0.7));
    } else {
      setValue('financeValue', 0);
    }
  };

  useEffect(() => {
    handleClearErrors();
    validatefinanceValue();
    calculatePercentageFinance();
    validateTypeHouse();
  }, [houseValue, financeValue, termFinance]);

  return {
    handleClearErrors,
    validateTypeHouse,
    validatefinanceValue,
    calculatePercentageFinance,
    automationFinanceValue,
  };
}
