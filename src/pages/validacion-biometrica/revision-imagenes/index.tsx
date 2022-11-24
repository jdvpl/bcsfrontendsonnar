import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/layouts/layout';
import { NavTitle } from '../../../components/commons/NavTitle';
import Button from '../../../components/ui/Button/index';
import { AplicationContext } from '../../../context/AplicationContext';
import Stepper from '../../../components/ui/Stepper/index';
import AnimationComponent from '../../../components/commons/Animation';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { Heading } from '../../../components/form/heading';
import { basePath } from '../../../../next.config';
import useAES from '../../../hooks/useAES';
import { urlAndUtms } from '../../../utils/RouterUtmsUrl/index';

const KEY = process.env.KEYKYCHASH;

const RevisionImagenes: React.FC = () => {
  const router = useRouter();
  const [dataTU] = useSessionStorage('DataUser', '');
  const { setEligirFoto, fotosCedula, setFotoDelantera, setFotoTrasera } =
    useContext(AplicationContext);
  const [showAnimation, setShowAnimation] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { allResponse } = useAES();
  const scrollBody = () => {
    if (typeof window === 'object') {
      document.body.classList.remove('body-scroll-hidden');
    }
  };

  const changePhoto = (lado: string) => {
    if (lado === 'delantero') {
      setEligirFoto('delantero');
      setFotoDelantera('');
      urlAndUtms(router, '/validacion-biometrica/foto-cedula');
    } else if (lado === 'trasero') {
      setEligirFoto('trasero');
      setFotoTrasera('');
      urlAndUtms(router, '/validacion-biometrica/foto-cedula');
    }
  };
  const redirectLoader = async (redirect: string) => {
    setValidated(true);
    setTimeout(() => {
      setLoaded(true);
      setTimeout(
        () => router.push({ pathname: redirect, query: { ...router.query } }),
        1000
      );
    }, 100);
  };

  // const sendAll = async () => {
  //   const requestHeaders: HeadersInit = new Headers();
  //   requestHeaders.set('x-mock-match-request-body', 'true');
  //   requestHeaders.set('Content-Type', 'application/json');
  //   requestHeaders.set('App-Name', 'ADIGITAL');

  //   const body = {
  //     front: fotosCedula.delantera,
  //     back: fotosCedula.trasera,
  //     document_type: dataTU.document_type,
  //     document_number: dataTU.document_number,
  //   };
  //   const encrypt = await allResponse(body, KEY);
  //   try {
  //     setShowAnimation(true);
  //     setError(false);
  //     const response = await fetch(
  //       `${process.env.KYCAPIURL}/identity-user/biometry/document`,
  //       {
  //         method: 'POST',
  //         headers: requestHeaders,
  //         body: JSON.stringify({
  //           data: encrypt,
  //         }),
  //       }
  //     );
  //     if (response.ok) {
  //       setIsLoading(false);
  //       redirectLoader('/validacion-biometrica/indexSelfie');
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
  //       urlAndUtms(router, '/validacion/error-validacionIdentidad');
  //     }
  //   } catch (e: any) {
  //     urlAndUtms(router, '/validacion/error');
  //   }
  // };

  const sendData = async () => {
    setIsLoading(false);
    redirectLoader('/validacion-biometrica/indexSelfie');
  };
  useEffect(() => {
    scrollBody();
  }, []);
  return (
    <Layout navTitle={<NavTitle noBack />}>
      {showAnimation && (
        <AnimationComponent
          data-testid="animation"
          show=""
          valid={validated}
          loaded={loaded}
        />
      )}
      <div data-testid="revision">
        <div className="pt-3 md:pt-0 w-full lg:mt-10">
          <Stepper step="1" incomplete="" title="Validación de identidad" percentage="" />
        </div>

        <div>
          <Heading>Resultado de las fotos</Heading>
          <div className="flex flex-col items-center pb-28  sm:mt-[32px] md:mt-[52px]">
            <div className="br-complete-gray px-4 py-4 w-100 md:w-[343px] mb-3">
              <div className="d-flex w-100  align-items-center">
                <div>
                  <p className="fz-18 text-center fw-600 mb-3 text-primario-900 max-w-[88%]">
                    Frente de la cédula
                  </p>
                  <img
                    data-testid="delantera"
                    className="mr-23 max-w-[192px] rounded-[9px]"
                    src={fotosCedula ? fotosCedula.delantera : ''}
                    alt=""
                  />
                </div>
                <button
                  onClick={() => changePhoto('delantero')}
                  type="button"
                  data-testid="changeFront"
                  className="br-complete-gray mt-7 px-2 py-2 align-items-center flex-column d-flex justify-content-center border-secondary-300 border-[0.5px] max-w-[84px] max-h-[74px]"
                >
                  <img src={`${basePath}/images/camara.png`} className="mb-1" alt="" />
                  <p className="text-center fz-12 fw-600 text-primario-400">
                    Volver a tomar foto
                  </p>
                </button>
              </div>
            </div>
            <div className="br-complete-gray px-4 py-4 w-100  md:w-[343px]">
              <div className="d-flex w-100  align-items-center">
                <div>
                  <p className="fz-18 text-center fw-600 text-sm mb-3 text-primario-900 max-w-[88%]">
                    Reverso de la cédula
                  </p>

                  <img
                    data-testid="trasera"
                    className="mr-23 max-w-[192px] rounded-[9px]"
                    src={fotosCedula ? fotosCedula.trasera : ''}
                    alt=""
                  />
                </div>
                <button
                  onClick={() => changePhoto('trasero')}
                  type="button"
                  data-testid="changeBack"
                  className="br-complete-gray mt-7 px-2 py-2 align-items-center flex-column d-flex justify-content-center border-secondary-300 border-[0.5px] max-w-[84px] max-h-[74px]"
                >
                  <img src={`${basePath}/images/camara.png`} className="mb-1" alt="" />
                  <p className="text-center fz-12 fw-600 text-primario-400">
                    Volver a tomar foto
                  </p>
                </button>
              </div>
            </div>
          </div>
          {error ? <div className="text-center mt-[12px] ">Intentelo de nuevo</div> : ''}

          <Button id="btn-go-bank" data-testid="sendPhoto" onClick={() => sendData()}>
            Continuar
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default RevisionImagenes;
