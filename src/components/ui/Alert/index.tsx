import { FC } from 'react';
import Icons from '../icons';
import React from 'react'

interface propAlert {
  message: string;
  colorMessage?: string;
}
const Alert: FC<propAlert> = ({ message, colorMessage = 'text-[#7594A8]' }) => (
  <div
    className="relative px-4 py-2 mb-5 text-xs font-normal rounded text-[#2F6EAE] bg-[#EBF8FE]"
    role="alert"
  >
    <span className="absolute top-[10px]  left-0 flex items-center px-3">
      <Icons icon="bcs-information" color="text-[#2F6EAE]" size='text-[16px]' />
    </span>
    <span className={`block ml-6 mr-3 font-light text-[12px] ${colorMessage}`}>
      {' '}
      {message}
    </span>
  </div>
);

export default Alert;
