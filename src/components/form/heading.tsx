import React from 'react';
import { childrenProps } from '../../interfaces';

export const Heading: React.FC<childrenProps> = ({ children }) => (
  <h4
    data-testid="head"
    id="title"
    tabIndex={0}
    role="paragraph"
    className="text-center mt-[40px] md:mt-[64px]  md:text-[28px] md:leading-[30px] tracking-[0.01px]"
  >
    {children}
  </h4>
);
