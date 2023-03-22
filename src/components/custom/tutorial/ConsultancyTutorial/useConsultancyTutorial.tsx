import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../ui/Button';
import Icons from '../../../ui/icons';
import Typography from '../../../ui/Typography';
import Close from '../../../svg/Close';
import { useSessionStorage } from '../../../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../../../session';

export default function useConsultancyTutorial({
  nextTutorialStepRef,
  prevTutorialStepRef,
}: any) {
  const [timer, setTimer] = useState(10);
  const [openedTutorial, setOpenedTutorial] = useSessionStorage(
    SesionStorageKeys.openedTutorial.key,
    false
  );
  const [isOpen, setIsOpen] = useState(true);
  const [actualTutorialStep, setActualTutorialStep] = useState(0);
  const intervalRef = useRef<number>();

  const onHandleModal = () => {
    clearStylesPrevStep();
    clearStylesNextStep();
    setIsOpen(!isOpen);
    setOpenedTutorial(true);
  };
  const clearStylesPrevStep = () => {
    prevTutorialStepRef?.current?.classList?.remove('z-[95]');
    prevTutorialStepRef?.current?.classList?.remove('text-white', 'underline');
    prevTutorialStepRef?.current
      ?.querySelector('div')
      .classList?.add('border-primario-300');
    prevTutorialStepRef?.current
      ?.querySelector('a')
      ?.classList?.add('text-primario-300', 'text-semibold');
    prevTutorialStepRef?.current?.querySelector('i')?.classList?.add('text-primario-300');
  };
  const clearStylesNextStep = () => {
    nextTutorialStepRef?.current?.classList?.remove('z-[95]');
    nextTutorialStepRef?.current?.classList?.remove('text-white', 'underline');
    nextTutorialStepRef?.current
      ?.querySelector('div')
      .classList?.add('border-primario-300');
    nextTutorialStepRef?.current
      ?.querySelector('a')
      ?.classList?.add('text-primario-300', 'text-semibold');
    nextTutorialStepRef?.current?.querySelector('i')?.classList?.add('text-primario-300');
  };
  const handelActualStep = () => {
    if (actualTutorialStep === 1) {
      clearStylesPrevStep();
    }
    if (actualTutorialStep === 2) {
      clearStylesNextStep();
    }
    setActualTutorialStep(actualTutorialStep + 1);
  };
  const renderBody = () => {
    const items = [1, 2, 3, 4];
    switch (actualTutorialStep) {
      case 0:
        return (
          <>
            <Typography
              variant="h2"
              typeFont='Bold'
              className="font-montserratSemiBold xl:leading-[34px] md:leading-[30px] xs:leading-[22px] text-center mx-auto text-white xs:text-[18px] md:text-[26px] xl:text-[28px] md:w-[537px] sm:w-[343px] xs:w-[284.17px]"
            >
              Acompáñenos en un corto recorrido antes de iniciar la guía interactiva y
              conozca como navegar en ella.
            </Typography>
            <div className="w-[full] flex flex-col items-center xl:mt-[48px] md:mt-[60px] sm:mt-[46px] xs:mt-[36px]">
              <Button
                data-testid="nextStep"
                disabled={!(timer === 0)}
                onClick={handelActualStep}
                isLanding="sm:w-[343px] xs:w-[284.17px] font-montserratRegular font-medium"
              >
                Continuar
              </Button>
              <button
                onClick={onHandleModal}
                className="text-[18px] text-white font-montserratRegular font-medium mx-auto mt-[46px] xs:mb-[42px] md:mb-[49px] xl:mb-[42px]"
              >
                Omitir
              </button>

              <div className="flex gap-[5px]">
                <Icons icon="bcs-icon-1002" iconclassNames="text-white text-[14px]" />{' '}
                <span className="text-white text-[14px] font-montserratRegular font-medium">
                  {' '}
                  {timer} Segundos
                </span>
              </div>
            </div>
          </>
        );
      case 1:
        const {
          offsetLeft: offsetLeftP,
          offsetWidth: offsetWidthP,
          offsetTop: offsetTopP,
          offsetHeight: offsetHeightP,
        } = prevTutorialStepRef?.current;

        prevTutorialStepRef?.current?.classList?.add('z-[95]', 'text-white', 'underline');
        prevTutorialStepRef?.current
          ?.querySelector('div')
          .classList?.remove('border-primario-300');
        prevTutorialStepRef?.current?.querySelector('a').classList?.add('w-[150px]');
        prevTutorialStepRef?.current
          ?.querySelector('a')
          .classList?.remove('text-primario-300', 'font-bold');
        prevTutorialStepRef?.current
          ?.querySelector('i')
          .classList?.remove('text-primario-300');
        return (
          <>
            {/* toolTip mobile */}
            <div
              style={{
                top: offsetTopP - 220,
                left: offsetLeftP + 20,
              }}
              className="absolute w-[253px] md:hidden xs:block"
            >
              <div className="bg-white w-[90px] h-[90px] absolute translate-y-[100%] left-[33px] rotate-45"></div>
              <div
                className={`bg-white rounded-lg w-[253px] px-[30px] pt-[41px] pb-[31px] absolute flex flex-col items-center  gap-y-[28px] h-[171px]`}
              >
                <p
                  data-testid="text-next-step"
                  className="z-40 text-[16px] font-medium font-montserratMedium text-center mx-auto leading-[20px] text-primario-900"
                >
                  Para salir de la guía interactiva haga clic aquí.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto"
                >
                  Siguiente
                </button>
              </div>
            </div>

            {/* toolTip desktop */}
            <div
              style={{
                top: offsetTopP - offsetHeightP / 2,
                left: offsetLeftP + offsetWidthP + 25,
              }}
              className="absolute w-[253px] xs:hidden md:block"
            >
              <div className="bg-white w-[90px] h-[90px] absolute top-[50%] translate-y-1/2 bottom-0 left-0 rotate-45"></div>
              <div
                className={`bg-white rounded-lg w-[253px] px-[30px] pt-[41px] pb-[31px] absolute  md:flex flex-col items-center gap-y-[28px] h-[171px]`}
              >
                <p className="z-40 text-[16px]  text-center mx-auto  font-medium font-montserratMedium leading-[20px] text-primario-900">
                  Para salir de la guía interactiva haga clic aquí.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        );
      case 2:
        const {
          offsetLeft: offsetLeftN,
          offsetWidth: offsetWidthN,
          offsetTop: offsetTopN,
          offsetHeight: offsetHeightN,
        } = nextTutorialStepRef?.current;
        nextTutorialStepRef?.current?.classList.add('z-[95]', 'text-white', 'underline');
        nextTutorialStepRef?.current
          ?.querySelector('div')
          ?.classList.remove('border-primario-300');
        nextTutorialStepRef?.current
          ?.querySelector('a')
          ?.classList.remove('text-primario-300', 'font-bold');
        nextTutorialStepRef?.current
          ?.querySelector('i')
          ?.classList.remove('text-primario-300');
        return (
          <>
            <div
              style={{
                top: offsetTopN - 220,
                left: offsetLeftN - 160,
              }}
              className="absolute w-[253px] md:hidden xs:block"
            >
              <div className="bg-white w-[90px] h-[90px] absolute rotate-45 translate-y-[100%] right-[33px]"></div>
              <div
                className={`z-[100]  bg-white rounded-lg w-[253px] px-[30px] pt-[41px] pb-[31px] absolute flex flex-col items-center justify-center gap-y-[28px] h-[171px]`}
              >
                <p className="z-40 text-[16px]  text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                  Para continuar con la guía interactiva haga clic aquí.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div
              style={{
                top: offsetTopN - offsetHeightN / 2,
                left: offsetLeftN - 253 - 25,
              }}
              className="absolute w-[253px] xs:hidden md:block"
            >
              <div className="bg-white w-[90px] h-[90px] absolute top-[50%] translate-y-1/2 bottom-0 right-0 rotate-45"></div>
              <div
                className={`z-[100] sm:hidden bg-white rounded-lg w-[253px] px-[30px] pt-[41px] pb-[31px] absolute  md:flex flex-col items-center justify-center gap-y-[28px] h-[171px]`}
              >
                <p className="z-40 text-[16px] p-0  text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                  Para continuar con la guía interactiva haga clic aquí.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <div className="h-full w-full flex md:flex-row xs:flex-col justify-center items-center gap-14">
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:w-[253px] sm:w-[343px] xs:w-[288px] md:order-1 xs:order-2">
              {items?.map((item) => (
                <Button
                  key={item}
                  variant="secondary"
                  // ${itemActive && !isMobile === option?.label ? 'translate-x-[16px]' : ''}
                  isLanding={`p-0 z-10 md:w-[253px] xs:w-[100%] font-semibold rounded-[8px] lg:h-48px 
                     bg-primario-100`}
                >
                  <div className="flex justify-center">
                    <span
                      className={`text-center text-white text-[18px] p-0 font-medium font-montserratMedium`}
                    >
                      Tema {item}
                    </span>
                  </div>
                </Button>
              ))}
            </div>

            {/* tooltip desktop */}
            <div className="relative xs:hidden md:flex md:order-2">
              <div className="bg-white w-[90px] h-[90px] absolute z-9 translate-y-[50%] left-[0px] rotate-45"></div>
              <div
                className={`bg-white rounded-lg w-[253px] z-10 px-[30px] pt-[31px] pb-[31px] flex flex-col items-center h-[171px]`}
              >
                <p className="z-40 text-[16px] w-[199px] mb-[20px] text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                  Seleccione cada botón para conocer el detalle de su enunciado.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto"
                >
                  Siguiente
                </button>
              </div>
            </div>

            {/* tooltip mobile*/}
            <div className="relative md:hidden xs:flex- md:order-2 xs:order-1">
              <div className="bg-white w-[90px] h-[90px] absolute z-9 translate-y-[100%] translate-x-[-50%] left-[50%] rotate-45"></div>
              <div
                className={`bg-white rounded-lg w-[253px] z-40 px-[30px] pt-[31px] pb-[31px] flex flex-col items-center h-[171px]`}
              >
                <p className="z-40 text-[18px] mb-[10px] w-[200px] text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                  Seleccione cada botón para conocer el detalle de su enunciado.
                </p>
                <button
                  onClick={handelActualStep}
                  className="text-primario-20 w-fit text-center font-montserratMedium mx-auto z-40"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <>
            <div className="h-full w-full flex md:flex-row xs:flex-col justify-center items-center gap-[10px]">
              {/* toolTip mobile */}
              <div className="xs:block md:hidden xs:-order-1 mb-[100px]">
                <div className="bg-white w-[90px] h-[90px] absolute z-9 translate-y-[100%] translate-x-[-50%] left-[50%] rotate-45"></div>

                <div
                  className={`bg-white rounded-lg w-[253px] z-40 px-[30px] pt-[41px] pb-[31px] flex flex-col items-center  h-[171px]`}
                >
                  <p className="z-40 text-[16px] w-[200px] mb-[20px] text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                    Para cerrar la ventana, haga clic aquí.
                  </p>
                  <button
                    onClick={handelActualStep}
                    className="text-primario-20 w-fit text-center font-montserratMedium mx-auto z-40"
                  >
                    Terminar
                  </button>
                </div>
              </div>

              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:w-[253px] sm:w-[343px] xs:w-[288px] md:order-1 xs:order-2">
                {items?.map((item) => (
                  <Button
                    key={item}
                    variant="secondary"
                    // ${itemActive && !isMobile === option?.label ? 'translate-x-[16px]' : ''}
                    isLanding={`p-0 z-10 md:w-[253px] ${item === 1 ? 'md:translate-x-[20px]' : ''
                      } xs:w-[100%] font-semibold rounded-[8px] lg:h-48px 
                      ${item === 1 ? 'bg-primario-100' : 'bg-white'} `}
                  >
                    <div className="flex justify-center">
                      <span
                        className={`text-center ${item === 1 ? 'text-white' : 'text-primario-100'
                          }  text-[18px] p-0 font-medium font-montserratMedium`}
                      >
                        Tema {item}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="md:order-2 xs:order-1">
                {/* modal content */}
                <div className="md:pt-[91px] md:pb-[77px] xs:py-[20px] xs:px-[20px] md:px-[44px] relative xl:w-[614px] md:w-[287px] sm:w-[340px] xs:w-[289px] rounded-md bg-white z-9  box-border cursor-pointer">
                  {/* toolTip Desktop */}
                  <div className="xs:hidden md:block md:order-2 xs:order-1 absolute top-[-240px] right-0">
                    <div className="bg-white w-[90px] h-[90px] absolute z-9 translate-y-[100%] translate-x-[-85%] left-[85%] rotate-45"></div>
                    <div
                      className={`bg-white rounded-lg w-[253px] z-40 px-[30px] pt-[41px] pb-[31px] flex flex-col items-center gap-y-[28px] h-[171px]`}
                    >
                      <p className="z-40 text-[16px] w-[200px] text-center mx-auto font-medium font-montserratMedium leading-[20px] text-primario-900">
                        Para cerrar la ventana, haga clic aquí.
                      </p>
                      <button
                        onClick={handelActualStep}
                        className="text-primario-20 w-fit text-center font-montserratMedium mx-auto z-40"
                      >
                        Terminar
                      </button>
                    </div>
                  </div>

                  <div className="md:top-[-22px] md:right-[0px] absolute cursor-pointer rounded-full xs:top-[-70px] xs:right-[50%] xs:translate-x-[50%] p-[6px] text-primario-900 bg-primario-20/30">
                    <div className="rounded-full h-[44.24px] w-[44.24px] bg-primario-20 flex justify-center items-center">
                      <Close />
                    </div>
                  </div>
                  <span className="font-semibold text-primario-900 font-montserratMedium lg:text-[20px] text-[16px]">
                    Texto descriptivo
                  </span>
                  <p className="break-words font-montserratRegular mt-4">
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="w-[48px] h-[48px] rounded-full mx-auto border-white border-[1px] flex justify-center items-center mb-[45px]">
              <Icons icon="bcs-icon-100" iconclassNames="text-white" />
            </div>
            <Typography
              variant="h2"
              className="xl:leading-[34px] md:leading-[30px] xs:leading-[22px] font-poppinsSemiBold text-center mx-auto text-white xs:text-[20px] md:text-[28px] lg:text-[32px] md:w-[537px] sm:w-[343px] xs:w-[284.17px]"
            >
              El recorrido ha terminado.
              <br /> ¡Está listo para continuar!
            </Typography>
            <div className="w-[full] flex flex-col items-center xl:mt-[48px] md:mt-[60px] sm:mt-[46px] xs:mt-[36px]">
              <Button
                onClick={onHandleModal}
                isLanding="sm:w-[343px] xs:w-[284.17px] text-[18px] font-medium font-montserratMedium"
              >
                Iniciar guía interactiva
              </Button>
            </div>
          </>
        );
    }
  };

  const saveOpenTutorial = () => { };

  useEffect(() => {
    setIsOpen(!openedTutorial);
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [setTimer, timer]);

  useEffect(() => {
    if (timer <= 0) {
      setOpenedTutorial(true);
      clearInterval(intervalRef.current);
    }
  }, [timer]);

  return {
    isOpen,
    renderBody,
    actualTutorialStep,
    onHandleModal,
    handelActualStep,
    saveOpenTutorial,
  };
}
