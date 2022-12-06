import { render } from '@testing-library/react';
import { HelperText } from '../../../../components/ui/inputs/HelperText';
import React from 'react'

describe('HelperText', () => {
  test('should render "HelperText" successfully', () => {
    const { baseElement } = render(<HelperText text="" error={false} />);
    expect(baseElement).toBeTruthy();
  });

});
