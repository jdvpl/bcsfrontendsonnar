import React from 'react'
import { ErrorLayout } from "../../components/ui/error/errorScreen"
import { basePath } from '../../../next.config';
import router from 'next/router';
import { routes } from '../../routes';


export default function Error() {
    return (
      <div>
         <ErrorLayout btnactivate altsvg='warning' title="Lo sentimos" text={<p>No es posible gestionar su solicitud</p>} urlsvg={`${basePath}/images/autenticacion1.svg`} btnaction={() => router.push(routes.startProccess)} textbtn="Cerrar" ImgClass='mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]' />
      </div>
      
    )
  }