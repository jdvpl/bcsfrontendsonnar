import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { basePath } from '../../../next.config';
import Close from '../../components/svg/Close';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { Icons } from '../../components/ui/icons';
import Button from '../../components/ui/Button';
import Stepper from '../../components/ui/Stepper';
import Typography from '../../components/ui/Typography';
import { initialOptions, stepperTitles } from '../../lib/consultancy';
import { routes } from '../../routes';

const Consultancy = ({ options = initialOptions }: any) => {
  const [itemActive, setItemActive] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [actualStep, setActualStep] = useState<number>(1);
  const router = useRouter();

  const nextStep = () => {
    if (actualStep < 4) {
      setActualStep(actualStep + 1);
    } else {
      router.push(routes.home);
    }
  };

  const prevStep = () => {
    if (actualStep > 1) {
      setActualStep(actualStep - 1);
    } else {
      router.push(routes.home);
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
      <div className="lg:w-[411px] text-[14px]">
        <span className="font-semibold text-primario-900 lg:text-[20px] text-[16px]">
          {itemActive}
        </span>
        {options[actualStep - 1]?.[activeIndex]?.content()}
      </div>
    );
  };

  const positionImages = () => {
    switch (actualStep) {
      case 1:
        return '40px';
      case 2:
        return '55px';
      case 3:
        return '30px';
      case 4:
        return '10px';
      default:
        return '10px';
    }
  };

  return (
    <>
      {itemActive !== '' ? (
        <div
          className="bg-complementario-900/50 w-[100%] h-[300vh]	fixed top-0 left-0"
          onClick={() => setItemActive('')}
        />
      ) : null}

      <div className="w-[90%] m-auto">
        <div className="flex justify-between lg:w-[1080px] mx-auto mb-[38px] mt-[64px] lg:mb-[82px] lg:mt-[59px] lg:h-[29px] h-[18px]">
          <div className="opacity-0 lg:opacity-100">
            <LogoBcs />
          </div>
          <div className="lg:w-[280px] w-[180px]">
            <LogoForm />
          </div>
        </div>
        <div className="lg:w-[825px] mx-auto w-[528px]">
          <Typography
            variant="h2"
            className="lg:mb-[36px] mb-[48px] text-[28px] text-center"
          >
            Esto es lo primero que debe saber para comprar una vivienda
          </Typography>
          <Stepper
            steps={4}
            actualStep={actualStep}
            percentage={40}
            className="lg:w-[684px] w-[456px] mx-auto lg:mb-[59px] mb-[53px]"
            title={stepperTitles[actualStep - 1]}
          />
        </div>
      </div>

      <div className="lg:w-[1127px] w-[528px] lg:gap-x-[120px] gap-x-[34px] mx-auto flex items-center mb-[77px]">
        <div onClick={prevStep} className={`cursor-pointer flex items-center flex-col lg:w-[150px]`}>
          <div className="rounded-full w-[40px] h-[40px] border-primario-20 flex justify-center items-center border-2	mb-[33px]">
            <Icons
              icon="bcs-arrow-two-left"
              iconclassNames="text-[18px] font-bold text-primario-20"
            />
          </div>
          <a className=" text-primario-20 font-bold underline text-center text-[14px]">
            {actualStep === 1 ? 'Volver al Inicio' : 'Anterior'}
          </a>
        </div>

        <div
          className={`${
            itemActive !== '' ? 'sm:ml-[-95px]' : ''
          }  mx-auto lg:w-[757.2px] w-[600px] h-[279px] lg:m-auto lg:h-[395px] flex flex-col justify-center items-start gap-y-3  box-border`}
          style={{
            backgroundImage: `url(${basePath}/images/consultancy/${actualStep}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPositionY: 'center',
            backgroundPositionX: positionImages(),
          }}
        >
          {options[actualStep - 1]?.map((option: any, index: number) => (
            <Button
              key={option?.label}
              onClick={() => openModal(option?.label, index)}
              variant="secondary"
              isLanding={`p-0 z-10 w-[253px] font-semibold rounded-[8px] lg:h-48px ${
                itemActive === option?.label ? 'translate-x-[16px] bg-primario-100' : ''
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
              <div className="absolute cursor-pointer rounded-full top-[-22px] right-[-22px] p-[6px] text-primario-900 bg-primario-20/30">
                <div className="rounded-full h-[44.24px] w-[44.24px] bg-primario-20 flex justify-center items-center">
                  <Close />
                </div>
              </div>
              {renderContent()}
            </div>
          ) : null}
        </div>

        <div onClick={nextStep} className={`cursor-pointer flex items-center flex-col lg:w-[150px]`}>
          <div className="rounded-full w-[40px] h-[40px] border-primario-20 flex justify-center items-center border-2 mb-[33px]">
            <Icons
              icon="bcs-arrow-two-right"
              iconclassNames="text-[18px] font-bold text-primario-20"
            />
          </div>
          <a className=" text-primario-20 font-bold underline text-center text-[14px]">
            {actualStep === 4 ? 'Salir' : 'Siguiente'}
          </a>
        </div>
      </div>

      <div className={`w-full text-center mb-[80px] ${actualStep === 1 ? 'hidden' : ''}`}>
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

// interface stepsProps {
//   steps: number;
//   actualStep: number;
//   percentage?: number;
//   title?: string;
//   className?: string;
// }
// const Stepper = ({
//   steps,
//   actualStep,
//   percentage = 100,
//   title = '',
//   className = '',
// }: stepsProps) => {
//   const renderSteps = new Array(steps).fill(0);
//   return (
//     <div className={className}>
//       <p
//         className="text-[16px] leading-4 text-primario-900 font-semibold"
//         data-testid="titleStep"
//       >
//         {title}
//       </p>
//       <div className="w-full flex gap-1 my-2">
//         {renderSteps?.map((item, index) => (
//           <div
//             className={`w-[100%] h-[4px] bg-${
//               actualStep >= index + 1 ? 'primario-20' : 'complementario-80'
//             }`}
//           />
//         ))}
//       </div>
//       <p
//         tabIndex={0}
//         role="paragraph"
//         className="text-complementario-100 text-xs ln-16"
//         data-testid="stepNumber"
//       >
//         Paso {actualStep} de {steps}
//       </p>
//     </div>
//   );
// };
