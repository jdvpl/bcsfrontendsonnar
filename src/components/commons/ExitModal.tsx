import { useRouter } from 'next/router'
import React from 'react'
import { routes } from '../../routes';
import Button from '../ui/Button'


function ExitModal({ setshowModalExit }: any) {
  const router = useRouter();
  const closeModal = () => {
    setshowModalExit(false)
  }
  const gotoHomePage = () => {
    router.replace(routes.home);
  }
  return (
    <div className='m-auto flex-col mt-8 font-monserratLight mx-5'>

      <p className="text-center font-poppinsLight md:text-[24px] text-[18px] leading-5 md:mx-0 mx-[40px]">
        ¿Desea continuar con el proceso?
      </p>
      <div className="flex flex-col justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-[48px] pb-[40px]">
        <Button
          isLanding="w-full xs:w-[250px] sm:w-[253px] md:w-[253px] lg:w-[343px]"
          type="submit"
          data-testid="continueBtn"
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
            data-testid="closeModalExit"
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