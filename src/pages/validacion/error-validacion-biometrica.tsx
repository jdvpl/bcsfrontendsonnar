import React, { useEffect, useContext } from 'react';
import  ValidationMessageBiometry  from '../../components/biometria/error-validacion';
import  ErrorLayout from '../../components/layouts/errorLayout';

const ErrorValidacion: React.FC = () => {
  return (
    <ErrorLayout>
      <ValidationMessageBiometry />
    </ErrorLayout>
  );
};

export default ErrorValidacion;
