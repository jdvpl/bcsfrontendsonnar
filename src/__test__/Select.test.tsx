import { render } from '@testing-library/react';
import Select from '../components/ui/Select';
import React from 'react'

describe('Select', () => {
  test('should render "Select" successfully', () => {
    const { baseElement } = render(<Select label={''} placeholder={''} />);
    expect(baseElement).toBeTruthy();
  });

});
