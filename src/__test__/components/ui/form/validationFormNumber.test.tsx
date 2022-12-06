import { render } from '@testing-library/react';
import { ValidationFormNumber } from '../../../../components/ui/Form/validationFormNumber';
import React from 'react'
import { questionsPhone } from '../../../__mocks__/DataQuestions';
describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<ValidationFormNumber questions={questionsPhone} />);
    expect(baseElement).toBeTruthy();
  });

});
