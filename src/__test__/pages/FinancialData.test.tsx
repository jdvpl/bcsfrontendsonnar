import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react'
import FinancialData from '../../pages/datos-financieros';
import { createMockRouter } from '../utils/createMockRouter';
import { routes } from '../../routes';


describe('FinancialData', () => {
  it('should render "FinancialData" successfully', () => {
    const router = createMockRouter({});
    const { baseElement } = render(
      <RouterContext.Provider value={router}>
        <FinancialData />
      </RouterContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
  test('should go To other page', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <FinancialData />
      </RouterContext.Provider>
    );
    const occupation = document.getElementsByName("occupation")[0];
    const monthlySalaryTest = screen.getByTestId('monthlySalaryTest');

    const monthlyExpensesTest = screen.getByTestId('monthlyExpensesTest');
    const realStateValueTest = screen.getByTestId('realStateValueTest');
    const debtValueTest = screen.getByTestId('debtValueTest');

    fireEvent.input(occupation, { target: { value: '05' } });
    fireEvent.input(monthlySalaryTest, { target: { value: '1018422010' } });
    fireEvent.paste(monthlySalaryTest, "data");


    fireEvent.input(monthlyExpensesTest, { target: { value: '2000000' } });
    fireEvent.paste(monthlyExpensesTest, "data");

    fireEvent.input(realStateValueTest, { target: { value: '30000000' } });
    fireEvent.paste(realStateValueTest, "data");

    fireEvent.input(debtValueTest, { target: { value: '3000000' } });
    fireEvent.paste(debtValueTest, "data");

    expect(occupation.tagName).toMatch('INPUT')
    expect(monthlySalaryTest.tagName).toMatch('INPUT')
    const btnFinancialData = screen.getByTestId('btnFinancialDataTest');
    await waitFor(() => userEvent.click(btnFinancialData));
    expect(router.push).toHaveBeenCalledWith(routes.creditData);
  })
  test('should open the year and other inputs `Empleado`', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <FinancialData />
      </RouterContext.Provider>
    );
    const occupation = document.getElementsByName("occupation")[0];
    fireEvent.input(occupation, { target: { value: '14' } });
    const contractType = document.getElementsByName("contractType")[0];
    const enterpriseTest = screen.queryByTestId('enterpriseTest');
    const employeeYearTest = screen.queryByTestId('employeeYearTest');
    const employeeMonthTest = screen.queryByTestId('employeeMonthTest');

    const monthlySalaryTest = screen.getByTestId('monthlySalaryTest');
    const monthlyExpensesTest = screen.getByTestId('monthlyExpensesTest');
    const realStateValueTest = screen.getByTestId('realStateValueTest');
    const debtValueTest = screen.getByTestId('debtValueTest');

    fireEvent.input(enterpriseTest!, { target: { value: 'BCS' } });
    fireEvent.paste(enterpriseTest!, "data");

    fireEvent.input(contractType, { target: { value: '01' } });

    fireEvent.input(employeeYearTest!, { target: { value: '10' } });
    fireEvent.paste(employeeYearTest!, "data");

    fireEvent.input(employeeMonthTest!, { target: { value: '10' } });
    fireEvent.paste(employeeMonthTest!, "data");

    fireEvent.input(monthlySalaryTest, { target: { value: '5000000' } });
    fireEvent.paste(monthlySalaryTest, "data");

    fireEvent.input(monthlyExpensesTest, { target: { value: '2000000' } });
    fireEvent.paste(monthlyExpensesTest, "data");

    fireEvent.input(realStateValueTest, { target: { value: '30000000' } });
    fireEvent.paste(realStateValueTest, "data");

    fireEvent.input(debtValueTest, { target: { value: '3000000' } });
    fireEvent.paste(debtValueTest, "data");

    const btnFinancialData = screen.getByTestId('btnFinancialDataTest');
    await waitFor(() => userEvent.click(btnFinancialData));
    expect(router.push).toHaveBeenCalledWith(routes.creditData);
  })
  test('should open the year and other inputs `Empleado`', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <FinancialData />
      </RouterContext.Provider>
    );
    const occupation = document.getElementsByName("occupation")[0];
    fireEvent.input(occupation, { target: { value: '14' } });
    const contractType = document.getElementsByName("contractType")[0];
    const enterpriseTest = screen.queryByTestId('enterpriseTest');
    const employeeYearTest = screen.queryByTestId('employeeYearTest');
    const employeeMonthTest = screen.queryByTestId('employeeMonthTest');

    const monthlySalaryTest = screen.getByTestId('monthlySalaryTest');
    const monthlyExpensesTest = screen.getByTestId('monthlyExpensesTest');
    const realStateValueTest = screen.getByTestId('realStateValueTest');
    const debtValueTest = screen.getByTestId('debtValueTest');

    fireEvent.input(enterpriseTest!, { target: { value: 'BCS' } });
    fireEvent.paste(enterpriseTest!, "data");

    fireEvent.input(contractType, { target: { value: '06' } });

    fireEvent.input(employeeYearTest!, { target: { value: '10' } });
    fireEvent.paste(employeeYearTest!, "data");

    fireEvent.input(employeeMonthTest!, { target: { value: '10' } });
    fireEvent.paste(employeeMonthTest!, "data");

    fireEvent.input(monthlySalaryTest, { target: { value: '5000000' } });
    fireEvent.paste(monthlySalaryTest, "data");

    fireEvent.input(monthlyExpensesTest, { target: { value: '2000000' } });
    fireEvent.paste(monthlyExpensesTest, "data");

    fireEvent.input(realStateValueTest, { target: { value: '30000000' } });
    fireEvent.paste(realStateValueTest, "data");

    fireEvent.input(debtValueTest, { target: { value: '3000000' } });
    fireEvent.paste(debtValueTest, "data");

    const btnFinancialData = screen.getByTestId('btnFinancialDataTest');
    await waitFor(() => userEvent.click(btnFinancialData));
    expect(router.push).toHaveBeenCalledWith(routes.errorCreditBankApplication);
  })
});