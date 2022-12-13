import React from 'react';
import Card from './Card';
import { basePath } from '../../../../next.config';
import BtnPdfDownloader from './BtnPdfDownloader';

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
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px] "
        title="Cuota mensual total con seguros"
        value={monthlyCouteInsurance?.toString()}
        text="text-[32px] pl-[23px] pt-2 flex items-baseline"
        urlsvg=""
        classtitle="h-[18px] pt-[16px] text-[16px]"
        subvalue="pesos"
        textsub="30"
        tooltiptext=""
      />
    ) : null}

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#F3F4F6]  mb-[16px] font-semibold rounded-[8px] "
      title="Cuota mensual sin seguros"
      value={monthlyCoute?.toString()}
      text="text-[32px] pl-[23px] pt-2 flex items-baseline"
      urlsvg=""
      classtitle="h-[18px] pt-[16px] text-[16px]"
      subvalue="pesos"
      textsub="30"
      tooltiptext=""
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]    bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltip
      id="lifeInsuranceHouse"
      tooltiptext={
        <p className="flex text-white">
          Seguro diseñado para proteger a sus asegurados en caso de presentarse muerte,
          incapacidad total y permanente, y demás riesgos previstos en la póliza.{' '}
        </p>
      }
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltip
      id="fireInsuranceHouse"
      tooltiptext={
        <p className="flex text-white">
          Póliza que protege al inmueble hipotecado al Banco contra las pérdidas y daños
          materiales originados de forma accidental, súbita e imprevista como consecuencia
          directa de los riesgos amparados.{' '}
        </p>
      }
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Plazo"
      value={termFinance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltiptext=""
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]    bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Tasa"
      value={rate}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Charts.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltip
      tooltiptext={
        <p className="text-white">
          La tasa de interés es el precio que se debe pagar por utilizar una cantidad de
          dinero durante un tiempo determinado.
          <br />
          <p className="flex text-white">
            <p className="font-bold text-white mr-1">Tasa %MV: </p> Tasa nóminal mes
            vencido
          </p>
          <p className="flex text-white">
            <p className="font-bold text-white mr-1">Tasa EA:</p>Tasa efectiva anual
          </p>
        </p>
      }
    />

    <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[12px]">
      {dataPdf?.quotes?.length > 0 ? <BtnPdfDownloader pdf={dataPdf} /> : null}
    </div>
  </div>
);

export default ReviewHouse;
