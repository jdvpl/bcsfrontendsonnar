import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

export type TypeFont = 'Bold' | 'Regular' | 'Light';
export type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyM1'
  | 'bodyM2'
  | 'bodyM3'
  | 'caption1'
  | 'caption2'
  | 'overline1'
  | 'overline2';

type TypographyProps = {
  componentHTML: keyof JSX.IntrinsicElements;
  attrs?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
  className?: string;
  children?: ReactNode;
  variant: Variants;
  typeFont?: TypeFont;
  id?: string;
  tabIndex?: any;
  role?: any;
  htmlFor?: string;
  itemScope?: any;
  itemType?: string;
  onClick?: () => void;
  onKeyDown?: any;
  onKeyDownCapture?: any;
  itemProp?: string;
  href?: string;
  type?: string;
  title?: string;
};

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'bodyM1',
  typeFont = 'Regular',
  className,
  componentHTML = 'p',
  id,
  tabIndex,
  role,
  htmlFor,
  itemScope,
  itemType,
  onClick,
  onKeyDown,
  onKeyDownCapture,
  itemProp,
  href,
  type,
  title,
  ...props
}: TypographyProps) => {
  const componentStyles = () => {
    const styleMap = {
      h1: {
        fontSize: '32px',
        lineHeight: '36px',
      },
      h2: {
        fontSize: '28px',
        lineHeight: '32px',
      },
      h3: {
        fontSize: '24px',
        lineHeight: '28px',
      },
      h4: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      bodyM1: {
        fontSize: '20px',
        lineHeight: '22px',
      },
      bodyM2: {
        fontSize: '18px',
        lineHeight: '20px',
      },
      bodyM3: {
        fontSize: '16px',
        lineHeight: '18px',
      },
      caption1: {
        fontSize: '14px',
        lineHeight: '16px',
      },
      caption2: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      overline1: {
        fontSize: '12px',
        lineHeight: '14px',
      },
      overline2: {
        fontSize: '10px',
        lineHeight: '12px',
      },
    };
    const style = styleMap[variant] || {};
    const fontStyle = fontStyles();
    return `text-[${style.fontSize}] leading-[${style.lineHeight}] ${fontStyle}`;
  };

  const fontStyles = () => {
    let classes = '';
    const fontVariants: {
      [key: string]: { [key: string]: string };
    } = {
      h: {
        Bold: 'font-poppinsSemiBold',
        Light: 'font-poppinsExtraLight',
        Regular: 'font-poppinsRegular',
      },
      bodyM1: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight',
      },
      bodyM2: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight',
      },
      bodyM3: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-montserratExtraLight',
      },
      caption1: {
        Bold: 'font-montserratSemiBold',
        Regular: 'font-montserratMedium',
        Light: 'font-montserratExtraLight',
      },
      caption2: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-monserratLight',
      },
      overline: {
        Bold: 'font-montserratMedium',
        Regular: 'font-montserratRegular',
        Light: 'font-monserratLight',
      },
    };
    const fontVariant = Object.keys(fontVariants).find((variantKey) =>
      variant.startsWith(variantKey)
    );
    const fontStylesForVariant = fontVariants[fontVariant || ''];
    if (typeFont in fontStylesForVariant) {
      classes = fontStylesForVariant[typeFont];
    }
    return classes;
  };

  const Tag = ({ tag, attrs = {}, className, children }: any) => {
    const element = React.createElement(
      tag,
      {
        ...props,
        className: cn(attrs.className, className),
        role,
        htmlFor,
        itemScope,
        itemType,
        onClick,
        onKeyDown,
        onKeyDownCapture,
        itemProp,
        href,
        type,
        tabIndex,
        title,
      },
      children
    );
    return element;
  };

  return (
    <Tag
      tag={componentHTML}
      className={`${className} ${componentStyles()}`}
      data-testid="typographyTest"
    >
      {children}
    </Tag>
  );
};

export default Typography;
