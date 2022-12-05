import { render } from '@testing-library/react';
<<<<<<< HEAD:src/__test__/Close.test.tsx
=======
import Close from '../../../../components/svg/Close';
>>>>>>> f130e99ff91745022fb5520f79eb51d3b10f8b58:src/__test__/components/ui/svg/Close.test.tsx
import React from 'react'
import Close from '../components/svg/Close';

describe('Close', () => {
  test('should render "Close" successfully', () => {
    const { baseElement } = render(<Close />);
    expect(baseElement).toBeTruthy();
  });

});
