import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/TextArea.test.tsx
=======
import { TextArea } from '../../../../components/ui/inputs/TextArea';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/inputs/TextArea.test.tsx
import React from 'react'
import { TextArea } from '../components/ui/inputs/TextArea';

describe('TextArea', () => {
  test('should render "TextArea" successfully', () => {
    const { baseElement } = render(<TextArea />);
    expect(baseElement).toBeTruthy();
  });

});
