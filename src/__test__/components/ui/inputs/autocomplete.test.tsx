import { render, waitFor, screen } from '@testing-library/react';
import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import offices from '../../../../lib/officies.json';
import AutoCompleteCustom from '../../../../hooks/autocomplete';
const mockHandler = jest.fn();
const renderComponent = () =>
  render(
    <AutoCompleteCustom
      arrayOptions={offices}
      label="NewAutoComplete"
      name="NewAutoComplete"
      onChange={mockHandler}
    />
  );
describe('auto complete component', () => {
  beforeEach(() => renderComponent());
  it('Should render the component', async () => {
    const componentWrapper = screen.getByTestId('searchAutocomplete');
    const autoCompleteLabel = screen.getByLabelText(/newautocomplete/i);
    const input = screen.getByRole('combobox', {
      name: /newautocomplete/i,
    });
    const button = screen.getByRole('button', {
      name: /open/i,
    });
    expect(input).toBeInTheDocument();
    expect(componentWrapper).toBeInTheDocument();
    expect(autoCompleteLabel).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('should display options when user types the field', async () => {
    const input = screen.getByRole('combobox', {
      name: /newautocomplete/i,
    });

    await waitFor(() => {
      userEvent.type(input, 'bog');
    });
  });
});
