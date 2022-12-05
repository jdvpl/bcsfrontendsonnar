import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/Loaders.test.tsx
=======
import { OTLoader } from '../../../../components/ui/Loaders/OTPloader';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/loaders/Loaders.test.tsx
import React from 'react'
import { OTLoader } from '../components/ui/Loaders/OTPloader';

describe('OTLoader', () => {
  test('should render "OTLoader" successfully', () => {
    const { baseElement } = render(<OTLoader />);
    expect(baseElement).toBeTruthy();
  });

});
