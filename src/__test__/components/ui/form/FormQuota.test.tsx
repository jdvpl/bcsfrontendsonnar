import { render, screen, getByRole, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'
import FormQuota from '../../../../components/ui/Form/FormQuota';
import Simulator from '../../../../pages/simulador';

const mkFn = jest.fn()
describe('All tests of formQuota', () => {
  let component: any;
  beforeEach(() => {
    component = render(<Simulator />);
  });
  // render(<Simulator />);
  it('should have been rendered the formquota', async () => {
    const btnSalarySimulation = screen.getByTestId('salaryTestBtn');
    await userEvent.click(btnSalarySimulation);
  });
  it('should render 1 element', () => {
    const { container } = render(<FormQuota onSubmit={mkFn} />);
    expect(container.children.length).toBe(1);
  });
  test('contain alert text', () => {
    component.getByText(
      'Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda y la cuota inicial equivalente al 30% restante debe solventarla con recursos propios.'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Simular');
  });
  test('Render 7 inputs ', () => {
    expect(component.container.querySelectorAll('input').length).toBe(7);
  });
});
