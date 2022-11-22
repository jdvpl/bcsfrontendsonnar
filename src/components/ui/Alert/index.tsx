import { FC } from 'react';
import Icons from '../icons';

interface propAlert {
  message: string;
}
const Alert: FC<propAlert> = ({ message }) => (
  <div
    className="relative px-4 py-2 mb-5 text-xs font-normal rounded text-[#2F6EAE] bg-[#EBF8FE]"
    role="alert"
  >
    <span className="absolute top-[10px]  left-0 flex items-center px-3">
      <Icons icon="bcs-information" color="text-[#2F6EAE]" size='text-[16px]' />
    </span>
    <span className="block ml-6 mr-3 font-light text-[12px] text-[#7594A8]">
      {' '}
      {message}
    </span>
  </div>
);

export default Alert;
