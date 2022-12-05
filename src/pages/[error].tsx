import React from 'react'
import {ErrorLayout} from "../components/ui/error/errorScreen"
import { useRouter } from "next/router";
import { basePath } from '../../next.config';

export default function Error() {
    const router = useRouter();
    console.log(router.query.error);
  return (
    <div>
    {router.query.error == "error-validacion" ? (
      <ErrorLayout altsvg='warning' title="Lo sentimos" text={<p>No es posible gestionar su solicitud</p>}  urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Cerrar" width="300" heigth='300'/>
    ):null}
    {router.query.error == "error-validacion-identidad" ? (
      <ErrorLayout altsvg='warning' title={<p>Validación de identidad <br/> no exitosa</p>}  text="Dirijase a una sucursal del banco" urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Sucursales del banco"/>
    ):null}
    {router.query.error == "error-validacion-identidad-preguntas" ? (
      <ErrorLayout altsvg='warning' title={<p>Validación de identidad <br/> no exitosa</p>} text={<p>Para intentarlo nuevamente<br/>regrese al inicio.</p>} urlsvg={`${basePath}/images/preautenticacion2.svg`} textbtn="Regresar al inicio"/>
    ):null}
    {router.query.error == "error-numero-intentos" ? (
      <ErrorLayout altsvg='warning' title={<p>Ha superado el número<br/>de intentos permitidos</p>} text={<p>Ingrese nuevamente en 24 horas</p>} urlsvg={`${basePath}/images/autenticacion3.svg`} textbtn="Cerrar" /> 
    ):null} 
    {router.query.error == "error-bloqueo" ? (
      <ErrorLayout altsvg='warning' title={<p>No podemos validar su identidad en este<br/>momento</p>} text={<p>Ingrese nuevamente en 24 horas</p>} urlsvg={`${basePath}/images/autenticacion1.svg`} textbtn="Regresar al inciio"/> 
    ):null} 
    
     
    </div>
  )
}