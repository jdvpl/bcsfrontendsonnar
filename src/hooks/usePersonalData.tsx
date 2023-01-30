import { useEffect } from "react";

export default function usePersonalData(setValue: any, userInfo: any) {

  const date = userInfo.birthDt.split('-');
  useEffect(() => {
    setValue('yearDt', date[0]);
    setValue('monthDt', date[1]);
    setValue('dayDt', date[2]);
    setValue('phone', userInfo.cellPhone)
    setValue('email', userInfo.emailAddr)
    setValue('currentAddress', userInfo.addr1)
  }, [userInfo])

}