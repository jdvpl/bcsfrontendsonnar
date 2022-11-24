import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import { Otp } from '../components/custom/otp/index';

describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<Otp />);
    expect(baseElement).toBeTruthy();
  });

});
