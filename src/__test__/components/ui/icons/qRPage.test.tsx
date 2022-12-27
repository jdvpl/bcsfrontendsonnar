import { render } from '@testing-library/react';
import React from 'react'
import QRPage from '../../../../components/icons/errorQR';

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<QRPage />);
    expect(baseElement).toBeTruthy();
  });
});
