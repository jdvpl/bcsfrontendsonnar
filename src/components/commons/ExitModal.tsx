import Router from 'next/router'
import React from 'react'
import { routes } from '../../routes';
import Button from '../ui/Button'


function ExitModal({ setshowModalExit }: any) {
  const closeModal = () => {
    setshowModalExit(false)
  }
  const gotoHomePage = () => {
    Router.replace(routes.home);
  }
  return (
    <div className='m-auto flex-col mt-8 font-monserratLight mx-5'>

      <p className="text-center font-poppinsLight text-[24px]">
        ¿Desea continuar con el proceso?
      </p>
      <div className="flex flex-col justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-[48px] pb-[40px]">
        <Button
          isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
          type="submit"
          data-testid="advisoryFormtest"
          id="btn-next"
          onClick={closeModal}
        >
          Continuar
        </Button>

        <div className="mt-5">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px] shadow-none"
            onClick={() => gotoHomePage()}
            name="solicitarCredito"
            data-testid="btn-closeModal"
            tabIndex={0}
            id="btn-next"
            variant="secondary"
          >
            Salir
          </Button>
        </div>
      </div>

    </div >
  )
}

export default ExitModal