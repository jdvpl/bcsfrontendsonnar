import { useEffect } from 'react';
import { calculateAge } from '../utils';

export default function useValidateAge(
  day: any,
  month: any,
  year: any,
  clearErrors: any,
  setError: any
) {
  const handleClearErrors = () => {
    clearErrors('day');
    clearErrors('month');
    clearErrors('year');
  };

  const validateAge = () => {
    if (day && month && year) {
      const age = calculateAge(`${day}/${month}/${year}`);
      if (age < 19 || age > 69) {
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
  useEffect(() => {
    validateAge();
    handleClearErrors();
  }, [day, month, year]);

  return { handleClearErrors, validateAge };
}
