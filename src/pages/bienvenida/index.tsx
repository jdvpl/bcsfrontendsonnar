import React from 'react'
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button'
import { routes } from '../../routes';
import Icons from '../../components/ui/icons';

function Bienvenida() {
  const router = useRouter();
  return (
    <div>
      <div className="container flex lg:mt-[0] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between  ">
        <div className="mt-4 hidden md:block lg:block">
          <LogoBcs />
        </div>
        <div className="xs:block sm:block md:hidden lg:hidden mt-6 cursor-pointer xs:ml-4" onClick={() => router.back()} data-testid="getbackRouteTest">
          <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
        </div>
        <div className="mt-6 w-[180px] md:w-[180px] lg:w-[280px] xs:mr-4">
          <LogoForm />
        </div>
      </div>
      <div className="m-auto lg:w-[528px]">
        <div className="mt-20 lg:h-[300px] md:w-[292px] md:h-[300px] sm:w-[195px] sm:h-[200px] xs:h-[200px] xs:w-[195px] m-auto ">
          <img src={`${basePath}/images/onboarding.svg`} alt="" />
        </div>
        <Typography variant='h3' className='text-center mt-[52px] text-primario-900 text-[24px] font-semibold'>
          Cumpla su sueño 
          <span className="md:block sm:block xs:block lg:inline">
            de comprar vivienda
          </span>
        </Typography>
        <Typography variant='h4' className='text-center lg:mt-10 md:mt-3 text-primario-900 text-[18px] font-bold mt-3 sm:font-semibold xs:font-semibold'>Requisitos de solicitud:</Typography>
        <div className="listInitial flex justify-center">
          <ul className='md:mt-3'>
            <li className='mt-3'>Tener entre 18 y 69 años</li>
            <li className='mt-3'>Ser asalariado o pensionado</li>
            <li className='mt-3'>Estar al día con sus pagos</li>
            <li className='mt-3'>Pagar salud y pensión</li>
          </ul>
        </div>
        <div className="flex justify-center mt-8 mb-11 ">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
            type="submit"
            name="abrirCuenta"
            data-testid="btnOnboardingtest"
            onClick={() => router.push(routes.startProccess)}
            id="btn-next"
          >
            Iniciar solicitud
          </Button>
        </div>
      </div>
    </div >
  )
}

export default Bienvenida
