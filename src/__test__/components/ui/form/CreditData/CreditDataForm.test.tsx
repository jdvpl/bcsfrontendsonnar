import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreditDataForm } from '../../../../../components/ui/Form/CreditData/CreditDataForm';
import userEvent from '@testing-library/user-event';

describe('<CreditDataForm/>', () => {
  it('should render successfully', () => {
    const { container } = render(<CreditDataForm />);
    expect(container).toBeTruthy();
  });

  it('should render house type  when choseHouse is true ', async () => {
    const { container } = render(<CreditDataForm />);
    const ButtonYes = screen.getByTestId('Button-Yes');
    await waitFor(() => userEvent.click(ButtonYes));
    const InputTypeHouse = screen.queryByTestId('InputTypeHouse');
    expect(InputTypeHouse!).toBeInTheDocument();
  });
  it('should render house type  when choseHouse is false ', async () => {
    const { container } = render(<CreditDataForm />);
    const ButtonNo = screen.getByTestId('Button-No');
    await waitFor(() => userEvent.click(ButtonNo));
    const InputTypeHouse = screen.queryByTestId('InputTypeHouse');
    expect(InputTypeHouse!).not.toBeInTheDocument();
  });
});
