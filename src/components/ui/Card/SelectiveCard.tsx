import { useRouter } from 'next/router';
import { FC } from 'react';
/* eslint-disable-next-line */
import Icons, { IconsProps } from '../icons';
import Typography from '../Typography/index';
import  dynamicClassesSelective  from './SelectiveClassnames';

export interface ISelectiveCardProps extends IconsProps {
  label?: string;
  description: string;
  pathTo?: string;
  className?: string;
  hasTitle?: boolean;
  onclick: boolean;
}
const SelectiveCard: FC<ISelectiveCardProps> = ({
  label,
  description,
  icon,
  color = '',
  size,
  pathTo = '',
  className = '',
  hasTitle = true,
  onclick = true,
}) => {
  const router = useRouter();
  const classNames = dynamicClassesSelective(hasTitle, className);
  return (
    <div
      className={classNames.mainClasesParentDiv}
      {...(onclick ? { onClick: () => router.push(pathTo) } : {})}
    >
      <div className={classNames.iconContainerStyle}>
        <Icons
          icon={icon}
          color={color}
          size={size}
          iconclassNames="group-hover:text-white"
        />
      </div>
      <label className="label-shipping" htmlFor="shipping-home">
        <div>
          {hasTitle && (
            <Typography
              variant="bodyM2"
              className="text-[1rem] lg:mt-[14px] lg:mb-[18px] leading-[1.125rem] text-primario-900 m-0 tracking-normal font-semibold font-heading group-hover:text-white"
            >
              {label}
            </Typography>
          )}
          <Typography
            variant="bodyS3"
            className="hasTitle leading-[1.125rem]  text-[1rem] text-complementario-100 mt-2 group-hover:text-white font-ligth md:w-[224px]"
          >
            {description}
          </Typography>
        </div>
      </label>
    </div>
  );
};

export default SelectiveCard;
