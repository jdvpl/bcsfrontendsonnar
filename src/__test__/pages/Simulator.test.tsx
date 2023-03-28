import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Simulator from '../../pages/simulador';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';

jest.setTimeout(30000);

describe('All tests of formQuota', () => {
  test('Simulator should update simulatioTypeOption state when clicking on salary or house simulation buttons', async () => {
    const { getByTestId } = render(<Simulator />);
    const salaryTestBtn = getByTestId('salaryTestBtn');
    await userEvent.click(salaryTestBtn);
    const salaryForm = getByTestId('FormQuotaTest');
    expect(salaryForm).toBeInTheDocument();
  });
  test('Simulator should update simulatioTypeOption state when clicking on house simulation button', async () => {
    const { getByTestId } = render(<Simulator />);
    const houseTestBtn = getByTestId('houseTestBtn');
    await userEvent.click(houseTestBtn);
    const houseForm = getByTestId('houseSimulatorForTest');
    expect(houseForm).toBeInTheDocument();
  });
  test('should fill each one of the field', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Simulator />
      </RouterContext.Provider>
    );
    const salaryTestBtn = getByTestId('salaryTestBtn');
    await userEvent.click(salaryTestBtn);
    const selectBtn = document.getElementsByName('typeHouse')[0];
    const monthlySalaryTest = getByTestId('monthlySalaryTest');
    const amountQuotaTest = getByTestId('amountQuotaTest');
    const termFinance = document.getElementsByName('termFinance')[0];

    const day = document.getElementsByName('day')[0];
    const month = document.getElementsByName('month')[0];
    const year = getByTestId('yearDateOfBithTest');

    fireEvent.input(selectBtn, { target: { value: 'vis' } });
    fireEvent.change(selectBtn, { target: { value: 'novis' } });
    fireEvent.change(monthlySalaryTest, { target: { value: '2000000' } });
    fireEvent.input(monthlySalaryTest, { target: { value: '1500000' } });
    fireEvent.paste(monthlySalaryTest, 'data');
    fireEvent.change(amountQuotaTest, { target: { value: '2000000' } });
    fireEvent.input(amountQuotaTest, { target: { value: '1500000' } });
    fireEvent.paste(amountQuotaTest, 'data');
    fireEvent.input(termFinance, { target: { value: '8' } });
    fireEvent.change(termFinance, { target: { value: '10' } });

    fireEvent.change(day, { target: { value: '08' } });
    fireEvent.change(month, { target: { value: '08' } });
    fireEvent.change(year, { target: { value: '1999' } });

    const btnOpenQuotaSimulation = getByTestId('btnOpenQuotaSimulation');

    await waitFor(() => userEvent.click(btnOpenQuotaSimulation));
    expect(router.push).toHaveBeenCalledTimes(0);
  });
  test('should fill each one of the field on house similation', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Simulator />
      </RouterContext.Provider>
    );

    const selectBtn = document.getElementsByName('typeHouse')[0];
    const rentValueTest = getByTestId('rentValueTest');
    const valueFinanceTest = getByTestId('valueFinanceTest');
    const termFinance = document.getElementsByName('termFinance')[0];

    const day = document.getElementsByName('day')[0];
    const month = document.getElementsByName('month')[0];
    const year = getByTestId('yearDateOfBithTest');

    fireEvent.input(selectBtn, { target: { value: 'vis' } });
    fireEvent.change(selectBtn, { target: { value: 'novis' } });

    fireEvent.change(rentValueTest, { target: { value: '200000000' } });
    fireEvent.input(rentValueTest, { target: { value: '150000000' } });
    fireEvent.paste(rentValueTest, 'data');

    fireEvent.change(valueFinanceTest, { target: { value: '200000000' } });
    fireEvent.input(valueFinanceTest, { target: { value: '150000000' } });
    fireEvent.paste(valueFinanceTest, 'data');

    fireEvent.input(termFinance, { target: { value: '8' } });
    fireEvent.change(termFinance, { target: { value: '10' } });

    fireEvent.change(day, { target: { value: '08' } });
    fireEvent.change(month, { target: { value: '08' } });
    fireEvent.change(year, { target: { value: '1999' } });

    const btnOpenQuotaSimulation = getByTestId('btnOpenQuotaSimulation');

    await waitFor(() => userEvent.click(btnOpenQuotaSimulation));
    expect(router.push).toHaveBeenCalledTimes(0);
  });

  test('does not call setdataFormResponse or useRouter.push if sendSimulationData returns an error', async () => {
    const sendSimulationDataMock = jest.fn(() => ({
      error: true,
    }));
    const setdataFormResponseMock = jest.fn();
    const useRouterMock = {
      push: jest.fn(),
    };

    const formData = {
      typeHouse: 'salary',
      termFinance: '30 años',
      dateOfBirth: '1995-01-01',
      monthlySalary: '1000000',
      amountQuota: '30000',
      percentageQuota: '20',
    };
    const { getByTestId } = render(<Simulator />);
    const salaryTestBtn = getByTestId('salaryTestBtn');
    await userEvent.click(salaryTestBtn);
    fireEvent.submit(getByTestId('formTestId'), {
      preventDefault: () => {},
      target: formData,
    });
    expect(sendSimulationDataMock).toHaveBeenCalledTimes(0);
    expect(setdataFormResponseMock).not.toHaveBeenCalled();
    expect(useRouterMock.push).not.toHaveBeenCalled();
  });
});
