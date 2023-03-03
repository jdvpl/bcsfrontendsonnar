import { fireEvent, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react'
import { InactivityModal } from '../../../../../components/ui/Modal/inactivityModal/index';
import { createMockRouter } from '../../../../utils/createMockRouter';
import '@testing-library/jest-dom';
import { routes } from '../../../../../routes';

describe('<HouseSimuInactivityModallator />', () => {

  test('contain alert text', () => {
    const component = render(<InactivityModal />);
    component.getByText('Ha estado inactivo en los últimos minutos');
  });
  test('Render simulation button', () => {
    const component = render(<InactivityModal />);
    component.getByText('Continuar');
  });
  test('Render simulation button', () => {
    const component = render(<InactivityModal />);

    component.getByText('Salir');
  });
  test('should go another page', () => {
    const router = createMockRouter({});
    const { getByRole } = render(
      <RouterContext.Provider value={router}>
        <InactivityModal />
      </RouterContext.Provider>);
    const btn = getByRole("btnGotoHome");
    fireEvent.click(btn);
    expect(router.push).toHaveBeenCalledWith(routes.home)

  })
});
