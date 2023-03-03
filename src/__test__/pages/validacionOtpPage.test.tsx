import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react'
import ValidacionSolicitud from '../../pages/validacion-otp';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

describe('ValidacionSolicitud', () => {
  it('should render "ValidacionSolicitud" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } = render(<RouterContext.Provider value={router}>
      <ValidacionSolicitud />
    </RouterContext.Provider>);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text resend code', () => {
    const router = createMockRouter({});
    const component = render(<RouterContext.Provider value={router}>
      <ValidacionSolicitud />
    </RouterContext.Provider>);
    component.getByText('Volver a enviar código en')
  });

  it('should render ValidacionSolicitud inputs', () => {
    const router = createMockRouter({});
    const component = render(<RouterContext.Provider value={router}>
      <ValidacionSolicitud />
    </RouterContext.Provider>);
    const inputs = component.container.querySelectorAll('input');
    expect(inputs.length).toBe(6);
  });
});
