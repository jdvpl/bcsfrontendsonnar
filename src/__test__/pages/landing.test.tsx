import { render, screen } from '@testing-library/react';
import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from "@testing-library/user-event";
import Home from '../../pages';
import { createMockRouter } from '../utils/createMockRouter';
import { routes } from '../../routes';

describe('Landing page testing', () => {
  test('should render "Politicas" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } =render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
  test('should goTo consultancy page', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );
    const consultancyTestBtn = screen.getByTestId('consultancyTestBtn');
    await userEvent.click(consultancyTestBtn)
    expect(router.push).toHaveBeenCalledWith(routes.consultancy);
  })
  test('should goTo simulador page', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );
    const simuladorTestBtn = screen.getByTestId('simuladorTestBtn');
    await userEvent.click(simuladorTestBtn)
    expect(router.push).toHaveBeenCalledWith(routes.simulador);
  })
  test('should goTo onboarding page', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );
    const soliciteTestBtn = screen.getByTestId('SoliciteTest');
    await userEvent.click(soliciteTestBtn)
    expect(router.push).toHaveBeenCalledWith(routes.onboarding);
  })


})
