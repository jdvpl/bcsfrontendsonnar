import React from 'react';
import { childrenProps } from '../../interfaces';

const ContainerButtonForm: React.FC<childrenProps> = ({ children }) => (
  <div className="flex justify-center items-center">
    <div
      className="z-50 lg:z-0 w-full  md:w-[528px] lg:w-full 
     md:mx-0 md:px-0  
    fixed bottom-0 lg:static flex justify-center
   items-center mt-[32px] md:mt-[48px] lg:mt-[32px] h-[80px] bg-white/80 "
    >
      {children}
    </div>
  </div>
);

export default ContainerButtonForm
