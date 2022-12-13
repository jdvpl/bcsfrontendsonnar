import React from 'react'
import { useRouter } from "next/router";
import { ErrorLayout } from "../components/ui/error/errorScreen"
import { basePath } from '../../next.config';

export default function Error() {
  const router = useRouter();
  return (
    <div>
      {router.query.error == "error-validacion" ? (
        <ErrorLayout altsvg='warning' title="Lo sentimos" text={<p>No es posible gestionar su solicitud</p>} urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Cerrar" ImgClass='mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]' />
      ) : null}
      {router.query.error == "error-validacion-identidad" ? (
        <ErrorLayout altsvg='warning' title={<p>Validación de identidad <br /> no exitosa</p>} text="Dirijase a una sucursal del banco" urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Sucursales del banco" ImgClass='mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]'/>
      ) : null}
      {router.query.error == "error-validacion-identidad-preguntas" ? (
        <ErrorLayout altsvg='warning' title={<p>Validación de identidad <br /> no exitosa</p>} text={<p>Para intentarlo nuevamente<br />regrese al inicio.</p>} urlsvg={`${basePath}/images/preautenticacion2.svg`} textbtn="Regresar al inicio" ImgClass='mt-20 lg:h-[300px] md:w-[343px] md:h-[300px] sm:w-[228px] sm:h-[200px] xs:h-[200px] xs:w-[228px] m-auto pt-[15px]'/>
      ) : null}
      {router.query.error == "error-numero-intentos" ? (
        <ErrorLayout altsvg='warning' title={<p>Ha superado el número<br />de intentos permitidos</p>} text={<p>Ingrese nuevamente en 24 horas</p>} urlsvg={`${basePath}/images/autenticacion3.svg`} textbtn="Cerrar" ImgClass='mt-20 lg:h-[300px] md:w-[400px] md:h-[300px] sm:w-[267px] sm:h-[200px] xs:h-[200px] xs:w-[267px] m-auto pt-[15px]'/>
      ) : null}
      {router.query.error == "error-bloqueo" ? (
        <ErrorLayout altsvg='warning' title={<p>No podemos validar su identidad en este<br />momento</p>} text={<p>Ingrese nuevamente en 24 horas</p>} urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Regresar al inciio" ImgClass='mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]' />
      ) : null}
    </div>
  )
}
