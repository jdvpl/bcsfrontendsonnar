import React from 'react';
import { NavTitle } from '../../components/commons/NavTitle';
import { Otp } from '../../components/custom/otp';
import { Layout } from '../../components/layouts/layout';
import LogoBcs from '../../components/svg/LogoBcs';
import Stepper from '../../components/ui/Stepper';

export default function validacionSolicitud() {
  return (
    <div>
      <Layout navTitle={<NavTitle noBack />}>
        {/* <Stepper step="1" title="Validación de identidad" percentaje="10%" incomplete='2'  /> */}
        <Stepper step="1" incomplete="2" title="Validación de identidad" percentaje="25%" />
        {/* <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5">
        <LogoBcs />
      </div> */}
        <Otp />
      </Layout>
    </div>
  );
}
