import { useEffect } from 'react';
import { MaxHouseValueVis } from '../../../../lib/simulator';
import { calculateAge } from '../../../../utils';

export default function useValidations(
  typeHouse: string,
  houseValue: number,
  valueFinance: number,
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
    clearErrors('valueFinance');
    clearErrors('termFinance');
    clearErrors('day');
    clearErrors('month');
    clearErrors('year');
  };

  const validateTypeHouse = () => {
    if (houseValue > MaxHouseValueVis && typeHouse === 'vis') {
      setError(
        'typeHouse',
        {
          type: 'error',
          message: "El valor de Debe ser mayor a 18 años y menor a 70 añosvivienda VIS debe ser menor a $150'000.000 M",
        },
        {
          shouldFocus: true,
        }
      );
    }
  };

  const validateAge = () => {
    if (day && month && year && year?.length === 4) {
      const age = calculateAge(`${day}/${month}/${year}`);
      if (age < 19 || age > 69) {
        setError(
          'day',
          {
            type: 'error',
            message: 'Debe ser mayor a 18 años y menor a 70 años',
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          'month',
          {
            type: 'error',
            message: 'Debe ser mayor a 18 años y menor a 70 años',
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          'year',
          {
            type: 'error',
            message: 'Debe ser mayor a 18 años y menor a 70 años',
          },
          {
            shouldFocus: true,
          }
        );
      }
    }
  };

  useEffect(() => {
    handleClearErrors();
    validateTypeHouse();
    calculatePercentageFinance();
    validateAge();
  }, [typeHouse, houseValue, valueFinance, termFinance, day, month, year]);
}
