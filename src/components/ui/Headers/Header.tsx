import { useRouter } from 'next/router';
import React from 'react'
import LogoBcs from '../../svg/LogoBcs'
import LogoForm from '../../svg/LogoForm'
import Icons from '../icons';

const Header = () => {
  const router = useRouter();
  return (
    <div className="container flex lg:mt-[0] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between  ">
      <div className="mt-4 hidden md:block lg:block">
        <LogoBcs />
      </div>
      <div className="xs:block sm:block md:hidden lg:hidden mt-6 cursor-pointer xs:ml-4" onClick={() => router.back()} data-testid="getbackRouteTest">
        <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
      </div>
      <div className="mt-6 w-[180px] md:w-[180px] lg:w-[280px] xs:mr-4">
        <LogoForm />
      </div>
    </div>
  )
}

export default Header