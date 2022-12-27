import React from 'react';

const ErrorInfo: React.FC<{ example?: string }> = ({ example }) => (
  <p className="font-light min-w-[50%] pl-2 text-[0.625rem] m-0 leading-[18px] peer-invalid:text-rojo-100 text-red-300 float-left whitespace-nowrap">
    <i className="text-xs leading-4 icon-ds-bcs bcs-information before:peer-invalid:text-rojo-100" />
    {example}
  </p>
);

export default ErrorInfo
