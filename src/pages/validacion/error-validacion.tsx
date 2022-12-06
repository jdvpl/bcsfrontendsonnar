import React, { useEffect, useContext } from 'react';
import  ValidationMessageBiometry  from '../../components/biometria/error-validacion';
import  ErrorLayout from '../../components/layouts/errorLayout';
import { AplicationContext } from '../../context/AplicationContext';

const ErrorValidacion: React.FC = () => {
  const {
    setEligirFoto,
    setFotoDelantera,
    setFotoTrasera,
    setSelfieSonriendo,
    setSelfieNormal,
  } = useContext(AplicationContext);
  useEffect(() => {
    setEligirFoto('');
    setFotoDelantera('');
    setFotoTrasera('');
    setSelfieNormal('');
    setSelfieSonriendo('');
    sessionStorage.clear();
  }, []);

  return (
    <ErrorLayout>
      <ValidationMessageBiometry />
    </ErrorLayout>
  );
};

export default ErrorValidacion;
