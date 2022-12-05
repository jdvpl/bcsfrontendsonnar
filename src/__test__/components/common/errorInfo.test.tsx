import { render } from '@testing-library/react';
import { ErrorInfo } from '../../../components/commons/ErrorInfo';
import React from 'react'

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ErrorInfo example="Hola" />);
    expect(baseElement).toBeTruthy();
  });
});
