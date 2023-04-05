import Image from 'next/image';
import { ToolTipInfo } from '../Tooltip';
import { InfoIco } from '../Tooltip/info';
import Typography, { TypeFont, Variants } from '../Typography';
import React from 'react';

interface CardProps {
  htmlFor?: string;
  className?: string;
  typebg?: string;
  urlsvg: string;
  altsvg: string;
  title: string;
  value?: string;
  text: string;
  classtitle?: string;
  subvalue?: string;
  textsub?: string;
  tooltip?: boolean;
  tooltiptext: React.ReactNode;
  id?: string;
  endicon?: boolean;
  urlsvgendicon?: string;
  clickEdit?: any;
  description?: boolean;
  descriptionHtml?: React.ReactNode;
  typeFontProps: typeFontsProps;
}

export interface typeFontsProps {
  variantTypographyTitle?: Variants;
  typeFontTypograhyTitle?: TypeFont;
  typeTagTypograhyTitle?: keyof JSX.IntrinsicElements;
  variantDescriptionTypography?: Variants;
  typeDescriptionTagTypograhy?: keyof JSX.IntrinsicElements;
  typeFontDescriptionTypograhy?: TypeFont;
  variantSubDescriptionTypography?: Variants;
  typetSubcDescriptionTagTypograhy?: keyof JSX.IntrinsicElements;
  typeFontSubcDescriptionTypograhy?: TypeFont;
}

export const Card: React.FC<CardProps> = ({
  className,
  text,
  value,
  urlsvg,
  altsvg="",
  title,
  classtitle,
  subvalue,
  textsub,
  tooltip,
  tooltiptext,
  id,
  endicon,
  urlsvgendicon,
  clickEdit,
  description,
  descriptionHtml,
  typeFontProps,
}) => (
  <div className={`${className}`} id={id} role="tabpanel" tabIndex={0}>
    <div className="flex relative">
      <div className="pr-[1px] ml-[2px] mr-[8px]">
        {urlsvg && (
          <Image
            unoptimized
            src={urlsvg}
            alt={altsvg}
            title={altsvg}
            width="16"
            height="16"
            className="mx-2"
          />
        )}
      </div>
      <Typography
        variant={typeFontProps.variantTypographyTitle || 'bodyM3'}
        typeFont={typeFontProps.typeFontTypograhyTitle}
        componentHTML={typeFontProps.typeTagTypograhyTitle || 'p'}
        className={classtitle}
      >
        {title}
      </Typography>
      {tooltip ? (
        <ToolTipInfo
          id="tax"
          info=""
          infohtml={tooltiptext}
          icon={
            <div
              id="-group"
              className="relative w-5 h-4 flex flex-col items-center group"
            >
              <InfoIco />
            </div>
          }
        />
      ) : null}
      {endicon ? (
        <div className="absolute left-[220px] top-[20px] sm:left-[280px] md:left-[380px] cursor-pointer">
          <img
            src={urlsvgendicon}
            alt={altsvg}
            title={altsvg}
            width="19"
            height="19"
            className="mx-1"
            onClick={clickEdit}
          />
        </div>
      ) : null}
    </div>
    <div className={text}>
      {value && (
        <Typography
          variant={typeFontProps.variantDescriptionTypography || 'bodyM1'}
          typeFont={typeFontProps.typeFontDescriptionTypograhy}
          componentHTML={typeFontProps.typeDescriptionTagTypograhy || 'p'}
          className="pl-[10px]"
        >
          {value}
        </Typography>
      )}
      {subvalue && (
        <Typography
          variant={typeFontProps.variantSubDescriptionTypography || 'bodyM1'}
          typeFont={typeFontProps.typeFontSubcDescriptionTypograhy}
          componentHTML={typeFontProps.typetSubcDescriptionTagTypograhy || 'p'}
          className={`text-[${textsub}px]  pl-[5px] mt-2`}
        >
          {subvalue}
        </Typography>
      )}
    </div>
    {description ? <div>{descriptionHtml}</div> : null}
  </div>
);

export default Card;
