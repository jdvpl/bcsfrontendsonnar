import { render } from '@testing-library/react';
import Close from '../components/svg/Close';
import React from 'react'

describe('Close', () => {
  test('should render "Close" successfully', () => {
    const { baseElement } = render(<Close />);
    expect(baseElement).toBeTruthy();
  });

});
