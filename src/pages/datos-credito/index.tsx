import React from 'react';
import { basePath } from '../../../next.config';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import { CreditDataForm } from '../../components/ui/Form/CreditData/CreditDataForm';
// eslint-disable-next-line import/no-named-as-default
import Icons from '../../components/ui/icons';
import Stepper from '../../components/ui/Stepper';
import Typography from '../../components/ui/Typography';

function CreditData() {
  return (
    <div className="w-[90%] md:w-[90%] m-auto mb-[100px]">
      <div className="flex justify-between lg:w-[1080px] mx-auto mb-[38px] xs:mt-[36px] md:mt-[64px] lg:mb-[82px] lg:mt-[59px] lg:h-[29px] h-[18px]">
        <div className="hidden lg:block">
          <LogoBcs />
        </div>
        <div className="lg:hidden cursor-pointer">
          <a href={basePath}>
            <Icons icon="bcs-arrow-one-left" />
          </a>
        </div>
        <div className="lg:w-[280px] w-[180px]">
          <LogoForm />
        </div>
      </div>

      <div className="lg:w-[825px] mx-auto md:w-[528px]  xs:w-[288px] sm:w-[343px]">
        <Stepper
          steps={4}
          actualStep={3}
          percentage={100}
          className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[64px] xs:mb-[40px] md:mb-[40px]"
          title="Datos del crédito"
        />
      </div>

      <Typography
        variant="h2"
        className="text-center  md:leading-[30px] xs:leading-[22px]  mb-[52px] md:text-[28px] xs:text-[20px] font-bold text-primario-900"
      >
        Defina las condiciones <br /> del crédito a solicitar
      </Typography>
      <Typography variant="bodyS3" className="text-center text-primario-900 mb-[36px]">
        ¿Ya elegió la vivienda a comprar?
      </Typography>

      <div className="w-[288px] xs:w-[288px] sm:w-[343px] md:w-[550px] lg:w-[686px] mx-auto">
        <CreditDataForm />
      </div>
    </div>
  );
}

export default CreditData;
