import { render } from '@testing-library/react';
import React from 'react'
import ErrorLayout from '../../../components/layouts/errorLayout';

describe('ErrorLayout', () => {
  test('should render ErrorLayout successfully', () => {
    const { baseElement } = render(
      <ErrorLayout>
        <h1>Hola Prueba</h1>
      </ErrorLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
