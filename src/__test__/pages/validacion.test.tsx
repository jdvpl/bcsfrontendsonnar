import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Error from '../../pages/validacion/error-validacion-identidad';
import ErrorBlock from '../../pages/validacion/error-bloqueo';
import ErrorAttempts from '../../pages/validacion/error-numero-intentos';
import ErrorValidacion from '../../pages/validacion/error-validacion';
import Preguntas from '../../pages/validacion/error-validacion-identidad-preguntas';
import Biometria from '../../pages/validacion/error-validacion-biometrica';
import Rechazo from '../../pages/validacion/rechazo-solicitud';
import { createMockRouter } from '../utils/createMockRouter';
import { routes } from '../../routes';
import SiteDown from '../../pages/validacion/error-servicio';

describe('Error', () => {
  test('should render "Error" successfully', () => {
    const router = createMockRouter({
      query: { error: 'validacion/error-validacionIdentidad' },
    });
    render(
      <RouterContext.Provider value={router}>
        <Error />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg');
  });
  test('should render "Error" successfully', () => {
    const router = createMockRouter({
      query: { error: 'validacion/error-validacionIdentidad' },
    });
    render(
      <RouterContext.Provider value={router}>
        <SiteDown />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/siteDown.svg');
  });
  test('should render "ErrorBlock" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-bloqueo' } });
    render(
      <RouterContext.Provider value={router}>
        <ErrorBlock />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg');
  });
  test('should render "ErrorBlock" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-bloqueo' } });
    const { baseElement } = render(
      <RouterContext.Provider value={router}>
        <ErrorBlock />
      </RouterContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render "ErrorAttempts" successfully', () => {
    const router = createMockRouter({
      query: { error: 'validacion/error-numero-intentos' },
    });
    render(
      <RouterContext.Provider value={router}>
        <ErrorAttempts />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion3.svg');
  });

  test('should render "ErrorValidacion" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/error-validacion' } });
    render(
      <RouterContext.Provider value={router}>
        <ErrorValidacion />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/autenticacion1.svg');
  });

  test('should render "Preguntas" successfully', () => {
    const router = createMockRouter({
      query: { error: 'validacion/error-validacion-identidad-preguntas' },
    });
    render(
      <RouterContext.Provider value={router}>
        <Preguntas />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/preautenticacion2.svg');
  });

  test('should render "Rechazo" successfully', () => {
    const router = createMockRouter({ query: { error: 'validacion/rechazo-solicitud' } });
    render(
      <RouterContext.Provider value={router}>
        <Rechazo />
      </RouterContext.Provider>
    );
    const imageError = screen.getByRole('imageError');
    expect(imageError.getAttribute('src')).toBe('/vivienda/images/rechazo.svg');
  });

  test('should render "Biometria" successfully', () => {
    const router = createMockRouter({
      query: { error: 'validacion/error-validacion-biometrica' },
    });
    render(
      <RouterContext.Provider value={router}>
        <Biometria />
      </RouterContext.Provider>
    );
    const textQR = screen.getByText(/Escanee el código QR, o ingrese a este link/i);
    expect(textQR).toBeInTheDocument();
  });

  test('should "ErrorAttempts" got to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <ErrorAttempts />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  test('should "ErrorBlock" got to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <ErrorBlock />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  test('should "Preguntas" go to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <Preguntas />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  test('should "ErrorValidacion" go to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <ErrorValidacion />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  test('should "Error" go to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <Error />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  });
  test('should "Error" go to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <SiteDown />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(routes.home);
  });
  test('should "Rechazo" go to other page', async () => {
    const router = createMockRouter({});
    const { findByTestId } = render(
      <RouterContext.Provider value={router}>
        <Rechazo />
      </RouterContext.Provider>
    );
    const btnOnboarding = await findByTestId('btnOnboarding');
    fireEvent.click(btnOnboarding);
    expect(router.push).toHaveBeenCalledWith(
      'https://www.bancocajasocial.com/portalserver/Ubiquenos'
    );
  });
});
