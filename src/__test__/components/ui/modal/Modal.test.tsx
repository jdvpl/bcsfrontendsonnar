import { render } from '@testing-library/react';
import React from 'react'
import Modal from '../../../../components/ui/Modal';
import '@testing-library/jest-dom'

const mkFn = jest.fn()
describe('Modal', () => {
  test('should render "Modal" successfully', () => {
    const { baseElement } = render(<Modal showModal onClose={mkFn} />);
    expect(baseElement).toBeTruthy();
  });
  test('should render "Modal" successfully', () => {
    const { queryByTestId } = render(<Modal showModal={false} onClose={mkFn} />);
    const modal = queryByTestId('modalDataTest')
    expect(modal!).toBeInTheDocument();
  });

});
