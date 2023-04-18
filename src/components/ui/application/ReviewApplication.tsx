import React from 'react';
import Card, { typeFontsProps } from '../simulation/Card';
import { basePath } from '../../../../next.config';
import Typography from '../Typography';
import { convertToColombianPesos } from '../../../utils';

interface ReviewApplicationProps {
  financedValue?: string;
  fireInsurance?: string;
  lifeInsurance?: string;
  termFinance: string;
  rate: string;
  id?: string;
  insuranceCheck?: boolean;
  monthlyInstallment?: string;
}

function ReviewApplication({
  financedValue,
  fireInsurance,
  lifeInsurance,
  termFinance,
  rate,
  monthlyInstallment,
  insuranceCheck = true,
}: ReviewApplicationProps) {
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
    variantSubDescriptionTypography: 'h1',
    typetSubcDescriptionTagTypograhy: 'h1',
    typeFontSubcDescriptionTypograhy: 'Bold',
  };
  return (
    <div className="flex flex-col items-center ">
      <Card
        data-testid="financedValue"
        className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[79px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
        title="Monto Total"
        value={`${financedValue} pesos`}
        text="text-[20px] pl-[18px] "
        urlsvg={`${basePath}/images/Money.svg`}
        classtitle="h-[14px]"
        id="amountotal"
        tooltiptext=""
        altsvg="Monto Total"
        typeFontProps={typeFontsPropsNormal}
      />
      <Card
        altsvg=""
        className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[88px] bg-[#C4D1DA] mb-[16px] font-semibold rounded-[8px]"
        title="Cuota mensual aproximada"
        value={`${monthlyInstallment} Pesos`}
        text="text-[32px] pl-[16px] pt-2 flex items-baseline mt-2"
        urlsvg=""
        classtitle="h-[18px] pt-[16px] text-[16px] "
        textsub="32"
        tooltiptext=""
        urlsvgendicon=""
        typeFontProps={{
          ...typeFontsPropsBold,
          ...{ variantDescriptionTypography: 'h1', typeFontDescriptionTypograhy: 'Bold' },
        }}
      />
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[116px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
        title="Tasa aproximada"
        value={rate}
        text="text-[20px] pl-[18px]"
        urlsvg={`${basePath}/images/Charts.svg`}
        urlsvgendicon=""
        classtitle="h-[14px] "
        tooltiptext=""
        description
        descriptionHtml={
          <div className="pl-[27px]">
            <div className="flex">
              <Typography
                variant="caption1"
                componentHTML="b"
                typeFont="Bold"
                className="  mr-1"
              >
                MV:
              </Typography>
              <Typography
                componentHTML="p"
                variant="caption1"
                typeFont="Light"
                className=""
              >
                Tasa nominal mes vencido
              </Typography>
            </div>
            <div className="flex">
              <Typography
                variant="caption1"
                componentHTML="b"
                typeFont="Bold"
                className="  mr-1"
              >
                EA:
              </Typography>
              <Typography componentHTML="p" variant="caption1" typeFont="Light">
                Tasa efectiva anual
              </Typography>
            </div>
          </div>
        }
        typeFontProps={{
          ...typeFontsPropsNormal,
          ...{ typeFontTypograhyTitle: 'Light' },
        }}
        altsvg="Tasa aproximada"
      />
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[78px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
        title="Plazo"
        value={termFinance?.toString()}
        text="text-[20px] pl-[18px] font-semibold"
        urlsvg={`${basePath}/images/Calendar.svg`}
        tooltiptext=""
        altsvg="Plazo"
        classtitle="h-[14px] text-[13px]"
        typeFontProps={typeFontsPropsNormal}
      />
      {lifeInsurance ? (
        <Card
          data-testid="lifeInsurance"
          className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[78px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
          title="Seguro de vida"
          value={convertToColombianPesos(lifeInsurance)}
          text="text-[20px] pl-[18px]"
          urlsvg={`${basePath}/images/Insurage.svg`}
          tooltiptext=""
          altsvg="Seguro de vida"
          classtitle="h-[14px] text-[13px]"
          typeFontProps={typeFontsPropsNormal}
        />
      ) : null}
      {fireInsurance ? (
        <Card
          data-testid="fireInsurance"
          className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[78px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px] font-light"
          title="Seguro de Incendio, Rayo y Terremoto"
          value={convertToColombianPesos(fireInsurance)}
          text="text-[20px] pl-[18px]"
          urlsvg={`${basePath}/images/Money.svg`}
          tooltiptext=""
          altsvg="Seguro de Incendio, Rayo y Terremoto"
          classtitle="h-[14px]"
          typeFontProps={typeFontsPropsNormal}
        />
      ) : null}
    </div>
  );
}

export default ReviewApplication;
