import { FC } from 'react';
import { IconListAvailable } from '../../../types';

/* eslint-disable-next-line */
export interface IconsProps {
  icon?: IconListAvailable;
  size?: string;
  color?: string;
  iconclassNames?: string;
}

export const Icons: FC<IconsProps> = ({ icon, size, color, iconclassNames = '', ...props }) => {
  return <i {...props} className={`icon-ds-bcs ${icon} ${color} ${size} ${iconclassNames}`}></i>;
};

export default Icons;
