import { render } from '@testing-library/react';
import NewAutoComplete from '../components/ui/inputs/newAutoComplete';
import React from 'react'

describe('Terminos', () => {
  test('should render "newAutoComplete" successfully', () => {
    const { baseElement } = render(<NewAutoComplete />);
    expect(baseElement).toBeTruthy();
  });

});
