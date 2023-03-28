import React, { useEffect } from 'react';
import NavTitle from '../../components/commons/NavTitle';
import Otp from '../../components/custom/otp';
import Layout from '../../components/layouts/layout';
import Stepper from '../../components/ui/Stepper';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';
import { invokeEvent } from '../../utils';

export default function OTCPage() {
  useEffect(()=>{
    invokeEvent('load_otc','load_page');
  },[])
  return (
    <InactivityWarper>
      <Layout navTitle={<NavTitle noBack />}>
        <Stepper steps={5} actualStep={1} title="Validación de identidad" />
        <Otp otc />
      </Layout>
    </InactivityWarper>
  );
}


