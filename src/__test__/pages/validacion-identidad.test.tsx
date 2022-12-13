import 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import React from 'react'
import Index from '../../pages/validacion-identidad';

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
