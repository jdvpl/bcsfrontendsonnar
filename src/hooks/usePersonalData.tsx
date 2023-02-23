import { useEffect } from "react";
import { iPersonalData } from "../interfaces/dataUserBasic";
import { routes } from "../routes";
import { calculateAge, emailMasked, isValidDate, cellPhoneMaked, getCityById, getHasAdviserNameAdviser } from "../utils";

export default function usePersonalData(setValue: any, userInfo: any,
  setError: any,
  clearErrors: any, dayDt: any,
  monthDt: any,
  yearDt: any,
  router: any,
  setDataUser: any,
  setCurrentRouting: any
) {

  const date = userInfo?.birthDay?.split('-');
  useEffect(() => {
    setValue('yearDt', date ? date[0] : undefined);
    setValue('monthDt', date ? date[1] : '');
    setValue('dayDt', date ? date[2] : '');
    setValue('phone', cellPhoneMaked(userInfo.cellPhone))
    setValue('email', emailMasked(userInfo.email));
    if (userInfo.isClient) {
      setValue('currentAddress', userInfo.addres);
    }
  }, [userInfo])

  useEffect(() => {
    clearErrors('dayDt');
    if (dayDt && monthDt && yearDt?.length === 4) {
      const age = calculateAge(`${dayDt}/${monthDt}/${yearDt}`);
      if (age < 18 || age > 71) {
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
    const hasAdviser = userInfo.isClient ? getHasAdviserNameAdviser(userInfo.residenceCity) : null;
    const nameAdviser = userInfo.isClient ? getHasAdviserNameAdviser(userInfo.residenceCity) : null;
    const dataSend = {
      birthDate,
      birthCity,
      currentCity,
      hasAdviser: userInfo.isClient ? hasAdviser?.hasAdviser : data?.currentCity?.hasAdviser,
      nameAdviser: userInfo.isClient ? nameAdviser?.nameAdviser : data?.currentCity?.nameAdviser,
      phone: data.phone,
      gender: data.gender,
      currentAddress: data.currentAddress,
      email: data.email,
    };
    console.log({ dataSend })
    setDataUser(dataSend);
    setCurrentRouting(routes.sarlaft);
    router.push(routes.sarlaft);
  };
  return { onSubmit };
}