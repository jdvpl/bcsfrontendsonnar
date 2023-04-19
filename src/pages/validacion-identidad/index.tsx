import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Stepper from '../../components/ui/Stepper';
import { Question, ValidationForm } from '../../components/ui/Form/ValidationForm';
import { ValidationFormNumber } from '../../components/ui/Form/validationFormNumber';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Layout from '../../components/layouts/layout';
import NavTitle from '../../components/commons/NavTitle';
import { SesionStorageKeys } from '../../session';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';
import { onSubmitResponse } from '../../hooks/functions';

import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import SimulatorLoader from '../../components/ui/Loaders/SimulatorLoader';
interface Quest {
  items: Question[];
}
const Index: React.FC = () => {
  const router = useRouter();
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [, setBasicData] = useSessionStorage(SesionStorageKeys.basicDataUser.key, '');
  const [dataNumber, setDataNumber] = useState<any | null>(null);
  const [dataValid] = useState(false);
  const [progress, setProgress] = useState<number>(25);
  const [loading, setLoading] = useState(false);
  const data: Quest = dataQuestions;

  const { setCurrentRouting } = useProtectedRoutes();
  return (
    <>
      {loading ? (
        <SimulatorLoader />
      ) : (
        <>
          <Head>
            <title>Validación de identidad - BCS Credito Hipotecario</title>
          </Head>
          <InactivityWarper>
            <Layout navTitle={<NavTitle noBack />}>
              {!dataValid && (
                <Stepper
                  steps={5}
                  actualStep={1}
                  percentage={progress}
                  title="Validación de identidad"
                />
              )}
              {data && !dataNumber && !dataValid && (
                <AnimatePresence>
                  <ValidationForm
                    questions={data?.items}
                    onSubmit={(dataSend: any) => {
                      onSubmitResponse(
                        dataSend,
                        dataTU,
                        router,
                        setDataNumber,
                        dataQuestions?.processId,
                        setCurrentRouting,
                        setBasicData,
                        setLoading
                      );
                      setProgress(50);
                    }}
                  />
                </AnimatePresence>
              )}
              <AnimatePresence>
                {dataNumber && (
                  <ValidationFormNumber
                    questions={dataNumber}
                    setCurrentRouting={setCurrentRouting}
                  />
                )}
              </AnimatePresence>
            </Layout>
          </InactivityWarper>
        </>
      )}
    </>
  );
};

export default Index;
