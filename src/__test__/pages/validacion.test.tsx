import { render, screen } from '@testing-library/react';
import Error from '../../pages/validacion/error-validacionIdentidad';
import ErrorBlock from '../../pages/validacion/error-bloqueo'
import ErrorAttempts from '../../pages/validacion/error-numero-intentos'
import ErrorValidacion from '../../pages/validacion/error-validacion'
import Mantenimiento from '../../pages/mantenimiento';
import Preguntas from '../../pages/validacion/error-validacion-identidad-preguntas'
import Biometria from '../../pages/validacion/error-validacion-biometrica'
import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';
import '@testing-library/jest-dom'


describe('Error', () => {
  test('should render "Error" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-validacionIdentidad' } });
    render(
      <RouterContext.Provider value={router}>
        <Error />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg')
  });

  test('should render "ErrorBlock" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-bloqueo' } });
    render(
      <RouterContext.Provider value={router}>
        <ErrorBlock />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg')
  });

  test('should render "ErrorAttempts" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-numero-intentos' } });
    render(
      <RouterContext.Provider value={router}>
        <ErrorAttempts />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion3.svg')
  });

  test('should render "ErrorValidacion" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-validacion' } });
    render(
      <RouterContext.Provider value={router}>
        <ErrorValidacion />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg')
  });

  test('should render "Mantenece" successfully', () => {
    const router = createMockRouter({ query: { error: 'mantenimiento' } });
    render(
      <RouterContext.Provider value={router}>
        <Mantenimiento />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/newError.svg')
  });

  test('should render "Preguntas" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-validacion-identidad-preguntas' } });
    render(
      <RouterContext.Provider value={router}>
        <Preguntas />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/preautenticacion2.svg')
  });

  test('should render "Biometria" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-validacion-biometrica' } });
    render(
      <RouterContext.Provider value={router}>
        <Biometria />
      </RouterContext.Provider>
    );
    const textQR = screen.getByText(/Escanee el código QR, o ingrese a este link/i);
    expect(textQR).toBeInTheDocument();
  });

});
