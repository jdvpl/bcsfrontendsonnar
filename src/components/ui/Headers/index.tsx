import React from 'react';
import { childrenProps } from '../../../interfaces';
import Typography from '../Typography';

const Heading: React.FC<childrenProps | any> = ({ children }) => (
  <Typography
    variant='h4'
    typeFont='Bold'
    componentHTML='h4'
    data-testid="head"
    id="title"
    tabIndex={0}
    role="paragraph"
    className="d text-center mt-[40px] md:mt-[64px]  tracking-[0.01px]"
  >
    {children}
  </Typography>
);

export default Heading
