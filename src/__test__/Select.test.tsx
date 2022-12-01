import { render } from '@testing-library/react';
import React from 'react'
import Select from '../components/ui/Select';

describe('Select', () => {
  test('should render "Select" successfully', () => {
    const { baseElement } = render(<Select label="" placeholder="" />);
    expect(baseElement).toBeTruthy();
  });

});
