import { render } from '@testing-library/react';
import Input from '../components/ui/inputs';
import React from 'react'

describe('Input', () => {
  test('should render "Input" successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });

});
