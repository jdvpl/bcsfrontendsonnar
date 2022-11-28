import { basePath } from '../../next.config';
import { routes } from '../routes';

export const initialOptions = [
  [
    {
      label: 'Vivienda Nueva',
      value: '1',
      content: () => (
        <div>
          <p className="font-light my-3">
            Es una propiedad que se adquiere directamente al vendedor y es entregada por
            primera vez.
          </p>
          <p className="font-light my-3">
            Existen dos formas de adquirir una vivienda nueva:
          </p>
          <div style={{paddingLeft:"20px"}}>
            <ol className="list-decimal mb-3 list-inside">
              <li>
                <span className="font-medium text-primario-900">Sobre planos:</span>
                <p className="inline-block font-light">{" "}Cuando aún está en construcción.</p>
              </li>
              <li>
                <span className="font-medium text-primario-900">Edificado: </span>
                <p className="inline-block font-light">Una vez terminada la obra.</p>
              </li>
            </ol>
          </div>
          <span className="font-bold text-primario-900">Ventajas:</span>
          <ol className="list-decimal mb-3 list-inside ml-2 special-list">
            <li className="my-3 ">
              <span className="font-light">
                Este tipo de vivienda permite pagar la cuota inicial en un amplio plazo
              </span>
            </li>
            <li className="my-3 ">
              <span className="font-light">
                Su valorización es rápida, normalmente estas nuevas viviendas están
                ubicadas en zonas de gran proyección urbanística
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
          <p className="font-light my-3">
            Es aquella que ha sido habitada previamente a su venta; es decir, una
            propiedad que ya ha sido usada.
          </p>
          <span className="font-semibold text-primario-900">Ventajas:</span>
          <ol className="list-decimal mb-3 list-inside ml-2 special-list">
            <li className="my-3">
              <span className="font-light">
                La entrega de una vivienda usada es casi inmediata
              </span>
            </li>
            <li className="my-3">
              <span className="font-light">
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
          <p className="font-light my-3">
            Las{' '}
            <span className="font-semibold text-primario-900">
              Viviendas de Interés Social
            </span>
            son aquellas que su precio no supera los 135 ó 150 SMMLV, dicho monto varía
            según la ubicación de la vivienda. Gracias a su valor las personas con
            ingresos entre 2 y 4 SMMLV pueden acceder a una vivienda nueva.
          </p>

          <p className="font-light my-3">
            Actualmente quien compre una vivienda VIS y cumpla con los requisitos
            estipulados,
            <span className="font-semibold text-primario-900">
              {' '}
              puede postularse a los subsidios
            </span>
            que brinda tanto el Gobierno como las Cajas de Compensación.
          </p>
        </div>
      ),
    },
    {
      label: '¿Qué es vivienda No VIS?',
      value: '4',
      content: () => (
        <div>
          <p className="font-light my-3">
            Las <span className="font-semibold text-primario-900">Viviendas No VIS </span>
            son aquellas que su precio supera los 135 ó 150 SMMLV, dicho monto varía según
            la ubicación de la vivienda.
          </p>
          <p className="font-light my-3">
            Están diseñadas para familias con ingresos mayores 4 SMMLV, pueden ser nuevas
            o usadas y normalmente son desde estrato 3 en adelante.
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
          <p className="font-light my-3">
            Corresponde al 30% del valor total de la vivienda y debe pagarlo el comprador
            con recursos propios, ya sea con ahorros, cesantías o con subsidios en caso
            que sea beneficiario de estos.
          </p>
          <p className="font-light my-3">
            Para vivienda nueva normalmente se dan entre 1 a 2 años para pagar este dinero
            y para vivienda usada su pago debe ser inmediato.
          </p>
        </div>
      ),
    },
    {
      label: 'Crédito hipotecario',
      value: '2',
      content: () => (
        <div>
          <p className="font-light my-3">
            Corresponde al 70% del valor total de la vivienda y puede ser solventado a
            través de un crédito hipotecario.
          </p>
          <p className="font-light my-3">
            <a
              className="font-semibold text-primario-900 underline"
              href={basePath + routes?.startProccess}
            >
              Solicite su crédito digital aquí
            </a>{' '}
            y reciba su aprobación en línea.
          </p>
          <p className="font-light my-3">
            Si prefiere el canal tradicional, comuníquese con nuestra línea amiga xxxxx o
            visité nuestras oficinas.
          </p>
        </div>
      ),
    },
    {
      label: 'Compra del inmueble',
      value: '3',
      content: () => (
        <div>
          <p className="font-light my-3">
            Luego de obtener la aprobación de su crédito, presente la carta que le
            proporcionó el Banco al vendedor, para realizar el proceso de compra o
            separación del inmueble.
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
          <p className="font-light my-3">
            Para iniciar con el proceso de legalización, el Banco debe realizar un avalúo,
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
          <p className="font-light my-3">
            Al finalizar el avalúo es necesario realizar el estudio de titulos, el cual es
            hecho por un abogado externo que asigna el Banco y este determina a través de
            un documento si la situación jurídica del inmueble es válida para respaldar el
            crédito. Dicho proceso se realiza para evitar que el comprador adquiera un
            predio con inconvenientes.
          </p>
          <p className="font-light my-3">
            El costo apróximado de este proceso es del 0,12% del valor comercial del
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
          <p className="font-light my-3">
            Posteriormente, para legalizar la adquisición de su vivienda es obligatorio
            realizar un proceso notarial, donde el comprador debe firmar las escrituras
            del predio y así formalmente el inmueble quedará a su nombre.
          </p>
          <p className="font-light my-3">
            El costo de este proceso es del 0,54% del valor comercial del inmueble.
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
          <p className="font-light my-3">
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
