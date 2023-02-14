import React from 'react';
import { basePath } from '../../../next.config';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import ErrorLayout from '../../components/ui/error/errorScreen';
import useDeleteKeys from '../../hooks/useDeleteKeys';

export default function SiteDown() {
  const router = useRouter();
  useDeleteKeys();
  return (
    <ErrorLayout
      btnactivate={true}
      altsvg="warning"
      title={<p className='mt-[88px]'>¡Ups! Algo salió mal</p>}
      btnaction={() => router.push(routes.home)}
      text={<p className='mb-[68px]'>Por favor inténtelo nuevamente</p>}
      urlsvg={`${basePath}/images/SiteDown.svg`}
      textbtn="Volver a intentar"
      ImgClass="mb-[40px] mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]"
    />
  );
}
