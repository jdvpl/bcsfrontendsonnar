import { render } from '@testing-library/react';
import DocumentPage from '../components/biometria/prueba_document';
import React from 'react'

describe('prueba_document', () => {
  test('should render "prueba_document" successfully', () => {
    const { baseElement } = render(<DocumentPage />);
    expect(baseElement).toBeTruthy();
  });

});
