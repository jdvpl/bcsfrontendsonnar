import { routes } from "../routes";
import { sendAuthorization, sendQuestions } from "../services";
import { FormData } from '../components/ui/Form'
import TagManager from "react-gtm-module";
import { iPersonalDataResponse } from '../interfaces/iPersonalDataResponse'
interface InitDataSend {
  document_type: string;
  document_number: string;
}
export const onSubmitResponse = async (
  initData: InitDataSend,
  dataTU: any,
  router: any,
  setDataNumber: any,
  processId: string,
  setCurrentRouting: any,
  setBasicData: any,
  setLoading: any
) => {
  setLoading(true);
  const body = {
    document_type: dataTU?.document_type,
    document_number: dataTU?.document_number,
    items: initData,
    processId,
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
    if (response.response?.statusCode === 500) {
      router.push(routes.servicError);
    }
  } else if (!response.error) {
    const step = response.response?.data?.question?.step;
    const info: iPersonalDataResponse = {
      isClient: response.response.data.isClient,
      clientType: response.response.data.clientType,
      ...response.response.data.clientBasicData,
    };
    setBasicData(info);
    if (step === 'AUTH') {
      setCurrentRouting(routes.validacionIdentidad, false);
      setCurrentRouting(routes.otc);
      router.push(routes.otc);
    } else if (step === 'VQ') {
      setDataNumber(response.response.data.question);
      setLoading(false);
    }
  } else {
    router.push(routes.errorValidacion);
  }
};

export const onSubmitStartProcess = async (
  formData: FormData,
  setDataUser: any,
  router: any
) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'go_auth',
      category: 'action_funnel',
      action: 'go_auth',
      label: 'go_auth',
    },
  });
  const labels = { policy_and_terms_label: 'Acepta tratamiento de datos personales y consulta en centrales de riesgo', commercial_terms_label: 'Autoriza que su información sea utilizada con fines comerciales' }
  const data = { ...formData, ...labels }
  const response = await sendAuthorization(data);
  setDataUser(formData);
  if (!response.error) {
    if (response.response.result) {
      router.push(routes.authentication);
    } else {
      router.push(routes.validacionErrorValidacionIdentidad);
    }
  } else {
    router.push(routes.validacionErrorValidacionIdentidad);
  }
};
