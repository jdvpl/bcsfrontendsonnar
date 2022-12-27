import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react'
import { MessageError } from '../../../../components/ui/inputs/messageError';

describe('MessageError', () => {
  test('should render "MessageError" successfully', () => {
    const { baseElement } = render(<MessageError message="" />);
    expect(baseElement).toBeTruthy();
  });
});
