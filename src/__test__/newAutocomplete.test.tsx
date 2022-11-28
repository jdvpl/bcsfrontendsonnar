import { render } from '@testing-library/react';
import NewAutoComplete from '../components/ui/inputs/newAutoComplete';
import React, { useState } from 'react'

describe('newAutoComplete', () => {
  const initialBorder = '#B0C2CD';

  test('should render "newAutoComplete" successfully', () => {
    const { baseElement } = render(<NewAutoComplete />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the value of color', () => {
    const { baseElement } = render(<NewAutoComplete />);
    React.useState = jest.fn().mockReturnValue([initialBorder, {}])
    expect(baseElement.classList.length).toBe(0)
  })

});
