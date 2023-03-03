import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../routes';
import ResumenSolicitud from '../../pages/resumen-solicitud/index';
import { createMockRouter } from '../utils/createMockRouter';
import 'jest-canvas-mock';
import React from 'react'

const fcMk = jest.fn();
describe('<Resumen-Solicitud/>', () => {
  it('should render successfully', () => {
    const router = createMockRouter({});

    const { container } = render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    expect(container).toBeTruthy();
  });
  it('Buttom continue', async () => {
    const router = createMockRouter({});

    const component = render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const btnContinue = component.getByTestId('btn-next');
    await waitFor(() => userEvent.click(btnContinue));
    // expect(component.container.querySelector('#message-loader')).toBeTruthy();
  });
  it('Buttom exit', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const btnExit = getByTestId('btn-exit');
    await waitFor(() => userEvent.click(btnExit));
    expect(router.push).toHaveBeenCalledWith(routes.home);
  });
});
