<<<<<<< HEAD
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import DateOfBirth from '../components/ui/inputs/dateOfBirth';
=======
import { getByRole, render, screen, waitFor } from '@testing-library/react';
import DateOfBirth from '../components/ui/inputs/dateOfBirth';
import userEvent from "@testing-library/user-event";
import React from 'react'
>>>>>>> 11eb09b29ee4d96c7eccbdfcd6c2f202e8422486

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
