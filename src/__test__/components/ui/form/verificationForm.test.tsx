import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/verificationForm.test.tsx
=======
import VerificationForm from '../../../../components/ui/Form/verificationForm';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/form/verificationForm.test.tsx
import React from 'react'
import VerificationForm from '../components/ui/Form/verificationForm';

const mkFn = jest.fn()
describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<VerificationForm onSubmit={mkFn} />);
    expect(baseElement).toBeTruthy();
  });

});
