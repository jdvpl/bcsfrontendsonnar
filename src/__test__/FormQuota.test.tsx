<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
=======
import { render, screen, getByRole, waitFor } from '@testing-library/react';
import FormQuota from '../components/ui/Form/FormQuota';
>>>>>>> 11eb09b29ee4d96c7eccbdfcd6c2f202e8422486
import userEvent from "@testing-library/user-event";
import FormQuota from '../components/ui/Form/FormQuota';
import Simulator from '../pages/simulador';
import React from 'react'
import { debug } from 'console';
const mkFn = jest.fn()
describe('All tests of formQuota', () => {
  render(<Simulator />)
  it('should have been rendered the formquota', async () => {
    const btnSalarySimulation = screen.getByTestId('salaryTestBtn');
    await userEvent.click(btnSalarySimulation);
  })
  it('should render 1 element', () => {
    const { container } = render(<FormQuota onSubmit={mkFn} />);
    expect(container.children.length).toBe(1)
  })
  it('should select vis from select', async () => {
    render(<FormQuota onSubmit={mkFn} />);
    userEvent.click(getByRole(screen.getByTestId("typeHouseSalaryTest"), "button"));
    await waitFor(() => userEvent.click(screen.getByTestId('typeHouseSalaryTest')));
    expect(screen.queryByTestId('typeSalaryVisTest')?.children.length).toBe(1)

  })



});
