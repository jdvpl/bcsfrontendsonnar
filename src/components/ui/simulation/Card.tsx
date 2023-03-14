import Image from 'next/image';
import { ToolTipInfo } from '../Tooltip';
import { InfoIco } from '../Tooltip/info';
interface CardProps {
  htmlFor?: string;
  className?: string;
  typebg?: string;
  urlsvg: string;
  altsvg?: string;
  title: string;
  value?: string;
  text: string;
  classtitle?: string;
  subvalue?: string
  textsub?: string;
  tooltip?: boolean;
  tooltiptext: React.ReactNode;
  id?: string;
  endicon?: boolean;
  urlsvgendicon?: string;
  clickEdit?: any
  description?: boolean,
  descriptionHtml?: React.ReactNode
}
export const Card: React.FC<CardProps> = ({
  className,
  text,
  value,
  urlsvg,
  altsvg,
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
  descriptionHtml
}) => (
  <div className={`${className}`} id={id}>
    <div className="flex relative">
      <div className="pr-[1px] ml-[2px] mr-[8px]">
        <Image
          unoptimized
          src={urlsvg}
          alt={altsvg}
          title={altsvg}
          width="16"
          height="16"
          className='mx-2'
        />
      </div>
      <p className={classtitle}>{title}</p>
      {tooltip ?
        <ToolTipInfo
          id="tax"
          info=""
          infohtml={tooltiptext}
          icon={
            <div
              id="-group"
              className="relative  w-5 h-4 flex flex-col items-center group"
            >
              <InfoIco />
            </div>
          }
        />
        : null
      }

      {endicon ?
        <div className='absolute left-[220px] top-[20px] sm:left-[280px] md:left-[380px] cursor-pointer'>
          <img
            src={urlsvgendicon}
            alt={altsvg}
            title={altsvg}
            width="19"
            height="19"
            className='mx-1'
            onClick={clickEdit}
          />
        </div>
        : null
      }
    </div>
    <div className={text}>
      <p className='pl-[10px]'>{value}</p>
      <p className={`text-[${textsub}px]  pl-[5px]`}>{subvalue}</p>
    </div>
    {
      description ?
        <div>{descriptionHtml}</div>
        : null
    }
  </div>
);

export default Card;
