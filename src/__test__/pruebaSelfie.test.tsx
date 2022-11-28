import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import PhotoLiveSelfiePage from '../components/biometria/prueba_selfie';
import React from 'react';
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
