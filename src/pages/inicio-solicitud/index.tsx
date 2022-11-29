import { useRouter } from 'next/router';
import { FormData, RegisterForm } from '../../components/ui';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import LogoBcs from '../../components/svg/LogoBcs';
import { getQuestions } from '../../services';
import { routes } from '../../routes';

const InicioSolicitud = () => {
  const router = useRouter();
  const dataReg = {
    document_number: '',
    document_type: '',
    policy_and_terms: 'false',
    commercial_terms: 'false',
    advisory_option: 'false',
    advisory: '',
  };
  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    dataReg
  );

  const [, setDataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');

  const onSubmit = async (formData: FormData) => {
    setDataUser(formData);
    const body = {
      document_type: formData.document_type,
      document_number: formData.document_number,
      dataTreatment: formData.policy_and_terms,
      productRegulation: formData.policy_and_terms,
      commercialPurposes: formData.commercial_terms,
    };
    const response = await getQuestions(body);
    console.log(response);
    if (!response.error) {
      setDataQuestions(response.response.data);
      router.push(routes.validacionIdentidad);
      return;
    }
    if (response.response?.status === 403) {
      setDataQuestions(response.response.data);
      const dataResponse: any = await response.response.json();
      const code = dataResponse.internal_code;
      switch (code) {
        case 'RL-02':
        case 'IV-02':
        case 'IV-03':
        case 'IV-05':
          router.push(routes.validacionErrorValidacionIdentidad);
          break;
        case 'IV-08':
          router.push(routes.validacionErrorDiario);
          break;
        case 'IV-09':
          router.push(routes.validacionBlock);
          break;
        case 'PF-01':
        case 'PF-02':
          router.push(routes.validacionBiometrica);
          break;
        case 'ER-00':
          router.push(routes.startProccess);
          break;
        default:
          break;
      }
    } else {
      router.push(routes.errorValidacion);
    }
  };

  return (
    <>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5">
        <LogoBcs />
      </div>
      <div className="flex justify-center">
        <div className="mt-[1rem] sm:w-[343px] md:w-[528px] lg:w-[684px]">
          <RegisterForm
            onSubmit={(formData: FormData) => onSubmit(formData)}
            defaultValues={{
              ...dataUser,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default InicioSolicitud;
