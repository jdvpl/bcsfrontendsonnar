import { render } from '@testing-library/react';
import React from 'react'
import Advisory from '../../../components/commons/Advisory';

describe('Advisory', () => {
  test('should render Advisory successfully', () => {
    const { baseElement } = render(<Advisory />);
    expect(baseElement).toBeTruthy();
  });
});