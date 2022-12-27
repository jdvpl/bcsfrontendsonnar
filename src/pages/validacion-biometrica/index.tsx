import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { isTablet, isMobile, isDesktop, isIPad13 } from 'react-device-detect';
import Image from 'next/image';
import ValidationMessageBiometry from '../../components/biometria/error-validacion';
import Button from '../../components/ui/Button';
import Heading from '../../components/form/heading';
import Stepper from '../../components/ui/Stepper/index';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import ErrorLayout from '../../components/layouts/errorLayout';
import AnimationComponent from '../../components/commons/Animation';
import useAES from '../../hooks/useAES';
import { urlAndUtms } from '../../utils/RouterUtmsUrl';
import { childrenProps } from '../../interfaces';
import Layout from '../../components/layouts/layout';
import NavTitle from '../../components/commons/NavTitle';
import { basePath } from '../../../next.config';
import ContainerButtonForm from '../../components/ui/Form/ContainerButtonForm';

const KEY = process.env.KEYKYCHASH;

const CardImage: React.FC<childrenProps> = ({ children }) => (
  <div className="flex mr-6 minw-64">{children}</div>
);
const ValidationMessage: React.FC = () => {
  const router = useRouter();
  const [dataTU] = useSessionStorage('DataUser', '');
  const [biometryProcess] = useSessionStorage('process', '');
  const [showAnimation, setShowAnimation] = useState(false);
  const [validated, setValidated] = useState(true);
  const [loaded] = useState(false);
  const { allResponse } = useAES();

  // const beginBiometry = async () => {
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
  //       `${process.env.KYCAPIURL}/identity-user/biometry`,
  //       {
  //         method: 'POST',
  //         headers: requestHeaders,
  //         body: JSON.stringify({
  //           data: bodyEncript,
  //         }),
  //       }
  //     );
  //     if (response.ok) {
  //       setValidated(false);
  //       setShowAnimation(false);
  //     } else if (response.status === 403) {
  //       setValidated(false);
  //       setShowAnimation(false);
  //       const dataResponse: any = await response.json();
  //       if (dataResponse.internal_code === 'VQ-01') {
  //         setTimeout(() => urlAndUtms(router, '/'), 100);
  //       } else {
  //         setTimeout(() => urlAndUtms(router, '/validacion/error'), 100);
  //       }
  //     } else {
  //       urlAndUtms(router, '/validacion/error');
  //     }
  //   } catch (e: any) {
  //     urlAndUtms(router, '/validacion/error');
  //   }
  // };
  const scrollBody = () => {
    if (typeof window === 'object') {
      document.body.classList.remove('body-scroll-hidden');
    }
  };
  useEffect(() => {
    scrollBody();
    if (biometryProcess) {
      setShowAnimation(false);
      setValidated(false);
    } else if (isMobile || isTablet || window.innerWidth <= 1000) {
      console.log("is mobile")
    }
  }, []);

  if (
    isDesktop &&
    isDesktop !== undefined &&
    isMobile === false &&
    isTablet === false &&
    isIPad13 === false
  ) {
    return (
      <ErrorLayout>
        <ValidationMessageBiometry />
      </ErrorLayout>
    );
  }

  return (
    <div>
      <Head>
        <title>Validación biométrica</title>
      </Head>
      <Layout navTitle={<NavTitle noBack />}>
        {showAnimation && (
          <AnimationComponent show="" valid={validated} loaded={loaded} />
        )}
        {(isMobile || isTablet) && (
          <div>
            <div className="pt-3 md:pt-0 w-full lg:mt-10">
              <Stepper
                steps={1}
                actualStep={0}
                title="Validación de identidad"
              />
            </div>
            <Heading>
              Por seguridad pediremos tomar foto de su cédula, para validar su identidad.
            </Heading>
            &nbsp;
            <br />
            <div className="flex justify-center pb-28 mt-[32px] md:mt-[52px]">
              <div className=" w-[343px]">
                <p
                  tabIndex={0}
                  role="paragraph"
                  className="font-semibold text-lg leading-5 text-primario-900 "
                >
                  Tenga en cuenta estos consejos:&nbsp;
                </p>
                <div className="flex flex-col  mt-[26px] md:mt-[28px] space-y-[24px]">
                  <div>
                    <div className="flex">
                      <CardImage>
                        <Image
                          unoptimized
                          src={`${basePath}/images/new1.svg`}
                          className="mw-64 hw-64"
                          alt="celular"
                          title="celular"
                          width="64"
                          height="64"
                        />
                      </CardImage>
                      <p
                        tabIndex={0}
                        role="paragraph"
                        className="text-primario-900 font-normal text-base leading-[18px] pr-6"
                      >
                        Tome la foto en un lugar con luz, preferiblemente luz natural
                        evitando brillos y reflejos.
                      </p>
                    </div>
                    <div className="flex justify-end pr-4 mt-5">
                      <svg
                        className="flex-end "
                        width="230"
                        height="1"
                        viewBox="0 0 240 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="0.75"
                          x2="240"
                          y2="0.75"
                          stroke="#798C98"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      <CardImage>
                        <Image
                          unoptimized
                          src={`${basePath}/images/new2.svg`}
                          className="mw-64 mh-64"
                          alt="celular inclinado"
                          title="celular inclinado"
                          width="64"
                          height="64"
                        />
                      </CardImage>
                      <p
                        tabIndex={0}
                        role="paragraph"
                        className="text-primario-900 font-normal text-base leading-[18px] pr-6"
                      >
                        Tome la foto con el celular en posición horizontal.
                      </p>
                    </div>
                    <div className="flex justify-end pr-4 mt-2">
                      <svg
                        className="flex-end "
                        width="230"
                        height="1"
                        viewBox="0 0 240 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          y1="0.75"
                          x2="240"
                          y2="0.75"
                          stroke="#798C98"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex">
                    <CardImage>
                      <Image
                        unoptimized
                        src={`${basePath}/images/new3.svg`}
                        className="mw-64 mh-64"
                        alt="documento de identidad"
                        title="documento de identidad"
                        width="64"
                        height="64"
                      />
                    </CardImage>
                    <p
                      tabIndex={0}
                      role="paragraph"
                      className="text-primario-900 font-normal text-base leading-[18px] pr-6"
                    >
                      Asegúrese de que su cédula no tenga imperfecciones.
                    </p>
                  </div>
                  <div className="flex justify-end pr-4 mt-0p">
                    <svg
                      className="flex-end md:w- "
                      width="230"
                      height="1"
                      viewBox="0 0 240 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="0.75"
                        x2="240"
                        y2="0.75"
                        stroke="#798C98"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <ContainerButtonForm>
              <Button
                id="btn-go-bank"
                onClick={() => urlAndUtms(router, '/validacion-biometrica/foto-cedula')}
              >
                Continuar
              </Button>
            </ContainerButtonForm>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default ValidationMessage;
