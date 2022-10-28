import { Welcome } from '../../components/layouts';
import { FormData, RegisterForm } from '../../components/ui';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SssionStorageKeys } from '../../session';
import { useState } from 'react';

const InicioSolicitud = () => {
  const dataReg = {
    document_number: '',
    document_type: '1',
    policy_and_terms: 'false',
    commercial_terms: 'false',
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
      <div className="flex justify-center ">
        <div className="flex md:px-0 lg:mt-[0] md:mt-[93px]  md:w-[343px] md:max-w-[343px]  lg:w-[448px] lg:max-w-[448px]  lg:py-9 lg:px-[16px]">
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
