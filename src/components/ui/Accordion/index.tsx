import Link from 'next/link';
import React, { FC, useState } from 'react';
import { routes } from '../../../routes';
import ItemAccordion from './ItemAccordion';

const Questions: FC = () => {
  const [selected, setSelected] = useState<string>('');
  return (
    <section
      className="mb-[15vh] lg:mb-[10vh] flex flex-col m-auto lg:w-[920px] md:w-[587px] sm:w-[343px] w-[286px]"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="questions"
        className="text-center min-w-[291px] lg:mb-[48px] mt-[80px]  md:mb-[48px] md:mt-[80px] w-full text-[28px] leading-[34px]  mb-8 lg:text-[32px] lg:leading-[34px] font-poppinsSemiBold"
        role="paragraph"
        tabIndex={0}
      >
        Preguntas frecuentes
      </h2>
      <div className="w-full lg:max-w-[1200px] ">
        <div id="accordion" className="w-full mx-auto space-y-[11px]">
          <ItemAccordion
            id="1"
            active={selected === '1'}
            title="¿Cuáles son los gastos adicionales al momento de comprar vivienda?"
            setSelected={setSelected}
          >
            <div data-testid="itemATest1">
              Para el proceso de legalización es necesario contemplar los gastos de
              avalúo, estudio de títulos y escrituración. Si desea conocer más a cerca de
              estos conceptos, diríjase a nuestra {''}
              <span className="text-secundario-100 font-medium ">
                <Link href={routes.consultancy}>
                  <span className="border-b-[1px] cursor-pointer border-b-secundario-100">
                    guía interactiva.
                  </span>
                </Link>
              </span>
            </div>
          </ItemAccordion>
          <ItemAccordion
            id="2"
            active={selected === '2'}
            title="¿El banco me presta el 100% del valor de la vivienda?"
            setSelected={setSelected}
          >
            No, debido a la ley de vivienda el banco tiene permitido prestar para crédito
            hipotecario hasta el 80% del valor total del inmueble para vivienda VIS y 70%
            para vivienda NO VIS.
          </ItemAccordion>
          <ItemAccordion
            id="3"
            active={selected === '3'}
            title="¿Debo elegir la vivienda antes o después de pedir el crédito hipotecario?"
            setSelected={setSelected}
          >
            <div data-testid="itemTest3">
              No existe un orden obligatorio, lo recomendable es que las personas primero
              conozcan cuanto les puede prestar el banco y posteriormente con ese
              presupuesto elegir una vivienda, sin embargo si se elige la vivienda primero
              el proceso de compra sería exactamente el mismo.
            </div>
          </ItemAccordion>
          <ItemAccordion
            id="4"
            active={selected === '4'}
            title="¿Puedo sumar ingresos con otra persona para solicitar el crédito hipotecario?"
            setSelected={setSelected}
          >
            <div data-testid="itemATest4">
              Si, el Banco Caja Social permite sumar ingresos siempre y cuando la
              solicitud se realice en una oficina. En el caso de las solicitudes digitales
              por ahora solo es permitido un titular.
            </div>
          </ItemAccordion>

          <ItemAccordion
            id="6"
            active={selected === '6'}
            title="¿Cuáles son las condiciones si tomo un crédito hipotecario por canal digital?"
            setSelected={setSelected}
          >
            <div data-testid="itemATest6">
              Las condiciones que el Banco maneja en este momento son:
              <ul className="list-disc ml-6 mt-3">
                <li>Tipo de vivienda VIS y No VIS.</li>
                <li>Aplica para vivienda nueva y usada.</li>
                <li>Amortización solo en pesos.</li>
                <li>Financiación sin subsidio a la tasa de interés.</li>
              </ul>
            </div>
          </ItemAccordion>
          <ItemAccordion
            id="5"
            active={selected === '5'}
            title="¿Cuáles son los factores que analiza el banco para aprobar un crédito hipotecario?"
            setSelected={setSelected}
          >
            <div data-testid="itemATest5">
              Nosotros tenemos en cuenta los siguientes factores:
              <ul className="list-disc ml-6 mt-3">
                <li>Historial crediticio</li>
                <li>Comportamiento de pago</li>
                <li>Reporte centrales de riesgo</li>
                <li>Capacidad de pago</li>
                <li>Estabilidad laboral</li>
              </ul>
            </div>
          </ItemAccordion>
        </div>
      </div>
    </section>
  );
};

export default Questions;
