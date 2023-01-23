import { useRouter } from 'next/router';
import React from 'react'
import { FormData, RegisterForm } from '../../components/ui/Form';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import LogoBcs from '../../components/svg/LogoBcs';
import { onSubmitStartProcess } from '../../hooks/functions';

function InicioSolicitud() {
  const router = useRouter();
  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  return (
    <>
      <div className="flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1160px] pt-5 xs:ml-4 lg:pl-[140px] lg:pt-10 md:pl-[100px] md:pt-10">
        <LogoBcs />
      </div>
      <div className="flex justify-center">
        <div className="mt-[1rem] sm:w-[343px] md:w-[528px] lg:w-[684px]">
          <RegisterForm
            onSubmit={(formData: FormData) => onSubmitStartProcess(formData, setDataUser, router)}
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
