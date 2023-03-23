import SelectiveHomeCards from './../components/ui/Home/SelectiveHomeCards';
import React, { ReactNode, useEffect } from 'react';
import { deviceType } from 'react-device-detect';
import TagManager from 'react-gtm-module';
import { basePath } from '../../next.config';
import LogoBcsWhite from '../components/svg/LogoBcsWhite';
import LogoViviendaWhite from '../components/svg/LogoViviendaWhite';
import LogoViviendaBlue from '../components/svg/LogoViviendaBlue';
import Questions from '../components/ui/Accordion';
import SelectiveCard from '../components/ui/Card/SelectiveCard';
import Step from '../components/ui/Card/Step';
import Typography from '../components/ui/Typography';
import useMediaQueryResponsive from '../hooks/useMediaQuery';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { SesionStorageKeys } from '../session';
import { ConditionalWrapper } from './asesoria';

export default function Home() {
  const [device, setDevice] = useSessionStorage(SesionStorageKeys.device.key, deviceType);

  const { isMobile, isTablet, heightHeader, isSafari, isMedium, isLG, isSM, isXXl } =
    useMediaQueryResponsive();
  useEffect(
    () => () => {
      setDevice(deviceType);
    },
    [device]
  );
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'load_landing',
        category: 'load_page',
        action: 'load_landing',
        label: 'load_landing',
      },
    });
  }, []);
  const titleClasses = isSafari
    ? 'xs:flex sm:flex  md:justify-end  sm:pr-6 xs:pt-2 md:pr-[2rem] md:mt-1 xs:mt-5 lg:mt-[100px]  lg:flex lg:justify-center lg:ml-[40rem]  xs:ml-1 sm:ml-3 lg:mr-40 xl:mt-[150px] xs:mt-[34px] sm:mt-[44px]'
    : 'xs:flex sm:flex  md:justify-end  sm:pr-6 xs:pt-2 md:pr-[2rem] md:mt-1 xs:mt-5 lg:mt-[100px]  lg:flex lg:justify-center lg:ml-[40rem]  xs:ml-1 sm:ml-3 lg:mr-40 xl:mt-[150px] xs:mt-[34px] sm:mt-[44px] xxxl:mt-[290px] xxxl:pl-40 xxl:pr-0';

  const headerDescriptionClasess = isSafari
    ? 'xs:flex sm:flex  md:justify-end  sm:pr-6 xs:pt-2 md:pr-0 md:mt-5 xs:mt-[17px] lg:mt-[6px]  lg:flex lg:justify-center lg:ml-[40rem]  ml-5 xxl:pr-10'
    : 'xs:flex sm:flex  md:justify-end  sm:pr-6 xs:pt-2 md:pr-0 md:mt-5 xs:mt-[17px] lg:mt-[6px]  lg:flex lg:justify-center lg:ml-[40rem]  ml-5 xxl:pr-1 xxxl:pl-40';
  return (
    <div data-testid="landingPage" className="overflow-hidden landingPage">
      <div
        className={`lg:bg-landing-lg xl:bg-landing-xl xxl:bg-bg-landing-xxl xxxl:bg-landing-xxxl md:bg-landing-md sm:bg-landing-sm smd:bg-landing-smd bg-landing-xs bg-no-repeat  -z-30 bg-cover xs:bg-bottom sm:bg-bottom md:bg-bottom lg:bg-center xl:bg-center xs:h-[419px] sm:h-[484px] smdd:h-[460px] smd:h-[484px]  md:h-[401px] lg:h-[596px] xl:h-[668px] xxl:bg-center xxl:h-[100%] xxxl:h-[100%] bgImageLanding xxxl:bg-center`}
      >
        <div
          className="flex justify-start items-baseline xs:pl-4 sm:pt-7 xs:pt-7 sm:pl-4  md:pl-6 md:pt-6 lg:pt-5 lg:pl-10 xl:pt-5 xxl:pl-0 xxl:ml-20 iconHeader"
          itemScope
          itemProp="logo"
        >
          <LogoBcsWhite />
        </div>
        <div className={titleClasses}>
          <div className="md:flex md:flex-col ">
            <p className="text-white xs:text-[22px] sm:text-[22px] leading-[30px]  xs:ml-5 sm:ml-2 xs:mb-[3px] sm:mb-1 font-poppinsExtraLight md:text-primario-900">
              Bienvenido a
            </p>
            <figure
              itemProp="logo"
              className="xs:ml-5 sm:ml-2 mt-1 md:mt-1 m-0 p-0 w-full sm:pr-[3px] xs:pr-[0px] md:pr-0 smdd:pr-5 xmd:pr-20 pr-0 "
            >
              {isMedium ? (
                <LogoViviendaBlue />
              ) : (
                <LogoViviendaWhite
                  height={heightHeader}
                  width={isSafari ? '300' : '100%'}
                  vWidth={isSM ? '400' : '380'}
                />
              )}
            </figure>
          </div>
        </div>
        {/* title */}
        <div className={headerDescriptionClasess}>
          <div className="md:flex md:flex-col">
            <h4 className="text-white  md:w-[285px] lg:w-[394px] font-semibold lg:text-[24px] md:text-[20px] leading-6 wcontainerHeader font-montserratSemiBold sm:text-[20px] xs:text-[20px] md:text-primario-900 xxl:text-[28px] ">
              ¿Desea comprar vivienda?
            </h4>
            <p className="text-white md:text-primario-900 sm:w-[335px] w-[290px] md:w-[275px] lg:w-[415.5px] xxl:w-[380px] font-light leading-[22px] md:leading-[20px] mt-[10px] wcontainerHeader text-[16px] md:text-[18px] md:mr-[40px]  font-monserratLight sm:text-[16px] sm:leading-[18px] xs:text-[14px] xs:leading-4 lg:text-[18px] xxl:mt-8 xs:mt-5">
              Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas, ni papeleos
              extensos.
            </p>
          </div>
        </div>
        <SelectiveHomeCards isMobile={isMobile} />
      </div>
      <div className="md:mt-[245px] lg:mt-[240px] sm:mt-[90px] mt-[121px] h-[642px] sm:bg-requirements-sm lg:bg-requirements-lg xl:bg-requirements-xl bg-requirements-xs xxl:bg-requirements-xxl xxxl:bg-requirements-xxxl bg-no-repeat bg-cover md:h-[396px] md:bg-requirements-md lg:h-[476px] xl:h-[467px] xl:mt-[208px] pb-40 xxl:h-[297px] sm:h-[647px] smd:mt-[93px] smd:h-[640px] smd:bg-requirements-smd xxl:mt-[192px]">
        <div className="lg:w-[1020px] xxl:w-[1100px] md:w-[700px] m-auto xxl:mt-[144px] ">
          <Typography
            variant="h2"
            typeFont='Bold'
            className="text-center sm:my-8 xs:my-8 lg:mt-[42px] xl-mt-[42px] md:mt-[26px]  sm:pt-8 xl:mt-[59px] pt-8  lg:pt-[64px]"
          >
            Requisitos
          </Typography>
          <div className="grid lg:grid-cols-2  md:grid-cols-2 md:gap-3 justify-items-center xxl:flex xxl:flex-col lg:mt-8">
            <ConditionalWrapper
              condition={isXXl}
              wrapper={(children: ReactNode) => (
                <div className="flex xxl:w-[1130px] justify-evenly">
                  {children}
                </div>
              )}
            >
              {/* 1 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[291px] smd:w-[382px]">
                <SelectiveCard
                  description="Tener entre 18 y 70 años."
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-37"
                  color="text-complementario-100 cursor-default"
                  size="text-[1.6rem]"
                  className="sm:mb-3 mb-3 md:mb-0 border-[0.3px] xxl:border-none border-complementario-100 cursor-default "
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[100px] sm:w-full font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[150px] lg:w-full text-[12px] md:w-full xxl:w-[60%] cursor-default"
                />
              </div>
              <div className="w-[2px] hidden  bg-complementario-70 h-[46px] xxl:grid place-items-center mt-3"></div>
              {/* 2 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[291px] smd:w-[382px]">
                <SelectiveCard
                  description="Pagar salud y pensión."
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-7"
                  color="text-complementario-100 cursor-default"
                  size="text-[2rem]"
                  className="sm:mb-3 mb-3 md:mb-0 border-[0.3px] xxl:border-none  border-complementario-100 cursor-default"
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[90px] sm:w-full  font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[110px] lg:w-full xxl:w-[57%] cursor-default"
                />
              </div>
              <div className="w-[2px] hidden  bg-complementario-70 h-[46px] xxl:grid place-items-center mt-3"></div>
              {/* 3 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[292px] smd:w-[382px]">
                <SelectiveCard
                  description="Ser empleado o pensionado."
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-14"
                  color="text-complementario-100 cursor-default"
                  size="text-[2rem]"
                  className="sm:mb-3 xs:mb-3 md:mb-0 border-[0.3px] xxl:border-none  border-complementario-100"
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[105px] sm:w-full font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[125px] lg:w-full md:w-[200px] xxl:w-[60%] cursor-default"
                />
              </div>
            </ConditionalWrapper>

            <ConditionalWrapper
              condition={isXXl}
              wrapper={(children: ReactNode) => (
                <div className="flex xxl:w-[1130px] justify-evenly">
                  {children}
                </div>
              )}
            >
              {/* 4 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[291px] smd:w-[382px]">
                <SelectiveCard
                  description="Tener el celular a la mano."
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-33"
                  color="text-complementario-100"
                  size="text-[2rem]"
                  className="sm:mb-3 mb-3 md:mb-0 border-[0.3px] xxl:border-none  border-complementario-100"
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[120px] sm:w-full  font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[160px] lg:w-full md:w-full xxl:w-[65%]"
                />
              </div>
              <div className="w-[2px] hidden  bg-complementario-70 h-[46px] xxl:grid place-items-center mt-3"></div>
              {/* 5 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[292px] smd:w-[382px]">
                <SelectiveCard
                  description="Postular como único titular"
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-764"
                  color="text-complementario-100"
                  size="text-[2rem]"
                  className="sm:mb-3 mb-3 md:mb-0 border-[0.3px] xxl:border-none  border-complementario-100"
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[120px] sm:w-full  font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[170px] lg:w-full md:w-full xxl:w-[65%]"
                />
              </div>
              <div className="w-[2px] hidden  bg-complementario-70 h-[46px] xxl:grid place-items-center mt-3"></div>
              {/* 6 */}
              <div className="lg:w-[499px]  md:w-[336px] sm:w-[338px] w-[289px] xxxl:w-[292px] xxl:w-[292px] smd:w-[382px]">
                <SelectiveCard
                  description="Solicitar sin subsidios del gobierno"
                  onclick={false}
                  hasTitle={false}
                  icon="bcs-icon-1484"
                  color="text-complementario-100"
                  size="text-[2rem]"
                  className="sm:mb-3 mb-3 md:mb-0 border-[0.3px] xxl:border-none  border-complementario-100"
                  classNamesDescription="ml-[5px] lg:w-[120px] md:w-[120px] sm:w-full  font-monserratLight mb-3 md:text-[15px] lg:text-[16px] xs:w-[170px] lg:w-full md:w-full xxl:w-[90%]"
                />
              </div>
            </ConditionalWrapper>
          </div>
        </div>
      </div>
      {/* steps  */}
      <div className="bg-white flex justify-between sm:w-[309px] smd:w-[385px] smd:m-auto xl:w-[1047px] xl:m-auto md:w-full lgsm:w-[850px]">
        <div className="lg:ml-[36px] md:ml-[30px] m-auto md:m-0 xl:ml-1 smd:ml-2 ">
          <Typography
            variant="h2"
            typeFont='Bold'
            className="md:text-left text-center lg:mt-[149px] xl:mt-[148px] md:mt-[93px] mt-[80px] ml-5 md:ml-0"
          >
            Tan solo en <span className="block lg:inline">cuatro pasos</span>
          </Typography>
          <div className="mt-8 ml-5 md:ml-0 smd:ml-1">
            <Step titleNumber="1" description={`Ingrese a “Solicitar Crédito”`} />
            <Step titleNumber="2" description={`Valide su identidad`} />
            <Step titleNumber="3" description={`Diligencie el formulario`} />
            <Step titleNumber="4" description={`Obtenga la preaprobación`} />
          </div>
        </div>
        <div className="relative md:flex items-center justify-center lg:h-[585px] lg:w-[534px] xl:w-[487px] md:w-[381px] md:h-[471px] hidden md:mt-[62px] lg:mt-[64px] xl:mt-[63px] ">
          <img
            src={
              isTablet
                ? `${basePath}/images/stepsmd.svg`
                : isLG
                  ? `${basePath}/images/stepslg.svg`
                  : ``
            }
            alt=""
            className="left-0 "
          />
        </div>
      </div>
      {/* beneficios */}
      <div className="md:mt-[100px] mt-[80px] lg:mt-20">
        <Typography
          variant="h2"
          typeFont='Bold'
          className=" text-center lg:mb-[105px]  md:mt-0 mt-[66px]"
        >
          Beneficios
        </Typography>
        <div className=" md:w-[700px] lgsm:w-[850px] lg:w-[1000px] xl:w-[1100px] xxl:w-[1200px] bgBenefits md:grid md:grid-cols-2 sm:grid sm:grid-col-1 xs:mt-[12rem] md:mt-[5rem] relative md:h-[314px] gap-5 h-[520px] sm:h-[532px] lg:h-[400px]">
          <div className="relative xs:top-[-140px]  md:top-[-25px] flex justify-center md:justify-end ">
            <img
              src={`${basePath}/images/beneficios.png`}
              alt="beneficios"
              className="lg:w-[279px] lg:h-[451px] md:w-[220px] sm:w-[278px] sm:h-[448px] h-[409px] md:h-[354px]"
            />
          </div>
          <div className="listInitial  lg:w-[440px] relative block mx-5 sm:top-[-128px] xs:top-[-110px] md:top-0 xs:w-[260px] sm:w-[90%] smd:w-[80%] smd:m-auto md:mt-[-20px] md:place-items-center lg:mt-0 xxxl:ml-10">
            <ul className="font-monserratLight mb-0">
              <li className="lg:text-[20px] text-[16px] font-light leading-[22px] lg:mt-[127px] md:mt-20 text-complementario-100 ">
                Preaprobación inmediata en línea
              </li>
              <li className="lg:text-[20px] text-[16px] font-light leading-[22px] mt-3 text-complementario-100">
                Sin documentación física
              </li>
              <li className="lg:text-[20px] text-[16px] font-light leading-[22px] mt-3 text-complementario-100">
                Para clientes y no clientes
              </li>

            </ul>
          </div>
        </div>
      </div>
      {/* questions */}
      <div className=" md:mx-[92px] lg:mt-[10px] ">
        <Questions />
      </div>
    </div >
  );
}
