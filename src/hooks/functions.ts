import { routes } from "../routes";
import { loginAccountSendRequest, sendAuthorization, sendQuestions } from "../services";
import { FormData } from '../components/ui/Form'

interface InitDataSend {
  document_type: string;
  document_number: string;
}
export const onSubmitResponse = async (initData: InitDataSend, dataTU: any, router: any, setDataValid: any, setDataNumber: any) => {
  const body = {
    document_type: dataTU?.document_type,
    document_number: dataTU?.document_number,
    items: initData,
  };
  const response = await sendQuestions(body);
  if (response.error) {
    const code = response.response?.internal_code;
    switch (code) {
      case 'VQ-01':
        router.push(routes.startProccess);
        break;
      case 'VQ-02':
        router.push(routes.validacionErrorValidacionIdentidad);
        break;
      case 'VQ-03':
        router.push(routes.validacionBiometrica);
        break;
      default:
        break;
    }
  } else if (!response.error) {
    const { step } = response.response.data;
    if (step === 'AUTH') {
      setDataValid(true);
    } else if (step === 'VQ') {
      setDataNumber(response.response.data);
    }
  } else {
    router.push(routes.errorValidacion)
  }
};


export const onSubmitStartProcess = async (formData: FormData, setDataUser: any, router: any) => {
  const labels = { policy_and_terms_label: 'Acepta tratamiento de datos personales y consulta en centrales de riesgo', commercial_terms_label: 'Autoriza que su información sea utilizada con fines comerciales' }
  const data = { ...formData, ...labels }
  const response = await sendAuthorization(data)
  setDataUser(formData);
  if (!response.error) {
    if (response.response.result) {
      router.push(routes.authentication)
    } else {
      router.push(routes.validacionErrorValidacionIdentidad);
    }
  } else {
    router.push(routes.validacionErrorValidacionIdentidad);
  }
}


export const loginAccount = async (dataSend: any, setIsLoading: any, dataTU: any, router: any, setBorder: any, setmessagePassword: any, setlockedUser: any) => {
  setIsLoading(true);
  const data = { password: dataSend.password, documentType: dataTU.document_type, documentNumber: dataTU.document_number }
  const response = await loginAccountSendRequest(data);
  if (!response.error) {
    router.push(routes.otp)
    setIsLoading(false);
  } else {
    const code = response.response.internal_code;
    switch (code) {
      case 'AUTH-01':
        setBorder('#E9132B');
        setmessagePassword('Contraseña incorrecta intente nuevamente');
        setlockedUser(true);

        break;
      case 'AUTH-02':
        setBorder('#E9132B');
        setmessagePassword('Usuario bloqueado');
        setlockedUser(true);
        break;
      default:
        break;
    }
    setIsLoading(false);
  }
}