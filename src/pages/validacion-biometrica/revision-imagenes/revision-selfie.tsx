import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../../components/ui/Button';
import { AplicationContext } from '../../../context/AplicationContext';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import AnimationComponent from '../../../components/commons/Animation';
import Stepper from '../../../components/ui/Stepper/index';
import  Heading  from '../../../components/form/heading';
import { basePath } from '../../../../next.config';
import useAES from '../../../hooks/useAES';
import  ContainerButtonForm  from '../../../components/form/containerButtonForm';
import { urlAndUtms } from '../../../utils/RouterUtmsUrl';
import Layout from '../../../components/layouts/layout';
import  NavTitle  from '../../../components/commons/NavTitle';

const KEY = process.env.KEYKYCHASH;

const RevisionImagenes: React.FC = () => {
  const router = useRouter();
  const { selfies, setSelfieSonriendo, setSelfieNormal } = useContext(AplicationContext);
  const [showAnimation, setShowAnimation] = useState(false);
  const [, setIsLoading] = useState(true);
  const [validated, setValidated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [dataTU, setDataUser] = useSessionStorage('DataUser', '');
  const dataUser = dataTU?.personalData;
  const { allResponseDecrypted, allResponse } = useAES();
  const changePhoto = () => {
    setSelfieNormal('');
    setSelfieSonriendo('');
    urlAndUtms(router, '/validacion-biometrica/selfie');
  };
  async function redirectLoader(redirect: string) {
    setValidated(true);
    setTimeout(() => {
      setLoaded(true);
      setTimeout(
        () => router.push({ pathname: redirect, query: { ...router.query } }),
        2900
      );
    }, 2300);
  }

  // const biometryProcess = async () => {
  //   setIsLoading(true);

  //   const requestHeaders: HeadersInit = new Headers();
  //   requestHeaders.set('x-mock-match-request-body', 'true');
  //   requestHeaders.set('Content-Type', 'application/json');
  //   requestHeaders.set('App-Name', 'ADIGITAL');
  //   const body = {
  //     document_type: dataTU.document_type,
  //     document_number: dataTU.document_number,
  //   };
  //   const bodyEncript = await allResponse(body, KEY);
  //   try {
  //     const response = await fetch(
  //       `${process.env.KYCAPIUR}/identity-user/biometry/process`,
  //       {
  //         method: 'POST',
  //         headers: requestHeaders,
  //         body: JSON.stringify({
  //           data: bodyEncript,
  //         }),
  //       }
  //     );
  //     if (response.ok) {
  //       const dataResponse: any = await response.json();
  //       const decrypdata = await allResponseDecrypted(dataResponse.data, KEY);
  //       setDataUser({
  //         ...dataTU,
  //         personalData: { ...dataUser, ...decrypdata },
  //       });
  //       redirectLoader('/simulador/');
  //     } else if (response.status === 403) {
  //       setIsLoading(false);
  //     } else if (response.status === 401) {
  //       urlAndUtms(router, '/validacion/error-validacionIdentidad');
  //     } else {
  //       setIsLoading(false);
  //       urlAndUtms(router, '/simulador/');
  //     }
  //   } catch (e: unknown) {
  //     setIsLoading(false);
  //   }
  // };
  // const sendSelfie = async () => {
  //   const requestHeaders: HeadersInit = new Headers();

  //   const body = {
  //     selfie_normal: selfies.sonriendo.image,
  //     selfie_alive: selfies.sonriendo.image_alive,
  //     document_type: dataTU.document_type,
  //     document_number: dataTU.document_number,
  //   };
  //   requestHeaders.set('x-mock-match-request-body', 'true');
  //   requestHeaders.set('Content-Type', 'application/json');
  //   requestHeaders.set('App-Name', 'ADIGITAL');
  //   const encript = await allResponse(body, KEY);
  //   try {
  //     setShowAnimation(true);

  //     const response = await fetch(
  //       `${process.env.KYCAPIUR}/identity-user/biometry/selfie`,
  //       {
  //         method: 'POST',
  //         headers: requestHeaders,
  //         body: JSON.stringify({
  //           data: encript,
  //         }),
  //       }
  //     );
  //     if (response.ok) {
  //       setIsLoading(false);
  //       biometryProcess();
  //     } else if (response.status === 403) {
  //       const dataResponse: any = await response.json();

  //       const code = dataResponse.internal_code;

  //       switch (code) {
  //         case 'VQ-01':
  //           urlAndUtms(router, '/');
  //           break;
  //         case 'VQ-02':
  //           urlAndUtms(router, '/validacion/error-validacionIdentidad');
  //           break;
  //         default:
  //           urlAndUtms(router, '/validacion/');
  //       }
  //     } else if (response.status === 401) {
  //       urlAndUtms(router, '/validacion/error-validacionIdentidad');
  //     } else if (response.status === 504 || response.status === 408) {
  //       setShowAnimation(false);
  //       setIsLoading(false);
  //       setError(true);
  //     } else {
  //       urlAndUtms(router, '/validacion/error');
  //     }
  //   } catch (e: any) {
  //     urlAndUtms(router, '/validacion/error');
  //   }
  // };

  const sendData = async () => {
    setIsLoading(false);
    redirectLoader('/simulador/');
  };
  return (
    <Layout navTitle={<NavTitle noBack />}>
      {showAnimation && <AnimationComponent show="" valid={validated} loaded={loaded} />}
      <div data-testid="revision">
        <div className="pt-3 md:pt-0 w-full lg:mt-10">
          <Stepper steps={1} actualStep={0} title="Validación de identidad" />
        </div>

        <div className="pb-28">
          <Heading>Resultado de las fotos</Heading>
          <div className="d-flex justify-content-center  sm:mt-[32px] md:mt-[52px]">
            <div className="br-complete-gray px-3 pt-6 w-100 mr-3 max-w-[154px]">
              <p className="fz-18 text-center mb-3 fw-700">Foto uno</p>
              <div className="d-flex w-100  align-items-center">
                <img
                  data-testid="image1"
                  className="w-100 mb-6 max-w-[130px] max-h-[130px] rounded-[50%] object-cover"
                  src={selfies ? selfies.sonriendo.image : ''}
                  alt=""
                />
              </div>
            </div>
            <div className="br-complete-gray px-3 pt-6 w-100 ml-3 max-w-[154px]">
              <p className="fz-18 mb-3 text-center fw-700">Foto dos</p>
              <div className="d-flex w-100 align-items-center">
                <img
                  data-testid="image2"
                  className="w-100 mb-6 max-w-[130px] max-h-[130px] rounded-[50%] object-cover"
                  src={selfies ? selfies.sonriendo.image_alive : ''}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-[32px] mb-4 flex flex-col justify-center items-center  md:mt-[48px] ">
            {error ? <div className="text-center mt-[12px]">Intentelo de nuevo</div> : ''}
            <button
              onClick={() => changePhoto()}
              type="button"
              className="br-blue mb-10 px-2 py-2 align-items-center w-100 d-flex justify-content-center md:w-[343px]"
            >
              <img
                src={`${basePath}/images/camarita.svg`}
                className="mb-1 w-100 max-w-[32px]"
                alt=""
              />
              <p className="text-center ml-4 fz-18 fw-600 text-primario-400">
                Repetir fotos de rostro
              </p>
            </button>
          </div>
        </div>
        <ContainerButtonForm>
          <Button id="btn-go-bank" onClick={() => sendData()}>
            Continuar
          </Button>
        </ContainerButtonForm>
      </div>
    </Layout>
  );
};
export default RevisionImagenes;
