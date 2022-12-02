import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DocumentPage from '../../../components/biometria/prueba_document';

describe('Visibility of the Document', () => {
  it('render document component ', async () => {
    render(<DocumentPage />);
    const component = screen.getByTestId(`document_photo`);
    expect(component).toBeInTheDocument();
  });
});
describe('Action for take photo', () => {
  it('render functionality ', async () => {
    render(<DocumentPage />);
    const component = screen.getByTestId(`document_photo`);
    expect(component).toBeInTheDocument();
  });
  test('should render "prueba_document" successfully', () => {
    const { baseElement } = render(<DocumentPage />);
    expect(baseElement).toBeTruthy();
  })
});
