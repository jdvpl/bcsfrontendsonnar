import 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import { Otp } from '../components/custom/otp/index';

describe('Otp', () => {
  it('should render "Otp" successfully', () => {
    const { baseElement } = render(<Otp />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text', () => {
    render(<Otp />);
    expect(screen.getByTestId('h4OtpText').textContent).toMatch(
      /ingrese el código enviado por/i
    );
  });

  it('should render the text resend code', () => {
    const component = render(<Otp />);
    component.getByText('Volver a enviar código en')
  });

  it('should render otp inputs', () => {
    const component = render(<Otp />);
    const inputs =component.container.querySelectorAll('input');
    expect(inputs.length).toBe(6);
  });
});
