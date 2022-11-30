import { render } from '@testing-library/react';
import Bienvenida from '../pages/bienvenida';
import React from 'react'

describe('Bienvenida', () => {
  test('should render "Bienvenida" successfully', () => {
    const { baseElement } = render(<Bienvenida />);
    expect(baseElement).toBeTruthy();
  });

});
