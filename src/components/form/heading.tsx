import React from 'react';
import { childrenProps } from '../../interfaces';

const Heading: React.FC<childrenProps> = ({ children }) => (
  <h4
    data-testid="head"
    id="title"
    className="text-center mt-[40px] md:mt-[64px]  md:text-[28px] md:leading-[30px] tracking-[0.01px]"
  >
    {children}
  </h4>
);

export default Heading;
