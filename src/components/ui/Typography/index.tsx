import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
export type HeadingType = HTMLAttributes<HTMLHeadingElement>;
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>;
export type SpanType = HTMLAttributes<HTMLSpanElement>;
export type ULType = HTMLAttributes<HTMLUListElement>;
export type AType = HTMLAttributes<HTMLAnchorElement>;


export type TypeFont = 'Bold' | 'Regular' | 'Light'
export type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyM1' | 'bodyM2' | 'bodyM3' | 'caption1' | 'caption2' | 'overline1' | 'overline2' | 'ul' | 'a';
export type TypographyProps = (HeadingType | ParagraphType | SpanType | ULType | AType) & { variant: Variants } & { typeFont?: TypeFont };

const headings = ['h1', 'h2', 'h3', 'h4'];
const paragraphs = ['bodyM1', 'bodyM2', 'bodyM3'];
const spans = ['caption1', 'caption2', 'overline1', 'overline2'];
const listUl = ['ul'];
const alist = ['a'];
function Typography({
  children,
  variant = 'bodyM1',
  className,
  typeFont = 'Regular',
  ...props
}: TypographyProps) {

  const componentStyles = () => {
    const styleMap = {
      h1: {
        fontSize: "32px",
        lineHeight: "36px",
      },
      h2: {
        fontSize: "28px",
        lineHeight: "32px",
      },
      h3: {
        fontSize: "24px",
        lineHeight: "28px",
      },
      h4: {
        fontSize: "20px",
        lineHeight: "24px",
      },
      bodyM1: {
        fontSize: "20px",
        lineHeight: "22px",
      },
      bodyM2: {
        fontSize: "18px",
        lineHeight: "20px",
      },
      bodyM3: {
        fontSize: "16px",
        lineHeight: "18px",
      },
      caption1: {
        fontSize: "14px",
        lineHeight: "16px",
      },
      caption2: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      overline1: {
        fontSize: "12px",
        lineHeight: "14px",
      },
      overline2: {
        fontSize: "10px",
        lineHeight: "12px",
      },
      ul: {
        fontSize: "16px",
        lineHeight: "18px",
      },
      a: {
        fontSize: "16px",
        lineHeight: "18px",
      }
    };
    const style = styleMap[variant] || {};
    const fontStyle = fontStyles();
    return `text-[${style.fontSize}] leading-[${style.lineHeight}] ${fontStyle}`;
  };

  const fontStyles = () => {
    let classes = '';
    const fontVariants: {
      [key: string]: { [key: string]: string }
    } = {
      h: {
        Bold: 'font-poppinsSemiBold',
        Light: 'font-poppinsExtraLight',
        Regular: 'font-poppinsRegular'
      },
      bodyM1: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight'
      },
      bodyM2: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight'
      },
      bodyM3: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight'
      },
      caption1: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratMedium',
        Light: 'font-montserratExtraLight'
      },
      caption2: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-monserratLight'
      },
      overline: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-monserratLight'
      },
      ul: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight'
      },
      a: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight'
      },
    };
    const fontVariant = Object.keys(fontVariants).find((variantKey) => variant.startsWith(variantKey));
    const fontStylesForVariant = fontVariants[fontVariant || ''];
    if (typeFont in fontStylesForVariant) {
      classes = fontStylesForVariant[typeFont];
    }
    return classes;
  };


  const Tag = cn({
    [`${variant}`]: headings.includes(variant),
    [`p`]: paragraphs.includes(variant),
    [`span`]: spans.includes(variant),
    [`ul`]: listUl.includes(variant),
    [`a`]: alist.includes(variant),
  }) as any;

  return (
    <Tag {...props} className={`${className} ${componentStyles()}`} data-testid="typographyTest">
      {children}
    </Tag>
  );
}

export default Typography;
