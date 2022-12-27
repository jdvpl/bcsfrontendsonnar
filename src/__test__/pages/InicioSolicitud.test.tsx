import { waitFor, render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react'
import InicioSolicitud from '../../pages/inicio-solicitud';
import { createMockRouter } from '../utils/createMockRouter';

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
  test('should go To pre login', async () => {
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
    await await waitFor(() => userEvent.click(chkterminos))
    expect(selectBtn.tagName).toMatch('INPUT')
    expect(inputDocument.tagName).toMatch('INPUT')
    expect(inputCheck.tagName).toMatch('INPUT')
    expect(chkterminos.tagName).toMatch('INPUT')
    const btnDisabled = screen.getByTestId('btn-openAccount1');
    await waitFor(() => userEvent.click(btnDisabled));
    // expect(router.push).toHaveBeenCalledWith(routes.authentication);
  })
  test('should test the valid Document', async () => {
    const router = createMockRouter({});
    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    render(
      <RouterContext.Provider value={router}>
        <InicioSolicitud />
      </RouterContext.Provider>
    );
    const selectBtn = document.getElementsByName("document_type")[0];
    const inputDocument = screen.getByTestId('inputDocument');
    const inputCheck = screen.getByTestId('chk_policy_and_terms');
    const chkterminos = screen.getByTestId('chkterminos');
    fireEvent.input(selectBtn, { target: { value: 'CE' } });
    fireEvent.input(inputDocument, { target: { value: '123' } });
    fireEvent.paste(inputDocument, "data");
    fireEvent.change(inputDocument, { target: { value: '1234' } });
    await userEvent.click(inputCheck)
    await userEvent.click(chkterminos)
    const paragraphRole = screen.queryByRole('paragraph');
    const politicsTestSpan = screen.getByTestId('politicsTestSpan');
    await userEvent.click(politicsTestSpan);
    fireEvent.keyDown(politicsTestSpan, {
      key: 'ENTER',
      code: 13
    });
    const commercialTermsTest = screen.getByTestId('commercialTermsTest');
    await userEvent.click(commercialTermsTest);
    fireEvent.keyDown(commercialTermsTest, {
      key: 'ENTER',
      code: 13
    });
    const modalDataTest = screen.queryByTestId('modalDataTest');
    const btncloseModal = screen.getByTestId('btn-close');
    await userEvent.click(btncloseModal);
    expect(setState).toHaveBeenCalledTimes(14)

  })

});
