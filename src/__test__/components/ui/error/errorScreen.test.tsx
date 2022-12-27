import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from "@testing-library/user-event";
import { createMockRouter } from '../../../utils/createMockRouter';
import ErrorScreen from '../../../../components/ui/error/errorScreen';
import { routes } from '../../../../routes';

describe('ErrorScreen', () => {
  test('should render "ErrorScreen" successfully', () => {
    const { baseElement } = render(<ErrorScreen urlsvg="" title={undefined} text={undefined} textbtn={' '} ImgClass={''} />);
    expect(baseElement).toBeTruthy();
  });
  test('should goback', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <ErrorScreen btnactivate urlsvg="" title={undefined} text={undefined} textbtn="" ImgClass={''} />
      </RouterContext.Provider>
    );
    const getbackRouteTest = screen.getByTestId('getbackRouteTest');
    await waitFor(() => userEvent.click(getbackRouteTest));
  })
  test('should goto startprocess', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <ErrorScreen btnactivate urlsvg="" title={undefined} text={undefined} textbtn="" ImgClass={''} />
      </RouterContext.Provider>
    );
    await waitFor(() => userEvent.click(screen.getByTestId('btnOnboarding')))
    expect(router.push).toHaveBeenCalledWith(routes.startProccess);
  })

});
