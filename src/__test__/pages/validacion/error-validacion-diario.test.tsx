import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorValidacionDiario from '../../../pages/validacion/error-validacion-diario';
import React from 'react';
import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';
import { AplicationContext } from '../../../context/AplicationContext';

describe('<ErrorValidacionDiario/>', () => {

  let setEligirFoto, setFotoDelantera, setFotoTrasera, setSelfieSonriendo, setSelfieNormal;

  beforeEach(() => {
    setEligirFoto = jest.fn();
    setFotoDelantera = jest.fn();
    setFotoTrasera = jest.fn();
    setSelfieSonriendo = jest.fn();
    setSelfieNormal = jest.fn();
  });



  test('calls context functions on mount', () => {
    render(
      <AplicationContext.Provider
        value={{ setEligirFoto, setFotoDelantera, setFotoTrasera, setSelfieSonriendo, setSelfieNormal }}
      >
        <ErrorValidacionDiario />
      </AplicationContext.Provider>
    );

    expect(setEligirFoto).toHaveBeenCalledWith('');
    expect(setFotoDelantera).toHaveBeenCalledWith('');
    expect(setFotoTrasera).toHaveBeenCalledWith('');
    expect(setSelfieNormal).toHaveBeenCalledWith('');
    expect(setSelfieSonriendo).toHaveBeenCalledWith('');
  });

 
  test('should render the componnet succesufully', () => { 
    const {container}=render(
      <AplicationContext.Provider
        value={{ setEligirFoto, setFotoDelantera, setFotoTrasera, setSelfieSonriendo, setSelfieNormal }}
      >
        <ErrorValidacionDiario />
      </AplicationContext.Provider>
    );
    expect(container).toBeTruthy()
   })
})
