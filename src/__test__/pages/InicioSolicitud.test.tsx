import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import InicioSolicitud from '../../pages/inicio-solicitud';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/createMockRouter';
import { routes } from '../../routes';

jest.mock('../../hooks/useAES')


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
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <InicioSolicitud />
      </RouterContext.Provider>
    );
    const selectBtn = document.getElementsByName("document_type")[0];
    const inputDocument = screen.getByTestId('inputDocument');
    const inputCheck = screen.getByTestId('chk_policy_and_terms');
    const chkterminos = screen.getByTestId('chkterminos');
    fireEvent.input(selectBtn, { target: { value: 'CC' } });
    fireEvent.input(inputDocument, { target: { value: '1018422010' } });
    await userEvent.click(inputCheck)
    await userEvent.click(chkterminos)
    expect(selectBtn.tagName).toMatch('INPUT')
    expect(inputDocument.tagName).toMatch('INPUT')
    expect(inputCheck.tagName).toMatch('INPUT')
    expect(chkterminos.tagName).toMatch('INPUT')
    const btnDisabled = screen.getByTestId('btn-openAccount1');
    await waitFor(() => userEvent.click(btnDisabled));
    expect(router.push).toHaveBeenCalledWith(routes.authentication);

  })

});
