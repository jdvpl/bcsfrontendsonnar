import React, { useState } from 'react';
import { basePath } from '../../../next.config';
import Close from '../../components/svg/Close';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { Icons } from '../../components/ui';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import { initialOptions, stepperTitles } from '../../lib/consultancy';

const Consultancy = ({ options = initialOptions }: any) => {
  const [itemActive, setItemActive] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [actualStep, setActualStep] = useState<number>(1);

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

  const openModal = (label: string, index: number) => {
    setActiveIndex(index);
    setItemActive(label);
  };

  const onCloseModal = () => {
    setActiveIndex(0);
    setItemActive('');
  };

  const renderContent = () => {
    return (
      <div className="w-[411px] text-[20px]">
        <span className="font-semibold text-primario-900">{itemActive}</span>
        {options[actualStep - 1]?.[activeIndex]?.content()}
      </div>
    );
  };

  return (
    <>
      {itemActive !== '' ? (
        <div
          className="bg-complementario-900/50 w-[100%] min-h-screen	fixed top-0 left-0"
          onClick={() => setItemActive('')}
        />
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
        <div
          className={`cursor-pointer flex items-center flex-col ${
            actualStep === 1 ? 'opacity-0' : ''
          }`}
        >
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
            backgroundImage: `url(${basePath}/images/consultancy/${actualStep}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: '50%',
          }}
        >
          {options[actualStep - 1]?.map((option: any, index: number) => (
            <Button
              key={option?.label}
              onClick={() => openModal(option?.label, index)}
              variant="secondary"
              isLanding={`p-0 z-10 w-[253px] font-semibold rounded-[8px] lg:h-48px ${
                itemActive === option?.label ? 'translate-x-[16px] bg-primario-20' : ''
              }`}
            >
              <div className="flex justify-center">
                <span
                  className={`text-center ${
                    itemActive === option?.label ? 'text-white' : 'text-primario-100'
                  } text-[18px] p-0`}
                >
                  {option?.label}
                </span>
              </div>
            </Button>
          ))}
          {itemActive !== '' ? (
            <div
              onClick={onCloseModal}
              className="lg:w-[465px] w-[287px] rounded-md absolute bg-white z-9 ml-[263px] p-[33px] box-border cursor-pointer"
            >
              <div className="absolute cursor-pointer rounded-full top-[-22px] right-[-22px] p-[6px] bg-primario-20/30">
                <div className="rounded-full h-[44.24px] w-[44.24px] bg-primario-20 flex justify-center items-center">
                  <Close />
                </div>
              </div>
              {renderContent()}
            </div>
          ) : null}
        </div>

        <div
          onClick={nextStep}
          className={`cursor-pointer flex items-center flex-col ${
            actualStep === 4 ? 'opacity-0' : ''
          }`}
        >
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
