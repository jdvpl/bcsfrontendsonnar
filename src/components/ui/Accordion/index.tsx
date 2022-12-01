import Link from 'next/link';
import React, { FC, useState } from 'react';
import ItemAccordion from './ItemAccordion';

const Questions: FC = () => {
  const [selected, setSelected] = useState<null | string>('');



  return (
    <section
      className="mb-[15vh] lg:mb-[10vh] flex flex-col items-center"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="questions"
        className="text-center min-w-[291px] mb-[60px] mt-[60px]  md:mb-[79px] md:mt-[80px] w-full text-[30px] leading-[34px]  lg:text-[32px] lg:leading-[34px]"
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
            title="¿Cuales son los gastos adicionales al momento de comprar vivienda?"
            setSelected={(item: any) => selected === '1' ? setSelected(item + item) : setSelected(item)}
          >
            <>
              Para el proceso de legalización es necesario contemplar los gastos de
              avalúo, estudio de títulos y escrituración. Si desea conocer más a cerca de
              estos conceptos, diríjase a nuestra{' '}
              <span className="text-primario-20 font-medium underline">
                <Link href="/">asesoría interactiva.</Link>
              </span>
            </>
          </ItemAccordion>
          <ItemAccordion
            id="2"
            active={selected === '2'}
            title="¿El banco me presta el 100% del valor de la vivienda?"
            setSelected={(item: any) => selected === '2' ? setSelected(item + item) : setSelected(item)}
          >
            No, debido a la ley de vivienda el banco tiene permitido prestar para crédito
            hipotecario hasta el 80% del valor total del inmueble para vivienda VIS y 70%
            para vivienda NO VIS.
          </ItemAccordion>
          <ItemAccordion
            id="3"
            active={selected === '3'}
            title="¿Debo elegir la vivienda antes o despues de pedir el crédito hipotecario?"
            setSelected={(item: any) => selected === '3' ? setSelected(item + item) : setSelected(item)}
          >
            No existe un orden obligatorio, lo recomendable es que las personas primero
            conozcan cuanto les puede prestar el banco y posteriormente con ese
            presupuesto elegir una vivienda, sin embargo si se elige la vivienda primero
            el proceso de compra sería exactamente el mismo.
          </ItemAccordion>

          <ItemAccordion
            id="4"
            active={selected === '4'}
            title="¿Cuales son los factores que analiza el banco para aprobar un crédito hipotecario?"
            setSelected={(item: any) => selected === '4' ? setSelected(item + item) : setSelected(item)}
          >
            Nosotros tenemos en cuenta los siguientes factores:
            <ul className="list-disc ml-6 mt-3">
              <li>Historial crediticio</li>
              <li>Comportamiento de pago</li>
              <li>Reporte centrales de riesgo</li>
              <li>Capacidad de pago</li>
              <li>Estabilidad laboral</li>
            </ul>
          </ItemAccordion>
        </div>
      </div>
    </section>
  );
};

export default Questions
