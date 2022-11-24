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
        <Stepper
          step="1"
          incomplete="2"
          title="Validación de identidad"
          percentage="25%"
        />
        <Otp />
      </Layout>
    </InactivityWarper>
  );
}
