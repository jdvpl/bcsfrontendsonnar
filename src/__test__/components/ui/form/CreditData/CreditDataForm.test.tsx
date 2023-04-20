import React from 'react';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { CreditDataForm } from '../../../../../components/ui/Form/CreditData/CreditDataForm';
import { createMockRouter } from '../../../../utils/createMockRouter';
import { routes } from '../../../../../routes';

jest.setTimeout(30000);

describe('<CreditDataForm/>', () => {
  it('should render successfully', () => {
    const router = createMockRouter({});
    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );
    expect(container).toBeTruthy();
  });

  it('should render house type  when choseHouse is true ', async () => {
    const router = createMockRouter({});

    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );
    const ButtonYes = screen.getByTestId('Button-Yes');
    await waitFor(() => userEvent.click(ButtonYes));
    const InputTypeHouse = screen.queryByTestId('InputTypeHouse');
    expect(InputTypeHouse!).toBeInTheDocument();
  });
  it('should render house city  when choseHouse is true ', async () => {
    const router = createMockRouter({});

    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );
    const InputTypeHouse = screen.queryByTestId('InputHouseLocation');
    expect(InputTypeHouse!).toBeInTheDocument();
  });
  it('should render house type  when choseHouse is false ', async () => {
    const router = createMockRouter({});

    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );
    const ButtonYes = screen.getByTestId('Button-Yes');
    await waitFor(() => userEvent.click(ButtonYes));
    const InputTypeHouse = screen.queryByTestId('InputOffices');
    expect(InputTypeHouse!).toBeInTheDocument();
  });
  it('should render house type  when choseHouse is false and fill fields ', async () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );

    const houseValueTest = getByTestId('houseValueTest');
    const valueFinanceTest = getByTestId('valueFinanceTest');
    const termFinance = document.getElementsByName('termFinance')[0];
    const btnSubmitDataForm = getByTestId('btnSubmitDataForm');

    fireEvent.input(houseValueTest, { target: { value: '200000000' } });
    fireEvent.paste(houseValueTest, 'data');
    fireEvent.change(houseValueTest, { target: { value: '1234' } });

    fireEvent.input(valueFinanceTest, { target: { value: '123' } });
    fireEvent.paste(valueFinanceTest, 'data');
    fireEvent.change(valueFinanceTest, { target: { value: '1234' } });

    fireEvent.input(termFinance, { target: { value: '15' } });

    fireEvent.click(btnSubmitDataForm);

    expect(router.push).toHaveBeenCalled();
  });
  it('should render house type  when choseHouse is false ', async () => {
    const router = createMockRouter({});

    const { container } = render(
      <RouterContext.Provider value={router}>
        <CreditDataForm />
      </RouterContext.Provider>
    );

    const ButtonYes = screen.getByTestId('Button-Yes');
    await waitFor(() => userEvent.click(ButtonYes));
    const InputTypeHouse = screen.queryByTestId('InputOffices');
    expect(InputTypeHouse!).toBeInTheDocument();
  });
});
