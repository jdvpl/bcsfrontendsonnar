import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Description } from '../components/biometria/description';

describe('Visibility of the Description Biometry', () => {
  it('render Description component ', async () => {
    render(<Description />);
    const component = screen.getByTestId(`descripcion-biometrica`);
    expect(component).toBeInTheDocument();
  });
});
