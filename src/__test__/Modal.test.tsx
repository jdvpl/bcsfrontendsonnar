import { render } from '@testing-library/react';
import React from 'react'
import Modal from '../components/ui/Modal';

const mkFn = jest.fn()
describe('Modal', () => {
  test('should render "Modal" successfully', () => {
    const { baseElement } = render(<Modal showModal onClose={mkFn} />);
    expect(baseElement).toBeTruthy();
  });

});
