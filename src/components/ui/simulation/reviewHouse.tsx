import React from 'react';
import Card, { typeFontsProps } from './Card';
import { basePath } from '../../../../next.config';
import BtnPdfDownloader from './BtnPdfDownloader';
import { cardTextStyles } from '../../../pages/simulador';
import Typography from '../Typography';

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

const typeFontsPropsNormal: typeFontsProps = {
  variantTypographyTitle: 'caption1',
  typeFontTypograhyTitle: 'Light',
  typeTagTypograhyTitle: 'span',
  variantDescriptionTypography: 'h4',
  typeDescriptionTagTypograhy: 'h4',
  typeFontDescriptionTypograhy: 'Bold',
};
const typeFontsPropsBold: typeFontsProps = {
  variantTypographyTitle: 'h4',
  typeFontTypograhyTitle: 'Bold',
  typeTagTypograhyTitle: 'h4',
  typeDescriptionTagTypograhy: 'h1',
  typeFontDescriptionTypograhy: 'Bold',
  variantDescriptionTypography: 'h1',
};
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
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px] bg-[#C4D1DA] mb-[16px]  rounded-[8px] flex flex-col justify-center"
        title="Cuota mensual sin seguros"
        value={monthlyCoute?.toString() + ' Pesos'}
        text=" pl-[8px] flex items-baseline "
        urlsvg=""
        tooltiptext=""
        urlsvgendicon=""
        altsvg="Cuota mensual sin seguros"
        typeFontProps={typeFontsPropsBold}
      />
    ) : null}

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] py-4  bg-[#F3F4F6] pl-[16px] rounded-[8px] mb-[12px]"
      title="Valor financiado aproximado"
      value={financedValue?.toString()}
      text={cardTextStyles}
      urlsvgendicon=""
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="text-[14px] ml-2 "
      tooltiptext=""
      typeFontProps={typeFontsPropsNormal}
      altsvg="Valor financiado aproximado"
    />

    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] py-4  bg-[#F3F4F6]  pl-[16px] rounded-[8px] mb-[12px] "
      title="Plazo"
      value={termFinance?.toString()}
      text={cardTextStyles}
      urlsvgendicon=""
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] text-[14px] ml-2 "
      tooltiptext=""
      altsvg="Plazo"
      typeFontProps={typeFontsPropsNormal}
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]    bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px] "
      title="Tasa aproximada"
      value={rate}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Charts.svg`}
      urlsvgendicon=""
      classtitle="h-[14px] text-[14px] ml-2 "
      tooltiptext=""
      description
      descriptionHtml={
        <div className="pl-[33px]">
          <div className="flex">
            <Typography
              variant="caption1"
              typeFont="Bold"
              componentHTML="p"
              className=" mr-1 "
            >
              MV:{' '}
            </Typography>
            <Typography
              variant="caption1"
              typeFont="Light"
              componentHTML="span"
              className=""
            >
              Tasa nominal mes vencido
            </Typography>
          </div>
          <div className="flex">
            <Typography
              variant="caption1"
              typeFont="Bold"
              componentHTML="p"
              className="  mr-1"
            >
              EA:
            </Typography>
            <Typography variant="caption1" typeFont="Light" componentHTML="span">
              Tasa efectiva anual
            </Typography>
          </div>
        </div>
      }
      typeFontProps={typeFontsPropsNormal}
      altsvg="Tasa aproximada"
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px]  ml-2"
      tooltip
      urlsvgendicon=""
      tooltiptext={
        <Typography componentHTML="p" variant="caption1" className="flex text-white">
          Seguro diseñado para proteger a sus asegurados en caso de presentarse muerte,
          incapacidad total y permanente, y demás riesgos previstos en la póliza.{' '}
        </Typography>
      }
      altsvg="Seguro de vida"
      typeFontProps={typeFontsPropsNormal}
    />
    <Card
      className="xs:w-[290px]  sm:w-[343px] md:w-[448px] bg-[#F3F4F6] py-4 pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de Incendio, Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text={cardTextStyles}
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="xs:mb-[23px] sm:mb-[0px] h-[14px] ml-2"
      tooltip
      urlsvgendicon=""
      tooltiptext={
        <Typography componentHTML="p" variant="caption1" className="flex text-white ">
          Póliza que protege al inmueble hipotecado al Banco contra las pérdidas y daños
          materiales originados de forma accidental, súbita e imprevista como consecuencia
          directa de los riesgos amparados.{' '}
        </Typography>
      }
      altsvg="Seguro de Incendio, Rayo y Terremoto"
      typeFontProps={typeFontsPropsNormal}
    />
    <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[12px]">
      {dataPdf?.quotes?.length > 0 ? <BtnPdfDownloader pdf={dataPdf} /> : null}
    </div>
  </div>
);

export default ReviewHouse;
