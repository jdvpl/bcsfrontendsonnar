import { render, screen } from '@testing-library/react';
import React from 'react'
import userEvent from "@testing-library/user-event";
import InicioSolicitud from '../pages/inicio-solicitud';

describe('InicioSolicitud', () => {
  it('should render "InicioSolicitud" successfully', () => {
    const { baseElement } = render(<InicioSolicitud />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the button disabled', () => {
    render(<InicioSolicitud />);
    const btnDisabled = screen.getByTestId('btn-openAccount1');
    expect(btnDisabled.getAttribute('disabled')).toBe("")
  });


});
