import { render } from '@testing-library/react';
import Politicas from '../../../components/commons/Politicas';
import React from 'react'
describe('Politicas', () => {
  test('should render "Politicas" successfully', () => {
    const { baseElement } = render(<Politicas />);
    expect(baseElement).toBeTruthy();
  });

});
