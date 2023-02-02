import { useEffect } from "react";
import { calculateAge, isValidDate } from "../utils";

export default function usePersonalData(setValue: any, userInfo: any,
  setError: any,
  clearErrors: any, dayDt: any,
  monthDt: any,
  yearDt: any,
) {

  const date = userInfo.birthDt.split('-');
  useEffect(() => {
    setValue('yearDt', date[0]);
    setValue('monthDt', date[1]);
    setValue('dayDt', date[2]);
    setValue('phone', userInfo.cellPhone)
    setValue('email', userInfo.emailAddr)
    setValue('currentAddress', userInfo.addr1)
  }, [userInfo])

  useEffect(() => {
    clearErrors('dayDt');
    if (dayDt && monthDt && yearDt.length === 4) {
      const age = calculateAge(`${dayDt}/${monthDt}/${yearDt}`);
      if (age < 19 || age > 71) {
        setError(
          'dayDt',
          {
            type: 'error',
            message: 'Fecha inválida',
          },
          {
            shouldFocus: true,
          }
        );
      }
      if (!isValidDate(parseInt(yearDt), parseInt(monthDt), parseInt(dayDt))) {
        setError(
          'dayDt',
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
  }, [yearDt, dayDt, monthDt]);


}