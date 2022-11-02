import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Stepper from '../../components/ui/Stepper';
import { Question, ValidationForm } from '../../components/ui/Form/ValidationForm';
import { ValidationFormNumber } from '../../components/ui/Form/validationFormNumber';
import VerificationForm from '../../components/ui/Form/verificationForm';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { Layout } from '../../components/layouts/layout';
import AnimationComponent from '../../components/commons/Animation';
import { NavTitle } from '../../components/commons/NavTitle';
import { SesionStorageKeys } from '../../session';
import { sendQuestions } from '../../services';
import { useRouter } from 'next/router';
import { routes } from '../../routes';

interface InitDataSend {
  document_type: string;
  document_number: string;
}

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

  const onSubmitResponse = async (initData: InitDataSend) => {
    const body = {
      document_type: dataTU?.document_type,
      document_number: dataTU?.document_number,
      items: initData,
    };
    const response = await sendQuestions(body);
    if (response.error) {
      const code = response.response.internal_code;
      switch (code) {
        case 'VQ-01':
          router.push(routes.startProccess);
          break;
        case 'VQ-02':
          router.push(routes.validacionErrorValidacionIdentidad);
          break;
        case 'VQ-03':
          router.push(routes.validacionBiometrica);
          break;
        default:
          break;
      }
    } else if (!response.error) {
      const step = response.response.data.step;
      if (step === 'AUTH') {
        setDataValid(true);
      } else if (step === 'VQ') {
        setDataNumber(response.response.data);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Validación de identidad - BCS Viviendamiga Digital</title>
      </Head>
      <Layout navTitle={<NavTitle noBack />}>
        {loading && <AnimationComponent show="" valid={loading} loaded={false} />}
        <Stepper
          step=""
          incomplete="1"
          title="Validación de identidad"
          percentaje={progress}
        />
        {data && !dataNumber && !dataValid && (
          <AnimatePresence>
            <ValidationForm
              questions={data?.items}
              onSubmit={(dataSend: any) => {
                onSubmitResponse(dataSend);
                setprogress('75%');
              }}
            />
          </AnimatePresence>
        )}

        <AnimatePresence>
          {dataValid ? <VerificationForm onSubmit={(dataLogin: any) => {}} /> : ''}
        </AnimatePresence>
        <AnimatePresence>
          {dataNumber && <ValidationFormNumber questions={dataNumber} />}
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default Index;