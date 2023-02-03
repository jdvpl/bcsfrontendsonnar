import { useEffect } from "react";
import { iPersonalData } from "../interfaces/dataUserBasic";
import { routes } from "../routes";
import { calculateAge, isValidDate } from "../utils";

export default function usePersonalData(setValue: any, userInfo: any,
  setError: any,
  clearErrors: any, dayDt: any,
  monthDt: any,
  yearDt: any,
  router: any,
  setDataUser: any
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


  const onSubmit = async (data: iPersonalData) => {
    const birthDate = `${data.yearDt}-${data.monthDt}-${data.dayDt}`;
    const birthCity = data.birthCity?.option;
    const currentCity = data.currentCity?.option;
    const dataSend = {
      birthDate,
      birthCity,
      currentCity,
      hasAdviser: data?.currentCity?.hasAdviser,
      nameAdviser: data?.currentCity?.nameAdviser,
      phone: data.phone,
      gender: data.gender,
      currentAddress: data.currentAddress,
      email: data.email,
    };
    setDataUser(dataSend);
    router.push(routes.sarlaft);
  };
  return { onSubmit };
}