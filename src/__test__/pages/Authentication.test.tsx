import 'jest-canvas-mock';
import { render, waitFor, screen } from '@testing-library/react';
import Authentication from '../../pages/autenticacion';
import React from 'react'
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from "@testing-library/user-event";
import { routes } from '../../routes';

describe('Authentication', () => {
  it('should render "Authentication" successfully', () => {
    const { baseElement } = render(<Authentication />);
    expect(baseElement).toBeTruthy();
  });


  test('should goback', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Authentication />
      </RouterContext.Provider>
    );
    const getbackRouteTest = screen.getByTestId('getbackRouteTest');
    await waitFor(() => userEvent.click(getbackRouteTest));
  })
  test('should goback', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Authentication />
      </RouterContext.Provider>
    );
    const identityValidation = screen.getByTestId('btnOnboarding');
    await waitFor(() => userEvent.click(identityValidation));
    expect(router.push).toHaveBeenCalledWith(routes.errorValidacion);
  })



});
