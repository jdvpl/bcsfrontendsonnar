import { render, screen } from '@testing-library/react';
import FormQuota from '../components/ui/Form/FormQuota';
import userEvent from "@testing-library/user-event";
import Simulator from '../pages/simulador';

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
  it('should render 1 element', () => {
    render(<FormQuota onSubmit={mkFn} />);
    expect(screen.getByText('Fecha de nacimiento:')).toBeInTheDocument()
  })


});
