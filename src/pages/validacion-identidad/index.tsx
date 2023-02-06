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
import { loginAccount, onSubmitResponse } from '../../hooks/functions';
import TagManager from 'react-gtm-module';
interface Quest {
  items: Question[];
}
const Index: React.FC = () => {
  const router = useRouter();
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU, setDataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [dataNumber, setDataNumber] = useState<any | null>(null);
  const [dataValid, setDataValid] = useState(false);
  const [, setprogress] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [initialBorder, setBorder] = useState('#00253D');
  const [messagePassword, setmessagePassword] = useState('');
  const [lockedUser, setlockedUser] = useState(false)

  const data: Quest = dataQuestions;
  useEffect(() => {
    setprogress('25%');
  }, []);
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'load_anwsers',
        category: 'load_page',
        action: 'load_anwsers',
        label: 'load_anwsers',
      },
    });

  }, []
  );
  return (
    <>
      <Head>
        <title>Validación de identidad - BCS Credito Hipotecario</title>
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
                  onSubmitResponse(dataSend, dataTU, router, setDataValid, setDataNumber, dataQuestions?.processId);
                  setprogress('75%');
                }}
              />
            </AnimatePresence>
          )}
          <AnimatePresence>
            {dataValid ? <VerificationForm initialBorder={initialBorder} messagePassword={messagePassword} lockedUser={lockedUser}
              setBorder={setBorder} onSubmit={(dataLogin: any) => { loginAccount(dataLogin, setIsLoading, dataTU, router, setBorder, setmessagePassword, setlockedUser, setDataTU, dataQuestions?.processId) }} /> : ''}
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
