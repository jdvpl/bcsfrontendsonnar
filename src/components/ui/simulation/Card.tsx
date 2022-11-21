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
  classtitle?:string;
  subvalue?:string
  textsub?:string;
  tooltip?:boolean;
  tooltiptext:React.ReactNode;
  id?:string;
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
}) => (
  <div className={`${className}`} id={id}>
    <div className="flex">
      <div className="pr-[8px] ml-[2px]">
        <Image
          unoptimized
          src={urlsvg}
          alt={altsvg}
          title={altsvg}
          width="16"
          height="16"
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
    :null
    }
      
    </div>
    <div className={text}>
      <p>{value}</p>
      <p className={`text-[${textsub}px]  pl-[5px]`}>{subvalue}</p>
    </div>
  </div>
);

export default Card;
