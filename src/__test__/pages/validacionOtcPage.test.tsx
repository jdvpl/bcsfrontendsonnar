import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react'
import OTCPage from '../../pages/validacion-otc';

describe('ValidacionSolicitud', () => {
  it('should render "ValidacionSolicitud" successfully', () => {
    const { baseElement } = render(<OTCPage />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text resend code', () => {
    const component = render(<OTCPage />);
    component.getByText('Volver a enviar código en')
  });

  it('should render ValidacionSolicitud inputs', () => {
    const component = render(<OTCPage />);
    const inputs = component.container.querySelectorAll('input');
    expect(inputs.length).toBe(6);
  });
});
