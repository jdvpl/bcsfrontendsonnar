import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { deviceType } from 'react-device-detect';
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button'
import Icons from '../../components/ui/icons';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import AnimationComponent from '../../components/commons/Animation';
import TagManager from 'react-gtm-module';
import useAuthentication from '../../hooks/useAuthentication'
import useProtectedRoutes from '../../hooks/useProtectedRoutes';

function Authentication() {
  const router = useRouter();
  const [, setDataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, {});
  const [dataUser,] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const [showAnimation, setShowAnimation] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loaded,] = useState(false);
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'load_onboarding_auth',
        category: 'load_page',
        action: 'load_onboarding_auth',
        label: 'load_onboarding_auth',
      },
    });

  }, []
  );
  const { setCurrentRouting } = useProtectedRoutes();
  const { onSubmit } = useAuthentication(setShowAnimation, setValidated, dataUser, setDataQuestions, router, setCurrentRouting);
  return (
    <div>
      {showAnimation ? <AnimationComponent show="" valid={validated} loaded={loaded} /> : null}
      <div className="container flex lg:mt-[0] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between  ">
        <div className="mt-4 hidden md:block lg:block">
          <LogoBcs />
        </div>
        <div className="xs:block sm:block md:hidden lg:hidden mt-6 cursor-pointer xs:ml-4" onClick={() => router.back()} role="btnGoBack" data-testid="getbackRouteTest">
          <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
        </div>
        <div className="mt-6 w-[180px] md:w-[180px] lg:w-[280px] xs:mr-4">
          <LogoForm />
        </div>
      </div>
      <div className="m-auto lg:w-[528px]">
        <div className="mt-20 lg:h-[300px] md:w-[350px] md:h-[300px] sm:w-[234px] sm:h-[200px] xs:h-[200px] xs:w-[234px] m-auto ">
          <img src={`${basePath}/images/authentication.svg`} alt="" />
        </div>
        <Typography variant='h3' className='text-center mt-[52px] text-primario-900 font-[24px] font-poppinsSemiBold'>
          Por seguridad <span className='xs:block sm:inline'>validaremos</span>
          <span className="block">
            su información
          </span>
        </Typography>

        {deviceType === 'browser' ? <Typography variant='bodyS3' className='text-center mt-3 font-monserratLight text-[18px]'>
          Sugerimos realizar este proceso
          <span className="block">

            desde un celular.
          </span>
        </Typography> : ''}

        <div className="flex justify-center mt-8">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
            type="submit"
            name="abrirCuenta"
            data-testid="btnOnboarding"
            onClick={onSubmit}
            id="btn-next"
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Authentication;
