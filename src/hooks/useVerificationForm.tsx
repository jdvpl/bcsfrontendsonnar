import { useEffect } from "react";

export default function useVerificationForm(fields: any, setBorder: any) {

  useEffect(() => {
    if (fields.password) {
      if (fields.password !== '') {
        setBorder('#798C98');
      } else if (fields.password === '') {
        setBorder('#E9132B');
      }
    }
  }, [fields.password]);

}