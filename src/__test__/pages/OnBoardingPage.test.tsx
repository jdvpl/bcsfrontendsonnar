import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
import userEvent from "@testing-library/user-event";
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../routes';
import Bienvenida from '../../pages/bienvenida';
import { createMockRouter } from '../utils/createMockRouter';

describe('Bienvenida', () => {
  test('should render "Bienvenida" successfully', () => {
    const { baseElement } = render(<Bienvenida />);
    expect(baseElement).toBeTruthy();
  });
  test('should goto startprocess', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Bienvenida />
      </RouterContext.Provider>
    );
    await waitFor(() => userEvent.click(screen.getByText('Iniciar solicitud')))
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  })

  test('should goback', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Bienvenida />
      </RouterContext.Provider>
    );
    const getbackRouteTest = screen.getByTestId('getbackRouteTest');
    await waitFor(() => userEvent.click(getbackRouteTest));
    expect(router.back).not.toHaveBeenCalledWith(routes.onboarding)
  })



});
