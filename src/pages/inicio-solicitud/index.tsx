import { useRouter } from 'next/router';
import React from 'react'
import { FormData, RegisterForm } from '../../components/ui/Form';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import LogoBcs from '../../components/svg/LogoBcs';
import { routes } from '../../routes';
import { sendAuthorization } from '../../services';

function InicioSolicitud() {
  const router = useRouter();

  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const onSubmit = async (formData: FormData) => {
    const labels = { policy_and_terms_label: 'Acepta tratamiento de datos personales y consulta en centrales de riesgo', commercial_terms_label: 'Autoriza que su información sea utilizada con fines comerciales' }
    const data = { ...formData, ...labels }
    const response = await sendAuthorization(data)
    setDataUser(formData);
    if (!response.error) {
      console.log(response.response)
      if (response.response.result) {
        router.push(routes.authentication)
      } else {
        router.push(routes.validacionErrorValidacionIdentidad);
      }
    } else {
      router.push(routes.validacionErrorValidacionIdentidad);
    }
  }

  return (
    <>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 xs:ml-4">
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
