import React from 'react';
import { MoneyLaunderingForm } from '../../components/ui/Form/MoneyLaunderingForm/MoneyLaunderingForm';
import HeaderForm from '../../components/ui/Headers/HeaderForm';
import Stepper from '../../components/ui/Stepper';
import Typography from '../../components/ui/Typography';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';

function MoneyLaunderingPage() {
  return (
    <div className="w-[90%] md:w-[90%] m-auto mb-[100px]">
      <InactivityWarper>
        <HeaderForm />
      </InactivityWarper>
      <div className="lg:w-[825px] mx-auto md:w-[528px] mb-[64px] xs:mb-[40px] xs:w-[288px] sm:w-[343px] mt-9">
        <Stepper
          steps={5}
          actualStep={2}
          className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
          title="Datos personales"
        />
      </div>
      <Typography
        variant="h2"
        typeFont='Bold'
        className="text-center md:mb-[42px] sm:mb-[33px] xs:mb-[36px] mb-[36px]  xs:text-[20px]  text-primario-900"
      >
        Confirme la siguiente información
      </Typography>
      <div className="w-[288px] xs:w-[288px] sm:w-[343px] md:w-[448px] mx-auto">
        <MoneyLaunderingForm />
      </div>
    </div>
  );
}

export default MoneyLaunderingPage;
