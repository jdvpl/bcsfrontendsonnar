import Image from 'next/image';


interface CardProps {
  htmlFor?: string;
  className?: string;
  typebg?: string;
  urlsvg: string;
  altsvg?: string;
  title: string;
  value: string;
  text: string;
}
export const Card: React.FC<CardProps> = ({
  className,
  text,
  value,
  urlsvg,
  altsvg,
  title,
}) => (
  <div className={`${className}`}>
    <div className="flex">
      <div className="pr-[8px]">
        <Image
          unoptimized
          src={urlsvg}
          className="mw-64 hw-64"
          alt={altsvg}
          title={altsvg}
          width="16"
          height="16"
        />
      </div>
      <p>{title}</p>
    </div>
    <div className={text}>
      <p>{value}</p>
    </div>
  </div>
);

export default Card;
