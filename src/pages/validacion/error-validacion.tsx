import React from 'react';
import { ErrorLayout } from '../../components/ui/error/errorScreen';
import { basePath } from '../../../next.config';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import useDeleteKeys from '../../hooks/useDeleteKeys';

export default function ValidationError() {
  useDeleteKeys();
  const router = useRouter();
  return (
    <div>
      <ErrorLayout
        titlePage="Error de validación de información"
        btnactivate
        altsvg="Imagen no es posible gestionar tu solicitud"
        title="Lo sentimos"
        text={<p>No es posible gestionar su solicitud</p>}
        urlsvg={`${basePath}/images/autenticacion1.svg`}
        btnaction={() => router.push(routes.startProccess)}
        textbtn="Cerrar"
        ImgClass="mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]"
      />
    </div>
  );
}
