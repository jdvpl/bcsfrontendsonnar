import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import Icons from '../../components/ui/icons';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import AnimationComponent from '../../components/commons/Animation';
import useAuthentication from '../../hooks/useAuthentication';
import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import DynamicText from '../../components/custom/DynamicText';
import { invokeEvent } from '../../utils';

function Authentication() {
  const router = useRouter();
  const [dataQuestions, setDataQuestions] = useSessionStorage(
    SesionStorageKeys.DataQuestions.key,
    {}
  );
  const [dataUser] = useSessionStorage(SesionStorageKeys.dataUser.key, {});
  const [showAnimation, setShowAnimation] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loaded] = useState(false);
  const { setCurrentRouting } = useProtectedRoutes();
  const { onSubmit, isBrowser } = useAuthentication(
    setShowAnimation,
    setValidated,
    dataUser,
    setDataQuestions,
    router,
    setCurrentRouting,
    dataQuestions
  );

  useEffect(() => {
    invokeEvent('load_authentication', 'load_page');
  }, []);

  return (
    <div>
      {showAnimation ? (
        <AnimationComponent show="" valid={validated} loaded={loaded} />
      ) : null}
      <div className="container flex lg:mt-[0] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between  ">
        <div className="mt-4 hidden md:block lg:block">
          <LogoBcs />
        </div>
        <div
          className="xs:block sm:block md:hidden lg:hidden mt-6 cursor-pointer xs:ml-4"
          onClick={() => router.back()}
          data-testid="getbackRouteTest"
        >
          <Icons icon="bcs-icon-44" size="text-[1.2rem]" title="" />
        </div>
        <div className="mt-6 w-[180px] md:w-[180px] lg:w-[280px] xs:mr-4">
          <LogoForm />
        </div>
      </div>
      <div className="m-auto lg:w-[528px]">
        <div className="mt-20 lg:h-[300px] md:w-[350px] md:h-[300px] sm:w-[234px] sm:h-[200px] xs:h-[200px] xs:w-[234px] m-auto ">
          <img
            src={`${basePath}/images/authentication.svg`}
            alt="Imagen referente a validación de información"
            title="Imagen referente a validación de información"
          />
        </div>
        <div role="tabpanel" tabIndex={0}>
          <Typography
            variant="h3"
            typeFont="Bold"
            className="text-center mt-[52px] text-primario-900"
            componentHTML="h3"
          >
            Por seguridad <span className="xs:block sm:inline">validaremos</span>
            <span className="block">su información</span>
          </Typography>
          <DynamicText isBrowser={isBrowser} />
        </div>

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
  );
}

export default Authentication;
