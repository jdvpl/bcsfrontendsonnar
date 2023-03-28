import React, { FC } from 'react';
import { IconListAvailable } from '../../../types';

/* eslint-disable-next-line */
export interface IconsProps {
  icon?: IconListAvailable;
  size?: string;
  color?: string;
  title: string;
  iconclassNames?: string;
}

export const Icons: FC<IconsProps> = ({
  icon,
  size,
  color,
  title,
  iconclassNames = '',
  ...props
}) => (
  <i
    {...props}
    className={`icon-ds-bcs ${icon} ${color} ${size} ${iconclassNames}`}
    title={title}
  />
);

export default Icons;
