import { render } from '@testing-library/react';
import React from 'react'
import Input from '../../../../components/ui/inputs';

describe('Input', () => {
  test('should render "Input" successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });

});
