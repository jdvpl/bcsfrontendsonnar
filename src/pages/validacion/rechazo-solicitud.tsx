import React from 'react';
import { ErrorLayout } from '../../components/ui/error/errorScreen';
import { basePath } from '../../../next.config';
import { useRouter } from 'next/router';
import useDeleteKeys from '../../hooks/useDeleteKeys';

export default function RejectionError() {
  useDeleteKeys();
  const router = useRouter();
  return (
    <div>
      <ErrorLayout
        titlePage="Rechazo de solicitud"
        btnactivate
        altsvg="Imagen de error que indica que la solicitud de crédito no fue posible"
        title={<p>No es posible continuar su solicitud de crédito</p>}
        text={
          <p>Diríjase a una sucursal del Banco y obtenga una asesoría personalizada.</p>
        }
        urlsvg={`${basePath}/images/rechazo.svg`}
        btnaction={() =>
          router.push('https://www.bancocajasocial.com/portalserver/Ubiquenos')
        }
        textbtn="Sucursales del banco"
        ImgClass="mt-20 lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-[194px] sm:h-[200px] xs:h-[200px] xs:w-[194px] m-auto pt-[15px]"
      />
    </div>
  );
}
