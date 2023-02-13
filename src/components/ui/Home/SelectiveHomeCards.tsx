import React, { FC } from "react";
import { routes } from "../../../routes";
import SelectiveCard from "../Card/SelectiveCard";
export interface iSelectiveHomeCards {
  isMobile: boolean;
}

const SelectiveHomeCards: FC<iSelectiveHomeCards> = ({ isMobile }) => {

  return <div className="container cntainerCards mx-auto lg:w-[1024px] xl:w-[1020px]  md:grid md:grid-cols-3 grid grid-cols-3 md:mt-[3rem] gap-2 lg:mt-[11rem] xxl:mt-[12rem] md:w-[700px] sm:mt-[95px] mt-[45px] xmd:mt-10 xs:w-[295px] sm:w-[350px] smd:w-[398px] xl:mt-[150px]">

    <SelectiveCard icon="bcs-document-one" size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`} color="text-white" data-testid="SoliciteTest" label="Solicite su crédito" description="Obtenga la preaprobación de su crédito hipotecario y compre la vivienda que desea." pathTo={routes.onboarding} titleClasses="md:text-[13px] lg:text-[14px] text-[12px] text-center font-montserratSemiBold font-semibold text-white w-full leading-[14px] md:pb-0 sm:pb-6 pb-6" classNamesDescription='md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-1 lg:pb-2 md:block hidden' className="sm:mt-4 xs:mt-4 smd:w-[122px] smd:h-[118px] sm:w-[109px] lg:w-[332px] md:w-[223px] md:h-[178px] lg:h-[198px] h-[110px] w-[95px] " onclick active />

    <SelectiveCard icon="bcs-hand-mobile" size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`} color="text-primario-300" label="Simule su crédito" data-testid="simuladorTestBtn" description="Calcule el valor del crédito y sus cuotas." pathTo={routes.simulador} className="sm:mt-4 xs:mt-4 sm:w-[109px] smd:w-[122px] smd:h-[118px] lg:w-[332px] md:w-[223px] md:h-[178px] lg:h-[198px] h-[110px] w-[95px]" titleClasses="md:text-[13px] lg:text-[14px] text-[12px] text-center md:w-full font-montserratSemiBold font-semibold text-white w-full leading-[14px] md:pb-0 sm:pb-6 pb-6" classNamesDescription='md:w-[143px] lg:w-[210px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-9 lg:pb-11 md:block hidden' onclick />

    <SelectiveCard icon="bcs-hand-simbol" size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`} color="text-primario-300" data-testid="consultancyTestBtn" label={`Aprenda sobre vivienda  `} description="Recorra la guía interactiva y conozca todo lo que debe saber para comprar un inmueble." pathTo={routes.consultancy} className="sm:mt-4 xs:mt-4 sm:w-[109px] smd:w-[122px] smd:h-[118px] lg:w-[332px] md:w-[223px] md:h-[178px] lg:h-[198px] h-[110px] w-[95px] text-[2px]" titleClasses="md:text-[13px] lg:text-[14px] text-[12px] text-center font-montserratSemiBold font-semibold text-white w-full leading-[14px] smd:pb-9 md:pb-0" classNamesDescription='md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px]  font-monserratLight lg:pb-5 md:pb-1 lg:pb-2 md:block hidden ' onclick />
  </div>;
}

export default SelectiveHomeCards;