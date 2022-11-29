import { render } from '@testing-library/react';
import { HeadingError } from '../components/ui/error/heading';
import React from 'react'

describe('HeadingError', () => {
  test('should render "HeadingError" successfully', () => {
    const { baseElement } = render(<HeadingError children={undefined} />);
    expect(baseElement).toBeTruthy();
  });

});
