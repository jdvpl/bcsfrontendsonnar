import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import { routes } from '../../routes';
import Header from '../../components/ui/Headers/Header';
import { invokeEvent } from '../../utils';

function Bienvenida() {
  const router = useRouter();

  useEffect(() => {
    invokeEvent('load_welcome', 'load_page');
  }, []);

  const startProcess = () => {
    router.push(routes.startProccess);
    invokeEvent('go_to_got_request_from_welcome', 'action_funnel');
  };

  return (
    <div>
      <Header />
      <div className="m-auto lg:w-[528px]">
        <div className="mt-20 lg:h-[300px] md:w-[292px] md:h-[300px] sm:w-[195px] sm:h-[200px] xs:h-[200px] xs:w-[195px] m-auto ">
          <img src={`${basePath}/images/onboarding.svg`} alt="" />
        </div>
        <Typography componentHTML='h3' variant='h3' typeFont='Bold' className='text-center mt-[52px] text-primario-900'>
          Cumpla su sueño {""}
          <span className="md:block sm:block xs:block lg:inline">
            de comprar vivienda
          </span>
        </Typography>
        <Typography variant='bodyM2' componentHTML='div' typeFont='Light' className="listInitial flex justify-center  text-[18px] text-primario-900">
          <ul className='mt-6'>
            <Typography variant='h4' componentHTML='h4' typeFont='Bold' className='lg:text-left text-center text-primario-900 lg:mt-0'>Requisitos de solicitud:</Typography>
            <li className='mt-5'>Tener entre 18 y 70 años</li>
            <li className='mt-3'>Ser asalariado o pensionado</li>
            <li className='mt-3'>Estar al día con sus pagos</li>
            <li className='mt-3'>Pagar salud y pensión</li>
            <li className='mt-3'>Solicitar individualmente</li>
            <li className='mt-3'>No aplican subsidios del gobierno</li>
          </ul>
        </Typography>
        <div className="flex justify-center mt-8 mb-11 ">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
            type="submit"
            name="abrirCuenta"
            data-testid="btnOnboardingtest"
            onClick={startProcess}
            id="btn-next"
          >
            <Typography
              variant='bodyM3'
              typeFont='Bold'
              componentHTML='span'
            >
              Iniciar solicitud
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;
