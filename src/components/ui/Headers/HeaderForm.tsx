import { useRouter } from 'next/router';
import React from 'react';
import useMediaQueryResponsive from '../../../hooks/useMediaQuery';
import LogoBcs from '../../svg/LogoBcs';
import LogoForm from '../../svg/LogoForm';
import Icons from '../icons';

function HeaderForm() {
  const router = useRouter();
  const { heightHeader } = useMediaQueryResponsive();

  return (
    <div className="container flex lg:mt-[0] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between  ">
      <div className="mt-4 hidden md:hidden lg:block">
        <LogoBcs />
      </div>
      <div
        className="xs:block sm:block md:block lg:hidden mt-6 cursor-pointer xs:ml-4 md:ml-0"
        onClick={() => router.back()}
        data-testid="getbackRouteTest"
      >
        <Icons icon="bcs-icon-44" size="text-[1.2rem]" title="Información" />
      </div>
      <div className="mt-6 w-[180px] md:w-[180px] lg:w-[280px] xs:mr-4">
        <LogoForm height={heightHeader} />
      </div>
    </div>
  );
}

export default HeaderForm;
