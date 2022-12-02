import { render } from '@testing-library/react';
import { ErrorLayout } from '../../../components/layouts/errorLayout';
import React from 'react'

describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <ErrorLayout>
        <h1>Hola Prueba</h1>
      </ErrorLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
