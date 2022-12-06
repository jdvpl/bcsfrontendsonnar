import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import { OTLoader } from '../../../../components/ui/Loaders/OTPloader';
import React from 'react'

describe('OTLoader', () => {
  test('should render "OTLoader" successfully', () => {
    const { baseElement } = render(<OTLoader />);
    expect(baseElement).toBeTruthy();
  });

});
