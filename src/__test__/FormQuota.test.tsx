import { render, screen, getByRole, waitFor } from '@testing-library/react';
import FormQuota from '../components/ui/Form/FormQuota';
import userEvent from "@testing-library/user-event";
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
