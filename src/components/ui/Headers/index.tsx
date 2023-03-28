import React from 'react';
import { childrenProps } from '../../../interfaces';

const Heading: React.FC<childrenProps> = ({ children }) => (
  <div role="tabpanel" tabIndex={0}>
    <h4
      data-testid="head"
      id="title"
      className="font-poppinsSemiBold text-center mt-[40px] md:mt-[64px]  md:text-[28px] md:leading-[30px] tracking-[0.01px]"
    >
      {children}
    </h4>
  </div>
);

export default Heading;
