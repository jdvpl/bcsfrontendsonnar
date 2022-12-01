import { render } from '@testing-library/react';
import React from 'react'
import { HelperText } from '../components/ui/inputs/HelperText';

describe('HelperText', () => {
  test('should render "HelperText" successfully', () => {
    const { baseElement } = render(<HelperText text="" error={false} />);
    expect(baseElement).toBeTruthy();
  });

});
