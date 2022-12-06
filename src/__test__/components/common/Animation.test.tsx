import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import React from 'react'
import { render, screen } from '@testing-library/react';
import Animation from '../../../components/commons/Animation';

describe('Visibility animation', () => {
  it('appear success message', async () => {
    render(<Animation show="block" loaded valid />);
    const successMessage = screen.getByTestId('success-message');
    expect(successMessage).toBeInTheDocument();
  });
  it('appear loading message', async () => {
    render(<Animation show="block" loaded={false} valid={false} />);
    const loadingMessage = screen.getByTestId('loading-message');
    expect(loadingMessage).toBeInTheDocument();
  });
});
