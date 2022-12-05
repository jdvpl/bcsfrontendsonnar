import { render } from '@testing-library/react';
import { QRPage } from '../../../../components/icons/errorQR';
import React from 'react'
describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<QRPage />);
    expect(baseElement).toBeTruthy();
  });
});
