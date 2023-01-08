import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react';
import { ApplicationLoader } from '../../../../components/ui/Loaders/ApplicationLoader';

describe('ImageLoader', () => {
  test('should render "ImageLoader" successfully', () => {
    const { baseElement } = render(<ApplicationLoader />);
    expect(baseElement).toBeTruthy();
  });
});
