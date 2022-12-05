import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/Input.test.tsx
=======
import Input from '../../../../components/ui/inputs';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/inputs/Input.test.tsx
import React from 'react'
import Input from '../components/ui/inputs';

describe('Input', () => {
  test('should render "Input" successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });

});
