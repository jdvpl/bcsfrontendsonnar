import { render } from '@testing-library/react';
import Modal from '../../../../components/ui/Modal';
import React from 'react'

const mkFn = jest.fn()
describe('Modal', () => {
  test('should render "Modal" successfully', () => {
    const { baseElement } = render(<Modal showModal={true} onClose={mkFn} />);
    expect(baseElement).toBeTruthy();
  });

});
