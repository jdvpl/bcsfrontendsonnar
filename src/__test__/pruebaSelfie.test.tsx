import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
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
