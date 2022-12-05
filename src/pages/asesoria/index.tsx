import { useRouter } from 'next/router';
import React, { FC, ReactNode, useState } from 'react';
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
import { useMediaQuery } from 'react-responsive';

const ConditionalWrapper: FC<any> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

function Consultancy({ options = initialOptions }: any) {
  const [itemActive, setItemActive] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [actualStep, setActualStep] = useState<number>(1);
  const isMobile = useMediaQuery({
    query: '(max-width:720px)',
  });
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

  const renderContent = () => (
      <div className="lg:w-[411px] text-[14px]">
        <span className="font-semibold text-primario-900 lg:text-[20px] text-[16px]">
          {itemActive}
        </span>
        {options[actualStep - 1]?.[activeIndex]?.content()}
      </div>
    );

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
  const OptionList = () => {
    return (
      <>
        {options[actualStep - 1]?.map((option: any, index: number) => (
          <Button
            key={option?.label}
            onClick={() => openModal(option?.label, index)}
            variant="secondary"
            isLanding={`p-0 z-10 md:w-[253px] xs:w-[100%] font-semibold rounded-[8px] lg:h-48px ${
              itemActive === option?.label ? 'bg-primario-100' : ''
            }
            ${itemActive && !isMobile === option?.label ? 'translate-x-[16px]' : ''}
            `}
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
      </>
    );
  };

  return (
    <>
      {itemActive !== '' ? (
        <div
          className="bg-complementario-900/50 w-[100%] h-[300vh] fixed top-0 left-0"
          onClick={() => setItemActive('')}
        />
      ) : null}

      <div className="w-[90%] xs:w-[340px] md:w-[90%] m-auto">
        <div className="flex justify-between lg:w-[1080px] mx-auto mb-[38px] xs:mt-[36px] md:mt-[64px] lg:mb-[82px] lg:mt-[59px] lg:h-[29px] h-[18px]">
          <div className="hidden lg:block">
            <LogoBcs />
          </div>
          <div className="lg:hidden cursor-pointer">
            <a href={basePath}>
              <Icons icon="bcs-arrow-one-left" />
            </a>
          </div>
          <div className="lg:w-[280px] w-[180px]">
            <LogoForm />
          </div>
        </div>

        <div className="lg:w-[825px] mx-auto md:w-[528px] w-[full] xs:w-[340px]">
          <Typography
            variant="h2"
            className="lg:mb-[36px] xs:mb-[40px] md:mb-[48px] xs:text-[20px] md:text-[28px] text-center leading-5"
          >
            Esto es lo primero que debe saber para comprar una vivienda
          </Typography>
          <Stepper
            steps={4}
            actualStep={actualStep}
            percentage={40}
            className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
            title={stepperTitles[actualStep - 1]}
          />
        </div>
      </div>

<<<<<<< HEAD
      <div className="lg:w-[1127px] w-[528px] lg:gap-x-[120px] gap-x-[34px] mx-auto flex items-center mb-[77px]">
        <div onClick={prevStep} className="cursor-pointer flex items-center flex-col lg:w-[150px]">
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
=======
      <div className="lg:w-[1127px] md:w-[528px] xs:flex-col md:flex-row w-[90%] xs:w-[340px] lg:gap-x-[120px] gap-x-[34px] mx-auto flex items-center mb-[77px]">
        <img
          className="w-[100%] xs:max-w-[340px] xs:h-[180px] md:hidden object-contain"
          src={`${basePath}/images/consultancy/${actualStep}.svg`}
        />
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58

        <div
          className={`${
            itemActive !== '' ? 'sm:ml-[-95px]' : ''
          } md:order-2 hidden  mx-auto lg:w-[757.2px] w-[600px] h-[279px] lg:m-auto lg:h-[395px] md:flex flex-col justify-center items-start gap-y-3 box-border`}
          style={{
            backgroundImage: `url(${basePath}/images/consultancy/${actualStep}.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPositionY: 'center',
            // backgroundPositionX: positionImages(),
          }}
        >
          <OptionList />

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

<<<<<<< HEAD
        <div onClick={nextStep} className="cursor-pointer flex items-center flex-col lg:w-[150px]">
          <div className="rounded-full w-[40px] h-[40px] border-primario-20 flex justify-center items-center border-2 mb-[33px]">
            <Icons
              icon="bcs-arrow-two-right"
              iconclassNames="text-[18px] font-bold text-primario-20"
            />
=======
        {itemActive !== '' && isMobile ? (
          <div className="flex flex-col max-w-[340px] justify-center absolute pb-[50px]">
            <div
              onClick={onCloseModal}
              className="md:hidden w-[100%] rounded-md bg-white z-9 p-[33px] box-border cursor-pointer"
            >
              <div className="absolute cursor-pointer rounded-full top-[-70px] right-[50%] translate-x-[50%] p-[6px] text-primario-900 bg-primario-20/30">
                <div className="rounded-full h-[44.24px] w-[44.24px] bg-primario-20 flex justify-center items-center">
                  <Close />
                </div>
              </div>
              {renderContent()}
            </div>
            <div className="flex flex-col gap-y-3 w-full mt-[12px]">
              <OptionList />
            </div>
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58
          </div>
        ) : null}

        <ConditionalWrapper
          condition={isMobile}
          wrapper={(children: ReactNode) => (
            <div className="flex justify-between items-center w-full xs:mt-[24px] xs:max-w-[340px]">
              {children}
            </div>
          )}
        >
          <>
            <div
              onClick={prevStep}
              className={`md:order-1 cursor-pointer  flex xs:gap-x-3 items-center xs:justify-center xs:flex-row md:flex-col lg:w-[150px]`}
            >
              <div className="rounded-full xs:w-[24px] md:w-[40px] xs:h-[24px] md:h-[40px] border-primario-20 flex justify-center items-center border-2 md:mb-[33px]">
                <Icons
                  icon="bcs-arrow-two-left"
                  iconclassNames="md:text-[18px] xs:text-[10px] font-bold text-primario-20"
                />
              </div>
              <a className="text-primario-20 font-bold md:underline text-center text-[14px]">
                {actualStep === 1 ? 'Volver al Inicio' : 'Anterior'}
              </a>
            </div>

            <div
              onClick={nextStep}
              className={`md:order-3 cursor-pointer  flex xs:gap-x-3 items-center flex-row md:flex-col lg:w-[150px]`}
            >
              <div className="rounded-full xs:w-[24px] md:w-[40px] md:order-1 xs:order-2 xs:h-[24px] md:h-[40px] border-primario-20 flex justify-center items-center border-2 md:mb-[33px]">
                <Icons
                  icon="bcs-arrow-two-right"
                  iconclassNames="md:text-[18px] xs:text-[10px] font-bold text-primario-20"
                />
              </div>
              <a className=" text-primario-20 md:order-2 xs:order-1 font-bold md:underline text-center text-[14px]">
                {actualStep === 4 ? 'Salir' : 'Siguiente'}
              </a>
            </div>
          </>
        </ConditionalWrapper>

        {isMobile && itemActive === '' ? (
          <div className="flex flex-col gap-y-3 w-full mt-10">
            <OptionList />
          </div>
        ) : null}
      </div>

      <div
        className={`w-full text-center mb-[80px] xs:hidden md:block${
          actualStep === 1 || actualStep === 4 ? 'hidden' : ''
        }`}
      >
        <a
          href={`${basePath}`}
          className=" text-primario-20 font-bold underline  text-[14px]"
        >
          Volver al inicio
        </a>
      </div>
    </>
  );
}

export default Consultancy;
