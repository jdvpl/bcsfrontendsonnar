import { render, screen, getByRole, waitFor } from '@testing-library/react';
import FormQuota from '../components/ui/Form/FormQuota';
import userEvent from '@testing-library/user-event';
import Simulator from '../pages/simulador';
import React from 'react';
import { debug } from 'console';
const mkFn = jest.fn();
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
  it('should select vis from select', async () => {
    render(<FormQuota onSubmit={mkFn} />);
    userEvent.click(getByRole(screen.getByTestId('typeHouseSalaryTest'), 'button'));
    await waitFor(() => userEvent.click(screen.getByTestId('typeHouseSalaryTest')));
    expect(screen.queryByTestId('typeSalaryVisTest')?.children.length).toBe(1);
  });
  test('contain alert text', () => {
    component.getByText(
      'Recuerde que la financiación del crédito hipotecario es hasta el 70% del valor comercial de la vivienda y la cuota inicial equivalente al 30% restante debe solventarla con recursos propios.'
    );
  });
  test('Render simulation button', () => {
    component.getByText('Simular');
  });
  test('Render simulation insurance text', () => {
    component.getByText(
      'Deseo incluir en la simulación del crédito el valor de los seguros correspondientes.'
    );
  });
  test('Render 8 inputs ', () => {
    expect(component.container.querySelectorAll('input').length).toBe(8);
  });
});
