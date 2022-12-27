import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ValidationMessageBiometry from '../../../components/biometria/error-validacion';

describe('Visibility in error biometry', () => {
  beforeEach(() => {
    render(<ValidationMessageBiometry />);
  });

  it('appear component', async () => {
    const component = screen.getByTestId(/error-biometria/i);
    expect(component).toBeInTheDocument();
  });
});
