import { routes } from '../routes';
import { saveSourceCampaign, sendAuthorization, sendQuestions } from '../services';
import { FormData } from '../components/ui/Form';
import { iPersonalDataResponse } from '../interfaces/iPersonalDataResponse';
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
      setLoading(false);
    } else if (step === 'VQ') {
      setDataNumber(response.response.data.question);
      setLoading(false);
    }
  } else {
    router.push(routes.errorValidacion);
    setLoading(false);
  }
};

export const onSubmitStartProcess = async (
  formData: FormData,
  setDataUser: any,
  router: any,
  setDataQuestions: any,
  campaign: any
) => {
  const labels = {
    policy_and_terms_label:
      'Acepta tratamiento de datos personales y consulta en centrales de riesgo',
  };
  const data = { ...formData, ...labels };
  const bodySourceCampaign = {
    document_number: formData.document_number,
    document_type: formData.document_type,
    campaign: campaign === null ? '' : JSON.stringify(campaign),
  };

  console.log({ bodySourceCampaign });
  const [response, responseCampaign] = await Promise.all([
    sendAuthorization(data),
    saveSourceCampaign(bodySourceCampaign),
  ]);

  setDataUser(formData);
  if (!response.error && !responseCampaign?.error) {
    if (response.response?.result?.processId) {
      router.push(routes.authentication);
      setDataQuestions({ processId: response.response?.result?.processId });
    } else {
      router.push(routes.validacionErrorValidacionIdentidad);
    }
  } else {
    router.push(routes.validacionErrorValidacionIdentidad);
  }
};
