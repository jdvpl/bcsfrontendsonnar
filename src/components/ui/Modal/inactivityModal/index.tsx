import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import { set } from 'react-hook-form';
import { useIdleTimer } from 'react-idle-timer';
import { routes } from '../../../../routes';
import { clearSessionStorage } from '../../../../utils';
import Button from '../../Button';
import Icons from '../../icons';
import Typography from '../../Tipography';

export const InactivityModal = () => {
  // const timeout = 180000;
  const timeout = 12000;
  const [remaining, setRemaining] = useState(timeout);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);
  const [isIdle, setIsIdle] = useState(false);
  const intervalRef = useRef<number>();
  const router = useRouter();

  const onCloseModal = (): void => {
    reset();
    setIsOpen(false);
  };

  const closeProcess = (): void => {
    clearInterval(intervalRef.current);
    clearSessionStorage();
    router.push(routes.inactivityScreen);
  };

  const getOutToHome = (): void => {
    clearInterval(intervalRef.current);
    clearSessionStorage();
    router.push(routes.home);
  };

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  const { reset, pause, getRemainingTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const handleExit = async (exit?: boolean) => {
    // scrollBody();
    pause();
    closeProcess();
    // const requestHeaders: HeadersInit = new Headers();
    // requestHeaders.set('x-mock-match-request-body', 'true');
    // requestHeaders.set('Content-Type', 'application/json');
    // requestHeaders.set('App-Name', 'ADIGITAL');
    // const body = {
    //   document_type: dataUser?.document_type,
    //   document_number: dataUser?.document_number,
    // };
    // const bodyEncript = await allResponse(body, KEY);
    // try {
    //   const response = await fetch(`${process.env.APIURL}/kyc/delete-keys`, {
    //     method: 'POST',
    //     headers: requestHeaders,
    //     body: JSON.stringify({
    //       data: bodyEncript,
    //     }),
    //   });
    //   if (response.ok) {
    //     if (exit) {
    //       TagManager.dataLayer({
    //         dataLayer: {
    //           event: 'idle_exit',
    //         },
    //       });
    //       router.push('/');
    //       return;
    //     }
    //     TagManager.dataLayer({
    //       dataLayer: {
    //         event: 'idle_exit',
    //       },
    //     });
    //     router.push('/validacion/error-validacionInactividad');
    //   }
    // } catch (e: any) {
    //   if (exit) {
    //     router.push('/');
    //     return;
    //   }
    //   TagManager.dataLayer({
    //     dataLayer: {
    //       event: 'idle_exit',
    //     },
    //   });
    //   router.push('/validacion/error-validacionInactividad');
    // }
  };

  useEffect(() => {
    setRemaining(getRemainingTime());
    setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);
    return () => {
      setRemaining(0);
    };
  }, []);

  useEffect(() => {
    if (remaining === 0 && isIdle) {
      setIsOpen(true);
      setTimer(30);
    }
  }, [remaining, isIdle]);

  useEffect(() => {
    if (timer === 0 && isOpen) {
      handleExit();
      return () => clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [setTimer, timer]);

  // useEffect(() => {
  //   if (isIdle) {
  //     setIsOpen(true);
  //     intervalRef.current = window.setInterval(() => {
  //       setTimer((time) => time - 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(intervalRef.current);
  // }, [setTimer, timer]);

  // useEffect(() => {
  //   if (timer <= 0) {
  //     clearInterval(intervalRef.current);
  //     clearSessionStorage();
  //     router.push(routes.inactivityScreen);
  //   }
  // }, [timer]);

  return (
    <div
      id="modal"
      className={`bg-black/70 w-screen h-screen z-40 fixed top-0 left-0 flex justify-center content-center ${isOpen ? 'overflow-y-auto' : 'hidden'
        }`}
    >
      <div
        className={`${isOpen ? 'slideInUp' : 'slideOutDown'
          } bg-white w-[343px] h-[428px] md:w-[528px] rounded-xl pt-[64px] md:mt-[94px] px-[16px] mt-[47px]`}
      >
        <h3 className="text-gris-100 text-center w-[311px] mx-auto px-2 text-[24px]">
          Ha estado inactivo en los últimos minutos
        </h3>
        <Typography
          variant="bodyM4"
          className="mt-[24px] md:mt-[32px] text-center w-[258px] m-auto text-primario-900 font-light text-[18px] leading-5 subpixel-antialiased	"
        >
          ¿Desea continuar con la <br />
          solicitud del crédito?
        </Typography>
        <div className="w-full  flex-col flex items-center">
          <Button isLanding="w-[253px] mt-[24px] mb-[42px]" onClick={onCloseModal}>
            Continuar
          </Button>
          <button
            id="reSend"
            type="button"
            onClick={getOutToHome}
            className={`text-center cursor-pointer text-[18px] text-primario-20 text-base leading-[14px] -tracking-[0.2px] font-semibold
                    disabled:text-azul_gris-40 disabled:font-normal disabled:text-sm disabled:leading-[18px] mb-[41px]`}
          >
            <span id="reSend">Salir</span>
          </button>
          <div>
            <p className="text-gris-30 text-center font-[600] mb-[42px]">
              <Icons icon="bcs-clock" size="text-center text-[20px] text-gris-30" />{' '}
              {timer} Segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
