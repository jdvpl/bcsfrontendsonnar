import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResumenSolicitud from '../../pages/resumen-solicitud/index'
import userEvent from '@testing-library/user-event';
import router from 'next/router';
import { routes } from '../../routes';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

describe('<Resumen-Solicitud/>', () => {
    it('should render successfully', () => {
      const { container } = render(<ResumenSolicitud />);
      expect(container).toBeTruthy();
    });
  });

  it('Buttom continue', async () => {
    const router = createMockRouter({});
    const { getByTestId } =
    render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const btnContinue = getByTestId('btn-next');
    await waitFor(() => userEvent.click(btnContinue));
    expect(router.push).toHaveBeenCalledWith(routes.approvalDataPage)
  });
  it('Buttom exit', async () => {
    const router = createMockRouter({});
    const { getByTestId } =
    render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const btnExit = getByTestId('btn-exit');
    await waitFor(() => userEvent.click(btnExit));
    expect(router.push).toHaveBeenCalledWith(routes.home)
  });