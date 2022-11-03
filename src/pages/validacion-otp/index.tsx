import React from 'react';
import { NavTitle } from '../../components/commons/NavTitle';
import { Otp } from '../../components/custom/otp';
import { Layout } from '../../components/layouts/layout';
import Stepper from '../../components/ui/Stepper';

export default function validacionSolicitud() {
  return (
    <div>
      <Layout navTitle={<NavTitle noBack />}>
        <Stepper
          step="1"
          incomplete="2"
          title="Validación de identidad"
          percentaje="25%"
        />
        <Otp />
      </Layout>
    </div>
  );
}
