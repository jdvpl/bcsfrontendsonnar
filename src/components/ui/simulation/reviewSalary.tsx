import React from 'react';
import Card from './Card';
import { basePath } from '../../../../next.config';
import BtnPdfDownloader from './BtnPdfDownloader';

interface ReviewSalaryProps {
  financedValue: string;
  fireInsurance?: string;
  lifeInsurance?: string;
  amountQuota: string;
  amountQuotatotal?: string;
  termFinance: string;
  rate: string;
  id?: string;
  dataPdf: any;
}
export const ReviewSalary: React.FC<ReviewSalaryProps> = ({
  financedValue,
  fireInsurance,
  lifeInsurance,
  amountQuota,
  amountQuotatotal,
  termFinance,
  rate,
  dataPdf,
}) => (
  <div className="flex flex-col items-center ">
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[88px] bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px] flex flex-col justify-center"
      title="Valor financiado aproximado"
      value={financedValue?.toString()}
      text="text-[32px] pl-[8px] flex items-baseline font-poppinsSemiBold"
      urlsvg=""
      classtitle="h-[18px] text-[16px] font-montserratSemiBold"
      subvalue="pesos"
      textsub="30"
      tooltiptext=""
    />

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Cuota mensual total con seguros"
      value={amountQuotatotal?.toString()}
      text="text-[20px] pl-[23px] font-semibold flex items-baseline font-poppinsSemiBold"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[14px] text-[13px] ml-2 font-monserratLight"
      subvalue="pesos"
      textsub="20"
      id="lifeInsuranceSalary"
      tooltiptext=""
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] text-[14px] font-light"
      title="Plazo"
      value={termFinance?.toString()}
      text="text-[20px] pl-[23px] font-semibold flex items-baseline font-poppinsSemiBold"
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] text-[13px] ml-2 font-monserratLight"
      tooltiptext=""
    />

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]   bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Tasa aproximada"
      value={rate}
      text="text-[20px] pl-[23px] font-semibold font-poppinsSemiBold"
      urlsvg={`${basePath}/images/Charts.svg`}
      urlsvgendicon=""
      classtitle="h-[14px] text-[13px] ml-2 font-monserratLight"
      tooltiptext=""
      description
      descriptionHtml={
        <p className="pl-[33px]">
          <p className="flex">
            <p className="font-bold text-[14px] mr-1  font-monserratLight">MV: </p><span className="text-[14px] font-monserratLight">Tasa nominal mes
              vencido</span>
          </p>
          <p className="flex">
            <p className="font-bold text-[14px]  mr-1  font-monserratLight">EA:</p><span className="text-[14px] font-monserratLight">Tasa efectiva anual</span>
          </p>
        </p>
      }
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]   bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="text-[20px] pl-[23px] font-semibold font-poppinsSemiBold"
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] text-[14px] ml-2 font-monserratLight"
      tooltip
      tooltiptext={
        <p className="flex text-white font-monserratLight">
          Seguro diseñado para proteger a sus asegurados en caso de presentarse muerte,
          incapacidad total y permanente, y demás riesgos previstos en la póliza.{' '}
        </p>
      }
    />

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]   bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="text-[20px] pl-[23px] font-semibold font-poppinsSemiBold"
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="h-[14px] text-[14px] ml-2 font-monserratLight"
      id="fireInsuranceSalary"
      tooltip
      tooltiptext={
        <p className="flex text-white cs font-montserratRegular text-[14px]">
          Póliza que protege al inmueble hipotecado al Banco contra las pérdidas y daños
          materiales originados de forma accidental, súbita e imprevista como consecuencia
          directa de los riesgos amparados.{' '}
        </p>
      }
    />

    <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[20px] mt-[20px]">
      {dataPdf?.quotes?.length > 0 ? <BtnPdfDownloader pdf={dataPdf} /> : null}
    </div>
  </div>
);

export default ReviewSalary;
