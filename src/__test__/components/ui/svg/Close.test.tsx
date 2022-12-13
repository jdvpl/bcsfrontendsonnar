import { render } from '@testing-library/react';
import React from 'react'
import Close from '../../../../components/svg/Close';

describe('Close', () => {
  test('should render "Close" successfully', () => {
    const { baseElement } = render(<Close />);
    expect(baseElement).toBeTruthy();
  });

});
