import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Stepper from '../../src//components/ui/Stepper';
describe('Visibility of all steps', () => {
  it('render step 1 active', () => {
    render(<Stepper step="1" />);
    if (document.getElementById('stepNumber')) {
      const step = screen.getByTestId('stepNumber');

      expect(step.innerHTML).toContain('1');
    }
  });
  it('render step 2 active', () => {
    render(<Stepper step="2" />);
    const step = screen.getByTestId('stepNumber');
    expect(step.innerHTML).toContain('2');
  });
  it('render step 3 active', () => {
    render(<Stepper step="3" />);
    const step = screen.getByTestId('stepNumber');
    expect(step.innerHTML).toContain('3');
  });
  it('render title', () => {
    render(<Stepper title="Validación de identidad" />);
    const title = screen.getByTestId('titleStep');
    expect(title.innerHTML).toBe('Validación de identidad');
  });
  it('render incomplete 1', () => {
    render(<Stepper incomplete="1" />);
    const title = screen.getByTestId('stepNumber');
    expect(title.innerHTML).toContain('1');
  });
});
