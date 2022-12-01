import React from 'react';
import { childrenProps } from '../../../interfaces';

const SubtitleError: React.FC<childrenProps> = ({ children }) => (
  <p
    id="subtitle-error"
    className="text-center mt-[10px] text-secondary-100 font-light text-lg leading-[20px] md:-mx-[20px] lg:-mx-[0px]"
    tabIndex={0}
    role="paragraph"
    itemProp="error"
  >
    {children}
  </p>
);

export default SubtitleError
