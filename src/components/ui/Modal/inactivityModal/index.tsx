import React from 'react';
import Button from '../../Button';
import Icons from '../../icons';
import Typography from '../../Typography';
import useInactivityModal from './useInactivityModal';

export function InactivityModal() {
  const { onCloseModal, getOutToHome, isOpen, timer } = useInactivityModal();
  return (
    <div
      id="modalInactivity"
      className={`bg-black/70 w-screen h-screen z-40 fixed top-0 left-0 flex justify-center content-center ${
        isOpen ? 'overflow-y-auto' : 'hidden'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalInactivity"
      tabIndex={0}
    >
      <div
        className={`${
          isOpen ? 'slideInUp' : 'slideOutDown'
        } bg-white w-[343px] h-[428px] md:w-[528px] rounded-xl pt-[64px] md:mt-[94px] px-[16px] mt-[47px]`}
      >
        <h3 className="text-gris-100 text-center w-[311px] mx-auto px-2 text-[24px] font-poppinsSemiBold">
          Ha estado inactivo en los últimos minutos
        </h3>
        <Typography
          variant="bodyM2"
          typeFont="Regular"
          componentHTML="p"
          className="mt-[24px] md:mt-[32px] text-center w-[258px] m-auto text-primario-900 subpixel-antialiased"
        >
          ¿Desea continuar con la solicitud del crédito?
        </Typography>
        <div className="w-full  flex-col flex items-center">
          <Button isLanding="w-[253px] mt-[24px] mb-[42px]" onClick={onCloseModal}>
            <Typography variant="bodyM3" componentHTML="span">
              Continuar
            </Typography>
          </Button>
          <Typography
            variant="bodyM3"
            componentHTML="button"
            id="reSend"
            type="button"
            data-testid="btnGotoHome"
            onClick={getOutToHome}
            className={`text-center cursor-pointer text-[18px] text-primario-20 text-base leading-[14px] -tracking-[0.2px] font-semibold disabled:text-azul_gris-40 disabled:font-normal disabled:text-sm disabled:leading-[18px] mb-[41px]`}
          >
            <Typography variant="bodyM3" componentHTML="span" id="reSend">
              Salir
            </Typography>
          </Typography>
          <div>
            <Typography
              variant="bodyM3"
              componentHTML="p"
              className="text-gris-30 text-center font-[600] mb-[42px] "
            >
              <Icons
                icon="bcs-icon-15"
                size="text-center text-[20px] text-gris-30"
                title="Tiempo"
              />{' '}
              {timer} Segundos
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
