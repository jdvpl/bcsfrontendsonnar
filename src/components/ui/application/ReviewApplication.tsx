import React, { useState } from 'react';
import Card from '../../../components/ui/simulation/Card';
import { basePath } from '../../../../next.config';
import router from 'next/router';

interface ReviewApplicationProps {
  financedValue: string;
  fireInsurance?: string;
  lifeInsurance?: string;
  termFinance: string;
  rate: string;
  id?: string;
  insuranceCheck?:boolean;
}


function ReviewApplication( 
  {financedValue,
  fireInsurance,
  lifeInsurance,
  termFinance,
  rate,
  insuranceCheck
}:ReviewApplicationProps ){
    const [insurance,setInsurance]= useState<Boolean>(insuranceCheck || true)
    return(
        <div className="flex flex-col items-center ">
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Monto Total"
      value={financedValue?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[14px] text-[13px]"
      id="amountotal"
      tooltiptext=""
      endicon
      urlsvgendicon={`${basePath}/images/PenEdit.svg`}
      clickEdit={() => router.back()}
      description="Descripción"
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Tasa"
      value={rate}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Charts.svg`}
      classtitle="h-[14px] text-[13px]"
      urlsvgendicon=""
      id="fireInsuranceHouse"
      tooltiptext=""
      description="Descripción"
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
      clickEdit={() => router.back()}
      description="Descripción"
    />
    {
        insurance ?
        <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltiptext=""
      endicon
      urlsvgendicon={`${basePath}/images/Delete.svg`}
      clickEdit={() => setInsurance(false)}
      description="Descripción"
    />
    :null
    }
    {
        insurance?
        <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[98px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[14px] text-[13px]"
      tooltiptext=""
      endicon
      urlsvgendicon={`${basePath}/images/Delete.svg`}
      clickEdit={() => router.back()}
      description="Descripción"
    />
    : null
    }
  </div>

    )
  }

  

export default ReviewApplication;
