import React from 'react';
import Card from "../simulation/Card";
import { basePath } from '../../../../next.config';
import { useReviewApplication } from './useReviewApplication';

interface ReviewApplicationProps {
  financedValue?: string;
  fireInsurance?: string;
  lifeInsurance?: string;
  termFinance: string;
  rate: string;
  id?: string;
  insuranceCheck?: boolean;
}

function ReviewApplication({
  financedValue,
  fireInsurance,
  lifeInsurance,
  termFinance,
  rate,
  insuranceCheck = true,
}: ReviewApplicationProps) {
  const { insurance, handleInsurance, goBack } = useReviewApplication(insuranceCheck);
  return (
    <div className="flex flex-col items-center ">
      <Card
        data-testid="financedValue"
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[79px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
        title="Monto Total"
        value="$100.000.000 pesos"
        text="text-[20px] pl-[18px] font-semibold"
        urlsvg={`${basePath}/images/Money.svg`}
        classtitle="h-[14px] text-[13px]"
        id="amountotal"
        tooltiptext=""
      />
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px] "
        title="Cuota mensual aproximada"
        value="$850.000"
        text="text-[32px] pl-[16px] pt-2 flex items-baseline"
        urlsvg=""
        classtitle="h-[18px] pt-[16px] text-[16px]"
        subvalue="pesos"
        textsub="30"
        tooltiptext=""
        urlsvgendicon=""
      />
      <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[116px]    bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Tasa aproximada"
      value={rate}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Charts.svg`}
      urlsvgendicon=""
      classtitle="h-[14px] text-[13px]"
      tooltiptext=""
      description
      descriptionHtml={
        <p className="pl-[27px]">
          <p className="flex">
            <p className="font-bold text-[14px] mr-1">MV:</p><span className="text-[14px]">Tasa nominal mes
            vencido</span>
          </p>
          <p className="flex">
            <p className="font-bold text-[14px]  mr-1">EA:</p><span className="text-[14px]">Tasa efectiva anual</span>
          </p>
        </p>
      }
    />
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
        title="Plazo"
        value={termFinance?.toString()}
        text="text-[20px] pl-[18px] font-semibold"
        urlsvg={`${basePath}/images/Calendar.svg`}
        classtitle="h-[14px] text-[13px]"
        tooltiptext=""
        endicon
        urlsvgendicon={`${basePath}/images/PenEdit.svg`}
        clickEdit={goBack}
        description
        descriptionHtml={<p className='pr-[1px] ml-[26px] mr-[8px] text-[14px] color-[#00253D]'>Description</p>}
      />
      {insurance ? (
        <Card
          data-testid="lifeInsurance"
          className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
          title="Seguro de vida"
          value={lifeInsurance?.toString()}
          text="text-[20px] pl-[18px] font-semibold"
          urlsvg={`${basePath}/images/Insurage.svg`}
          classtitle="h-[14px] text-[13px]"
          tooltiptext=""
          endicon
          urlsvgendicon={`${basePath}/images/Delete.svg`}
          clickEdit={handleInsurance}
          description
          descriptionHtml={<p className='pr-[1px] ml-[26px] mr-[8px] text-[14px] color-[#00253D]'>Description</p>}
        />
      ) : null}
      {insurance ? (
        <Card
          data-testid="fireInsurance"
          className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
          title="Seguro de Incendio, Rayo y Terremoto"
          value={fireInsurance?.toString()}
          text="text-[20px] pl-[18px] font-semibold"
          urlsvg={`${basePath}/images/Money.svg`}
          classtitle="h-[14px] text-[13px]"
          tooltiptext=""
          endicon
          urlsvgendicon={`${basePath}/images/Delete.svg`}
          clickEdit={handleInsurance}
          description
          descriptionHtml={<p className='pr-[1px] ml-[26px] mr-[8px] text-[14px] color-[#00253D]'>Description</p>}
        />
      ) : null}
    </div>
  );
}

export default ReviewApplication;
