import 'jest-canvas-mock';
import { render, fireEvent, act } from '@testing-library/react';
import React from 'react'
import Index from '../../pages/validacion-identidad';
import '@testing-library/jest-dom/extend-expect';


describe('validacion-identidad', () => {
  it('should render "ValidacionSolicitud" successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
  it('should render steper title', () => {
    const component = render(<Index />);
    component.getByText('Validación de identidad')
  });

  it('should render steps', () => {
    const component = render(<Index />);
    component.getByText('Paso 1 de 4')
  });
});
