import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/ImageLoader.test.tsx
=======
import ImageLoader from '../../../../components/ui/Loaders/imageLoader';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/loaders/ImageLoader.test.tsx
import React from 'react'
import ImageLoader from '../components/ui/Loaders/imageLoader';

describe('ImageLoader', () => {
  test('should render "ImageLoader" successfully', () => {
    const { baseElement } = render(<ImageLoader src="" />);
    expect(baseElement).toBeTruthy();
  });

});
