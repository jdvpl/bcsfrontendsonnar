import { FC } from 'react';
import Icons from '../icons';
import React from 'react'
import Typography from '../Typography'
interface propAlert {
  message: string;
  colorMessage?: string;
  bgBanner?: string;
}
const Alert: FC<propAlert> = ({
  message,
  colorMessage = 'text-[#2F6EAE]',
  bgBanner = 'bg-[#EBF8FE]',
}) => (
  <div
    className={`relative px-4 py-2 mb-5 text-xs font-normal rounded text-[#2F6EAE] ${bgBanner}`}
    role="alert"
  >
    <span className="absolute top-[10px]  left-0 flex items-center px-3">
      <Icons
        icon="bcs-icon-51"
        color="text-[#2F6EAE]"
        size="text-[12px]"
        title="Información"
      />
    </span>
    <Typography variant='caption2' componentHTML='span' typeFont='Regular' className={`block ml-6 mr-3 font-normal text-[12px] ${colorMessage}`}>
      {' '}
      {message}
    </Typography>
  </div>
);

export default Alert;
