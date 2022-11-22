import { render, screen } from '@testing-library/react';
import FormQuota from '../components/ui/Form/FormQuota';
import userEvent from "@testing-library/user-event";
import Simulator from '../pages/simulador';
import { iFormDataSimulation } from '../interfaces';
// import '@testing-library/jest-dom/extend-expect'

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


});
