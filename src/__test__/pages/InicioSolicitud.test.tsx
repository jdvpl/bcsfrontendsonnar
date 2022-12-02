import { waitFor, render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react'
import InicioSolicitud from '../../pages/inicio-solicitud';
import userEvent from '@testing-library/user-event';
import { FormData, RegisterForm } from '../../components/ui/Form';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';

jest.mock('../../hooks/useAES')
const mkFn = jest.fn()
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

  test('should goTopre logon', async () => {
    render(<InicioSolicitud />);
    await waitFor(() => userEvent.click(screen.getByRole('typeDocumentRole')));
  })

});
