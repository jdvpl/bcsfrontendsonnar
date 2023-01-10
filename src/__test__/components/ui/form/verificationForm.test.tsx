import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import VerificationForm from '../../../../components/ui/Form/verificationForm';

const mkFn = jest.fn()
describe('<VerificationForm/>', () => {
  test('should render "VerificationForm" successfully', () => {
    const { baseElement } = render(<VerificationForm onSubmit={mkFn} />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "VerificationForm" successfully', () => {
    const { getByTestId } = render(<VerificationForm onSubmit={mkFn} />);
    const inputPassword = getByTestId('input-password');
    fireEvent.click(inputPassword)
  });
  test('should render "VerificationForm" button', () => {
    const { getByTestId } = render(<VerificationForm onSubmit={mkFn} />);
    const inputPass = document.getElementsByName("password")[0];
    const btnSubmit = getByTestId('btn-save-data');
    const togglePasword = getByTestId('togglePasword')
    fireEvent.input(inputPass, { target: { value: 'Testa365' } })
    fireEvent.click(togglePasword)
    fireEvent.mouseDown(togglePasword)
    fireEvent.click(btnSubmit)
  });
  test('should render "VerificationForm" button with input blanck', () => {
    const { getByTestId } = render(<VerificationForm onSubmit={mkFn} />);
    const inputPass = document.getElementsByName("password")[0];
    const btnSubmit = getByTestId('btn-save-data');
    const togglePasword = getByTestId('togglePasword')
    fireEvent.input(inputPass, { target: { value: '' } })
    fireEvent.click(togglePasword)
    fireEvent.mouseDown(togglePasword)
    fireEvent.click(btnSubmit)
  });
  test('should find a tag h2', () => {
    const { queryByTestId } = render(<VerificationForm onSubmit={mkFn} />);
    expect(queryByTestId('typographyTest')).toBeInTheDocument()
  })


});
