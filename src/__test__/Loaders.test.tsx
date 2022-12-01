import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react'
import { OTLoader } from '../components/ui/Loaders/OTPloader';

describe('OTLoader', () => {
  test('should render "OTLoader" successfully', () => {
    const { baseElement } = render(<OTLoader />);
    expect(baseElement).toBeTruthy();
  });

});
