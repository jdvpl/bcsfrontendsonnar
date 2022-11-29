import { HTMLAttributes } from 'react';
import cn from 'classnames';

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type HeadingType = HTMLAttributes<HTMLHeadingElement>;
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>;
export type SpanType = HTMLAttributes<HTMLSpanElement>;

export type TypographyProps = (HeadingType | ParagraphType | SpanType) & {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodyM1'
    | 'bodyM2'
    | 'bodyM3'
    | 'bodyM4'
    | 'bodyM5'
    | 'bodyS1'
    | 'bodyS2'
    | 'bodyS3'
    | 'caption1'
    | 'caption2'
    | 'caption3'
    | 'caption4'
    | 'overline';
};

const headings = ['h1', 'h2', 'h3', 'h4', 'h5'];
const paragraphs = [
  'bodyM1',
  'bodyM2',
  'bodyM3',
  'bodyM4',
  'bodyM5',
  'bodyS1',
  'bodyS2',
  'bodyS3',
];
const spans = ['caption1', 'caption2', 'caption3', 'caption4', 'overline'];
const Typography = ({
  children,
  variant = 'bodyM1',
  className,
  ...props
}: TypographyProps) => {
  const componentStyles = () => {
    switch (variant) {
      case 'h1':
        return 'leading-[2.125rem] text-[2rem] font-bold';
      case 'h2':
        return 'text-[28px] leading-[30px] font-bold';
      case 'h3':
        return 'text-[1.5rem] leading-[1.625rem] font-semibold';
      case 'bodyM4':
        return 'text-[18px] leading-[18px] font-light';
      case 'bodyS3':
        return 'text-[16px] leading-[18px] font-light';
      default:
        return '';
    }
  };

  const Tag = cn({
    [`${variant}`]: headings.includes(variant),
    [`p`]: paragraphs.includes(variant),
    [`span`]: spans.includes(variant),
  }) as TagType;

  return (
    <Tag {...props} className={`${className} ${componentStyles()}`}>
      {children}
    </Tag>
  );
}

export default Typography;
