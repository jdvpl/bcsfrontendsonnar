import React from 'react';
import { childrenProps } from '../../../interfaces';
import Typography from '../Typography';

const SubtitleError: React.FC<childrenProps> = ({ children }) => (
  <Typography
    id="subtitle-error"
    variant="bodyM3"
    componentHTML="p"
    typeFont="Light"
    className="text-center mt-[10px] text-secondary-100 font-light text-lg leading-[20px] md:-mx-[20px] lg:-mx-[0px]"
    itemProp="error"
    tabIndex={0}
  >
    {children}
  </Typography>
);

export default SubtitleError;
