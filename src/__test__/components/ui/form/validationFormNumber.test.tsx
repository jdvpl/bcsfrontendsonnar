import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import { ValidationFormNumber } from '../../../../components/ui/Form/validationFormNumber';
import { questionsPhone } from '../../../__mocks__/DataQuestions';
import '@testing-library/jest-dom'

describe('Terminos', () => {
  test('should render "Terminos" successfully', () => {
    const { baseElement } = render(<ValidationFormNumber questions={questionsPhone} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the form', () => {
    // Arrange
    const questions = {
      description: 'test question',
      options: [{ id: 1, option: 'test option' }]
    };

    // Act
    const { getByText } = render(<ValidationFormNumber questions={questions} />);

    // Assert
    expect(getByText('test question')).toBeInTheDocument();
    expect(getByText('test option')).toBeInTheDocument();
  });


});
