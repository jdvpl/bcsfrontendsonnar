import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { basePath } from '../../../next.config';
import Button from '../../components/ui/Button';
import { Heading } from '../../components/form/heading';
import Stepper from '../../components/ui/Stepper/index';
import { childrenProps } from '../../interfaces';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { ContainerButtonForm } from '../../components/form/containerButtonForm';
import { urlAndUtms } from '../../utils/RouterUtmsUrl/index';
import { Layout } from '../../components/layouts/layout';
import { NavTitle } from '../../components/commons/NavTitle';



const CardImage:React.FC<childrenProps> = ({children}) => (
  <div className="flex mr-6 minw-64">{children}</div>
);
const ValidationMessage: React.FC = () => {

  const router = useRouter();
  const { isMobile } = useDeviceDetect();
  return (
    <Layout navTitle={<NavTitle noBack />}>
      {isMobile ? (
        <div>
          <div className="pt-3 md:pt-0 w-full lg:mt-10">
            <Stepper
              step="1"
              incomplete=""
              title="Validación de identidad"
              percentaje=""
            />
          </div>
          <Heading>
            Por seguridad le pediremos tomar dos fotos de su rostro y compararemos con su
            cédula.
          </Heading>
          <div className="flex flex-col items-center pb-28 sm:mt-[32px] md:mt-[52px]">
            <div className="w-100 md:w-[343px]">
              <p
                tabIndex={0}
                role="paragraph"
                className="font-semibold text-lg leading-5 text-primario-900 "
              >
                Tenga en cuenta estos consejos:&nbsp;
              </p>
              <div className="flex flex-col mt-[26px] md:mt-[52px] space-y-[24px]">
                <div>
                  <div className="flex">
                    <CardImage>
                      <Image
                        unoptimized
                        src={`${basePath}/images/newSelfie1.svg`}
                        className="mw-64 minw-64 mh-64"
                        alt="celular"
                        title="celular"
                        width="64"
                        height="64"
                      />
                    </CardImage>
                    <p
                      tabIndex={0}
                      role="paragraph"
                      className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
                    >
                      Tome la foto en un lugar iluminado, recomendamos luz natural.
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
                <div>
                  <div className="flex align-items-center">
                    <CardImage>
                      <Image
                        unoptimized
                        src={`${basePath}/images/newSelfie2.svg`}
                        className="mw-64 minw-64 mh-64"
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
                      Tome la foto con el celular en posición vertical.
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
                <div>
                  <div className="flex">
                    <CardImage>
                      <Image
                        unoptimized
                        src={`${basePath}/images/newSelfie3.svg`}
                        className="mw-64 mh-64"
                        alt="no usar tapabocas"
                        title="no usar tapabocas"
                        width="64"
                        height="64"
                      />
                    </CardImage>
                    <p
                      tabIndex={0}
                      role="paragraph"
                      className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
                    >
                      No usar gafas ni tapabocas.
                    </p>
                  </div>
                  <div className="flex justify-end pr-4 mt-0p">
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
                      src={`${basePath}/images/newSelfie4.svg`}
                      className="mw-64 mh-64"
                      alt="no usar gorras"
                      title="no usar gorras"
                      width="64"
                      height="64"
                    />
                  </CardImage>
                  <p
                    tabIndex={0}
                    role="paragraph"
                    className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
                  >
                    No usar gorras ni sombreros.
                  </p>
                </div>
                <div className="flex justify-end pr-4 mt-0p">
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
            </div>
          </div>
          <ContainerButtonForm>
            <Button
              id="btn-go-bank"
              onClick={() => urlAndUtms(router, '/validacion-biometrica/selfie')}
            >
              Continuar
            </Button>
          </ContainerButtonForm>
        </div>
      ) : (
        <div className="w-full mt-9 md:mt-[48px] flex justify-center">
          <Button id="btn-go-bank" onClick={() => urlAndUtms(router, '/validacion-otp/')}>
            Continuar
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default ValidationMessage;
