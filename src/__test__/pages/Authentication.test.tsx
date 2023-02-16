import 'jest-canvas-mock';
import { render, waitFor, screen } from '@testing-library/react';
import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from "@testing-library/user-event";
import { createMockRouter } from '../utils/createMockRouter';
import Authentication from '../../pages/autenticacion';
jest.mock('../../services', () => ({
  getQuestions: jest.fn(),
}));
describe('Authentication', () => {
  it('should render "Authentication" successfully', () => {
    const router = createMockRouter({});

    const { baseElement } = render(
      <RouterContext.Provider value={router}>
        <Authentication />
      </RouterContext.Provider>
    );
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
  })



});
