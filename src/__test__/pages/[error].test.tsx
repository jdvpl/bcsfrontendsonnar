import { render, screen } from '@testing-library/react';
import Error from '../../pages/[error]';
import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';
describe('Error', () => {
  test('should render "Error" successfully', () => {
    const router = createMockRouter({ query: { error: 'error-validacion' } });
    render(
      <RouterContext.Provider value={router}>
        <Error />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg')
  });
  test('should render "Error" successfully', () => {
    const router = createMockRouter({ query: { error: 'error-validacion-identidad' } });
    render(
      <RouterContext.Provider value={router}>
        <Error />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg')
  });

});
