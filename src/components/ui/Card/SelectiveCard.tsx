import { useRouter } from 'next/router';
import { FC } from 'react';
/* eslint-disable-next-line */
import Icons, { IconsProps } from '../icons';
import Typography from '../Typography/index';
import dynamicClassesSelective from './SelectiveClassnames';
import React from 'react'

export interface ISelectiveCardProps extends IconsProps {
  label?: string;
  description: string;
  pathTo?: string;
  className?: string;
  hasTitle?: boolean;
  onclick: boolean;
  classNamesDescription?: string;
  titleClasses?: string;
  active?: boolean;
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
  classNamesDescription = 'md:w-[224px]',
  titleClasses = '',
  active = false,
  ...props
}) => {
  const router = useRouter();
  const classNames = dynamicClassesSelective(hasTitle, className, active);
  const activeClasses = active ? 'text-white' : 'text-primario-900'
  const activeClassesDesc = active ? 'text-white' : 'text-complementario-100'
  return (
    <div
      data-testid="selectiveCardTest"
      {...props}
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
              className={` lg:mt-[14px] lg:mb-[18px] leading-[1.125rem]  m-0 tracking-normal font-semibold  group-hover:text-white ${titleClasses} ${activeClasses}`}
            >
              {label}
            </Typography>
          )}
          <Typography
            variant="bodyS3"
            className={`hasTitle leading-[1.125rem]  text-[1rem]  mt-2 group-hover:text-white font-ligth ${classNamesDescription} ${activeClassesDesc}`}
          >
            {description}
          </Typography>
        </div>
      </label>
    </div>
  );
};

export default SelectiveCard;
