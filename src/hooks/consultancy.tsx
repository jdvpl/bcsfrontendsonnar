import React from 'react';
import { basePath } from '../../next.config';
import { routes } from '../routes/index';

export const initialOptions = [
  [
    {
      label: 'Vivienda Nueva',
      value: '1',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Es una propiedad que se adquiere directamente al vendedor y es entregada por
            primera vez.
          </p>
          <p className="font-medium my-3">
            Existen dos formas de adquirir una vivienda nueva:
          </p>
          <div style={{ paddingLeft: '20px' }}>
            <ol className="list-decimal mb-3 list-inside">
              <li>
                <span className="font-semibold text-primario-900">Sobre planos: </span>
                <p className="inline-block font-medium">
                  {' '}
                  Cuando aún está en construcción.
                </p>
              </li>
              <li>
                <span className="font-semibold text-primario-900">Edificado: </span>
                <p className="inline-block font-medium">Una vez terminada la obra.</p>
              </li>
            </ol>
          </div>
          <span className="font-bold text-primario-900">Ventajas:</span>
          <ol className="list-decimal mb-3 list-inside ml-2 special-list">
            <li className="my-3 ">
              <span className="font-medium">
                Este tipo de vivienda permite pagar la cuota inicial en un amplio plazo.
              </span>
            </li>
            <li className="my-3 ">
              <span className="font-medium">
                Su valorización es rápida, normalmente estas nuevas viviendas están
                ubicadas en zonas de gran proyección urbanística.
              </span>
            </li>
          </ol>
        </div>
      ),
    },
    {
      label: 'Vivienda Usada',
      value: '2',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Es aquella que ha sido habitada previamente a su venta; es decir, una
            propiedad que ya ha sido usada.
          </p>
          <span className="font-semibold text-primario-900">Ventajas:</span>
          <ol className="list-decimal mb-3 list-inside ml-2 special-list">
            <li className="my-3">
              <span className="font-medium">
                La entrega de una vivienda usada es casi inmediata.
              </span>
            </li>
            <li className="my-3">
              <span className="font-medium">
                Normalmente están ubicadas en zonas urbanísticas ya consolidadas y esto
                garantiza un valor comercial seguro.
              </span>
            </li>
          </ol>
        </div>
      ),
    },
    {
      label: '¿Qué es vivienda VIS?',
      value: '3',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Las{' '}
            <span className="font-semibold text-primario-900">
              Viviendas de Interés Social{' '}
            </span>
            son aquellas que su precio no supera los 135 ó 150 <strong>SMMLV*</strong>,
            dicho monto varia según la ubicación de la vivienda. Gracias a su valor las
            personas con ingresos entre 2 y 4 <strong>SMMLV*</strong> pueden acceder a una
            vivienda nueva.
          </p>

          <p className="font-medium my-3">
            Actualmente quien compre una vivienda VIS y cumpla con los requisitos
            estipulados,
            <span className="font-semibold text-primario-900">
              {' '}
              puede postularse a los subsidios{' '}
            </span>
            que brinda tanto el Gobierno como las Cajas de Compensación.
          </p>
          <br />
          <p className="font-medium md:mt-[28px]">
            <span className="font-semibold">*SMMLV:</span> Salario Mínimo Mensual Legal
            Vigente.
          </p>
        </div>
      ),
    },
    {
      label: '¿Qué es vivienda No VIS?',
      value: '4',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Las <span className="font-semibold text-primario-900">Viviendas No VIS </span>
            son aquellas que su precio supera los 135 ó 150 <strong>SMMLV*</strong>, dicho
            monto varia según la ubicación de la vivienda.
          </p>
          <p className="font-medium my-3">
            Están diseñadas para familias con ingresos mayores 4 <strong>SMMLV*</strong>,
            pueden ser nuevas o usadas y normalmente son desde estrato 3 en adelante.
          </p>
          <p className="font-medium my-3">
            Actualmente quien compre una vivienda No VIS y cumpla con los requisitos
            estipulados, puede postularse a los subsidios del Gobierno Frech No VIS y
            Ecobertura.
          </p>
          <p className="font-medium">
            <span className="font-semibold">*SMMLV:</span> Salario Mínimo Mensual Legal
            Vigente.
          </p>
        </div>
      ),
    },
  ],
  [
    {
      label: 'Cuota Inicial',
      value: '1',
      content: () => (
        <div>
          <p className="font-medium my-3">
            <p className="font-medium my-3">
              Corresponde a un porcentaje del valor total de la vivienda y debe pagarlo el
              comprador con recursos propios, ya sea con ahorros, cesantías o con
              subsidios en caso que sea beneficiario de estos.
            </p>
            <p className="font-medium my-3">
              Para vivienda nueva normalmente se dan entre 1 a 2 años para pagar este
              dinero y para vivienda usada su pago debe ser inmediato.
            </p>
            <p className="font-medium my-3">
              La cuota inicial por ley varia de acuerdo con el tipo de inmueble, para
              vivienda VIS es el 20% y para viviendas No VIS es el 30%. Tenga en cuenta
              que este porcentaje puede variar según las políticas de la entidad
              financiera o la constructora.
            </p>
          </p>
        </div>
      ),
    },
    {
      label: 'Crédito hipotecario',
      value: '2',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Es un producto financiero diseñado especialmente para la compra de vivienda.
            Su porcentaje máximo de financiación por ley varía según el tipo de vivienda,
            para VIS es máximo del 80% del valor total del inmueble y para No VIS es del
            70%. La solicitud de este producto debe realizarla el comprador ante una
            entidad financiera.
          </p>
        </div>
      ),
    },
    {
      label: 'Formalizar la compra',
      value: '3',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Luego de obtener la aprobación de su crédito, presente al vendedor del
            inmueble la carta que le proporcionó el banco, de esta manera concreta su
            intención de compra.
          </p>
        </div>
      ),
    },
  ],
  [
    {
      label: 'Avalúo',
      value: '1',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Para iniciar con el proceso de legalización, el banco debe realizar un avalúo,
            el cual es elaborado por un perito autorizado, quien verifica las condiciones
            del inmueble para determinar su valor comercial y garantizar que el comprador
            pagará lo justo por la vivienda.
          </p>
        </div>
      ),
    },
    {
      label: 'Estudio de títulos',
      value: '2',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Al finalizar el avalúo es necesario realizar el estudio de títulos, el cual es
            hecho por un abogado externo que asigna el banco y este determina a través de
            un documento si la situación jurídica del inmueble es válida para respaldar el
            crédito. Dicho proceso se realiza para evitar que el comprador adquiera un
            predio con inconvenientes.
          </p>
          <p className="font-medium my-3">
            El costo aproximado de este proceso es del 0,12% del valor comercial del
            inmueble.
          </p>
        </div>
      ),
    },
    {
      label: 'Escrituración',
      value: '3',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Posteriormente, para legalizar la adquisición de su vivienda es obligatorio
            realizar un proceso notarial, donde el comprador debe firmar las escrituras
            del predio y así formalmente el inmueble quedará a su nombre.
          </p>
          <p className="font-medium my-3">
            El costo de este proceso es aproximadamente del 5% del valor comercial del
            inmueble y lo debe asumir el comprador y el vendedor.
          </p>
        </div>
      ),
    },
  ],
  [
    {
      label: 'Reciba su vivienda',
      value: '1',
      content: () => (
        <div>
          <p className="font-medium my-3">
            Finalmente reciba su vivienda y disfrute de este sueño cumplido, nosotros nos
            encargamos de realizar el desembolso al vendedor.
          </p>
        </div>
      ),
    },
  ],
];

export const stepperTitles = [
  'Características de vivienda',
  '¿Cómo pagar la vivienda?',
  'Legalización de una vivienda',
  'Reciba su vivienda',
];

export const titleSection = [
  'Conozca los tipos de vivienda y las ventajas de cada una',
  'Organice sus finanzas y planifique el pago de su vivienda',
  'Tenga en cuenta los siguientes gastos adicionales',
  '¡Felicitaciones, ha logrado su meta!',
];
