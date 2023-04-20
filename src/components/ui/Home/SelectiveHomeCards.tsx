import React, { FC } from 'react';
import { routes } from '../../../routes';
import SelectiveCard from '../Card/SelectiveCard';
export interface iSelectiveHomeCards {
  isMobile: boolean;
}

const SelectiveHomeCards: FC<iSelectiveHomeCards> = ({ isMobile }) => {
  return (
    <section className="container cntainerCards mx-auto lg:w-[1024px] xl:w-[1020px] xxl:w-[930px]  md:grid md:grid-cols-3 grid grid-cols-3 md:mt-[3rem] gap-2 lg:mt-[10rem] xxl:mt-[12rem]  md:w-[700px] sm:mt-[65px] mt-[45px] xmd:mt-10 xs:w-[295px] sm:w-[340px] smd:w-[382px] xl:mt-[150px] xs:mt-[30px]">
      <SelectiveCard
        icon="bcs-icon-6"
        size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
        color="text-white"
        data-testid="SoliciteTest"
        label={
          <span className="inline">
            Solicite <span className="xs:block md:inline">su crédito</span>
          </span>
        }
        description="Obtenga la preaprobación de su crédito hipotecario y compre la vivienda que desea."
        pathTo={routes.onboarding}
        titleClasses="xs:mt-[10px] xs:text-[10px] md:text-[13px] lg:text-[14px] text-[12px] text-center font-montserratMedium font-semibold text-white w-full leading-[14px] md:pb-0 sm:pb-6 pb-6 sm:text-[12px] leading-[12px]"
        classNamesDescription="md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px]   lg:pb-5 md:pb-1 lg:pb-2 md:block hidden lg:text-[16px]"
        className="xxl:w-[299px] sm:mt-4 xs:mt-4 smd:w-[122px] smd:h-[118px] sm:w-[109px] lg:w-[332px] md:w-[223px] md:h-[198px] lg:h-[218px] h-[115px] w-[95px] "
        onclick
        active
        title="Solicite su crédito"
      />

      <SelectiveCard
        icon="bcs-icon-33"
        size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
        color="text-primario-300"
        label={
          <span className="inline">
            Simule <span className="xs:block md:inline">su crédito</span>
          </span>
        }
        data-testid="simuladorTestBtn"
        description="Calcule el valor del crédito y sus cuotas."
        pathTo={routes.simulador}
        className="xxl:w-[299px] sm:mt-4 xs:mt-4 sm:w-[109px] smd:w-[122px] smd:h-[118px] lg:w-[332px]  md:w-[223px] md:h-[198px] lg:h-[218px] h-[115px] w-[95px]"
        titleClasses="xs:mt-[10px] md:text-[13px] lg:text-[14px] text-[12px] text-center md:w-full leading-[12px] text-white w-full leading-[14px] md:pb-0 sm:pb-6 pb-6 xs:w-full xs:text-[10px] sm:text-[12px]"
        classNamesDescription="md:w-[143px] lg:w-[210px] md:text-[12px] lg:text-[16px]  lg:pb-5 md:pb-9 lg:pb-11 md:block hidden lg:text-[16px]"
        onclick
        title="Simule su crédito"
      />

      <SelectiveCard
        icon="bcs-icon-31"
        size={`${isMobile ? 'text-[1.2rem]' : 'text-[2.5rem]'}`}
        color="text-primario-300"
        data-testid="consultancyTestBtn"
        label={
          <span className="inline">
            Aprenda <span className="sm:block md:inline">sobre vivienda</span>
          </span>
        }
        description="Recorra la guía interactiva y conozca todo lo que debe saber para comprar un inmueble."
        pathTo={routes.consultancy}
        className="xxl:w-[299px] sm:mt-4 xs:mt-4 sm:w-[109px] smd:w-[122px] smd:h-[118px] lg:w-[332px] md:w-[223px] md:h-[198px] lg:h-[218px] h-[115px] w-[95px] text-[2px]"
        titleClasses="xs:mt-[10px] sm:pb-2 xs:text-[10px] md:text-[13px] lg:text-[14px] text-[12px] text-center leading-[12px] text-white w-full leading-[14px] smd:pb-9 md:pb-0 xs:w-full sm:text-[12px]"
        classNamesDescription=" md:w-[166px] lg:w-[224px] md:text-[12px] lg:text-[16px] lg:pb-5 md:pb-1 lg:pb-2 md:block hidden lg:text-[16px]"
        onclick
        title="Aprenda sobre vivienda"
      />
    </section>
  );
};

export default SelectiveHomeCards;
