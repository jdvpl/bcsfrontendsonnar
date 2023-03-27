import { childrenProps } from '../../../interfaces';
import React from 'react'

const ContainerButton: React.FC<childrenProps> = ({ children }) => (
  <div data-testid="container" className="mt-[32px] sm:mb-[44px] text-center">
    {children}
  </div>
);

export default ContainerButton
