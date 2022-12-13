import { render } from '@testing-library/react';
import React from 'react'
import HeadingError from '../../../../components/ui/error/heading';

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<HeadingError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
