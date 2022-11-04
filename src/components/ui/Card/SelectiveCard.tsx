import { useRouter } from 'next/router';
import { FC } from 'react';
import Icons, { IconsProps } from '../icons';
import Typography from '../Tipography/index';

export interface ISelectiveCardProps extends IconsProps {
  label: string;
  description: string;
  pathTo: string;
  className?:string;
}
const SelectiveCard: FC<ISelectiveCardProps> = ({
  label,
  description,
  icon,
  color = '',
  size,
  pathTo,
  className
}) => {
  const router = useRouter();
  return (
    <div
      className={`group b-4 relative xl:flex flex md:flex sm:flex-row md:flex-col lg:flex-col  md:justify-center md:text-center lg:justify-center lg:text-center items-center w-full px-[16px] rounded-l-lg  select-none py-[20px] rounded-r-xl cursor-pointer  hover:bg-primario-20 shadow-lg bg-white ${className}`}
      onClick={() => {
        router.push(pathTo);
      }}
    >
      <div className="h-[4.25rem] max-w-[4rem] max-h-[4.25rem] mim-w-[4rem] mr-1 justify-center w-full flex items-center rounded-[0.75rem] bg-white group-hover:bg-primario-20">
        <Icons
          icon={icon}
          color={color}
          size={size}
          iconclassNames="group-hover:text-white"
        />
      </div>
      <label className="label-shipping" htmlFor="shipping-home">
        <div>
          <Typography
            variant="bodyM2"
            className="text-[1rem] leading-[1.125rem] text-primario-900 m-0 tracking-normal font-semibold font-heading group-hover:text-white"
          >
            {label}
          </Typography>
          <Typography
            variant="bodyS3"
            className="leading-[1.125rem] text-[1rem] text-complementario-100 mt-2 group-hover:text-white"
          >
            {description}
          </Typography>
        </div>
      </label>
    </div>
  );
};

export default SelectiveCard;
