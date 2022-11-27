import React from 'react';
import { NavTitle } from '../../components/commons/NavTitle';
import { Otp } from '../../components/custom/otp';
import { Layout } from '../../components/layouts/layout';
import Stepper from '../../components/ui/Stepper';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';

export default function validacionSolicitud() {
  return (
    <InactivityWarper>
      <Layout navTitle={<NavTitle noBack />}>
        <Stepper steps={4} actualStep={4} title="Validación de identidad" />
        <Otp />
      </Layout>
    </InactivityWarper>
  );
}
