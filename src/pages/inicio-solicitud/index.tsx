import { FormData, RegisterForm } from '../../components/ui';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import LogoBcs from '../../components/svg/LogoBcs';
import { getQuestions } from '../../services';
import { useRouter } from 'next/router';
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
    if (!response.error) {
      setDataQuestions(response.response.data);
      router.push(routes.validacionIdentidad);
    } else {
      console.log(response.response);
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
};

export default InicioSolicitud;
