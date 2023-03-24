import { useRouter } from 'next/router';
import React, { FC, ReactNode, useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { basePath } from '../../../next.config';
import ConsultancyTutorial from '../../components/custom/tutorial/ConsultancyTutorial/ConsultancyTutorial';
import Close from '../../components/svg/Close';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { Icons } from '../../components/ui/icons';
import Stepper from '../../components/ui/Stepper';
import Typography from '../../components/ui/Typography';
import {
  stepperTitles,
  titleSection,
} from '../../components/custom/consultancy/consultancy';
import useConsultancy from './useConsultancy';
import TagManager from 'react-gtm-module';

export const ConditionalWrapper: FC<any> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

function Consultancy() {
  const prevTutorialStepRef = useRef(null);
  const nextTutorialStepRef = useRef(null);
  const [itemActive, setItemActive] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [actualStep, setActualStep] = useState<number>(1);
  const isMobile = useMediaQuery({
    query: '(max-width:720px)',
  });
  const router = useRouter();

  const { nextStep, prevStep, openModal, onCloseModal, renderContent, OptionList } =
    useConsultancy({
      actualStep,
      setActualStep,
      router,
      setActiveIndex,
      activeIndex,
      setItemActive,
      isMobile,
      itemActive,
    });
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'load_guide',
        category: 'load',
        action: 'load_guide',
        label: 'load_guide',
      },
    });
  }, []);

  return (
    <>
      {nextTutorialStepRef && prevTutorialStepRef ? (
        <ConsultancyTutorial
          nextTutorialStepRef={nextTutorialStepRef}
          prevTutorialStepRef={prevTutorialStepRef}
        />
      ) : null}

      {itemActive !== '' ? (
        <div
          className="bg-complementario-900/50 w-[100%] h-[300vh] fixed top-0 left-0"
          onClick={() => setItemActive('')}
        />
      ) : null}

      {/* Header */}
      <div className="w-[90%] xs:w-[95%] md:w-[90%] m-auto">
        <div className="flex justify-between lg:w-[1080px] mx-auto mb-[38px] xs:mt-[36px] md:mt-[64px] lg:mb-[82px] lg:mt-[59px] lg:h-[29px] h-[18px]">
          <div className="hidden lg:block">
            <LogoBcs />
          </div>
          <div className="lg:hidden cursor-pointer">
            <a href={basePath}>
              <Icons icon="bcs-icon-1506" title="" />
            </a>
          </div>
          <div className="lg:w-[280px] w-[180px]">
            <LogoForm />
          </div>
        </div>

        <div className="lg:w-[825px] mx-auto md:w-[528px] w-[full] xs:w-full">
          <Stepper
            steps={4}
            actualStep={actualStep}
            className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
            title={stepperTitles[actualStep - 1]}
          />
          <Typography
            variant="h2"
            typeFont="Bold"
            className="lg:w-[515px] md:w-[445px] sm:w-[303px] w-[303px] mx-auto lg:mb-[36px] xs:mb-[40px] md:mb-[48px] xs:text-[20px] md:text-[28px] text-center"
          >
            {titleSection[actualStep - 1]}
          </Typography>
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-[1127px] md:w-[528px] xs:flex-col md:flex-row w-[95%] xs:w-[95%] lg:gap-x-[120px] gap-x-[34px] mx-auto flex items-center mb-[25px]">
        <img
          className="w-[100%] xs:max-w-[340px] xs:h-[180px] md:hidden object-contain"
          src={`${basePath}/images/consultancy/${actualStep}.svg`}
        />

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
              data-testid="prevTutorialStep"
              ref={prevTutorialStepRef}
              onClick={prevStep}
              className="md:order-1 cursor-pointer  flex xs:gap-x-3 items-center xs:justify-center xs:flex-row md:flex-col lg:w-[150px]"
            >
              <div className="rounded-full xs:w-[24px] md:w-[40px] xs:h-[24px] md:h-[40px] border-primario-300 flex justify-center items-center border-2 md:mb-[33px]">
                <Icons
                  icon="bcs-icon-1506"
                  iconclassNames="md:text-[18px] xs:text-[10px] font-bold text-primario-300"
                  title=""
                />
              </div>
              <a className="text-primario-300 font-bold font-montserratRegular text-center text-[14px] ">
                {actualStep === 1 ? 'Volver al Inicio' : 'Anterior'}
              </a>
            </div>

            <div
              ref={nextTutorialStepRef}
              onClick={nextStep}
              className="md:order-3 cursor-pointer  flex xs:gap-x-3 items-center flex-row md:flex-col lg:w-[150px]"
            >
              <div className="rounded-full xs:w-[24px] md:w-[40px] md:order-1 xs:order-2 xs:h-[24px] md:h-[40px] border-primario-300 flex justify-center items-center border-2 md:mb-[33px]">
                <Icons
                  icon="bcs-icon-337"
                  iconclassNames="md:text-[18px] xs:text-[10px] font-bold text-primario-300"
                  title=""
                />
              </div>
              <a className=" text-primario-300 font-montserratRegular  md:order-2 xs:order-1 font-bold text-center text-[14px]">
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

      {/* Link to Home */}
      <div
        className={`w-full text-center mb-[80px] xs:hidden md:block${
          actualStep === 1 || actualStep === 4 ? 'hidden' : ''
        }`}
      >
        <a
          href={`${basePath}`}
          className=" text-primario-100 font-montserratRegular font-bold text-[14px]"
        >
          Volver al inicio
        </a>
      </div>
    </>
  );
}

export default Consultancy;
