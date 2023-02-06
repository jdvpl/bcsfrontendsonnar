import { routes } from "../routes";
import { sendNumber } from "../services";

export interface FormData {
  number: number | string;
}
const useValidationFormNumber = (dataTU: any, setDataTU: any, setEncript: any, setLoaded: any, router: any, setProcessBiometry: any, dataQuestions: any) => {
  const proccessResponse = (redirect: string) => {
    setLoaded(true);
    setTimeout(() => router.push(redirect), 1000);
  };
  const onSubmit = async (formData: FormData) => {
    const body = {
      document_type: dataTU?.document_type,
      document_number: dataTU?.document_number,
      phone: formData.number,
      processId: dataQuestions.processId
    };
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
      setTimeout(() => proccessResponse(routes.otp), 1000);
    } else if (response.status === 403) {
      const code = response.response.internal_code;
      switch (code) {
        case 'VQ-01':
          router.push('/');
          break;
        case 'VQ-03':
          router.push('/validacion-biometrica/');
          break;
        case 'PF-00':
          router.push('/validacion/error-validacionIdentidad/');
          break;
        case 'PF-02':
          router.push('/validacion/error-validacionSucursal');
          break;
        case 'PF-03':
          setProcessBiometry('no');
          router.push('/validacion-biometrica/');
          break;
        default:
          router.push('/validacion-biometrica/');
          break;
      }
    } else {
      router.push('/validacion/error/');
    }
  };

  return { onSubmit }
}


export default useValidationFormNumber;