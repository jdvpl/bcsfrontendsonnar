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
      setDevice(deviceType);
    },
    [device]
  );

  return (
    <div data-testid="landingPage" className="overflow-hidden landingPage">
      <div className="lg:bg-[url('../public/images/backgroundLg.svg')] xl:bg-[url('../public/images/backgroundLg.svg')] xxl:bg-[url('../public/images/backgroundLg.svg')] md:bg-[url('../public/images/backgroundMd.svg')] sm:bg-[url('../public/images/backgroundSm.svg')] bg-[url('../public/images/backgroundSm.svg')] bg-no-repeat  -z-30 bg-cover xs:bg-bottom sm:bg-bottom md:bg-bottom lg:bg-center xl:bg-bottom xs:h-[540px] sm:h-[580px] md:h-[650px] lg:h-[755px] xl:h-[715px] xxl:bg-top xxl:h-[910px] bgImageLanding">
        <div
          className=" container flex justify-start items-baseline xs:pt-3 xs:pl-2 sm:pt-3 ms:pl-2 md:pl-6 md:pt-6 lg:pt-5 lg:pl-10 xl:pt-5 xxl:pl-0 xxl:ml-20 iconHeader"
          itemScope
          itemProp="logo"
        >
          {isMobile ? <LogoBcsWhite /> : null}
          {isBrowser ? <LogoBcs /> : null}
          {isTablet ? <LogoBcsWhite /> : null}
        </div>
        <div className="xs:pt-3 sm:pt-3 md:flex md:justify-end md:mr-[7rem] lg:flex lg:justify-center lg:mt-[6rem] lg:pl-[23.5rem] md:pl-[20.5rem] xxl:mt-[9rem] md:mt-[4rem]">
          <div className="md:flex md:flex-col firtTitle">
            <p className="text-white font-normal xs:text-[24px] sm:text-[24px] leading-[30px] font-heading xs:ml-7 sm:ml-7 xs:mb-1 sm:mb-1 ">
              Bienvenido a
              <figure itemProp="logo" className="mt-4 md:mt-1 m-0 p-0 w-full">
                <LogoViviendaWhite />
              </figure>
            </p>
          </div>
        </div>
        {/* title */}

        <div className="xs:flex sm:flex xs:justify-end sm:justify-end xs:pr-2 sm:pr-6 xs:pt-2 md:pr-[4.5rem] md:mt-1 xs:mt-5 lg:mt-[6px] sm:pt-5 lg:flex lg:justify-center lg:pl-[26rem] paragraphContent">
          <div className="flex flex-col">
            <h4 className="text-white xs:w-[170px] sm:w-[170px] md:w-[265px] lg:w-[394px] font-semibold text-[24px] md:text-[20px] leading-6 wcontainerHeader">
              ¿Desea comprar vivienda?
            </h4>
            <p className="text-white xs:w-[170px] sm:w-[170px] md:w-[233px] lg:w-[394px]  font-light leading-[26px] mf:leading-[20px] mt-3 wcontainerHeader text-[22px] md:text-[18px] md:mr-20 lg:mr-0">
              Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas, ni papeleos extensos.
            </p>
          </div>
        </div>
        <div className="container cntainerCards mx-auto mt-10  lg:w-[920px]  md:grid md:grid-cols-3 md:mt-[5rem] gap-4 lg:mt-[5rem] xxl:mt-[12rem] md:w-[580px]">
          <SelectiveCard
            icon="bcs-hand-simbol"
            size="text-[2.5rem]"
            color="text-primario-300"
            data-testid="consultancyTestBtn"
            label={`Aprenda sobre vivienda  `}
            description="Recorra la guía interactiva y conozca todo lo que debe saber para comprar un inmueble."
            pathTo={routes.consultancy}
            className="sm:mt-4 xs:mt-4"
            titleClasses="md:text-[14px] lg:text-[16px]"
            classNamesDescription='md:w-[166px] lg:w-[250px] md:text-[12px] lg:text-[16px]'
            onclick
          />
          <SelectiveCard
            icon="bcs-hand-mobile"
            size="text-[2.5rem]"
            color="text-primario-300"
            label="Simule su crédito"
            data-testid="simuladorTestBtn"
            description="Con nuestro simulador podrá calcular el valor del crédito y sus cuotas."
            pathTo={routes.simulador}
            className="sm:mt-4 xs:mt-4"
            titleClasses="md:text-[14px] lg:text-[16px]"
            classNamesDescription='md:w-[166px] lg:w-[250px] md:text-[12px] lg:text-[16px]'
            onclick
          />
          <SelectiveCard
            icon="bcs-document-one"
            size="text-[2.5rem]"
            color="text-primario-300"
            data-testid="SoliciteTest"
            label="Solicite su crédito"
            description="Obtenga la aprobación de su crédito hipotecario y compre la vivienda que desea."
            pathTo={routes.onboarding}
            titleClasses="md:text-[14px] lg:text-[16px]"
            classNamesDescription='md:w-[166px] lg:w-[250px] md:text-[12px] lg:text-[16px]'
            className="sm:mt-4 xs:mt-4"
            onclick
          />
        </div>
      </div>
      <div className="xs:mt-[20rem] sm:mt-[20rem] md:mt-[87px] lg:mt-[42px] bg-gris-90 pb-10 ">
        <div className="lg:w-[920px]  md:w-[580px]  m-auto">
          <Typography
            variant="h2"
            className="text-center sm:my-[3rem] xs:my-[3rem] lg:mt-[42px] xl-mt-[42px] md:pt-[80px] lg:pt-[80px] lg:mb-[64px] pt-20"
          >
            Requisitos
          </Typography>

          <div className="flex sm:flex-col md:flex-row lg:flex-row   lg:mb-[40px]  justify-between ">
            <div className="lg:w-[437px] md:w-[281px]">
              <SelectiveCard
                description="Tener entre 18 y 69 años."
                onclick={false}
                hasTitle={false}
                icon="bcs-document-18"
                color="text-primario-300"
                size="text-[1.6rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 "
              />
            </div>
            <div className="mt-[10px] md:h-[46px] bg-complementario-70 md:w-[2px] md:pb-4 " />
            <div className="lg:w-[437px] md:w-[281px]">
              <SelectiveCard
                description="Pagar salud y pensión."
                onclick={false}
                hasTitle={false}
                icon="bcs-hand-money"
                color="text-primario-300"
                size="text-[2rem]"
                className=" sm:mb-3 xs:mb-3 md:mb-0 "
              />
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row lg:flex-row lg:mb-[40px]  justify-between ">

            <div className="lg:w-[437px] md:w-[281px]">
              <SelectiveCard
                description="Ser asalariado o pensionado."
                onclick={false}
                hasTitle={false}
                icon="bcs-user-job"
                color="text-primario-300"
                size="text-[2rem]"
                className=" sm:mb-3 xs:mb-3 md:mb-0 "
              />
            </div>
            <div className="md:h-[46px] mt-[10px] bg-complementario-70 md:w-[2px] md:pb-4 " />
            <div className="lg:w-[437px] md:w-[281px]">
              <SelectiveCard
                description="Tener el celular a la mano."
                onclick={false}
                hasTitle={false}
                icon="bcs-mobile-grade"
                color="text-primario-300"
                size="text-[2rem]"
                className="sm:mb-3 xs:mb-3 md:mb-0 w-full mr-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* steps  */}
      <div className="container bg-white relative">
        <Typography variant="h2" className="text-center my-20 lg:mt-[84px] lg:mb-[64px]">
          En 4 pasos solicite su{' '}
          <span className="md:block">Crédito Hipotecario</span>
        </Typography>

        <div className="grid sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center  m-auto lg:w-[920px] md:w-[580px] ">

          <div className='bg-gris-90 rounded-md sm:w-[186px] md:w-[136px] lg:w-[222px] lg:h-[220px] '>
            <div className=" sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center  px-5 pt-5 ">
              <Icons icon="bcs-push" size="text-[2.5rem]" color="text-primario-300" />
            </div>

            <Typography
              variant="bodyS3"
              className=" text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[148px] xs:w-[148px] lg:w-[155px] md:text-[14px] lg:text-[16px]"
            >
              Ingrese a <span className="xs:block sm:block">“Solicitar Crédito”</span>
            </Typography>
            <div className="flex justify-center p-0 m-0 my-4">
              {/* number */}
              <div className="flex flex-col  ">
                <div className="h-[3px] bg-primario-300 w-[36px] rounded-md" />
                <Typography variant="h4" className=" text-primario-300 text-center mt-5 text-[22px]">
                  1
                </Typography>
              </div>
              {/* number */}
            </div>
          </div>
          {/* second card */}
          <div className='bg-gris-90 rounded-md w-full md:w-[136px] lg:w-[222px]'>
            <div className="sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons
                icon="bcs-women-check"
                size="text-[2.5rem]"
                color="text-primario-300"
              />
            </div>

            <Typography
              variant="bodyS3"
              className=" text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[92px] xs:w-[92px] md:text-[14px] lg:text-[16px]"
            >
              Valide <span className="xs:block sm:block">su identidad</span>
            </Typography>
            <div className="flex justify-center p-0 m-0 my-4">
              {/* number */}
              <div className="flex flex-col  ">
                <div className="h-[3px] bg-primario-300 w-[36px] rounded-md" />
                <Typography variant="h4" className=" text-primario-300 text-center mt-5 text-[22px]">
                  2
                </Typography>
              </div>
              {/* number */}
            </div>
          </div>
          {/* card 3 */}
          <div className='bg-gris-90 rounded-md w-full md:w-[136px] lg:w-[222px]'>
            <div className="sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons
                icon="bcs-hand-mobile"
                size="text-[2.5rem]"
                color="text-primario-300"
              />
            </div>

            <Typography
              variant="bodyS3"
              className=" text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[92px] xs:w-[92px] md:text-[14px] lg:text-[16px]"
            >
              Diligencie <span className="block">el formulario</span>
            </Typography>
            <div className="flex justify-center p-0 m-0 my-4">
              {/* number */}
              <div className="flex flex-col  ">
                <div className="h-[3px] bg-primario-300 w-[36px] rounded-md" />
                <Typography variant="h4" className=" text-primario-300 text-center mt-5 text-[22px]">
                  3
                </Typography>
              </div>
              {/* number */}
            </div>
          </div>
          <div className='bg-gris-90 rounded-md  w-full md:w-[136px] lg:w-[222px]'>
            <div className="sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons
                icon="bcs-mobile-check"
                size="text-[2.5rem]"
                color="text-primario-300"
              />
            </div>

            <Typography
              variant="bodyS3"
              className="text-complementario-100 text-center flex justify-center flex-col md:text-[14px] lg:text-[16px]"
            >
              Obtenga <span className="block">la aprobación</span>
            </Typography>

            <div className="flex justify-center p-0 m-0 my-4">
              {/* number */}
              <div className="flex flex-col  ">
                <div className="h-[3px] bg-primario-300 w-[36px] rounded-md" />
                <Typography variant="h4" className=" text-primario-300 text-center mt-5 text-[22px]">
                  4
                </Typography>
              </div>
              {/* number */}
            </div>
          </div>
        </div>
      </div>
      {/* beneficios */}
      <div className="">
        <Typography variant="h2" className="mt-[84px] text-center lg:mb-[105px]">
          Beneficios
        </Typography>
        <div className="bg-gris-80 md:grid md:grid-cols-2 sm:grid sm:grid-col-1 xs:mt-[12rem] md:mt-[5rem] relative md:h-[412px] gap-10">
          <div className="relative xs:top-[-150px] md:top-[-25px] flex justify-center md:justify-end ">
            <img
              src={`${basePath}/images/beneficios.png`}
              alt="beneficios"
              className="w-[302px] h-[420px] md:h-[450px]"
            />
          </div>

          <div className="listInitial lg:w-[378px] relative block mx-5 top-[-140px] md:top-0 ">
            <ul className=''>
              <li className="text-[20px] font-light leading-[22px] lg:mt-[111px] md:mt-20 text-complementario-100">
                Aprobación inmediata en línea
              </li>

              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">
                Sin documentación física
              </li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">
                Para clientes y no clientes
              </li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">
                Abonos extraordinarios a capital para reducir el plazo o el valor de la
                cuota
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
