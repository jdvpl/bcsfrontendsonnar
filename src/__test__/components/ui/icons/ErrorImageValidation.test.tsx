import { render } from '@testing-library/react';
import ErrorImageValidation from '../../../../components/icons/errorImageValidation';
import React from 'react'

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ErrorImageValidation />);
    expect(baseElement).toBeTruthy();
  });
});
