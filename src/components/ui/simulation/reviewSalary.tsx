import React from 'react';
import Card, { typeFontsProps } from './Card';
import { basePath } from '../../../../next.config';
import BtnPdfDownloader from './BtnPdfDownloader';
import Typography from '../Typography';

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

const typeFontsPropsNormal: typeFontsProps = {
  variantTypographyTitle: "caption1",
  typeFontTypograhyTitle: 'Light',
  typeTagTypograhyTitle: 'span',
  variantDescriptionTypography: 'h4',
  typeDescriptionTagTypograhy: 'h4',
  typeFontDescriptionTypograhy: 'Bold',
}
const typeFontsPropsBold: typeFontsProps = {
  variantTypographyTitle: "h4",
  typeFontTypograhyTitle: 'Bold',
  typeTagTypograhyTitle: 'h4',
  typeDescriptionTagTypograhy:'h1',
  typeFontDescriptionTypograhy:'Bold',
  variantDescriptionTypography:'h1'
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
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[88px] bg-[#C4D1DA]  mb-[16px] rounded-[8px] flex flex-col justify-center"
      title="Valor financiado aproximado"
      value={financedValue?.toString() + ' Pesos'}
      text="pl-[8px] flex items-baseline"
      urlsvg=""
      classtitle="h-[18px]"
      tooltiptext=""
      typeFontProps={typeFontsPropsBold}
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Cuota mensual total con seguros"
      value={amountQuotatotal?.toString() + ' Pesos'}
      text="pl-[23px] flex items-baseline"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[14px]  ml-2"
      id="lifeInsuranceSalary"
      tooltiptext=""
      typeFontProps={typeFontsPropsNormal}
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Plazo"
      value={termFinance?.toString()}
      text="pl-[23px] flex items-baseline"
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] ml-2"
      tooltiptext=""
      typeFontProps={typeFontsPropsNormal}
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Tasa aproximada"
      value={rate}
      text="pl-[23px] "
      urlsvg={`${basePath}/images/Charts.svg`}
      urlsvgendicon=""
      classtitle="h-[14px] ml-2"
      tooltiptext=""
      description
      typeFontProps={typeFontsPropsNormal}
      descriptionHtml={
        <div className="pl-[33px]">
          <div className="flex">
            <Typography variant='caption1' typeFont='Bold' componentHTML='p'  className="mr-1">MV: </Typography>
            <Typography variant='caption1' componentHTML='span' typeFont='Light'>Tasa nominal mes vencido</Typography>
          </div>
          <div className="flex">
            <Typography variant='caption1' componentHTML='p' typeFont='Bold' className="mr-1">EA:</Typography>
            <Typography variant='caption1' componentHTML='span' typeFont='Light'>Tasa efectiva anual</Typography>
          </div>
        </div>
      }
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]   bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="pl-[23px] "
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] ml-2"
      tooltip
      typeFontProps={typeFontsPropsNormal}
      tooltiptext={
        <Typography variant='bodyM3' componentHTML='p'  className="flex text-white">
          Seguro diseñado para proteger a sus asegurados en caso de presentarse muerte,
          incapacidad total y permanente, y demás riesgos previstos en la póliza.{' '}
        </Typography>
      }
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]   bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="pl-[23px]"
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="h-[14px] text-[14px] ml-2"
      id="fireInsuranceSalary"
      tooltip
      typeFontProps={typeFontsPropsNormal}
      tooltiptext={
        <Typography variant='caption1' componentHTML='p' className="flex text-white">
          Póliza que protege al inmueble hipotecado al Banco contra las pérdidas y daños
          materiales originados de forma accidental, súbita e imprevista como consecuencia
          directa de los riesgos amparados.{' '}
        </Typography>
      }
    />
    <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[20px] mt-[20px]">
      {dataPdf?.quotes?.length > 0 ? <BtnPdfDownloader pdf={dataPdf} /> : null}
    </div>
  </div>
);

export default ReviewSalary;
