import { getByRole, render, screen, waitFor } from '@testing-library/react';
import DateOfBirth from '../components/ui/inputs/dateOfBirth';
import userEvent from "@testing-library/user-event";
import React from 'react'

const mkFn = jest.fn()
describe('dateOfBirth testing', () => {

  it('should dateOfBirth component rendered', () => {
    render(<DateOfBirth
      defaultValues={undefined}
      onChangeDate={mkFn} />);
    const component = screen.getByTestId('birth');
    expect(component.children.length).toBe(3);
  })
  test('should render the year', async () => {
    render(<DateOfBirth
      defaultValues={undefined}
      onChangeDate={mkFn} />);
    userEvent.click(getByRole(screen.getByTestId("dayDateOfBithTest"), "button"));
    await waitFor(() => userEvent.click(screen.getByText(/27/i)));
    // expect(screen.getByText("27")).toHaveTextContent(/27/i);

    // fireEvent.change(dayDateOfBithTest, { target: { value: "3" } });
    // userEvent.selectOptions(dayDateOfBithTest, "27");
    // userEvent.selectOptions(monthDateOfBithTest, "05");
    // userEvent.type(yearDateOfBithTest, '1995');
    // expect(messageErrorDateOfBirth).not.toBeInTheDocument()
  })
})
