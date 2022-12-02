import { render } from '@testing-library/react';
import VerificationForm from '../../../../components/ui/Form/verificationForm';
import React from 'react'

const mkFn = jest.fn()
describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<VerificationForm onSubmit={mkFn} />);
    expect(baseElement).toBeTruthy();
  });

});
