import { useEffect } from 'react';
import {
  maxHouseValueNoVis,
  maxHouseValueVis,
  minHouseValueNoVis,
  minHouseValueVis,
  SMMLV,
} from '../../../../lib/simulator';
import { calculateAge, isValidDate } from '../../../../utils';

export default function useValidations(
  typeHouse: string,
  houseValue: number,
  financeValue: number,
  termFinance: number,
  calculatePercentageFinance: any,
  day: any,
  month: any,
  year: any,
  clearErrors: any,
  setError: any
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
    if (
      (houseValue < minHouseValueVis || houseValue > maxHouseValueVis) &&
      typeHouse === 'vis' &&
      houseValue > 0
    ) {
      setError('typeHouse', {
        type: 'error',
        message: 'El valor de la vivienda VIS debe estar entre 50 y 150 SMMLV.',
      });
    }
    if (houseValue < minHouseValueNoVis && typeHouse === 'novis' && houseValue > 0) {
      setError('typeHouse', {
        type: 'error',
        message: 'El valor mínimo de la vivienda debe ser de 150 SMMLV.',
      });
    }
    if (houseValue > maxHouseValueNoVis && typeHouse === 'novis' && houseValue > 0) {
      setError('typeHouse', {
        type: 'error',
        message: 'El valor de la vivienda máximo debe ser de 1.400 SMMLV.',
      });
    }
  };

  const validateAge = () => {
    if (day && month && year) {
      const age = calculateAge(`${day}/${month}/${year}`);
      if (age < 19 || age > 71) {
        setError(
          'day',
          {
            type: 'error',
            message: 'Fecha inválida',
          },
          {
            shouldFocus: true,
          }
        );
      }
      if (!isValidDate(parseInt(year), parseInt(month), parseInt(day))) {
        setError(
          'day',
          {
            type: 'error',
            message: 'Fecha inválida',
          },
          {
            shouldFocus: true,
          }
        );
      }
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
        message: 'El valor mínimo a financiar para vivienda VIS es de 20 SMMLV.',
      });
    }
  };

  useEffect(() => {
    handleClearErrors();
    validateTypeHouse();
    validatefinanceValue();
    calculatePercentageFinance();
    validateAge();
  }, [typeHouse, houseValue, financeValue, termFinance, day, month, year]);
}
