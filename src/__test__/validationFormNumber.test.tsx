import { render } from '@testing-library/react';
import React from 'react'
import { ValidationFormNumber } from '../components/ui/Form/validationFormNumber';
import { questionsPhone } from './__mocks__/DataQuestions';

describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<ValidationFormNumber questions={questionsPhone} />);
    expect(baseElement).toBeTruthy();
  });

});
