import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import VerificationForm from '../../../../components/ui/Form/verificationForm';

const mkFn = jest.fn()
describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<VerificationForm onSubmit={mkFn} />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "Terminos" successfully', () => {
    const { getByTestId } = render(<VerificationForm onSubmit={mkFn} />);
    const inputPassword = getByTestId('input-password');
    fireEvent.click(inputPassword)
  });

});
