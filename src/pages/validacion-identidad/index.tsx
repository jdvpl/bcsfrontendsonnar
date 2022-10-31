import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Head from 'next/head';
import Stepper from '../../components/ui/Stepper';
import { Question, ValidationForm } from '../../components/ui/Form/ValidationForm';
import { ValidationFormNumber } from '../../components/ui/Form/validationFormNumber';
import VerificationForm from '../../components/ui/Form/verificationForm';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { Layout } from '../../components/layouts/layout';
import AnimationComponent from '../../components/commons/animation';
import { NavTitle } from '../../components/commons/navTitle';

interface InitDataSend {
  document_type: string;
  document_number: string;
}

interface Quest {
  items: Question[];
}
const Index: React.FC = () => {
  const [dataQuestions] = useSessionStorage('DataQuestions', '');
  const [dataNumber, setDataNumber] = useState<any | null>(null);
  const [dataValid, setDataValid] = useState(false);
  const [progress, setprogress] = useState('');
  const [loading, setIsLoading] = useState(false);
  const data: Quest = dataQuestions;

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
            <ValidationForm questions={data?.items} onSubmit={(dataSend: any) => {}} />
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
