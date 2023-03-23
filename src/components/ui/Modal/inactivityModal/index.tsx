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
      className={`bg-black/70 w-screen h-screen z-40 fixed top-0 left-0 flex justify-center content-center ${isOpen ? 'overflow-y-auto' : 'hidden'
        }`}
    >
      <div
        className={`${isOpen ? 'slideInUp' : 'slideOutDown'
          } bg-white w-[343px] h-[428px] md:w-[528px] rounded-xl pt-[64px] md:mt-[94px] px-[16px] mt-[47px]`}
      >
        <h3 className="text-gris-100 text-center w-[311px] mx-auto px-2 text-[24px] font-poppinsSemiBold">
          Ha estado inactivo en los últimos minutos
        </h3>
        <Typography
          variant="bodyM2"
          typeFont='Regular'
          className="mt-[24px] md:mt-[32px] text-center w-[258px] m-auto text-primario-900 subpixel-antialiased"
        >
          ¿Desea continuar con la <br />
          solicitud del crédito?
        </Typography>
        <div className="w-full  flex-col flex items-center">
          <Button isLanding="w-[253px] mt-[24px] mb-[42px] font-montserratRegular" onClick={onCloseModal}>
            Continuar
          </Button>
          <button
            id="reSend"
            type="button"
            role="btnGotoHome"
            data-testid="btnGotoHome"
            onClick={getOutToHome}
            className={`text-center cursor-pointer text-[18px] text-primario-20 text-base leading-[14px] -tracking-[0.2px] font-semibold
                    disabled:text-azul_gris-40 disabled:font-normal disabled:text-sm disabled:leading-[18px] mb-[41px]`}
          >
            <span id="reSend" className='font-montserratRegular'>Salir</span>
          </button>
          <div>
            <p className="text-gris-30 text-center font-[600] mb-[42px] font-montserratRegular">
              <Icons icon="bcs-icon-15" size="text-center text-[20px] text-gris-30" />{' '}
              {timer} Segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
