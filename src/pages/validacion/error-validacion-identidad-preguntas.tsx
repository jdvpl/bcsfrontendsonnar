import React from 'react';
import { ErrorLayout } from '../../components/ui/error/errorScreen';
import { basePath } from '../../../next.config';
import { routes } from '../../routes';
import { useRouter } from 'next/router';
import useDeleteKeys from '../../hooks/useDeleteKeys';

export default function QuestionsError() {
  useDeleteKeys();
  const router = useRouter();
  return (
    <div>
      <ErrorLayout
        titlePage="Validación de identidad no exitosa"
        btnactivate
        altsvg="Imagen de error que indica que la validación de identidad no fue exitosa"
        title={<p>Validación de identidad no exitosa</p>}
        btnaction={() => router.push(routes.startProccess)}
        text={<p>Para intentarlo nuevamente regrese al inicio.</p>}
        urlsvg={`${basePath}/images/preautenticacion2.svg`}
        textbtn="Regresar al inicio"
        ImgClass="mt-20 lg:h-[300px] md:w-[343px] md:h-[300px] sm:w-[228px] sm:h-[200px] xs:h-[200px] xs:w-[228px] m-auto pt-[15px]"
      />
    </div>
  );
}
