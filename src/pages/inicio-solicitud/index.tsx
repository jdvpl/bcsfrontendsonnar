import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FormData, RegisterForm } from '../../components/ui/Form';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import LogoBcs from '../../components/svg/LogoBcs';
import { onSubmitStartProcess } from '../../hooks/functions';

import { invokeEvent } from '../../utils';

function InicioSolicitud() {
  const [, setDataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, {});
  const router = useRouter();
  const [dataUser, setDataUser] = useSessionStorage(SesionStorageKeys.dataUser.key, {});
  const [campaign, ] = useSessionStorage(SesionStorageKeys.marketingCampaing.key, null);

  useEffect(() => {
    invokeEvent('load_start_request', 'load_page');
  }, []);


  return (
    <>
      <div className="flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1160px] pt-5 xs:ml-4 lg:pl-[140px] lg:pt-10 md:pl-[100px] md:pt-10">
        <LogoBcs />
      </div>
      <div className="flex justify-center">
        <div className="mt-[1rem] sm:w-[343px] md:w-[528px] lg:w-[684px]">
          <RegisterForm
            onSubmit={(formData: FormData) => {
              invokeEvent('start_request', 'action_funnel');
              onSubmitStartProcess(formData, setDataUser, router, setDataQuestions,campaign);
            }}
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
