import React from 'react';
import NoSSRWrapper from '../../../hooks/noSSR';
import { childrenProps } from '../../../interfaces';

const FormContainer: React.FC<childrenProps> = ({ children }) => (
  <NoSSRWrapper>
    <div data-testid="container-form" className="flex h-full">
      <div className="flex justify-center items-center flex-col min-h-full h-full w-full mt-[36px] md:mt-[52px] lg:mt-[52px] mb-[100px]   md:h-max">
        {children}
      </div>
    </div>
  </NoSSRWrapper>
);

export default FormContainer
