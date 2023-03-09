import { routes } from "../routes";
import { sendNumber } from "../services";

export interface FormData {
  number: number | string;
}
const useValidationFormNumber = (dataTU: any, setDataTU: any, setEncript: any, setLoaded: any, router: any, setProcessBiometry: any, dataQuestions: any, setCurrentRouting: any) => {
  const proccessResponse = (redirect: string) => {
    setLoaded(true);
    setTimeout(() => router.push(redirect), 100);
  };
  const onSubmit = async (formData: FormData) => {
    const body = {
      document_type: dataTU?.document_type,
      document_number: dataTU?.document_number,
      phone: formData.number,
      processId: dataQuestions.processId
    };
    console.log({body});
    const response = await sendNumber(body);
    if (!response.error) {
      setDataTU({
        ...dataTU,
        personalData: {
          celular: response.response.data.phone,
          phoneNumber: formData.number,
        },
      });
      setEncript(formData.number);
      setCurrentRouting(routes.validacionIdentidad, false);
      setCurrentRouting(routes.otp)
      proccessResponse(routes.otp);
    } else if (response.status === 403) {
      const code = response.response.internal_code;
      switch (code) {
        case 'VQ-01':
          router.push(routes.startProccess);
          break;
        case 'VQ-03':
          router.push(routes.validacionBiometrica);
          break;
        case 'PF-00':
          router.push(routes.validacionErrorValidacionIdentidad);
          break;
        case 'PF-02':
          router.push(routes.validacionSucursalError);
          break;
        case 'PF-03':
          setProcessBiometry('no');
          router.push(routes.validacionBiometrica);
          break;
        default:
          router.push(routes.validacionBiometrica);
          break;
      }
    } else {
      router.push(routes.validacionError);
    }
  };

  return { onSubmit }
}


export default useValidationFormNumber;