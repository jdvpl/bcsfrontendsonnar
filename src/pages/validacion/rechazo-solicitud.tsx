import React from 'react'
import { ErrorLayout } from "../../components/ui/error/errorScreen"
import { basePath } from '../../../next.config';
import { routes } from '../../routes';
import router from 'next/router';


export default function Error() {
    return (
      <div>
         <ErrorLayout btnactivate altsvg='warning' title={<p>No es posible continuar<br />su solicitud de crédito</p>} text={<p>Diríjase a una sucursal del Banco<br/>
y obtenga una asesoría personalizada.</p>} urlsvg={`${basePath}/images/rechazo.svg`} btnaction={() => router.push('https://www.bancocajasocial.com/portalserver/Ubiquenos')} textbtn="Sucursales del banco" ImgClass='mt-20 lg:h-[300px] md:w-[300px] md:h-[300px] sm:w-[194px] sm:h-[200px] xs:h-[200px] xs:w-[194px] m-auto pt-[15px]'/>
      </div>
    )
  }