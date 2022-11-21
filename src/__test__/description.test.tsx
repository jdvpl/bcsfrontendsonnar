import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Description } from '../components/biometria/description';

describe('Visibility of subtitle', () => {
  it('the subtitle visible ', async () => {
    render(<Description />);
    const title = screen.getByText(/Tenga en cuenta estos consejos:/i);
    expect(title).toBeInTheDocument();
  });
});
