import 'jest-canvas-mock';
import { render } from '@testing-library/react';
import Authentication from '../pages/autenticacion';
import React from 'react'

describe('Authentication', () => {
  test('should render "Authentication" successfully', () => {
    const { baseElement } = render(<Authentication />);
    expect(baseElement).toBeTruthy();
  });

});
