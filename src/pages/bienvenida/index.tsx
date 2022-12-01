import React from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button'
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import Icons from '../../components/ui/icons';
const Bienvenida = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between ">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="xs:block sm:block lg:hidden mt-4 cursor-pointer" onClick={() => router.back()}>
          <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
      </div>
      <div className="m-auto lg:w-[528px]">
        <div className="mt-20 flex justify-center">
          <img src={`${basePath}/images/onboarding.svg`} alt="" />
        </div>
        <Typography variant='h3' className='text-center mt-[52px] text-primario-900 font-[24px]'>
          Cumpla su sueño
          de comprar vivienda
        </Typography>
        <Typography variant='h4' className='text-center mt-3 text-primario-900 font-[18px]'>Requisitos de solicitud:</Typography>
        <div className="listInitial flex justify-center">
          <ul className='mt-5'>
            <li className='mt-3'>Tener entre 18 y 69 años</li>
            <li className='mt-3'>Ser asalariado o pensionado</li>
            <li className='mt-3'>Estar al día con sus pagos</li>
            <li className='mt-3'>Pagar salud y pensión</li>
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
            type="submit"
            name="abrirCuenta"
            data-testid="btnOnboarding"
            onClick={() => router.push(routes.startProccess)}
            id="btn-next"
          >
            Iniciar solicitud
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Bienvenida
