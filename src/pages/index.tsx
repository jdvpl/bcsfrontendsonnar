import { deviceType } from 'react-device-detect';
import React, { useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import LogoBcsWhite from '../components/svg/LogoBcsWhite';
import Typography from '../components/ui/Typography';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { SesionStorageKeys } from '../session';
import LogoViviendaWhite from '../components/svg/LogoViviendaWhite';
import SelectiveCard from '../components/ui/Card/SelectiveCard';
import { routes } from '../routes';
import LogoBcs from '../components/svg/LogoBcs';
import { Icons } from '../components/ui/icons';
import Questions from '../components/ui/Accordion';
import { basePath } from '../../next.config';
import TagManager from 'react-gtm-module';
import Step from '../components/ui/Card/Step';

export default function Home() {
  const [device, setDevice] = useSessionStorage(SesionStorageKeys.device.key, deviceType);
  const isMobile = useMediaQuery({
    query: "(max-width:575px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 576px) and (max-width: 1023px)"
  })
  const isBrowser = useMediaQuery({
    query: "(min-width: 1024px) "
  })
  useEffect(
    () => () => {
      setDevice(deviceType)
    },
    [device]
  );
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'Landing',
        category: 'init_landing',
        action: 'landing',
        label: 'landing',
      },
    });

  }, []
  );

  return (
    <div data-testid="landingPage" className="overflow-hidden landingPage">
      <div className={`lg:bg-landing-lg xl:bg-bg-landing-lg xxl:bg-bg-landing-lg md:bg-landing-md sm:bg-landing-sm bg-landing-sm bg-no-repeat  -z-30 bg-cover xs:bg-bottom sm:bg-bottom md:bg-bottom lg:bg-center xl:bg-bottom xs:h-[540px] sm:h-[610px] md:h-[620px] lg:h-[755px] xl:h-[715px] xxl:bg-top xxl:h-[910px] bgImageLanding`}>
        <div
          className=" container flex justify-start items-baseline xs:pt-3 xs:pl-2 sm:pt-3 ms:pl-2 md:pl-6 md:pt-6 lg:pt-5 lg:pl-10 xl:pt-5 xxl:pl-0 xxl:ml-20 iconHeader"
          itemScope
          itemProp="logo"
        >
          {isMobile ? <LogoBcsWhite /> : null}
          {isBrowser ? <LogoBcs /> : null}
          {isTablet ? <LogoBcsWhite /> : null}
        </div>
        <div className="xs:pt-3 sm:pt-3 md:flex md:justify-end md:mr-[7rem] lg:flex lg:justify-center lg:mt-[6rem] lg:ml-[10.5rem] md:pl-[20.5rem] xxl:mt-[9rem] md:mt-[4rem]">
          <div className="md:flex md:flex-col firtTitle">
            <p className="text-white font-normal xs:text-[22px] sm:text-[22px] leading-[30px]  xs:ml-5 sm:ml-5 xs:mb-1 sm:mb-1 font-poppinsLight ">
              Bienvenido a
              <figure itemProp="logo" className="mt-4 md:mt-1 m-0 p-0 w-full sm:pr-5">
                <LogoViviendaWhite />
              </figure>
            </p>
          </div>
        </div>
        {/* title */}

        <div className="xs:flex sm:flex xs:justify-end sm:justify-end xs:pr-2 sm:pr-6 xs:pt-2 md:pr-[5.5rem] md:mt-1 xs:mt-5 lg:mt-[6px]  lg:flex lg:justify-center lg:ml-[32rem] paragraphContent ml-3">
          <div className="flex flex-col">
            <h4 className="text-white  md:w-[285px] lg:w-[394px] font-semibold lg:text-[24px] md:text-[20px] leading-6 wcontainerHeader font-poppinsSemiBold sm:text-[18px]">
              ¿Desea comprar vivienda?
            </h4>
            <p className="text-white sm:w-[305px] w-[257px] md:w-[275px] lg:w-[354px]  font-light leading-[26px] md:leading-[20px] mt-3 wcontainerHeader text-[16px] lg:text-[22px] md:text-[18px] md:mr-[40px] lg:mr-0 font-monserratLight sm:text-[16px] sm:leading-[18px]">
              Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas, ni papeleos extensos.
            </p>
          </div>
        </div>
        <div className="container cntainerCards mx-auto mt-5  lg:w-[920px]  md:grid md:grid-cols-3 grid grid-cols-3 md:mt-[5rem] gap-4 lg:mt-[5rem] xxl:mt-[12rem] md:w-[580px] sm:mt-[6.5rem] xs:w-[305px] sm:w-[350px]">
          <SelectiveCard
            icon="bcs-document-one"
            size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
            color="text-white"
            data-testid="SoliciteTest"
            label="Solicite su crédito"
            description="Obtenga la preaprobación de su crédito hipotecario y compre la vivienda que desea."
            pathTo={routes.onboarding}
            titleClasses="md:text-[14px] lg:text-[16px] text-[10px] text-center font-poppinsSemiBold font-semibold text-white"
            classNamesDescription='md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-1 lg:pb-2 md:block hidden'
            className="sm:mt-4 xs:mt-4 sm:w-[109px] lg:w-[292px] md:w-[186px] md:h-[178px] lg:h-[198px] h-[110px]"
            onclick
            active
          />

          <SelectiveCard
            icon="bcs-hand-mobile"
            size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
            color="text-primario-300"
            label="Simule su crédito"
            data-testid="simuladorTestBtn"
            description="Calcule el valor del crédito y sus cuotas."
            pathTo={routes.simulador}
            className="sm:mt-4 xs:mt-4 sm:w-[109px] lg:w-[292px] md:w-[186px] md:h-[178px] lg:h-[198px] h-[110px]"
            titleClasses="md:text-[14px] lg:text-[16px] text-[10px] text-center font-poppinsSemiBold font-semibold text-white"
            classNamesDescription='md:w-[143px] lg:w-[224px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-1 lg:pb-2 md:block hidden'
            onclick
          />
          <SelectiveCard
            icon="bcs-hand-simbol"
            size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
            color="text-primario-300"
            data-testid="consultancyTestBtn"
            label={`Aprenda sobre vivienda  `}
            description="Recorra la guía interactiva y conozca todo lo que debe saber para comprar un inmueble."
            pathTo={routes.consultancy}
            className="sm:mt-4 xs:mt-4 sm:w-[109px] lg:w-[292px] md:w-[186px] md:h-[178px] lg:h-[198px] h-[110px]"
            titleClasses="md:text-[14px] lg:text-[16px] text-[10px] text-center font-poppinsSemiBold font-semibold text-white"
            classNamesDescription='md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-1 lg:pb-2 md:block hidden'
            onclick
          />
        </div>
      </div>
      <div className="md:mt-[0px] lg:mt-0 bg-requirements-sm md:bg-requirements-lg pb-10 md:h-[297px] ">
        <div className="lg:w-[1180px] md:w-[585px] m-auto mb-5">
          <Typography
            variant="h2"
            className="text-center sm:my-[2.875rem] xs:my-[3rem] lg:mt-[42px] xl-mt-[42px] md:pt-[46px] font-poppinsBold sm:pt-10 pt-9"
          >
            Requisitos
          </Typography>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 justify-items-center">
            <div className="lg:w-[266px] md:w-[287px] sm:w-[338px] w-[289px]">
              <SelectiveCard
                description="Tener entre 18 y 69 años."
                onclick={false}
                hasTitle={false}
                icon="bcs-document-18"
                color="text-complementario-100"
                size="text-[1.6rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 border-[0.3px] border-complementario-100"
                classNamesDescription='font-monserratLight mb-3 md:text-[15px] lg:text-[18px]'
              />
            </div>
            <div className="lg:w-[266px] md:w-[287px] sm:w-[338px] w-[289px]">
              <SelectiveCard
                description="Pagar salud y pensión."
                onclick={false}
                hasTitle={false}
                icon="bcs-hand-money"
                color="text-complementario-100"
                size="text-[2rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 border-[0.3px] border-complementario-100"
                classNamesDescription='font-monserratLight mb-3 md:text-[15px] lg:text-[18px]'
              />
            </div>

            <div className="lg:w-[266px] md:w-[287px] sm:w-[338px] w-[289px]">
              <SelectiveCard
                description="Ser empleado o pensionado."
                onclick={false}
                hasTitle={false}
                icon="bcs-user-job"
                color="text-complementario-100"
                size="text-[2rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 border-[0.3px] border-complementario-100"
                classNamesDescription='font-monserratLight mb-3 md:text-[15px] lg:text-[18px]'
              />
            </div>
            <div className="lg:w-[266px] md:w-[287px] sm:w-[338px] w-[289px]">
              <SelectiveCard
                description="Tener el celular a la mano."
                onclick={false}
                hasTitle={false}
                icon="bcs-mobile-grade"
                color="text-complementario-100"
                size="text-[2rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 border-[0.3px] border-complementario-100"
                classNamesDescription='font-monserratLight mb-3 md:text-[15px] lg:text-[18px]'
              />
            </div>
          </div>
        </div>
      </div>


      {/* steps  */}
      <div className="bg-white flex justify-between">
        <div className='lg:ml-[115px] md:ml-[81px]'>
          <Typography variant="h2" className="md:text-left text-center lg:mt-[230px] md:mt-[93px] mt-[86px]  font-poppinsBold ">
            Tan solo en <span className="block lg:inline">cuatro pasos</span>
          </Typography>
          <div className='mt-[48px]'>
            <Step titleNumber='1' description={`Ingrese a “Solicitar Crédito”`} />
            <Step titleNumber='2' description={`Valide su identidad`} />
            <Step titleNumber='3' description={`Diligencie el formulario`} />
            <Step titleNumber='4' description={`Obtenga la preaprobación`} />
          </div>
        </div>
        <div className='md:flex items-center justify-center lg:h-[836px] lg:w-[688px] md:w-[418px] md:h-[509px] hidden md:mt-[94px] lg:mt-[57px] '>
          <img src={`${basePath}/images/steps.svg`} alt="" className='left-0 ' />
        </div>
      </div>
      {/* beneficios */}
      <div className="">
        <Typography variant="h2" className=" text-center lg:mb-[105px] text-[32px] font-poppinsBold md:mt-0 mt-[66px]">
          Beneficios
        </Typography>
        <div className="bg-gris-80 md:grid md:grid-cols-2 sm:grid sm:grid-col-1 xs:mt-[12rem] md:mt-[5rem] relative md:h-[412px] gap-10">
          <div className="relative xs:top-[-150px] md:top-[-25px] flex justify-center md:justify-end ">
            <img
              src={`${basePath}/images/beneficios.png`}
              alt="beneficios"
              className="w-[302px] h-[409px] md:h-[450px]"
            />
          </div>

          <div className="listInitial lg:w-[440px] relative block mx-5 top-[-140px] md:top-0 ">
            <ul className='font-monserratLight'>
              <li className="md:text-[20px] text-[16px] font-light leading-[22px] lg:mt-[127px] md:mt-20 text-complementario-100 ">
                Preaprobación inmediata en línea
              </li>

              <li className="md:text-[20px] text-[16px] font-light leading-[22px] mt-3 text-complementario-100">
                Sin documentación física
              </li>
              <li className="md:text-[20px] text-[16px] font-light leading-[22px] mt-3 text-complementario-100">
                Para clientes y no clientes
              </li>
              <li className="md:text-[20px] text-[16px] font-normal leading-[22px] mt-3 text-complementario-100 ">
                Abonos extraordinarios a capital para reducir el plazo o el valor de la cuota
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* questions */}
      <div className=" md:mx-[92px] lg:mt-[10px] ">
        <Questions />
      </div>
    </div>
  );
}
