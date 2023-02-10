import React from 'react';
import { basePath } from '../../../next.config';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import ErrorLayout from '../../components/ui/error/errorScreen';

export default function SiteDown() {
  const router = useRouter();
  return (
    <ErrorLayout
      btnactivate={true}
      altsvg="warning"
      title={<p className='mt-[88px]'>¡Ups! Algo salió mal</p>}
      btnaction={() => router.push(routes.startProccess)}
      text={<p className='lg:mb-[124px] md:mb-[32px] sm:mb-[106px]  xs:mb-[106px] mb-[106px]'>Por favor inténtelo nuevamente</p>}
      urlsvg={`${basePath}/images/SiteDown.svg`}
      textbtn="Volver a intentar"
      ImgClass="mb-[40px] mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]"
    />
  );
}
