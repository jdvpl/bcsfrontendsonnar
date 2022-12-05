import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/pruebaSelfie.test.tsx
=======
import PhotoLiveSelfiePage from '../../../components/biometria/prueba_selfie';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/biometria/pruebaSelfie.test.tsx
import React from 'react';
import PhotoLiveSelfiePage from '../components/biometria/prueba_selfie';

describe('Visibility of the Selfie', () => {
  it('render selfie component ', async () => {
    render(<PhotoLiveSelfiePage />);
    const component = screen.getByTestId(`selfie`);
    expect(component).toBeInTheDocument();
  });
});
describe('Action for take photo', () => {
  it('render functionality ', async () => {
    render(<PhotoLiveSelfiePage />);
    const component = screen.getByTestId(`selfie`);
    expect(component).toBeInTheDocument();
  });
});
