import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import { routes } from '../../../../routes';
import { clearSessionStorage } from '../../../../utils';
import Button from '../../Button';
import Icons from '../../icons';
import Typography from '../../Tipography';

export const InactivityModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(30);
  const intervalRef = useRef<number>();
  const router = useRouter();

  const onOpenModal = (): void => {
    setIsOpen(!isOpen);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      document.getElementById('modal')?.classList.add('hidden');
    }, 1000);
  };

  const closeProcess = (): void => {
    clearInterval(intervalRef.current);
    clearSessionStorage();
    router.push(routes.home);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [setTimer, timer]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      clearSessionStorage();
      router.push(routes.inactivityScreen);
    }
  }, [timer]);

  return (
    <div
      id="modal"
      className={`bg-black/70 w-screen h-screen fixed top-0 flex justify-center content-center ${
        isOpen && 'overflow-y-auto'
      }`}
    >
      <div
        className={`${
          isOpen ? 'slideInUp' : 'slideOutDown'
        } bg-white w-[343px] h-[418px] md:w-[528px] rounded-xl pt-[60px] md:mt-[94px] px-[16px] mt-[47px]`}
      >
        <h3 className="text-gris-100 text-center w-[311px] mx-auto px-2 text-[24px]">
          Ha estado inactivo en los últimos minutos
        </h3>

        <Typography
          variant="bodyM4"
          className="mt-[24px] text-center w-[258px] m-auto text-primario-900"
        >
          ¿Desea continuar con la <br />
          solicitud del crédito?
        </Typography>

        <div className="w-full  flex-col flex items-center">
          <Button isLanding="w-[253px] mt-[24px] mb-[38px]" onClick={onOpenModal}>
            Continuar
          </Button>
          <button
            id="reSend"
            type="button"
            onClick={closeProcess}
            className={`text-center cursor-pointer  text-[18px] text-primario-20 text-base leading-[14px] -tracking-[0.2px] font-semibold
                  disabled:text-azul_gris-40 disabled:font-normal disabled:text-sm disabled:leading-[18px] mb-[29px]`}
          >
            <span id="reSend">Salir</span>
          </button>
          <div>
            <p className="text-gris-30 text-center font-[600]">
              <Icons icon="bcs-clock" size="text-center text-[20px] text-gris-30" />{' '}
              {timer} Segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
