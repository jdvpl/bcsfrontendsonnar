import React, { useState } from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import { basePath } from '../../../next.config';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button'
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import Icons from '../../components/ui/icons';
import { deviceType } from 'react-device-detect';
import { getQuestions } from '../../services';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import AnimationComponent from '../../components/commons/Animation';

const Authentication = () => {
  const router = useRouter();
  const [, setDataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataUser,] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const [showAnimation, setShowAnimation] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onSubmit = async () => {
    setShowAnimation(true);
    setValidated(true);
    const body = {
      document_type: dataUser.document_type,
      document_number: dataUser.document_number,
      dataTreatment: dataUser.policy_and_terms,
      productRegulation: dataUser.policy_and_terms,
      commercialPurposes: dataUser.commercial_terms,
    };
    const response = await getQuestions(body);
    if (!response.error) {
      setDataQuestions(response.response.data);
      router.push(routes.validacionIdentidad);
      return;
    }
    if (response.response?.status === 403) {
      setDataQuestions(response.response.data);
      const dataResponse: any = await response.response.json();
      const code = dataResponse.internal_code;
      switch (code) {
        case 'RL-02':
        case 'IV-02':
        case 'IV-03':
        case 'IV-05':
          router.push(routes.validacionErrorValidacionIdentidad);
          break;
        case 'IV-08':
          router.push(routes.validacionErrorDiario);
          break;
        case 'IV-09':
          router.push(routes.validacionBlock);
          break;
        case 'PF-01':
        case 'PF-02':
          router.push(routes.validacionBiometrica);
          break;
        case 'ER-00':
          router.push(routes.startProccess);
          break;
        default:
          break;
      }
    } else {
      router.push(routes.errorValidacion);
    }
  }
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
        <Typography variant='h3' className='text-center mt-[52px] text-primario-900 font-[24px]'>
          Por seguridad <span className='xs:block sm:inline'>validaremos</span>
          <span className="block">
            su información
          </span>
        </Typography>

        {deviceType === 'browser' ? <Typography variant='bodyS3' className='text-center mt-3'>
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

export default Authentication
