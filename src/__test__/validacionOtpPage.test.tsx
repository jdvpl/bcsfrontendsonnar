import 'jest-canvas-mock';
import { render, screen } from '@testing-library/react';
import ValidacionSolicitud from '../pages/validacion-otp/index';

describe('ValidacionSolicitud', () => {
  it('should render "ValidacionSolicitud" successfully', () => {
    const { baseElement } = render(<ValidacionSolicitud />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the text resend code', () => {
    const component = render(<ValidacionSolicitud />);
    component.getByText('Volver a enviar código en')
  });

  it('should render ValidacionSolicitud inputs', () => {
    const component = render(<ValidacionSolicitud />);
    const inputs =component.container.querySelectorAll('input');
    expect(inputs.length).toBe(6);
  });
});
