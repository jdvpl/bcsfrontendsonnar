import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import ApplicationApproval from '../../pages/confirmacion-solicitud';
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from '../../routes';


describe('<ApplicationApproval/>', () => {
  it('should render "Authentication" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } = render(
      <RouterContext.Provider value={router}>
        <ApplicationApproval />
      </RouterContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should get out', () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <ApplicationApproval />
      </RouterContext.Provider>
    );
    const btnGetOut = getByTestId('btnGetOut');
    fireEvent.click(btnGetOut);
    expect(router.push).toHaveBeenCalledWith(routes.home);
  });
  it('should not show the modal', async () => {
    const router = createMockRouter({
      query: { 'confirmacion-solicitud': 'confirmacion-solicitud/#' },
    });
    const { queryByTestId, getByTestId } = render(
      <RouterContext.Provider value={router}>
        <ApplicationApproval modalExit={true} />
      </RouterContext.Provider>
    );
    const modalDataTest = queryByTestId('modalDataTest');
    expect(modalDataTest!).toBeInTheDocument();
    const btnClose = queryByTestId('btn-close');
    fireEvent.click(btnClose!);
    window.history.back();
    const getbackRouteTest = getByTestId('getbackRouteTest');
    fireEvent.click(getbackRouteTest);
    expect(modalDataTest!).not.toBeInTheDocument();
  });
});
