import React, { useEffect, useContext } from 'react';
import ValidationMessageBiometry from '../../components/biometria/error-validacion';
import ErrorLayout from '../../components/layouts/errorLayout';

const ErrorValidacion: React.FC = () => (
  <ErrorLayout title="Error Validación Biométrica">
    <ValidationMessageBiometry />
  </ErrorLayout>
);

export default ErrorValidacion;
