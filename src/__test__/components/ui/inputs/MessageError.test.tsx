import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/MessageError.test.tsx
=======
import { MessageError } from '../../../../components/ui/inputs/messageError';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/inputs/MessageError.test.tsx
import React from 'react'
import { MessageError } from '../components/ui/inputs/messageError';

describe('MessageError', () => {
  test('should render "MessageError" successfully', () => {
    const { baseElement } = render(<MessageError message="" />);
    expect(baseElement).toBeTruthy();
  });
});
