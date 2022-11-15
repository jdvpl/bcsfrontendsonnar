import { useEffect } from 'react';
import { MaxHouseValueVis } from '../../../../lib/simulator';
import { calculateAge } from '../../../../utils';

export default function useValidations(
  typeHouse: string,
  houseValue: number,
  valueFinance: number,
  termFinance: number,
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
          message: "El valor de la vivienda VIS debe ser menor a $150'000.000 M",
        },
        {
          shouldFocus: true,
        }
      );
    }
  };

  const validateAge = () => {
    if (day && month && year) {
      const age = calculateAge(`${day}/${month}/${year}`);
      if (age < 19 || age > 69) {
        setError(
          'day',
          {
            type: 'error',
            message: 'No te encuentras dentro del rango de edad',
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          'month',
          {
            type: 'error',
            message: 'No te encuentras dentro del rango de edad',
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          'year',
          {
            type: 'error',
            message: 'No te encuentras dentro del rango de edad',
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
    validateAge();
  }, [typeHouse, houseValue, valueFinance, termFinance, day, month, year]);
}
