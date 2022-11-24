import Link from 'next/link';
import React, { useState } from 'react';
import { basePath } from '../../../next.config';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { Icons } from '../../components/ui';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

const initialOptions = [
  [
    {
      label: 'Vivienda Nueva',
      value: '1',
    },
    {
      label: 'Vivienda Usada',
      value: '2',
    },
    {
      label: '¿Qué es vivienda VIS?',
      value: '3',
    },
    {
      label: '¿Qué es vivienda No VIS?',
      value: '4',
    },
  ],
  [
    {
      label: 'Cuota Inicial',
      value: '1',
    },
    {
      label: 'Crédito hipotecario',
      value: '2',
    },
    {
      label: 'Compra del inmueble',
      value: '3',
    },
  ],
  [
    {
      label: 'Avalúo',
      value: '1',
    },
    {
      label: 'Estudio de títulos',
      value: '2',
    },
    {
      label: 'Escrituración',
      value: '2',
    },
  ],
  [
    {
      label: 'Reciba su vivienda',
      value: '1',
    },
  ],
];

const stepperTitles = [
  'Características de vivienda',
  '¿Cómo pagar la vivienda?',
  'Legalización de una vivienda',
  'Reciba su vivienda',
];

const Consultancy = ({ options = initialOptions }: any) => {
  const [itemActive, setItemActive] = useState('');
  const [actualStep, setActualStep] = useState<number>(1);
  const [modalPosition, setModalPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const nextStep = () => {
    if (actualStep < 4) {
      setActualStep(actualStep + 1);
    }
  };
  const prevStep = () => {
    if (actualStep > 1) {
      setActualStep(actualStep - 1);
    }
  };
  const openModal = (event: any, label: string) => {
    const { clientX, clientY } = event;
    setModalPosition({ clientX, clientY });
    setItemActive(label);
  };

  return (
    <>
      <div
        className="w-[287px] h-[312px] rounded-md absolute bg-white z-10"
        style={{
          top: `${modalPosition.clientY - 100}px`,
          left: `${modalPosition.clientX + 100}px`,
        }}
      >
        a
      </div>
      {itemActive !== '' ? (
        <div
          className="bg-complementario-900/50 w-[100vw] h-[100vh] fixed top-0 left-0"
          onClick={() => setItemActive('')}
        ></div>
      ) : null}
      <div className="w-[90%] m-auto">
        <div className="flex justify-between lg:w-[1080px] mx-auto lg:mb-[82px] lg:mt-[59px]">
          <LogoBcs />
          <LogoForm />
        </div>
        <div className="lg:w-[825px] mx-auto">
          <Typography variant="h2" className="lg:mb-[36px] text-[28px] text-center">
            Esto es lo primero que debe saber para comprar una vivienda
          </Typography>
          <Stepper
            steps={4}
            actualStep={actualStep}
            percentage={40}
            className="lg:w-[684px] mx-auto lg:mb-[59px]"
            title={stepperTitles[actualStep - 1]}
          />
        </div>
      </div>

      <div className="lg:w-[1127px] mx-auto flex items-center mb-[77px]">
        <div className="cursor-pointer flex items-center flex-col">
          <div
            onClick={prevStep}
            className="rounded-full w-[40px] h-[40px] border-primario-20 flex justify-center items-center border-2	mb-[33px]"
          >
            <Icons
              icon="bcs-arrow-two-left"
              iconclassNames="text-[18px] font-bold text-primario-20"
            />
          </div>
          <a className=" text-primario-20 font-bold underline text-center text-[14px]">
            Anterior
          </a>
        </div>

        <div
          className="mx-auto lg:w-[757.2px] lg:h-[395px] flex flex-col justify-center items-start gap-y-3 pl-[63px] box-border"
          style={{
            // border: '1px solid black',
            backgroundImage: `url(${basePath}/images/consultancy/${actualStep}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: '50%',
          }}
        >
          {options[actualStep - 1]?.map((option: any) => (
            <Button
              key={option?.label}
              onClick={(event) => openModal(event, option?.label)}
              variant="secondary"
              isLanding={`z-10 w-[230px] font-semibold rounded-[8px] lg:h-48px ${
                itemActive === option?.label ? 'translate-x-[16px] bg-primario-20' : ''
              }`}
            >
              <div className="flex justify-between">
                <Typography
                  variant="bodyS2"
                  className={`text-center w-full ${
                    itemActive === option?.label ? 'text-white' : 'text-primario-100'
                  } text-[14px] p-0`}
                >
                  {option?.label}
                </Typography>
                <Icons icon="bcs-arrow-two-right" iconclassNames="text-[14px]" />
              </div>
            </Button>
          ))}
        </div>

        <div onClick={nextStep} className="cursor-pointer flex items-center flex-col">
          <div className="rounded-full w-[40px] h-[40px] border-primario-20 flex justify-center items-center border-2 mb-[33px]">
            <Icons
              icon="bcs-arrow-two-right"
              iconclassNames="text-[18px] font-bold text-primario-20"
            />
          </div>
          <a className=" text-primario-20 font-bold underline text-center text-[14px]">
            Siguiente
          </a>
        </div>
      </div>

      <div className="w-full text-center mb-[80px]">
        <a
          href={`${basePath}`}
          className=" text-primario-20 font-bold underline  text-[14px]"
        >
          Volver al inicio
        </a>
      </div>
    </>
  );
};

export default Consultancy;

interface stepsProps {
  steps: number;
  actualStep: number;
  percentage?: number;
  title?: string;
  className?: string;
}
const Stepper = ({
  steps,
  actualStep,
  percentage = 100,
  title = '',
  className = '',
}: stepsProps) => {
  const renderSteps = new Array(steps).fill(0);
  return (
    <div className={className}>
      <p
        className="text-[16px] leading-4 text-primario-900 font-semibold"
        data-testid="titleStep"
      >
        {title}
      </p>
      <div className="w-full flex gap-1 my-2">
        {renderSteps?.map((item, index) => (
          <div
            className={`w-[100%] h-[4px] bg-${
              actualStep >= index + 1 ? 'primario-20' : 'complementario-80'
            }`}
          />
        ))}
      </div>
      <p
        tabIndex={0}
        role="paragraph"
        className="text-complementario-100 text-xs ln-16"
        data-testid="stepNumber"
      >
        Paso {actualStep} de {steps}
      </p>
    </div>
  );
};
