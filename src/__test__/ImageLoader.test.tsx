import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import React from 'react'
import ImageLoader from '../components/ui/Loaders/imageLoader';

describe('ImageLoader', () => {
  test('should render "ImageLoader" successfully', () => {
    const { baseElement } = render(<ImageLoader src="" />);
    expect(baseElement).toBeTruthy();
  });

});
