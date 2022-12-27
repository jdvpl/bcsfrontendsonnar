import { render } from '@testing-library/react';
import React from 'react'
import ErrorImageValidation from '../../../../components/icons/errorImageValidation';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<ErrorImageValidation />);
    expect(baseElement).toBeTruthy();
  });
});
