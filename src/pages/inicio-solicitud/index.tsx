import { FormData, RegisterForm } from '../../components/ui';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SssionStorageKeys } from '../../session';
import { useState } from 'react';
import LogoBcs from '../../components/svg/LogoBcs';

const InicioSolicitud = () => {
  const dataReg = {
    document_number: '',
    document_type: '',
    policy_and_terms: 'false',
    commercial_terms: 'false',
    advisory_option: 'false',
    advisory: '',
  };
  const [dataUser, setDataUser] = useSessionStorage(
    SssionStorageKeys.dataUser.key,
    dataReg
  );

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5">
        <LogoBcs />
      </div>
      <div className="flex justify-center ">
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
