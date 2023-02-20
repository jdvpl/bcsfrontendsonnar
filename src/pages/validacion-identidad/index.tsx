import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Stepper from '../../components/ui/Stepper';
import { Question, ValidationForm } from '../../components/ui/Form/ValidationForm';
import { ValidationFormNumber } from '../../components/ui/Form/validationFormNumber';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Layout from '../../components/layouts/layout';
import AnimationComponent from '../../components/commons/Animation';
import NavTitle from '../../components/commons/NavTitle';
import { SesionStorageKeys } from '../../session';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';
import { onSubmitResponse } from '../../hooks/functions';
import TagManager from 'react-gtm-module';
import useProtectedRoutes from '../../hooks/useProtectedRoutes'
interface Quest {
  items: Question[];
}
const Index: React.FC = () => {
  const router = useRouter();
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [dataNumber, setDataNumber] = useState<any | null>(null);
  const [dataValid,] = useState(false);
  const [, setprogress] = useState('');
  const [loading] = useState(false);

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
  const { setCurrentRouting } = useProtectedRoutes();
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
                  onSubmitResponse(dataSend, dataTU, router, setDataNumber, dataQuestions?.processId, setCurrentRouting);
                  setprogress('75%');
                }}
              />
            </AnimatePresence>
          )}

          <AnimatePresence>
            {dataNumber && <ValidationFormNumber questions={dataNumber} setCurrentRouting={setCurrentRouting} />}
          </AnimatePresence>
        </Layout>
      </InactivityWarper>
    </>
  );
};

export default Index;
