import 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import { Otp } from '../components/custom/otp/index';

describe('Otp', () => {
  it('should render "Otp" successfully', () => {
    const { baseElement } = render(<Otp />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text', () => {
    render(<Otp />)
    expect(screen.getByTestId('h4OtpText').textContent).toMatch(/ingrese el código enviado por/i)
  })

});
