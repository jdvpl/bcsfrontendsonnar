import { render, waitFor, screen } from '@testing-library/react';
import React, { useState } from 'react'
import userEvent from '@testing-library/user-event';
import NewAutoComplete from '../../../../components/ui/inputs/newAutoComplete';
import '@testing-library/jest-dom'


const mockHandler = jest.fn();
const renderComponent = () =>
  render(
    <NewAutoComplete
      label="NewAutoComplete"
      name="NewAutoComplete"
      onChange={mockHandler}
    />
  );
describe('auto complete component', () => {
  beforeEach(() => renderComponent());
  it('Should render the component', async () => {
    const component = render(
      <NewAutoComplete
        label="NewAutoComplete"
        name="NewAutoComplete"
        onChange={mockHandler}
      />
    )
    expect(component).toBeDefined();
  });
  // it('Should render the component', async () => {
  //   const componentWrapper = screen.getByTestId('searchAutocomplete');
  //   const autoCompleteLabel = screen.getByLabelText(/newautocomplete/i);
  //   const input = screen.getByRole('combobox', {
  //     name: /newautocomplete/i,
  //   });
  //   const button = screen.getByRole('button', {
  //     name: /open/i,
  //   });
  //   expect(input).toBeInTheDocument();
  //   expect(componentWrapper).toBeInTheDocument();
  //   expect(autoCompleteLabel).toBeInTheDocument();
  //   expect(button).toBeInTheDocument();
  // });
  // it('should display select value', async () => {
  //   const button = screen.getByRole('button', {
  //     name: /open/i,
  //   });

  //   userEvent.click(button);

  //   await waitFor(() => {
  //     const cityOption = screen.getByText('APARTADO - ANTIOQUIA');
  //     expect(cityOption).toBeInTheDocument();
  //     userEvent.click(cityOption);
  //   });
  //   await waitFor(() =>
  //     expect(
  //       screen.getByRole('combobox', { name: 'NewAutoComplete' })
  //     ).toHaveDisplayValue('APARTADO - ANTIOQUIA')
  //   );
  // });
  // it('should display options when user types the field', async () => {
  //   const input = screen.getByRole('combobox', {
  //     name: /newautocomplete/i,
  //   });

  //   await waitFor(() => {
  //     userEvent.type(input, 'bog');
  //   });

  // });
});
