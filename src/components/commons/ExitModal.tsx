import { useRouter } from 'next/router'
import React from 'react'
import { routes } from '../../routes';
import Button from '../ui/Button'
import Typography from '../ui/Typography';


function ExitModal({ setshowModalExit }: any) {
  const router = useRouter();
  const closeModal = () => {
    setshowModalExit(false)
  }
  const gotoHomePage = () => {
    router.replace(routes.home);
  }
  return (
    <Typography componentHTML='div' variant='bodyM3' typeFont='Light' className='m-auto flex-col mt-8 mx-5'>

      <Typography variant='h4' componentHTML='h4' typeFont='Light' className="text-center md:text-[24px] text-[18px] leading-5 md:mx-0 mx-[40px]">
        ¿Desea continuar con el proceso?
      </Typography>
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

    </Typography >
  )
}

export default ExitModal