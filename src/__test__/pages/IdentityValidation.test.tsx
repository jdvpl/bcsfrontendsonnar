import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react'
import Index from '../../pages/validacion-identidad';
import '@testing-library/jest-dom/extend-expect';
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';


describe('validacion-identidad', () => {
  it('should render "ValidacionSolicitud" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } = render(<RouterContext.Provider value={router}>
      <Index />
    </RouterContext.Provider>);
    expect(baseElement).toBeTruthy();
  });
  it('should render steper title', () => {
    const router = createMockRouter({});
    const component = render(<RouterContext.Provider value={router}>
      <Index />
    </RouterContext.Provider>);
    component.getByText('Validación de identidad')
  });

  it('should render steps', () => {
    const router = createMockRouter({});
    const component = render(<RouterContext.Provider value={router}>
      <Index />
    </RouterContext.Provider>);
    component.getByText('Paso 1 de 5')
  });


});
