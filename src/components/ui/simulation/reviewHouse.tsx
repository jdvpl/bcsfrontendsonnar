import React from 'react';
import Card from './Card';
import { basePath } from '../../../../next.config';
import BtnPdfDownloader from './BtnPdfDownloader';
import { cardTextStyles } from '../../../pages/simulador';

interface ReviewHouseProps {
  financedValue: string;
  fireInsurance?: string;
  lifeInsurance?: string;
  monthlyCoute: string;
  monthlyCouteInsurance?: string;
  termFinance: string;
  rate: string;
  id?: string;
  dataPdf: any;
}
export const ReviewHouse: React.FC<ReviewHouseProps> = ({
  financedValue,
  fireInsurance,
  lifeInsurance,
  monthlyCoute,
  monthlyCouteInsurance,
  termFinance,
  rate,
  id,
  dataPdf,
}) => (
  <div className="flex flex-col items-center ">
    {lifeInsurance ? (
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px] bg-[#C4D1DA] mb-[16px] font-semibold rounded-[8px] flex flex-col justify-center"
        title="Cuota mensual sin seguros"
        value={monthlyCoute?.toString()}
        text="text-[32px] pl-[8px] flex items-baseline font-poppinsSemiBold"
        urlsvg=""
        classtitle="text-[16px] font-montserratSemiBold"
        subvalue="pesos"
        textsub="30"
        tooltiptext=""
        urlsvgendicon=""
        altsvg="Cuota mensual sin seguros"
      />
    ) : null}

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] py-4  bg-[#F3F4F6] pl-[16px] rounded-[8px] mb-[12px] font-light font-poppinsSemiBold"
      title="Valor financiado aproximado"
      value={financedValue?.toString()}
      text={cardTextStyles}
      urlsvgendicon=""
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="text-[14px] ml-2 font-monserratLight"
      tooltiptext=""
      altsvg="Valor financiado aproximado"
    />

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] py-4  bg-[#F3F4F6]  pl-[16px] rounded-[8px] mb-[12px] font-light font-poppinsSemiBold"
      title="Plazo"
      value={termFinance?.toString()}
      text={cardTextStyles}
      urlsvgendicon=""
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] text-[14px] ml-2 font-monserratLight"
      tooltiptext=""
      altsvg="Plazo"
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]    bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Tasa aproximada"
      value={rate}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Charts.svg`}
      urlsvgendicon=""
      classtitle="h-[14px] text-[14px] ml-2 font-monserratLight"
      tooltiptext=""
      description
      descriptionHtml={
        <p className="pl-[33px]">
          <p className="flex">
            <p className="font-bold text-[14px] mr-1 font-monserratLight ">MV: </p>
            <span className="text-[14px] font-monserratLight">
              Tasa nominal mes vencido
            </span>
          </p>
          <p className="flex">
            <p className="font-bold text-[14px]  mr-1 font-monserratLight">EA:</p>
            <span className="text-[14px] font-monserratLight">Tasa efectiva anual</span>
          </p>
        </p>
      }
      altsvg="Tasa aproximada"
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] text-[14px] ml-2 font-monserratLight"
      tooltip
      urlsvgendicon=""
      tooltiptext={
        <p className="flex text-white font-montserratRegular text-[14px]">
          Seguro diseñado para proteger a sus asegurados en caso de presentarse muerte,
          incapacidad total y permanente, y demás riesgos previstos en la póliza.{' '}
        </p>
      }
      altsvg="Seguro de vida"
    />
    <Card
      className="xs:w-[290px]  sm:w-[343px] md:w-[448px]    bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="xs:mb-[23px] sm:mb-[0px] h-[14px] text-[14px] ml-2 font-monserratLight"
      tooltip
      urlsvgendicon=""
      tooltiptext={
        <p className="flex text-white font-montserratRegular text-[14px]">
          Póliza que protege al inmueble hipotecado al Banco contra las pérdidas y daños
          materiales originados de forma accidental, súbita e imprevista como consecuencia
          directa de los riesgos amparados.{' '}
        </p>
      }
      altsvg="Seguro de Incendio, Rayo y Terremoto"
    />
    <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[12px]">
      {dataPdf?.quotes?.length > 0 ? <BtnPdfDownloader pdf={dataPdf} /> : null}
    </div>
  </div>
);

export default ReviewHouse;
