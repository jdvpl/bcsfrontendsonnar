import 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import React from 'react'
import Otp from '../../../../components/custom/otp';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../utils/createMockRouter';

describe('Otp', () => {
  it('should render "Otp" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } = render(<RouterContext.Provider value={router}>
      <Otp />
    </RouterContext.Provider>);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text', () => {
    const router = createMockRouter({});
    render(<RouterContext.Provider value={router}>
      <Otp />
    </RouterContext.Provider>);
    expect(screen.getByTestId('h4OtpText').textContent).toMatch(/ingrese el código enviado por/i)
  })
});
it('should render the text resend code', () => {
  const router = createMockRouter({});
  const component = render(<RouterContext.Provider value={router}>
    <Otp />
  </RouterContext.Provider>);
  component.getByText('Volver a enviar código en')
});
it('should render otp inputs', () => {
  const router = createMockRouter({});
  const component = render(<RouterContext.Provider value={router}>
    <Otp />
  </RouterContext.Provider>);
  const inputs = component.container.querySelectorAll('input');
  expect(inputs.length).toBe(6);
});

