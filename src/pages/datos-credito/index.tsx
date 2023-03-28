import React, { useEffect } from 'react';
import { CreditDataForm } from '../../components/ui/Form/CreditData/CreditDataForm';
import HeaderForm from '../../components/ui/Headers/HeaderForm';
// eslint-disable-next-line import/no-named-as-default
import Stepper from '../../components/ui/Stepper';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';
import { invokeEvent } from '../../utils';

function CreditData() {
  useEffect(() => {
    invokeEvent('load_credit_data', 'load_page');
  }, []);
  return (
    <InactivityWarper>
      <div className=" mb-[100px]">
        <HeaderForm />
        <div className="lg:w-[825px] mx-auto md:w-[528px]  xs:w-[288px] sm:w-[343px] mt-9">
          <Stepper
            steps={5}
            actualStep={4}
            percentage={100}
            className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[64px] xs:mb-[40px] md:mb-[40px]"
            title="Personalización del crédito"
          />
        </div>
        <h2 className="text-center font-poppinsSemiBold md:leading-[30px] xs:leading-[22px] mb-[52px] md:text-[28px] xs:text-[20px] font-semibold text-primario-900">
          Defina las condiciones de su crédito
        </h2>
        <div className="w-[288px] xs:w-[288px] sm:w-[343px] md:w-[550px] lg:w-[686px] mx-auto">
          <CreditDataForm />
        </div>
      </div>
    </InactivityWarper>
  );
}

export default CreditData;
