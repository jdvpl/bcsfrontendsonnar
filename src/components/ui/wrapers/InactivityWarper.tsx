import React, { FC } from 'react';
import { childrenProps } from '../../../interfaces/childrenProps';
import { InactivityModal } from '../Modal/inactivityModal/index';

export const InactivityWarper: FC<childrenProps> = ({ children }) => {
  return (
    <div>
      <InactivityModal />
      {children}
    </div>
  );
};
