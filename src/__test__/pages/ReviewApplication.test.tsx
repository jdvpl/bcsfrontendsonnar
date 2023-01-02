import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import router from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../routes';
import ResumenSolicitud from '../../pages/resumen-solicitud/index';
import { createMockRouter } from '../utils/createMockRouter';
import ReviewApplication from '../../components/ui/application/ReviewApplication';

describe('<Resumen-Solicitud/>', () => {
  it('should render successfully', () => {
    const { container } = render(<ResumenSolicitud />);
    expect(container).toBeTruthy();
  });
  it('Buttom continue', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const btnContinue = getByTestId('btn-next');
    await waitFor(() => userEvent.click(btnContinue));
    expect(router.push).toHaveBeenCalledWith(routes.approvalDataPage);
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
  it('Render InsuranceCheck', async () => {
    const props = {
      financedValue: '0',
      fireInsurance: '0',
      lifeInsurance: '0',
      termFinance: '0',
      rate: '0',
      insuranceCheck: true,
    };
    render(<ReviewApplication {...props} />);
    const lifeInsurance = screen.queryByTestId('lifeInsurance');
    await waitFor(() => userEvent.click(lifeInsurance!));
    const fireInsurance = screen.queryByTestId('fireInsurance');
    expect(fireInsurance).not.toBeInTheDocument();
  });
  it('Render InsuranceCheck', async () => {
    const props = {
      financedValue: '0',
      fireInsurance: '0',
      lifeInsurance: '0',
      termFinance: '0',
      rate: '0',
      insuranceCheck: false,
    };
    render(<ReviewApplication {...props} />);
    const fireInsurance = screen.queryByTestId('fireInsurance');
    expect(fireInsurance).not.toBeInTheDocument();
  });

  it('should update state on click', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <ResumenSolicitud />
      </RouterContext.Provider>
    );
    const financedValue = screen.queryByTestId('financedValue');
    await waitFor(() => userEvent.click(financedValue!));
    expect(router.back).not.toHaveBeenCalledWith(routes.ResumenSolicitud);
  });
});
