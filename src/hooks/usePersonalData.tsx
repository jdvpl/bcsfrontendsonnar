import { useEffect } from "react";
import { iDataUser, iPersonalData, iPersonalDataSent } from "../interfaces/dataUserBasic";
import { routes } from "../routes";
import { calculateAge, emailMasked, isValidDate, cellPhoneMaked, getHasAdviserNameAdviser } from "../utils";

export default function usePersonalData(setValue: any, userInfo: iDataUser,
  setError: any,
  clearErrors: any, dayDt: any,
  monthDt: any,
  yearDt: any,
  router: any,
  setDataUser: any,
  setCurrentRouting: any,
  dataPersonalBasic: iPersonalDataSent
) {

  const date = userInfo?.birthDay?.split('-');
  useEffect(() => {
    setValue('yearDt', date ? date[0] : undefined);
    setValue('monthDt', date ? date[1] : '');
    setValue('dayDt', date ? date[2] : '');
    setValue('phone', cellPhoneMaked(userInfo.cellPhone))
    setValue('email', emailMasked(userInfo.email));
    if (userInfo.isClient) {
      setValue('currentAddress', userInfo.address);
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

  useEffect(() => {
    if (Object.entries(dataPersonalBasic).length > 0) {
      const date = dataPersonalBasic.birthDate?.split('-');
      setValue('yearDt', date[0]);
      setValue('monthDt', date[1]);
      setValue('dayDt', date[2]);
      setValue("birthCity", dataPersonalBasic.birthCity)
      setValue("gender", dataPersonalBasic.gender);
      setValue("currentAddress", dataPersonalBasic.currentAddress)
      setValue("email", dataPersonalBasic.email)
      setValue("phone", dataPersonalBasic.phone)
      window.location.hash = "#"
      return;
    }
  }, [])


  const onSubmit = async (data: iPersonalData) => {
    const birthDate = `${data.yearDt}-${data.monthDt}-${data.dayDt}`;
    const birthCity = data.birthCity?.option;
    const currentCity = data.currentCity?.option;
    const hasAdviser = userInfo.isClient ? getHasAdviserNameAdviser(userInfo.residenceCity) : null;
    const nameAdviser = userInfo.isClient ? getHasAdviserNameAdviser(userInfo.residenceCity) : null;
    const dataSend: iPersonalDataSent = {
      birthDate,
      birthCity,
      currentCity: userInfo.isClient ? userInfo.residenceCity : currentCity,
      hasAdviser: userInfo.isClient ? hasAdviser?.hasAdviser : data?.currentCity?.hasAdviser,
      nameAdviser: userInfo.isClient ? nameAdviser?.nameAdviser : data?.currentCity?.nameAdviser,
      phone: data.phone.trim() === cellPhoneMaked(userInfo.cellPhone) ? userInfo.cellPhone : data.phone,
      gender: data.gender,
      currentAddress: userInfo.isClient ? userInfo.address : data.currentAddress,
      email: data.email.trim() === emailMasked(userInfo.email) ? userInfo.email : data.email,
    };
    console.log({ dataSend })
    setDataUser(dataSend);
    setCurrentRouting(routes.sarlaft);
    router.push(routes.sarlaft);
  };
  return { onSubmit };
}