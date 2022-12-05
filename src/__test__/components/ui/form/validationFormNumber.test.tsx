import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/validationFormNumber.test.tsx
import React from 'react'
import { ValidationFormNumber } from '../components/ui/Form/validationFormNumber';
import { questionsPhone } from './__mocks__/DataQuestions';

=======
import { ValidationFormNumber } from '../../../../components/ui/Form/validationFormNumber';
import React from 'react'
import { questionsPhone } from '../../../__mocks__/DataQuestions';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/form/validationFormNumber.test.tsx
describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<ValidationFormNumber questions={questionsPhone} />);
    expect(baseElement).toBeTruthy();
  });

});
