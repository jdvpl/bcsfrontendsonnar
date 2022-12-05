import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/Modal.test.tsx
=======
import Modal from '../../../../components/ui/Modal';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/modal/Modal.test.tsx
import React from 'react'
import Modal from '../components/ui/Modal';

const mkFn = jest.fn()
describe('Modal', () => {
  test('should render "Modal" successfully', () => {
    const { baseElement } = render(<Modal showModal onClose={mkFn} />);
    expect(baseElement).toBeTruthy();
  });

});
