import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreditData from '../../pages/datos-credito';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

describe('<PersonalDataBasic/>', () => {
  it('should render successfully', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditData />
      </RouterContext.Provider>
    );
    expect(container).toBeTruthy();
  });
  it('should render successfully', () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <CreditData />
      </RouterContext.Provider>
    );
    const typeHouse = document.getElementsByName("typeHouse")[0];
    const houseStatus = document.getElementsByName("houseStatus")[0];

    const houseValueTest = getByTestId('houseValueTest');
    const valueFinanceTest = getByTestId('valueFinanceTest');
    const termFinance = document.getElementsByName("termFinance")[0];
    const stratum = document.getElementsByName("stratum")[0];
    const amortizationType = document.getElementsByName("amortizationType")[0];



    fireEvent.change(typeHouse, { target: { value: 'CC' } });
    fireEvent.change(typeHouse, { target: { value: 'CC' } });
    fireEvent.input(houseStatus, { target: { value: '1018422010' } });

  });
});
