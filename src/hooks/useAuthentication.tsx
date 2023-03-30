import { routes } from '../routes';
import { getQuestions } from '../services';
import { isBrowser } from 'react-device-detect';
import { invokeEvent } from '../utils';

export default function useAuthentication(
  setShowAnimation: (data: boolean) => void,
  setValidated: (data: boolean) => void,
  dataUser: any,
  setDataQuestions: (data: any) => void,
  router: any,
  setCurrentRouting: any,
  dataQuestions: any
) {
  const onSubmit = async () => {
    setShowAnimation(true);
    setValidated(true);
    await setCurrentRouting(routes.validacionIdentidad);
    const body = {
      document_type: dataUser.document_type,
      document_number: dataUser.document_number,
      dataTreatment: dataUser.policy_and_terms,
      productRegulation: dataUser.policy_and_terms,
      commercialPurposes: dataUser.commercial_terms,
      processId:dataQuestions?.processId,
    };
    const response = await getQuestions(body);
    if (!response?.error) {
      invokeEvent('start_authentication','action_funnel');
      setDataQuestions({ ...dataQuestions, ...response?.response?.data });
      router.push(routes.validacionIdentidad);
      return;
    }
    if (response.response?.status === 403) {
      setDataQuestions({ ...dataQuestions, ...response.response.data });
      const dataResponse: any = await response.response.json();
      const code = dataResponse.internal_code;
      // switch (code) {
      //   case 'RL-02':
      //   case 'IV-02':
      //   case 'IV-03':
      //   case 'IV-05':
      //     router.push(routes.validacionErrorValidacionIdentidad);
      //     break;
      //   case 'IV-08':
      //     router.push(routes.validacionErrorDiario);
      //     break;
      //   case 'IV-09':
      //     router.push(routes.validacionBlock);
      //     break;
      //   case 'PF-01':
      //   case 'PF-02':
      //     router.push(routes.validacionBiometrica);
      //     break;
      //   case 'ER-00':
      //     router.push(routes.startProccess);
      //     break;
      //   default:
      //     break;
      // }
    } else {
      // router.push(routes.errorValidacion);
    }
  };
  return { onSubmit, isBrowser };
}
