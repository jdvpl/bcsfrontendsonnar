import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Stepper from '../../components/ui/Stepper';
import { Question, ValidationForm } from '../../components/ui/Form/ValidationForm';
import { ValidationFormNumber } from '../../components/ui/Form/validationFormNumber';
import VerificationForm from '../../components/ui/Form/verificationForm';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Layout from '../../components/layouts/layout';
import AnimationComponent from '../../components/commons/Animation';
import NavTitle from '../../components/commons/NavTitle';
import { SesionStorageKeys } from '../../session';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';
import { onSubmitResponse } from '../../hooks/functions';
interface Quest {
  items: Question[];
}
const Index: React.FC = () => {
  const router = useRouter();
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [dataNumber, setDataNumber] = useState<any | null>(null);
  const [dataValid, setDataValid] = useState(false);
  const [progress, setprogress] = useState('');
  const [loading, setIsLoading] = useState(false);
  const data: Quest = dataQuestions;
  useEffect(() => {
    setprogress('25%');
  }, []);
  const loginAccount = (dataSend: any) => {
    // console.log({ dataSend })
  }
  return (
    <>
      <Head>
        <title>Validación de identidad - BCS Viviendamiga Digital</title>
      </Head>
      <InactivityWarper>
        <Layout navTitle={<NavTitle noBack />}>
          {loading && <AnimationComponent show="" valid={loading} loaded={false} />}
          {!dataValid &&
            < Stepper steps={4} actualStep={1} title="Validación de identidad" />
          }
          {data && !dataNumber && !dataValid && (
            <AnimatePresence>
              <ValidationForm
                questions={data?.items}
                onSubmit={(dataSend: any) => {
                  onSubmitResponse(dataSend, dataTU, router, setDataValid, setDataNumber);
                  setprogress('75%');
                }}
              />
            </AnimatePresence>
          )}
          <AnimatePresence>
            {dataValid ? <VerificationForm onSubmit={(dataLogin: any) => { loginAccount(dataLogin) }} /> : ''}
          </AnimatePresence>
          <AnimatePresence>
            {dataNumber && <ValidationFormNumber questions={dataNumber} />}
          </AnimatePresence>
        </Layout>
      </InactivityWarper>
    </>
  );
};

export default Index;
