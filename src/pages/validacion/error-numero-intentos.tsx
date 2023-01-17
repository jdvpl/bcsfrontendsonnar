import React from 'react'
import { ErrorLayout } from "../../components/ui/error/errorScreen"
import { basePath } from '../../../next.config';
import { routes } from '../../routes';
import router from 'next/router';


export default function Error() {
    return (
      <div>
         <ErrorLayout btnactivate altsvg='warning' title={<p>Ha superado el número<br />de intentos permitidos</p>} btnaction={() => router.push(routes.startProccess)} text={<p>Ingrese nuevamente en 24 horas</p>} urlsvg={`${basePath}/images/autenticacion3.svg`} textbtn="Cerrar" ImgClass='mt-20 lg:h-[300px] md:w-[400px] md:h-[300px] sm:w-[267px] sm:h-[200px] xs:h-[200px] xs:w-[267px] m-auto pt-[15px]'/>
      </div>
    )
  }